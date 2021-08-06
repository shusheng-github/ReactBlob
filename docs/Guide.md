<!--
 * @Author: Shusheng
 * @Date: 2020-12-15 18:54:33
 * @LastEditTime: 2021-07-05 16:07:26
 * @LastEditors: Shusheng
 * @Description: 
-->
# guide

```typescript
getDialogTemplate({
  pageSource?: string,   //页面来源，通过页面来源获取当前页面所有弹窗数据
  triggerFactor?: string,  //触发时机，根据触发时机过滤所需要弹窗数据
  id?: string,   //根据id查询单个弹窗数据
  componentName?: string,  //根据组件名称，返回特定弹窗组件
  data?: object  //传入特定数据，和componentName结合返回特定弹窗组件
})
```

```typescript
data: {
  titleOne?: string,   //主标题文案
  titleTwo?: string,  //副标题文案
  titleThree?: string,   //关闭文字链文案
  buttonOne: string,  //按钮文案
  bgPicUrl: string,  //背景图片url链接
  elementOnePicUrl?: string,  //元素图1 url链接（header图片）
  elementTwoPicUrl?: string,  //元素图2 url链接（背景图上图片）
  btnActionUrl?: string,  //按钮1跳转协议 wbmain协议
  btnActionType?: string,  //按钮1触发状态{ id: 0, value: '跳转新页面' },{ id: 1, value: '关闭弹窗并跳转新页面' },{ id: 2, value: '回退' },{ id: 3, value: '关闭弹窗' },{ id: 4, value: '无' }
  bgActionUrl?: string,  //背景图跳转协议 wbmain协议
  bgActionType?: string,  //背景图触发状态
  closeActionUrl?: string,  //关闭按钮跳转协议 wbmain协议
  closeActionType?: string,  //关闭按钮触发状态
  bgSpecial?: number,  //背景动效（0：无，1：有背景动效）
  btnSpecial?: number,  //按钮动效（0：无，1：呼吸动效）
  visibleDialog?: boolean,  //是否展示弹窗
  isVip?: string,  //是否会员触发弹窗{ id: 0, value: '非会员' },{ id: 1, value: '会员' },{ id: 2, value: '全部' },{ id: 3, value: '未登录' },
  fodderAnchor: object,  //
}
```