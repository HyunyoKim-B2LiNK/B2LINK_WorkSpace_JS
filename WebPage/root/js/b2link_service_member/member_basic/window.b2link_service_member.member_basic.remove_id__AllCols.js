//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_service_member/member_basic/window.b2link_service_member.member_basic.remove_id__AllCols.js";
if ( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _t = window.b2link.STATIC.CONFIG.URL;
var _url = _t.PROXY + _t.MONGODB.MEMBER.BASIC + "remove_id__AllCols?";

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * @function
 * @param {uint} d _id
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_id__AllCols = function( d, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_service_member.member_basic.remove_id__AllCols():void----------" );

	window.b2link_service.common._fn_req( _url + "&_id=" + d, cbFunction );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service_member.member_basic.remove_id__AllCols():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
