//----------------------------------------------------------------------------------------------------;
var fileNm = "createJSON__js_Package.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;
console.log( "---------- [ S ] - CREATE FILE - ..js/??/??/__list.json. ----------" );

var path0 = "../js/";

var f0 = STtwUtilFsReadStream.getList_File_Extension;
var f1 = STtwUtilFsWriteStream.writeFile;
var f2 = STtwUtilFsReadStream.getFile;

var aCPath = STtwUtilFsReadStream.getList_Directory( path0 );
f1( path0 + "__list.json", JSON.stringify( aCPath, null, "\t" ) );

var i=0, iLen=aCPath.length;
for( ; i<iLen; ++i )
{
	var sCPath = path0 + aCPath[ i ] + "/";
	var a = STtwUtilFsReadStream.getList_Directory( sCPath );
	var sDefine = a.pop();
	//f1(sCPath + "__define/__listPackage.json", JSON.stringify( a ) );
	f1( sCPath + "__define/__listPackage.json", JSON.stringify( a, null, "\t" ) );
	a.unshift( sDefine );
	f1( sCPath + "__list.json", JSON.stringify( a, null, "\t" ) );
	var aPath = a;
	var path;
	var packageNmC = "global." + aCPath[ i ] + ".";
	var namespace = "";
	var j=0; jLen=aPath.length;
	for( j; j<jLen; ++j )
	{
		namespace = packageNmC + aPath[ j ] + ".";
		console.log( "namespace : " + namespace );
		path = sCPath + aPath[ j ] + "/";
		var b = f0( path, ".js" );
		var k=0, kLen=b.length;
		for( ; k<kLen; ++k )
		{
			b[ k ] = b[ k ].replace( namespace, "" ).replace( ".js", "" );
			console.log( "JS File Name : " +  b[ k ] );
		}
		//f1( path + "/__list.json", JSON.stringify( b ) );
		f1( path + "/__list.json", JSON.stringify( b, null, "\t" ) );
	}
}
console.log( "---------- [ E ] - CREATE FILE - ..js/??/??/__list.json. ----------" );
//----------------------------------------------------------------------------------------------------;
console.log( "---------- [ S ] - CREATE FILE - ..js/??/__define/200_define_global.??.?? ----------" );
var regExp0 = /\<\!=name=\!\>/gi;
var regExp1 = /\<\!=key=\!\>/gi;
var template = f2( "createJS__js.namespace.__define.200_define__files.template" ).toString( "utf8" );

var i=0, iLen=aCPath.length;
for( ; i<iLen; ++i )
{
	var sCPath = path0 + aCPath[ i ] + "/__define/";
	var a = JSON.parse( f2( sCPath + "__listPackage.json" ) );
	var s0 = template.replace( regExp0, aCPath[ i ] );
	f1( sCPath + "000_define_global." + aCPath[ i ] + ".js", s0.replace( regExp1, "" ).replace( "..", "" ).replace( ". ", " " ).replace( ".;", "" ).replace( ".;", "" ) );
	var j=0, jLen=a.length;
	for( ; j<jLen; ++j )
	{
		var s1 = s0.replace( regExp1, a[ j ] );
		console.log( "namespace : global." + aCPath[ i ] + "." + a[ j ] );
		f1( sCPath + "200_define_global." + aCPath[ i ] + "." + a[ j ] + ".js", s1 );
	}
}
console.log( "---------- [ E ] - CREATE FILE - ..js/??/__define/200_define_global.??.?? ----------" );
//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;