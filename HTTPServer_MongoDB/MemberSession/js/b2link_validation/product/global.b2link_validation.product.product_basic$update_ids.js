//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/brand/global.b2link_validation.product.product_basic$update_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$update_ids = function( t, d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.product.product_basic$update_ids():void----------" );

	console.logObjectInformation( d, "d" );
	console.log( d.ids );

	//수정하기 - 20161110 - 박종하 - 새 오브젝트를 만드는 이유가 뭔가요?;
	var _t = [];
	var _d = JSON.parse( d.ids );
		console.log( _d.length );

	var io;
	var i=0; iLen=_d.length;
	for( ; i<iLen; ++i )
	{
		io = _d[ i ];
		var to = {};

		try
		{
			to._id = parseInt( io._id );
			if( io.date_regist  ) to.date_regist = io.date_regist.split( "," );
		}
		catch( e )
		{
			global.RayLog.error( "Error : " + e );
		}

		//20161118 - 박종하 - 수정하기;
		if( io.brand ) to._id$brand_basic = io.brand;
		if( io.nm_register ) to._id$member_public = io.nm_register;
		if( io.product_category ) to._id$product_category = io.product_category;

		to.barcode = io.barcode;

		to.description = io.description;

		to.msds = io.msds;

		to.nm_cn = io.nm_cn;
		to.nm_kr = io.nm_kr;
		to.nm_us = io.nm_us;

		to.url = io.url;
		to.url_file_product = io.url_file_product;
		to.url_file_barcode = io.url_file_barcode;
		to.url_file_msds = io.url_file_msds;


		to.unit_weight = io.unit_weight;

		to.weight = io.weight;

		_t.push( to );
	}

	t.ids = _t;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.product.product_basic$update_ids():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;