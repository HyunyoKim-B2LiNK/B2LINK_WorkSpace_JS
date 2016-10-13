function( _id, nSignInFail  )
{
	print( "-- [ S ] - member_basic$_update__nSignInFail():void----------" );
	print( "_id : " + _id );
	print( "nSignInFail : " + nSignInFail );
	var oSearch = { _id : _id };
	member_basic$_getCol().update( oSearch, { $set : { nSignInFail : NumberInt( nSignInFail ) } }, { upsert : false } );
	if( 4 < nSignInFail )
	{
		print( "-- [ E ] - member_basic$_update__nSignInFail():void----------if( 4 < nSignInFail )" );
		member_session$_destroySession( oSearch );
	}
	print( "-- [ E ] - member_basic$_update__nSignInFail():void----------" );
	return 1;
}