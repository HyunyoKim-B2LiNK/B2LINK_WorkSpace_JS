function( _id_gt, _id_lt )
{
	print( "-- [ S ] - common_code$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	common_code$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		common_code$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - common_code$getList_Range__id():{Array}----------" );

	return r;
}