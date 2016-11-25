function()
{
	print( "---------- [ S ] - partner_delivery():{Array} ---------- ");
	var r = [];
	print( "---------- partner_delivery$_findAll ---------- ");
	partner_delivery$_findAll().forEach( function( doc ){
		partner_delivery$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_delivery():{Array} ---------- ");
	return r;
}
