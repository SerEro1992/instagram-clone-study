<template>
	<ACard hoverable style="width: 50%" class="card">
		<template #cover>
			<img
				alt="example"
				:src="post.url"
			/>
		</template>
		<ACard-meta :title="post.username">
			<template #description>{{ post.caption }}</template>
		</ACard-meta>
	</ACard>
</template>

<script setup>
import { defineProps } from 'vue';

const { username, url, caption } = defineProps(['post']);
</script>

<style scoped>
.card {
	margin-bottom: 20px;
}
</style>
