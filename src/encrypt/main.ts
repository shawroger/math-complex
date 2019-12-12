import {
    key
} from '../app/key';
import {
    filp,
    strToArray
} from '../decrypt/main';

function randSort(a: number, b: number): number {
    return Math.random() > 0.5 ? -1 : 1;
}

function arrayToString(arr: string[]): string {
    let str = '';
    for (let i in arr) {
        str += arr[i];
    }
    return str;
}

function randArray(arr: string[]): string[] {
    let _arr: any[] = [];
    for (let i in arr) {
        _arr[i] = arr[i];
    }
    return _arr.sort(randSort);
}

function newKey(): string {
    const encrypt_key = randArray(key);
    return arrayToString(encrypt_key);
}

function encrypt(str: string): {
    cipher: string;
    solution: string;
    random: boolean;
} {
    let cipher: string = '';
    const random: boolean = true;
    const yek: object = filp(key);
    const encrypt_key: string[] = randArray(key);
    const solution: string = arrayToString(encrypt_key);
    for (let i = 0; i < str.length; i++) {
        const j = (yek[str[i]] + i) % (key.length);
        cipher += encrypt_key[j];
    }
    return {
        cipher,
        solution,
        random
    }
}

function encryptAs(str: string, solution: string): {
    cipher: string;
    solution: string;
    random: boolean;
} {
    let cipher: string = '';
    const random: boolean = false;
    const yek: object = filp(key);
    const encrypt_key: string[] = strToArray(solution);
    for (let i = 0; i < str.length; i++) {
        const j = (yek[str[i]] + i) % (key.length);
        cipher += encrypt_key[j];
    }
    return {
        cipher,
        solution,
        random
    }
}

function encryptUTF8(str: string): {
    cipher: string;
    solution: string;
    random: boolean;
} {
    return encrypt(encodeURI(str));
}

function encryptUTF8As(str: string, solution: string): {
    cipher: string;
    solution: string;
    random: boolean;
} {
    return encryptAs(encodeURI(str), solution);
}
export {
    newKey,
    encrypt,
    encryptUTF8,
    encryptAs,
    encryptUTF8As
}