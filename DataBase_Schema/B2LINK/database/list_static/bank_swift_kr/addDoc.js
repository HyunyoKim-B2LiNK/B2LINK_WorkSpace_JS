function( d )
{
	print( "-- [ S ] - bank_swift_kr$addDoc():{uint}----------" );
	var col = bank_swift_kr$_getCol();
	var len = bank_swift_kr$_findAll().count();
	var r = bank_swift_kr$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - bank_swift_kr$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, nm : r.nm
		, nm_kr : r.nm_kr
		, nm_cn : r.nm_cn
		, nm_us : r.nm_us
		, city : r.city
		, branch : r.branch
		, swift_code : r.swift_code
	});

	print( "-- [ E ] - bank_swift_kr$addDoc():{uint}----------return 1;" );
	return 1;
}