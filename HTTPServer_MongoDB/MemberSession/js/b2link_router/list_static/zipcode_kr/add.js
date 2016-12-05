//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/zipcode_kr/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/zipcode_kr/add
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - zipcode_kr/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.zipcode_kr$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "zipcode_kr$addDoc", d );

	global.Rh2Log.log( "- [ E ] - zipcode_kr/add():void----------" );
});