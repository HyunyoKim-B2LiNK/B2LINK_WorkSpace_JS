//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/101_define_window.b2link.STATIC.UI.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - window.b2link.STATIC.UI;

window.b2link.STATIC.UI = {};

/**
 * @function
 * @param {String} key
 * @param {Object} [ {HTMLElement}, {Object}, .. ]
 */
window.b2link.STATIC.UI.__add = function( key, o )
{
  if( window.b2link.STATIC.UI[ key ] ) throw new Error( "window.b2link.STATIC.UI." + key + " already exists" );
  else window.b2link.STATIC.UI[ key ] = t;
};

/**
 * @function
 */
window.b2link.STATIC.UI.__list = function(){ this.__status(); };

//--------------------------------------------------[ E ] - window.b2link.STATIC.UI;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;
