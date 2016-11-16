//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_public/getProp_NameFromsid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_public/getProp_NameFromsid
//*/
(function( req, res ){
	//global.TtwLog.log( "- [ S ] - member/member_public/getProp_NameFromsid():void----------" );

	global.b2link.request.get__member_session$checkSessionAndReqNameFromsid( req, res
		, global.b2link.url.getQueryFromURL( req.url ) );

	//global.TtwLog.log( "- [ E ] - member/member_public/getProp_NameFromsid():void----------" );
});