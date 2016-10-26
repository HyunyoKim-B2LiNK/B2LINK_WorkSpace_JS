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
		, cd_brand : r.cd_brand
		, nm_kr : r.nm_kr
		, nm_cn : r.nm_cn
		, nm_us : r.nm_us
		, url : r.url
		, logo_url : r.logo_url
		, trademark_url : r.trademark_url
		, register_date : r.register_date
		, register_person : r.register_person
		, description : r.description
	});

	print( "-- [ E ] - brand_basic$addDoc():{uint}----------return 1;" );
	return 1;
}
