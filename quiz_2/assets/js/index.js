//===============task-1========================//

function percentage(num,total){
    return (num/total)*100;
}

const percent=percentage(41,150);
console.log(percent);




//===============task-2========================//

// Sample input array
const person=[
	{
		id: 1,
		personName: "Javaria",
		personAge: "23",
		personIncome: "2000000"
	},
	{
		id: 2,
		personName: "Zoya",
		personAge: "23",
		personIncome: "3000000"
	}
]

//Sample Output
// Person 1 name is Fahad having salary 2000000,
// Person 2 name is Zoya having salary 3000000

console.log(`Person ${person[0].id} name is ${person[0].personName} having salary ${person[0].personIncome}`);
console.log(`Person ${person[1].id} name is ${person[1].personName} having salary ${person[1].personIncome}`);
