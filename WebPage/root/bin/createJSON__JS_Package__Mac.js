//----------------------------------------------------------------------------------------------------;
var fileNm = "createJSON__JS_Package__Mac.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var jsPath = "../js/";
var fileNm_Template = "createJS__js.namespace.__define.200_define__files.template";
//var rootInstanceKey = "global.";//NodeJS;
var rootInstanceKey = "window.";

//__list.json, __listPackage.json 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__JS( jsPath ); }catch( er ){ console.error( "try catch Error0 : " + er ); }

//__***define***.js 생성;
try{ SUtilFsWriteStream_Extension_Dev.create_Package_Define__JS( jsPath, fileNm_Template, rootInstanceKey ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;