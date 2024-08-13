# React.js side project FrontEnd ( StyledComponents + geolocation api + openweathermap api + redux )

**Summary : 회원가입 + 로그인 + 소개 + 방명록**

## Project Demo
![blog1](https://github.com/user-attachments/assets/720c27af-2443-492e-b168-a4bcbe7fc2ce)
![blog7](https://github.com/user-attachments/assets/1855370b-d6a2-4562-93b4-f0b28d3b4174)
- ### 메인화면
   - git 아이콘을 클릭시 저의 레포지토리로 이동합니다.
   - contact me 아이콘을 클릭시 메일을 보낼 수 있는 모달이 나타납니다. 해당 입력창에는 로그인된 사람의 기본 이메일 주소가 써져있고 수정도 가능합니다. 내용을 작성하고 메일을 발송하면 연결되있는 제 계정으로 메일이 발송됩니다.

![blog2](https://github.com/user-attachments/assets/c539b47c-c6dc-406d-9fa1-dd2de7ff895e)
- ### 기술스택 화면

![blog3](https://github.com/user-attachments/assets/b308be9d-90c7-41db-997b-e1a3dd533ad9)
![blog6](https://github.com/user-attachments/assets/2cd4c61e-4f89-423b-8d77-1a9e05d3acd5)
- ### 방명록 화면
   - 해당 화면은 간단한 방명록을 작성하고 저장할 수 있는 페이지입니다.
   - 글을 작성하려면 로그인이 된 상태여야 하며, 로그아웃 상태라면 메세지창과 함께 로그인 화면으로 이동이 됩니다.
   - 로그인을 한 후 글 작성하기를 클릭 시 글을 작성할 수 있는 폼이 나오며, 해당 폼안에 글을 작성할 수 있고, 회전을 통해 각도를 조정하고 저장을 할 수 있습니다.
   - 로그인된 계정으로 전에 작성한 글들에 경우 수정 또는 삭제가 가능합니다.
 
![blog8](https://github.com/user-attachments/assets/3157f670-48bc-4e0b-9527-41141621a9d2)
- ### 회원가입 화면
   - 회원가입을 할 수 있는 화면으로 서버와 axios로 통신해서 아이디의 중복체크, 인증메일을 보낼 수 있는 기능이 있습니다.
   - 아이디의 양식은 정규식을 통하여 검증을 하고 있고, 비밀번호 또한 정규식을 통해 양식을 검증하고 있습니다.
   - state를 활용하여 비밀번호가 같은지 체크하고 있습니다.
   - 회원가입을 클릭 시 모든필드의 값이 채워졌는지 양식에는 맞는지, 중복체크와 이메일인증은 하였는지 체크 후 이상이 없다면 axios 를 이용하여 서버와 통신, db에 데이터를 저장합니다.

![blog5](https://github.com/user-attachments/assets/f7edb703-96b5-406a-8930-c1fd45050def)
![blog4](https://github.com/user-attachments/assets/cdb272df-79ed-4240-a652-67de7a627287)
- ### 로그인 화면
  - 로그인에 성공하면 메인페이지로 이동하며, 회원가입시 작성한 닉네임과 해당 사용자의 ip를 통해 접속위치를 찾고 날씨정보를 아이콘으로 보여주도록 하고 있습니다.
  - 해당 페이지는 로그인기능이 있는 화면으로 비밀번호를 틀리거나 아이디가 존재하지 않을시 해당 사항에 맞는 메세지를 빨간색 글씨로 보여줍니다.
  - 아이디찾기에 회원가입시 입력했던 이메일을 입력시 가입한 아이디가 메세지창으로 나옵니다.
  - 비밀번호 찾기에 경우 찾고자 하는 아이디와 이메일을 입력시 해당 메일 주소로 임시비밀번호를 발송합니다. 임시비밀번호를 받은 사용자는 다음 로그인 시 비밀번호 변경 페이지로 이동하면 비밀번호를 변경할 수 있습니다.

## Features

- [x] 회원가입
- [x] 로그인
- [x] 방명록 작성
- [x] 방명록 글 작성위치 설정 기능
- [x] 사용가능한 기술 소개 
- [x] Email 인증
- [x] Contact me Email 전송

## 사용한 툴 

- Development tool : VsCode
- BackEnd : Java Spring Boot (JAVA 17)
- DB tool : MariaDB, heidiSql
