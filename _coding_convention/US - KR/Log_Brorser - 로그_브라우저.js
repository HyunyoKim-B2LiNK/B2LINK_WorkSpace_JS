//----------------------------------------------------------------------------------------------------;

//	개발자별 로그 객체 생성 방법

//----------------------------------------------------------------------------------------------------;

@ Browser
	index.js를 보면

		window.RayLog = SUtilCommon.create_Console( "박종하" );
		window.Rh2Log = SUtilCommon.create_Console( "유선아" );
		window.TtwLog = SUtilCommon.create_Console( "송선우" );

	이런 구문이 존재함

		window.LJHLog = SUtilCommon.create_Console( "이재현" );
		window.RayLog = SUtilCommon.create_Console( "박종하" );
		window.Rh2Log = SUtilCommon.create_Console( "유선아" );
		window.TtwLog = SUtilCommon.create_Console( "송선우" );

	형태로 추가 해주면 됨.

//----------------------------------------------------------------------------------------------------;

window.TtwLog.error - 에러가 발생할 케이스에 사용(브라우저시 빨간색과 에러 아이콘 표시됨)

window.TtwLog.log - 로그 용

window.TtwLog.timeStamp - 시간이 찍히는 로그(차후 적용)

window.TtwLog.warn - 경고가 표시됨(브라우저시 노란색 아이콘이 표시됨)

//----------------------------------------------------------------------------------------------------;

//	BROWSER;

//----------------------------------------------------------------------------------------------------;

window.asd = function()
{
	//"-- 2개는 window.asd의 depth를 의미 한다.;
	window.TtwLog.timeStamp( "-- [ S ] - window.asd():void----------" );
	window.TtwLog.timeStamp( "-- [ E ] - window.asd():void----------" );
};

window.b2link.service.asd = function()
{
	//"---- 4개는 window.b2link.service.asd의 depth를 의미 한다.;
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.service.asd():void----------" );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.service.asd():void----------" );
};

//----------------------------------------------------------------------------------------------------;