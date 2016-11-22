function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_buyers$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	partner_buyers$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		partner_buyers$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - partner_buyers$getList_Range__id():{Array}----------" );

	return r;
}
