var d = {
	"_id" : "member_basic"

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
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );
