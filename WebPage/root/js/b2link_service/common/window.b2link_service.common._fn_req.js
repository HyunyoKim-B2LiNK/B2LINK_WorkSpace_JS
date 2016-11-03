//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service/common/window.b2link_service.common._fn_req.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_req = function( url, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service.common._fn_req():void----------" );

	//console.log( "url : " + url );
	url += window.b2link_url.member.member_session$getParam( window.b2link.session.getSession() );
		console.log( "url : " + url );

	url += "&date_cache=" + new Date();

	window.b2link_service.common._fn_res( SUtilXMLHttpReqGet.reqSyncReturn( url, null ).responseText, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.common._fn_req():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
