<template>
    <component :is="tag" ref="_ref" class="er-button" :type="tag === 'button' ? nativeType : void 0"
        :autofocus="autofocus" :disabled="disabled || loading ? true : void 0" :class="{
            [`er-button--${type}`]: type,
            [`er-button--${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-loading': loading,
            'is-disabled': disabled
        }" @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handelBtnClick(e)">
        <template v-if="loading">
            <slot name="loading">
                <zq-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" size="1x" spin
                    :style="iconStyle"></zq-icon>
            </slot>
        </template>
        <zq-icon v-if="icon && !loading" :icon="icon" size="1x" :style="iconStyle" />
        <slot />
    </component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './type';
import { throttle } from 'lodash-es'
import { ZqIcon } from 'zq-ui';
defineOptions({
    name: 'ZqButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    nativeType: "button",
    useThrottle: true,
    throttleDuration: 500
})
const emits = defineEmits<ButtonEmits>()
const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

const handelBtnClick = (e: MouseEvent) => emits('click', e)
const handleBtnClickThrottle = throttle(handelBtnClick, props.throttleDuration)

const iconStyle = computed(() => ({
    marginRight: slots.default ? "6px" : "0px",
}));

defineExpose<ButtonInstance>({
    ref: _ref
})
</script>

<style scoped>
@import './index.css';
</style>
