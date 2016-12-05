var a = [
 {
	"nm" :  "카카오톡"
	, "nm_cn" : ""
	, "nm_kr" : "카카오톡"
	, "nm_us" : "kakaotalk"
	, "description" : "www.kakaotalk.co.kr"
	, "description_cn" : "www.kakaotalk.co.kr"
	, "description_kr" : "www.kakaotalk.co.kr"
	, "description_us" : "www.kakaotalk.co.kr"
	}, {
	"nm" :  "네이트온"
	, "nm_cn" : ""
	, "nm_kr" : "네이트온"
	, "nm_us" : "nateon"
	, "description" : "www.nateon.com"
	, "description_cn" : "www.nateon.com"
	, "description_kr" : "www.nateon.com"
	, "description_us" : "www.nateon.com"
 }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.messenger.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "messenger$addDoc( " + JSON.stringify( io ) + " );" );
};
