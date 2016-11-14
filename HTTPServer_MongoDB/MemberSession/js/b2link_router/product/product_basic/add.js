//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/product_basic/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/product/product_basic/add
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - product/product_basic/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//validation;
	global.b2link_validation.product.product_basic$addDoc( q );
	global.b2link_router.product.req__json( req, res, q, "product_basic$addDoc", q );

	global.RayLog.log( "- [ E ] - product/product_basic/add():void----------" );
});