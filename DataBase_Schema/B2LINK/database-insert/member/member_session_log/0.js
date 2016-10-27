var a = [
	{
		"sid" : ""//session id;
		, "mid" : "thdtjsdn@gmail.com"//member id;

		, "date" : new Date()

		, "d_ex" : {//date_expire;
			"y" : 0
			, "m" : 0
			, "d" : 0
			, "ho" : 0
			, "se" : 0
			, "mi" : 0
		}
	}
	, {
		"sid" : ""//session id;
		, "mid" : "raybirdy@gmail.com"//member id;

		, "date" : new Date()

		, "d_ex" : {//date_expire;
			"y" : 0
			, "m" : 0
			, "d" : 0
			, "ho" : 0
			, "se" : 0
			, "mi" : 0
		}
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
	db0.exec( "member_session_log$addDoc( " + JSON.stringify( io ) + " );" );
};