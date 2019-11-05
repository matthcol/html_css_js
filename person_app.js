const p1 = new Person("Jean", "Dupont", new Date(1970,11,31))
let p2 = new Person("Jeanne", "Dupuis", new Date(1970,1,1))
let p3 = new Person()
let p4 = new Person("Jane")
let p5 = new Person("Michel", "Durand", new Date(1952,1,29))
let p6 = Person.fromBirthdateString("Michel", "Durand", "1952-02-29")
let p7 = Person.fromOnlyBirthdateString("1952-02-29")
let persons = [p1, p2, p3, p4, p5, p6, p7]
//console.log(p1)
//console.log(p1.firstname)
//console.log(p1['firstname'])
//p1.firstname = "Henri"
//console.log(p1)
p1.nickname = "Dudu"
for (let p of persons) {
	console.log(p)
	console.log("	- age: "+ p.age)
	console.log("	- nickname: " + p.nickname)
	console.log("	- fullname: " + p.fullname())
	console.log("	- counter: " + Person.counter)
	
}
// p1 = p2 // pas possible : const
// p2 = p1 // ok