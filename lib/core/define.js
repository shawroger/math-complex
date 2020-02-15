var ComplexNumber = (function () {
    function ComplexNumber(real, imaginary) {
        if (real === void 0) { real = 0; }
        if (imaginary === void 0) { imaginary = 0; }
        this.real = real;
        this.imaginary = imaginary;
        this.radius = this.abs();
        this.mainAngle = this.angle();
    }
    ComplexNumber.define = function (real, imaginary) {
        if (real === void 0) { real = 0; }
        if (imaginary === void 0) { imaginary = 0; }
        return new ComplexNumber(real, imaginary);
    };
    ComplexNumber.fromAngle = function (radius, mainAngle) {
        if (radius === void 0) { radius = 0; }
        if (mainAngle === void 0) { mainAngle = 0; }
        return new ComplexNumber(radius * Math.cos(mainAngle), radius * Math.sin(mainAngle));
    };
    ComplexNumber.prototype.abs = function () {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    };
    ComplexNumber.prototype.absSquare = function () {
        return this.real * this.real + this.imaginary * this.imaginary;
    };
    ComplexNumber.prototype.conj = function () {
        return new ComplexNumber(this.real, -1 * this.imaginary);
    };
    ComplexNumber.prototype.add = function (addend) {
        return typeof addend === "number"
            ? new ComplexNumber(this.real + addend, this.imaginary)
            : new ComplexNumber(this.real + addend.real, this.imaginary + addend.imaginary);
    };
    ComplexNumber.prototype.subtract = function (subtrahend) {
        return typeof subtrahend === "number"
            ? new ComplexNumber(this.real - subtrahend, this.imaginary)
            : new ComplexNumber(this.real - subtrahend.real, this.imaginary - subtrahend.imaginary);
    };
    ComplexNumber.prototype.sub = function (subtrahend) {
        return this.subtract(subtrahend);
    };
    ComplexNumber.prototype.mult = function (multiplier) {
        return typeof multiplier === "number"
            ? new ComplexNumber(this.real * multiplier, this.imaginary * multiplier)
            : new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary, this.real * multiplier.imaginary + this.imaginary * multiplier.real);
    };
    ComplexNumber.prototype.divide = function (divisor) {
        return typeof divisor === "number"
            ? new ComplexNumber(this.real / divisor, this.imaginary / divisor)
            : new ComplexNumber(this.real * divisor.real + this.imaginary * divisor.imaginary, this.imaginary * divisor.real - this.real * divisor.imaginary).divide(divisor.absSquare());
    };
    ComplexNumber.prototype.recip = function () {
        return new ComplexNumber(1, 0).divide(this);
    };
    ComplexNumber.prototype.contrary = function () {
        return new ComplexNumber(-1 * this.real, -1 * this.imaginary);
    };
    ComplexNumber.prototype.angle = function () {
        if (this.real > 0) {
            return Math.atan(this.imaginary / this.real);
        }
        else if (this.real === 0) {
            return this.imaginary === 0
                ? 0
                : (this.imaginary > 0 ? 0.5 : -0.5) * Math.PI;
        }
        else {
            return (Math.atan(this.imaginary / this.real) +
                (this.imaginary >= 0 ? Math.PI : -Math.PI));
        }
    };
    ComplexNumber.prototype.isAngle = function (angle, accuracy) {
        if (accuracy === void 0) { accuracy = 0.0001; }
        return (angle - this.angle()) / (2 * Math.PI) -
            Math.floor((angle - this.angle()) / (2 * Math.PI)) <=
            accuracy
            ? true
            : false;
    };
    ComplexNumber.prototype.pow = function (power) {
        var result = new ComplexNumber(this.real, this.imaginary);
        if (power === 0)
            return 1;
        for (var i = 0; i < Math.abs(power) - 1; i++) {
            result = result.mult(result);
        }
        return power > 0 ? result : result.recip();
    };
    ComplexNumber.prototype.sqrt = function (power) {
        if (power === void 0) { power = 2; }
        return ComplexNumber.fromAngle(Math.pow(this.radius, 1 / power), this.mainAngle / power);
    };
    return ComplexNumber;
}());
export { ComplexNumber };
//# sourceMappingURL=define.js.map