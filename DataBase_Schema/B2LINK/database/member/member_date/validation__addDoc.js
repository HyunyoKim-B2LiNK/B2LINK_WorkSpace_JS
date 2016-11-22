function( d )
{
	print( "-- [ S ] - member_date$validation__addDoc():void----------" );
	d.d_l_si = validation_Date__YMD_HoMiSe( d.d_l_si || {} );
	d.d_su = validation_Date__YMD_HoMiSe( d.d_su || {} );
	d.d_sec = validation_Date__YMD_HoMiSe( d.d_sec || {} );

	//d.email = NumberInt( d.email );
	//d.email_id = NumberInt( d.email_id );
	//d.email_domain = NumberInt( d.email_domain );

	//d.rank = NumberInt( d.rank ) || -1;
	print( "-- [ E ] - member_date$validation__addDoc():void----------" );
	return d;
}