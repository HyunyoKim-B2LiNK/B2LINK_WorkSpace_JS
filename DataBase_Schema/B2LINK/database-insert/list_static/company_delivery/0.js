/*/
{
	  nm_kr : ""
	, nm_us : ""
	, nm_cn : ""
	, tel : ""
	, url : ""
}
//*/
var a = [
	{ nm_kr : "EMS", nm_us : "EMS", nm_cn : "EMS", tel : "1588-1300", url : "ems.epost.go.kr" }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.company_delivery.insert( io );
};