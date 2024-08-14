import requests

def clova_speech_recognition(audio_file_path):
    url = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=Kor"
    headers = {
        "X-NCP-APIGW-API-KEY-ID": "",
        "X-NCP-APIGW-API-KEY": "",
        "Content-Type": "application/octet-stream"
    }

    with open(audio_file_path, 'rb') as audio_file:
        audio_data = audio_file.read()
    
    # 로그 추가: 파일 데이터 크기 확인
    print(f"Debug: Audio file size is {len(audio_data)} bytes")

    if len(audio_data) == 0:
        print("Error: The audio file is empty")
        return None

    response = requests.post(url, data=audio_data, headers=headers)
    rescode = response.status_code

    if rescode == 200:
        return response.json().get('text')
    else:
        print("Error Code:", rescode)
        print("Error Message:", response.text)
        return None

