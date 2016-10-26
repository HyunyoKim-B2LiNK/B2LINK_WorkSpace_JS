function( d )
{
	print( "-- [ S ] - country$validation__Document():{Object}----------" );

	try
	{
		if( d.cd_n ) d.cd_n = NumberInt( d.cd_n );
		else return 0;
	}
	catch( e )
	{
		print( "Error : " + er );
		return 0;
	}

	if( d.cd_us2 )
	{
		if( 2 == d.cd_us2.length ) d.cd_us2 = d.cd_us2.toUpperCase();
		else return 0;
	}
	else return 0;

	if( d.cd_us3 )
	{
		if( 3 == d.cd_us3.length ) d.cd_us3 = d.cd_us3.toUpperCase();
		else return 0;
	}
	else return 0;

	/*/
	d.nm_cn = d.nm_cn;
	d.nm_kr = d.nm_kr;
	d.nm_us = d.nm_us;
	//*/

	print( "-- [ E ] - country$validation__Document():{Object}----------" );
	return d;
}