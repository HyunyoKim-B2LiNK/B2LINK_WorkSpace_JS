function( d )
{
	print( "-- [ S ] - product_category$validation__addDoc():{Object}----------" );
	if ( isString(d.cd_category) )
	{
		if ( 12 == d.cd_category.length )
		{
			return d;
		}

	}

	print( "-- [ E ] - product_category$validation__addDoc():{Object}----------" );
	return 0;
}
