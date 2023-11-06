<template>
	<Container>
		<div class="container-container">
			<UserBar
				username="SerEro"
				:userInfo="{ posts: 4, followers: 55, following: 33 }"
			/>
			<ImageGallary
				:posts="[
					{
						id: 1,
						image:
							'https://www.asmonaco.com/wp-content/uploads/2022/09/media-1987859-1676276-1160x650.jpg',
					},
					{
						id: 2,
						image:
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGXsE9xjfPI_XaL8yHnW5iky5oxeFsFM7wA&usqp=CAU',
					},
				]"
			/>
		</div>
	</Container>
</template>

<script setup>
import Container from '../components/Container.vue';
import ImageGallary from '../components/ImageGallary.vue';
import UserBar from '../components/UserBar.vue';
</script>

<style scoped>
.profile-container {
	display: flex;
	flex-direction: column;

	padding: 20px 0;
}
</style>
