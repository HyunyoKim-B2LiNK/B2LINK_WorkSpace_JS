function( d )
{
	print( "-- [ S ] - partner_person$validation__addDoc():{Object}----------" );
	if( !d.hasOwnProperty( "_id$member" ) || !d.hasOwnProperty( "_id$title" ) || !d.hasOwnProperty( "phone_cell" ))
	{
		print( "-- [ E ] - partner_person$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}
	print( "-- [ E ] - partner_person$validation__addDoc():{Object}----------" );
	return d;
}
