import os
def re_search_ex1(*args):
    try:
        total_sum = 0
        for arg in args:
            # 정수형일 경우
            if isinstance(arg, int):
                total_sum += arg
            # 리스트나 튜플일 경우
            elif isinstance(arg, (list, tuple)):
                for item in arg:
                    # 내부 요소가 정수형일 경우에만 합산
                    if isinstance(item, int):
                        total_sum += item

        #파일에 저장
        with open("homework2.txt", "w") as file:
            file.write(str(total_sum))

        return total_sum

    except Exception as e:
        print("예외 발생:", e)
        return 0

# 사용자로부터 입력값 받기
try:
    inputs = input("정수형, 리스트 또는 튜플을 입력하세요: ").split()
    result = re_search_ex1(*map(eval, inputs))
    print("결과:", result)

except Exception as e:
    print("입력값 처리 중 오류 발생:", e)



