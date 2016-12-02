function( _id_gt, _id_lt )
{
	print( "-- [ S ] - currency$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	currency$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		currency$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - currency$getList_Range__id():{Array}----------" );

	return r;
}
