function()
{
	print( "---------- [ S ] - messenger():{Array} ---------- ");
	var r = [];
	print( "---------- messenger$_findAll ---------- ");
	messenger$_findAll().forEach( function( doc ){
		messenger$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - messenger():{Array} ---------- ");
	return r;
}
