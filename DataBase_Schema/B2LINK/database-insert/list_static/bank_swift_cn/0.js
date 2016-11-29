var a = [{"nm":"中国銀行","nm_kr":"중국은행","nm_cn":"中国銀行","nm_en":"BANK OF CHINA","city":"BEIJING","branch":"(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)","swift_code":"BKCHCNBJBPS"}];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.bank_swift_cn.insert( io );
};