<template>
  <div class="main-page">
    <page-fram title="算法入门">
      <el-divider content-position="left">1.数组结构</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of problems">
          <el-button :key="index" @click="array(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>

      <el-divider content-position="left">2. 栈结构</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of stacks">
          <el-button :key="index" @click="stack(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>

      <el-divider content-position="left">3. 队列</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of queues">
          <el-button :key="index" @click="queue(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>

      <el-divider content-position="left">4. 优先队列</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of PriorityQueues">
          <el-button :key="index" @click="priorityQueue(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>
      <el-divider content-position="left">5. 单向链表</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of links">
          <el-button :key="index" @click="link(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>

      <el-divider content-position="left">6. 集合</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of sets">
          <el-button :key="index" @click="set(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>

      <el-divider content-position="left">7. 哈希表</el-divider>
      <el-card class="box-card">
        <template v-for="(item, index) of hashs">
          <el-button :key="index" @click="set(item.value)">{{
            item.label
          }}</el-button>
        </template>
      </el-card>


    </page-fram>
  </div>
</template>

<script>
// 栈结构的封装
class Map {
  constructor() {
    this.items = [];
  }
  // push(item) 压栈操作，往栈里面添加元素
  push(item) {
    this.items.push(item);
  }
  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop() {
    return this.items.pop();
  }
  // peek() 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty() 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // size() 获取栈中元素个数
  size() {
    return this.items.length;
  }
  // toString() 返回以字符串形式的栈内元素数据
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item + " ";
    }
    return result;
  }
}

// 队列的封装   FIFO
class Queue {
  constructor() {
    this.items = [];
  }
  // 添加
  enqueue(item) {
    this.items.push(item);
  }
  // 移除 出队，从队列中删除队头元素，返回删除的那个元素
  dequeue() {
    return this.items.shift();
  }
  // 返回第一个元素
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  // 长度
  size() {
    return this.items.length;
  }

  // 字符化
  toString() {
    return this.items.toString();
  }
}

