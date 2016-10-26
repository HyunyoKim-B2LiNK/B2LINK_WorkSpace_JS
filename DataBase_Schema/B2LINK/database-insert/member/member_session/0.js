//----------------------------------------------------------------------------------------------------;
var oDoc = {
	"_id" : 0

	, "sid" : ""//sessionid;
	, "mid" : "thdtjsdn@gmail.com"//userid;

	, "d_ex" : ""//date_expire;
};

oDoc = JSON.stringify( oDoc );

var db0 = db.getSiblingDB( "member" );
	db0.exec( "member_session$addDoc( " + oDoc + " );" );
	//db0.exec( "member_session$checkSession__Sign_in( " + oDoc + " );" );
