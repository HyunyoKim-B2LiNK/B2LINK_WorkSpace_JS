//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "member_public"

	//이 Collection을 참조하는 Collections;
	, "dereference" : [
		"brand_basic"
		, "public_basic"
	]

	//이 Collection이 참조하는 Collections;
	, "reference" : [
		"member_session"
	]

	//--------------------------------------------------;

	//이 Collection의 Properties;
	, "properties" : {
		//Unique Key, Primary Key(PK);
		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Email;
		, "email" : { "description" : "Email", "exampleValue" : "thdtjsdn@gmail.com"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Email's ID;
		//, "email_id" : { "description" : "Email's ID", "exampleValue" : "thdtjsdn"
		//	, "type" : "string", "length" : NumberInt( 0 )
		//}

		//Email's Domain;
		//, "email_domain" : { "description" : "Email's Domain", "exampleValue" : "gmail.com"
		//	, "type" : "string", "length" : NumberInt( 0 )
		//}

		//Name(Default);
		, "nm" : { "description" : "Name(Default)"
			, "type" : "object"
			, "properties" : {
				//All Name(Default);
				"a" : { "description" : "All Name(Default)", "exampleValue" : "송선우"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(Default);
				, "f" : { "description" : "First Name(Default)", "exampleValue" : "선우"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(Default);
				, "l" : { "description" : "Last Name(Default)", "exampleValue" : "송"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(CN);
		, "nm_cn" : { "description" : "Name(CN)"
			, "type" : "object"
			, "properties" : {
				//All Name(CN);
				"a" : { "description" : "All Name(CN)", "exampleValue" : "宋善雨"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(CN);
				, "f" : { "description" : "First Name(CN)", "exampleValue" : "善雨"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(CN);
				, "l" : { "description" : "Last Name(CN)", "exampleValue" : "宋"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(KR);
		, "nm_kr" : { "description" : "Name(KR)"
			, "type" : "object"
			, "properties" : {
				//All Name(KR);
				"a" : { "description" : "All Name(KR)", "exampleValue" : "송선우"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(KR);
				, "f" : { "description" : "First Name(KR)", "exampleValue" : "선우"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(KR);
				, "l" : { "description" : "Last Name(KR)", "exampleValue" : "송"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(US);
		, "nm_us" : { "description" : "Name(US)"
			, "type" : "object"
			, "properties" : {
				//All Name(US);
				"a" : { "description" : "All Name(US)", "exampleValue" : "SunWoo Sonw"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(US);
				, "f" : { "description" : "First Name(US)", "exampleValue" : "SunWoo"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(US);
				, "l" : { "description" : "Last Name(US)", "exampleValue" : "Song"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );