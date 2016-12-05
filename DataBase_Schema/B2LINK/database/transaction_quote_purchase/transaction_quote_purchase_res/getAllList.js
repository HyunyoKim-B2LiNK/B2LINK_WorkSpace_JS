function()
{
	print( "---------- [ S ] - transaction_quote_purchase_res():{Array} ---------- ");
	var r = [];
	print( "---------- transaction_quote_purchase_res$_findAll ---------- ");
	transaction_quote_purchase_res$_findAll().forEach( function( doc ){
		transaction_quote_purchase_res$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - transaction_quote_purchase_res():{Array} ---------- ");
	return r;
}
