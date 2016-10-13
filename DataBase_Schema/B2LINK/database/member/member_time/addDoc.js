function( d )
{
	print( "-- [ S ] - member_time$addDoc():void----------" );
	var col = member_time$_getCol();
	var len = member_time$_findAll().count();
	var r = member_time$validation__addDoc( d );
	if( 0 == r )
	{
		print( "-- [ E ] - member_time$addDoc():void----------if( 0 == r )" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
		, d_l_si : r.d_l_si, d_sec : r.d_sec, d_su : r.d_su
		, uid : r.uid
	});
	print( "-- [ E ] - member_time$addDoc():void----------col.insert({" );
	return 1;
}