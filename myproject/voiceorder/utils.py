

import requests

def clova_speech_recognition(audio_data):
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt"
    headers = {
        "X-NCP-APIGW-API-KEY-ID": "ct1yjvm22n",
        "X-NCP-APIGW-API-KEY": "pd0zlyJZlUupWeXwXZrOgW5Sitq1oqNbzyLdD0ce",
        "Content-Type": "application/octet-stream"
    }

    params = {
        "lang": "Kor",  # 한국어로 설정
        "mode": "dialog"  # 장문 인식 모드 (연속 음성 인식)
    }


    # audio_data를 파일 데이터로 전송
    response = requests.post(url, headers=headers, params=params, data=audio_data)
    print(f"Clova API Response: {response.text}")

    if response.status_code == 200:
        return response.json().get('text')
    else:
        print(f"Error Code: {response.status_code}")
        return None

