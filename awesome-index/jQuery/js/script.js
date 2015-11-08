var people = [ 
{ 
name: 'Trinity', 
occupation: 'programmer', 
awesomeIndex: 10 
}, 
{ 
name: 'Mater', 
occupation: 'tow truck' 
}, 
{ 
name: 'Number 5', 
occupation: 'programmer', 
awesomeIndex: 7 
}, 
{ 
name: 'Alice', 
occupation: 'programmer', 
awesomeIndex: 9 
}, 
{ 
name: 'Zaphod', 
occupation: 'President of the Galaxy' 
}, 
{ 
name: 'Bob Parr', 
occupation: 'programmer', 
awesomeIndex: 6 
}
];



/*lodash calculate Programmers Average Awesome ID */
var flt = _.filter(people, {occupation: 'programmer'}); // filter out object including programmer

var ArrAwesomeindex = _.pluck(flt,'awesomeIndex'); // Obtain arry only containing values of awesomeIndex

var AveAwesomeindex = _.sum(ArrAwesomeindex)/ArrAwesomeindex.length; //Average AwesomeIndex

/*jQuery to create div element including AveAwesomeindex */
var divAveIn= $("<div></div>").text("Programmers average Awesome-Index: " + AveAwesomeindex);  // Create text with jQuery
$("body").append(divAveIn);     // Append new elements into body



/*jQuery to create div element including AveAwesomeindex */
var RowLen = people.length;

for (var i = 0; i < RowLen; i++){

	var rowdata = people[i];

	var row = $("<tr></tr>"); //create tr element

	for (var key in rowdata){

		var td = $("<td></td>").text(rowdata[key]); //create td element and insert value

		row.append(td); //append td to tr
	}

	$("tbody").append(row); // append tr to tbody

};
