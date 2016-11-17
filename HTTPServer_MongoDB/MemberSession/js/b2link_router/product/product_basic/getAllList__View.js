//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/product/product_basic/getAllList__View.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/product/product_basic/getAllList__View
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - product/product_basic/getAllList__View():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.product.req__fNm( req, res, q, "product_basic$getAllList__View" );

	global.RayLog.log( "- [ E ] - product/product_basic/getAllList__View():void----------" );
});