//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/getAllList
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - brand/brand_basic/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.brand.req__fNm( req, res, q, "brand_basic$getAllList" );

	global.RayLog.log( "- [ E ] - brand/brand_basic/brand_basic():void----------" );
});
