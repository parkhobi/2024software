x,y,a=[int(input(f"입력값{i}:")) for i in range (1,4)];
z=1;
for i in range(0,y):
    z=x*z;
z=z*1/a;
print("x의 y제곱한 값에 1/a를 제곱한 결과값은",z,"이다.")