function( d )
{
	print( "-- [ S ] - country$validation__addDoc():{Object}----------" );

	if( d.cd_n   ) d.cd_n = NumberInt( d.cd_n );
	if( d.cd_us2 ) d.cd_us2 = d.cd_us2.toUpperCase();
	if( d.cd_us3 ) d.d_us3 = d.cd_us3.toUpperCase();

	//if( d.nm_cn  ) d.nm_cn = d.nm_cn;
	//if( d.nm_kr  ) d.nm_kr = d.nm_kr;
	//if( d.nm_us  ) d.nm_us = d.nm_us;

	print( "-- [ E ] - country$validation__addDoc():{Object}----------" );
	return d;
}