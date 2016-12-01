function( d )
{
	print( "-- [ S ] - postalcode_cn$addDoc():{uint}----------" );
	var col = postalcode_cn$_getCol();
	var len = postalcode_cn$_findAll().count();
	var r = postalcode_cn$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - postalcode_cn$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, postal_code : r.postal_code
		, addr0 : r.addr0
		, addr1 : r.addr1
		, addr2 : r.addr2
		, addr : r.addr
	});

	print( "-- [ E ] - postalcode_cn$addDoc():{uint}----------return 1;" );
	return 1;
}