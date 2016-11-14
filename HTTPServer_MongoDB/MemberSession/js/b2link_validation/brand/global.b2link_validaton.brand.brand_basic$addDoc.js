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
	
         
	t.nm_cn = d.nm_cn ? d.nm_cn : "";
	t.nm_kr = d.nm_kr ? d.nm_kr : "";	
	t.nm_us = d.nm_us ? d.nm_us : "";
	t.url = d.url ?  d.url : "";
	t.url_logo = d.url_log ? d.url_logo : "";
	t.url_trademark = d.url_trademark ? d.url_trademark : "";
	t.description = d.description ? d.description : "";
	
	t.date_register = global.b2link.date.getDateArrayFromDate();

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$addDoc():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
