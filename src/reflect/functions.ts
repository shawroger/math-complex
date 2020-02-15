import { ComplexNumber } from "../core";

class ComplexReflect {
	static isComplex(num: any): boolean {
		return num instanceof ComplexNumber ? true : false;
	}

	static toComplex(num: number | ComplexNumber): ComplexNumber {
		return typeof num === "number"
			? new ComplexNumber().add(num)
			: new ComplexNumber(num.real, num.imaginary);
	}

	static tryRealize(complex: ComplexNumber): number | ComplexNumber {
		return complex.imaginary === 0 ? complex.real : complex;
	}

	static realize(num: number | ComplexNumber): number {
		return typeof num === "number" ? num : num.real;
	}

	static imagine(num: number | ComplexNumber): number | ComplexNumber {
		return typeof num === "number" ? 0 : num.imaginary;
	}

	static add(
		num: number | ComplexNumber,
		...args: Array<number | ComplexNumber>
	): number | ComplexNumber {
		let result: ComplexNumber = ComplexReflect.toComplex(num);
		args.forEach(v => {
			result = result.add(v);
		});

		return ComplexReflect.tryRealize(result);
	}

	static mult(
		num: number | ComplexNumber,
		...args: Array<number | ComplexNumber>
	): number | ComplexNumber {
		let result: ComplexNumber = ComplexReflect.toComplex(num);
		args.forEach(v => {
			result = result.mult(v);
		});

		return ComplexReflect.tryRealize(result);
	}

	static pow(
		num: number | ComplexNumber,
		power: number
	): number | ComplexNumber {
		return typeof num === "number"
			? Math.pow(num, power)
			: Math.floor(power) === power
			? num.pow(power)
			: num.sqrt(1 / power);
	}

	static angle(num: number | ComplexNumber): number | ComplexNumber {
		return typeof num === "number" ? 0 : num.angle();
	}

	static abs(num: number | ComplexNumber): number | ComplexNumber {
		return typeof num === "number" ? num : num.abs();
	}

	static absSquare(num: number | ComplexNumber): number | ComplexNumber {
		return typeof num === "number" ? num * num : num.absSquare();
	}

	static contrary(num: number | ComplexNumber): number | ComplexNumber {
		return typeof num === "number" ? -1 * num : num.contrary();
	}

	static random(): ComplexNumber {
		return new ComplexNumber(Math.random(), Math.random());
	}

	static fromAngle(radius: number = 0, mainAngle: number = 0): ComplexNumber {
		return ComplexNumber.fromAngle(radius, mainAngle);
	}
}

const {
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
} = ComplexReflect;

export {
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
