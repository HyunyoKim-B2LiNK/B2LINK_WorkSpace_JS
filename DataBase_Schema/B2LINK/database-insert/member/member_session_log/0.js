//----------------------------------------------------------------------------------------------------;
var oDoc = {
	"_id" : 0

	, "sid" : ""//sessionid;
	, "mid" : ""//userid;

	, "date" : new Date()

	, "d_ex" : {//date_expire;
		"y" : 0
		, "m" : 0
		, "d" : 0
		, "ho" : 0
		, "se" : 0
		, "mi" : 0
	}
};

oDoc = JSON.stringify( oDoc );

var db0 = db.getSiblingDB( "member" );
	db0.exec( "member_session_log$addDoc( " + oDoc + " );" );
	//db0.exec( "member_session_log$checkSession__Sign_in( " + oDoc + " );" );
