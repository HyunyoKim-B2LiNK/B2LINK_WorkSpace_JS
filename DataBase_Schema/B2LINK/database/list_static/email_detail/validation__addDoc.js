function( d )
{
	print( "-- [ S ] - email_detail$validation__addDoc():{Object}----------" );

	/*/
	필수 필드
	SLD, c

	다음중 하나는 무조건 들어가야 함.
	TLD, ccTLD, gTLD
	//*/
	print( "-- [ E ] - email_detail$validation__addDoc():{Object}----------" );

	return email_detail$validation__Document( d );
}