function()
{
	print( "---------- [ S ] - transaction_quote_purchase_req():{Array} ---------- ");
	var r = [];
	print( "---------- transaction_quote_purchase_req$_findAll ---------- ");
	transaction_quote_purchase_req$_findAll().forEach( function( doc ){
		transaction_quote_purchase_req$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - transaction_quote_purchase_req():{Array} ---------- ");
	return r;
}
