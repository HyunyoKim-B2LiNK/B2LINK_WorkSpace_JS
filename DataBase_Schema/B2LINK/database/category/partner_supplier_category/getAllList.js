function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- partner_supplier_category$_findAll ---------- ");
	partner_supplier_category$_findAll().forEach( function( doc ){
		partner_supplier_category$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_supplier_category():{Array} ---------- ");
	return r;
}
