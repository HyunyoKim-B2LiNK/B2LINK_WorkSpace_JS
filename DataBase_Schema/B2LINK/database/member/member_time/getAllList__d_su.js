function()
{
	var r = [];
	member_time$_findAll().forEach( function( doc ){
		r.push( doc.d_su );
	});
	return r;
}