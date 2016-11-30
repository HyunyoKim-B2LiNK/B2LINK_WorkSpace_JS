var d = {

	"_id" : "product_cateogry"
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

		//Code of Category // Array로 수정 ?
		, "cd_category" : { "description" : "Code of Category(unique value) ", "exampleValue" : "100000000000"
			, "type" : "string", "length" : NumberInt( 12 )
		}

		//Product Category description_us
		, "description" : { "description" : "Product Category Description(Default)", "exampleValue" : "남성을 위한 화장품", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Description(CN)
		, "description_cn" : { "description" : "Product Category Description(CN)", "exampleValue" : "남성을 위한 화장품", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Description(KR)
		, "description_kr" : { "description" : "Product Category Description(KR)", "exampleValue" : "남성을 위한 화장품", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Description(US)
		, "description_us" : { "description" : "Product Category Description(US)", "exampleValue" : "Cosmetic for man", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Name(Default)
		, "nm" : { "description" : "Product Name(Default)", "exampleValue" : "남자화장품", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Name(CN)
		, "nm_cn" : { "description" : "Product Name(CN)", "exampleValue" : "", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Name(KR)
		, "nm_kr" : { "description" : "Product Name(KR)", "exampleValue" : "남자화장품", "type" : "string", "length" : NumberInt( 0 ) }

		//Product Category Name(US)
		, "nm_us" : { "description" : "Product Name(US)", "exampleValue" : "For Man", "type" : "string", "length" : NumberInt( 0 ) }
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).category.insert( d );