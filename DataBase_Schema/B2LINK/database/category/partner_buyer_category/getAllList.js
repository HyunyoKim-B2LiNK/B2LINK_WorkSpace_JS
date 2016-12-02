function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- partner_buyer_category$_findAll ---------- ");
	partner_buyer_category$_findAll().forEach( function( doc ){
		partner_buyer_category$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - partner_buyer_category():{Array} ---------- ");
	return r;
}
