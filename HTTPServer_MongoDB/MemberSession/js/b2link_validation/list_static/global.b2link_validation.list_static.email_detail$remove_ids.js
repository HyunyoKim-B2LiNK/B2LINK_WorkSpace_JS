//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.email_detail$remove_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$remove_ids = function( d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.email_detail$remove_ids():{Object}----------" );

	try
	{
		var a = d.ids;
		var i=0, iLen;
		for( ; i<iLen; ++i ) a[ i ] = parseInt( a[ i ] );
	}
	catch( e )
	{
		global.TtwLog.error( "Error : " + e );
		throw e;
	}

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.email_detail$remove_ids():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
