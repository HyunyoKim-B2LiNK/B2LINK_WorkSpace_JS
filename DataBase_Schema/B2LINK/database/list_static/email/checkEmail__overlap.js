function( d )
{
	print( "-- [ S ] - email$checkEmail_overlap():{uint}----------" );
	/*/
	필수 필드
	SLD, c

	다음중 하나는 무조건 들어가야 함.
	TLD, ccTLD, gTLD
	//*/

	//소문자로 변경;
	d.SLD = d.SLD.toLowerCase();
	d.TLD = d.TLD.toLowerCase();
	d.ccTLD = d.ccTLD.toLowerCase();
	d.gTLD = d.gTLD.toLowerCase();
	d.c = d.c.toLowerCase();

	var r = email$findOne( d );

	if( null == r )
	{
		print( "-- [ E ] - email$checkEmail_overlap():{uint}----------return { result : 1 };" );
		return { result : 0 };
	}

	print( "-- [ E ] - email$checkEmail_overlap():{uint}----------return { result : 1 };" );
	return { result : 1 };
}