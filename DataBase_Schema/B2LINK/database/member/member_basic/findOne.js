function( d )
{
	var o = member_basic$_getCol().findOne( d );
	member_basic$_delete__findOne_Common( o );
	return o;
}