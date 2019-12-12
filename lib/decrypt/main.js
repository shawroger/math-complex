import { key } from '../app/key';
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
    var plain = '';
    var decrypt_key = strToArray(solution);
    var filp_decryptKey = filp(decrypt_key);
    for (var i = 0; i < str.length; i++) {
        var j = filp_decryptKey[str[i]] - i;
        while (j <= -1 || j >= (key.length) + 1) {
            if (j <= -1) {
                j = j + (key.length);
            }
            if (j >= (key.length) + 1) {
                j = j - (key.length);
            }
        }
        plain += key[j];
    }
    return plain;
}
function decryptUTF8(cipher, solution, callback) {
    try {
        return decodeURI(decrypt(cipher, solution));
    }
    catch (error) {
        callback.call(this, error);
        throw error;
    }
    finally { }
}
export { filp, strToArray, decrypt, decryptUTF8 };
//# sourceMappingURL=main.js.map