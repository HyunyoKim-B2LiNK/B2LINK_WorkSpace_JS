function( _id_gt, _id_lt )
{
	print( "-- [ S ] - product_cateogry$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	product_cateogry$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		product_cateogry$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - product_cateogry$getList_Range__id():{Array}----------" );

	return r;
}
