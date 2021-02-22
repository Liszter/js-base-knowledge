<template>
  <div class="main-page">
    <page-fram title="理解原型链">






    </page-fram>
  </div>
</template>

<script>
import pageFram from "@/components/common/page-fram.vue";
export default {
  components: {
    pageFram
   },
  data () {
    return {
      node: [
        '在javascript中，函数可以有属性。 每个函数都有一个特殊的属性叫作原型（prototype）', 
      ],
      result: [
        {
          wen: '什么是原型对象？有什么优点？',
          da: `无论何时，我们创建的每一个函数都有一个prototype属性，
               这个属性是一个指针，指向一个对象，这个对象包含了通过调用该构造函数所创建的对象共享的属性和方法。
               prototype就是通过该构造函数创建的某个实例的原型对象，但是其实prototype是每个构造函数的属性而已。
               `
        }, 
        {
          wen: '优点',
          da: '所有的对象实例都可以共享它包含的属性和方法'
        },
        {
          wen: 'prototype',
          da: '原型对象'
        },
        {
          wen: '__proto__',
          da: '原型链'
        }
      ]
    };
  },
 mounted () {
   this.getInit()
 },
  methods: {
    // 初始化函数
    getInit () {
      // 封装log方法
      function log(key, name) {
        console.log(key, name);
      }
      function Person(name, age){}
      ('Person', Person);
      // 每个函数都会有一个 prototype属性
      log('Person.prototype', Person.prototype);


      let p1 = new Person()
      log('p1', p1);

      log('p1.__proto__', p1.__proto__);


// 1111111111

     function A() {}

     console.log(1, A.prototype);

      A.prototype.n = 1
    
     console.log(2, A.prototype);
    
      var b = new A()

      console.log('b1', b.__proto__);
      
      A.prototype = {
        n: 2,
        m: 3,
      }
    console.log(3, A.prototype);
    console.log('b2', b.__proto__);

      var c = new A()
      
      console.log(b.n, b.m, c.n, c.m)

    

// 22222222222
console.log('---------------------------2------------------------');


    function Foo() {
        Object.prototype.a = function () {
          console.log('可访问a')
        }
      }
      // Function.prototype.b = function () {
      //   console.log('可访问b')
      // }

      var foo = new Foo()
      foo.a();

      console.log(typeof foo);
      console.log(typeof foo);

      console.log(typeof Foo);
      // foo.b();
      // Foo.a();
      // Foo.b();
    }
  }
}

</script>
<style lang='less' scoped>

</style>