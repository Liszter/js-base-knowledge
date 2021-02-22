<template>
  <div class="main-page">
    <page-fram title="继承">
      <el-divider content-position="left"
        >call和apply都是为了解决改变this的指向</el-divider
      >

      <el-button @click="handleCall">call1</el-button>
      <el-button @click="call">call2</el-button>
      <el-button @click="handleApply">apply</el-button>
      <el-button @click="handleBind">bind</el-button>

      <el-button @click="defineCall">defineCall</el-button>
      <el-button @click="defineBind">defineBind</el-button>
    </page-fram>
  </div>
</template>

<script>
import pageFram from "@/components/common/page-fram.vue";
export default {
  components: {
    pageFram,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleCall() {
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-------" + this.age);
        };
      }

      function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;

        Person.call(this, name, age);
      }

      let p1 = new Person(1, 2);
      p1.getName();
      let car1 = new Car(11, 22, 33);
      car1.getName();
    },
    call() {
      // 使用 call 方法调用父构造函数
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-----------" + this.age);
        };
      }

      function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;

        Person.call(this, name, age);
      }

      let c = new Car(1, 2, 3);

      c.getName();

      // 使用 call 方法调用函数并且不指定第一个参数（argument）
    },
    handleApply() {
      // 使用 apply 方法调用父构造函数
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-----------" + this.age);
        };
      }

      function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;

        Person.apply(this, [name, age]);
      }

      let c = new Car(1, 2, 3);
      // Person.apply(c, [c.name, c.age])

      console.log(111, c);

      c.getName();
    },
    handleBind() {
      // 使用 bind 方法调用父构造函数
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-----------" + this.age);
        };
      }

      function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;
      }

      let c = new Car(1, 2, 3);

      console.log(111, c);

      Person.bind(c, c.name, c.age)();

      c.getName();
    },
    defineCall() {
      Function.prototype.myCall = function (context) {
        context.fn = this;
        let params = Array.from(arguments);
        console.log(111, params);

        console.log([...arguments]);

        // 去除 第一个的 数组
        console.log(...params.slice(1));
        let result = context.fn(...params.slice(1));
        delete context.fn;
        return result;
      };

      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-----------" + this.age);
        };
      }

      function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;

        Person.myCall(this, this.name, this.age);
      }
      let car = new Car(1, 2, 3);
      console.log(car);
      car.getName();
      // console.log(Person.myCall(1,2));
    },

    defineBind() {
      
      Function.prototype.myBind = function(context = window) {

      context.fn = this;

  var args = [...arguments].slice(1);

  var result = context.fn(...args);
  // 执行完后干掉
  delete context.fn;

  return result;
      }


      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.getName = function () {
          console.log(this.name + "-----------" + this.age);
        };
      }

       function Car(name, age, num) {
        this.name = name;
        this.age = age;
        this.num = num;
      }


      let car1 = new Car(1, 2, 3)
      console.log(Person.myBind(car1, car1.name, car1.age));


      console.log(car1);
      car1.getName()


    }
  },
};
</script>
<style lang='less' scoped>
</style>