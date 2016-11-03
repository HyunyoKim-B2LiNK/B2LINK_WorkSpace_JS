var a = [
	  { "sid" : "0", "mid" : "thdtjsdn@gmail.com", "d_ex" : "" }
	, { "sid" : "1", "mid" : "raybirdy@gmail.com", "d_ex" : "" }
	, { "sid" : "2", "mid" : "ciruin@gmail.com"  , "d_ex" : "" }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "member" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "member_session$addDoc( " + JSON.stringify( io ) + " );" );
};