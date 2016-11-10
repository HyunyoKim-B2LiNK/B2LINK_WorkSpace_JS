function( d )
{
	print( "-- [ S ] - product_basic$update_ids():{uint}----------" );

	printjson( d );

	var io;
	var i=0, iLen=d.length;
	for( ; i<iLen; ++i )
	{
		io = d[ i ];
		print( "io._id :" + io._id );

		product_basic$_getCol().update(
			{ _id : NumberInt( io._id ) }//search Object;
			, {
				$set : {
					_id$member_basic : NumberInt( io._id$member_basic )
				   	, _id$brand_basic : NumberInt( io._id$brand_basic )
				   	, _id$product_category : NumberInt ( io._id$product_category )
					, barcode : io.barcode
					, description : io.description
					, msds : io.msds

					, nm_cn : io.nm_cn
					, nm_kr : io.nm_kr
					, nm_us : io.nm_us

					, date_register : io.date_register

					, url : io.url
					, url_file_product : io.url_file_product
					, url_file_barcode : io.url_file_barcode
					, url_file_msds : io.url_file_msds
					, weight : io.weight
					, unit_weight : io.unit_weight
				}
			}
		);
	}

	print( "-- [ S ] - product_basic$update_ids():{uint}---------- return 1" );
	return 1;
}
