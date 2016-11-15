function( sid )
{
	print( "-- [ S ] - member_basic$getDocProperty__Name__id():{Object}----------" );
	var o = member_basic$findOne__sid( sid );
	print( "-- [ E ] - member_basic$getDocProperty__Name__id():{Object}----------" );
	return { _id : o._id, nm : o.nm.a }
}