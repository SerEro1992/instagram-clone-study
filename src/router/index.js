import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import ProfilePage from "../views/ProfilePage.vue"
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/profile/:username',
		name: 'profile',
		component: ProfilePage
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
