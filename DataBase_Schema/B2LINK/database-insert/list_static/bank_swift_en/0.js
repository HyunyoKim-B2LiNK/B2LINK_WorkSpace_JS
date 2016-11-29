var a = [{"nm":"AMERICAN FIRST NATIONAL BANK","nm_kr":"AMERICAN FIRST NATIONAL BANK","nm_cn":"恆豐銀行","nm_en":"AMERICAN FIRST NATIONAL BANK","city":"HOUSTON,TX","branch":"","swift_code":"AFNBUS4H"}];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.bank_swift_en.insert( io );
};
