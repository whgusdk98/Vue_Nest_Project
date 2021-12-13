# 실행 방법


## 1. frontend
```
npm start serve
```
## 2. backend
```
npm start run
```

### **기본적으로 nodeJS,nestJS,vueJS 설치와 CORS 설정이 되어있어야 Chrome 브라우저로 실행가능합니다.

### - NodeJS 설치

### - NestJS 설치
```
npm i -g @nestjs/cli
```
nest 설치 명령어 안될 경우: https://singa-korean.tistory.com/21 참고

### - VueJS 설치
```
npm install -g @vue/cli
```

### - CORS 설정
Chrome 브라우저에서 Server API를 받아서 만든 앱을 실행하는 경우 <br>
CORS(Cross Origin Resource Sharing) error를 발생 -> Chrome 브라우저 실행시 보안 기능을 끄기

1. Terminal을 실행
2. Chrome.exe가 있는 폴더로 이동 ex) cd C:\Program Files\Google\Chrome\Application
3. chrome.exe --disable-web-security --user-data-dir=C:\Temp 를 실행
