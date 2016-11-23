function()
{
	print( "---------- [ S ] - partner_buyer():{Array} ---------- ");
	var r = [];
	print( "---------- partner_buyer$_findAll ---------- ");
	partner_buyer$_findAll().forEach( function( doc ){
		partner_buyer$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_buyer():{Array} ---------- ");
	return r;
}
