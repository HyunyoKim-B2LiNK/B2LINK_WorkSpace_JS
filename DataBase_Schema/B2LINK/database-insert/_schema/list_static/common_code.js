//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "common_code"

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

		//CODE0;
		, "code0" : { "description" : "CODE0", "exampleValue" : NumberInt( 1000 )
			, "type" : "uint", "length" : NumberInt( 4 )
		}

		//CODE1;
		, "code1" : { "description" : "CODE1", "exampleValue" : NumberInt( 1000 )
			, "type" : "uint", "length" : NumberInt( 4 )
		}

		//CODE2;
		, "code2" : { "description" : "CODE2", "exampleValue" : NumberInt( 1000 )
			, "type" : "uint", "length" : NumberInt( 4 )
		}

		//CODE;
		, "code" : { "description" : "CODE", "exampleValue" : "100010001000"
			, "type" : "string", "length" : NumberInt( 12 )
		}

		//description;
		, "desc" : { "description" : "Description", "exampleValue" : "카테고리관리"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//사용여부;
		, "bUse" : { "description" : "사용여부", "exampleValue" : NumberInt( 1 )
			, "type" : "uint", "length" : NumberInt( 1 ), "default" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 1 )
			, "values" : [ NumberInt( 0 ), NumberInt( 1 ) ]
			, "valuesMap" : { "0" : NumberInt( 1 ), "1" : NumberInt( 1 ) }
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
