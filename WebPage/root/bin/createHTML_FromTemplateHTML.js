//----------------------------------------------------------------------------------------------------;
var fileNm = "createHTML_FromTemplateHTML.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

var rootPath = "E:/WorkSpace_B2LINK/WebPage/root/";
var templatePath = rootPath + "ui_template/b2link_member/";
//SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, false, true );
SUtilFsWriteStream_Extension_Dev.create_HTMLFromTemplateHTMLPath( rootPath, templatePath, true, false );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;