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

				<div class="content" v-if="!loadingUser">
					<div class="right-content" v-if="!user">
						<AuthModal :isLogin="false" />
						<AuthModal :isLogin="true" />
					</div>

					<div class="right-content" v-else>
						<AButton type="primary">Profile</AButton>
						<AButton type="primary" @click="handleLogout">Logout</AButton>
					</div>
				</div>
			</div>
		</Container>
	</ALayoutHeader>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import AuthModal from './AuthModal.vue';
import Container from './Container.vue';
import { useUsersStore } from '../stores/users';

const userStore = useUsersStore();
const { user, loadingUser } = storeToRefs(userStore);
const router = useRouter();
const searchUsername = ref('');

const onSearch = () => {
	if (searchUsername.value) {
		router.push(`/profile/${searchUsername.value}`);
		searchUsername.value = '';
	}
};

const handleLogout = async () => {
	await userStore.handleLogout();
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
.content {
	display: flex;
	align-items: center;
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
