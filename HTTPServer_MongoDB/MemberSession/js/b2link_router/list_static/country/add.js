//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/country/add
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - country/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.country$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "country$addDoc", d );

	global.TtwLog.log( "- [ E ] - country/add():void----------" );
});