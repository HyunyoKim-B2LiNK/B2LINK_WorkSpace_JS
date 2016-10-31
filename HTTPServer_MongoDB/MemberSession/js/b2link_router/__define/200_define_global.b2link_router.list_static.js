//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/__define/200_define_global.b2link_router.list_static.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router.list_static;

global.b2link_router.list_static = {};

var _ = global.b2link_router.list_static;

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fn
 */
global.b2link_router.list_static.req__fn = function( req, res, q, fn )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.list_static.req__fn():void----------" );

	 global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static", fn );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.list_static.req__fn():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 */
global.b2link_router.list_static.req__fNm = function( req, res, q, fNm )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.list_static.req__fNm():void----------" );

	 global.b2link_router.list_static.req__fn( req, res, q, fNm + "()" );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.list_static.req__fNm():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {Object} d
 */
global.b2link_router.list_static.req__json = function( req, res, q, fNm, d )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.list_static.req__json():void----------" );

	 global.b2link_router.list_static.req__fn( req, res, q, fNm + "(" + JSON.stringify( d ) + ")" );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.list_static.req__json():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {String} d
 */
global.b2link_router.list_static.req__string = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.list_static.req__string():void----------" );

	global.b2link_router.list_static.req__fn( req, res, q, fNm + '("' + d + '")' );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.list_static.req__string():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {*} d
 */
global.b2link_router.list_static.req__value = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.list_static.req__value():void----------" );

	global.b2link_router.list_static.req__fn( req, res, q, fNm + "(" + d + ")" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.list_static.req__value():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.list_static;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;