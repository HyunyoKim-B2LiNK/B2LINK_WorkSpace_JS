function( sid )
{
	var o = member_session$_getCol().findOne({ sid : sid });
	member_session$_delete__findOne_sid( o );
	return o;
}