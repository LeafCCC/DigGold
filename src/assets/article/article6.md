# 项目实战 | 青训营笔记

这是我参与「第四届青训营 」笔记创作活动的第5天。今天我尝试利用学到的知识自己搭了一个小网页，在此分享给大家。

这个小网页没有使用vue或是react框架，而是使用原生HTML+CSS+JavaScript三剑客从0进行编写。这个项目是一个人物轮播介绍，也类似于我们常见的购物网站广告轮播页，项目来源：https://www.bilibili.com/video/BV14T4117734，效果如下图所示：

![image-20220824161031608](note5.assets/image-20220824161031608.png)

## 准备工作

首先创建好三个空白文件：`index.html`，`style.css`和`main.js`，同时需要备好头像素材图片。

## 编写HTML

首先在`index.html`中编写网页主体，我们首先需要为五个人物的五个介绍框各分配一个`<div>`盒子，同时为了使得打开网页时默认展示第一个，需要在第一个`div`标签中加上`active-text`。

![image-20220824162158705](note5.assets/image-20220824162158705.png)

`<i class="fas fa-quote-left"></i>`是文本框中的上引号，`<p></p>`包裹的是介绍文字，`<span></span>`包裹的是人物名称。下面四个盒子与第一个盒子一样。

然后在写一个放在介绍框下面的头像框所在的盒子，这里的头像一字排开即可。如此body部分便完成了，在将head部分完善，html部分到这里就结束了，这个小项目还是很简单的。

![image-20220824162601980](note5.assets/image-20220824162601980.png)

## 编写CSS样式

在写完HTML之后，如果我们直接打开网页，会看到乱糟糟的，这是因为我们还没有做好样式。通过文章开始效果图我们可以看到，用户在同一时刻只能看到一个人物的介绍，点击的人物头像会变大。首先我们将编写全局的样式：

![image-20220824163006125](note5.assets/image-20220824163006125.png)

然后分别对文字和头像部分样式进行调整：

![image-20220824163232855](note5.assets/image-20220824163232855.png)

![image-20220824163244389](note5.assets/image-20220824163244389.png)

比较重要的，就是带有active的元素，这是我们要突出现实的元素。注意：user-text那里的`display`属性要设置为`none`，这样就可以把不用展示的内容隐藏起来。

![image-20220824163446348](note5.assets/image-20220824163446348.png)

## 编写JS

至此，网页已经有了一个非常好看的界面了，但是我们还需要控制用户点击时的文字切换以及一些动效，我们再来编写JavaScript代码：

```javascript
let userTexts=document.getElementsByClassName("user-text")
let userPics=document.getElementsByClassName("user-pic")
function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic")
    }
    for(userText of userTexts){
        userText.classList.remove("active-text")
    }
    let i=Array.from(userPics).indexOf(event.target)
    userPics[i].classList.add("active-pic")
    userTexts[i].classList.add("active-text")
}
```

这里只有一个函数showReview，当用户点击头像时，会给对应的头像赋予`class="active-pic"`，同时也会给文本赋予`class="cative-text"`，从而实现点击切换的效果。

