var d = {
	"_id" : "transaction_quote_sale_req.item"
	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	,"dereference" : [
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
		// Brand ID
		"_id$brand_basic" : { "description" : "Brand ID (FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "_id$product_basic" : {"description" : "Product ID(FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "quantity" : { "description" : "총 수량" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "UOM" : { "description" : "수량 단위(unit_of_measurement)" , "type" : "uint", "length" : NumberInt( 0 ) }
		, "quantity_of_unit" : { "description" : "단위수량" , "type" : "uint", "length" : NumberInt( 0 ) }
	}

};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).transaction_quote_sale.insert( d );
