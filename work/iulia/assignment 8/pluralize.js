function pluralize (no,noun) {
	if (no >1) noun= noun + "s"
		return (no + " " + noun)
}

console.log(pluralize(5, "cat"))