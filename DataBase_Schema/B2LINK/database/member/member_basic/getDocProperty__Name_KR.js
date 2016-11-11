function( sid )
{
	print( "-- [ S ] - member_basic$getDocProperty__Name_KR():{String}----------" );
	var o = member_basic$findOne__sid( sid );
	print( "-- [ E ] - member_basic$getDocProperty__Name_KR():{String}----------" );
	return o.nm_kr.a;
}