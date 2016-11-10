//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/brand/global.b2link_validation.brand.brand_basic$update_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$update_ids = function( t, d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$update_ids():void----------" );

	console.logObjectInformation( d, "d" );
	console.log( d.ids );

	//수정하기 - 20161110 - 박종하 - 새 오브젝트를 만드는 이유가 뭔가요?;
	var _t = [];
	var _d = JSON.parse( d.ids );
		console.log( _d.length );

	var io;
	var i=0, iLen=_d.length;
	for( ; i<iLen; ++i )
	{
		io = _d[ i ];
		var to = {};
		try
		{
			to._id = parseInt( io._id );
		}
		catch( e )
		{
			global.RayLog.error( "Error : " + e );
		}

		to.description = io.description;

		to.nm_cn = io.nm_cn;
		to.nm_kr = io.nm_kr;
		to.nm_us = io.nm_us;

		to.url = io.url;
		to.url_logo = io.url_logo;
		to.url_trademark = io.url_trademark;
		//if( d.register_person ) t.register_person = d.register_person;

		_t.push( to );
	}

	t.ids = _t;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$update_ids():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;