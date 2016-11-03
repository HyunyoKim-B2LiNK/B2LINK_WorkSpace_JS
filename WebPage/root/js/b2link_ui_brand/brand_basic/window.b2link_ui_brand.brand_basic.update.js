//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_brand/window.b2link_ui_brand.brand_basic.update.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_brand.brand_basic.update = function()
{
	window.RayLog.timeStamp( "---- [ S ] - window.b2link_ui_brand.brand_basic.update():{Array}----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_BRAND
		, nm : "update"
		, css_url : "./css_ui/"
		, css_front_nm : "div__brand_basic-"
		, key : "brand_basic$update"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	if( !o[ 1 ].getEvt_Complete__Update() )
	{
		o[ 1 ].setEvt_Complete__Update( function( result ){
			window.RayLog.timeStamp( "[ S ] - o[ 1 ].getEvt_Complete__Update( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
				/*/
				//o[ 1 ].hide();
				////window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
				//window.b2link_ui.email_detail.getAllList();
				/*/
				o[ 1 ].req_Data();
				//*/
			}
			else alert( "수정 실패." );

			window.RayLog.timeStamp( "[ E ] - o[ 1 ].getEvt_Complete__Update( function( result ){----------" );
		});
	}

	window.RayLog.timeStamp( "---- [ E ] - window.b2link_ui_brand.brand_basic.update():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;