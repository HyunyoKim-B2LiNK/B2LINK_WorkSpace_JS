//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/remove_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - brand_basic/remove_ids():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.brand.brand_basic$remove_ids( q );

	global.b2link_router.brand.req__value( req, res, q, "brand_basic$remove_ids", q.ids );

	global.RayLog.log( "- [ E ] - brand_basic/remove_ids():void----------" );
});
