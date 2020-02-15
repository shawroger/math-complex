# ComplexNumber 类

**ComplexNumber** 是本库的核心类，所有其他类都由此衍生，且通过 **new** 即可声明一个复数对象。

* **constructor** 类型定义

``` javascript
constructor(real?: number, imaginary?: number)
```

* 示例

``` javascript
import { ComplexNumber } from "math-complex";

const z1 = new ComplexNumber(3, 4); // z1 = 3 + 4i
```

## 对象属性

### imaginary

**imaginary** 是一个 **number** 对象，即为该对象的虚部。

``` javascript
import { ComplexNumber } from "math-complex";

const z1 = new ComplexNumber(3, 4); // z1 = 3 + 4i
z1.imaginary === 4 // true
```

### real

**real** 是一个 **number** 对象，即为该对象的实部。

``` javascript
import { ComplexNumber } from "math-complex";

const z1 = new ComplexNumber(3, 4); // z1 = 3 + 4i
z1.real === 3 // true
```
### radius

**radius** 是一个 **number** 对象，即为该对象的模长。

``` javascript
import { ComplexNumber } from "math-complex";

const z1 = new ComplexNumber(3, 4); // z1 = 3 + 4i
z1.radius === 5 // true
```

### mainAngle

**mainAngle** 是一个 **number** 对象，即为该对象的幅角主值。

``` javascript
import { ComplexNumber } from "math-complex";

const z1 = new ComplexNumber(1, 1); // z1 = 1 + i
z1.mainAngle === Math.PI / 4 // true
```

## 静态方法

### define

**define** 是一个 **ComplexNumber** 对象的构造器，返回一个ComplexNumber对象。

* 类型定义

``` ts
static define(real?: number, imaginary?: number): ComplexNumber;
```

* 示例

``` javascript
import { ComplexNumber } from "math-complex";

const { define } = ComplexNumber;
const z1 = define(3, 4); // z1 = 3 + 4i
```

本质上 **define** 就是调用了**ComplexNumber** 类的 **new** 方法：

``` javascript
ComplexNumber.define = (...args) => new ComplexNumber(...args)
```

### fromAngle

**fromAngle** 是另一个 **ComplexNumber** 对象的构造器，返回一个ComplexNumber对象，与 **define** 不同，**fromAngle** 接收的参数是复数的模长和幅角主值。

* 类型定义

``` ts
static fromAngle(radius?: number, mainAngle?: number): ComplexNumber;
```

* 示例

``` javascript
import { ComplexNumber } from "math-complex";

const { fromAngle } = ComplexNumber;
const z1 = fromAngle(Math.sqrt(2), Math.PI / 4); 
// z1 = sqrt(2) * (cos(π/4) + sin(π/4)) = 1 + i
```

## 对象方法

### abs

**abs** 返回一个 **ComplexNumber** 对象的模长。

* 类型定义

``` ts
abs(): number;
```

* 示例

``` javascript
import { define } from "math-complex";
// 此处 define 即为 ComplexNumber.define 在全局的导出对象

const z1 = define(3, 4); // z1 = 3 + 4i
z1.abs() === 5 // true
```

### absSquare

**absSquare** 返回一个 **ComplexNumber** 对象模长的平方。

* 类型定义

``` ts
absSquare(): number;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
z1.absSquare() === 25 // true
```

### add

**add** 定义了 **ComplexNumber** 的加法运算，且支持原生**number** 对象。

* 类型定义

``` ts
add(addend: number | ComplexNumber): ComplexNumber;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = define(5, 12); // z1 = 5 + 12i
const z3 = z1.add(2); // z3 = z1 + 2 = 5 + 4i
const z4 = z1.add(z2); // z4 = z1 + z2 = 8 + 16i
```

### angle

**angle** 返回 **ComplexNumber** 的辐角主值。

* 类型定义

``` ts
angle(): number;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(1, 1);
z1.angle() === Math.PI / 4 // true
```

### contrary

**contrary** 返回一个 **ComplexNumber** 对象的相反数。

* 类型定义

``` ts
contrary(): number;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
z1.contrary().real === -3 // true
z1.contrary().imaginary === -4 // true
```

### conj

**conj** 返回一个 **ComplexNumber** 对象的共轭复数。

* 类型定义

``` ts
conj(): number;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
z1.conj().real === 3 // true
z1.conj().imaginary === -4 // true
```

### divide

**divide** 定义了 **ComplexNumber** 的除法运算，且支持原生**number** 对象。

