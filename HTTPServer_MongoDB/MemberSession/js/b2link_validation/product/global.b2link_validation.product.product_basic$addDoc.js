//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/product/global.b2link_validation.product.product_basic$addDoc.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$addDoc = function( d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.product.product_basic$addDoc():void----------" );
	try
	{
		//수정하기 - 20161111 - 박종하 - member_basic 에서 _id 가져 오기.
		d._id$member_public = d.register ? 0 : 0;
		delete d.register;

		//수정하기 - 20161111 - 박종하 - product_category 에서 _id 가져 오기.
		d._id$product_category = d.product_category ? 0 : 0;
		delete d.product_cateory;

		//수정하기 - 20161111 - 박종하 - brand 에서 _id 가져 오기.
		d._id$brand_basic = d.brand ? 0 : 0;
		delete d.brand;

		d.date_register = global.b2link.date.getArrayDateFromNewDate();

		d.weight = parseFloat( d.weight );
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
	}

	global.RayLog.log( "---- [ E ] - global.b2link_validation.product.product_basic$addDoc():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;