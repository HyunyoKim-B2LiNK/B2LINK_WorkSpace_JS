
//----------------------------------------------------------------------------------------------------;

//	brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var brand_basic$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var brand_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var brand_basic$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$getAllList_basic = function(){};

/**
 * Return 'CN' brand name list
 * @function
 * @return {Array} [ {nm_cn}, {nm_cn}, ... ]
 */

var brand_basic$getAllList_nm_cn = function(){};

/**
 * Return 'KR' brand name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */

var brand_basic$getAllList_nm_kr = function(){};

/**
 * Return 'US' brand name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */

var brand_basic$getAllList_nm_us = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * id (_id) 로 브랜드의 이름을 가져 온다.
 * @function
 * @param {uint} id brand id
 * @return {String}
 */

var brand_basic$getProp_NameFrom_id = function( id ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var brand_basic$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var brand_basic$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var brand_basic$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *  "_id$member_public" : 0
 *
 *	, "description" : ""
 *  , "description_cn" : ""
 *  , "description_kr" : ""
 *  , "description_us" : ""
 *
 *  , "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var brand_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var brand_basic$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var brand_basic$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var brand_basic$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var brand_basic$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var brand_basic$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	brand.brand_category;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	brand._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.country;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {uint} 0 or 1
 *
 * @example
 * email$addDoc( { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" } );
 */

var country$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {int} 0 or 1
 */
var country$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var country$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var country$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var country$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__check_Overlap = function( d ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__Document = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var country$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var country$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var country$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.email;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 *
 * @example
 * email$addDoc( { "SLD" : "b2link" ,"TLD" : "co.kr","ccTLD" : "kr" ,"gTLD" : "" ,"c" : "kr" } );
 */

var email_detail$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object { "SLD" : "b2link" ,"TLD" : "co.kr","ccTLD" : "kr" ,"gTLD" : "" ,"c" : "kr" }
 * @return {int} 0 or 1
 */
var email_detail$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var email_detail$findOne = function( d ){};

/**
 * @function
 * @param {String} SLD Second Level Domain
 * @return {Document}
 *
 * @example
 * email$findOne__SLD( "naver" );
 */
var email_detail$findOne__SLD = function( SLD ){};

/**
 * @function
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var email_detail$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var email_detail$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} email_detail
 * @return {uint} 0 or 1
 */

var email_detail$update_id = function( d ){};

/**
 * @function
 * @param {Array} d [ {email_detail}, {email_detail}, ... ]
 * @return {uint} 0 or 1
 */

var email_detail$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link" ,"TLD" : "co.kr","ccTLD" : "kr" ,"gTLD" : "" ,"c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link" ,"TLD" : "co.kr","ccTLD" : "kr" ,"gTLD" : "" ,"c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link" ,"TLD" : "co.kr","ccTLD" : "kr" ,"gTLD" : "" ,"c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var email_detail$validation__remove_id = function( n ){};

/**
 * delete rank, upw
 * @function
 * @param {Document} d
 */
var email_detail$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var email_detail$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var email_detail$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 *
 * @example
 * member_basic$addDoc( {"nm_us":{"f":"SunWoo","l":"Song","a":"SunWoo Song"},"email":"thdtjsdn@gmail.com","nm_kr":{"f":"선우","l":"송","a":"송선우"},"mid":"thdtjsdn@gmail.com","nm_cn":{"f":"","l":"","a":""},"nm":{"f":"선우","l":"송","a":"송선우"},"mpw":"123qweasd"} );
 */
var member_basic$addDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */
var member_basic$findOne = function( d ){};

/**
 * @function
 * @param {String} mid user ID
 * @return {Document}
 *
 * @example
 * member_basic$findOne__mid( "thdtjsdn@gmail.com" )' );
 */
var member_basic$findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} sid session id
 * @return {Object}
 */
var member_basic$findOne__sid = function( sid ){};

/**
 * @function
 * @param {uint} _id
 * @return {Document}
 *
 * @example
 * member_basic$findOne___id( 0 );
 */
var member_basic$findOne___id = function( _id ){};

/**
 * @function
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$getAllList = function(){};

/**
 * Return email list
 * @function
 * @return {Array} [ email, email, ... ]
 */
var member_basic$getAllList__email = function(){};

/**
 * Return name list
 * @function
 * @return {Array} [ {nm}, {nm}, ... ]
 */
var member_basic$getAllList__nm = function(){};

/**
 * Return 'CH' name list
 * @function
 * @return {Array} [ {nm_ch}, {nm_ch}, ... ]
 */
var member_basic$getAllList__nm_ch = function(){};

/**
 * Return 'KR' name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */
var member_basic$getAllList__nm_kr = function(){};

/**
 * Return 'US' name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */
var member_basic$getAllList__nm_us = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_basic$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_basic$remove_ids = function( ids ){};

/**
 * @function
 * @param {Array} ids
 */
var member_basic$remove_ids__AllCols = function( ids ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_basic$remove_id__AllCols = function( _id ){};

/**
 * @function
 * @param {Object} d { mid : "", mpw : "" }
 * @return {uint} 0, 1
 *
 * @example
 * member_basic$sign_in({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" });
 */
var member_basic$sign_in = function( d ){};

/**
 * @function
 * @param {Object} d { mid : "", mpw : "" }
 * @return {uint} 0, 1
 *
 * @example
 * member_basic$sign_up({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" });
 */
var member_basic$sign_up = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { "email" : "", ... }
 * @return {uint} 0, 1
 */
var member_basic$validation__email = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_basic$validation__remove_id = function( n ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 */
var member_basic$validation__sign_in = function( d ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 * @return {uint} 0 or 1
 */
var member_basic$validation__sign_up = function( d ){};

/**
 * @function
 * @param {Document} d { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @return {uint} 0 or 1
 */
var member_basic$_check__nSignInFail = function( d ){};

/**
 * @function
 * @param {Document} o Collection' Object { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @param {String} mpw
 * @return {uint} 0 or 1
 */
var member_basic$_confirm__Password = function( o, mpw ){};

/**
 * @function
 * @param {Document} o Collection' Object { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @param {String} mpw
 * @return {uint} 0 or 1
 */
var member_basic$_confirm__Password___update__nSignInFail = function( o, mpw ){};

/**
 * delete rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_delete__findOne_Common = function( d ){};

/**
 * delete rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_delete__findOne__sid = function( d ){};

/**
 * delete rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var member_basic$_findAll = function(){};

/**
 * @function
 * @param {String} mid
 * @return {Document}
 */
var member_basic$_findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_basic$_findOne___id = function( _id ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var member_basic$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_basic$_getProperties = function(){};

/**
 * @function
 * @param {uint} _id
 * @param {uint} nSignInFail
 * @return {uint} 1
 */
var member_basic$_update__nSignInFail = function( _id, nSignInFail  ){};

/**
 * update rank -1 to 0
 * @function
 * @return {uint} 1
 */
var member_basic$_update__rank__m1To0 = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_public;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$getAllList = function(){};

/**
 * Return email list
 * @function
 * @return {Array} [ email, email, ... ]
 */
var member_public$getAllList__email = function(){};

/**
 * Return name list
 * @function
 * @return {Array} [ {nm}, {nm}, ... ]
 */
var member_public$getAllList__nm = function(){};

/**
 * Return 'CH' name list
 * @function
 * @return {Array} [ {nm_ch}, {nm_ch}, ... ]
 */
var member_public$getAllList__nm_ch = function(){};

/**
 * Return 'KR' name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */
var member_public$getAllList__nm_kr = function(){};

/**
 * Return 'US' name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */
var member_public$getAllList__nm_us = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * _id(member_public code)로 member_public의 nm.a를 얻어온다.
 * @function
 * @param {uint} _id member_public code
 * @return {String}
 */
var member_public$getProp_NameFrom_id = function( _id ){};

/**
 * @function
 * @return {Array}
 */
var member_public$_findAll = function(){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_public$_findOne___id = function( _id ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var member_public$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_public$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_session;

//----------------------------------------------------------------------------------------------------;

/**
 * Session Object 추가
 * @function
 * @param {Object} d
 * @return {uint} 0 or 1
 *
 * @example
 * member_session$addDoc({ "mid":"thdtjsdn@gmail.com" });
 */
var member_session$addDoc = function( d ){};

/**
 * Session Object의 Check
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @param {Object} so Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired = function( sid, so ){};

/**
 * 'mid'를 가지고 Session Object를 검색 후 Session Check.
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired__mid = function( d ){};

/**
 * 'sid'를 가지고 Session Object를 검색 후 Session Check.
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired__sid = function( sid ){};

/**
 * Session과 함께 Sign In을 진행.
 * Client에서 Request시 'mid'와 'mpw'를 같이 보냄.
 * Session을 체크 후 저장 또는 파기.
 * @function
 * @param {Object} d Request Object { "mid" : "", "mpw" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Sign_In = function( d ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} 0, or 1
 */
var member_session$destroySession__sid = function( sid ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Object}
 */
var member_session$findOne = function( d ){};

/**
 * @function
 * @param {String} sid session id
 * @return {Object}
 */
var member_session$findOne__sid = function( sid ){};

/**
 * @function
 * @return {Array} [ { member_session }, { member_session }, ... ]
 */
var member_session$getAllList = function(){};

/**
 * sid(session id)로 member_session의 _id를 얻어온다.
 * @function
 * @param {String} sid session id
 * @return {uint}
 */
var member_session$getProp__idFromsid = function( sid ){};

/**
 * @function
 * @param {Object} d { "mid" : "" }
 * @return {uint|Object} 0 or 1, { "mid" : "", "d_ex" : "", "sid" : "" }
 */
var member_session$getSession = function( d ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_session$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_session$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_session$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_session$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_session$validation__remove_id = function( n ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} 0 or 1
 */
var member_session$validation__sid = function( sid ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} -1, 0. 1
 */
var member_session$_confirm__sessionID = function( sid ){};

/**
 * delete d_ex(date_expires), sid(session id)
 * @function
 * @param {Document} d
 */
var member_session$_delete__findOne__sid = function( d ){};

/**
 * @function
 * @param {Object} d Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$_destroySession = function( o ){};

/**
 * @function
 * @return {Array}
 */
var member_session$_findAll = function(){};

/**
 * @function
 * @param {String} mid
 * @return {Document}
 */
var member_session$_findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} sid
 * @return {Document}
 */
var member_session$_findOne__sid = function( sid ){};

/**
 * @function
 * @param {String} uid
 * @return {Document}
 */
var member_session$_findOne__uid = function( uid ){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_session$_findOne___id = function( _id ){};

/**
 * @function
 * @return {Collection}
 */
var member_session$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session$_getProperties = function(){};

/**
 * update
 * @function
 * @param {Object} d Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 1
 */
var member_session$_update__Session = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	member.member_session_log;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {uint} 0, 1
 *
 * @example
 * member_session_log$addDoc({ "mid":"thdtjsdn@gmail.com" });
 */
var member_session_log$addDoc = function( d ){};

/**
 * @function
 * @return {Array} [ { member_session }, { member_session }, ... ]
 */
var member_session_log$getAllList = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session_log$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var member_session_log$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session_log$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_time;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * member_time$addDoc({ "mid":"thdtjsdn@gmail.com" });
 */
var member_time$addDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Object}
 */
var member_time$findOne = function( d ){};

/**
 * @function
 * @param {String} mid member ID
 * @return {Document}
 *
 * @example
 * member_time$findOne__mid( "thdtjsdn@gmail.com" )' );
 */
var member_time$findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} uid user ID
 * @return {Document}
 *
 * @example
 * member_time$findOne__uid( "thdtjsdn@gmail.com" )' );
 */
var member_time$findOne__uid = function( uid ){};

/**
 * @function
 * @return {Array} [ { member_time }, { member_time }, ... ]
 */
var member_time$getAllList = function(){};

/**
 * Return d_l_si(date_last_signin)
 * @function
 * @return {Array} [ d_l_si, d_l_si, ... ]
 */
var member_time$getAllList__d_l_si = function(){};

/**
 * Return d_sec(date_secession)
 * @function
 * @return {Array} [ d_sec, d_sec, ... ]
 */
var member_time$getAllList__d_sec = function(){};

/**
 * Return d_su(date_signup)
 * @function
 * @return {Array} [ d_su, d_su, ... ]
 */
var member_time$getAllList__d_su = function(){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_time$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_time$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * { mid : "", mpw : "" }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * member_time$sign_up({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" })' );
 */
var member_time$sign_up = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_time$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_time$validation__remove_id = function( n ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 */
var member_time$validation__sign_up = function( d ){};

/**
 * delete d_l_si, d_su, d_sec + member_basic$_delete__getAllList
 * @function
 * @param {Document} d
 */
var member_time$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var member_time$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var member_time$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_time$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	member._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @return {Object} { "year" : 0, "month" : 0, "date" : 0 }
 */
var _common_procedure$getDate__YearMonthDate = function(){};

/**
 * @function
 * @return {Object} { "y" : 0, "m" : 0, "d" : 0 }
 */
var _common_procedure$getDate__YMD = function(){};

/**
 * @function
 * @return {Object} { "y" : 0, "m" : 0, "d" : 0, "ho" : 0, "mi" : 0, "se" : 0 }
 */
var _common_procedure$getDate__YMD_HoMiSeMil = function(){};

/**
 * @function
 * @return {Array} [ year, month, day, hours, minutes, seconds, milliseconds ]
 */
var _common_procedure$getDate__YMD_HoMiSeMil__Array = function(){};

/**
 * @function
 * @return {Array} [ year, month, day ]
 */
var _common_procedure$getDate__YMD__Array = function(){};

/**
 * @function
 * @param {Object} { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 */
var _common_procedure$setDate__YMD_HoMiSe = function( d ){};

/**
 * @function
 * @param {Object} d { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 * @return {Object} { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 */
var _common_procedure$validation_Date__YMD_HoMiSe = function( d ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	partner._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	product.product_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 	"_id$member_public" : NumberInt( 0 )
 * 	, "_id$brand_basic" : NumberInt( 0 )
 * 	, "_id$product_category" : NumberInt( 0 )
 *
 * 	, "barcode" : "12345678"
 * 	, "date_regist" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
 *
 * 	, "description" : "핸드크림"
 *  , "description_cn" : "핸드크림"
 *  , "description_kr" : "핸드크림"
 *  , "description_us" : "Hand Cream"
 *
 *  , "msds" :  0
 * 
 *  , "nm" : "시어버터 핸드크림_로즈", "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
 *
 * 	, "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
 * 	, "url_file_product" : "", "url_file_barcode": "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
 * }
 * </code>
 */
var product_basic$addDoc = function( d ){};

/**
 * product_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm_kr" : "시어버터 핸드크림_로즈"
	,"nm_cn" : "护手霜_玫瑰"
	,"nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
	,"url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm",
 * }
 * </code>
 * @return {int} 0 or 1
 */

var product_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var product_basic$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {product_basic}, {product_basic}, ... ]
 */

var product_basic$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function product_basic 상의 연관 collection 값을 의미있는 값으로 치환하여 전송 한다. (Join)
 * @return {Array} [ {}, {}, ... ]
 */

var product_basic$joinCol__getAllList = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var product_basic$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var product_basic$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$update_id = function( d ){};

/**
 * @function
 * @param {Array} product_basic
 * @return {uint} 0 or 1
 */

var product_basic$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * "_id$member_public" : NumberInt( 0 )
 * , "_id$brand_basic" : NumberInt( 0 )
 * , "_id$product_category" : NumberInt( 0 )
 *
 * , "barcode" : "12345678"
 *
 * , "date_regist" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
 *
 * , "description" : "핸드크림"
 * , "description_cn" : "핸드크림"
 * , "description_kr" : "핸드크림"
 * , "description_us" : "Hand Cream"
 *
 * , "msds" :  false
 *
 * , "nm" : "시어버터 핸드크림_로즈", "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
 *
 * , "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
 * , "url_file_product" : "", "url_file_barcode": "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
 * }
 * </code>
 */

var product_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var product_basic$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$validation__update_ids = function(){};


var product_basic$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var product_basic$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var product_basic$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	product.product_category;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	product._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.delivery_slip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.inventory;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.inventory_history;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.pysical_warehouse;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.sku;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.stock;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.warehouse;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.warehousing_slip;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};