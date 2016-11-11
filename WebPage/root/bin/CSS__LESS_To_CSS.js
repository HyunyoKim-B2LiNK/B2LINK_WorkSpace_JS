//----------------------------------------------------------------------------------------------------;
var fileNm = "CSS__LESS_To_CSS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

var filePath_Const = "../less/_const_variable.less.import.txt";
var lessPath = "../less/";
var cssPath = "../css/";
var less_uiPath = "../less_ui/";
var css_uiPath = "../css_ui/";

var uiPath = "../ui/";

var sConstantValue = STtwUtilFsReadStream.getFile( filePath_Const ).toString( "utf8" );

//LESS Path에서 CSS를 만든 후 CSS 폴더로 복사 한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( lessPath, cssPath, sConstantValue, true ); }catch( er ){ console.error( "try catch Error0 : " + er ); }

//LESS_UIComponent Path에서 CSS를 만든 후 CSS_UIComponent 폴더로 복사 한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( less_uiPath, css_uiPath, sConstantValue, true ); }catch( er ){ console.error( "try catch Error1 : " + er ); }

//UI폴더의 전체 하위디렉토리까지 포함해서 LESS 파일을 CSS 파일로 생성한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS_SubDirectories( uiPath, sConstantValue, true ); }catch( er ){ console.error( "try catch Error2 : " + er ); }

//----------------------------------------------------------------------------------------------------;

try
{
	STtwUtilCP.sExec( "createJSON__CSS.bat" );
}
catch( er )
{
	console.error( "Error : " + er );
}

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;