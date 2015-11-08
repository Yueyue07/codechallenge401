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
},
{ 
name: 'Bob Parr', 
occupation: 'programmer', 

} 

];



function AwesomeIndexProgrammer () {

var length = this.length;
var awesomeindex = 0;
var count = 0;


for (var i = 0; i < length; i++){

    var row = document.createElement('tr');

    var keys = Object.keys(this[i]); //save the keys for each object in an array

	for (var j = 0; j < keys.length; j++) {

 			var cell = document.createElement('td');

 			cell.className = 'col' + j; // add class name to created cells

			var cellText = document.createTextNode(this[i][keys[j]]);

			cell.appendChild(cellText); //append<td> and content inside together

			row.appendChild(cell);             

	}

 	var tblbody = document.getElementById("table-body"); // get the tbody element by its id value   


 	tblbody.appendChild(row); // append <tr> to the <tbody>

  
		if (this[i].occupation == 'programmer'){

			if (!this[i].awesomeIndex){
				this[i].awesomeIndex = null ;
			}
	        else{
	    		awesomeindex = this[i].awesomeIndex + awesomeindex;
		  	    count = count + 1;
	        }
		  
		}

	};

	aveAwesomeIndex = awesomeindex/count;// Programmers' average awesome-index

   

    var div1 = document.createElement('div');

    var div1Text = document.createTextNode('Programmers average Awesome-Index:    ' + aveAwesomeIndex);

    div1.appendChild(div1Text);

    var body = document.getElementById('body');
    
    body.appendChild(div1);

};

AwesomeIndexProgrammer.call(people);
