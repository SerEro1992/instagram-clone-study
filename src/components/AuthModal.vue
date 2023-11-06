<template>
	<div>
		<AButton type="primary" @click="showModal" class="btn">{{ title }}</AButton>
		<AModal v-model:visible="visible" :title="title" @ok="handleOk">
			<AInput
				class="input"
				type="text"
				v-if="!isLogin"
				v-model:value="userCredentials.username"
				placeholder="Username"
			/>
			<AInput
				class="input"
				type="email"
				v-model:value="userCredentials.email"
				placeholder="Email"
			/>
			<AInput
				class="input"
				type="password"
				v-model:value="userCredentials.password"
				placeholder="Password"
			/>
			<ATypographyText v-if="errorMessage" type="danger">{{
				errorMessage
			}}</ATypographyText>
		</AModal>
	</div>
</template>

<script setup>
import { ref, defineProps, reactive } from 'vue';
import { useUsersStore } from '../stores/users.js';
import { storeToRefs } from 'pinia';

const userStore = useUsersStore();
const { errorMessage } = storeToRefs(userStore);

const userCredentials = reactive({
	email: '',
	password: '',
	username: '',
});

const props = defineProps(['isLogin']);
const visible = ref(false);

const showModal = () => {
	visible.value = true;
};

const handleOk = (e) => {
	userStore.handleRegister(userCredentials);
};

const title = props.isLogin ? 'Login' : 'Register';
</script>

<style scoped>
.btn {
	font-weight: bold;
	margin-left: 10px;
	background-color: rgba(206, 47, 255, 0.932);
}
.input {
	margin-top: 5px;
}
</style>
