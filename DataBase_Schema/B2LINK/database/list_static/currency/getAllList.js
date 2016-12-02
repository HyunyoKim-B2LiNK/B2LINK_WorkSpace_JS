function()
{
	print( "---------- [ S ] - currency():{Array} ---------- ");
	var r = [];
	print( "---------- currency$_findAll ---------- ");
	currency$_findAll().forEach( function( doc ){
		currency$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - currency():{Array} ---------- ");
	return r;
}
