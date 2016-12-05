//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/postalcode_cn/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/postalcode_cn/add
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - postalcode_cn/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.postalcode_cn$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "postalcode_cn$addDoc", d );

	global.Rh2Log.log( "- [ E ] - postalcode_cn/add():void----------" );
});