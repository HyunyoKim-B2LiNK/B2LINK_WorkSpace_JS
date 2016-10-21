function( d )
{
	print( "-- [ S ] - email$addDoc():{uint}----------" );
	var col = email$_getCol();
	var len = email$_findAll().count();
	var r = email$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - email$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, SLD : r.SLD
		, TLD : r.TLD
		, ccTLD : r.ccTLD
		, gTLD : r.gTLD
		, c : r.c
	});

	print( "-- [ E ] - email$addDoc():{uint}----------return 1;" );
	return 1;
}