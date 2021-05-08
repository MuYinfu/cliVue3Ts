<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="testData"></column-list>
    <validate-input
        type="text"
        placeholder="请输入邮箱地址"
        :rules="emailRules"
        v-model="emailVal"
    ></validate-input>
    <div>{{emailVal}}</div>
  </div>
<!--  <img alt="Vue logo" src="./assets/logo.png" @click.stop.prevent="increase">-->
<!--  <h1>{{ count }}</h1>-->

<!--  <h1>{{ double }}</h1>-->

<!--  <ul>-->
<!--    <li v-for="(item, index) in numbers" :key="index">{{ item }}</li>-->
<!--  </ul>-->
<!--  <img v-if="loaded" :src="result[0].url" alt="" @click.stop.prevent="btnClick(true)">-->
<!--  <modal msg="899" @close="btnClick" v-if="showModal"/>-->

<!--  <h1>{{ person.name }}</h1>-->

<!--  <h1>X: {{ x }} Y: {{ y }}</h1>-->

<!--  <Suspense>-->
<!--    <template #default>-->
<!--      <async-show/>-->
<!--    </template>-->
<!--    <template #fallback>-->
<!--      123-->
<!--    </template>-->
<!--  </Suspense>-->

<!--  <hello-world></hello-world>-->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import ValidateInput, { RulesProps } from '@/base/ValidateInput.vue'

const currentUser: UserProps = {
  isLogin: true,
  nickName: 'muyinfu'
}

const testData: Array<ColumnProps> = [
  {
    id: '1',
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: '2',
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  },
  {
    id: '3',
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const emailRules: RulesProps = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    return {
      testData,
      currentUser,
      emailRules,
      emailVal
    }
  }
})

// import {defineComponent, ref, computed, reactive, toRefs, onMounted, watch} from 'vue';
// import HelloWorld from "@/components/HelloWorld.vue";
// import AsyncShow from "@/components/AsyncShow.vue";
// import modal from "@/components/teleport/modal.vue";
// import useMousePosition from "@/hooks/useMousePosition";
// import useURLLoader from "@/hooks/useURLLoader";
//
// interface DateProps {
//   count: number;
//   double: any;
//   increase: () => void;
//   numbers: Array<number>;
//   person: {
//     name?: string
//   };
// }
//
// interface DogResult {
//   message: string;
//   status: string;
// }
//
// interface CatResult {
//   id: string,
//   url: string,
//   width: number,
//   height: number
// }
//
//
// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld,
//     modal,
//     AsyncShow
//   },
//   setup(props, context) {
//     // let count = ref(0);
//     // const change = () => {
//     //   count.value ++;
//     //   data.change();
//     // }
//     // let count2 = computed(() => {
//     //   return count.value * 2;
//     // })
//     const {x, y} = useMousePosition();
//     onMounted(() => {
//       console.log(123);
//     })
//     let data: DateProps = reactive({
//       count: 0,
//       increase() {
//         data.count++;
//       },
//       double: computed(() => data.count * 2),
//       numbers: [0],
//       person: {}
//     })
//     data.numbers[1] = 1;
//     data.person.name = '123';
//     watch(() => data.count, (n, o) => {
//       console.log(n, o)
//     })
//
//
//     const {result, loaded, loading, error} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');
//     // const {result, loaded, loading, error} = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1');
//     watch(result, () => {
//       if(result.value) {
//         console.log(result.value.message)
//         // console.log(result.value[0].url)
//       }
//     })
//     const showModal = ref(false);
//
//     const btnClick = (val: boolean) => {
//       showModal.value = val;
//     }
//
//     return {
//       ...toRefs(data),
//       x,
//       y,
//       result,
//       loaded,
//       showModal,
//       btnClick
//     }
//   }
// });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
