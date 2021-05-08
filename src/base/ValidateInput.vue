<template>
  <div class="validate-input-container pb-3">
    <input
        v-if="tag !== 'textarea'"
        class="form-control"
        :class="{ 'is-invalid': inputRef.error }"
        v-model="inputRef.val"
        @blur="validateInput"
        v-bind="$attrs"
    />
    <textarea
        v-else
        class="form-control"
        :class="{ 'is-invalid': inputRef.error }"
        @blur="validateInput"
        v-model="inputRef.val"
        v-bind="$attrs"
    ></textarea>

    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted, computed } from 'vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProps {
  type: 'required' | 'email' | 'custom';
  message: string;
  validator?: () => boolean;
}

export type RulesProps = RuleProps[]
export type TagType = 'input' | 'textarea' | 'custom'
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProps>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  // 禁止 attribute 继承
  inheritAttrs: false,
  setup (props, context) {
    console.log(props, context)

    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'custom':
              passed = passed = rule.validator ? rule.validator() : true
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    return {
      inputRef,
      validateInput
    }
  }
})

</script>

<style scoped>
</style>
