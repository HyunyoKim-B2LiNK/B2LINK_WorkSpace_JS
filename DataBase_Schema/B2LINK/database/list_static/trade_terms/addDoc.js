function( d )
{
	print( "-- [ S ] - trade_terms$addDoc():{uint}----------" );

	var col = trade_terms$_getCol();
	var len = trade_terms$_findAll().count();
	var r = trade_terms$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - trade_terms$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( trade_terms$check__Overlap( r ) )
	{
		print( "-- [ E ] - trade_terms$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, description : r.description
			, description_cn : r.description_cn
			, description_kr : r.description_kr
			, description_us : r.description_us
			, nm :  r.nm
			, nm_f : r.nm_f
			, nm_f_cn : r.nm_f_cn
			, nm_f_kr : r.nm_f_kr
			, nm_f_us : r.nm_f_us

		});

		print( "-- [ E ] - trade_terms$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
