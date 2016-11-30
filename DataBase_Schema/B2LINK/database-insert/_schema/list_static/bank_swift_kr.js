//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "bank_swift_kr"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;;
	, "reference" : [
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
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

		//은행 이름 (Local);
		, "nm" : { "description" : "은행 이름(Local)", "exampleValue" : "국민은행"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//은행 이름 (한국);
		, "nm_kr" : { "description" : "은행 이름(한국)", "exampleValue" : "국민은행"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//은행 이름 (중문);
		, "nm_cn" : { "description" : "은행 이름(중문)", "exampleValue" : "國民銀行"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//은행 이름 (영문);
		, "nm_en" : { "description" : "은행 이름(영문)", "exampleValue" : "KookMin Bank"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//도시;
		, "city" : { "description" : "도시", "exampleValue" : "SEOUL"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//지점;
		, "branch" : { "description" : "지점", "exampleValue" : ""
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//SWIFT CODE;
		, "swift_code" : { "description" : "SWIFT CODE", "exampleValue" : "CZNBKRSE"
			, "type" : "string", "length" : NumberInt( 0 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
