
//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift_us/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/bank_swift_us/add
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - bank_swift_us/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.bank_swift_us$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "bank_swift_us$addDoc", d );

	global.Rh2Log.log( "- [ E ] - bank_swift_us/add():void----------" );
});