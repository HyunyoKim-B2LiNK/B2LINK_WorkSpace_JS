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
	global.RayLog.log( "---- [ S ] - global.b2link_validation.product.product_basic$update_ids():{Object}----------" );

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
            if( io.date_register  ) to.date_register = io.date_register.split( "," );     
        }
        catch ( e )
        {
            global.TtwLog.error( "Error : " + e );
            
        }
        if( io.mid ) to._id$member_basic = io.mid;
        if( io.brand ) to._id$brand_basic = io.brand;   
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
        to.weight = io.weight;
    	to.unit_weight = io.unit_weight;	  
        _t.push(to);  
    }
    t.ids = _t;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.product.product_basic$update_ids():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
