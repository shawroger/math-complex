(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? factory(exports)
		: typeof define === "function" && define.amd
		? define(["exports"], factory)
		: ((global = global || self), factory((global.siphan = {})));
})(this, function(exports) {
	"use strict";

	var key = [];
	key[0] = "a";
	key[1] = "b";
	key[2] = "c";
	key[3] = "d";
	key[4] = "e";
	key[5] = "f";
	key[6] = "g";
	key[7] = "h";
	key[8] = "i";
	key[9] = "j";
	key[10] = "k";
	key[11] = "l";
	key[12] = "m";
	key[13] = "n";
	key[14] = "o";
	key[15] = "p";
	key[16] = "q";
	key[17] = "r";
	key[18] = "s";
	key[19] = "t";
	key[20] = "u";
	key[21] = "v";
	key[22] = "w";
	key[23] = "x";
	key[24] = "y";
	key[25] = "z";
	key[26] = "A";
	key[27] = "B";
	key[28] = "C";
	key[29] = "D";
	key[30] = "E";
	key[31] = "F";
	key[32] = "G";
	key[33] = "H";
	key[34] = "I";
	key[35] = "J";
	key[36] = "K";
	key[37] = "L";
	key[38] = "M";
	key[39] = "N";
	key[40] = "O";
	key[41] = "P";
	key[42] = "Q";
	key[43] = "R";
	key[44] = "S";
	key[45] = "T";
	key[46] = "U";
	key[47] = "V";
	key[48] = "W";
	key[49] = "X";
	key[50] = "Y";
	key[51] = "Z";
	key[52] = ",";
	key[53] = ".";
	key[54] = "?";
	key[55] = "!";
	key[56] = ":";
	key[57] = ";";
	key[58] = "+";
	key[59] = "-";
	key[60] = "*";
	key[61] = "/";
	key[62] = "^";
	key[63] = "@";
	key[64] = "0";
	key[65] = "1";
	key[66] = "2";
	key[67] = "3";
	key[68] = "4";
	key[69] = "5";
	key[70] = "6";
	key[71] = "7";
	key[72] = "8";
	key[73] = "9";
	key[74] = "%";
	key[75] = "<";
	key[76] = ">";
	key[77] = "#";
	key[78] = "$";
	key[79] = "&";
	key[80] = "=";
	key[81] = "_";
	key[82] = "|";
	key[83] = " ";

	function strToArray(str) {
		var _arr = [];

		for (var i = 0; i < str.length; i++) {
			_arr[i] = str[i];
		}

		return _arr;
	}

	function filp(arr) {
		var filpedArr = {};

		for (var i = 0; i < Object.keys(arr).length; i++) {
			filpedArr[Object.values(arr)[i]] = Object.keys(arr)[i];
		}

		return filpedArr;
	}

	function decrypt(str, solution) {
		var plain = "";
		var decrypt_key = strToArray(solution);
		var filp_decryptKey = filp(decrypt_key);

		for (var i = 0; i < str.length; i++) {
			var j = filp_decryptKey[str[i]] - i;

			while (j <= -1 || j >= key.length + 1) {
				if (j <= -1) {
					j = j + key.length;
				}

				if (j >= key.length + 1) {
					j = j - key.length;
				}
			}

			plain += key[j];
		}

		return plain;
	}

	function decryptUTF8(cipher, solution, callback) {
		try {
			return decodeURI(decrypt(cipher, solution));
		} catch (error) {
			callback.call(this, error);
			throw error;
		} finally {
		}
	}

	function randSort(a, b) {
		return Math.random() > 0.5 ? -1 : 1;
	}

	function arrayToString(arr) {
		var str = "";

		for (var i in arr) {
			str += arr[i];
		}

		return str;
	}

	function randArray(arr) {
		var _arr = [];

		for (var i in arr) {
			_arr[i] = arr[i];
		}

		return _arr.sort(randSort);
	}

	function newKey() {
		var encrypt_key = randArray(key);
		return arrayToString(encrypt_key);
	}

	function encrypt(str) {
		var cipher = "";
		var random = true;
		var yek = filp(key);
		var encrypt_key = randArray(key);
		var solution = arrayToString(encrypt_key);

		for (var i = 0; i < str.length; i++) {
			var j = (yek[str[i]] + i) % key.length;
			cipher += encrypt_key[j];
		}

		return {
			cipher: cipher,
			solution: solution,
			random: random
		};
	}

	function encryptAs(str, solution) {
		var cipher = "";
		var random = false;
		var yek = filp(key);
		var encrypt_key = strToArray(solution);

		for (var i = 0; i < str.length; i++) {
			var j = (yek[str[i]] + i) % key.length;
			cipher += encrypt_key[j];
		}

		return {
			cipher: cipher,
			solution: solution,
			random: random
		};
	}

	function encryptUTF8(str) {
		return encrypt(encodeURI(str));
	}

	function encryptUTF8As(str, solution) {
		return encryptAs(encodeURI(str), solution);
	}

	var index = {
		newKey: newKey,
		encrypt: encrypt,
		encryptUTF8: encryptUTF8,
		decrypt: decrypt,
		decryptUTF8: decryptUTF8,
		encryptAs: encryptAs,
		encryptUTF8As: encryptUTF8As
	};

	exports.decrypt = decrypt;
	exports.decryptUTF8 = decryptUTF8;
	exports.default = index;
	exports.encrypt = encrypt;
	exports.encryptAs = encryptAs;
	exports.encryptUTF8 = encryptUTF8;
	exports.encryptUTF8As = encryptUTF8As;
	exports.newKey = newKey;

  Object.defineProperty(exports, "__esModule", { value: true });

});
