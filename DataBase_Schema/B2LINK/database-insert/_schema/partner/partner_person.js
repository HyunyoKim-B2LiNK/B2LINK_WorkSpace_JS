//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "partner_person"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [

	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"common.messenger"
		, "common.title"
		, "member.member_public"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"member_public"
		, "messenger"
		, "title"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"common"
		,"member"
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

		//Partner_Person 등록자
		, "_id$member" : { "description" : "등록자 member ID (FK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
		}

		//Partner_Person Title ID (FK)
		, "_id$title" : { "description" : "title ID(FK) ", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
		}

		//Partner_Person 등록일
		, "date_regist" : { "description": "Register Date",
			"exampleValue": getIntArray( [
				2016,
				10,
				27,
				12,
				20,
				30
			] )
			, "type": "array"
			, "length": NumberInt( 6 )
		}
		//Partner_Person Description(Default)
		, "description": {
			"description": "Partner_person Description",
			"exampleValue": "",
			"type": "string",
			"length": NumberInt( 0 )
		}

		//Partner_Person Description(CN)
		, "description_cn": {
			"description": "Partner_person Description(CN)",
			"exampleValue": "",
			"type": "string",
			"length": NumberInt( 0 )
		}

		//Partner_Person Description(KR)
		, "description_kr": {
			"description": "Partner_person Description(KR)",
			"exampleValue": "",
			"type": "string",
			"length": NumberInt( 0 )
		}

		//Partner_Person Description(US)
		, "description_us": {
			"description": "Partner_person Description(US)",
			"exampleValue": "",
			"type": "string",
			"length": NumberInt( 0 )
		}

		//Partner_Person Telephone Number
		, "division" : { "description" : "부서", "exampleValue" : "구매부"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Partner_Person Email;
		, "email" : { "description" : "Email", "exampleValue" : "b2link@gmail.com"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Partner_Person messenger
		, "messenger" : { "description" : "메신저"
			, "type" : "object"
			, "properties" : {
				//messenger Type ID (FK)
				"_id$messenger_type" : { "description" : "메신저 종류 ID (FK)" , "exampleValue" : NumberInt( 0 )
					, "type" : "uint", "length" : NumberInt( 0 )
				}
				//messenger USER ID
				, "id" : { "description" : "메신저 ID" , "exampleValue" : "ray@b2link.co.kr"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(Default);
		, "nm" : { "description" : "Name(Default)"
			, "type" : "object"
			, "properties" : {
				//All Name(Default);
				"a" : { "description" : "All Name(Default)", "exampleValue" : "이소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(Default);
				, "f" : { "description" : "First Name(Default)", "exampleValue" : "소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(Default);
				, "l" : { "description" : "Last Name(Default)", "exampleValue" : "이"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(CN);
		, "nm_cn" : { "description" : "Name(CN)"
			, "type" : "object"
			, "properties" : {
				//All Name(CN);
				"a" : { "description" : "All Name(CN)", "exampleValue" : "이소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(CN);
				, "f" : { "description" : "First Name(CN)", "exampleValue" : "소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(CN);
				, "l" : { "description" : "Last Name(CN)", "exampleValue" : "이"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(KR);
		, "nm_kr" : { "description" : "Name(KR)"
			, "type" : "object"
			, "properties" : {
				//All Name(KR);
				"a" : { "description" : "All Name(KR)", "exampleValue" : "이소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(KR);
				, "f" : { "description" : "First Name(KR)", "exampleValue" : "소형"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(KR);
				, "l" : { "description" : "Last Name(KR)", "exampleValue" : "이"
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Name(US);
		, "nm_us" : { "description" : "Name(US)"
			, "type" : "object"
			, "properties" : {
				//All Name(US);
				"a" : { "description" : "All Name(US)", "exampleValue" : "sohyung lee"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//First Name(US);
				, "f" : { "description" : "First Name(US)", "exampleValue" : "sohyung"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Last Name(US);
				, "l" : { "description" : "Last Name(US)", "exampleValue" : "lee"
					, "type" : "string", "length" : NumberInt( 0 )
				}

				//Middle Name(US);
				, "m" : { "description" : "Middle Name(US)" , "exampleValue" : ""
					, "type" : "string", "length" : NumberInt( 0 )
				}
			}
		}

		//Partner_Person 휴대전화
		, "phone_cell" : { "description" : "개인 휴대전화 번호", "exampleValue" : "+82-10-4437-5144"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Partner_Person 직통 팩스
		, "phone_fax" : { "description" : "직통 Fax번호", "exampleValue" : "+82-2-1899-0534"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Partner_Person Telephone Number
		, "phone_tel" : { "description" : "개인 직통 번호", "exampleValue" : "+82-2-1899-0534"
			, "type" : "string", "length" : NumberInt( 0 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).partner.insert( d );
