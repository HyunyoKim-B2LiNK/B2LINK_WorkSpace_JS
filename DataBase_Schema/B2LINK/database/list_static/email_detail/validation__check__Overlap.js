function( d )
{
	print( "-- [ S ] - email_detail$validation__check__Overlap():{Object}----------" );

	if( d.SLD   ) d.SLD = d.SLD.toLowerCase();
	if( d.TLD   ) d.TLD = d.TLD.toLowerCase();
	if( d.ccTLD ) d.ccTLD = d.ccTLD.toLowerCase();
	if( d.gTLD  ) d.gTLD = d.gTLD.toLowerCase();
	if( d.c     ) d.c = d.c.toLowerCase();

	print( "-- [ E ] - email_detail$validation__check__Overlap():{Object}----------" );
	return d;
}