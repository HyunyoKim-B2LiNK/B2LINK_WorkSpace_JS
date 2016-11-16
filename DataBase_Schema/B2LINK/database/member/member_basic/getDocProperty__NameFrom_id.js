function( _id )
{
	print( "-- [ S ] - member_basic$getDocProperty__NameFrom_id():{String}----------" );
	var o = member_basic$findOne___id( _id );
	print( "-- [ E ] - member_basic$getDocProperty__NameFrom_id():{String}----------" );
	return o.nm.a;
}