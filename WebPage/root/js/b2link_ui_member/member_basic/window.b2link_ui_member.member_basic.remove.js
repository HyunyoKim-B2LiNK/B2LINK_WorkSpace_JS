//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui_member/window.b2link_ui_member.member_basic.remove.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.remove = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui_member.member_basic.remove():{Array}----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER
		, nm : "remove"
		, css_url : "./css_ui/"
		, css_front_nm : "div__member_basic-"
		, key : "member_basic$remove"
	};

	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );

	if( !o[ 1 ].getEvt_Complete__Delete() )
	{
		o[ 1 ].setEvt_Complete__Delete( function( result ){
			window.TtwLog.timeStamp( "[ S ] - o[ 1 ].setEvt_Complete__Delete( function( result ){----------" );
			if( window.b2link.fn.getResultStatus( result ) )
			{
				/*/
				//o[ 1 ].hide();
				////window.b2link.element.setPosition_RightTop( o[ 0 ], 10, 300 );
				//window.b2link_ui.member_basic.getAllList();
				/*/
				o[ 1 ].req_Data();
				//*/
			}
			else alert( "삭제 실패." );

			window.TtwLog.timeStamp( "[ E ] - o[ 1 ].setEvt_Complete__Delete( function( result ){----------" );
		});
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui_member.member_basic.remove():{Array}----------");

	return o;
}

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;