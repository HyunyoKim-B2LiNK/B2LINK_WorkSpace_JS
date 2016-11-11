function( _id_gt, _id_lt )
{
	print( "-- [ S ] - country$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	country$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		country$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - country$getList_Range__id():{Array}----------" );

	return r;
}