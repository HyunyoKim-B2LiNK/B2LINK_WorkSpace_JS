//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/__define/200_define_global.b2link_router.member.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router.member;

global.b2link_router.member = {};

var _ = global.b2link_router.member;

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fn
 */
global.b2link_router.member.req__fn = function( req, res, q, fn )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fn():void----------" );

	 global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "member", fn );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fn():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 */
global.b2link_router.member.req__fNm = function( req, res, q, fNm )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__fNm():void----------" );

	 global.b2link_router.member.req__fn( req, res, q, fNm + "()" );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__fNm():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {Object} d
 */
global.b2link_router.member.req__json = function( req, res, q, fNm, d )
{
	 global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__json():void----------" );

	 global.b2link_router.member.req__fn( req, res, q, fNm + "(" + JSON.stringify( d ) + ")" );

	 global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__json():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {String} d
 */
global.b2link_router.member.req__string = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__string():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + '("' + d + '")' );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__string():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {*} d
 */
global.b2link_router.member.req__value = function( req, res, q, fNm, d )
{
	global.TtwLog.log( "----- [ S ] - global.b2link_router.member.req__value():void----------" );

	global.b2link_router.member.req__fn( req, res, q, fNm + "(" + d + ")" );

	global.TtwLog.log( "----- [ E ] - global.b2link_router.member.req__value():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.member;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;