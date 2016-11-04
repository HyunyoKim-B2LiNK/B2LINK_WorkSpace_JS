//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/__define/200_define_global.b2link_router.product.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router.product;

global.b2link_router.product = {};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fn
 */
global.b2link_router.product.req__fn = function( req, res, q, fn )
{
	 global.RayLog.log( "----- [ S ] - global.b2link_router.product.req__fn():void----------" );

	 global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "product", fn );

	 global.RayLog.log( "----- [ E ] - global.b2link_router.product.req__fn():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 */
global.b2link_router.product.req__fNm = function( req, res, q, fNm )
{
	 global.RayLog.log( "----- [ S ] - global.b2link_router.product.req__fNm():void----------" );

	 global.b2link_router.product.req__fn( req, res, q, fNm + "()" );

	 global.RayLog.log( "----- [ E ] - global.b2link_router.product.req__fNm():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {Object} d
 */
global.b2link_router.product.req__json = function( req, res, q, fNm, d )
{
	 global.RayLog.log( "----- [ S ] - global.b2link_router.product.req__json():void----------" );

	 global.b2link_router.product.req__fn( req, res, q, fNm + "(" + JSON.stringify( d ) + ")" );

	 global.RayLog.log( "----- [ E ] - global.b2link_router.product.req__json():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {String} d
 */
global.b2link_router.product.req__string = function( req, res, q, fNm, d )
{
	global.RayLog.log( "----- [ S ] - global.b2link_router.product.req__string():void----------" );

	global.b2link_router.product.req__fn( req, res, q, fNm + '("' + d + '")' );

	global.RayLog.log( "----- [ E ] - global.b2link_router.product.req__string():void----------" );
};

/**
 * @function
 * @param {} req
 * @param {} res
 * @param {Object} q
 * @param {String} fNm
 * @param {*} d
 */
global.b2link_router.product.req__value = function( req, res, q, fNm, d )
{
	global.RayLog.log( "----- [ S ] - global.b2link_router.product.req__value():void----------" );

	global.b2link_router.product.req__fn( req, res, q, fNm + "(" + d + ")" );

	global.RayLog.log( "----- [ E ] - global.b2link_router.product.req__value():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.brand;
//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.product;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
