function( sid )
{
	print( "-- [ S ] - member_basic$getDocProperty__Name_CN():{String}----------" );
	var o = member_basic$findOne__sid( sid );
	print( "-- [ E ] - member_basic$getDocProperty__Name_CN():{String}----------" );
	return o.nm_cn.a;
}