//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_basic/window.b2link_service_member.member_basic.remove_ids.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.BASIC + "remove_ids?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {Array} d [ _id, _id, ... ]
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_ids = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_basic.remove_ids():void----------" );

	window.b2link_service.common._fn_req( _url + "&ids=" + JSON.stringify( d ), cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_basic.remove_ids():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

