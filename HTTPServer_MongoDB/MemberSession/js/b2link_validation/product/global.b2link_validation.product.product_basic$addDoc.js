//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.product.product_basic$addDoc.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$addDoc = function( d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.product.product_basic$addDoc():{Object}----------" );
	
	try
	{
		d.date_register = d.date_register.split(",");
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
	}

	global.RayLog.log( "---- [ E ] - global.b2link_validation.product.product_basic$addDoc():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
