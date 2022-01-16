---
typora-root-url: image
---

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



### 使用redux![redux原理图](/redux原理图.png)

npm install redux 下载

- 在项目下创建store.js文件，引入redux中的createStore，用于创建一个store，然后页面为组件创建一个reducer，专门为组件加工数据的文件。然后引入到store里面，最后暴露这个store
- 创建一个专门为组件服务的reducer，这是一个函数，接收到两个参数，preState是之前的状态，初始化时为undefined，action动作对象，action动作对象里面有两个属性，type：为类型，你需要为这个数据做什么事。 data：需要处理的数据。然后再写处理数据的程序
- action文件：用于专门定义组件的action对象

> redux的API

getState：在store身上的一个函数，用于查看reducer文件中的状态

dispatch：在store身上的一个函数，用于通知reducer更改状态

==注意：reducer只会更改状态，并不会驱动页面更新==

subscribe：在store身上的一个函数，用于检测reducer文件有没有发生改变，发生改变时，会调用该函数。==可以把该函数写在入口文件里，当发生改变时，重新渲染APP组件==

applyMiddleware()：应用于基于redux的中间库，例如支持异步的redux-thunk。

combineReducers()：用于合并多个reducer为一个给store，他的参数必须是一个对象，方便容器组件读取。key可以随便写，value为组件的reducer



## 1.求和案例_redux精简版

		(1).去除Count组件自身的状态
		(2).src下建立:
						-redux
							-store.js
							-count_reducer.js
	
		(3).store.js：
					1).引入redux中的createStore函数，创建一个store
					2).createStore调用时要传入一个为其服务的reducer
					3).记得暴露store对象
	
		(4).count_reducer.js：
					1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
					2).reducer有两个作用：初始化状态，加工状态
					3).reducer被第一次调用时，是store自动触发的，
									传递的preState是undefined,
									传递的action是:{type:'@@REDUX/INIT_a.2.b.4}
	
		(5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
				备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## 2.求和案例_redux完整版

		新增文件：
			1.count_action.js 专门用于创建action对象
			2.constant.js 放置容易写错的type值



## 3.求和案例_redux异步action版

		 (1).明确：延迟的动作不想交给组件自身，想交给action
		 (2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
		 (3).具体编码：
		 			1).yarn add redux-thunk，并配置在store中
		 			2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
		 			3).异步任务有结果后，分发一个同步的action去真正操作数据。
		 (4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

## react-redux的使用

所有的UI组件都只负责展示，并不会使用任何redux的API，而在所有的UI组件外创建一个容器组件，在容器组件里面操作redux的API。

npm install react-redux 下载

> 创建容器组件

容器组件需要连接UI组件和store，所以在容器组件里，需要引入UI组件，而store则是由容器组件的父组件通过props的方式传递给他

1. 引入react-redux中的connect方法，创建一个容器组件(需要暴露)，有两个括号，第一个括号接收两个参数，第一参数接收到的是reducer的状态，第二个参数接收到的是redux的操作方法，第二个括号里面写UI组件，表示连接UI组件

> redux与react-redux的不同

redux不需要容器组件，UI组件内直接调用redux的API即可，

react-redux中不需要通过dispatch并传递给store一个action，通过store来通知reducer更改状态，当我们准备好了一个action，react-redux会自动通过redux更改状态。

在redux-redux中，可以使用他的内置组件Provider包裹App组件，把store交给Provider。它可以精准的判断谁需要使用store，然后就给谁

==而且react-redux中我们并不需要subscribe来监测reducer有没有改变状态，当reducer改变了状态时，react-redux会自动帮我们更新状态==

> react-redux原理

![react-redux模型图](/react-redux模型图.png)

ct-redux基本使用

			(1).明确两个概念：
						1).UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
						2).容器组件：负责和redux通信，将结果交给UI组件。
			(2).如何创建一个容器组件————靠react-redux 的 connect函数
							connect(mapStateToProps,mapDispatchToProps)(UI组件)
								-mapStateToProps:映射状态，返回值是一个对象
								-mapDispatchToProps:映射操作状态的方法，返回值是一个对象
			(3).备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
			(4).备注2：mapDispatchToProps，也可以是一个对象

## 2.求和案例_react-redux优化

			(1).容器组件和UI组件整合一个文件
			(2).无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可。
			(3).使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作。
			(4).mapDispatchToProps也可以简单的写成一个对象
			(5).一个组件要和redux“打交道”要经过哪几步？
							(1).定义好UI组件---不暴露
							(2).引入connect生成一个容器组件，并暴露，写法如下：
									connect(
										state => ({key:value}), //映射状态
										{key:xxxxxAction} //映射操作状态的方法
									)(UI组件)
							(4).在UI组件中通过this.props.xxxxxxx读取和操作状态



## 3.求和案例_react-redux数据共享版

			(1).定义一个Pserson组件，和Count组件通过redux共享数据。
			(2).为Person组件编写：reducer、action，配置constant常量。
			(3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
					合并后的总状态是一个对象！！！
			(4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。

当有多个组件需要用到状态时，就需要我们往store里面存入多个组件的数据，怎么存呢？

> combineReducers

用于合并多个reducer，变为一个reducer，存入store里面。

它的参数必须是一个对象，因为只有对象的形式才能方便组件存取，key可以随便取，value必须是组件的reducer

> 多个组件使用redux共享数据时，应该怎么建立文件

在redux文件夹内创建action是文件夹和reducers文件夹，里面的文件对应的是组件的名字，然后分别为组件配置action和reducer，定义常量名防止出现单词错误

> 当我们想取到其他组件的数据时应该怎么做？

因为在store里面我们把所有的组件的reducer都合并为一个reducer，所以在我们使用connect创建容器组件连接UI组件和store时，它第一个括号接到的参数是多个组件的状态，可以直接在里面去出来并传给UI组件

## 4.求和案例_react-redux开发者工具的使用

			(1).yarn add redux-devtools-extension
			(2).store中进行配置
					import {composeWithDevTools} from 'redux-devtools-extension'
					const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

![reat-redux开发者工具](/reat-redux开发者工具.png)

### 5.求和案例_react-redux最终版

			(1).所有变量名字要规范，尽量触发对象的简写形式。
			(2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

## 纯函数

1. 一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)，也就是这次输出这个值，下一次输出的还是这个值

2. 必须遵守以下一些约束 
   1. 不得改写参数数据
   2. 不会产生任何副作用，例如网络请求，输入和输出设备
   3. 不能调用Date.now()或者Math.random()等不纯的方法 

3. redux的reducer函数必须是一个纯函数

## 项目打包上线

在终端输入npm run build 此时根目录内多出一个build文件，这是打包好的文件

> 部署到服务器的方法

1. 使用http-server插件：终端打开cd到build文件，然后输入http-server，点击网址就能访问了
2. 使用serve插件：全局安装serve，然后在根目录下打开终端，输入serve build
3. 或者用node配置一个服务器，运行

```
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

