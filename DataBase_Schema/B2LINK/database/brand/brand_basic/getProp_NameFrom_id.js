function( id )
{
	print( "-- [ S ] - brand_basic$getDocProperty__Name():{String}----------" );
	var o = brand_basic$findOne( id );
	print( "-- [ E ] - brand_basic$getDocProperty__Name():{String}----------" );
	return o.nm;
}
