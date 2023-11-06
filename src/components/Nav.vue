<template>
	<ALayoutHeader class="header">
		<Container>
			<div class="nav-container">
				<div class="left-content">
					<RouterLink to="/" class="logo">Instagram</RouterLink>
					<AInputSearch
						v-model:value="searchUsername"
						placeholder="username..."
						style="width: 200px"
						@search="onSearch"
					/>
				</div>

				<div class="right-content" v-if="!isAuth">
					<AuthModal :isLogin="false" />
					<AuthModal :isLogin="true" />
				</div>

				<div class="right-content" v-else>
					<AButton type="primary">Profile</AButton>
					<AButton type="primary">Logout</AButton>
				</div>
			</div>
		</Container>
	</ALayoutHeader>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';

import AuthModal from './AuthModal.vue';
import Container from './Container.vue';

const router = useRouter();

const searchUsername = ref('');
const isAuth = ref(false);


const onSearch = () => {
	if (searchUsername.value) {
		router.push(`/profile/${searchUsername.value}`);
		searchUsername.value = '';
	}
};
</script>

<style scoped>
.header {
	background-color: blue;
}
.nav-container {
	display: flex;
	justify-content: space-between;
}
.left-content {
	display: flex;
	align-items: center;
}
.left-content a {
	margin-right: 10px;
}
.right-content {
	display: flex;
	align-items: center;
}
.right-content button {
	margin-left: 10px;
	font-weight: bold;
	background-color: rgba(206, 47, 255, 0.932);
}

.logo {
	font-weight: bold;
	color: white;
}
.logo:hover {
	color: yellowgreen;
}
</style>
