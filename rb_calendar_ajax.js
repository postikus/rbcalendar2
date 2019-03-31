<%
var date_month = Request.Query.HasProperty('date_month') ? Int(Request.Query.GetProperty('date_month')) + 1  : '';
var date_year = Request.Query.HasProperty('date_year') ? Int(Request.Query.GetProperty('date_year')) : '';
//Response.Write( "'2018-"+date_month+"-01'")
//Response.Write("'2018-"+(date_month+1)+"-01'")

if ((date_month + 1) > 12){
date_next_month = 1;
date_next_year = date_year + 1;
}
else{
date_next_year = date_year;
date_next_month = date_month + 1;
}

//Response.Write(date_month + 1 + "<br>")
//Response.Write(date_year + "<br>")
//Response.Write(date_month + "<br>")

var event_array = XQuery("sql:
SELECT 
    es.id
    ,es.name
    ,'company' company
    ,'address' address
    ,es.person_num max_pers
    ,'price' price
    ,'isObligatory' isObligatory
    ,CASE es.event_form
		WHEN 'webinar' THEN 'webinar'
		WHEN 'Âåáèíàğ' THEN 'webinar'
		ELSE 'training'
    END type
    ,e.data.value('(event/desc)[1]', 'NVARCHAR(MAX)') description
    ,es.start_date
    ,es.finish_date
FROM events es
INNER JOIN event e
ON es.id = e.id
WHERE
es.start_date > '"+date_year+"-"+date_month+"-01'
AND es.start_date < '"+date_next_year+"-"+(date_next_month)+"-01'
AND es.education_method_id != 6020318431744243030
AND es.name NOT LIKE 'ÈÍÎÑÒĞÀÍÍÛÅ ßÇÛÊÈ%'
AND es.name NOT LIKE 'Àíãëèéñêèé%'
AND es.name NOT LIKE 'Workshop%'
AND DATEDIFF(dd, es.start_date, es.finish_date) < 6
");

var return_array = [];
for (ev in event_array){
	return_array.push(ev);
}

Response.Write(tools.object_to_text(return_array, 'json'))

%>