//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui_import/b2link_bank_swift_kr/Table__NextPrev__getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el_table ){

	//window.b2link.ui_resource.apply_LocaleLabel( url, $el_table );
	//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el_table );
	//window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el_table );

	var _this = window.b2linkUIClass.Table.NextPrev__getAllList( url, $el_table );
		console.log( _this );

	return _this;
});