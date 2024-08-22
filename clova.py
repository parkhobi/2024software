from flask import Flask, request, jsonify, render_template, send_from_directory
from utils import clova_speech_recognition
from difflib import get_close_matches
import mysql.connector  # MySQL 연결을 위한 모듈
import os

app = Flask(__name__)

# MySQL 데이터베이스 연결 설정
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",      # 데이터베이스 호스트
        user="root",           # 데이터베이스 사용자 이름
        password="0403",   # 데이터베이스 비밀번호
        database="menuDB"      # 데이터베이스 이름
    )

# 데이터베이스에서 메뉴 항목을 가져오는 함수
def fetch_menu_items():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM menuItems")
    menu_items = cursor.fetchall()
    cursor.close()
    db.close()
    return menu_items

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

@app.route('/process_audio', methods=['POST'])
def process_audio():
    audio_file = request.files['audio']
    audio_data = audio_file.read()

    recognized_text = clova_speech_recognition(audio_data)
    if recognized_text:
        menu_items = fetch_menu_items()  # 데이터베이스에서 메뉴 항목 가져오기
        response_action = process_voice_command(recognized_text, menu_items)
        return jsonify({'response': response_action})
    else:
        return jsonify({'error': 'Speech recognition failed'}), 500
    
@app.route('/api/menu_items')
def get_menu_items():
    menu_items = fetch_menu_items()  # 데이터베이스에서 메뉴 항목 가져오기
    return jsonify({'menu_items': menu_items})


def find_best_match(command, menu_items):
    command = command.replace(" ", "").strip()
    menu_names = [item['name'].replace(" ", "") for item in menu_items]
    best_matches = get_close_matches(command, menu_names, n=1, cutoff=0.4)
    return best_matches[0] if best_matches else None

def process_voice_command(command, menu_items):
    # 다양한 표현을 통일하여 "ICE" 및 "HOT"으로 변환
    command = command.replace("아주 차가운", "ICE").replace("차가운", "ICE").replace("시원한", "ICE").replace("아이스", "ICE")
    command = command.replace("따뜻한", "HOT").replace("뜨거운", "HOT").replace("핫", "HOT")
    
    # "달달한" 또는 "단" 단어가 포함된 경우 달달한 메뉴 추천
    if "달달한" in command or "단" in command:
        return 'show_sweet_recommendation'

    # 변환된 이름과 정확히 일치하는 메뉴 항목 찾기
    for item in menu_items:
        if command in item['name']:
            return f'select_menu_item|{item["name"]}'
    
    best_match = find_best_match(command, menu_items)
    
    if best_match:
        return f'select_menu_item|{best_match}'
    elif '포장' in command:
        return 'show_takeout_option'
    elif '매장' in command:
        return 'show_in_store_option'
    else:
        return 'unrecognized_command'

if __name__ == '__main__':
    app.run(debug=True)
