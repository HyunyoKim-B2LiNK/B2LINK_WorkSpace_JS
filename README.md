:kr:**B2LINK_WorkSpace_JS**
===================

* B2LINK Service를 위한 Base Framework
* 개발 환경
 * MongoDB
 * NodeJS
 * HTTPServer_MongoDB_API - not express
 * HTML5, JS, LESS, CSS


-------------
파일 설명
-------------

#### :file_folder: *.zip
 - 각 폴더에 들어있는 node_modules.zip과 bin.zip은 압축을 풀어준다.
 - 압축푼 후 소스 동기화 시 zip에 해당한 파일들은 git의 .gitignore 설정에 의거해서 Commit이 되지 않는다.

> **Note:**
> - 차후 필요에 의한 동기화 기능 추가 가능함

-------------
폴더 설명
-------------

#### :open_file_folder: _Coding_Convention
 - 코딩 규칙 문서폴더


#### :open_file_folder: _Description
 - 폴더별 상세 설명 문서가 들어있는 폴더


#### :open_file_folder: _Tool
 - 개발에 사용되는 툴들에 대한 설명이 들어있는 폴더
 * 종류
  * IDE
  * Database
  * Platform


#### :open_file_folder: bin
 - 필요한 포괄적인 Build Script가 생성될 예정
 - 현재 만들어진 Build Script는 없다.


#### :open_file_folder: DataBase
 - MongoDB의 실제 db 파일들이 존재하는 폴더
 - bin.zip 압축 해제 한다.


#### :open_file_folder: DataBase_Schema
 - WorkSpace
 - MongoDB의 Schema 및 Procedure를 개발하는 Workspace
 - MongoDB의 Procedure가 주를 이룬다.

> **Note:**
> - DataBase_Schema/******/bin에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.
> - DataBase_Schema/******/bin에 있는 BatchFile 구동을 통해 MongoDB에 추가된다.


#### :open_file_folder: HTTPServer_MongoDB(NodeJS)
 - MongoDB의 데이터 서비스 Server
 - HTTPServer_MongoDB/******/bin에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.


#### :open_file_folder: HTTPServer_WebPage(NodeJS)
 - WebPage/******/를 서비스 하는 HTTPServer
 - NodeJS - Express 기반이다.


#### :open_file_folder: MongoDB
 - MongoDB의 Binary들이 모여있는 폴더

 - 사용 버전

> **Note:**
> - 3.2.10_x64
> - 3.2.11_x64


#### :open_file_folder: WebPage
 - Client Web Page 다.

> **Note:**
> - WebPage/******/bin에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.