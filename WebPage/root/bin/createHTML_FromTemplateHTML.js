//----------------------------------------------------------------------------------------------------;
var fileNm = "createHTML_FromTemplateHTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

var rootPath = "E:/WorkSpace_B2LINK/WebPage/root/";
var templatePath = rootPath + "ui_template/";

//.thtml만 존재;
SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, false, true );

//.html만 존재 .thtml은 미존재;
//SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, true, false );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;