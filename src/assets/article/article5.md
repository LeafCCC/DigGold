# CSS学习 | 青训营笔记

这是我参与「第四届青训营 」笔记创作活动的第4天。今天我学习了如何为html文件编写CSS样式，在此分享给大家。

## 简介

CSS ，即Cascading Style Sheet的缩写，中文译为层叠样式表，用来定义页面元素的显示样式，即位置、大小、颜色等等。CSS 是一种描述性的样式语言，而不是编程语言，所以没有逻辑处理能力。

## 语法

CSS样式规则由三个部分组成，分别是选择器、属性和值。

```css
h1 {
    color: white;
    font-size: 14px;
}
```

- 选择器Selector: 由Html元素的id、class或其他特殊符号组成，用于指定为哪一个元素定义样式，例如h1就是为所有`<h1>`标签定义样式。

  - 通用选择器：匹配所有元素。同茶馆用于清除默认的内外边距。

    ```css
    * {
        margin:0 auto;
        padding:0;
    }
    ```

  - 标签选择器：匹配同名标签，如`<h1>`

  - ID选择器：匹配具有ID属性的标签，需要用`#`

    ```css
    #nav {
        color:red;
    }
    ```

  - 类选择器

    ```css
    .black {
        color: black;
    }
    h1.black {
        color: black;
    }
    ```

  - 后代选择器

  - 子选择器

  - 相邻兄弟选择器

  - 通用兄弟选择器

  - 分组选择器

  - 属性选择器

- 属性Property与值Value: 如color是控制其颜色，white等特殊颜色可以直接使用关键字，当然也可以使用二进制作为属性值Value。 Property+Value组成了一条声明Declaration。



## 在页面中使用

欲在html中引入CSS，由三种方式。

1. 外链

   ```html
   <link rel="stylesheet" herf="/assets/style.css"
   ```

2. 嵌入

	```html
	<style>
	    li { margin:0; list-style:none; }
	    p { margin: lem 0; }
	</style>
	```
	
3. 内联

	```html
	<p style="margin: lem 0">
	    Example Content
	</p>
	```

一般而言推荐采用外链的方式来分开实现，在使用vue单文件组件开发时也可使用嵌入的方式来做到html、css与js代码写在同一个文件中。

## 工作方式

下图是浏览器工作的一个简要流程。

![image-20220824153826002](note4.assets/image-20220824153826002.png)

在打开网站时浏览器会首先加载html并对其进行解析。在解析html时会去加载CSS并解析，然后在构建DOM树后，将样式添加到DOM节点，最后将其渲染成页面。
