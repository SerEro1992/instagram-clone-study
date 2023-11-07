<template>
	<Nav />
	<RouterView />
</template>

<script setup>
import Nav from './components/Nav.vue';
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useUsersStore } from './stores/users';

const userStore = useUsersStore();

onMounted(() => {
	userStore.getUser();
});
</script>

<style scoped></style>
