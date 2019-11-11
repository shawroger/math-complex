import { key } from '../app/key.js';

function strToArray(str) {
    let _arr = [];
    for(let i = 0; i< str.length; i++) {
        _arr[i] = str[i];
    } return _arr;
}

function filp(arr) {
    let _filp = {};
    for(let i = 0;i < Object.keys(arr).length; i++) {
        _filp[Object.values(arr)[i]+''] = Object.keys(arr)[i]*1;
    } return _filp;
}


function decrypt(str, solution) {

    let plain = '';
    const decrypt_key = strToArray(solution);
    const filp_decryptKey = filp(decrypt_key);

    for(let i = 0; i < str.length; i++) {
        let j = filp_decryptKey[str[i]] - i;
        while(j <= -1 || j >= (key.length)+1) {
            if(j <= -1) { j = j + (key.length); }
            if(j >= (key.length)+1) { j = j - (key.length); }
        }
        plain += key[j];
    }
    return plain;
}


function decryptUTF8(cipher, solution) {
    try {
        return decodeURI(decrypt(cipher, solution));
    } catch(e) {
        const type = 'decrypt_decode_url_error';
        const error = new URIError(`The cipher can not be decoded as any type of URL code.`);
        this.catchError({cipher, solution}, {type, error});
        throw error;
    } finally {}
}


export { filp, strToArray, decrypt, decryptUTF8 }
