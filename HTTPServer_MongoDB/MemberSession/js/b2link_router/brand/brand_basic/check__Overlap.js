//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/check__Overlap
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - brand/brand_basic/check__Overlap():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var qp = {};

	global.b2link_validation.brand.brand_basic$check__Overlap( qp, q );

	global.b2link_router.brand.req__json( req, res, q, "brand_basic$check__Overlap", qp );

	global.RayLog.log( "- [ E ] - brand/brand_basic/check__Overlap():void----------" );
});