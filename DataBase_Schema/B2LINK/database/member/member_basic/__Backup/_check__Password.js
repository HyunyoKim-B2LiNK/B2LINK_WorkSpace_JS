function( o, mpw )
{
	print( "-- [ S ] - member_basic$_check__Password():uint----------" );

	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "o.mpw : " + o.mpw );
	print( "mpw : " + mpw );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );
	print( "--------------------------------------------------" );

	if( o.mpw == mpw )
	{
		print( "-- [ E ] - member_basic$_check__Password():uint----------if( o.mpw == mpw ) return 1;" );
		return 1;
	}

	print( "-- [ E ] - member_basic$_check__Password():uint----------return 0;" );
	return 0;
}