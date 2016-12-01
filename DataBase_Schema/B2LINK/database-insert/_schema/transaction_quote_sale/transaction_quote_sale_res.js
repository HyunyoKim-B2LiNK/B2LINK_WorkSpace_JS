var d = {
	"_id" : "transaction_quote_sale_res"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"list_static.currency"
		, "member.member_public"
		, "partner.partner_buyer"
		, "transaction_quote_sale.transaction_quote_sale_req"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"currency"
		, "member_public"
		, "partner_person"
		, "transaction_quote_sale_req"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"list_static"
		, "member"
		, "partner"
		, "transaction_quote_sale"
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

		//currency ID(FK).
		, "_id$currency" : { "description" : "Currency ID (FK)" , "exampleValue" : 0
			, "type" : "uint" , "length" : 0
			, "values" : []
			, "valuesMap" : []
		}

		//담당자 및 등록자 Register Member ID (FK)
		, "_id$member" : {
			"description" : "member ID(FK)", "exampleValue" : NumberInt( 0 )
			, "type" : "uint", "length" : NumberInt( 0 )
		}

		//Partner_Buyer ID (FK)
		, "_id$partner_buyer" : {
	"description" : "Partner Buyer ID(FK)", "exampleValue" : 0
	, "type" : "uint", "length" : NumberInt( 0 )
}


		//Partner_person ID (FK)
		, "_id$partner_person" : {
	"description" : "파트너사 담당자 ID(FK)", "exampleValue" : 0
		, "type" : "uint", "length" : NumberInt( 0 )
}


		// Trade_terms ID (FK)
		, "_id$trade_terms" : { "description" : "trade_terms ID (FK)" , "exampleValue" : 0
			, "type" : "uint", "length" : NumberInt( 0 )
			, "values" : [ "CFR", "CIF", "CIP", "CPT", "DAT", "DAP", "DDP", "EXW", "FOB", "FCA", "FAS" ]
			, "valuesMap" : { "CFR" : 1, "CIF" : 1, "CIP" : 1, "CPT" : 1, "DAT" : 1, "DAP" : 1, "DDP" : 1, "EXW" : 1, "FAS" : 1, "FCA" : 1, "FOB" : 1 }
		}

		//Create Date
		, "date_create" : { "description" : "Register Date"
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

		//납기일
		, "due_date" : { "description" : "납기일 "
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

		//ITEMS
		, "items" : { "description" : "판매 품목"
			, "type" : "array"
			, "properties" : [
				{
					"_id$brand_basic" : { "description" : "Brand ID (FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
					, "_id$product_basic" : { "description" : "Product ID(FK)" , "type" : "uint", "length" : NumberInt( 0 ) }
					, "item_total_price" : { "description" : "총가격 ( price * quantity)"
						, "type" : "object"
						, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

					 }
					, "price_quantity" : { "description" : "단가"
						, "type" : "object"
						, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

					 }
					, "price_quantity_of_unit" : { "description" : "수량단가"
						, "type" : "object"
						, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

					 }
					, "quantity" : { "description" : "총 수량(quantity_of_unit * quantity)" , "type" : "uint", "length" : NumberInt( 0 ) }
					, "quantity_of_unit" : { "description" : "단위 수량" , "type" : "uint", "length" : NumberInt( 0 ) }
					, "UOM" : { "description" : "수량 단위(unit_of_measurement)", "exampleValue" : { "nm" : "pkg" , "quantity" : 10 }
					 	, "type" : "object"
						, "properties" : {
							//표시 문자
							"nm" : { "description" : "표시문자" ,  "exampleValue" : "pkg"
								, "type" : "string", "length" : NumberInt( 0 )
							}
							//수량 quantity
							, "quantity" : { "description" : "해당 단위에 포함된 수량", "exampleValue" : 10
								, "type" : "uint", "length" : NumberInt( 0 )
							}
						}
					}
				}
			]
		}

		//물류비
		, "logistic_fee" : { "description" : "물류비용"
			, "type" : "object"
			, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

		}

		//가견적서 번호
		, "quote_sale_res_no" : { "description" : "가견적서 번호(QS YYYYMMDD PARTNER_ID Number)" , "exampleValue" : "QS20161130P11"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//배송지
		, "shipping_address" : { "description" : "배송지"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//총 공급가
		, "total_supply_price" : { "description" : "총 공급가격"
			, "type" : "object"
			, "properties" : {
	//Price
	"price" : { "description" : "Price", "exampleValue" : 100
		, "type" : "number", "length" : NumberInt( 0 )

	}

	//currency
	, "_id$currency" : { "description" : "Currency", "exampleValue" : NumberInt( 0 )
		, "type" : "uint", "length" : NumberInt( 0 )
	}
}

		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).transaction_quote_sale.insert( d );
