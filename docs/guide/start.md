# 快速开始

## 使用 npm 安装

``` bash
npm install math-complex --save
```

## 在浏览器中使用

``` javascript
<script src="https://unpkg.com/math-complex@latest"></script>
```

## 基本示例

* 使用 **ComplexNumber** 类的方法

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = define(5, 12); // z2 = 5 + 12i

const three = z1.real; // Re(z1) = 3
const twelve = z2.imaginary; // Im(z2) = 12

const z3 = z1.add(z2); // z3 = z1 + z2
const z4 = z1.subtract(z2); // z4 = z1 - z2
const z5 = z1.mult(z2); // z5 = z1 * z2
const z6 = z1.divide(z2); // z6 = z1 / z2
```

* 使用 **ComplexReflect** 静态类的函数

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = define(5, 12); // z2 = 5 + 12i

const three = ComplexReflect.realize(z1); // Re(z1) = 3
const twelve = ComplexReflect.imagine(z2); // Im(z2) = 12

const z3 = ComplexReflect.add(z1, z2); // z3 = z1 + z2
const z4 = ComplexReflect.mult(z1, z2); // z4 = z1 * z2
const z5 = ComplexReflect.abs(z1); // |z1| = 5
const z6 = ComplexReflect.contrary(z2); // -z2 = 5 - 12i
```

* 使用 **ComplexReflect** 静态类对 **ComplexNumber** 和 JS 原生 **number** 对象混合操作

``` javascript
import { define, ComplexReflect } from "math-complex";

const { 
    abs,
    add,
    contrary,
    mult,
    imagine,
    realize
} = ComplexReflect;

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = 5; // z2 = 5

const three = realize(z1); // Re(z1) = 3
const twelve = imagine(z2); // Im(z2) = 02

const z3 = add(z1, z2); // z3 = z1 + z2 = z1 + 5
const z4 = mult(z1, z2); // z4 = z1 * z2 = z1 * 5
const z5 = abs(z1); // |z1| = 5
const z6 = contrary(z2); // -z2 = 5 - 12i
```
