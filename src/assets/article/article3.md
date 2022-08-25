# JavaScript学习 | 青训营笔记

这是我参与「第四届青训营 」笔记创作活动的第2天。今天我学习了JavaScript代码的编写方法，在此分享给大家。

## 简介

JavaScript（简称“JS”）是一种轻量级的面向对象的编程语言，既能用在浏览器中控制页面交互，也能用在服务器端作为网站后台（借助 Node.js），因此 JavaScript 是一种全栈式的编程语言。

JavaScript作为一款解释性语言，与C++、Java等语言相比，最大的区别在于不需要提前编译就能在各种操作系统下运行。

## 使用

当我们需要在Html网页中嵌入JavaScript脚本时，只需在`<script>`与`</script>`之间直接编写JavaScript代码即可，如下所示：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>test</title>
    </head>
    <body>
        <script>
            document.write("<h1>标题</h1>");
        </script>
        正文
    </body>
</html>

```

`document.write()`表示在当前网页源代码中写入HTML字符串。

有时代码过多，或是代码需要复用，JavaScript还允许用户引入额外的`.js`文件，即：

```html
<script src="test.js"></script>
```

## 基本语法

- 注释

  ```javascript
  // 同C++注释
  /* 多行注释
  */
  ```

- 变量

  ```javascript
  var num = 1;
  let is_follow = true;// let声明的变量只在其所在的代码块中生效
  const PI = 3.1415;
  let article = {// 对象类型
      author: "Bob",
      title: "article",
      tags: ['js','web','mobile'],// 数组类型
  }
  function HelloWorld() {// 函数类型
      return "Hello World!";
  }
  ```

  注：

  1. 若变量定义但未赋值，则其值为一个特殊类型`Undefined`。
  1. 函数类型只有在调用时才会运行。
  1. 尽量不要使用`var`声明变量，而是使用`let`。`let`声明的变量只在其所在的代码块中生效。

- 运算符

  基本同其他主流语言，略。

- 循环
  
  `if-else` `switch-case` `while` `do-while` `for`这些不同语言都大同小异，不再过多介绍。
  
  

## 重要语句

JavaScript最重要的作用就是使得Html网页”生动“起来，让用户能够与之互动，因此，需要各种事件处理，如鼠标、键盘事件，用于点击鼠标，或是移动鼠标等操作时执行特定函数；窗口事件，用于检测窗口内容变化；表单事件，用于检测表单变化。这里内容很多，全部记住不现实，我的推荐是只要知道有哪些就行，至于具体用法遇到什么就去查什么。