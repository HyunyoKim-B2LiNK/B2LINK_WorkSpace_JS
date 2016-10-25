//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_list_static/country/window.b2link_service_list_static.country.check__Overlap.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.LIST_STATIC.EMAIL_DETAIL + "check__Overlap?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
var _fn_res = function( result, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.country.check__Overlap.res():void----------" );
	console.log( result );

	var r = JSON.parse( result );
	cbFunction( r );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.country.check__Overlap.res():void----------" );
};

/**
 * @function
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.check__Overlap = function( d, cbFunction )
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_service_list_static.country.check__Overlap():void----------" );

	var r = window.b2link.session.getSession();
	var _tmpUrl = _url
		+ window.b2link_url.member.member_session$getParam( r )
		+ window.b2link_url.list_static.getParam__email_detail$email_detail( d );

	_fn_res( SUtilXMLHttpReqGet.reqSyncReturn( _tmpUrl, null ).responseText, cbFunction );

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_service_list_static.country.check__Overlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

