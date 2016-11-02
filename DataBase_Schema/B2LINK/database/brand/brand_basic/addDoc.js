function( d )
{
	print( "-- [ S ] - brand_basic$addDoc():{uint}----------" );

	var col = brand_basic$_getCol();
	var len = brand_basic$_findAll().count();
	var r = brand_basic$validation__addDoc( d );
		print( "r : " + r );

	if( 0 == r )
	{
		print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 0;" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, _id$member_basic : r._id$member_basic

		, nm_cn : r.nm_cn
		, nm_kr : r.nm_kr
		, nm_us : r.nm_us

		, date_register : r.date_register
		, description : r.description

		, url : r.url
		, url_logo : r.url_logo
		, url_trademark : r.url_trademark
	});

	print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 1;" );
	return 1;
}
