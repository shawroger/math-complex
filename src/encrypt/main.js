import { key } from '../app/key.js';
import { filp, strToArray } from '../decrypt/main.js';

function _randSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

function arrayToString(arr) {
	let str = '';
	for(let i in arr) {
		str += arr[i];
	}
	return str;
}


function randArray(arr) { 
	let _arr = [];
	for(let i in arr) {
		_arr[i] = arr[i];
	}
	return _arr.sort(_randSort);
}

function newKey() {
	const encrypt_key = randArray(key);
	return arrayToString(encrypt_key);
}

function encrypt(str) {

	let cipher = '';
	const random = true;
	const yek = filp(key);
	const encrypt_key = randArray(key);
	const solution = arrayToString(encrypt_key);
    for(let i = 0; i < str.length; i++) {
        const j = (yek[str[i]] + i) % (key.length);
        cipher += encrypt_key[j];
    }
	return { cipher, solution, random }
}

function encryptAs(str, solution) {

	let cipher = '';
	const random = false;
	const yek = filp(key);
	const encrypt_key = strToArray(solution);
	for(let i = 0; i < str.length; i++) {
        const j = (yek[str[i]] + i) % (key.length);
        cipher += encrypt_key[j];
    }
	return { cipher, solution, random }
}


function encryptUTF8(str) {
	return encrypt(encodeURI(str));
}

function encryptUTF8As(str, solution) {
	return encryptAs(encodeURI(str), solution);
}

export { newKey, encrypt, encryptUTF8, encryptAs, encryptUTF8As }
