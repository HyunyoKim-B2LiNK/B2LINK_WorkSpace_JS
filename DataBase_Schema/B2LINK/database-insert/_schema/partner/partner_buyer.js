//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "partner_buyer"

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
		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : 0
			, "minValue" : 0
			, "maxValue" : 999999999
		}

		//Partner_buyer Country Code
		, "_id$country" : { "description" : "회사 국적", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : 0
		}

		//Member ID Collection
		, "_ids$member" : {
			 "description" : "자사 member ID collection"
			 , "type" : "object"
			 , "properties" : {
				 //담당자 Member ID (FK)
				 "manager" : {
					 "description" : "자사 담당자 member ID (FK)", "exampleValue" : NumberInt( 0 )
					 , "type" : "uint" , length : 0
				 }
				 //등록자 Member ID (FK)
				 , "register" : {
					 "description" : "해당 파트너사 등록자 (FK)", "exampleValue" : NumberInt( 0 )
					 , "type" : "uint",  length : 0
				 }
			 }
		}

		//Partner_buyer Manger Person ID
		, "_id$partner_person" : { "description" : "파트너사 담당자 ID(FK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : 0
		}

		//Partner_buyer  Address(Default)
		, "address" : { "description" : "회사 주소", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer  Address(CN)
		, "address_cn" : { "description" : "회사 주소(CN)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer  Address(KR)
		, "address_kr" : { "description" : "회사 주소(KR)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer  Address(US)
		, "address_us" : { "description" : "회사 주소(US)", "exampleValue" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
			, "type" : "string", "length" : 0
		}

		//Company Registration Code
		, "company_registration_number " : { "description" : "사업자등록번호", "exampleValue" : "123456789"
			, "type" : "string", "length" : 0
		}

		//Register Date
		, "date_regist" : { "description" : "Register Date", "exampleValue" : getIntArray([ 2016, 10, 27, 12, 20, 30 ])
			, "type" : "array", "length" : 0
		}

		//Partner_buyer Description
		, "description" : { "description" : "Partner_buyer Description", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Description(CN)
		, "description_cn" : { "description" : "Partner_buyer Description(CN)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Description(KR)
		, "description_kr" : { "description" : "Partner_buyer Description(KR)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Description(US)
		, "description_us" : { "description" : "Partner_buyer Description(US)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Email
		, "email" : { "description" : "회사 대표 Email", "exampleValue" : "b2link@b2link.co.kr"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Name(Default)
		, "nm" : { "description" : "Partner_buyer Name(Default)", "exampleValue" : "비투링크"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Name(CN)
		, "nm_cn" : { "description" : "Partner_buyer Name(CN)", "exampleValue" : ""
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Name(KR)
		, "nm_kr" : { "description" : "Partner_buyer Name(KR)", "exampleValue" : "비투링크"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Name(US)
		, "nm_us" : { "description" : "Partner_buyer Name(US)", "exampleValue" : "B2Link Inc,"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer CEO Name(Default)
		, "nm_ceo" : { "description" : "CEO Name(Default)"
			, "type" : "object"
			, "properties" : {
				//All Name(Default);
				"a" : { "description" : "All Name(Default)", "exampleValue" : "이소형"
					, "type" : "string", "length" : 0
				}

				//First Name(Default);
				, "f" : { "description" : "First Name(Default)", "exampleValue" : "소형"
					, "type" : "string", "length" : 0
				}

				//Last Name(US);
				, "l" : { "description" : "Last Name(Default)", "exampleValue" : "이"
					, "type" : "string", "length" : 0
				}
			}
		}

		//Partner_buyer  CEO Name(CN)
		, "nm_ceo_cn" : { "description" : "CEO Name(CN)"
			, "type" : "object"
			, "properties" : {
				//All Name(CN);
				"a" : { "description" : "All Name(CN)", "exampleValue" : "이소형"
					, "type" : "string", "length" : 0
				}

				//First Name(CN);
				, "f" : { "description" : "First Name(CN)", "exampleValue" : "소형"
					, "type" : "string", "length" : 0
				}

				//Last Name(US);
				, "l" : { "description" : "Last Name(CN)", "exampleValue" : "이"
					, "type" : "string", "length" : 0
				}
			}
		}

		//Partner_buyer  CEO Name(KR)
		, "nm_ceo_kr" : { "description" : "CEO Name(KR)"
			, "type" : "object"
			, "properties" : {
				//All Name(KR);
				"a" : { "description" : "All Name(KR)", "exampleValue" : "이소형"
					, "type" : "string", "length" : 0
				}

				//First Name(KR);
				, "f" : { "description" : "First Name(KR)", "exampleValue" : "소형"
					, "type" : "string", "length" : 0
				}

				//Last Name(KR);
				, "l" : { "description" : "Last Name(KR)", "exampleValue" : "이"
					, "type" : "string", "length" : 0
				}
			}
		}

		//Partner_buyer  CEO Name(US)
		, "nm_ceo_us" : { "description" : "CEO Name(US)"
			, "type" : "object"
			, "properties" : {
				//All Name(US);
				"a" : { "description" : "All Name(US)", "exampleValue" : "sohyung lee"
					, "type" : "string", "length" : 0
				}

				//First Name(US);
				, "f" : { "description" : "First Name(US)", "exampleValue" : "so hyung"
					, "type" : "string", "length" : 0
				}

				//Last Name(US);
				, "l" : { "description" : "Last Name(US)", "exampleValue" : "lee"
					, "type" : "string", "length" : 0
				}

				//Middle Name(US);
				, "m" : { "description" : "Middle Name(US)" , "exampleValue" : ""
					, "type" : "string", "length" : 0
				}
			}
		}

		//Partner_buyer Fax Number
		, "phone_fax" : { "description" : "회사 대표 Fax번호", "exampleValue" : "+82215885584"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Telephone Number
		, "phone_tel" : { "description" : "회사 대표 전화번호", "exampleValue" : "+82215885584"
			, "type" : "string", "length" : 0
		}

		//Partner_buyer Homepage URL
		, "url" : { "description" : "Partner_buyer Hompage URL", "exampleValue" : "http://www.b2link.co.kr"
			, "type" : "string", "length" : 0
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).partner.insert( d );
