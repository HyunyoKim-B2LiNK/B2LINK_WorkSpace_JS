function( d )
{
	print( "-- [ S ] - messenger$addDoc():{uint}----------" );

	var col = messenger$_getCol();
	var len = messenger$_findAll().count();
	var r = messenger$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - messenger$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( messenger$check__Overlap( r ) )
	{
		print( "-- [ E ] - messenger$addDoc():{uint}----------return 0;" );
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
			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us

		});

		print( "-- [ E ] - messenger$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
