//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/remove_id
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - brand/brand_basic/remove_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.brand.brand_basic$remove_id( q );

	global.b2link_router.brand.req__value( req, res, q, "brand_basic$remove_id", q._id );

	global.RayLog.log( "- [ E ] - brand/brand_basic/remove_id():void----------" );
});
