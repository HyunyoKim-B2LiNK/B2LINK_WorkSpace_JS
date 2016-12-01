var d = {
	"_id" : "transaction_quote_sale_res.item"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"sell_provisional_estimate.req_for_provisional_estimate"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"req_for_provisional_estimate"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"sell_provisional_estimate"
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
		"_id$brand_basic" : { "description" : "Brand ID (FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "_id$product_basic" : { "description" : "Product ID(FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "item_total_price" : { "description" : "총가격 ( price * quantity)"
			, "type" : "object"
			, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

		 }
		, "price_quantity" : { "description" : "단가"
			, "type" : "object"
			, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

		 }
		, "price_quantity_of_unit" : { "description" : "수량단가"
			, "type" : "object"
			, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

		 }
		, "quantity" : { "description" : "총 수량(quantity_of_unit * quantity)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "quantity_of_unit" : { "description" : "단위 수량" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "UOM" : { "description" : "수량 단위(unit_of_measurement)", "exampleValue" : { "nm" : "pkg" , "quantity" : 10 }
			, "type" : "object"
			, "properties" : {
				//표시 문자
				"nm" : { "description" : "표시문자" ,  "exampleValue" : "pkg"
					, "type" : "string", "length" : NumberInt( 0 )
				}
				//수량 quantity
				, "quantity" : { "description" : "해당 단위에 포함된 수량", "exampleValue" : 10
					, "type" : "uint", "length" : NumberInt( 0 )
				}
			}
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).transaction_quote_sale.insert( d );
