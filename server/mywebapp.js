const express = require('express');
const app = express();

class Person {
	
	firstname;
	lastname;
	birthdate;
	
	//static counter = 0;
	
	constructor(firstname="John", lastname="Doe", 
			birthdate = new Date()
	) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthdate = birthdate;
	}
		
	get age() {
		let today = new Date();
		let res =  today.getFullYear() - this.birthdate.getFullYear();
		if (today.getMonth() < this.birthdate.getMonth()
			|| (today.getMonth() < this.birthdate.getMonth()
				&& today.getDate() < this.birthdate.getDate())) 
		{
			res -= 1;
		}
		return res;
	}
	
	toString(){
		return `${this.firstname} ${this.lastname} (${this.age})`;
	}
}


let persons = [
	new Person("Jane"),
	new Person("James","Bond")
]

// GET one person as HTML
app.get('/', function(req, res) {
  res.send('<li>John Doe</li>');
});

//POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(80, function () {
	  console.log('Example app listening on port 80!')
	})