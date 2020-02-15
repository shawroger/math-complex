import { ComplexNumber } from "../core";
declare class ComplexReflect {
    static isComplex(num: any): boolean;
    static toComplex(num: number | ComplexNumber): ComplexNumber;
    static tryRealize(complex: ComplexNumber): number | ComplexNumber;
    static realize(num: number | ComplexNumber): number;
    static imagine(num: number | ComplexNumber): number | ComplexNumber;
    static add(num: number | ComplexNumber, ...args: Array<number | ComplexNumber>): number | ComplexNumber;
    static mult(num: number | ComplexNumber, ...args: Array<number | ComplexNumber>): number | ComplexNumber;
    static pow(num: number | ComplexNumber, power: number): number | ComplexNumber;
    static angle(num: number | ComplexNumber): number | ComplexNumber;
    static abs(num: number | ComplexNumber): number | ComplexNumber;
    static absSquare(num: number | ComplexNumber): number | ComplexNumber;
    static contrary(num: number | ComplexNumber): number | ComplexNumber;
    static random(): ComplexNumber;
    static fromAngle(radius?: number, mainAngle?: number): ComplexNumber;
}
declare const add: typeof ComplexReflect.add, tryRealize: typeof ComplexReflect.tryRealize, mult: typeof ComplexReflect.mult, isComplex: typeof ComplexReflect.isComplex, toComplex: typeof ComplexReflect.toComplex, realize: typeof ComplexReflect.realize, imagine: typeof ComplexReflect.imagine, abs: typeof ComplexReflect.abs, absSquare: typeof ComplexReflect.absSquare, contrary: typeof ComplexReflect.contrary, random: typeof ComplexReflect.random, pow: typeof ComplexReflect.pow, fromAngle: typeof ComplexReflect.fromAngle;
export { ComplexReflect, add, tryRealize, mult, isComplex, toComplex, realize, imagine, abs, absSquare, contrary, random, pow, fromAngle };
