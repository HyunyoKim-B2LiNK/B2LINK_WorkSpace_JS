function()
{
	print( "---------- [ S ] - partner_logistics():{Array} ---------- ");
	var r = [];
	print( "---------- partner_logistics$_findAll ---------- ");
	partner_logistics$_findAll().forEach( function( doc ){
		partner_logistics$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_logistics():{Array} ---------- ");
	return r;
}
