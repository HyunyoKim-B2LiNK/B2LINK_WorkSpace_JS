function( d )
{
	print( "-- [ S ] - email$checkEmail_overlap():{uint}----------" );
	/*/
	필수 필드
	SLD, c

	다음중 하나는 무조건 들어가야 함.
	TLD, ccTLD, gTLD
	//*/

	printjson( d );

	//소문자로 변경;
	var o = {
		SLD : d.SLD.toLowerCase()
		, TLD : d.TLD.toLowerCase()
		, ccTLD : d.ccTLD.toLowerCase()
		, gTLD : d.gTLD.toLowerCase()
		, c : d.c.toLowerCase()
	};

	var r = email$findOne( o );
	printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - email$checkEmail_overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - email$checkEmail_overlap():{uint}----------return 1;" );
	return 1;
}