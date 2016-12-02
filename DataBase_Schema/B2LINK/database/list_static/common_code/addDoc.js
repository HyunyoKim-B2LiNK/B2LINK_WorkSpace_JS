function( d )
{
	print( "-- [ S ] - common_code$addDoc():{uint}----------" );
	var col = common_code$_getCol();
	var len = common_code$_findAll().count();
	var r = common_code$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - common_code$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, code0 : r.code0
		, code1 : r.code1
		, code2 : r.code2
		, code : r.code
		, description : r.description
		, bUse : r.bUse
	});

	print( "-- [ E ] - common_code$addDoc():{uint}----------return 1;" );
	return 1;
}