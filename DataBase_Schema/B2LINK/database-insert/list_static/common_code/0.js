var a = [
	  {"code0":"0001","code1":"0001","code2":"0000","code":"000100010000","desc":"카테고리관리","bUse":1}
	, {"code0":"0001","code1":"0001","code2":"0001","code":"000100010001","desc":"카테고리관리","bUse":1}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
		io.bUse = NumberInt( io.bUse );
	db0.common_code.insert( io );
};
