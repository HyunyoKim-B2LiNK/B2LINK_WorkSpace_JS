function( uid )
{
	print( "-- [ S ] - member_time$findOne__uid():void----------" );
	print( "uid : " + uid );
	print( "member_time$_getCol() - " + member_time$_getCol() );
	print( "-- [ E ] - member_time$findOne__uid():void----------" );
	return member_time$findOne( { uid : uid } );
}