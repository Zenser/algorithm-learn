/**
 * 组合继承（combination inheritance）
 * 概念：将原型链和借用构造函数的技术组合到一块，从而发挥两者之长的一种继承模式
 * 背后思路：使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 结果：既通过在原型上定义方法实现函数复用，又能保证每个实例有自己的属性。
 * 缺点：超类会执行2次构造函数；子类原型上会有多余属性。
 */
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
//"red,blue,green,black"
console.log(instance1.colors);
//"Nicholas";
instance1.sayName();
//29
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
//"red,blue,green"
console.log(instance2.colors);
//"Greg";
instance2.sayName();
//27
instance2.sayAge();

/**
 * 原型式继承（Prototypal Inheritance）
 * 概念：借助原型，基于已有对象创建新对象，同时还不必创建自定义类型
 * 必须有一个对象可以作为另一个对象的基础
 * 限制：仅用于对象的继承，无法做到对自定义类的继承
 */
Object.create
// 或者
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

/**
 * 寄生式继承（parasitic）
 * 与原型继承紧密相关
 * 思路：创建一个仅用于封装继承过程的函数，在内部已某种方式增强对象
 * 缺点：函数无法复用
 */
function createAother(original) {
    var clone = object(original)
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone
}

/**
 * 寄生组合式继承
 * 寄生继承与组合继承结合，子类的原型是超类的副本
 * 解决了组合继承的痛点
 */
function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
(function () {
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function () {
        alert(this.name);
    };

    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }
    inheritPrototype(SubType, SuperType);
    SubType.prototype.sayAge = function () {
        alert(this.age);
    };
})()