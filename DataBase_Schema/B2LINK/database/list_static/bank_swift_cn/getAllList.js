function()
{
	var r = [];
	bank_swift_cn$_findAll().forEach( function( doc ){
		bank_swift_cn$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}