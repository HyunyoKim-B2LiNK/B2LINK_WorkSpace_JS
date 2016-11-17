//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "email_detail"

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
		"list_static.country"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"country"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"list_static"
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

		//Second Level Domain;
		, "SLD" : { "description" : "Second Level Domain", "exampleValue" : "google"
			, "type" : "string", "length" : NumberInt( 0 )
			, "values" : [ "b2link", "daum", "google", "naver", "yahoo" ]
			, "valuesMap" : { "b2link" : NumberInt( 1 ), "daum" : NumberInt( 1 ), "google" : NumberInt( 1 ), "naver" : NumberInt( 1 ), "yahoo" : NumberInt( 1 ) }
		}

		//Top Level Domain;
		, "TLD" : { "description" : "Top Level Domain", "exampleValue" : "co.kr"
			, "type" : "string", "length" : NumberInt( 0 )
			, "values" : [ "co.cn", "co.jp", "co.kr", "go.cn", "go.jp", "go.kr" ]
			//Hard Coding - . 을 사용할 수 없음 _ 로 대체함;
			, "valuesMap" : { "co_cn" : NumberInt( 1 ), "co_jp" : NumberInt( 1 ), "co_kr" : NumberInt( 1 ), "go_cn" : NumberInt( 1 ), "go_jp" : NumberInt( 1 ), "go_kr" : NumberInt( 1 ) }
		}

		//Country Code Top Level Domain;
		, "ccTLD" : { "description" : "Country Code Top Level Domain", "exampleValue" : "123qweasd"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Generic Top Level Domain;
		, "gTLD" : { "description" : "Generic Top Level Domain", "exampleValue" : "com"
			, "type" : "string", "length" : NumberInt( 0 )
			, "values" : [ "com", "net", "org" ]
			, "valuesMap" : { "com" : NumberInt( 1 ), "net" : NumberInt( 1 ), "org" : NumberInt( 1 ) }
		}

		//Country Code(Number);
		, "c_cd_n" : { "description" : "Country Code(Number)", "exampleValue" : "410"
			, "type" : "uint", "length" : NumberInt( 3 )
		}

		//Country Code(US 2);
		, "c_cd_us2" : { "description" : "Country Code(US 2)", "exampleValue" : "KR"
			, "type" : "uint", "length" : NumberInt( 2 )
		}

		//Country Code(US 3);
		, "c_cd_us3" : { "description" : "Country Code(US 3)", "exampleValue" : "KOR"
			, "type" : "uint", "length" : NumberInt( 3 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
