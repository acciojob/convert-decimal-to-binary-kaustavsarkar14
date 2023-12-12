function decimalToBinary(num) {
	let str = ''
	num = (+num)
	while(num>0){
		if(num%2===0){
			str = 0 + str
		}   
		else str = 1 + str

		num = Math.floor(num/2)
	}
	return str
}
const num = parseInt(prompt("Enter a number."));    
alert(decimalToBinary(num));  
