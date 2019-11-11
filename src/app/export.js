import { 
	newKey, 
	encrypt, 
	encryptUTF8, 
	encryptAs, 
	encryptUTF8As 
	} from '../encrypt/export.js';

import { decrypt, decryptUTF8 } from '../decrypt/export.js';

import { catchError } from './catch.js';
export default class Siphan {

	constructor() {
		this.name = 'siphan';
		this.version = '0.0.3';
	}
}

Object.assign(Siphan.prototype, {
	catchError, newKey,
	encrypt, encryptUTF8,
	decrypt, decryptUTF8,
	encryptAs, encryptUTF8As
});
