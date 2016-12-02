var a = [
	  {"postal_code":"06596","addr0":"서울시","addr1":"서초구","addr2":"서초동","addr":"서울시 서초구 서초동"}
	, {"postal_code":"06148","addr0":"서울시","addr1":"강남구","addr2":"역삼동","addr":"서울시 강남구 역삼동"}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.postalcode_kr.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.postalcode_kr.insert( io );
};
