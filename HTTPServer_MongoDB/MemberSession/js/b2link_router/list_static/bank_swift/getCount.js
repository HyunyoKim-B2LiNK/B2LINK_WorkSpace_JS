//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift/getCount.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/bank_swift/getCount?&iso3166_us2=kr
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/bank_swift/getCount():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var iso3166_us2 = q.iso3166_us2;
	var f_getCount = "bank_swift_" + iso3166_us2 + "$getCount";

	global.b2link_router.list_static.req__fNm( req, res, q, f_getCount );

	global.Rh2Log.log( "- [ E ] - list_static/bank_swift/getCount():void----------" );
});