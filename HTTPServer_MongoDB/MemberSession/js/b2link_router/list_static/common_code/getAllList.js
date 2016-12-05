//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/common_code/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/common_code/getAllList
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/common_code/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "common_code$getAllList" );

	global.Rh2Log.log( "- [ E ] - list_static/common_code/getAllList():void----------" );
});