//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "brand_basic"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"product.product_basic"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"product_basic"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"product"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"member.member_public"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"member_public"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"member"
	]

	//--------------------------------------------------;

	//이 Collection의 Properties;
	, "properties" : {
		//Unique Key, Primary Key(PK);
		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : 0
			, "type" : "uint", "length" : NumberInt(0)
			, "minValue" : NumberInt(0)
			, "maxValue" : NumberInt(999999999)
		}

		//Register Member ID
		, "_id$member_public" : { "description" : "member_public ID(FK)", "exampleValue" : 0
			, "type" : "uint", "length" : NumberInt(0)
		}

		//Regist Date
		, "date_regist" : { "description" : "Regist Date", "exampleValue" : [ NumberInt(2016), NumberInt(10), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]
			, "type" : "array", "length" : NumberInt(0)
		}

		//Brand Descroption
		, "description" : { "description" : "Brand Description", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Descroption(CN)
		, "description_cn" : { "description" : "Brand Description(CN)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Descroption(KR)
		, "description_kr" : { "description" : "Brand Description(KR)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Descroption(US)
		, "description_us" : { "description" : "Brand Description(US)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Name(Default)
		, "nm" : { "description" : "Brand Name(Default)", "exampleValue" : "비투링크"
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Name(CN)
		, "nm_cn" : { "description" : "Brand Name(CN)", "exampleValue" : ""
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Name(KR)
		, "nm_kr" : { "description" : "Brand Name(KR)", "exampleValue" : ""
			, "type" : "string", "length" : NumberInt(0)
		}

		//Brand Name(US)
		, "nm_us" : { "description" : "Brand Name(US)", "exampleValue" : "B2Link Inc,"
			, "type" : "string", "length" : NumberInt(0)
		}

		//BRAND Homepage URL
		, "url" : { "description" : "Brand Hompage URL", "exampleValue" : "http://www.b2link.co.kr"
			, "type" : "string", "length" : NumberInt(0)
		}

		//BRAND Logo Image URL
		, "url_logo" : { "description" : "Brand Logo Image URL", "exampleValue" : "//path/logo.img"
			, "type" : "string", "length" : NumberInt(0)
		}

		//BRAND TradeMark Image URL
		, "url_trademark" : { "description" : "Brand TradeMark Image URL", "exampleValue" : "//path/logo.img"
			, "type" : "string", "length" : NumberInt(0)
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).brand.insert( d );
