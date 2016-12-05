//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/bank_swift/getAllList?co=kr
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/bank_swift/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var co = q.co;

	var f_allList = "bank_swift_" + co + "$getAllList";

	global.b2link_router.list_static.req__fNm( req, res, q, f_allList );

	global.Rh2Log.log( "- [ E ] - list_static/bank_swift/getAllList():void----------" );
});