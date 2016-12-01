/*/
{
}
//*/
var a = [
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.partner_buyer_online.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.partner_buyer_online.insert( io );
};