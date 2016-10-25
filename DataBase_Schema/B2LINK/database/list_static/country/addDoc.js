function( d )
{
	print( "-- [ S ] - country$addDoc():{uint}----------" );
	var col = country$_getCol();
	var len = country$_findAll().count();
	var r = country$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - country$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, cd_n : r.cd_n
		, cd_us2 : r.cd_us2
		, cd_us3 : r.cd_us3
		, nm_cn : r.nm_cn
		, nm_kr : r.nm_kr
		, nm_us : r.nm_us
	});

	print( "-- [ E ] - country$addDoc():{uint}----------return 1;" );
	return 1;
}