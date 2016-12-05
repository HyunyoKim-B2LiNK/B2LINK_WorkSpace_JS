//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift_kr/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/bank_swift_kr/getAllList
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/bank_swift_kr/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "bank_swift_kr$getAllList" );

	global.Rh2Log.log( "- [ E ] - list_static/bank_swift_kr/getAllList():void----------" );
});