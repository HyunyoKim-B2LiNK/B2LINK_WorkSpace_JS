//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/add
//*/
(function( req, res ){
    global.RayLog.log( "- [ S ] - brand/brand_basic/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
    // validation
	global.b2link_validation.brand.brand_basic$check__Overlap( d, q );

	global.b2link_router.brand.req__json( req, res, q, "brand_basic$addDoc", d );

	global.RayLog.log( "- [ E ] - brand/brand_basic/add():void----------" );
});