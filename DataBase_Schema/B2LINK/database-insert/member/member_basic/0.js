//----------------------------------------------------------------------------------------------------;
var oDoc = {
	"uid" : "thdtjsdn@gmail.com"//{String};
	, "upw" : "123qweasd"//{String};

	, "bConn" : 0//{uint} 0 or 1 - booleanConnection;

	, "email" : "thdtjsdn@gmail.com"//{String|Array};
	//, "email_id" : "thdtjsdn"//{String};
	//, "email_domain" : "gmail.com"//{String};

	, "nm" : {
		"a" : "송선우"//{String} Full Name;
		, "f" : "선우"//{String} First Name;
		, "l" : "송"//{String} Last Name;
	}
	, "nm_cn" : {
		"a" : ""//{String} Full Name - CH;
		, "f" : ""//{String} First Name - CH;
		, "l" : ""//{String} Last Name - CH;
	}
	, "nm_kr" : {
		"a" : "송선우"//{String} Full Name - KR;
		, "f" : "선우"//{String} First Name - KR;
		, "l" : "송"//{String} Last Name - KR;
	}
	, "nm_us" : {
		"a" : "SunWoo Song"//{String} Full Name - US;
		, "f" : "SunWoo"//{String} First Name - US;
		, "l" : "Song"//{String} Last Name - US;
	}

	, "nSignInFail" : 0//{uint};
};

oDoc = JSON.stringify( oDoc );

var db0 = db.getSiblingDB( "member" );
	db0.exec( "member_basic$sign_up( " + oDoc + " );" );
