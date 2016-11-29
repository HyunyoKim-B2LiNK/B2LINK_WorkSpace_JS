//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "member_session_log"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"member.member_basic"
		, "member.member_session"
		, "member.member_date"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"member_basic"
		, "member_session"
		, "member_date"
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
		"_id" : {
			"description" : "Unique Key, Primary Key(PK)"
			, "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
			, "minValue" : NumberInt( 0 )
			, "maxValue" : NumberInt( 999999999 )
		}

		//Member ID;
		, "mid" : { "description" : "Member ID", "exampleValue" : "thdtjsdn@gmail.com", "type" : "string", "length" : NumberInt( 0 ) }

		//Member Session ID;
		, "sid" : {
			"description" : "Member Session ID", "exampleValue" : "6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526c4e6d4d7a4f4463344e4751314e6a4d344e7a67305a545a6a4d7a67334f44526d4e44597a4f4464684e47517a4d544d344d7a41305a5451304e6d597a4e6a526c4e4463314e5463354e5745314d544e6b4d32513d"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Create Date;
		, "date" : {
			"description" : "Create Date"
			, "exampleValue" : "ISODate('2016-10-31T10:20:55.669Z')"
			, "type" : "date", "length" : NumberInt( 0 )
		}

		//Date - Session Expired;
		, "d_ex" : { "description" : "Date - Session Expired"
			, "type" : "object"
			, "properties" : {
				//Date - Year;
				"y" : {
					"description" : "Date - Year", "exampleValue" : NumberInt( 2016 )
					, "type" : "uint", "length" : NumberInt( 4 )
					, "minValue" : NumberInt( 1900 )
					, "maxValue" : NumberInt( 3000 )
				}

				//Date - Month;
				, "m" : {
					"description" : "Date - Month", "exampleValue" : NumberInt( 11 )
					, "type" : "uint", "length" : NumberInt( 2 )
					, "minLength" : NumberInt( 1 )
					, "minLength" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 12 )
					, "values" : [ NumberInt( 1 ), NumberInt( 2 ), NumberInt( 3 ), NumberInt( 4 ), NumberInt( 5 ), NumberInt( 6 ), NumberInt( 7 ), NumberInt( 8 ), NumberInt( 9 ), NumberInt( 10 ), NumberInt( 11 ), NumberInt( 12 ) ]
					, "valuesMap" : { "1" : NumberInt( 1 ), "2" : NumberInt( 1 ), "3" : NumberInt( 1 ), "4" : NumberInt( 1 ), "5" : NumberInt( 1 ), "6" : NumberInt( 1 ), "7" : NumberInt( 1 ), "8" : NumberInt( 1 ), "9" : NumberInt( 1 ), "10" : NumberInt( 1 ), "11" : NumberInt( 1 ), "12" : NumberInt( 1 ) }
				}

				//Date - Day;
				, "d" : {
					"description" : "Date - Day", "exampleValue" : NumberInt( 12 )
					, "type" : "uint", "length" : NumberInt( 2 )
					, "minLength" : NumberInt( 1 )
					, "minLength" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 31 )
					, "values" : [ NumberInt( 1 ), NumberInt( 2 ), NumberInt( 3 ), NumberInt( 4 ), NumberInt( 5 ), NumberInt( 6 ), NumberInt( 7 ), NumberInt( 8 ), NumberInt( 9 ), NumberInt( 10 ), NumberInt( 11 ), NumberInt( 12 ), NumberInt( 13 ), NumberInt( 14 ), NumberInt( 15 ), NumberInt( 16 ), NumberInt( 17 ), NumberInt( 18 ), NumberInt( 19 ), NumberInt( 20 ), NumberInt( 21 ), NumberInt( 22 ), NumberInt( 23 ), NumberInt( 24 ), NumberInt( 25 ), NumberInt( 26 ), NumberInt( 27 ), NumberInt( 28 ), NumberInt( 29 ), NumberInt( 30 ), NumberInt( 31 ) ]
					, "valuesMap" : { "1" : NumberInt( 1 ), "2" : NumberInt( 1 ), "3" : NumberInt( 1 ), "4" : NumberInt( 1 ), "5" : NumberInt( 1 ), "6" : NumberInt( 1 ), "7" : NumberInt( 1 ), "8" : NumberInt( 1 ), "9" : NumberInt( 1 ), "10" : NumberInt( 1 ), "11" : NumberInt( 1 ), "12" : NumberInt( 1 ), "13" : NumberInt( 1 ), "14" : NumberInt( 1 ), "15" : NumberInt( 1 ), "16" : NumberInt( 1 ), "17" : NumberInt( 1 ), "18" : NumberInt( 1 ), "19" : NumberInt( 1 ), "20" : NumberInt( 1 ), "21" : NumberInt( 1 ), "22" : NumberInt( 1 ), "23" : NumberInt( 1 ), "24" : NumberInt( 1 ), "25" : NumberInt( 1 ), "26" : NumberInt( 1 ), "27" : NumberInt( 1 ), "28" : NumberInt( 1 ), "29" : NumberInt( 1 ), "30" : NumberInt( 1 ), "31" : NumberInt( 1 ) }
				}

				//Date - Hour;
				, "ho" : {
					"description" : "Date - Hour", "exampleValue" : NumberInt( 12 )
					, "type" : "string", "length" : NumberInt( 2 )
					, "type" : "uint", "length" : NumberInt( 2 )
					, "minLength" : NumberInt( 1 )
					, "minLength" : NumberInt( 2 )
					, "minValue" : NumberInt( 1 )
					, "maxValue" : NumberInt( 24 )
					, "values" : [ NumberInt( 1 ), NumberInt( 2 ), NumberInt( 3 ), NumberInt( 4 ), NumberInt( 5 ), NumberInt( 6 ), NumberInt( 7 ), NumberInt( 8 ), NumberInt( 9 ), NumberInt( 10 ), NumberInt( 11 ), NumberInt( 12 ), NumberInt( 13 ), NumberInt( 14 ), NumberInt( 15 ), NumberInt( 16 ), NumberInt( 17 ), NumberInt( 18 ), NumberInt( 19 ), NumberInt( 20 ), NumberInt( 21 ), NumberInt( 22 ), NumberInt( 23 ), NumberInt( 24 ) ]
					, "valuesMap" : { "1" : NumberInt( 1 ), "2" : NumberInt( 1 ), "3" : NumberInt( 1 ), "4" : NumberInt( 1 ), "5" : NumberInt( 1 ), "6" : NumberInt( 1 ), "7" : NumberInt( 1 ), "8" : NumberInt( 1 ), "9" : NumberInt( 1 ), "10" : NumberInt( 1 ), "11" : NumberInt( 1 ), "12" : NumberInt( 1 ), "13" : NumberInt( 1 ), "14" : NumberInt( 1 ), "15" : NumberInt( 1 ), "16" : NumberInt( 1 ), "17" : NumberInt( 1 ), "18" : NumberInt( 1 ), "19" : NumberInt( 1 ), "20" : NumberInt( 1 ), "21" : NumberInt( 1 ), "22" : NumberInt( 1 ), "23" : NumberInt( 1 ), "24" : NumberInt( 1 ) }
				}

				//Date - Minute;
				, "mi" : {
					"description" : "Date - Minute", "exampleValue" : NumberInt( 53 )
					, "type" : "uint", "length" : NumberInt( 2 )
					, "minLength" : NumberInt( 1 )
					, "maxLength" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : [ NumberInt( 0 ), NumberInt( 1 ), NumberInt( 2 ), NumberInt( 3 ), NumberInt( 4 ), NumberInt( 5 ), NumberInt( 6 ), NumberInt( 7 ), NumberInt( 8 ), NumberInt( 9 ), NumberInt( 10 ), NumberInt( 11 ), NumberInt( 12 ), NumberInt( 13 ), NumberInt( 14 ), NumberInt( 15 ), NumberInt( 16 ), NumberInt( 17 ), NumberInt( 18 ), NumberInt( 19 ), NumberInt( 20 ), NumberInt( 21 ), NumberInt( 22 ), NumberInt( 23 ), NumberInt( 24 ), NumberInt( 25 ), NumberInt( 26 ), NumberInt( 27 ), NumberInt( 28 ), NumberInt( 29 ), NumberInt( 30 ), NumberInt( 31 ), NumberInt( 32 ), NumberInt( 33 ), NumberInt( 34 ), NumberInt( 35 ), NumberInt( 36 ), NumberInt( 37 ), NumberInt( 38 ), NumberInt( 39 ), NumberInt( 40 ), NumberInt( 41 ), NumberInt( 42 ), NumberInt( 43 ), NumberInt( 44 ), NumberInt( 45 ), NumberInt( 46 ), NumberInt( 47 ), NumberInt( 48 ), NumberInt( 49 ), NumberInt( 50 ), NumberInt( 51 ), NumberInt( 52 ), NumberInt( 53 ), NumberInt( 54 ), NumberInt( 55 ), NumberInt( 56 ), NumberInt( 57 ), NumberInt( 58 ), NumberInt( 59 ) ]
					, "valuesMap" : { "0" : NumberInt( 1 ), "1" : NumberInt( 1 ), "2" : NumberInt( 1 ), "3" : NumberInt( 1 ), "4" : NumberInt( 1 ), "5" : NumberInt( 1 ), "6" : NumberInt( 1 ), "7" : NumberInt( 1 ), "8" : NumberInt( 1 ), "9" : NumberInt( 1 ), "10" : NumberInt( 1 ), "11" : NumberInt( 1 ), "12" : NumberInt( 1 ), "13" : NumberInt( 1 ), "14" : NumberInt( 1 ), "15" : NumberInt( 1 ), "16" : NumberInt( 1 ), "17" : NumberInt( 1 ), "18" : NumberInt( 1 ), "19" : NumberInt( 1 ), "20" : NumberInt( 1 ), "21" : NumberInt( 1 ), "22" : NumberInt( 1 ), "23" : NumberInt( 1 ), "24" : NumberInt( 1 ), "25" : NumberInt( 1 ), "26" : NumberInt( 1 ), "27" : NumberInt( 1 ), "28" : NumberInt( 1 ), "29" : NumberInt( 1 ), "30" : NumberInt( 1 ), "31" : NumberInt( 1 ), "32" : NumberInt( 1 ), "33" : NumberInt( 1 ), "34" : NumberInt( 1 ), "35" : NumberInt( 1 ), "36" : NumberInt( 1 ), "37" : NumberInt( 1 ), "38" : NumberInt( 1 ), "39" : NumberInt( 1 ), "40" : NumberInt( 1 ), "41" : NumberInt( 1 ), "42" : NumberInt( 1 ), "43" : NumberInt( 1 ), "44" : NumberInt( 1 ), "45" : NumberInt( 1 ), "46" : NumberInt( 1 ), "47" : NumberInt( 1 ), "48" : NumberInt( 1 ), "49" : NumberInt( 1 ), "50" : NumberInt( 1 ), "51" : NumberInt( 1 ), "52" : NumberInt( 1 ), "53" : NumberInt( 1 ), "54" : NumberInt( 1 ), "55" : NumberInt( 1 ), "56" : NumberInt( 1 ), "57" : NumberInt( 1 ), "58" : NumberInt( 1 ), "59" : NumberInt( 1 ) }
				}

				//Date - Seconds;
				, "se" : {
					"description" : "Date - Seconds", "exampleValue" : NumberInt( 53 )
					, "type" : "uint", "length" : NumberInt( 2 )
					, "minLength" : NumberInt( 1 )
					, "maxLength" : NumberInt( 2 )
					, "minValue" : NumberInt( 0 )
					, "maxValue" : NumberInt( 59 )
					, "values" : [ NumberInt( 0 ), NumberInt( 1 ), NumberInt( 2 ), NumberInt( 3 ), NumberInt( 4 ), NumberInt( 5 ), NumberInt( 6 ), NumberInt( 7 ), NumberInt( 8 ), NumberInt( 9 ), NumberInt( 10 ), NumberInt( 11 ), NumberInt( 12 ), NumberInt( 13 ), NumberInt( 14 ), NumberInt( 15 ), NumberInt( 16 ), NumberInt( 17 ), NumberInt( 18 ), NumberInt( 19 ), NumberInt( 20 ), NumberInt( 21 ), NumberInt( 22 ), NumberInt( 23 ), NumberInt( 24 ), NumberInt( 25 ), NumberInt( 26 ), NumberInt( 27 ), NumberInt( 28 ), NumberInt( 29 ), NumberInt( 30 ), NumberInt( 31 ), NumberInt( 32 ), NumberInt( 33 ), NumberInt( 34 ), NumberInt( 35 ), NumberInt( 36 ), NumberInt( 37 ), NumberInt( 38 ), NumberInt( 39 ), NumberInt( 40 ), NumberInt( 41 ), NumberInt( 42 ), NumberInt( 43 ), NumberInt( 44 ), NumberInt( 45 ), NumberInt( 46 ), NumberInt( 47 ), NumberInt( 48 ), NumberInt( 49 ), NumberInt( 50 ), NumberInt( 51 ), NumberInt( 52 ), NumberInt( 53 ), NumberInt( 54 ), NumberInt( 55 ), NumberInt( 56 ), NumberInt( 57 ), NumberInt( 58 ), NumberInt( 59 ) ]
					, "valuesMap" : { "0" : NumberInt( 1 ), "1" : NumberInt( 1 ), "2" : NumberInt( 1 ), "3" : NumberInt( 1 ), "4" : NumberInt( 1 ), "5" : NumberInt( 1 ), "6" : NumberInt( 1 ), "7" : NumberInt( 1 ), "8" : NumberInt( 1 ), "9" : NumberInt( 1 ), "10" : NumberInt( 1 ), "11" : NumberInt( 1 ), "12" : NumberInt( 1 ), "13" : NumberInt( 1 ), "14" : NumberInt( 1 ), "15" : NumberInt( 1 ), "16" : NumberInt( 1 ), "17" : NumberInt( 1 ), "18" : NumberInt( 1 ), "19" : NumberInt( 1 ), "20" : NumberInt( 1 ), "21" : NumberInt( 1 ), "22" : NumberInt( 1 ), "23" : NumberInt( 1 ), "24" : NumberInt( 1 ), "25" : NumberInt( 1 ), "26" : NumberInt( 1 ), "27" : NumberInt( 1 ), "28" : NumberInt( 1 ), "29" : NumberInt( 1 ), "30" : NumberInt( 1 ), "31" : NumberInt( 1 ), "32" : NumberInt( 1 ), "33" : NumberInt( 1 ), "34" : NumberInt( 1 ), "35" : NumberInt( 1 ), "36" : NumberInt( 1 ), "37" : NumberInt( 1 ), "38" : NumberInt( 1 ), "39" : NumberInt( 1 ), "40" : NumberInt( 1 ), "41" : NumberInt( 1 ), "42" : NumberInt( 1 ), "43" : NumberInt( 1 ), "44" : NumberInt( 1 ), "45" : NumberInt( 1 ), "46" : NumberInt( 1 ), "47" : NumberInt( 1 ), "48" : NumberInt( 1 ), "49" : NumberInt( 1 ), "50" : NumberInt( 1 ), "51" : NumberInt( 1 ), "52" : NumberInt( 1 ), "53" : NumberInt( 1 ), "54" : NumberInt( 1 ), "55" : NumberInt( 1 ), "56" : NumberInt( 1 ), "57" : NumberInt( 1 ), "58" : NumberInt( 1 ), "59" : NumberInt( 1 ) }
				}
			}
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );