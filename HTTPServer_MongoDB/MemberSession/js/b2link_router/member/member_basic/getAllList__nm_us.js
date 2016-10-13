//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getAllList__nm_us.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_basic/getAllList__nm_us
//*/
(function( req, res ){
	console.log( "- [ S ] - member/member_basic/getAllList__nm_us():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	q.db = "member";
	q.q = "member_basic$getAllList__nm_us()";

	t.req_DB( req, res, q, function( error, result ){
		if( error )
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}
		global.b2link.response.send_200_JSON( req, res, result );
	});

	console.log( "- [ E ] - member/member_basic/getAllList__nm_us():void----------" );
});
