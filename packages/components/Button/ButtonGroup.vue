<template>
    <div class="er-button-group">
        <!-- 放普遍zq-button组件 -->
        <slot/>
    </div>
</template>

<script setup lang="ts">
import type {ButtonGroupProps} from './type.ts'

defineOptions({
    name: 'ZqButtonGroup'
})
const props = defineProps<ButtonGroupProps>()


</script>

<style  scoped>
</style>
