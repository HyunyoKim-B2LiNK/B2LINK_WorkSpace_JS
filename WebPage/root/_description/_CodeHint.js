

//----------------------------------------------------------------------------------------------------;

//	b2link.common;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.console;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {MemoryInfo}
 */
window.b2link.console.getMemory = function(){};

/**
 * @function
 */
window.b2link.console.initialize = function(){};

/**
 * @function
 * @param {String} name
 * @param {Object} t
 */
window.b2link.console.nameAndObject = function( name, t ){};

/**
 * @function
 * @param {Object} t
 */
window.b2link.console.objInfo = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_BottomLeftRightTop = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_LeftTopRightBottom = function( t ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.date;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
window.b2link.date.getArrayDateFromNewDate = function(){};

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
window.b2link.date.getDateStringFromArrayDate_Dash = function( a ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.dom;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.element;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.appendChild = function( p, o ){};

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 */
window.b2link.element.getElementByClassName = function( t, className ){};

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.hide = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable = function( t ){};

/**
 * @function
 * @param {String} id htmlElementID
 */
window.b2link.element.mouseDisable__ID = function( id ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable = function( t ){};

/**
 * @function
 * @param {String} id htmlElementID
 */
window.b2link.element.mouseEnable__ID = function( id ){};

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.removeChildFromParentElement = function( t ){};

/**
 * @function
 * @param {HTMLElement} tbody HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_td = function( tbody, className ){};

/**
 * @function
 * @param {HTMLElement} thead HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_th = function( thead, className ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow__NMinus = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_Center_FromParent = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_Center_FromWindow = function( t ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} bottom
 */
window.b2link.element.setPosition_LeftBottom = function( t, left, bottom ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} top
 */
window.b2link.element.setPosition_LeftTop = function( t, left, top ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} bottom
 */
window.b2link.element.setPosition_RightBottom = function( t, right, bottom ){};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} top
 */
window.b2link.element.setPosition_RightTop = function( t, right, top ){};

/**
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.show = function( t ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.el_input;

//----------------------------------------------------------------------------------------------------;

/**
	 * @function
	 * @param {HTMLElement} t INPUT
	 * @return {Object} {}
	 */
window.b2link.el_input.getInputValueFromInputType = {};

/**
	 * @function
	 * @param {Object} t INPUT
	 * @param {HTMLElement} el INPUT
	 */
window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName = {};

//----------------------------------------------------------------------------------------------------;

//	b2link.el_tbody;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.change_tbody_child = function( tbody, d ){};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected = function( t ){};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected = function( t ){};

/**
 * @function
 * @param {HTMLElement} t tr
 * @return {Object} {}
 */
window.b2link.el_tbody.getInputValueFromTR = function( t ){};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected = function( t ){};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected = function( t ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__LastTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText_Int__FirstTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText_Int__LastTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__LastTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__FirstTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__LastTRFirstTD = function( tbody ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.push_tbody_child = function( tbody, d ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.unshift_tbody_child = function( tbody, d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.fn;

//----------------------------------------------------------------------------------------------------;

/**
	 * @function
	 * @param {*} result
	 */
window.b2link.fn.getResultStatus = {};

//----------------------------------------------------------------------------------------------------;

//	b2link.html;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_html = function( element, o ){};

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_tbody_child = function( element, a ){};

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_html = function( element, o ){};

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_tbody_child = function( element, a ){};

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_html = function( element, o ){};

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_html_Children = function( element, o ){};

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_tbody_child = function( element, a ){};

/**
 * @function
 * @param {HTMLElement} element
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.apply_html = function( element, o ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.apply_tbody_child = function( tbody, a ){};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html.apply_tbody_child__RecycleTD = function( tbody, a ){};

/**
 * @function
 * @param {Array} keys [ "_id", "email", "nm", ... ]
 * @param {Array} a [ { "_id" : 0, "email" : "thdtjsdn@gmail.com", ... }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html.create_tbody_child = function( keys, d ){};

/**
 * @function
 * @param {Array} keys [ "_id", "email", "nm", ... ]
 * @param {Array} a [ { "_id" : 0, "email" : "thdtjsdn@gmail.com", ... }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html.create_tbody_child_input = function( keys, d ){};

/**
 * @function
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html.create_thead_child = function( a ){};

/**
 * @function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
window.b2link.html.include_html = function( element ){};

/**
 * @function
 * @param {HTMLElement} element
 * @return {HTMLElement}
 */
window.b2link.html.include_html_Recursion = function( element ){};

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} keys [ "_id", "email", "nm", ... ]
 * @param {Array} d data [ { "_id" : 0, "email" : "thdtjsdn@gmail.com", ... }, {}, {}, ... ]
 */
window.b2link.html.set_tbody_child = function( element, keys, d ){};

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html.set_thead_child = function( element, a ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.log;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t
 */
window.b2link.log.error__Signin_failure = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link.math;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.obj;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t
 * @param {String} k
 */
window.b2link.obj.getValueFromKey_dotKeyRef = function( t, k ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.service;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.session;

//----------------------------------------------------------------------------------------------------;

/**
	 * @function
	 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
	 */
window.b2link.session.getSession = {};

/**
 * @function
 * @return {String}
 */
window.b2link.session.getSession__sid = function(){};

/**
	 * @function
	 */
window.b2link.session.removeSession = {};

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.b2link.session.setSession = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.ui;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS = function( d ){};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI = function( d ){};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS = function( d ){};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI = function( d ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ElementFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_IDAndValueFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array}
 */
window.b2link.ui.getArray_ValueFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_Element_IDFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_IDAndValueFromParentElement__Input = function( t ){};

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.staticUIMap_Add = function( key, t ){};

/**
 * @function
 * @param {String} key
 * @return {null|Array} [ {HTMLElement}, {} ]
 */
window.b2link.ui.staticUIMap_checkObject = function( key ){};

/**
 * @function
 * @param {String} key
 */
window.b2link.ui.staticUIMap_Remove = function( key ){};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_CSS = function( folderNM, fileNM ){};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_HTML = function( folderNM, fileNM ){};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_JS = function( folderNM, fileNM ){};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_THTML = function( folderNM, fileNM ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.ui_resource;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyBrace_LocaleLabel = function( url, el ){};

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyBrackets_LocaleLabel = function( url, el ){};

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel = function( url, el ){};

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children = function( url, el ){};

/**
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.apply_LocaleLabel = function( url, el ){};

/**
 * @function
 * @param {String} url ./ui/...
 * @return {Object}
 */
window.b2link.ui_resource.reqSync_JSON_LocaleLabel = function( url ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.url;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link.util;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML = function( htmlURL, targetElementID ){};

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS = function( htmlURL, jsURL, targetElementID ){};

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS = function( htmlURL, jsURL, cssURL, targetElementID ){};

/**
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI = function( key, htmlURL, jsURL, cssURL, targetElementID ){};

/**
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI = function( key, htmlURL, jsURL, targetElementID ){};

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl = function( htmlURL, targetElement ){};

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl_Cache = function( htmlURL, targetElement ){};

/**
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML_Cache = function( htmlURL, targetElementID ){};

/**
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.util.importJS = function( url ){};

//----------------------------------------------------------------------------------------------------;

//	b2link.xhr;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbFunction
 * <code>
 * {
 *	"cbFunctions" : {
 *		"onabort" : function( e ){}
 *		, "onerror" : function( e ){}
 *		, "onload" : function( e ){}
 *		, "onloadend" : function( e ){}
 *		, "onstart" : function( e ){}
 *		, "onprogress" : function( e ){}
 *		, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *		, "ontimeout" : function( e ){}
 *	}
 * }
 * </code>
 */
window.b2link.xhr.req = function( url, cbFunctions ){};

/**
 * @function
 * @param {String} url
 */
window.b2link.xhr.reqSync = function( url ){};

/**
 * @function
 * @param {String} url
 * @return {XMLHTTPRequest}
 */
window.b2link.xhr.reqSyncReturn = function( url ){};

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
window.b2link.xhr.reqSync_JSON = function( url ){};

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
window.b2link.xhr.reqSync_String = function( url ){};

/**
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( str ){}
 */
window.b2link.xhr.req_String = function( url, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2linkDev._ljh;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2linkDev._ssw;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2linkExtends.element;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2linkExtends.element.hide = function(){};

/**
 * @function
 */
window.b2linkExtends.element.show = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2linkExtends.extends;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.extends.div_Panel = function( t ){};

//----------------------------------------------------------------------------------------------------;

//	b2linkUIClass.Table;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {HTMLElement} $el_table
 */
window.b2linkUIClass.Table.NextPrevAdd__getAllList = function( url, $el_table ){};

/**
 * @function
 * @param {String} url
 * @param {HTMLElement} $el_table
 */
window.b2linkUIClass.Table.NextPrevRoll__getAllList = function( url, $el_table ){};

/**
 * @function
 * @param {String} url
 * @param {HTMLElement} $el_table
 */
window.b2linkUIClass.Table.NextPrev__getAllList = function( url, $el_table ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_api.baidu;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.booxen;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.google;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.kakao;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.naver;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_api.red;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.bing;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.google;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.kakao;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.ktds;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.naver;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.skplanet;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_mashup.vworld;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_scrap.red;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	b2link_service.common;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_req = function( url, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service.common._fn_res = function( result, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.add = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.check__Overlap = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.remove_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.remove_ids = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.update_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_brand.brand_basic.update_ids = function( d, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_list_static.country;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.add = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.check__Overlap = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.getCount = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.country.getList_Range__id = function( _id_gt, _id_lt, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.add = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.check__Overlap = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.remove_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.remove_ids = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.update_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_list_static.email_detail.update_ids = function( d, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_member.member_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.getAllList__nm = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_ids = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_ids__AllCols = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.remove_id__AllCols = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.update_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_basic.update_ids = function( d, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_member.member_public;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getAllList__nm = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getList_Range__id = function( _id_gt, _id_lt, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFromsid = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFrom_id = function( _id, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_public.getProp_NameFrom_idFromsid = function( cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_member.member_session;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session.checkSession__Sign_In = {};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session.getProp__idFromsid = function( cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_member.member_session_log;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_member.member_session_log.getAllList = function( d, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_service_product.product_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.add = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.joinCol__getAllList = function( cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.remove_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.remove_ids = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.update_id = function( d, cbFunction ){};

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.b2link_service_product.product_basic.update_ids = function( d, cbFunction ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui.test;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.test_Menu = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_brand.brand_basic.add = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_brand.brand_basic.getAllList = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_brand.brand_basic.remove = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_brand.brand_basic.update = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_list_static.country;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.country.add = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.country.getAllList = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.country.getAllList__Table__NextPrev = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.country.getAllList__Table__NextPrevAdd = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.country.getAllList__Table__Rolling = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.email_detail.add = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.email_detail.getAllList = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.email_detail.remove = function(){};

/**
 * @function
 * @param {Object}  email_detail
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_list_static.email_detail.update = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_member.member_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.getAllList = function(){};

/**
 * @function
 */
window.b2link_ui_member.member_basic.getAllList__nm = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.remove = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.signUp = function(){};

/**
 * @function
 * @param {Object}  email_detail
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_basic.update = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_member.member_session;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_session.checkSession__Sign_In = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_session.checkSession__Sign_In__H = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_member.member_session.checkSession__Sign_In__V = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_ui_product.product_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.add = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.getAllList = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.joinCol__getAllList = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.remove = function(){};

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui_product.product_basic.update = function(){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url_brand.brand_basic.getParam = function( d ){};

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_brand.brand_basic.getParam_with_brand_id = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_list_static.country;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d country {}
 * @return {String}
 */
window.b2link_url_list_static.country.getParam = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url_list_static.email_detail.getParam = function( d ){};

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url_list_static.email_detail.getParam_id = function( d ){};

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url_list_static.email_detail.getParam_ids = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_member.member_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_member.member_basic.getParam_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_member.member_basic.getParam_ids = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_member.member_session;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d session { "mid" : "", "mid" : "", "Expires" : "" }
 * @return {String}
 */
window.b2link_url_member.member_session.getParam = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	b2link_url_product.product_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d product_basic {}
 * @return {String}
 */
window.b2link_url_product.product_basic.getParam = function( d ){};

/**
 * @function
 * @param {Object} d product_basic {}
 * @return {String}
 */
window.b2link_url_product.product_basic.getParam_with_product_id = function( d ){};