//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_basic/window.b2link_service_member.member_basic.getList_Range__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.BASIC + "getList_Range__id?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {uint} _id_gt
 * @param {uint} _id_lt
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.getList_Range__id = function( _id_gt, _id_lt, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_basic.getList_Range__id():void----------" );

	window.b2link_service.common._fn_req( _url
		+ "&_id_gt=" + _id_gt + "&_id_lt=" + _id_lt
		, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_basic.getList_Range__id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;