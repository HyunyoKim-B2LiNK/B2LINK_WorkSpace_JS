function( _id_gt, _id_lt )
{
	print( "-- [ S ] - transaction_quote_purchase_req$getList_Range__id():{Array}----------" );

	//print( "_id_gt : " + _id_gt );
	//print( "_id_lt : " + _id_lt );

	var r = [];

	transaction_quote_purchase_req$_findRange( _id_gt, _id_lt ).forEach( function( doc ){
		transaction_quote_purchase_req$_delete__getAllList( doc );
		r.push( doc );
	});

	print( "-- [ E ] - transaction_quote_purchase_req$getList_Range__id():{Array}----------" );

	return r;
}