// 优先队列类（继承 Queue 类）
export class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  // 内部类
  QueueElement = class {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  };
  enqueue(element, priority) {
    // 根据传入的元素，创建 QueueElement 对象
    const queueElement = new this.QueueElement(element, priority);

    // 判断队列是否为空
    if (this.isEmpty()) {
      // 如果为空，不用判断优先级，直接添加
      this.items.push(queueElement);
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false;

      for (let i = 0; i < this.items.length; i++) {
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < this.items[i].priority) {
          // 在指定的位置插入元素
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue() {
    return super.dequeue();
  }

  // front() 查看队列的前端元素
  // 继承 Queue 类的 front()
  front() {
    return super.front();
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty() {
    return super.isEmpty();
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return super.size();
  }

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString() {
    let result = "";
    for (let item of this.items) {
      result += item.element + "-" + item.priority + " ";
    }
    return result;
  }
}

/**
 * 单向链表 link
 *  append(element) 向链表尾部添加一个新的项。
    insert(position, element) 向链表的特定位置插入一个新的项。
    get(position) 获取对应位置的元素。
    indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
    update(position, element) 修改某个位置的元素。
    removeAt(position) 从链表的特定位置移除一项。
    remove(element) 从链表中移除一项。
    isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
    size() 返回链表包含的元素个数，与数组的 length 属性类似。
    toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
 * **/

class LinkedList {
  // 链表属性
  // 长度   length
  // 头部   head
  length = 0;
  head = null;
  // 内部类
  Node = class {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  };

  // 尾部添加
  append(element) {
    let newNode = new this.Node(element);
    if (this.length == 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;
  }
  // 任意节点处添加 insert(position, element)
  insert(position, element) {
    let newNode = new this.Node(element);
    if (position > this.length) return;
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let previouNode = null;
      while (position--) {
        previouNode = currentNode;
        currentNode = currentNode.next;
      }
      previouNode.next = newNode;
      newNode.next = currentNode;
    }
    this.length++;
  }
  //  get(position) 获取对应位置的元素。
  get(position) {
    // 位置大于长度 或者小于0
    if (position > this.length || position < 0) return -1;
    let currentNode = this.head;
    while (position--) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }
  // indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
  indexOf(element) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode != null) {
      index++;
      currentNode = currentNode.next;
      if (currentNode.data == element) {
        return index;
      }
    }
    return -1;
  }
  // update(position, element) 修改某个位置的元素。
  update(position, element) {
    let currentNode = this.head;

    if (position > this.length) return;

    if (position == 0) {
      this.head.data = element;
    } else {
      while (position--) {
        currentNode = currentNode.next;
      }
      currentNode.data = element;
    }
  }
  // removeAt(position) 从链表的特定位置移除一项。
  removeAt(position) {
    if (position > this.length) return;

    if (position < 2) {
      this.head = this.head.next;
    } else {
      let flag = position - 1;
      // 前一个
      let previousNode = this.head;
      while (flag--) {
        previousNode = previousNode.next;
      }
      previousNode.next = previousNode.next.next;
    }
    this.length--;
  }
  // remove() 删除指定 data 的节点
  remove(data) {
    this.removeAt(this.indexOf(data));
  }

  // isEmpty() 判断链表是否为空
  isEmpty() {
    return this.length === 0;
  }

  // size() 获取链表的长度
  size() {
    return this.length;
  }
  // 字符化
  toString() {
    let currentNode = this.head;
    let res = "";
    while (currentNode) {
      res += currentNode.data + "   ";
      currentNode = currentNode.next;
    }
    return res;
  }
}

// 集合
/**
 * 
 * 
 *  add(value) 向集合添加一个新的项。
    remove(value) 从集合移除一个值。
    has(value) 如果值在集合中，返回 true，否则返回 false。
    clear() 移除集合中的所有项。
    size() 返回集合所包含元素的数量。与数组的 length 属性类似。
    values() 返回一个包含集合中所有值的数组。
*/
class Set {
  constructor() {
    this.items = {};
  }
  // add(value) 向集合添加一个新的项。
  add(value) {
    this.items[value] = "";
  }
  // remove(value) 从集合移除一个值。
  remove(value) {
    delete this.items[value];
  }
  // has(value) 如果值在集合中，返回 true，否则返回 false。
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  // clear() 移除集合中的所有项。
  clear() {
    this.items = {};
  }
  // size() 返回集合所包含元素的数量。与数组的 length 属性类似。
  size() {
    return Object.keys(this.items).length;
  }
  // values() 返回一个包含集合中所有值的数组。
  values() {
    return Object.keys(this.items);
  }
}


// 哈希表
// 哈希函数   将一个值转换成一个下标值
 class Hashset {

 }

//  hash函数
function StringToIndex () {
  return ''
}


import pageFram from "@/components/common/page-fram.vue";
export default {
  components: {
    pageFram,
  },
  data() {
    return {
      problems: [
        { label: "创建和初始化数组", value: "Init" },
        { label: "添加元素", value: "Add" },
        { label: "删除元素", value: "Delete" },
        { label: "修改元素", value: "Updata" },
      ],
      stacks: [
        { label: "创建栈结构", value: "Init" },

        { label: "十进制转二进制--js", value: "Dec2binJS" },
        { label: "十进制转二进制--stack", value: "Dec2binStack" },
      ],
      queues: [
        { label: "实现队列结构", value: "Init" },
        { label: "击鼓传花", value: "Jgch" },
      ],
      PriorityQueues: [{ label: "优先队列结构", value: "Init" }],
      links: [{ label: "单项链表", value: "Init" }],
      sets: [{ label: "集合", value: "Init" }],
      hashs: [{ label: "哈希表", value: "Init" }],
    };
  },
  created() {},
  mounted() {},
  methods: {
    array(func) {
      let functionName = "array" + func;
      this[functionName]();
    },

    stack(func) {
      let functionName = "stack" + func;
      this[functionName]();
    },

    queue(func) {
      let functionName = "queue" + func;
      this[functionName]();
    },

    priorityQueue(func) {
      let functionName = "priorityQueue" + func;
      this[functionName]();
    },
    link(func) {
      let functionName = "link" + func;
      this[functionName]();
    },
    set(func) {
      let functionName = "set" + func;
      this[functionName]();
    },

    hash(func) {
      let functionName = "hash" + func;
      this[functionName]();
    },

    arrayInit() {
      let a = [];
      let b = new Array();
      let c = [1, 2];
      let d = new Array(1, 23, 4);

      console.log(a, typeof a);
      console.log(b, typeof b);
      console.log(c, typeof c);
      console.log(d, typeof d);
    },
    arrayAdd() {
      let a = [1, 2, 3];
      console.log("原数组", a);

      a.unshift("数组起增加");
      console.log("数组起增加", a);
      a.push("数组后增加");
      console.log("数组后增加", a);

      // 指定位置增加
      a.splice(3, 0, "从第三位增加, index=3");
      console.log("从第三位增加, index=3", a);
    },
    arrayDelete() {
      let a = [1, 1, 2, 3, 4, 5, 5];
      console.log("原数组", a);

      a.shift("数组起删除");
      console.log("数组起删除", a);
      a.pop("数组后删除");
      console.log("数组后删除", a);

      // 指定位置增加
      a.splice(3, 1);
      console.log("删除第三个, index=3", a);
    },
    arrayUpdata() {
      let a = [1, 2, 3, 4, 5];
      console.log("原数组", a);

      a[0] = "a";
      console.log("索引更改", a);

      // 替换指定位置
      a.splice(2, 1, "b");
      console.log("修改index =2 的为b", a);
    },
    stackInit() {
      let myMap = new Map();

      console.log(myMap);
      myMap.push(1);
      console.log(myMap);
    },
    stackDec2binJS() {
      let dec = 100;
      // 1 循环取余
      let arr = [];
      while (dec > 0) {
        arr.push(dec % 2);
        dec = Math.floor(dec / 2); // 除数除以二，向下取整
      }
      let binaryString = "";
      // 不断地从栈中取出元素（0 或 1），并拼接到一起。
      while (arr.length != 0) {
        binaryString += arr.pop();
      }
      // 打印出
      console.log(binaryString);
    },
    stackDec2binStack() {
      let mmap = new Map();
      console.log(mmap);
      let dec = 100;
      while (dec > 0) {
        mmap.push(dec % 2);
        dec = Math.floor(dec / 2);
      }

      console.log(mmap);
      let res = "";
      console.log(mmap.isEmpty());
      while (!mmap.isEmpty()) {
        res = res + mmap.pop();
      }
    },
    queueInit() {
      const queue = new Queue();
      // enqueue() 测试
      queue.enqueue("a");
      queue.enqueue("b");
      queue.enqueue("c");
      queue.enqueue("d");
      console.log(queue.items); //--> ["a", "b", "c", "d"]
      // dequeue() 测试
      queue.dequeue();
      queue.dequeue();
      console.log(queue.items); //--> ["c", "d"]
      // front() 测试
      console.log(queue.front()); //--> c
      // isEmpty() 测试
      console.log(queue.isEmpty()); //--> false
      // size() 测试
      console.log(queue.size()); //--> 2
      // toString() 测试
      console.log(queue.toString()); //--> c d
    },
    // 击鼓传花
    queueJgch() {
      /**
       * @param persons 总人数
       * @param len 每隔len人
       * @return 最后的那个人的index
       */
      function jgch(persons, len) {
        let studentList = new Queue(); // 创建一个队列
        // 生成一个 长度为persons 的队列
        for (let i = 0; i < persons; i++) {
          studentList.enqueue(i);
        }
        // 初始化计数器
        let flag = 0;
        while (studentList.size() != 1) {
          // 当计数器为len的时候  直接执行dequeue
          if (flag == len) {
            flag = 0;
            studentList.dequeue();
          }
          // 计数器增加  队列将队头放在队尾
          flag++;

          studentList.enqueue(studentList.dequeue());
        }
        // 返回最后剩余的值
        return studentList.items[0];
      }

      let res = jgch(10, 5);
      console.log(res);
    },
    // 优先队列
    priorityQueueInit() {
      let priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("list1", 24);
      priorityQueue.enqueue("list2", 999);
      priorityQueue.enqueue("list4", 20);
      priorityQueue.enqueue("list7", 100);
      priorityQueue.enqueue("list5", 9);
      priorityQueue.dequeue();
      console.log(priorityQueue.toString());
    },
    // 单向链表
    linkInit() {
      let list = new LinkedList();
      // 尾部插入
      console.log("尾部插入");
      list.append(1);
      console.log(list.toString());
      list.append(2);
      console.log(list.toString());
      list.append(3);
      console.log(list.toString());
      console.log("头部插入");
      // 头部插入
      list.insert(0, 0);
      console.log(list.toString());
      // 中部插入
      list.insert(2, 222);
      // 尾部插入
      list.insert(5, "end");
      console.log("get");
      // get
      console.log("3", list.get(3));
      console.log("indexof");
      // indexof
      console.log("2", list.indexOf("2"));
      console.log("updata");
      // updata
      list.update(0, 1111);
      console.log(list.toString());
      list.update(1, 1);
      console.log(list.toString());
      // removeAt
      console.log("remove");
      list.removeAt(0);
      console.log("0---", list.toString());
      list.removeAt(1);
      console.log("1---", list.toString());
      list.removeAt(2);
      list.removeAt(2);
      console.log(list.toString());
    },

    // 集合
    setInit() {
      let set = new Set();

      console.log(set);

      set.add(111);
      set.add(1112);
      set.add(1131);
      set.remove(111);
      console.log(set.has(1112));
      console.log(set.has(1));
      console.log(set.size());
      console.log(set.values());
    },

    // hash哈希表
    hashInit () {

    }
  },
};
</script>
<style lang='less' scoped>
.nav-box {
  height: 60px;
  width: 90vw;
  display: flex;
  justify-content: flex-start;
  div {
    padding-right: 10px;
    cursor: pointer;
  }
}
.box-card {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.el-button {
  margin: 0 10px 10px 0;
}
.el-button + .el-button {
  margin-left: 0px;
}
.canvas-box {
  // width: 90vw;
  // height: calc(100vh-90px);
  border: solid 1px #d6d6d6;
  // background: url('../../../assets/canvas/m.jpg') no-repeat;
  background-size: 400px 300px;
}
</style>