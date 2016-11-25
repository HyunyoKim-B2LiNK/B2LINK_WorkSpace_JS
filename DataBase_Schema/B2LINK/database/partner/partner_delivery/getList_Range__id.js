function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_delivery$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	partner_delivery$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		partner_delivery$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - partner_delivery$getList_Range__id():{Array}----------" );

	return r;
}
