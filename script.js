const dropdown = document.querySelector('.dropdown'),
      dropdownMenu = document.querySelector('.dropdown-menu'),
      dropdownToggle = document.querySelector('.dropdown-toggle'),
      dropdownItems = document.querySelectorAll('.dropdown-item'),
      input = document.querySelector('.inp'),
      result = document.querySelector('.result-text'),
	  butt = document.querySelector('.butt');

let sistem = 2;
let colo;
let res = '';

dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    dropdownMenu.classList.toggle('show');
    
})


for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', () => {
        dropdownToggle.textContent = dropdownItems[i].textContent;
        dropdown.classList.toggle('show');
        dropdownMenu.classList.toggle('show');
        sistem = i + 2;
		result.textContent = revers(sist(input.value));
		res = '';
    })
}

input.addEventListener('input', () => {
	const alf = /[A-Za-zА-Яа-я]/gi;
	if (input.value.match(alf)) {

		

		result.textContent = sist(alfabet(input.value), true);

		
		
	} else {

		if (result.textContent > 111111111111111000110010110011100111101111101010011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
			result.textContent = 'слишком большое число';
		} else {
			result.textContent = revers(sist(input.value), false);

			res = '';
		}
	}

    
})

function sist(content, lett) {
	if (lett) {
		

		colo = Math.floor(getBaseLog(sistem, content));

		res += `${divide(content, sistem).rem}`;

		let reg = content;

		for (let i = 0; i < colo; i++) {
			reg = divide(reg, sistem).res;
			
			res += `${divide(reg, sistem).rem}`;
			
		}
		
		res += ' ';

		return res;
	} else {
		colo = Math.floor(getBaseLog(sistem, content));

		res += `${divide(content, sistem).rem}`;

		let reg = content;

		for (let i = 0; i < colo; i++) {
			reg = divide(reg, sistem).res;
			
			res += `${divide(reg, sistem).rem}`;
			
		}
		return res;
	}	
	
}

function getBaseLog(x, y) {
	return Math.log(y) / Math.log(x);
}

function divide(num, del) {
	let col = Math.floor(num / del);
	const divi = {
		res: col,
		rem: num % del
	}
	return divi
}

function revers(text) {
	let arr = Array.from(text)
	let leng = arr.length;
	for (let i = leng - 1; i > -1; i--) {
		arr.push(arr[i]);
	}
	for (let i = 0; i < leng; i++) {
		arr.shift();
	}
	return arr.join('');
}

function alfabet(text) {
	let arr = Array.from(text);
	let shifr = 0;

	for (let i = 0; i < arr.length; i++) {
		switch(arr[i]) {
			case 'a': shifr = 1; break;
			case 'b': shifr = 2; break;
			case 'c': shifr = 3; break;
			case 'd': shifr = 4; break;
			case 'e': shifr = 5; break;
			case 'f': shifr = 6; break;
			case 'g': shifr = 7; break;
			case 'h': shifr = 8; break;
			case 'i': shifr = 9; break;
			case 'j': shifr = 10; break;
			case 'k': shifr = 11; break;
			case 'l': shifr = 12; break;
			case 'm': shifr = 13; break;
			case 'n': shifr = 14; break;
			case 'o': shifr = 15; break;
			case 'p': shifr = 16; break;
			case 'q': shifr = 17; break;
			case 'r': shifr = 18; break;
			case 's': shifr = 19; break;
			case 't': shifr = 20; break;
			case 'u': shifr = 21; break;
			case 'v': shifr = 22; break;
			case 'w': shifr = 23; break;
			case 'x': shifr = 24; break;
			case 'y': shifr = 25; break;
			case 'z': shifr = 26; break;
			case ' ': shifr = 0; break;
		}
	}
	
	return shifr;
}



