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
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$update_ids():{Object}----------" );

	console.logObjectInformation( d, "d" );
    var _t = [];
    console.log(d.ids);
    var _d = JSON.parse( d.ids );
    var i = 0 ; iLen = _d.length;
    console.log(_d.length);
    var io;
    for ( ; i < iLen ; ++i )
    {
        
        io = _d[i];  
        var to = {};
        try
        {
            to._id = parseInt(io._id);     
        }
        catch ( e )
        {
            global.TtwLog.error( "Error : " + e );
            
        }
        
        if( io.nm_cn  ) to.nm_cn = io.nm_cn;	else to.nm_cn = "";
		if( io.nm_kr  ) to.nm_kr = io.nm_kr;	else to.nm_kr = "";
		if( io.nm_us  ) to.nm_us = io.nm_us;	else to.nm_us = "";
    	if( io.url ) to.url = io.url;	else to.url = "";
    	if( io.url_log ) to.url_logo = io.url_logo;	else to.url_logo = "";
    	if( io.url_trademark ) to.url_trademark = io.url_trademark;	else to.url_trademark = "";
    	//if( d.register_person ) t.register_person = d.register_person;
    	if( io.description ) to.description = io.description;	else	to.description = "";  
        _t.push(to);  
    }
    t.ids = _t;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$update_ids():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
