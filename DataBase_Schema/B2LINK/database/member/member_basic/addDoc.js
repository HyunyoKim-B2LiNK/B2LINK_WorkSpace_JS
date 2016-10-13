function( d )
{
	print( "-- [ S ] - member_basic$addDoc():void----------" );
	var col = member_basic$_getCol();
	var len = member_basic$_findAll().count();
	var r = member_basic$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - member_basic$addDoc():void----------" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )

		, bConn : r.bConn

		, email : r.email, email_id : r.email_id, email_domain : r.email_domain

		, nSignInFail : r.nSignInFail

		, nm : r.nm, nm_cn : r.nm_cn, nm_kr : r.nm_kr, nm_us : r.nm_us

		, rank : r.rank

		, uid : r.uid, upw : r.upw
	});
	print( "-- [ E ] - member_basic$addDoc():void----------" );
	return 1;
}