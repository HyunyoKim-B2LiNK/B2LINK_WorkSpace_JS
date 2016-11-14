function( d )
{
	print( "-- [ S ] - brand_basic$validation__addDoc():{Object}----------" );

	if( !d.hasOwnProperty( "_id$member_basic" ) )
	{
		print( "-- [ E ] - brand_basic$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - brand_basic$validation__addDoc():{Object}----------return d;" );
	return d;
}