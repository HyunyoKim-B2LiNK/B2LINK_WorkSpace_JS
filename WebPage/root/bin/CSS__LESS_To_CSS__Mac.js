//----------------------------------------------------------------------------------------------------;
var fileNm = "CSS__LESS_To_CSS__Mac.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

var sConstantValue = STtwUtilFsReadStream.getFile( "../less/_const_variable.less.import.txt" ).toString( "utf8" );

try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( "../less/", "../css/", sConstantValue, true ); }catch( er ){ console.error( "try catch Error0 : " + er ); }
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS( "../less_ui/", "../css_ui/", sConstantValue, true ); }catch( er ){ console.error( "try catch Error1 : " + er ); }
try{ SUtilFsWriteStream_Extension_Dev.create_CSS_FromLESS_SubDirectories( "../ui/", sConstantValue, true ); }catch( er ){ console.error( "try catch Error2 : " + er ); }

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