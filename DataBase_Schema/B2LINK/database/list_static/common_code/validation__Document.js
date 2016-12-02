function( d )
{
	print( "-- [ S ] - common_code$validation__Document():{Object}----------" );
    try
    {
        if( d.code0 ) d.code0 = NumberInt( d.code0 );
        else return 0;
    }
    catch( e )
    {
        print( "Error : " + er );
        return 0;
    }

    try
    {
        if( d.code1 ) d.code1 = NumberInt( d.code1 );
        else return 0;
    }
    catch( e )
    {
        print( "Error : " + er );
        return 0;
    }

    try
    {
        if( d.code2 ) d.code2 = NumberInt( d.code2 );
        else return 0;
    }
    catch( e )
    {
        print( "Error : " + er );
        return 0;
    }
    
	print( "-- [ E ] - common_code$validation__Document():{Object}----------" );
	return d;
}