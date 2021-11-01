<!--
 * @Author: Shusheng
 * @Date: 2021-09-06 20:08:14
 * @LastEditTime: 2021-09-06 20:13:55
 * @LastEditors: Shusheng
 * @Description: 
-->
# ReactFiber

* **instance** 类组件对应实例。
* **workInProgress** 树，当前正在调和的 fiber 树 ，一次更新中，React 会自上而下深度遍历子代 fiber ，如果遍历到一个 fiber ，会把当fiber 指向 workInProgress。
* **current** 树，在初始化更新中，current = null ，在第一次 fiber 调和之后，会将 workInProgress 树赋值给 current 树。React 来用orkInProgress 和 current 来确保一次更新中，快速构建，并且状态不丢失。
* **Component** 就是项目中的 class 组件。
* **nextProps** 作为组件在一次更新中新的 props 。
* **renderExpirationTime** 作为下一次渲染的过期时间。