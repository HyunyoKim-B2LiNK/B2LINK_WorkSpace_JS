//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/getList_Range__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/country/getList_Range__id
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/postalcode_cn/getList_Range__id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fn( req, res, q
		, "postalcode_cn$getList_Range__id(" + q._id_gt + "," + q._id_lt + ")" );

	global.Rh2Log.log( "- [ E ] - list_static/postalcode_cn/getList_Range__id():void----------" );
});