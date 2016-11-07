function( d )
{
	print( "-- [ S ] - product_basic$addDoc():{uint}----------" );

	var col = product_basic$_getCol();
	var len = product_basic$_findAll().count();
	var r = product_basic$validation__addDoc( d );
		print( "r : " + r );
		printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - product_basic$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( product_basic$check__Overlap( r ) )
	{
		print( "-- [ E ] - product_basic$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		var i=0, iLen=r.date_register.length;
		for( ; i<iLen; ++i )
			r.date_register[ i ] = NumberInt( r.date_register[ i ] );

		col.insert({
			_id : NumberInt( len )
			, _id$member_basic : NumberInt( r._id$member_basic )
			, _id$brand_basic : NumberInt( r._id$brand_basic )
			, _i$product_category : NumberInt ( r._id$product_category )
			, barcode : r.barcode
			, description : r.description
			, msds : r.msds

			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us

			, date_register : r.date_register

			, url : r.url
			, url_file_product : r.url_file_product
			, url_file_barcode : r.url_file_barcode
			, url_file_msds : r.url_file_msds
			, weight : r.weight
			, unit_weight : r.unit_weight
		});

		print( "-- [ E ] - product_basic$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
