function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- partner_logistics_category$_findAll ---------- ");
	partner_logistics_category$_findAll().forEach( function( doc ){
		partner_logistics_category$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_logistics_category():{Array} ---------- ");
	return r;
}
