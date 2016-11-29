var d = {
	"_id" : "member_basic"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"member.member_session"
		, "member.member_session_log"
		, "member.member_date"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"member_session"
		, "member_session_log"
		, "member_date"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"member"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"member.member_session"
		, "member.member_session_log"
		, "member.member_date"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"member_session"
		, "member_session_log"
		, "member_date"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"member"
	]

	//--------------------------------------------------;

	//이 Collection의 Properties;
	, "properties" : {
		//Unique Key, Primary Key(PK);
		"_id" : {
			"description" : "Unique Key, Primary Key(PK)"
			, "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Member ID;
		, "mid" : { "description" : "Member ID", "exampleValue" : "thdtjsdn@gmail.com", "type" : "string", "length" : NumberInt( 0 ) }

		//Member Password;
		, "mpw" : { "description" : "Member Password", "exampleValue" : "123qweasd", "type" : "string", "length" : NumberInt( 0 ) }

		//Boolean Member Connection;
		, "bConn" : { "description" : "Boolean Member Connection", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 1 )
			, "default" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 1 )
			, "values" : [ NumberInt( 0 ), NumberInt( 1 ) ]
			, "valuesMap" : { "0" : NumberInt( 1 ), "1" : NumberInt( 1 ) }
		}

		//Email;
		, "email" : { "description" : "Email", "exampleValue" : "thdtjsdn@gmail.com", "type" : "string", "length" : NumberInt( 0 ) }

		//Email's ID;
		//, "email_id" : { "description" : "Email's ID", "exampleValue" : "thdtjsdn"
		//	, "type" : "string", "length" : 0
		//}

		//Email's Domain;
		//, "email_domain" : { "description" : "Email's Domain", "exampleValue" : "gmail.com"
		//	, "type" : "string", "length" : 0
		//}

		//Name(Default);
		, "nm" : {
			"description" : "Name(Default)"
			, "type" : "object"
			, "properties" : {
				//All Name(Default);
				"a" : { "description" : "All Name(Default)", "exampleValue" : "송선우", "type" : "string", "length" : NumberInt( 0 ) }

				//First Name(Default);
				, "f" : { "description" : "First Name(Default)", "exampleValue" : "선우", "type" : "string", "length" : NumberInt( 0 ) }

				//Last Name(Default);
				, "l" : { "description" : "Last Name(Default)", "exampleValue" : "송", "type" : "string", "length" : NumberInt( 0 ) }
			}
		}

		//Name(CN);
		, "nm_cn" : { "description" : "Name(CN)", "type" : "object"
			, "properties" : {
				//All Name(CN);
				"a" : { "description" : "All Name(CN)", "exampleValue" : "宋善雨", "type" : "string", "length" : NumberInt( 0 ) }

				//First Name(CN);
				, "f" : { "description" : "First Name(CN)", "exampleValue" : "善雨", "type" : "string", "length" : NumberInt( 0 ) }

				//Last Name(CN);
				, "l" : { "description" : "Last Name(CN)", "exampleValue" : "宋", "type" : "string", "length" : NumberInt( 0 ) }
			}
		}

		//Name(KR);
		, "nm_kr" : { "description" : "Name(KR)", "type" : "object"
			, "properties" : {
				//All Name(KR);
				"a" : { "description" : "All Name(KR)", "exampleValue" : "송선우", "type" : "string", "length" : NumberInt( 0 ) }

				//First Name(KR);
				, "f" : { "description" : "First Name(KR)", "exampleValue" : "선우", "type" : "string", "length" : NumberInt( 0 ) }

				//Last Name(KR);
				, "l" : { "description" : "Last Name(KR)", "exampleValue" : "송", "type" : "string", "length" : NumberInt( 0 ) }
			}
		}

		//Name(US);
		, "nm_us" : { "description" : "Name(US)", "type" : "object"
			, "properties" : {
				//All Name(US);
				"a" : { "description" : "All Name(US)", "exampleValue" : "SunWoo Song", "type" : "string", "length" : NumberInt( 0 ) }

				//First Name(US);
				, "f" : { "description" : "First Name(US)", "exampleValue" : "SunWoo", "type" : "string", "length" : NumberInt( 0 ) }

				//Last Name(US);
				, "l" : { "description" : "Last Name(US)", "exampleValue" : "Song", "type" : "string", "length" : NumberInt( 0 ) }

				//Middle Name(US);
				, "m" : { "description" : "Middle Name(US)" , "exampleValue" : "", "type" : "string", "length" : NumberInt( 0 ) }
			}
		}

		//Signin(Login) 실패 횟수;
		, "nSignInFail" : { "description" : "Signin(Login) 실패 횟수", "exampleValue" : NumberInt( 1 )
			, "type" : "uint", "length" : NumberInt( 1 ), "default" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 1 )
			, "values" : [ NumberInt( 0 ), NumberInt( 1 ) ]
			, "valuesMap" : { "0" : NumberInt( 1 ), "1" : NumberInt( 1 ) }
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );