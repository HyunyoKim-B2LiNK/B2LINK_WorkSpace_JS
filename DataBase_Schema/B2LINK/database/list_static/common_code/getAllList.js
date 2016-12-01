function()
{
	var r = [];
	common_code$_findAll().forEach( function( doc ){
		common_code$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}