function( cd_brand )
{
	print( "-- [ S ] - brand_basic$findOne__cd_brand():void----------" );
	print( "uid : " + uid );
	print( "brand_basic$_getCol() - " + brand_basic$_getCol() );
	print( "-- [ E ] - brand_basic$findOne__cd_brand():void----------" );
	return brand_basic$findOne( { cd_brand : cd_brand } );
}
