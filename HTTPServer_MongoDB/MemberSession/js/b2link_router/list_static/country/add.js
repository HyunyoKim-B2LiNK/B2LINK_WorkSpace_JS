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

	global.b2link_router.list_static.req__json( req, res, q, "country$addDoc", q );

	global.TtwLog.log( "- [ E ] - country/add():void----------" );
});
