function( d )
{
	print( "-- [ S ] - member_session$_update__Session():void----------" );
	printjson( d );

	var oSearch = { _id : d._id };
	var oModify = {
		$set : {
			mid : d.mid
			, sid : d.sid
			, d_ex : d.d_ex
		}
	};
	var option_update = { upsert : false };
	//var o = member_session$_findOne___id( d._id );
	member_session$_getCol().update( oSearch, oModify, option_update );

	print( "-- [ E ] - member_session$_update__Session():void----------return 1;" );
	return 1;
}