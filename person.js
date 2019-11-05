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
		Person.counter++;
	}
	
	static fromBirthdateString(firstname, lastname, birthdateString) {
		return new Person(firstname, lastname, new Date(birthdateString))
	}
	
	static fromOnlyBirthdateString(birthdateString) {
		return new Person("John", "Doe", new Date(birthdateString))
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

Person.counter = 0;
Person.prototype.nickname = "nick";
Person.prototype.fullname = function() { 
	return `${this.firstname} ${this.lastname}`;
}