var a = [
	  {"nm":"中国銀行","nm_kr":"중국은행","nm_cn":"中国銀行","nm_us":"BANK OF CHINA","city":"BEIJING","branch":"(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)","swift_code":"BKCHCNBJBPS"}
	, {"nm":"北京银行","nm_kr":"북경은행","nm_cn":"北京银行","nm_us":"BANK OF BEIJING","city":"BEIJING","branch":"(BEIJING MANAGEMENT DEPT.)","swift_code":"BJCNCNBJ021"}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.bank_swift_cn.insert( io );
};
