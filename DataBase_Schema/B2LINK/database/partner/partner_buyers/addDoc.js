function( d )
{
	print( "-- [ S ] - partner_buyers$addDoc():{uint}----------" );

	var col = partner_buyers$_getCol();
	var len = partner_buyers$_findAll().count();
	var r = partner_buyers$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - partner_buyers$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( partner_buyers$check__Overlap( r ) )
	{
		print( "-- [ E ] - partner_buyers$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, _id$country : NumberInt(r._id$country)
			, _id$member_public : NumberInt(r._id$member_public)
			, _id$country : NumberInt(r._id$country)
			, _id$partner_person : NumberInt(r._id$partner_person)
			, address : r.address
			, address_kr : r.address_kr
			, address_cn : r.address_cn
			, address_us : r.address_us
			, code_registration : r.code_registration
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
			, num_fax : r.num_fax
			, num_telephone : r.num_telephone
			, url : r.url
		});

		print( "-- [ E ] - partner_buyers$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
