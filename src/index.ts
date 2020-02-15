import { define, ComplexNumber } from "./core";

import {
	ComplexReflect,
	add,
	tryRealize,
	mult,
	isComplex,
	toComplex,
	realize,
	imagine,
	abs,
	absSquare,
	contrary,
	random,
	pow,
	fromAngle
} from "./reflect";

const Complex = {
	define,
	fromAngle,
	Number: ComplexNumber,
	Reflect: ComplexReflect,
	add,
	tryRealize,
	mult,
	isComplex,
	toComplex,
	realize,
	imagine,
	abs,
	absSquare,
	contrary,
	random,
	pow
};

export default Complex;

export {
	define,
	ComplexNumber,
	ComplexReflect,
	add,
	tryRealize,
	mult,
	isComplex,
	toComplex,
	realize,
	imagine,
	abs,
	absSquare,
	contrary,
	random,
	pow,
	fromAngle
};
