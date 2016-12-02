var a = [
	  {"nm":"AMERICAN FIRST NATIONAL BANK","nm_kr":"AMERICAN FIRST NATIONAL BANK","nm_cn":"恆豐銀行","nm_us":"AMERICAN FIRST NATIONAL BANK","city":"HOUSTON,TX","branch":"","swift_code":"AFNBUS4H"}
	, {"nm":"CITIBANK N.A.","nm_kr":"CITIBANK N.A.","nm_cn":"花旗银行","nm_us":"CITIBANK N.A.","city":"NEW YORK,NY","branch":"(AMERICAN DEPOSITARY RECEIPTS)","swift_code":"CITIUS33ADR"}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.bank_swift_us.insert( io );
};
