function getTotalHoursSpent(){
 
	let searchLength = document.querySelector(".time-rows").children[0].tBodies[0].children.length
	let totalTimeSpent = 0

	for (x = 0; x < searchLength; x++) {
		let time_row = document.querySelector(".time-rows").children[0].tBodies[0].children[x].children[2].firstChild.data[0]
		totalTimeSpent += parseInt(time_row)
		}
	return totalTimeSpent;
}