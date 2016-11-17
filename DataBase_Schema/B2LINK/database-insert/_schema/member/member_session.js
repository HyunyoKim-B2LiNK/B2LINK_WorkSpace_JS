//----------------------------------------------------------------------------------------------------;

function getIntArray( a ){
	var i = 0;
	a.forEach( function( io ){ a[ i ] = NumberInt( a[ i ] ); ++i; });
	return a;
};

//----------------------------------------------------------------------------------------------------;

var d = {
	"_id" : "member_session"

	//이 Collection을 참조하는 Collections - Database Name And Collection Name;
	, "dereference" : [
		"member.member_basic"
		, "member.member_session_log"
		, "member.member_time"
	]

	//이 Collection을 참조하는 Collections - Collection Name;
	, "dereference_collection" : [
		"member_basic"
		, "member_session_log"
		, "member_time"
	]

	//이 Collection을 참조하는 Database;
	, "dereference_database" : [
		"member"
	]

	//이 Collection이 참조하는 Collections - Database Name And Collection Name;
	, "reference" : [
		"member.member_basic"
		, "member.member_session_log"
		, "member.member_time"
	]

	//이 Collection이 참조하는 Collections - Collection Name;
	, "reference_collection" : [
		"member_basic"
		, "member_session_log"
		, "member_time"
	]

	//이 Collection이 참조하는 Database;
	, "reference_database" : [
		"member"
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

		//Member Session ID;
		, "sid" : { "description" : "Member Session ID", "exampleValue" : "6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526c4e6d4d7a4f4463344e4751314e6a4d344e7a67305a545a6a4d7a67334f44526d4e44597a4f4464684e47517a4d544d344d7a41305a5451304e6d597a4e6a526c4e4463314e5463354e5745314d544e6b4d32513d"
			, "type" : "string", "length" : NumberInt( 0 )
		}

		//Date - Session Expired;
		, "d_ex" : { "description" : "Date - Session Expired", "exampleValue" : "Wed, 16 Nov 2016 10:07:04 GMT"
			, "type" : "string", "length" : NumberInt( 0 )
		}
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );