function()
{
	print( "-- [ S ] - member_basic$_update__rank__m1To0():void----------" );
	var col = member_basic$_getCol();
	var oSearch = { _id : 0 };
	var oModify = { $set : { rank : NumberInt( 0 ) } };
	var option_update = { upsert : false };
	member_basic$_findAll().forEach( function( doc ){
		if( -1 == doc.rank )
		{
			oSearch._id = doc._id;
			col.update( oSearch, oModify, option_update );
		}
	});
	print( "-- [ E ] - member_basic$_update__rank__m1To0():void----------" );
	return 1;
}