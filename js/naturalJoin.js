var fil1 = [ {last_name:"Bourne", roll:12},{last_name:"Alien", roll:14}, {last_name:"Bond", roll:3}, {last_name:"Akter", roll:4}]

var fil2 = [ {first_name:"Jason", roll:12},{first_name:"Alina", roll:14}, {first_name:"James", roll:3}, {first_name:"Ferhan", roll:4}]

function naturalJoin(fil1, fil2) {
	let len1 = fil1.length
	let len2 = fil2.length

	for(let i = 0; i < len1; i++) {
		for(let j = 0; j < len2; j++) {
			if(fil1[i].roll == fil2[j].roll) {
				console.log("Fullname: " + fil1[i].first_name + " " + fil2[j].last_name)
			}
		}
	}
}
