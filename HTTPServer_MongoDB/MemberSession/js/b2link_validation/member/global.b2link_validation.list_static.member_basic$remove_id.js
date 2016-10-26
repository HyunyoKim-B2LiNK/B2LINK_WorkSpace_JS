//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.member_basic$remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.member_basic$remove_id = function( t, d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.member_basic$remove_id():{Object}----------" );

	try
	{
		t._id = parseInt( d._id );
	}
	catch( e )
	{
		global.TtwLog.error( "Error : " + e );
		throw e;
	}

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.member_basic$remove_id():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
