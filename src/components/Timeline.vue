<template>
	<Container>
		<div class="timeline-container">
			<Card v-for="post in data" :key="post.id" :post="post" />
		</div>
	</Container>
</template>

<script setup>
import Container from './Container.vue';
import Card from './Card.vue';

const data = [
	{
		id: 1,
		username: 'Andrey',
		url: 'https://cdn5.vedomosti.ru/image/2023/33/x1s6m/original-16tz.png',
		caption: 'Best Russian player',
	},
	{
		id: 2,
		username: 'Aleksandr',
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzby7_dekvQLJ9T11lkyPDAvHiELYypm8VkA&usqp=CAU',
		caption: 'Best Russian forward',
	},
];
</script>

<style scoped>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
}
</style>
