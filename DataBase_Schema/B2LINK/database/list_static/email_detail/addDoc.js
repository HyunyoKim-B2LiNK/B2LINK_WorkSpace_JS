function( d )
{
	print( "-- [ S ] - email_detail$addDoc():{uint}----------" );
	var col = email_detail$_getCol();
	var len = email_detail$_findAll().count();
	var r = email_detail$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - email_detail$addDoc():{uint}----------return 0;" );
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

	print( "-- [ E ] - email_detail$addDoc():{uint}----------return 1;" );
	return 1;
}