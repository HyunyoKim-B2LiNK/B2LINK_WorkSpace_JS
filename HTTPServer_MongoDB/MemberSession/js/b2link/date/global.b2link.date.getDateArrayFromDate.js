//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.date.getDateArrayFromDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.b2link.date.getDateArrayFromDate = function( )
{
	////////global.RayLog.timeStamp( "---- [ S ] - global.b2link.date.getDateArrayFromDate():void----------" );
	////////global.RayLog.timeStamp( "---- [ E ] - global.b2link.date.getDateArrayFromDate():void----------" );
	var _date = new Date();
	var r = [ _date.getFullYear(), _date.getMonth(), _date.getDay(), _date.getHours(), _date.getMinutes(), _date.getSeconds() ];
		_date = null; 
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
