export function getPercents(percent, number) {
	return number / 100 * percent;
}

getPercents(30, 200);

export function getMonth(n) {
	if (n === 1) return 'январь';
	if (n === 2) return 'февраль';
	if (n === 3) return 'март';
	if (n === 4) return 'апрель';
	if (n === 5) return 'май';
	if (n === 6) return 'июнь';
	if (n === 7) return 'июль';
	if (n === 8) return 'август';
	if (n === 9) return 'сентябрь';
	if (n === 10) return 'октябрь';
	if (n === 11) return 'ноябрь';
	if (n === 12) return 'декабрь';
  return 'неизвестно';
}

console.log( getMonth(3) );

export function reverseString (str) {
   	let reversedString = '';
	for (let i = str.length - 1; i >= 0; i--) {
    	reversedString += str[i]			
    }
    return reversedString
}  
    console.log(reverseString(232))

