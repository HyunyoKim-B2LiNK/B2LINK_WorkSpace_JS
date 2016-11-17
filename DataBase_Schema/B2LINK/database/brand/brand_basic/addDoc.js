function( d )
{
	print( "-- [ S ] - brand_basic$addDoc():{uint}----------" );

	var col = brand_basic$_getCol();
	var len = brand_basic$_findAll().count();
	var r = brand_basic$validation__addDoc( d );
		print( "r : " + r );
		printjson( r );

	if( 0 == r )
	{
		print( "if( 0 == r )" );
		print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( brand_basic$check__Overlap( r ) )
	{
		print( "if( brand_basic$check__Overlap( r ) )" );
		print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		var i=0, iLen=r.date_register.length;
		for( ; i<iLen; ++i )
			r.date_register[ i ] = NumberInt( r.date_register[ i ] );

		col.insert({
			_id : NumberInt( len )
			, _id$member_public : NumberInt( r._id$member_public )

			, description : r.description
			, description_kr : r.description_kr
			, description_cn : r.description_cn
			, description_us : r.description_us

			, nm : r.nm
			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us

			, date_register : r.date_register

			, url : r.url
			, url_logo : r.url_logo
			, url_trademark : r.url_trademark
		});

		print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
