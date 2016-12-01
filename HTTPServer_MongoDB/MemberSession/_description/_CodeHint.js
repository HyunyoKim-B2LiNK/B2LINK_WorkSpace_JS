

//----------------------------------------------------------------------------------------------------;

//	b2link.common;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.console;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.date;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.b2link.date.getArrayDateFromNewDate = function(){};

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
global.b2link.date.getDateStringFromArrayDate_Dash = function( a ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.fn;

//----------------------------------------------------------------------------------------------------;

/**
	 * @function
	 * @param {*} result
	 */
global.b2link.fn.getResultStatus = {};

//----------------------------------------------------------------------------------------------------;

//	b2link.fs;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getDirectoryList = function( path ){};

/**
 * @function
 * @param {String} path
 * @return {Byte}
 */
global.b2link.fs.getFile = function( path ){};

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getFileList = function( path ){};

/**
 * @function
 * @param {String} path directory path
 * @param {String} extension ".json", ".txt", ... file extension
 * @return {Array}
 */
global.b2link.fs.getFileList_Extension = function( path, extension ){};

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.b2link.fs.getFile_UTF8 = function( path ){};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile = function( fileNm, s, options, cb_Complete ){};

/**
 * @function
 * @param {String} fileNm
 * @param {ByteArray} d
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile_Binary = function( fileNm, d, options, cb_Complete ){};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile_UTF8 = function( fileNm, s, cb_Complete ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.log;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.math;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.request;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 */
global.b2link.request.get = function( url, cbComplete, headers ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q query
 * @param {Function} cbComplete function( result ){}
 */
global.b2link.request.get__member_session$checkSession = function( req, res, q, cbComplete ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} q query
 * @param {String} db mongod Name
 * @param {String} nq next query
 */
global.b2link.request.get__member_session$checkSessionAndReqMongoDB = function( req, res, q, db, nq ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} q query
 * @param {String} db mongod Name
 * @param {String} nq next query
 */
global.b2link.request.get__member_session$checkSessionAndReqNameFromsid = function( req, res, q ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.response;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200 = function( req, res ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200_False = function( req, res ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q query
 * @param {*} error
 */
global.b2link.response.send_200_False__ErrorLog = function( req, res, q, error ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} obj
 */
global.b2link.response.send_200_JSON = function( req, res, obj ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} str
 */
global.b2link.response.send_200_String = function( req, res, str ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200_String_DestroySessionComplete = function( req, res ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_200_True = function( req, res ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.send_301_DestroySession = function( req, res ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} d
 */
global.b2link.response.setHeader__setcookie = function( req, res, d ){};

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 */
global.b2link.response.setHeader__setcookie__null = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.session;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q
 */
global.b2link.session.get_or_create__Session = function( req, res, q ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.url;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 */
global.b2link.url.getQueryFromURL = function( url ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.util;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2linkDev._ssw;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.baidu;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.booxen;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.google;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.kakao;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.naver;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.red;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.vworld;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.brand;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

b2link_router.brand.brand_basic.add = function( req, res ){};

b2link_router.brand.brand_basic.check__Overlap = function( req, res ){};

b2link_router.brand.brand_basic.getAllList = function( req, res ){};

b2link_router.brand.brand_basic.getList_Range__id = function( req, res ){};

b2link_router.brand.brand_basic.remove_id = function( req, res ){};

b2link_router.brand.brand_basic.remove_ids = function( req, res ){};

b2link_router.brand.brand_basic.update_id = function( req, res ){};

b2link_router.brand.brand_basic.update_ids = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.list_static;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.list_static.country;

//----------------------------------------------------------------------------------------------------;

b2link_router.list_static.country.add = function( req, res ){};

b2link_router.list_static.country.check__Overlap = function( req, res ){};

b2link_router.list_static.country.getAllList = function( req, res ){};

b2link_router.list_static.country.getCount = function( req, res ){};

b2link_router.list_static.country.getList_Range__id = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.list_static.email;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

b2link_router.list_static.email_detail.add = function( req, res ){};

b2link_router.list_static.email_detail.check__Overlap = function( req, res ){};

b2link_router.list_static.email_detail.getAllList = function( req, res ){};

b2link_router.list_static.email_detail.getList_Range__id = function( req, res ){};

b2link_router.list_static.email_detail.remove_id = function( req, res ){};

b2link_router.list_static.email_detail.remove_ids = function( req, res ){};

b2link_router.list_static.email_detail.update_id = function( req, res ){};

b2link_router.list_static.email_detail.update_ids = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.member;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.member.member_basic;

//----------------------------------------------------------------------------------------------------;

b2link_router.member.member_basic.getAllList = function( req, res ){};

b2link_router.member.member_basic.getAllList__email = function( req, res ){};

b2link_router.member.member_basic.getAllList__nm = function( req, res ){};

b2link_router.member.member_basic.getAllList__nm_ch = function( req, res ){};

b2link_router.member.member_basic.getAllList__nm_kr = function( req, res ){};

b2link_router.member.member_basic.getAllList__nm_us = function( req, res ){};

b2link_router.member.member_basic.getList_Range__id = function( req, res ){};

b2link_router.member.member_basic.remove_id = function( req, res ){};

b2link_router.member.member_basic.remove_ids = function( req, res ){};

b2link_router.member.member_basic.remove_ids__AllCols = function( req, res ){};

b2link_router.member.member_basic.remove_id__AllCols = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.member.member_public;

//----------------------------------------------------------------------------------------------------;

b2link_router.member.member_public.getAllList = function( req, res ){};

b2link_router.member.member_public.getAllList__email = function( req, res ){};

b2link_router.member.member_public.getAllList__nm = function( req, res ){};

b2link_router.member.member_public.getAllList__nm_ch = function( req, res ){};

b2link_router.member.member_public.getAllList__nm_kr = function( req, res ){};

b2link_router.member.member_public.getAllList__nm_us = function( req, res ){};

b2link_router.member.member_public.getList_Range__id = function( req, res ){};

b2link_router.member.member_public.getProp_NameFromsid = function( req, res ){};

b2link_router.member.member_public.getProp_NameFrom_id = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.member.member_session;

//----------------------------------------------------------------------------------------------------;

b2link_router.member.member_session.checkSession = function( req, res ){};

b2link_router.member.member_session.checkSession__Sign_In = {};

b2link_router.member.member_session.destroySession = function( req, res ){};

b2link_router.member.member_session.getProp__idFromsid = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.member.member_session_log;

//----------------------------------------------------------------------------------------------------;

b2link_router.member.member_session_log.getAllList = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_router.product;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_router.product.product_basic;

//----------------------------------------------------------------------------------------------------;

b2link_router.product.product_basic.add = function( req, res ){};

b2link_router.product.product_basic.getAllList = function( req, res ){};

b2link_router.product.product_basic.getList_Range__id = function( req, res ){};

b2link_router.product.product_basic.joinCol__getAllList = function( req, res ){};

b2link_router.product.product_basic.remove_id = function( req, res ){};

b2link_router.product.product_basic.remove_ids = function( req, res ){};

b2link_router.product.product_basic.update_id = function( req, res ){};

b2link_router.product.product_basic.update_ids = function( req, res ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_scrap.red;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_validation.brand;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$addDoc = function( t, d ){};

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$check__Overlap = function( t, d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$remove_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$remove_ids = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$update_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$update_ids = function( t, d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_validation.list_static;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.country$check__Overlap = function( t, d ){};

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$check__Overlap = function( t, d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$remove_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$remove_ids = function( d ){};

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$update_id = function( t, d ){};

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$update_ids = function( t, d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_validation.member;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_ids = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_ids__AllCols = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.member.member_basic$remove_id__AllCols = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_validation.product;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$addDoc = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$remove_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$remove_ids = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$update_id = function( d ){};

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$update_ids = function( t, d ){};