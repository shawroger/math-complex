import { define, ComplexNumber } from "./core";
import { ComplexReflect, add, tryRealize, mult, isComplex, toComplex, realize, imagine, abs, absSquare, contrary, random, pow, fromAngle } from "./reflect";
var Complex = {
    define: define,
    fromAngle: fromAngle,
    Number: ComplexNumber,
    Reflect: ComplexReflect,
    add: add,
    tryRealize: tryRealize,
    mult: mult,
    isComplex: isComplex,
    toComplex: toComplex,
    realize: realize,
    imagine: imagine,
    abs: abs,
    absSquare: absSquare,
    contrary: contrary,
    random: random,
    pow: pow
};
export default Complex;
export { define, ComplexNumber, ComplexReflect, add, tryRealize, mult, isComplex, toComplex, realize, imagine, abs, absSquare, contrary, random, pow, fromAngle };
//# sourceMappingURL=index.js.map