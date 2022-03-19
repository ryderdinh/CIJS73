function run() {
	var a = 'Foo'
	let b = 'Bar'

	console.log(a, b)

	{
		var c = 'Fooz'
		let d = 'Bazz'
		console.log(c, d)
	}

	console.log(c)
	// console.log(d)
}

run()
console.log(a)
