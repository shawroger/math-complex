declare class ComplexNumber {
    readonly real: number;
    readonly imaginary: number;
    radius: number;
    mainAngle: number;
    constructor(real?: number, imaginary?: number);
    static define(real?: number, imaginary?: number): ComplexNumber;
    static fromAngle(radius?: number, mainAngle?: number): ComplexNumber;
    abs(): number;
    absSquare(): number;
    conj(): ComplexNumber;
    add(addend: number | ComplexNumber): ComplexNumber;
    subtract(subtrahend: number | ComplexNumber): ComplexNumber;
    sub(subtrahend: number | ComplexNumber): ComplexNumber;
    mult(multiplier: number | ComplexNumber): ComplexNumber;
    divide(divisor: number | ComplexNumber): ComplexNumber;
    recip(): ComplexNumber;
    contrary(): ComplexNumber;
    angle(): number;
    isAngle(angle: number, accuracy?: number): boolean;
    pow(power: number): ComplexNumber | 1;
    sqrt(power?: number): ComplexNumber;
}
export { ComplexNumber };
