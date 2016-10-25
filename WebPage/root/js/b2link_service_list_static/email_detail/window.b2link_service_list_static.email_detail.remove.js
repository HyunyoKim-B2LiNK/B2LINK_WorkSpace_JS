//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/email_detail/window.b2link_service_list_static.email_detail.remove.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL_DETAIL + "remove?";


/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
var _fn_res = function( result, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.email_detail.remove.res():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.email_detail.remove.res():void----------" );
};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.remove = function( d,cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.email_detail.remove():void----------" );

	var r = window.b2link.session.getSession();
    var _tmpUrl = _url 
    + window.b2link_url.member.getParam__member_session$session( r )
    + "&_id=" + d._id;
	_fn_res( SUtilXMLHttpReqGet.reqSyncReturn( _tmpUrl, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.email_detail.remove():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

