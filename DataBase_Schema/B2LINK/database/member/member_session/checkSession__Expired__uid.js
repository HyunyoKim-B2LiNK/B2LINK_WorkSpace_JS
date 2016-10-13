function( d )
{
	print( "-- [ S ] - checkSession__Expired__uid():int----------" );
	var r = member_session$_findOne__uid( d.uid );//printjson( r );
	return member_session$checkSession__Expired( d, r );
	print( "-- [ E ] - checkSession__Expired__uid():int----------" );
}