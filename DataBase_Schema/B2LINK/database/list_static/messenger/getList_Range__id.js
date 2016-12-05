function( _id_gt, _id_lt )
{
	print( "-- [ S ] - messenger$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	messenger$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		messenger$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - messenger$getList_Range__id():{Array}----------" );

	return r;
}
