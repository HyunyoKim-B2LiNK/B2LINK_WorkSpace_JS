function( d )
{
	print( "-- [ S ] - email$validation__addDoc():void----------" );
	/*/
	필수 필드
	SLD, c

	다음중 하나는 무조건 들어가야 함.
	TLD, ccTLD, gTLD

	//*/
	// 소문자로 변경
	d.sld = d.sld.toLowerCase();
	d.tld = d.tld.toLowerCase();
	d.cctld = d.cctld.toLowerCase();
	d.gtld = d.gtld.toLowerCase();
	d.c = d.c.toLowerCase();
	print( "-- [ E ] - email$validation__addDoc():void----------" );
	return d;
}
