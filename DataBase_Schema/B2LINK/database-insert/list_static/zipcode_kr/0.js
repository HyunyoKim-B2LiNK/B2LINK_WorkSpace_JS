var a = [
	  {"zip_code":"KS013","addr":"서초구","addr_kr":"서초구","addr_us":"Seocho","addr_cn":"瑞草区"}
	, {"zip_code":"KS007","addr":"강릉시","addr_kr":"강릉시","addr_us":"KANGNUNG","addr_cn":"江陵市"}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.zipcode_kr.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.zipcode_kr.insert( io );
};