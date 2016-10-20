function( d )
{
	print( "-- [ S ] - email$addDoc():void----------" );
	var col = email$_getCol();
	var len = email$_findAll().count();
	var r = email$validation__addDoc( d );
	print( "r : " + r );
	if( 0 == r )
	{
		print( "-- [ E ] - email$addDoc():void----------" );
		return 0;
	}

	col.insert({
		_id : NumberInt( len )
    , SLD : r.sld
    , TLD : r.tld
    , ccTLD : r.cctld
    , gTLD : r.gtld
    , c : r.c
	});
	print( "-- [ E ] - email$addDoc():void----------" );
	return 1;
}
