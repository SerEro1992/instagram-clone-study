<template>
	<Container>
		<div class="userbar-container" v-if="props.user">
			<div class="top-content">
				<ATypographyTitle :level="2">
					{{ props.user.username }}</ATypographyTitle
				>
				<div v-if="user" class="">
					<UploadPhotoModal
						v-if="profileUsername === user.username"
						:addNewPost="addNewPost"
					/>
					<div v-else>
						<AButton @click="followUser" v-if="!props.isFollowing"
							>Follow</AButton
						>
						<AButton @click="unfollowUser" v-else>Following</AButton>
					</div>
				</div>
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
import { supabase } from '../supabase';

import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();
const { username: profileUsername } = route.params;
const useStore = useUsersStore();
const { user } = storeToRefs(useStore);

const props = defineProps([
	'user',
	'userInfo',
	'addNewPost',
	'isFollowing',
	'updateIsFollowing',
]);

const followUser = async () => {
	props.updateIsFollowing(true);
	await supabase.from('followers_following').insert({
		follower_id: user.value.id,
		following_id: props.user.id,
	});
};

const unfollowUser = async () => {
	props.updateIsFollowing(false);
	await supabase
		.from('followers_following')
		.delete()
		.eq('follower_id', user.value.id)
		.eq('following_id', props.user.id);
};
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
