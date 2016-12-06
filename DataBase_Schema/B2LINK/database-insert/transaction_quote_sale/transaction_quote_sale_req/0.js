var a = [
	{
		"_id$currency" : 0
		, "_id$delivery_type" : 0
		, "_id$member" : 0
		, "_id$partner_buyer" : 0
		, "_id$partner_person" : 0
		, "_id$trade_terms" : 0
		, "items" : [
			{
	    		"_id$brand_basic" : 0, "_id$product_basic" : 0, "quantity" : 100 , "quantity_of_unit" : 10
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 10 }
			}
			,{
				"_id$brand_basic" : 1, "_id$product_basic" : 1, "quantity" : 100 , "quantity_of_unit" : 5
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
	   		, { "_id$brand_basic" : 1, "_id$product_basic" : 1, "quantity" : 100 , "quantity_of_unit" : 5
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
			]
		, "date_create" : [ 2016, 11, 30, 21, 9, 55 ]
		, "due_date" : [ 2016, 12, 6, 21, 9, 55 ]
		, "quote_sale_req_no" : "QSR20161130P01"
		, "shipping_address" : "서울특별시"
	}
	, {
		"_id$currency" : 0
		, "_id$delivery_type" : 0
		, "_id$member" : 0
		, "_id$partner_buyer" : 0
		, "_id$trade_terms" : 0
		, "items" : [
			{
	    		"_id$brand_basic" : 0, "_id$product_basic" : 0, "quantity" : 100 , "quantity_of_unit" : 10
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 10 }
			}
			,{
				"_id$brand_basic" : 1, "_id$product_basic" : 1, "quantity" : 100 , "quantity_of_unit" : 5
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
	   		, { "_id$brand_basic" : 1, "_id$product_basic" : 1, "quantity" : 100 , "quantity_of_unit" : 5
	   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
			]
		, "date_create" : [ 2016, 11, 30, 21, 9, 55 ]
		, "due_date" : [ 2016, 12, 6, 21, 9, 55 ]
		, "quote_sale_req_no" : "QSR20161130P02"
		, "shipping_address" : "서울특별시"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "transaction_quote_sale" );
	db0.transaction_quote_sale_req.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "transaction_quote_sale_req$addDoc( " + JSON.stringify( io ) + " );" );
};
