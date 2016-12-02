function( d )
{
	print( "-- [ S ] - postalcode_kr$addDoc():{uint}----------" );
	var col = postalcode_kr$_getCol();
	var len = postalcode_kr$_findAll().count();
	var r = postalcode_kr$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - postalcode_kr$addDoc():{uint}----------return 0;" );
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

	print( "-- [ E ] - postalcode_kr$addDoc():{uint}----------return 1;" );
	return 1;
}