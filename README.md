This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

state数据
JSX模板
数据+模板 组合，生成真实的DOM，来显示
state改变
数据+模板 组合，生成真实的DOM，替换原来的DOM
缺陷：
第一次生成了完整的DOM
第二次生成了完整的DOM
第二次替换第一次，非常耗性能

state数据
JSX模板
生成虚拟DOM，JS对象，用了描述真实DOM
用虚拟DOM生成真实的DOM，来显示
state改变
生成新的虚拟DOM
两个虚拟DOM做比对，找差异
state发生变化
生成新的虚拟DOM
直接操作差异部分

虚拟DOM比对，同层比对

不能用index做key,数组删除等重新排序时，key会改变，可以用对象item做key

生命周期函数指程序会在某个时刻自动调用执行
initialization:
    constructor
mounting:
    componentWillMount(组件即将挂载到页面上的时候执行，render之前)
    render(必须存在的生命周期函数)
    componentDidMount(组件被挂载到页面上的时候执行，render之后，ajax请求执行位置)
updation:
    props:
        componentWillReceiveProps(父组件的render被执行，从父组件接收参数，第一次存在于父组件中不执行，已经在父组件中才会执行)
    state:
        shouldComponentUpdate(组件被更新之前，要求返回boolean类型结果)
        componentWillUpdate(shouldComponentUpdate执行后，如果true执行，否则不执行)
        render
        componentDidUpdate
UnMounting:
     componentWillUnMount


store是唯一的
只有store能改变自身
reducer是纯函数
