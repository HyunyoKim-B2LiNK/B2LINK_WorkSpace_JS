function()
{
	var r = [];
	country$_findAll().forEach( function( doc ){
		country$_delete__getAllList( doc ); r.push( doc );
	});
	return r;
}