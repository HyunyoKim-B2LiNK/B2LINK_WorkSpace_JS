//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.email_detail$update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$update_id = function( t, d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.email_detail$update_id():{Object}----------" );

	console.logObjectInformation( d, "d" );
    try
    {
        t._id = parseInt(d._id);     
    }
    catch ( e )
    {
        global.TtwLog.error( "Error : " + e );
		throw e;
    }
    
	if( d.SLD    ) t.SLD = d.SLD.toLowerCase();  else t.SLD = "";
	if( d.TLD    ) t.TLD = d.TLD.toLowerCase();  else t.TLD = "";
	if( d.ccTLD ) t.ccTLD = d.ccTLD.toLowerCase();  else t.ccTLD = "";
	if( d.gTLD   ) t.gTLD = d.gTLD.toLowerCase();    else t.gTLD = "";
	if( d.c      ) t.c = d.c.toLowerCase();  else t.c = "";

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.email_detail$update_id():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
