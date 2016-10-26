//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/101_define_window.b2link.STATIC.CONFIG.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG;

var _ = "";
window.b2link.STATIC.CONFIG = {};

console.log( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG.URL" );
window.b2link.STATIC.CONFIG.URL = {};
window.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";
//window.b2link.STATIC.CONFIG.URL.PROXY = "";
window.b2link.STATIC.CONFIG.URL.SERVER = "http://localhost:49320/";
//------------------------------;
window.b2link.STATIC.CONFIG.URL.UI = {};
window.b2link.STATIC.CONFIG.URL.UI.BASE = "./ui/";
_ = window.b2link.STATIC.CONFIG.URL.UI.BASE;
window.b2link.STATIC.CONFIG.URL.UI.B2LINK = _ + "b2link/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_API = _ + "b2link_api/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_BRAND = _ + "b2link_brand/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_COUNTRY = _ + "b2link_country/";
//window.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL = _ + "b2link_email/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL_DETAIL = _ + "b2link_email_detail/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MASHUP = _ + "b2link_mashup/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER = _ + "b2link_member/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SCM = _ + "b2link_scm/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SCRAP = _ + "b2link_scrap/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION = _ + "b2link_session/";
window.b2link.STATIC.CONFIG.URL.UI.test = _ + "test/";

window.b2link.STATIC.CONFIG.URL.UI.CSS = "";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".semanticui";
//------------------------------;
window.b2link.STATIC.CONFIG.URL.MONGODB = {};

window.b2link.STATIC.CONFIG.URL.MONGODB.BRAND = {};
window.b2link.STATIC.CONFIG.URL.MONGODB.BRAND_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "brand/"
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.BRAND_COMMON; 
window.b2link.STATIC.CONFIG.URL.MONGODB.BRAND.BRAND_BASIC =  _ + "brand_basic/";

window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC = {};
window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "list_static/";
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC_COMMON;
window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.COUNTRY = _ + "country/";
//window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.EMAIL = _ + "email/";
window.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.EMAIL_DETAIL = _ + "email_detail/";


window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER = {};
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "member/";
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON;
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.BASIC = _ + "member_basic/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION = _ + "member_session/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION_LOG = _ + "member_session_log/";
//------------------------------;

//------------------------------;
console.log( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//--------------------------------------------------------------------------------------------------;
