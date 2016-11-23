function( d )
{
	print( "-- [ S ] - partner_person$addDoc():{uint}----------" );

	var col = partner_person$_getCol();
	var len = partner_person$_findAll().count();
	var r = partner_person$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - partner_person$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( partner_person$check__Overlap( r ) )
	{
		print( "-- [ E ] - partner_person$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, _id$country : NumberInt( r._id$country )
			, _id$member : NumberInt( r._id$member )
			, _id$title : r._id$title
			, date_regist : r.date_regist
			, description : r.description
			, description_kr : r.description_kr
			, description_cn : r.description_cn
			, description_us : r.description_us
			, divison : r.divison
			, email : r.email
			, messenger : { _id$messenger_type : NumberInt( r.messenger._id$messenger_type ) , id :  r.messenger.id }
			, nm : r.nm
			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us
			, phone_cell : r.phone_cell
			, phone_fax : r.phone_fax
			, phone_tel : r.phone_tel

		});

		print( "-- [ E ] - partner_person$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
