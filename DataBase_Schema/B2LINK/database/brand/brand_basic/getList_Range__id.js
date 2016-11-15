function( _id_gt, _id_lt )
{
	print( "-- [ S ] - brand_basic$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	brand_basic$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		brand_basic$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - brand_basic$getList_Range__id():{Array}----------" );

	return r;
}