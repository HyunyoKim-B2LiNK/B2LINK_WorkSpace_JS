function( _id_gt, _id_lt )
{
	print( "-- [ S ] - bank_swift_us$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	bank_swift_us$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		bank_swift_us$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - bank_swift_us$getList_Range__id():{Array}----------" );

	return r;
}