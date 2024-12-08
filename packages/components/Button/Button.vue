<template>
    <component :is="tag" ref="_ref" class="zq-button" :type="tag === 'button' ? nativeType : void 0"
        :disabled="disabled || loading ? true : void 0" :class="{
            [`zq-button--${type}`]: type,
            [`zq-button--${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': disabled
        }">
    </component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './type';

defineOptions({
    name: 'ZqButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: "button"
})
const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>

<style lang="scss" scoped></style>
