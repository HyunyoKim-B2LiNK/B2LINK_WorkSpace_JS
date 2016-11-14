//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.date.getArrayDateFromNewDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.b2link.date.getArrayDateFromNewDate = function( )
{
	////////global.RayLog.timeStamp( "---- [ S ] - global.b2link.date.getArrayDateFromNewDate():void----------" );

	var d = new Date();

	var r = [
		d.getFullYear()
		, d.getMonth()
		, d.getDay()
		, d.getHours()
		, d.getMinutes()
		, d.getSeconds()
	];

	d = null;

	////////global.RayLog.timeStamp( "---- [ E ] - global.b2link.date.getArrayDateFromNewDate():void----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;