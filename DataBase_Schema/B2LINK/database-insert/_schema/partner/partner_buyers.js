//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "partner_buyers"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"contract.contract_basic"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"contract_basic"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"contract"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"list_static.country"
		,"member.member_public"
		,"partner.partner_person"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"country"
		,"member_public"
		,"partner_person"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"list_static"
		,"member"
		,"partner"
	]

	//--------------------------------------------------;

	//이 Collection의 Properties;
	, "properties" : {
		//Unique Key, Primary Key(PK);
		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : 0
			, "type" : "uint", "length" : 0
			, "minValue" : 0
			, "maxValue" : 999999999
		}

		//Partner_buyers Country Code
		, "_id$country" : { "description" : "회사 국적", "exampleValue" : 0
			, "type" : "uint", "length" : 0
		}

		//Register Member ID
		, "_id$member_public" : { "description" : "자사 member_public ID(FK) 등록자", "exampleValue" : 0
			, "type" : "uint", "length" : 0
		}

		//Manager Member ID
		, "_id$member_public" : { "description" : "자사 member_public ID(FK) 담당자", "exampleValue" : 0
			, "type" : "uint", "length" : 0
		}

		//Partner_buyers Manger Person ID
		, "_id$partner_person" : { "description" : "파트너사 담당자 ID(FK)", "exampleValue" : 0
			, "type" : "uint", "length" : 0
		}

		//Partner_buyers  Address(Default)
		, "address" : { "description" : "회사 주소", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers  Address(CN)
		, "address_cn" : { "description" : "회사 주소(CN)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers  Address(KR)
		, "address_kr" : { "description" : "회사 주소(KR)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers  Address(US)
		, "address_us" : { "description" : "회사 주소(US)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Company Registration Code
		, "code_registration " : { "description" : "사업자등록번호", "exampleValue" : "123456789"
			, "type" : "string", "length" : 0
		}

		//Register Date
		, "date_regist" : { "description" : "Register Date", "exampleValue" : [ 2016, 10, 27, 12, 20, 30 ]
			, "type" : "array", "length" : 0
		}

		//Partner_buyers Description
		, "description" : { "description" : "Partner_buyers Description", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Description(CN)
		, "description_cn" : { "description" : "Partner_buyers Description(CN)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Description(KR)
		, "description_kr" : { "description" : "Partner_buyers Description(KR)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Description(US)
		, "description_us" : { "description" : "Partner_buyers Description(US)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Email
		, "email" : { "description" : "회사 대표 Email", "exampleValue" : "b2link@b2link.co.kr"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Name(Default)
		, "nm" : { "description" : "Partner_buyers Name(Default)", "exampleValue" : "비투링크"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Name(CN)
		, "nm_cn" : { "description" : "Partner_buyers Name(CN)", "exampleValue" : ""
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Name(KR)
		, "nm_kr" : { "description" : "Partner_buyers Name(KR)", "exampleValue" : "비투링크"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers Name(US)
		, "nm_us" : { "description" : "Partner_buyers Name(US)", "exampleValue" : "B2Link Inc,"
			, "type" : "string", "length" : 0
		}

		//Partner_buyers CEO Name(Default)
		, "nm_ceo" : { "description" : "CEO Name(Default)", "exampleValue" : { "a" : "이소형", "f" : "소형", "l" : "이"}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers  CEO Name(CN)
		, "nm_ceo_cn" : { "description" : "CEO Name(CN)", "exampleValue" : { "a" : "이소형", "f" : "소형", "l" : "이"}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers  CEO Name(KR)
		, "nm_ceo_kr" : { "description" : "CEO Name(KR)", "exampleValue" : { "a" : "이소형", "f" : "소형", "l" : "이"}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers  CEO Name(US)
		, "nm_ceo_us" : { "description" : "CEO Name(US)", "exampleValue" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee" , "m" : ""}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers Fax Number
		, "num_fax" : { "description" : "회사 대표 Fax번호", "exampleValue" : { "a" : "820215883366", "area_code" : "02", "c" : "82", "f" : "1588", "l" : "3366"}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers Telephone Number
		, "num_telephone" : { "description" : "회사 대표 전화번호", "exampleValue" : { "a" : "820215883366", "area_code" : "02", "c" : "82", "f" : "1588", "l" : "3366"}
			, "type" : "object", "length" : 0
		}

		//Partner_buyers Homepage URL
		, "url" : { "description" : "Partner_buyers Hompage URL", "exampleValue" : "http://www.b2link.co.kr"
			, "type" : "string", "length" : 0
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).partner.insert( d );
