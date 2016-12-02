var a = [
	  {"postal_code":"101200","addr0":"北京市","addr1":"北京市","addr2":"东城区","addr":"北京市东城区"}
	, {"postal_code":"110112","addr0":"北京市","addr1":"北京市","addr2":"通州区","addr":"北京市通州区"}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.postalcode_cn.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.postalcode_cn.insert( io );
};
