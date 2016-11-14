//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/b2link_country/Table__NextPrev_getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_table ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_table );
	window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_table );
	
	var _this = window.b2linkUIClass.Table.NextPrev_getAllList( url, $el_table );
		console.log( _this );
	
	return _this;
});