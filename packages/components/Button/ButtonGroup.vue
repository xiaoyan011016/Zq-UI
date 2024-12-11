<template>
    <div class="er-button-group">
        <!-- 放普遍zq-button组件 -->
        <slot/>
    </div>
</template>

<script setup lang="ts">
import {provide,toRef,reactive} from 'vue'
import type {ButtonGroupProps} from './type.ts'
import {BUTTON_GROUP_INJECTION_KEY} from './key.ts'

defineOptions({
    name: 'ZqButtonGroup'
})
const props = defineProps<ButtonGroupProps>()

provide(BUTTON_GROUP_INJECTION_KEY,
    reactive({
        size: toRef(props, "size"),
        type: toRef(props, "type"),
        disabled: toRef(props, "disabled"),
    })
)

</script>

<style scoped>
@import './index.css';
</style>
