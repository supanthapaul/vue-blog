<template>
  <div>
		<nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import navbar from "./components/navbar";

export default {
	components: {
		"add-blog": addBlog,
		"show-blogs": showBlogs,
		"nav-bar": navbar
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
body {
	margin: 0;
	font-family: "Nunito SemiBold", sans-serif;
}
</style>
