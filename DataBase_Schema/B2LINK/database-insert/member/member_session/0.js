var a = [
	{
		"_id" : 0

		, "sid" : ""//sessionid;
		, "mid" : "thdtjsdn@gmail.com"//userid;

		, "d_ex" : ""//date_expire;
	}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "member" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "member_session$addDoc( " + JSON.stringify( io ) + " );" );
};