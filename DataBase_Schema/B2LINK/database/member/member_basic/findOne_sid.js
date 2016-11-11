function( sid )
{
	var o = member_basic$_getCol().findOne({ sid : sid });
	member_basic$_delete__findOne_sid( o );
	return o;
}