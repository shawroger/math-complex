class ComplexNumber {
	public radius: number;
	public mainAngle: number;

	constructor(
		public readonly real: number = 0,
		public readonly imaginary: number = 0
	) {
		this.radius = this.abs();
		this.mainAngle = this.angle();
	}

	static define(real: number = 0, imaginary: number = 0): ComplexNumber {
		return new ComplexNumber(real, imaginary);
	}

	static fromAngle(radius: number = 0, mainAngle: number = 0) {
		return new ComplexNumber(
			radius * Math.cos(mainAngle),
			radius * Math.sin(mainAngle)
		);
	}

	abs(): number {
		return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	}

	absSquare(): number {
		return this.real * this.real + this.imaginary * this.imaginary;
	}

	conj(): ComplexNumber {
		return new ComplexNumber(this.real, -1 * this.imaginary);
	}

	add(addend: number | ComplexNumber): ComplexNumber {
		return typeof addend === "number"
			? new ComplexNumber(this.real + addend, this.imaginary)
			: new ComplexNumber(
					this.real + addend.real,
					this.imaginary + addend.imaginary
			  );
	}

	subtract(subtrahend: number | ComplexNumber): ComplexNumber {
		return typeof subtrahend === "number"
			? new ComplexNumber(this.real - subtrahend, this.imaginary)
			: new ComplexNumber(
					this.real - subtrahend.real,
					this.imaginary - subtrahend.imaginary
			  );
	}

	sub(subtrahend: number | ComplexNumber): ComplexNumber {
		return this.subtract(subtrahend);
	}

	mult(multiplier: number | ComplexNumber): ComplexNumber {
		return typeof multiplier === "number"
			? new ComplexNumber(this.real * multiplier, this.imaginary * multiplier)
			: new ComplexNumber(
					this.real * multiplier.real - this.imaginary * multiplier.imaginary,
					this.real * multiplier.imaginary + this.imaginary * multiplier.real
			  );
	}

	divide(divisor: number | ComplexNumber): ComplexNumber {
		return typeof divisor === "number"
			? new ComplexNumber(this.real / divisor, this.imaginary / divisor)
			: new ComplexNumber(
					this.real * divisor.real + this.imaginary * divisor.imaginary,
					this.imaginary * divisor.real - this.real * divisor.imaginary
			  ).divide(divisor.absSquare());
	}

	recip(): ComplexNumber {
		return new ComplexNumber(1, 0).divide(this);
	}

	contrary(): ComplexNumber {
		return new ComplexNumber(-1 * this.real, -1 * this.imaginary);
	}

	angle(): number {
		if (this.real > 0) {
			return Math.atan(this.imaginary / this.real);
		} else if (this.real === 0) {
			return this.imaginary === 0
				? 0
				: (this.imaginary > 0 ? 0.5 : -0.5) * Math.PI;
		} else {
			return (
				Math.atan(this.imaginary / this.real) +
				(this.imaginary >= 0 ? Math.PI : -Math.PI)
			);
		}
	}

	isAngle(angle: number, accuracy: number = 0.0001): boolean {
		return (angle - this.angle()) / (2 * Math.PI) -
			Math.floor((angle - this.angle()) / (2 * Math.PI)) <=
			accuracy
			? true
			: false;
	}

	pow(power: number): ComplexNumber | 1 {
		let result: ComplexNumber = new ComplexNumber(this.real, this.imaginary);
		if (power === 0) return 1;
		for (let i = 0; i < Math.abs(power) - 1; i++) {
			result = result.mult(result);
		}

		return power > 0 ? result : result.recip();
	}

	sqrt(power: number = 2): ComplexNumber {
		return ComplexNumber.fromAngle(
			Math.pow(this.radius, 1 / power),
			this.mainAngle / power
		);
	}
}

export { ComplexNumber };
