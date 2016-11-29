var a = [{"nm":"국민은행","nm_kr":"국민은행","nm_cn":"國民銀行","nm_en":"KookMin Bank","city":"SEOUL","branch":"","swift_code":"CZNBKRSE"}];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.bank_swift_kr.insert( io );
};
