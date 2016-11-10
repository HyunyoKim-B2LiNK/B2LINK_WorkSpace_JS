//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/update_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/update_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - brand/brand_basic/update_ids():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.brand.brand_basic$update_ids( d, q );

	global.b2link_router.brand.req__json( req, res, q, "brand_basic$update_ids", d.ids );

	global.RayLog.log( "- [ E ] - brand/brand_basic/update_ids():void----------" );
});
