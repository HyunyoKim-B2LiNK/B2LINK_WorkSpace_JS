function( mid )
{
	print( "-- [ S ] - member_time$findOne__mid():void----------" );
	print( "mid : " + mid );
	print( "member_time$_getCol() - " + member_time$_getCol() );
	print( "-- [ E ] - member_time$findOne__mid():void----------" );
	return member_time$findOne({ mid : mid });
}