function( uid )
{
	print( "-- [ S ] - member_basic$findOne__uid():{Document}----------" );
	print( "uid : " + uid );
	print( "member_basic$_getCol() - " + member_basic$_getCol() );
	print( "-- [ E ] - member_basic$findOne__uid():{Document}----------" );
	return member_basic$findOne( { uid : uid } );
}