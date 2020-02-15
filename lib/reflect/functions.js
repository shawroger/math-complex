import { ComplexNumber } from "../core";
var ComplexReflect = (function () {
    function ComplexReflect() {
    }
    ComplexReflect.isComplex = function (num) {
        return num instanceof ComplexNumber ? true : false;
    };
    ComplexReflect.toComplex = function (num) {
        return typeof num === "number"
            ? new ComplexNumber().add(num)
            : new ComplexNumber(num.real, num.imaginary);
    };
    ComplexReflect.tryRealize = function (complex) {
        return complex.imaginary === 0 ? complex.real : complex;
    };
    ComplexReflect.realize = function (num) {
        return typeof num === "number" ? num : num.real;
    };
    ComplexReflect.imagine = function (num) {
        return typeof num === "number" ? 0 : num.imaginary;
    };
    ComplexReflect.add = function (num) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = ComplexReflect.toComplex(num);
        args.forEach(function (v) {
            result = result.add(v);
        });
        return ComplexReflect.tryRealize(result);
    };
    ComplexReflect.mult = function (num) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var result = ComplexReflect.toComplex(num);
        args.forEach(function (v) {
            result = result.mult(v);
        });
        return ComplexReflect.tryRealize(result);
    };
    ComplexReflect.pow = function (num, power) {
        return typeof num === "number"
            ? Math.pow(num, power)
            : Math.floor(power) === power
                ? num.pow(power)
                : num.sqrt(power);
    };
    ComplexReflect.angle = function (num) {
        return typeof num === "number" ? 0 : num.angle();
    };
    ComplexReflect.abs = function (num) {
        return typeof num === "number" ? num : num.abs();
    };
    ComplexReflect.absSquare = function (num) {
        return typeof num === "number" ? num * num : num.absSquare();
    };
    ComplexReflect.contrary = function (num) {
        return typeof num === "number" ? -1 * num : num.contrary();
    };
    ComplexReflect.random = function () {
        return new ComplexNumber(Math.random(), Math.random());
    };
    ComplexReflect.fromAngle = function (radius, mainAngle) {
        if (radius === void 0) { radius = 0; }
        if (mainAngle === void 0) { mainAngle = 0; }
        return ComplexNumber.fromAngle(radius, mainAngle);
    };
    return ComplexReflect;
}());
var add = ComplexReflect.add, tryRealize = ComplexReflect.tryRealize, mult = ComplexReflect.mult, isComplex = ComplexReflect.isComplex, toComplex = ComplexReflect.toComplex, realize = ComplexReflect.realize, imagine = ComplexReflect.imagine, abs = ComplexReflect.abs, absSquare = ComplexReflect.absSquare, contrary = ComplexReflect.contrary, random = ComplexReflect.random, pow = ComplexReflect.pow, fromAngle = ComplexReflect.fromAngle;
export { ComplexReflect, add, tryRealize, mult, isComplex, toComplex, realize, imagine, abs, absSquare, contrary, random, pow, fromAngle };
//# sourceMappingURL=functions.js.map