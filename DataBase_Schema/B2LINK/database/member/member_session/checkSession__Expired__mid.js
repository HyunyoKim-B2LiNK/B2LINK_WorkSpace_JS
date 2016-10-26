function( d )
{
	print( "-- [ S ] - checkSession__Expired__mid():int----------" );
	var r = member_session$_findOne__mid( d.mid );//printjson( r );
	return member_session$checkSession__Expired( d, r );
	print( "-- [ E ] - checkSession__Expired__mid():int----------" );
}