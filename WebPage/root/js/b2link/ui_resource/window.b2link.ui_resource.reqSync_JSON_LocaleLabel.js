//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/ui_resource/window.b2link.ui_resource.reqSync_JSON_LocaleLabel.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url ./ui/...
 * @return {Object}
 */
window.b2link.ui_resource.reqSync_JSON_LocaleLabel = function( url )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_resource.reqSync_JSON_LocaleLabel():{Object}----------" );

	console.log( "url0 : " + url );

	url = url.replace( ".js"
		, ".locale." + window.b2link.STATIC.CONFIG.URL.UI.LOCALE + ".json"
	);

	console.log( "url1 : " + url );

	var o = window.b2link.xhr.reqSync_JSON( url );
		console.log( o );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_resource.reqSync_JSON_LocaleLabel():{Object}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;