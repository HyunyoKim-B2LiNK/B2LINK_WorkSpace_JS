var a = [{"postal_code":"10120","addr0":"서울시","addr1":"서초구","addr2":"서초동","addr":"서울시 서초구 서초동"}];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.postalcode_kr.insert( io );
};
