function( _id_gt, _id_lt )
{
	print( "-- [ S ] - product_basic$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	product_basic$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		product_basic$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - product_basic$getList_Range__id():{Array}----------" );

	return r;
}