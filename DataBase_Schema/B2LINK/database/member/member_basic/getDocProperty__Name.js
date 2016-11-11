function( sid )
{
	print( "-- [ S ] - member_basic$getDocProperty__Name():{String}----------" );
	var o = member_basic$findOne__sid( sid );
	print( "-- [ E ] - member_basic$getDocProperty__Name():{String}----------" );
	return o.nm.a;
}