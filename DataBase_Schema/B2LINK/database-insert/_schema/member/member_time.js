//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "member_time"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"member.member_basic"
		, "member.member_session"
		, "member.member_time"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"member_basic"
		, "member_session"
		, "member_time"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"member"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
	]

	//--------------------------------------------------;

	//이 Collection의 Properties;
	, "properties" : {
		//Unique Key, Primary Key(PK);
		"_id" : { "description" : "Unique Key, Primary Key(PK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Member ID;
		, "mid" : { "description" : "Member ID", "exampleValue" : "thdtjsdn@gmail.com"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Date - Last SignIn;
		, "d_l_si" : { "description" : "Date - Last SignIn"
			, "type" : "object"
			, "properties" : {
				//Date - Year;
				"y" : { "description" : "Date - Year", "exampleValue" : "2016"
					, "type" : "string", "length" : NumberInt( 4 )
					, "minValue" : NumberInt( 1900 )
					, "maxValue" : NumberInt( 3000 )
				}

				//Date - Month;
				, "m" : { "description" : "Date - Month", "exampleValue" : "11"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 12 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] )
				}

				//Date - Day;
				, "d" : { "description" : "Date - Day", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 31 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ] )
				}

				//Date - Hour;
				, "ho" : { "description" : "Date - Hour", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 24 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] )
				}

				//Date - Minute;
				, "mi" : { "description" : "Date - Minute", "exampleValue" : "59"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}

				//Date - Seconds;
				, "se" : { "description" : "Date - Seconds", "exampleValue" : "53"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}
			}
		}

		//Date - SignUp;
		, "d_su" : { "description" : "Date - SignUp"
			, "type" : "object"
			, "properties" : {
				//Date - Year;
				"y" : { "description" : "Date - Year", "exampleValue" : "2016"
					, "type" : "string", "length" : NumberInt( 4 )
					, "minValue" : NumberInt( 1900 )
					, "maxValue" : NumberInt( 3000 )
				}

				//Date - Month;
				, "m" : { "description" : "Date - Month", "exampleValue" : "11"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 12 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] )
				}

				//Date - Day;
				, "d" : { "description" : "Date - Day", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 31 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ] )
				}

				//Date - Hour;
				, "ho" : { "description" : "Date - Hour", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 24 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] )
				}

				//Date - Minute;
				, "mi" : { "description" : "Date - Minute", "exampleValue" : "59"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}

				//Date - Seconds;
				, "se" : { "description" : "Date - Seconds", "exampleValue" : "53"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}
			}
		}

		//Date - Secession;
		, "d_sec" : { "description" : "Date - Secession"
			, "type" : "object"
			, "properties" : {
				//Date - Year;
				"y" : { "description" : "Date - Year", "exampleValue" : "2016"
					, "type" : "string", "length" : NumberInt( 4 )
					, "minValue" : NumberInt( 1900 )
					, "maxValue" : NumberInt( 3000 )
				}

				//Date - Month;
				, "m" : { "description" : "Date - Month", "exampleValue" : "11"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 12 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] )
				}

				//Date - Day;
				, "d" : { "description" : "Date - Day", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 31 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ] )
				}

				//Date - Hour;
				, "ho" : { "description" : "Date - Hour", "exampleValue" : "12"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 24 )
					, "values" : getIntArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] )
				}

				//Date - Minute;
				, "mi" : { "description" : "Date - Minute", "exampleValue" : "59"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}

				//Date - Seconds;
				, "se" : { "description" : "Date - Seconds", "exampleValue" : "53"
					, "type" : "string", "length" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : getIntArray( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ] )
				}
			}
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );