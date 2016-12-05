//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/101_define_window.b2link.STATIC.CONFIG.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var $w = window;

var _ = "";

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG;

//--------------------------------------------------;

//	;

//--------------------------------------------------;

$w.b2link.STATIC.CONFIG = {};

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG.URL" );

$w.b2link.STATIC.CONFIG.URL = {};
$w.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";
//$w.b2link.STATIC.CONFIG.URL.PROXY = "";
$w.b2link.STATIC.CONFIG.URL.SERVER = "http://localhost:49320/";

//--------------------------------------------------;

//	URL - UI;

//--------------------------------------------------;

$w.b2link.STATIC.CONFIG.URL.UI = {};
$w.b2link.STATIC.CONFIG.URL.UI.BASE = "./ui/";

//$w.b2link.STATIC.CONFIG.URL.UI.LOCALE = "cn";
$w.b2link.STATIC.CONFIG.URL.UI.LOCALE = "kr";
//$w.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";

_ = $w.b2link.STATIC.CONFIG.URL.UI.BASE;

$w.b2link.STATIC.CONFIG.URL.UI.B2LINK = _ + "b2link/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_API = _ + "b2link_api/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_BRAND = _ + "b2link_brand_basic/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_BANK_SWIFT_CN = _ + "b2link_bank_swift_cn/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_BANK_SWIFT_KR = _ + "b2link_bank_swift_kr/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_BANK_SWIFT_US = _ + "b2link_bank_swift_us/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_COUNTRY = _ + "b2link_country/";
//$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL = _ + "b2link_email/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_EMAIL_DETAIL = _ + "b2link_email_detail/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_MASHUP = _ + "b2link_mashup/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER = _ + "b2link_member/";

$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_BUYER = _ + "b2link_partner_buyer/";
//$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_DELIVERY = _ + "b2link_partner_delivery/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_LOGISTICS = _ + "b2link_partner_logistics/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_SUPPLIER = _ + "b2link_partner_supplier/";

$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_PRODUCT_BASIC = _ + "b2link_product_basic/";

$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_SCM = _ + "b2link_scm/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_SCRAP = _ + "b2link_scrap/";
$w.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION = _ + "b2link_session/";

$w.b2link.STATIC.CONFIG.URL.UI.test = _ + "test/";

//--------------------------------------------------;

//	URL - UI - CSS;

//--------------------------------------------------;

$w.b2link.STATIC.CONFIG.URL.UI.CSS = "";
//$w.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//$w.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//$w.b2link.STATIC.CONFIG.URL.UI.CSS = ".jui";
//$w.b2link.STATIC.CONFIG.URL.UI.CSS = ".semanticui";

//--------------------------------------------------;

//	URL - MONGODB;

//--------------------------------------------------;

$w.b2link.STATIC.CONFIG.URL.MONGODB = {};

$w.b2link.STATIC.CONFIG.URL.MONGODB.BRAND = {};
$w.b2link.STATIC.CONFIG.URL.MONGODB.BRAND_COMMON = $w.b2link.STATIC.CONFIG.URL.SERVER + "brand/";
_ = $w.b2link.STATIC.CONFIG.URL.MONGODB.BRAND_COMMON;
$w.b2link.STATIC.CONFIG.URL.MONGODB.BRAND.BASIC = _ + "brand_basic/";

$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC = {};
$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC_COMMON = $w.b2link.STATIC.CONFIG.URL.SERVER + "list_static/";
_ = $w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC_COMMON;
$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.BANK_SWIFT_KR = _ + "bank_swift_kr/";
$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.COUNTRY = _ + "country/";
//$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.EMAIL = _ + "email/";
$w.b2link.STATIC.CONFIG.URL.MONGODB.LIST_STATIC.EMAIL_DETAIL = _ + "email_detail/";

$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER = {};
$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON = $w.b2link.STATIC.CONFIG.URL.SERVER + "member/";
_ = $w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON;
$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.BASIC = _ + "member_basic/";
$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.PUBLIC = _ + "member_public/";
$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION = _ + "member_session/";
$w.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION_LOG = _ + "member_session_log/";

$w.b2link.STATIC.CONFIG.URL.MONGODB.PRODUCT = {};
$w.b2link.STATIC.CONFIG.URL.MONGODB.PRODUCT_COMMON = $w.b2link.STATIC.CONFIG.URL.SERVER + "product/";
_ = $w.b2link.STATIC.CONFIG.URL.MONGODB.PRODUCT_COMMON;
$w.b2link.STATIC.CONFIG.URL.MONGODB.PRODUCT.BASIC = _ + "product_basic/";

window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;