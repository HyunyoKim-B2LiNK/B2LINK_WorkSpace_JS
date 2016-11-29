//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_partner/partner_delivery/window.b2link_ui_partner.partner_delivery.update.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_partner.partner_delivery.update = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_partner.partner_delivery.update():{Array}----------" );
	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_PARTNER_BUYER
		, nm : "update"
		, css_url : "./css_ui/"
		, css_front_nm : "div__partner_delivery-"
		, key : "partner_delivery$update"
	};

	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	if( !o[ 1 ].getEvt_Complete__Update() )
	{
		o[ 1 ].setEvt_Complete__Update( function( result )
		{
			window.TtwLog.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__Update( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
				/*/
				//o[ 1 ].hide();
				////window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
				//window.b2link_ui_partner.partner_delivery.getAllList();
				/*/
				o[ 1 ].req_Data();
				//*/
			}
			else alert( "수정 실패." );

			window.TtwLog.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__Update( function( result ){----------" );
		});
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_partner.partner_delivery.update():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;