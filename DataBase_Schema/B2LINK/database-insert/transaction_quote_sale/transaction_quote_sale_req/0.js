var a = [
	{
		"_id$currency" : NumberInt( 0 )
		, "_id$delivery_type" : NumberInt( 0 )
		, "_id$member" : NumberInt( 0 )
		, "_id$partner_buyer" : NumberInt( 0 )
		, "_id$trade_terms" : NumberInt( 0 )
		, "items" : [
			{
	    		"_id$brand_basic" : NumberInt( 0 ), "_id$product_basic" : NumberInt( 0 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 10 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 10 ) }
			}
			,{
				"_id$brand_basic" : NumberInt( 1 ), "_id$product_basic" : NumberInt( 1 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 5 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 20 ) }
			}
	   		, { "_id$brand_basic" : NumberInt( 1 ), "_id$product_basic" : NumberInt( 1 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 5 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 20 ) }
			}
			]
		, "date_create" : [ NumberInt( 2016 ), NumberInt( 11 ), NumberInt( 30 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
		, "due_date" : [ NumberInt( 2016 ), NumberInt( 12 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
		, "quote_sale_req_no" : "QSR20161130P01"
		, "shipping_address" : "서울특별시"
	}
	, {
		"_id$currency" : NumberInt( 0 )
		, "_id$delivery_type" : NumberInt( 0 )
		, "_id$member" : NumberInt( 0 )
		, "_id$partner_buyer" : NumberInt( 0 )
		, "_id$trade_terms" : NumberInt( 0 )
		, "items" : [
			{
	    		"_id$brand_basic" : NumberInt( 0 ), "_id$product_basic" : NumberInt( 0 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 10 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 10 ) }
			}
			,{
				"_id$brand_basic" : NumberInt( 1 ), "_id$product_basic" : NumberInt( 1 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 5 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 20 ) }
			}
	   		, { "_id$brand_basic" : NumberInt( 1 ), "_id$product_basic" : NumberInt( 1 ), "quantity" : NumberInt( 100 ) , "quantity_of_unit" : NumberInt( 5 )
	   			, "UOM" : { "nm" : "pkg" , "quantity" : NumberInt( 20 ) }
			}
			]
		, "date_create" : [ NumberInt( 2016 ), NumberInt( 11 ), NumberInt( 30 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
		, "due_date" : [ NumberInt( 2016 ), NumberInt( 12 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
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
