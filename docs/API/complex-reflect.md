# ComplexReflect 静态类

**ComplexReflect** 是本库的函数方法类，使用本类的静态方法可以更直接地操作 **ComplexNumber** 或原生 **number** 对象数据，并且 **ComplexReflect** 类中的所有方法都是静态方法，并且对原生 **number** 对象也有良好兼容性。

## abs

**abs** 返回一个 **ComplexNumber** 或原生 **number** 对象的模长。

* 类型定义

``` ts
static abs(num: number | ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const x = 2; // 原生number对象
const z = define(3, 4); // ComplexNumber对象

ComplexReflect.abs(x) === 2 // true
ComplexReflect.abs(z) === 5 // true
```

## absSquare

**absSquare** 返回一个 **ComplexNumber** 或原生 **number** 对象模长的平方。

* 类型定义

``` ts
static absSquare(num: number | ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const x = 2; // 原生number对象
const z = define(3, 4); // ComplexNumber对象

ComplexReflect.absSquare(x) === 4 // true
ComplexReflect.absSquare(z) === 25 // true
```

## add

**add** 定义了 **ComplexNumber** 或原生 **number** 对象的加法运算，并且支持多个参数（至少2个）。

* 类型定义

``` ts
static add(num: number | ComplexNumber, ...args: Array<number | ComplexNumber>): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
const z2 = define(5, 12); 
const z3 = 5;
const z4 = ComplexReflect.add(z1, z2, z3);
// z4 = z1 + z2 + z3
```

## angle

**angle** 返回 **ComplexNumber** 或原生 **number** 对象的辐角主值（原生 **number** 对象即为0）。

* 类型定义

``` ts
static angle(num: number | ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(1, 1);
ComplexReflect.angle(z1) === Math.PI / 4 // true
ComplexReflect.angle(1234) === 0 // true
```

## contrary

**contrary** 返回一个 **ComplexNumber** 或原生 **number** 对象的相反数。

* 类型定义

``` ts
static contrary(num: number | ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
ComplexReflect.contrary(z1).real === -3 // true
ComplexReflect.contrary(z1).imaginary === -4 // true
ComplexReflect.contrary(5) === -5 // true
```

## fromAngle

**fromAngle** 是另一个 **ComplexNumber** 对象的构造器，**fromAngle** 接收的参数是复数的模长和幅角主值。

参见 [fromAngle](/API/complex-number.html#fromangle)。

## imagine

**imagine** 返回一个 **ComplexNumber** 的虚部， 或参数为原生 **number** 对象，则返回 0。

* 类型定义

``` ts
static imagine(num: number | ComplexNumber): number;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
ComplexReflect.imagine(z1).real === 4 // true
ComplexReflect.imagine(5) === 0 // true
```

## isComplex

**isComplex** 用来判断一个对象是不是 **ComplexNumber** 构造的对象。

* 类型定义

``` ts
static isComplex(num: any): boolean;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
ComplexReflect.imagine(z1).real === 4 // true
ComplexReflect.imagine(5) === 0 // true
```
## mult

**add** 定义了 **ComplexNumber** 或原生 **number** 对象的乘法法运算，并且支持多个参数（至少2个）。

* 类型定义

``` ts
static mult(num: number | ComplexNumber, ...args: Array<number | ComplexNumber>): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
const z2 = define(5, 12);
const z3 = ComplexReflect.mult(z1, 5 ,z2);
// z3 = z1 * 5 *z2
```

## pow

**pow** 定义了 **ComplexNumber** 的乘方运算。

* 类型定义

``` ts
static pow(num: number | ComplexNumber, power: number): number | ComplexNumber;
```
* 幂可为 0、正整数、负整数和分数

* 幂为 0 时，返回值为 1

* 幂为正整数时，返回值为复数自乘 n 次的结果 （参见 [pow 方法](/API/complex-number.html#pow)）

* 幂为负整数时，返回值为复数自乘 n 次的结果的倒数 （参见 [recip 方法](/API/complex-number.html#recip)）

* 幂为分数时，返回值为复数开 1 / n 次方的结果 （参见 [sqrt 方法](/API/complex-number.html#sqrt)）

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
const z2 = ComplexReflect.pow(z1, 2);
const z3 = ComplexReflect.pow(z1, -3);
const z4 = ComplexReflect.pow(z1, 0.5);
```

## random

**random** 返回一个随机的 **ComplexNumber** 的对象。

* 类型定义

``` ts
static random(): ComplexNumber;
```

* 示例

``` javascript
import { ComplexReflect } from "math-complex";

const z1 = ComplexReflect.random();
```

* 实际上，**random()** 方法就是返回实部虚部都为 **Math.random()** 的对象。

``` javascript
class ComplexReflect {
    // ...
    random() {
        return new ComplexNumber(Math.random(), Math.random());
    }
}
```

## realize

**realize** 返回一个 **ComplexNumber** 的虚部，或参数为原生 **number** 对象，则返回自身。

* 类型定义

``` ts
static realize(num: number | ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); 
const z2 = 5;

ComplexReflect.realize(z1) === 3 // true
ComplexReflect.realize(z2) === 5 // true
```

## toComplex

**toComplex** 可以将原生 **number** 对象转化为虚部为 0 的 **ComplexNumber** 对象，如果参数本身已经是 **ComplexNumber** 对象，则直接返回自身。

* 类型定义

``` ts
static toComplex(num: number | ComplexNumber): ComplexNumber;
```

* 示例

``` javascript
import { ComplexReflect } from "math-complex";

const x = 5;
const z = ComplexReflect.toComplex(x);
ComplexReflect.realize(z) === 5 // true
ComplexReflect.imagine(z2) === 0 // true
```

## tryRealize

与 **toComplex** 相反，**tryRealize** 可以将虚部为 0 的 **ComplexNumber** 对象转化为原生 **number** 对象，如果**ComplexNumber** 对象参数的虚部不为 0 ，则直接返回自身。

* 类型定义

``` ts
static tryRealize(complex: ComplexNumber): number | ComplexNumber;
```

* 示例

``` javascript
import { define, ComplexReflect } from "math-complex";

const z = define(5);
const x = ComplexReflect.tryRealize(z);
x === 5 // true
```