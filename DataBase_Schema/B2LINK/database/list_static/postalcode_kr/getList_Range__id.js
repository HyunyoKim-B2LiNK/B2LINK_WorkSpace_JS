function( _id_gt, _id_lt )
{
	print( "-- [ S ] - postalcode_kr$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	postalcode_kr$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		postalcode_kr$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - postalcode_kr$getList_Range__id():{Array}----------" );

	return r;
}