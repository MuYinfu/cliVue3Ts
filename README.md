# cli-vue3-ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue基本语法
```
ref 原始数据类型改为响应式
reactive 引用数据类型转为响应式
toRefs 引用改为响应式

vue响应式对比
vue2
Object.defineProperty(data, 'count', {
    get() {},
    set() {,
})

vue3
new Proxy(data, {
    get(key) {},
    set(key, value) {}
})

vue3支持直接更改数组和给对象新增属性 如 arr[5] = 1; person.name = 123;

生命周期 -> setup中
setup 初始化 事件&生命周期  -> setup
beforeCreate  ->  setup
create  初始化 注入&校验   ->  setup
beforeMount  ->  onBeforeMount
mounted el挂载  ->  onMounted
beforeUpdate  ->  onBeforeUpdate
updated  ->  onUpdated
beforeDestroy -> beforeUnmount  ->  onBeforeUnmount
destroyed  ->  unmounted  ->  onUnmounted
activeted  ->  onActiveted
deactivated  ->  on Deactivated
errorCaptured  ->  onErrorCapTured
  ->  onRenderTracked  //调试函数
  ->  onRenderTriggered  //调试函数


API
ref()--> 将一个原始值改为响应式, 
reactive() --> 将引用值改为响应式
toRefs() --> 将对象的引用导出为响应式
computed(() => {}) //计算属性
watch(value, () => {}) //监听
value可以为数组[v1, v2], v2 () => {return v2.key}


typeScript 对 vue3的加持
defineComponent // 给传入的对象添加类型

setup(props, context)
props 为 父组件对象 类似于 this.$props
context 为 组队对象 类似于 this
context.emit = this.$emit
context.emit('*')  * = emits[*]


Teleport 瞬间移动
<teleport to='#teleport'></teleport>
将包裹的内容移动到 id为teleport的组件中去


Suspense 异步组件
使用Suspense组件时 setup函数返回值为promise对象
<Suspense>
    <template #default>
      <async-show/>
    </template>
    <template #fallback>
      123
    </template>
  </Suspense>

default 为异步结果处理后的显示内容 当有多个异步组件时, 当所有的异步请求结束之后才会开始渲染, 当其中一个异步组价出现异常时 使用onErrorCaptured 捕获异常
fallback 为之前展示的内容

全局API
vue2 
Vue.prototype.* = *;
this.*

vue3
app.config.globalProperties.* = *
this.* || context.*

Global API Treeshaking 未使用的模块打包时不导入

当setup中返回的ref和template中ref同名时, 可以获取到ref所选中的元素

自定义v-model  Vue2+ 和 Vue3 
Vue2+
默认输入框
<vue2-model v-model='val' />
<vue2-model :value='val' @input='val = arguments[0]' />
内部实现
<input :value='value' @input='input'>
props: ['value']
methods: {
  input(e) {
    this.$emit('input', e.target.value)
  }
}

特殊框
<vue2-model :v-model='checked'>
内部实现
<input :checked='value' @change='change'>
props: ['checked'],
model: {
  prop: 'checked',
  event: 'change',
},
methods: {
  change(e) {
    this.$emit('change', e.target.value)
  }
}


Vue3+
<vue3-model v-model='val' />
内部实现
props: ['modelValue']
@click='click'
methods: {
  click() {
    this.$emit('update:modelValue', val)
  }
}



```
