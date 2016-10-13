function( uid )
{
	print( "-- [ S ] - member_basic$findOne__uid():void----------" );
	print( "uid : " + uid );
	print( "member_basic$_getCol() - " + member_basic$_getCol() );
	print( "-- [ E ] - member_basic$findOne__uid():void----------" );
	return member_basic$findOne( { uid : uid } );
}