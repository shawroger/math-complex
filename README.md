# math-complex

## 简介

###  工具定位

Math Complex 是一个采用 TypeScript 编写的 JavaScript 扩展数学库，它扩展了Math数学类的一些方法，让 JavaScript 支持复数计算。

###  基础功能

* 扩展了复数类
* 实现了复数类的四则、乘方开方运算
* 扩充了辐角、指数转换计算
* 通过 **Reflect** 静态类实现函数式
* 函数式对原生 **number** 类型兼容

###  特性

* 所有操作都是返回新的 Complex Number 对象

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4); // z1 = 3 + 4i
const z2 = z1.contrary(); // z2 = -z1 = 3 - 4i
z1.imaginary === 4 // true, z1本身从未改变
```

* 支持链式操作（严格从左至右执行）

``` javascript
import { define } from "math-complex";

const z1 = define(3, 4);
const z2 = define(5, 12);
const z3 = z1.add(z2).mult(z1); // z3  = (z1 + z2)*z1
```

* 支持Reflect函数式操作

``` javascript
import { define, ComplexReflect } from "math-complex";

const z1 = define(3, 4);
const z2 = define(5, 12);
// z3 = z1 + z2 + z1 + z2 +z1
const z3 = ComplexReflect.add(z1, z2, z1, z2, z1);
```

## 快速开始

### 使用 npm 安装

``` bash
npm install math-complex --save
```

### 在浏览器中使用

``` javascript
<script src="https://unpkg.com/math-complex@latest"></script>
```

### 基本示例

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

