import { key } from '../app/key';
import { filp, strToArray } from '../decrypt/main';
function randSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}
function arrayToString(arr) {
    var str = '';
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
    var cipher = '';
    var random = true;
    var yek = filp(key);
    var encrypt_key = randArray(key);
    var solution = arrayToString(encrypt_key);
    for (var i = 0; i < str.length; i++) {
        var j = (yek[str[i]] + i) % (key.length);
        cipher += encrypt_key[j];
    }
    return {
        cipher: cipher,
        solution: solution,
        random: random
    };
}
function encryptAs(str, solution) {
    var cipher = '';
    var random = false;
    var yek = filp(key);
    var encrypt_key = strToArray(solution);
    for (var i = 0; i < str.length; i++) {
        var j = (yek[str[i]] + i) % (key.length);
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
export { newKey, encrypt, encryptUTF8, encryptAs, encryptUTF8As };
//# sourceMappingURL=main.js.map