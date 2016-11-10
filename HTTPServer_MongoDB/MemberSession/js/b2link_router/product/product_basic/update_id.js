//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/product/product_basic/update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/product/product_basic/update_id
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - product/product_basic/update_id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_validation.product.product_basic$update_id( q );

	global.b2link_router.product.req__json( req, res, q, "product_basic$update_id", q );

	global.RayLog.log( "- [ E ] - product/product_basic/update_id():void----------" );
});