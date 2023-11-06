<template>
	<Container>
		<div class="userbar-container">
			<div class="top-content">
				<ATypographyTitle :level="2"> {{ username }}</ATypographyTitle>
			</div>
			<div class="bottom-content">
				<ATypographyTitle :level="5">
					{{ userInfo.posts }} posts
				</ATypographyTitle>
				<ATypographyTitle :level="5">
					{{ userInfo.followers }} folowers
				</ATypographyTitle>
				<ATypographyTitle :level="5">
					{{ userInfo.following }} folowing
				</ATypographyTitle>
			</div>
		</div></Container
	>
</template>

<script setup>
import Container from './Container.vue';
import { defineProps } from 'vue';

const { username, posts, followers, following } = defineProps([
	'username',
	'userInfo',
]);
</script>

<style scoped>
.userbar-container {
	padding-bottom: 75px;
}

.text-container {
}

.bottom-content {
	display: flex;
	align-items: center;
}

.bottom-content h5 {
	margin: 0;
	padding: 0;
	margin-right: 30px;
	align-items: center;
}

/* .top-content {
	display: flex;
	align-items: center;
}

.top-content input {
	margin-top: 3px;
	margin-left: 90px;
} */
</style>
