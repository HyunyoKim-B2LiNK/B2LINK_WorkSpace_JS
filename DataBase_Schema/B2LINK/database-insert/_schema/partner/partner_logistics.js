//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "partner_logistics"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	,"dereference": [
		"contract.contract_basic"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection": [
		"contract_basic"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database": [
		"contract"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference": [
		"list_static.country"
		, "member.member_public"
		, "partner.partner_person"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection": [
		"country"
		, "member_public"
		, "partner_person"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database": [
		"list_static"
		, "member"
		, "partner"
	]

	//이 Collection의 Properties;
	, "properties": {
		//Unique Key, Primary Key(PK);
		"_id" : {
			"description" : "Unique Key, Primary Key(PK)"
			, "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Partner_Logistics Country Code
		, "_id$country": {
			"description": "회사 국적"
			, "exampleValue": NumberInt( 0 )
			, "type": "uint"
			, "length": NumberInt( 0 )
		}

		//Member ID Collection
		, "_ids$member": {
			"description": "자사 member ID collection"
			, "type": "object"
			, "properties": {
				"manager": {
					"description": "자사 담당자 member ID (FK)"
					, "exampleValue": NumberInt( 0 )
					, "type": "uint"
					, "length": NumberInt( 0 )
				}
				, "register": {
					"description": "해당 파트너사 등록자 (FK)"
					, "exampleValue": NumberInt( 0 )
					, "type": "uint"
					, "length": NumberInt( 0 )
				}
			}
		}

		//Partner_Logistics Manger Person ID
		, "_id$partner_person": {
			"description": "파트너사 담당자 ID(FK)"
			, "exampleValue": NumberInt( 0 )
			, "type": "uint"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics  Address(Default)
		, "address": {
			"description": "회사 주소"
			, "exampleValue": "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics  Address(CN)
		, "address_cn": {
			"description": "회사 주소(CN)"
			, "exampleValue": "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics  Address(KR)
		, "address_kr": {
			"description": "회사 주소(KR)"
			, "exampleValue": "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics  Address(US)
		, "address_us": {
			"description": "회사 주소(US)"
			, "exampleValue": "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Company Registration Code
		, "company_registration_number ": {
			"description": "사업자등록번호"
			, "exampleValue": "123456789"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Register Date
		, "date_regist": {
			"description": "Register Date"
			, "exampleValue": getIntArray([
				2016
				, 10
				, 27
				, 12
				, 20
				, 30
			])
			, "type": "array"
			, "length": 6
		}

		//Partner_Logistics Description
		, "description": {
			"description": "Partner Description"
			, "exampleValue": "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Description(CN)
		, "description_cn": {
			"description": "Partner Description(CN)"
			, "exampleValue": "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Description(KR)
		, "description_kr": {
			"description": "Partner Description(KR)"
			, "exampleValue": "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Description(US)
		, "description_us": {
			"description": "Partner Description(US)"
			, "exampleValue": "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Email
		, "email": {
			"description": "Email"
			, "exampleValue": "thdtjsdn@gmail.com"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Name(Default)
		, "nm": {
			"description": "Name(Default)"
			, "exampleValue": "비투링크"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Name(CN)
		, "nm_cn": {
			"description": "Name(CN)"
			, "exampleValue": "비투링크"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Name(KR)
		, "nm_kr": {
			"description": "Name(KR)"
			, "exampleValue": "비투링크"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Name(US)
		, "nm_us": {
			"description": "Name(US)"
			, "exampleValue": "비투링크"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics CEO Name(Default)
		, "nm_ceo": {
			"description": "CEO Name(Default)"
			, "type": "object"
			, "properties": {
				//All Name(Default);
				"a": {
					"description": "All Name(KR)"
					, "exampleValue": "송선우"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//First Name(Default);
				, "f": {
					"description": "First Name(KR)"
					, "exampleValue": "선우"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//Last Name(US);
				, "l": {
					"description": "Last Name(KR)"
					, "exampleValue": "송"
					, "type": "string"
					, "length": NumberInt( 0 )
				}
			}
		}

		//Partner_Logistics  CEO Name(CN)
		, "nm_ceo_cn": {
			"description": "CEO Name(CN)"
			, "type": "object"
			, "properties": {
				//All Name(CN);
				"a": {
					"description": "All Name(CN)"
					, "exampleValue": "宋善雨"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//First Name(CN);
				, "f": {
					"description": "First Name(CN)"
					, "exampleValue": "善雨"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//Last Name(US);
				, "l": {
					"description": "Last Name(CN)"
					, "exampleValue": "宋"
					, "type": "string"
					, "length": NumberInt( 0 )
				}
			}
		}

		//Partner_Logistics  CEO Name(KR)
		, "nm_ceo_kr": {
			"description": "CEO Name(KR)"
			, "type": "object"
			, "properties": {

				//All Name(KR);
				"a": {
					"description": "All Name(KR)"
					, "exampleValue": "송선우"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//First Name(KR);
				, "f": {
					"description": "First Name(KR)"
					, "exampleValue": "선우"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//Last Name(KR);
				, "l": {
					"description": "Last Name(KR)"
					, "exampleValue": "송"
					, "type": "string"
					, "length": NumberInt( 0 )
				}
			}
		}

		//Partner_Logistics  CEO Name(US)
		, "nm_ceo_us": {
			"description": "CEO Name(US)"
			, "type": "object"
			, "properties": {
				//All Name(US);
				"a": {
					"description": "All Name(US)"
					, "exampleValue": "SunWoo Song"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//First Name(US);
				, "f": {
					"description": "First Name(US)"
					, "exampleValue": "SunWoo"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//Last Name(US);
				, "l": {
					"description": "Last Name(US)"
					, "exampleValue": "Song"
					, "type": "string"
					, "length": NumberInt( 0 )
				}

				//Middle Name(US);
				, "m": {
					"description": "Middle Name(US)"
					, "exampleValue": ""
					, "type": "string"
					, "length": NumberInt( 0 )
				}
			}
		}

		//Partner_Logistics Fax Number
		, "phone_fax": {
			"description": "Fax Number"
			, "exampleValue": "+82-2-1899-0534"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Telephone Number
		, "phone_tel": {
			"description": "Phone Number"
			, "exampleValue": "+82-2-1899-0534"
			, "type": "string"
			, "length": NumberInt( 0 )
		}

		//Partner_Logistics Homepage URL
		, "url": {
			"description": "Hompage URL"
			, "exampleValue": "www.b2link.co.kr"
			, "type": "string"
			, "length": NumberInt( 0 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).partner.insert( d );
