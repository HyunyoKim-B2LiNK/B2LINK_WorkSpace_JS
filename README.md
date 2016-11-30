//----------------------------------------------------------------------------------------------------;

//	README.md;

//----------------------------------------------------------------------------------------------------;

B2LINK_WorkSpace_JS

//--------------------------------------------------;

@ *.zip
 - 각 폴더에 들어있는 node_modules.zip과 bin.zip은 압축을 풀어준다.
 - 압축푼 후 소스 동기화 시 zip에 해당한 파일들은 git의 .gitignore 설정에 의거해서 Commit이 되지 않는다.
  . 차후 필요에 의한 동기화 기능 추가 가능함

//--------------------------------------------------;


@ _Coding_Convention;
 - 코딩 규칙 문서폴더


@ _Description
 - 폴더별 상세 설명 문서가 들어있는 폴더


@ _Tool
 - 개발에 사용되는 툴들에 대한 설명이 들어있는 폴더


@ bin


@ DataBase
 - MongoDB의 실제 db 파일들이 존재하는 폴더

 - bin.zip 압축 해제 한다.


@ DataBase_Schema
 - WorkSpace
 - MongoDB의 Schema 및 Procedure를 개발하는 Workspace
 - MongoDB의 Procedure가 주를 이룬다.

 - DataBase_Schema/B2LINK/bin에 있는 BatchFile 구동을 통해 MongoDB에 추가된다.


@ HTTPServer_MongoDB
 - MongoDB의 데이터 서비스 Server


@ HTTPServer_WebPage
 - WebPage를 서비스 하는 Server


@ MongoDB
 - MongoDB의 Binary들이 모여있는 폴더


@ WebPage
 - Client Web Page 다.
 - bin에 있는 명령어 파일로 몇몇 작동을 시킨다.