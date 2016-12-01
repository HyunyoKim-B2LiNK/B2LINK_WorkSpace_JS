function( d )
{
	print( "-- [ S ] - zipcode_kr$addDoc():{uint}----------" );
	var col = zipcode_kr$_getCol();
	var len = zipcode_kr$_findAll().count();
	var r = zipcode_kr$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - zipcode_kr$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, zip_code : r.zip_code
		, addr : r.addr
		, addr_kr : r.addr_kr
		, addr_us : r.addr_us
		, addr_cn : r.addr_cn
	});

	print( "-- [ E ] - zipcode_kr$addDoc():{uint}----------return 1;" );
	return 1;
}