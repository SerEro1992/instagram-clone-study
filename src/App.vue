<template>
	<Nav/>
	<RouterView/>

</template>

<script setup>
import Nav from './components/Nav.vue';
import {RouterView } from 'vue-router'
</script>

<style scoped></style>
