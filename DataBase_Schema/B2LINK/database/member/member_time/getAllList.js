function()
{
	print( "-- [ S ] - member_time$getAllList():void----------" );
	var r = [];
	member_time$_findAll().forEach( function( doc ){ r.push( doc ); });
	print( "-- [ E ] - member_time$getAllList():void----------" );
	return r;
}