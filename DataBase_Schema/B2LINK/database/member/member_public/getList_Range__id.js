function( _id_gt, _id_lt )
{
	print( "-- [ S ] - member_public$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	member_public$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		member_public$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - member_public$getList_Range__id():{Array}----------" );

	return r;
}