//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/window.b2link.date.getArrayDateFromNewDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
window.b2link.date.getArrayDateFromNewDate = function()
{
	////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.date.getArrayDateFromNewDate():{Array}----------" );

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

	////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.date.getArrayDateFromNewDate():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;