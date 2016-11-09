//----------------------------------------------------------------------------------------------------;
var fileNm = "createJSON__JS_Package__Mac.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS( "../js/" ); }catch( er ){ console.error( "try catch Error0 : " + er ); }
try{ SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS( "../js/", "createJS__js.namespace.__define.200_define__files.template", "window." ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;