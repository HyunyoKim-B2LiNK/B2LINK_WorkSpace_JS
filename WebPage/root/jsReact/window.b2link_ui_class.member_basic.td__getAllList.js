//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/class/member_basic/window.b2link_ui_class.member_basic.td__getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

console.logObjectInformation( React, "React" );
console.logObjectInformation( ReactDOM, "ReactDOM" );

/*/
var td__member_basic__getAllList = React.createClass({
	render: function() {
		return (
			<td className="td__member_basic_getAllList"></td>
		);
	}
});
//ReactDOM.render( <td__member_basic__getAllList />, document.getElementById( "div_0__Top_modal") );
/*/
window.b2link_ui_class.member_basic.td__getAllList = React.createClass({
	displayName: 'td__member_basic__getAllList'
	, render : function(){
		return (
			React.createElement( "td", { className : "td__member_basic_getAllList" }, ""
				//, "Hello, world! I am a CommentBox."
			)
		);
	}
});
//ReactDOM.render( React.createElement( td__getAllList, null ), window.document.getElementById( "" ) );
//*/

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
