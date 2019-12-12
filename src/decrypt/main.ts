import {
    key
} from '../app/key';

function strToArray(str: string): string[] {
    let _arr:any[] = [];
    for (let i = 0; i < str.length; i++) {
        _arr[i] = str[i];
    }
    return _arr;
}
interface Filp {
    [key: number]: string;
}

function filp(arr: string[]): object {
    let filpedArr: Filp = {};
    for (let i = 0; i < Object.keys(arr).length; i++) {
        filpedArr[Object.values(arr)[i]] = Object.keys(arr)[i];
    }
    return filpedArr;
}

function decrypt(str, solution) {
    let plain = '';
    const decrypt_key = strToArray(solution);
    const filp_decryptKey = filp(decrypt_key);
    for (let i = 0; i < str.length; i++) {
        let j = filp_decryptKey[str[i]] - i;
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

function decryptUTF8(this: any,cipher: string, solution: string, callback ? : any) {
    try {
        return decodeURI(decrypt(cipher, solution));
    } catch (error) {
        callback.call(this, error);
        throw error;
    } finally {}
}
export {
    filp,
    strToArray,
    decrypt,
    decryptUTF8
}