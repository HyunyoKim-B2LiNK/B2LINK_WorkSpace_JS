var d = {
	"_id" : "member_basic"

	, "mid" : "string_email"//{String};
	, "mpw" : "string_password"//{String};

	, "bConn" : "uint"//{uint} 0 or 1 - booleanConnection;

	, "email" : "string_email"//{String|Array};
	//, "email_id" : "string"//{String};
	//, "email_domain" : "string"//{String};

	, "nm" : {
		"a" : "string"//{String} Full Name;
		, "f" : "string"//{String} First Name;
		, "l" : "string"//{String} Last Name;
	}
	, "nm_cn" : {
		"a" : "string"//{String} Full Name - CH;
		, "f" : "string"//{String} First Name - CH;
		, "l" : "string"//{String} Last Name - CH;
	}
	, "nm_kr" : {
		"a" : "string"//{String} Full Name - KR;
		, "f" : "string"//{String} First Name - KR;
		, "l" : "string"//{String} Last Name - KR;
	}
	, "nm_us" : {
		"a" : "string"//{String} Full Name - US;
		, "f" : "string"//{String} First Name - US;
		, "l" : "string"//{String} Last Name - US;
	}

	, "nSignInFail" : "uint"//{uint};
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
