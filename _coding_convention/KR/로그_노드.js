//----------------------------------------------------------------------------------------------------;

//	개발자별 로그 객체 생성 방법

//----------------------------------------------------------------------------------------------------;

@ NodeJS

	Application.js를 보면(Application은 정한 이름 또는 기타 시작하는 js 파일)

		global.RayLog = SUtilCommon.create_Console( "박종하" );
		global.Rh2Log = SUtilCommon.create_Console( "유선아" );
		global.TtwLog = SUtilCommon.create_Console( "송선우" );

	이런 구문이 존재함

		global.LJHLog = SUtilCommon.create_Console( "이재현" );
		global.RayLog = SUtilCommon.create_Console( "박종하" );
		global.Rh2Log = SUtilCommon.create_Console( "유선아" );
		global.TtwLog = SUtilCommon.create_Console( "송선우" );

	형태로 추가 해주면 됨.

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.TtwLog.error - 에러가 발생할 케이스에 사용

global.TtwLog.log - 로그 용

global.TtwLog.timeStamp - 시간이 찍히는 로그(차후 적용)

global.TtwLog.warn - 경고가 표시됨

//----------------------------------------------------------------------------------------------------;

//	NODEJS;

//----------------------------------------------------------------------------------------------------;

global.asd = function()
{
	//"-- 2개는 global.asd의 depth를 의미 한다.;
	global.TtwLog.timeStamp( "-- [ S ] - global.asd():void----------" );
	global.TtwLog.timeStamp( "-- [ E ] - global.asd():void----------" );
};

global.b2link.service.asd = function()
{
	//"---- 4개는 global.b2link.service.asd의 depth를 의미 한다.;
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.service.asd():void----------" );
	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.service.asd():void----------" );
};

//----------------------------------------------------------------------------------------------------;