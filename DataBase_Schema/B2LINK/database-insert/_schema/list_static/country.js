//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "country"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"barnd.brand_basic"
		, "member.member_basic"
		, "member.member_public"
		, "product.product_basic"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"brand_basic"
		, "member_basic"
		, "member_public"
		, "product_basic"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"brand"
		, "member"
		, "product"
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

		//Code - Number;
		, "cd_n" : { "description" : "Code - Number", "exampleValue" : "410"
			, "type" : "int", "length" : NumberInt( 3 )
		}

		//Code - String - 2;
		, "cd_us2" : { "description" : "Code - String - 2", "exampleValue" : "KR"
			, "type" : "string", "length" : NumberInt( 2 )
		}

		//Code - String - 3;
		, "cd_us3" : { "description" : "Code - String - 3", "exampleValue" : "KOR"
			, "type" : "string", "length" : NumberInt( 3 )
		}

		//Name(CN);
		, "nm_cn" : { "description" : "Name(CN)", "exampleValue" : "韓國"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Name(KR);
		, "nm_kr" : { "description" : "Name(KR)", "exampleValue" : "대한민국"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Name(US);
		, "nm_us" : { "description" : "Name(US)", "exampleValue" : "Republic of Korea"
			, "type" : "string", "length" : NumberInt( 0 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
