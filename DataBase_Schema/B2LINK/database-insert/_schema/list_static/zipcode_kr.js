//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "zipcode_kr"

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

		//ZIP Code 한국;
		, "zip_code" : { "description" : "ZIP Code 한국", "exampleValue" : "KS013"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//주소;
		, "addr" : { "description" : "주소", "exampleValue" : "서초구"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//주소(한국어);
		, "addr_kr" : { "description" : "주소(한국어)", "exampleValue" : "서초구"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//주소(영어);
		, "addr_us" : { "description" : "주소(영어)", "exampleValue" : "Seocho"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//주소(중국어);
		, "addr_cn" : { "description" : "주소(중국어)", "exampleValue" : "瑞草区"
			, "type" : "string", "length" : NumberInt( 0 )
		}



	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
