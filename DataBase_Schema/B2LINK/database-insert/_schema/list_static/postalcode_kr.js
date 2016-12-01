//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "postalcode_kr"

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
		"_id" : {
			"description" : "Unique Key, Primary Key(PK)"
			, "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Postal Code 한국;
		, "postal_code" : { "description" : "Postal Code 한국", "exampleValue" : "10120"
			, "type" : "string", "length" : NumberInt( 5 )
		}

		//ADDR0;
		, "addr0" : { "description" : "ADDR0", "exampleValue" : "서울시"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//ADDR1;
		, "addr1" : { "description" : "ADDR1", "exampleValue" : "서초구"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//ADDR2;
		, "addr2" : { "description" : "ADDR2", "exampleValue" : "서초동"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//ADDR;
		, "addr" : { "description" : "ADDR", "exampleValue" : "서울시 서초구 서초동"
			, "type" : "string", "length" : NumberInt( 0 )
		}

	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
