export default {
  bind(el, binding) {
    // 做绑定的准备工作
    // 比如添加事件监听器，或是其他只需要执行一次的复杂操作
    el.addEventListener('click', e => {
      console.log(el)
      let handle
      if (!el.disabled) {
        el.disabled = true
        clearTimeout(handle)
        handle = setTimeout(() => {
          el.disabled = false
        }, 2000)
      }
    })
  },
  unbind: function(){
    // 做清理操作
    // 比如移除bind时绑定的事件监听器
  }
}
