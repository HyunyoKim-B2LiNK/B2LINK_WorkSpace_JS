function( _id_gt, _id_lt )
{
	print( "-- [ S ] - trade_terms$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	trade_terms$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		trade_terms$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - trade_terms$getList_Range__id():{Array}----------" );

	return r;
}
