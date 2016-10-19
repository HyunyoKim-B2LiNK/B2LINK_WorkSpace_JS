/*/
{
	cd : 1//Code - 1:online, 2:offline
	, nm : "online"
}
//*/
var a = [
	  { cd : 1, nm : "online" }
	, { cd : 2, nm : "offline" }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.transaction.insert( io );
};