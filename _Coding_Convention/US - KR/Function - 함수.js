//----------------------------------------------------------------------------------------------------;

//	Object를 Parameter로 받는 함수;

//----------------------------------------------------------------------------------------------------;

/**
 * @private
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 *
 * @return
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 */
var _asd = function( d )
{
	window.TtwLog.timeStamp( "-- [ S ] - _asd():{Object}----------" );

	console.log( d );

	window.TtwLog.timeStamp( "-- [ E ] - _asd():{Object}----------" );

	return d;
};

/**
 * @public
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 *
 * @return
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 */
window.asd = function( d )
{
	window.TtwLog.timeStamp( "-- [ S ] - window.asd():{Object}----------" );

	console.log( d );

	window.TtwLog.timeStamp( "-- [ E ] - window.asd():{Object}----------" );
	return d;
};

//----------------------------------------------------------------------------------------------------;

//	기본 자료타입들을 Parameter로 받는 함수;

//----------------------------------------------------------------------------------------------------;

/**
 * @private
 * @function
 * @param {Array} a//담겨있는 객체의 설명;
 * @param {Boolean} b
 * @param {Function} f
 * @param {Number} n
 * @param {Object} o
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 * @param {String} s
 */
var _asd = function( a, b, f, n, o, s )
{
	window.TtwLog.timeStamp( "-- [ S ] - window.asd():void----------" );

	//필요하거나 중요한 인자들에 대한 console.log;

	window.TtwLog.timeStamp( "-- [ E ] - window.asd():void----------" );
};

/**
 * @public
 * @function
 * @param {Array} a//담겨있는 객체의 설명;
 * @param {Boolean} b
 * @param {Function} f
 * @param {Number} n
 * @param {Object} o
 * <code>
 * {
 *	"a" : 1//숫자 1이다;
 *	, "b" : 2//숫자 2이다;
 * }
 * </code>
 * @param {String} s
 */
var asd = function( a, b, f, n, o, s )
{
	window.TtwLog.timeStamp( "-- [ S ] - asd():void----------" );

	//필요하거나 중요한 인자들에 대한 console.log;

	window.TtwLog.timeStamp( "-- [ E ] - asd():void----------" );
};