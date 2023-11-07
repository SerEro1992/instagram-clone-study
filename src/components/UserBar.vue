<template>
	<Container>
		<div class="userbar-container" v-if="props.user">
			<div class="top-content">
				<ATypographyTitle :level="2">
					{{ props.user.username }}</ATypographyTitle
				>
				<UploadPhotoModal
					v-if="user && profileUsername === user.username"
					:addNewPost="addNewPost"
				/>
			</div>
			<div class="bottom-content">
				<ATypographyTitle :level="5">
					{{ props.userInfo.posts }} posts
				</ATypographyTitle>
				<ATypographyTitle :level="5">
					{{ props.userInfo.followers }} folowers
				</ATypographyTitle>
				<ATypographyTitle :level="5">
					{{ props.userInfo.following }} folowing
				</ATypographyTitle>
			</div>
		</div>
		<div v-else class="userbar-container">
			<div class="top-content">
				<ATypographyTitle :level="2"> User not found</ATypographyTitle>
			</div>
		</div>
	</Container>
</template>

<script setup>
import Container from './Container.vue';
import UploadPhotoModal from './UploadPhotoModal.vue';
import { useUsersStore } from '../stores/users';

import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();
const { username: profileUsername } = route.params;
const useStore = useUsersStore();
const { user } = storeToRefs(useStore);

const props = defineProps(['user', 'userInfo', 'addNewPost']);
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

.top-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.top-content input {
	margin-top: 3px;
	margin-left: 90px;
}
</style>
