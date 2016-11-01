//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/brand/global.b2link_validation.brand.brand_basic$remove_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$remove_ids = function( d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$remove_ids():{Object}----------" );

	try
	{
		var a = d.ids;
		var i=0, iLen;
		for( ; i<iLen; ++i ) a[ i ] = parseInt( a[ i ] );
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
		throw e;
	}

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$remove_ids():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
