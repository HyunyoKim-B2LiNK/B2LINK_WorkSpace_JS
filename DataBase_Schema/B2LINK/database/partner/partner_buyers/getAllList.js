function()
{
	print( "---------- [ S ] - partner_buyers():{Array} ---------- ");
	var r = [];
	print( "---------- partner_buyers$_findAll ---------- ");
	partner_buyers$_findAll().forEach( function( doc ){
		partner_buyers$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_buyers():{Array} ---------- ");
	return r;
}
