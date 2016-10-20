//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email/checkEmail_Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/email/checkEmail_Overlap
//*/
(function( req, res ){
   
    console.log( "- [ S ] - email/checkEmail__Overlap():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
    global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "email$checkEmail__overlap(" + JSON.stringify( q ) + ")");

	console.log( "- [ E ] - email/checkEmail__Overlap():void----------" );
});