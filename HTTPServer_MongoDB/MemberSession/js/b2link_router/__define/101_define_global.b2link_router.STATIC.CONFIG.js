//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/__define/101_define_global.b2link_router.STATIC.CONFIG.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var $g = global;

var _ = "";

//--------------------------------------------------[ S ] - global.b2link_router.STATIC.CONFIG;

$g.b2link_router.CONFIG = {};

global.TtwLog.timeStamp( "--------------------------------------------------[ S ] - global.b2link_router.STATIC.CONFIG.URL" );
$g.b2link_router.CONFIG.URL = {};
$g.b2link_router.CONFIG.URL._COMMON = "http://localhost:49320/";

$g.b2link_router.CONFIG.URL.MEMBER = {};
$g.b2link_router.CONFIG.URL.MEMBER.COMMON = $g.b2link_router.CONFIG.URL._COMMON + "member/";

$g.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION = {};
$g.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON = $g.b2link_router.CONFIG.URL.MEMBER.COMMON + "member_session/";
_ = $g.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON;
$g.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION = _ + "checkSession?";
$g.b2link_router.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION = _ + "destroySession";
global.TtwLog.timeStamp( "--------------------------------------------------[ E ] - global.b2link_router.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - global.b2link_router.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//--------------------------------------------------------------------------------------------------;
