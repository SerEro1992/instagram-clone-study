<template>
	<ACard hoverable style="width: 50%" class="card">
		<template #cover>
			<img alt="example" :src="`${VITE_BASE_PHOTO_URL}${post.url}`" />
		</template>
		<ACard-meta :title="post.username">
			<template #description>{{ post.caption }}</template>
		</ACard-meta>
	</ACard>
</template>

<script setup>
import { defineProps } from 'vue';

const { username, url, caption } = defineProps(['post']);
const { VITE_BASE_PHOTO_URL } = import.meta.env;
</script>

<style scoped>
.card {
	margin-bottom: 20px;
}
</style>
