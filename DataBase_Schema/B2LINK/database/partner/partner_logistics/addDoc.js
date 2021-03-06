function( d )
{
	print( "-- [ S ] - partner_logistics$addDoc():{uint}----------" );

	var col = partner_logistics$_getCol();
	var len = partner_logistics$_findAll().count();
	var r = partner_logistics$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - partner_logistics$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( partner_logistics$check__Overlap( r ) )
	{
		print( "-- [ E ] - partner_logistics$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, _id$country : NumberInt( r._id$country )
			, _ids$member : { manager : NumberInt( r._ids$member.manager ), register : NumberInt( r._ids$member.register ) }
			, _id$partner_person : NumberInt( r._id$partner_person )
			, address : r.address
			, address_kr : r.address_kr
			, address_cn : r.address_cn
			, address_us : r.address_us
			, company_registration_number : r.company_registration_number
			, date_regist : r.date_regist
			, description : r.description
			, description_kr : r.description_kr
			, description_cn : r.description_cn
			, description_us : r.description_us
			, email : r.email
			, nm : r.nm
			, nm_cn : r.nm_cn
			, nm_kr : r.nm_kr
			, nm_us : r.nm_us
			, nm_ceo : r.nm_ceo
			, nm_ceo_cn : r.nm_ceo_cn
			, nm_ceo_kr : r.nm_ceo_kr
			, nm_ceo_us : r.nm_ceo_us
			, phone_fax : r.phone_fax
			, phone_tel : r.phone_tel
			, url : r.url
		});

		print( "-- [ E ] - partner_logistics$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
