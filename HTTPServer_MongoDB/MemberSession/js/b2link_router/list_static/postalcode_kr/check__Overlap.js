//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/postalcode_kr/check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/postalcode_kr/checkcountry_Overlap
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - postalcode_kr/check__Overlap():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.postalcode_kr$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "postalcode_kr$check__Overlap", d );

	global.Rh2Log.log( "- [ E ] - postalcode_kr/check__Overlap():void----------" );
});