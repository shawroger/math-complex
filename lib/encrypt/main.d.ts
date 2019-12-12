declare function newKey(): string;
declare function encrypt(str: string): {
    cipher: string;
    solution: string;
    random: boolean;
};
declare function encryptAs(str: string, solution: string): {
    cipher: string;
    solution: string;
    random: boolean;
};
declare function encryptUTF8(str: string): {
    cipher: string;
    solution: string;
    random: boolean;
};
declare function encryptUTF8As(str: string, solution: string): {
    cipher: string;
    solution: string;
    random: boolean;
};
export { newKey, encrypt, encryptUTF8, encryptAs, encryptUTF8As };
