function( d )
{
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	print( "-- [ S ] - checkSession__Expired__sid():int----------" );
	printjson( d );
	var r = member_session$_findOne__sid( d.sid );//printjson( r );
	return member_session$checkSession__Expired( d, r );
	print( "-- [ E ] - checkSession__Expired__sid():int----------" );
}