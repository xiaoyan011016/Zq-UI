<template>
    <zq-button type="primary" size="small"  icon="search">按钮</zq-button>
    <zq-button type="success" size="default"  icon="search">按钮</zq-button>
    <zq-button type="warning" size="large"  icon="search">按钮</zq-button>
    <zq-button type="danger" size="large"  icon="search">按钮</zq-button>
    <zq-button type="primary" size="small" :loading="true" icon="search">按钮</zq-button>
    <zq-button type="primary" size="small"  icon="search">按钮</zq-button>
    <hr>
    <zq-button-group type="primary">
        <zq-button icon="search">按钮</zq-button>
        <zq-button icon="search">按钮</zq-button>
    </zq-button-group>
    <zq-button-group size="large">
        <zq-button type="primary"  icon="search">按钮</zq-button>
        <zq-button type="success"  icon="search">按钮</zq-button>
    </zq-button-group>
    <zq-button-group disabled>
        <zq-button type="primary"  icon="search">按钮</zq-button>
        <zq-button type="success"  icon="search">按钮</zq-button>
    </zq-button-group>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
