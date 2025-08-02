
let student = {
    name: "Ramesh",
    age: 30,
    isMarried: true,
    address: {
        country: "Nepal",
        city: "Kathmandu",
        ward: 10
    },
    explain: function () {
        // Here, explain is a method, since it is performing somethig inside object
        console.log(this.name + " is " + this.age + " years old and he lives in " + this.address.city)
    }
}

// get student name, city
// using dot (.) notation
console.log(student.name)
console.log(student.address.city)
student.explain();

// using Bracket Notation
// console.log(student['name'])
// console.log(student['address']['city'])
// student['explain']();