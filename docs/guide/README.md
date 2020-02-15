# 简介

##  工具定位

Math Complex 是一个采用 TypeScript 编写的 JavaScript 扩展数学库，它扩展了Math数学类的一些方法，让 JavaScript 支持复数计算。

##  基础功能

* 扩展了复数类
* 实现了复数类的四则、乘方开方运算
* 扩充了辐角、指数转换计算
* 通过 **Reflect** 静态类实现函数式
* 函数式对原生 **number** 类型兼容

##  特性

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