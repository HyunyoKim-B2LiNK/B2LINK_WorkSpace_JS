function( mid )
{
	print( "-- [ S ] - member_basic$findOne__mid():void----------" );
	print( "mid : " + mid );
	print( "member_basic$_getCol() - " + member_basic$_getCol() );
	print( "-- [ E ] - member_basic$findOne__mid():void----------" );
	return member_basic$findOne({ mid : mid });
}