* 类型定义

``` ts
divide(divisor: number | ComplexNumber): ComplexNumber;
```

* 示例

``` javascript
import { define, tryRealize } from "math-complex";

const z1 = define(6, 8); // z1 = 6 + 8i
const z2 = z1.divide(2) // z2 = z1 / 2 = 3 + 4i
tryRealize(z1.divide(z2)) === 2 // true, z1 / z2 = 2
```

### isAngle

**isAngle** 用来检查一个弧度角是否是 **ComplexNumber** 的一个辐角（即与辐角主值相差2π的整数倍）。

* 类型定义

``` ts
isAngle(angle: number, accuracy?: number): boolean;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(1, 1);
const angle = 9 * Math.PI / 4;
z1.isAngle(angle) === true // true
```

* 设置精度accuracy

有时由于浮点计算问题，对π的检查存在偏差，我们可以适当设置精度 **accuracy** 参数的值，默认为0.0001，**accuracy** 的定义是 (角度差/2π) 的小数部分。

``` javascript
import { define } from "math-complex";

z1.isAngle(angle) === false // false，应为true，精度过小
z1.isAngle(angle, 0.01) === true // 精度合理
```

### mult

**mult** 定义了 **ComplexNumber** 的乘法运算，且支持原生**number** 对象。

* 类型定义

``` ts
mult(multiplier: number | ComplexNumber): ComplexNumber;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = z1.mult(2) // z2 = z1 * 2 = 6 + 8i
```

### pow

**pow** 定义了 **ComplexNumber** 的乘方运算。

* 类型定义

``` ts
pow(power: number): ComplexNumber | 1;
```

幂必须是整数，如果幂为分数参见 [sqrt 方法](/API/complex-number.html#sqrt)，且乘方运算在幂不同时候执行不同的运算方法。

* 幂为 0 时，返回值为 1

* 幂为正整数时，返回值为复数自乘 n 次的结果

* 幂为负整数时，返回值为复数自乘 n 次的结果的倒数 （参见 [recip 方法](/API/complex-number.html#recip)）

### recip

**recip** 返回一个 **ComplexNumber** 的倒数结果。

* 类型定义

``` ts
recip(): ComplexNumber;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = z1.recip() // z2 = 1 / z1 = 0.6- 0.8i
```

* 实际上，**recip()** 方法就是返回 **1 + 0i** 的[除法运算](/API/complex-number.html#divide)结果。

``` javascript
class ComplexNumber {
    // ...
    recip() {
        return new ComplexNumber(1, 0).divide(this);
    }
}
```

### sub

**substract** 的别名，参见 [subtract](/API/complex-number.html#subtract)。

### subtract

**subtract** 定义了 **ComplexNumber** 对象的减法运算。

* 类型定义

``` ts
subtract(subtrahend: number | ComplexNumber): ComplexNumber;
```

* 示例

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = define(5, 12); // z1 = 5 + 12i
const z3 = z1.subtract(2); // z3 = z1 - 2 = 1 + 4i
const z4 = z1.subtract(z2); // z4 = z1 - z2 = -2 + -7i
```

* 实际上，**subtract()** 方法就是参数的相反数的[加法运算](/API/complex-number.html#add)结果。

``` javascript
class ComplexNumber {
    // ...
    subtract(params) {
        return this.add(params.contrary());
    }
}
```

### sqrt

**sqrt** 定义了 **ComplexNumber** 对象的开方运算。

* 类型定义

``` ts
sqrt(power?: number): ComplexNumber;
```

* **power** 必须为正整数，默认空参数是开平方，即 **power** 为2。

* 开方运算是利用棣莫佛定理，将复数转换成模长和辐角的形式计算，参见 [fromAngle](/API/complex-number.html#fromangle) 静态方法。

``` javascript
class ComplexNumber {
    // ...
    sqrt(power) {
		return ComplexNumber.fromAngle(
			Math.pow(this.radius, 1 / power),
			this.mainAngle / power
		);
	}
}
```

## 关于链式操作

所有返回 **ComplexNumber** 对象的方法都支持链式运算。

其中包含：[add](/API/complex-number.html#add), [contrary](/API/complex-number.html#contrary), [conj](/API/complex-number.html#conj), [divide](/API/complex-number.html#divide), [mult](/API/complex-number.html#mult), [recip](/API/complex-number.html#recip), [subtract](/API/complex-number.html#subtract), [sqrt](/API/complex-number.html#sqrt)