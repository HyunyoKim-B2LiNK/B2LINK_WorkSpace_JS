function()
{
	print( "---------- [ S ] - partner_person():{Array} ---------- ");
	var r = [];
	print( "---------- partner_person$_findAll ---------- ");
	partner_person$_findAll().forEach( function( doc ){
		partner_person$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_person():{Array} ---------- ");
	return r;
}
