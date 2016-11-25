function()
{
	print( "---------- [ S ] - partner_supplier():{Array} ---------- ");
	var r = [];
	print( "---------- partner_supplier$_findAll ---------- ");
	partner_supplier$_findAll().forEach( function( doc ){
		partner_supplier$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_supplier():{Array} ---------- ");
	return r;
}
