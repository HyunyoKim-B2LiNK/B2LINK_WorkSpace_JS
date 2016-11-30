//----------------------------------------------------------------------------------------------------;

window.TtwLog.error - 에러가 발생할 케이스에 사용(브라우저시 빨간색과 에러 아이콘 표시됨)

window.TtwLog.log - 로그 용

window.TtwLog.timeStamp - 시간이 찍히는 로그(차후 적용)

window.TtwLog.warn - 경고가 표시됨(브라우저시 노란색 아이콘이 표시됨)

//----------------------------------------------------------------------------------------------------;

global.TtwLog.error - 에러가 발생할 케이스에 사용

global.TtwLog.log - 로그 용

global.TtwLog.timeStamp - 시간이 찍히는 로그(차후 적용)

global.TtwLog.warn - 경고가 표시됨

//----------------------------------------------------------------------------------------------------;

@ ***.js별 파일 시작과 종료 로그

 - 파일 최상단
   . //----- 100개;
	//----------------------------------------------------------------------------------------------------;
	var fileNm = "템플릿_클래스.js";
	if( console ) console.log( "[ S ] - " + fileNm + "----------" );
	//----------------------------------------------------------------------------------------------------;


 - 파일 가장 하단
  . 사용하지 않는 케이스 존재함 - .js 그자체를 셀프 로딩하여 리턴 객체를 받는 로직의 함수일 경우 사용하지 않음.
	//----------------------------------------------------------------------------------------------------;
	if( console ) console.log( "[ E ] - " + fileNm + "----------" );
	//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

@ 함수

	window.asd = function()
	{
		global.TtwLog.timeStamp( "-- [ S ] - window.asd():void----------" );

		//함수 내용 정리;

		global.TtwLog.timeStamp( "-- [ E ] - window.asd():void----------" );
	};

	window.asd = function()
	{
		global.TtwLog.timeStamp( "-- [ S ] - window.asd():{Boolean}----------" );

		//함수 내용 정리;

		global.TtwLog.timeStamp( "-- [ E ] - window.asd():{Boolean}----------" );

		//return 위에 종료 로그를 찍는다.;
		//return Type를 알려준다.;
		return true;
	};

//----------------------------------------------------------------------------------------------------;

@ 클래스

	Template_Class - 템플릿_클래스.js 파일 참조

//----------------------------------------------------------------------------------------------------;