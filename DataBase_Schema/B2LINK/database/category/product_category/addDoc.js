function( d )
{
	print( "-- [ S ] - product_category$addDoc():{uint}----------" );

	var col = product_category$_getCol();
	var len = product_category$_findAll().count();
	var r = product_category$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - product_category$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( product_category$check__Overlap( r ) )
	{
		print( "-- [ E ] - product_category$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, cd_category : r.cd_category
			, description : r.description
			, description_kr : r.description_kr
			, description_cn : r.description_cn
			, description_us : r.description_us
			, nm : r.nm
			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us
		});

		print( "-- [ E ] - product_category$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
