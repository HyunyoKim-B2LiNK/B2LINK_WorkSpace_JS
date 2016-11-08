//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/product/product_basic/remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/product/product_basic/remove_ids
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - product_basic/product_ids():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	
	global.b2link_validation.product.product_basic$remove_ids( q );

	global.b2link_router.product.req__value( req, res, q, "product_basic$remove_ids", q._ids );

	global.RayLog.log( "- [ E ] - product_basic/product_ids():void----------" );
});
