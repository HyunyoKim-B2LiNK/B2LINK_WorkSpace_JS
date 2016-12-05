//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift/getList_Range__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/bank_swift/getList_Range__id
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/bank_swift/getList_Range__id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var iso3166_us2 = q.iso3166_us2;

	var f_getList_Range__id = "bank_swift_" + iso3166_us2 + "$getList_Range__id";

	global.b2link_router.list_static.req__fn( req, res, q
		, f_getList_Range__id + "(" + q._id_gt + "," + q._id_lt + ")" );

	global.Rh2Log.log( "- [ E ] - list_static/bank_swift/getList_Range__id():void----------" );
});