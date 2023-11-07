<template>
	<Container>
		<div class="container-container" v-if="!loading">
			<UserBar
				:key="$route.params.username"
				:user="user"
				:userInfo="{ posts: 4, followers: 55, following: 33 }"
				:addNewPost="addNewPost"
			/>
			<ImageGallary :posts="posts" />
		</div>
		<div v-else class="spinner">
			<ASpin />
		</div>
	</Container>
</template>

<script setup>
import Container from '../components/Container.vue';
import ImageGallary from '../components/ImageGallary.vue';
import UserBar from '../components/UserBar.vue';
import { supabase } from '../supabase';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const { username } = route.params;

const posts = ref([]);
const user = ref(null);
const loading = ref(false);

const addNewPost = (post) => {
	posts.value.unshift(post);
};

const fetchData = async () => {
	loading.value = true;
	const { data: userData } = await supabase
		.from('users')
		.select()
		.eq('username', username)
		.single();

	if (!userData) {
		loading.value = false;
		return user.value = null;
	}

	user.value = userData;

	const { data: postsData } = await supabase
		.from('posts')
		.select()
		.eq('owned_id', user.value.id);

	posts.value = postsData;
	loading.value = false;
};

onMounted(() => {
	fetchData();
});
</script>

<style scoped>
.profile-container {
	display: flex;
	flex-direction: column;

	padding: 20px 0;
}

.spinner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 85vh;
}
</style>
