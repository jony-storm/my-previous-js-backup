console.log("\033[2J")
let i = 0
let arr = ["James", "Ryan", "Jason", "Johanna", "Jimmy"]
let len = arr.length
while(i < len) {
	console.log("\033[9;0HWrite you name here")
	console.log(i + ". " + arr[i])
	console.log("\033[" + i + ";0H\033[k" + i + ". " + arr[i])
	i++
}
console.log("\033[2J\033[0;0H")