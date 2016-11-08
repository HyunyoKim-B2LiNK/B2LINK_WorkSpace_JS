//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/window.b2link.date.getDateStringFromArrayDate_Dash.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
window.b2link.date.getDateStringFromArrayDate_Dash = function( a )
{
	////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	return a.join( "-" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;