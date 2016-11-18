var d = {

	 "_id" : "product_basic"
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
  		"brand.brand_basic"
  		, "member.member_public"
  		, "product.product_category"
  	]

  	//이 Collection이 참조하는 Collections - Collection Name;
  	, "reference_collection" : [
  		"brand_basic"
  		, "member_public"
  		, "product_category"
  	]

  	//이 Collection이 참조하는 Database;
  	, "reference_database" : [
  		"brand"
  		, "member"
  		, "product"
  	]

  	//--------------------------------------------------;

  	//이 Collection의 Properties;
  	, "properties" : {
  		//Unique Key, Primary Key(PK);
  		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : NumberInt(0)
  			, "type" : "uint", "length" : NumberInt(0)
  			, "minValue" : NumberInt(0)
  			, "maxValue" : 999999999
  		}

  		//Brand ID;
  		, "_id$brand_basic" : { "description" : "Brand ID(FK)", "exampleValue" : NumberInt(0)
  			, "type" : "uint", "length" : NumberInt(0)
  		}

  		//Member ID;
  		, "_id$member_public" : { "description" : "Member ID(FK)", "exampleValue" : NumberInt(0)
  			, "type" : "uint", "length" : NumberInt(0)
  		}

  		//Product Category ID
  		, "_id$product_category" : { "description" : "Product Category ID(FK)", "exampleValue" : NumberInt(0)
  			, "type" : "uint", "length" : NumberInt(0)
  		}

  		//Barcode Number
  		, "barcode" : { "description" : "Barcode Number", "exampleValue" : "123411231231"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Regist Date
  		, "date_regist" : { "description" : "Regist Date", "exampleValue" : [ 2016, 10, 27, 12, 20, 30 ]
  			, "type" : "array", "length" : NumberInt(0)
  		}

  		//Product Description
  		, "description" : { "description" : "Product Description", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Description(CN)
  		, "description_cn" : { "description" : "Product Description(CN)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Description(KR)
  		, "description_kr" : { "description" : "Product Description(KR)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Description(US)
  		, "description_us" : { "description" : "Product Description(US)", "exampleValue" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Boolean Has MSDS
  		, "msds" : { "description" : "Boolean Has MSDS", "exampleValue" : NumberInt(0)
  			, "type" : "uint", "length" : NumberInt(1), "default" : NumberInt(0)
  			, "minValue" : NumberInt(0)
  			, "maxValue" : NumberInt(1)
  			, "values" : [ NumberInt(0), NumberInt(1) ]
  			, "valuesMap" : { "0" : NumberInt(0), "1" : NumberInt(1) }
  		}

  		//Product Name(Default)
  		, "nm" : { "description" : "Product Name(Default)", "exampleValue" : "비투링크"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Name(CN)
  		, "nm_cn" : { "description" : "Product Name(CN)", "exampleValue" : ""
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Name(KR)
  		, "nm_kr" : { "description" : "Product Name(KR)", "exampleValue" : ""
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Name(US)
  		, "nm_us" : { "description" : "Product Name(US)", "exampleValue" : "B2Link Inc,"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Unit of Weight
  		, "unit_weight" : { "description" : "Unit of Weight", "exampleValue" : "mg"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Homepage URL
  		, "url" : { "description" : "Product Hompage URL", "exampleValue" : "http://www.b2link.co.kr"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Barcode Image URL
  		, "url_file_barcode" : { "description" : "Barcode Image URL", "exampleValue" : "//path/barcode.img"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//MSDS File URL
  		, "url_file_msds" : { "description" : "MSDS File URL", "exampleValue" : "//path/msds.file"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Image URL
  		, "url_file_product" : { "description" : "Product Image URL", "exampleValue" : "//path/product.img"
  			, "type" : "string", "length" : NumberInt(0)
  		}

  		//Product Weight
  		, "url_file_product" : { "description" : "Product Weight", "exampleValue" : "0.5"
  			, "type" : "number", "length" : NumberInt(0)
  		}
  	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).product.insert( d );
