var a = [
	{
		"sid" : ""//session id;
		, "mid" : "thdtjsdn@gmail.com"//member id;
		, "mpw" : "123qweasd"//member password;

		, "d_ex" : ""//date_expire;
	}
	, {
		"sid" : ""//session id;
		, "mid" : "raybirdy@gmail.com"//member id;
		, "mpw" : "123qweasd"//member password;

		, "d_ex" : ""//date_expire;
	}
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