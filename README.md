## redux理解

### redux是什么

1. redux是一个专门用于做**状态管理**的JS库(不是react插件库)。

2. 它可以用在react, angular, vue等项目中, 但基本与react配合使用。

3. 作用: 集中式管理react应用中多个组件**共享**的状态。

### 什么情况下需要使用redux

1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。

2. 一个组件需要改变另一个组件的状态（通信）。

3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。

### 工作原理

![redux原理图](E:\学习文件\尚硅谷React全家桶教程\react全家桶资料\02_原理图\redux原理图.png)

### 使用redux

npm install redux 下载

- 在项目下创建store.js文件，引入redux中的createStore，用于创建一个store，然后页面为组件创建一个reducer，专门为组件加工数据的文件。然后引入到store里面，最后暴露这个store
- 创建一个专门为组件服务的reducer，这是一个函数，接收到两个参数，preState是之前的状态，初始化时为undefined，action动作对象，action动作对象里面有两个属性，type：为类型，你需要为这个数据做什么事。 data：需要处理的数据。然后再写处理数据的程序
- action文件：用于专门定义组件的action对象

> redux的API

getState：在store身上的一个函数，用于查看reducer文件中的状态

dispatch：在store身上的一个函数，用于通知reducer更改状态

==注意：reducer只会更改状态，并不会驱动页面更新==

subscribe：在store身上的一个函数，用于检测reducer文件有没有发生改变，发生改变时，会调用该函数。==可以把该函数写在入口文件里，当发生改变时，重新渲染APP组件==

