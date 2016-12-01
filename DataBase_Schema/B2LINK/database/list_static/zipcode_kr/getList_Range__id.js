function( _id_gt, _id_lt )
{
	print( "-- [ S ] - zipcode_kr$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	zipcode_kr$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		zipcode_kr$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - zipcode_kr$getList_Range__id():{Array}----------" );

	return r;
}