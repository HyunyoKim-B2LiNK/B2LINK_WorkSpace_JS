var a = [
	{
		"_id$currency" : 0
		, "_id$delivery_type" : 0
		, "_id$member" : 0
		, "_id$partner_buyer" : 0
		, "_id$trade_terms" : 0
		, "date_create" : [  2016,  11 ,  30 ,  21 ,  9 ,  55 ]
		, "items" : [
				{
					"_id$transaction_quote_purchase_res" : 0
					, "_id$brand_basic" : 0, "_id$product_basic" : 0
					, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
					, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
	 				, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
					, "price_quantity_of_unit" : { "price" : 10 , "_id$currency" : 0 }
					, "quantity" : 100 , "quantity_of_unit" : 10
		   			, "UOM" : { "nm" : "pkg" , "quantity" : 10 }
				}
				,{
					"_id$transaction_quote_purchase_res" : 1
					, "_id$brand_basic" : 1, "_id$product_basic" : 1
					, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
					, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
					, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
	 				, "price_quantity_of_unit" : { "price" : 20 , "_id$currency" : 0 }
					, "quantity" : 100 , "quantity_of_unit" : 5
		   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
				}
		   		, {
					"_id$transaction_quote_purchase_res" : 2
					, "_id$brand_basic" : 1, "_id$product_basic" : 1
					, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
					, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
					, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
	 				, "price_quantity_of_unit" : { "price" : 20 , "_id$currency" : 0 }
					, "quantity" : 100 , "quantity_of_unit" : 5
		   			, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
				}
			]

			, "logistic_fee" : { "price" : 100 , "_id$currency" : 0 }
			, "quote_sale_res_no" : "QS20161130P01"
			, "shipping_address" : "서울특별시"
			, "total_supply_price" : { "price" : 400 , "_id$currency" : 0 }
	}
	, {
		"_id$currency" : 0
		, "_id$delivery_type" : 0
		, "_id$member" : 0
		, "_id$partner_buyer" : 0
		, "_id$trade_terms" : 0
		, "date_create" : [ 2016, 11, 30, 21, 9, 55 ]
		, "items" : [
			{
				"_id$transaction_quote_purchase_res" : 3
				, "_id$brand_basic" : 0, "_id$product_basic" : 0
				, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
				, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
				, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
				, "price_quantity_of_unit" : { "price" : 10 , "_id$currency" : 0 }
				, "quantity" : 100 , "quantity_of_unit" : 10
				, "UOM" : { "nm" : "pkg" , "quantity" : 10 }
			}
			,{
				"_id$transaction_quote_purchase_res" : 4
				, "_id$brand_basic" : 1, "_id$product_basic" : 1
				, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
				, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
				, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
				, "price_quantity_of_unit" : { "price" : 20 , "_id$currency" : 0 }
				, "quantity" : 100 , "quantity_of_unit" : 5
				, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
			, {
				"_id$transaction_quote_purchase_res" : 5
				, "_id$brand_basic" : 1, "_id$product_basic" : 1
				, "item_total_price" : { "price" : 100 , "_id$currency" : 0 }
				, "due_date" : [  2016, 12, 6, 21, 9, 55 ]
				, "price_quantity" : { "price" : 1 , "_id$currency" : 0 }
				, "price_quantity_of_unit" : { "price" : 20 , "_id$currency" : 0 }
				, "quantity" : 100 , "quantity_of_unit" : 5
				, "UOM" : { "nm" : "pkg" , "quantity" : 20 }
			}
		]
		, "logistic_fee" : { "price" : 100 , "_id$currency" : 0 }
		, "quote_sale_res_no" : "QS20161130P02"
		, "shipping_address" : "서울특별시"
		, "total_supply_price" : { "price" : 400 , "_id$currency" : 0 }
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "transaction_quote_sale" );
	db0.transaction_quote_sale_res.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "transaction_quote_sale_res$addDoc( " + JSON.stringify( io ) + " );" );
};
