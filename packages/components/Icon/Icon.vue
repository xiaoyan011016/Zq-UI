<template>
    <i class="er-icon" :class="{ [`er-icon--${type}`]: type }" :style="customStyles" v-bind="$attrs">
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>

<script setup lang="ts">
import { type IconProps } from './type'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es';
import { computed } from 'vue';

defineOptions({
    name: "ZqIcon",
    inheritAttrs: false //关闭透传
})

const props = defineProps<IconProps>()
const filterProps = computed(() => omit(props, ['color', 'type'])) //omit函数去除对象中的某些key
const customStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<style scoped>
@import './index.css';
</style>