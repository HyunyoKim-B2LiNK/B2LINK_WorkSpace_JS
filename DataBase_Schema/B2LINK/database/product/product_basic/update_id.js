function( d )
{
	print( "-- [ S ] - product_basic$update_id():{uint}----------" );

	print( "d._id :" + d._id );
	printjson( d );

	product_basic$_getCol().update(
		{ _id : NumberInt( d._id ) }//search Object;
		, {
			$set : {
				_id$member_basic : NumberInt( d._id$member_basic )
				, _id$brand_basic : NumberInt( d._id$brand_basic )
				, _id$product_category : NumberInt ( d._id$product_category )
				, barcode : d.barcode
				, description : d.description
				, msds : d.msds

				, nm_cn : d.nm_cn
				, nm_kr : d.nm_kr
				, nm_us : d.nm_us

				, date_register : d.date_register

				, url : d.url
				, url_file_product : d.url_file_product
				, url_file_barcode : d.url_file_barcode
				, url_file_msds : d.url_file_msds
				, weight : d.weight
				, unit_weight : d.unit_weight
			}
		}
	);

	print( "-- [ S ] - product_basic$update_id():{uint}---------- return 1" );
	return 1;
}
