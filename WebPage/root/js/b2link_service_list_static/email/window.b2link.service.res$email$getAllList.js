//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/service/window.b2link.service.res$email$getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function 
 * @param {*} result 
 * @param {Function} cbFunction function( data ){};
 */
window.b2link.service.res$email$getAllList = function( result, cbFunction )
{
    window.RayLog.timeStamp( "---- [ S ] - window.b2link.service.res$email$getAllList():void----------" );
    console.log( result );
    
    var r = JSON.parse( result );
    cbFunction( r );
    
    window.RayLog.timeStamp( "---- [ E ] - window.b2link.service.res$email$getAllList():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;