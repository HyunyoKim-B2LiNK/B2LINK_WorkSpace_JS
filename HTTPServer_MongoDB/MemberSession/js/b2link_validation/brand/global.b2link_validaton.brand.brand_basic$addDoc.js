//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/brand/global.b2link_validation.brand.brand_basic$addDoc.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$addDoc = function( t, d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$addDoc():{Object}----------" );

	console.logObjectInformation( d, "d" );
	
	try 
	{
		//수정하기 - 20161111 - 박종하 - member_basic 에서 _id 가져 오기. 
		d.register ? t._id$member_basic = parseInt(0) : 0;
		 
	}
	catch ( e )
	{
		global.RayLog.error( "Error : " + e );
		return;
	}
	
         
	d.nm_cn  ? t.nm_cn = d.nm_cn : t.nm_cn = "";
	d.nm_kr  ? t.nm_kr = d.nm_kr : t.nm_kr = "";	
	d.nm_us  ? t.nm_us = d.nm_us : t.nm_us = "";
	d.url ? t.url = d.url : t.url = "";
	d.url_log ? t.url_logo = d.url_logo : t.url_logo = "";
	d.url_trademark ? t.url_trademark = d.url_trademark : t.url_trademark = "";
	d.description ? t.description = d.description : t.description = "";
	var _date = new Date();
	t.date_register = [ _date.getFullYear() , _date.getMonth(), _date.getDay(), _date.getHours(), _date.getMinutes(), _date.getSeconds() ];
	_date = null;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$addDoc():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
