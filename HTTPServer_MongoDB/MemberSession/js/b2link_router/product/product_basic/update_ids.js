//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/product_basic/update_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/product/product_basic/update_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - product/product_basic/update_ids():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.product.product_basic$update_ids( d, q );

	global.b2link_router.product.req__json( req, res, q, "product_basic$update_ids", d.ids );

	global.RayLog.log( "- [ E ] - product_basic/update_ids():void----------" );
});