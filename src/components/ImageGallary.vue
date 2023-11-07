<template>
	<div class="image-gallary-container">
		<img
			v-for="post in posts"
			:key="post.id"
			:src="`https://acixcwqlgjsmvahdpszo.supabase.co/storage/v1/object/public/images/${post.url}`"
		/>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const { id, image } = defineProps(['posts']);
</script>

<style scoped>
.image-gallary-container {
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
}
img {
	margin: 5px;
	width: 200px;
}
</style>
