var a = [
	  {"code0": 1000,"code1": 0,"code2": 0,"code":"100000000000","desc":"카테고리관리","bUse":1}
	, {"code0": 1000,"code1": 1000,"code2": 0,"code":"100010000000","desc":"카테고리1","bUse":1}
	, {"code0": 1000,"code1": 1000,"code2": 10000,"code":"100010001000","desc":"카테고리1-1","bUse":1}
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
