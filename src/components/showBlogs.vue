<template>
  <div id="show-blogs">
	<h1>All Blog Articles</h1>
	<input type="text" v-model="search" placeholder="Search Blogs...">

    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
		<!-- v-rainbow is custom directive defined in main.js -->
		<!-- to-uppercase is a local filter registered in the script part -->
        <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
		<!-- truncate is a custom filter defined in main.js -->
        <div id="content">{{blog.content | truncate}}</div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			blogs: [],
			search: ""
		};
	},
	created() {
		this.$http
			.get("https://vue-blog-40bde.firebaseio.com/posts.json")
			.then(res => {
				return res.json();
			})
			.then(data => {
				var blogsArray = [];

				for (let key in data) {
					data[key].id = key;
					blogsArray.push(data[key]);
				}
				this.blogs = blogsArray;
			});
	},
	computed: {
		filteredBlogs: function() {
			return this.blogs.filter(blog => {
				return blog.title.toUpperCase().match(this.search.toUpperCase());
			});
		}
	},
	filters: {
		"to-uppercase": function(value) {
			return value.toUpperCase();
		}
	}
};
</script>

<style scoped>
a {
	text-decoration: none;
}

#show-blogs {
	width: 70%;
	margin: auto;
}
input[type="text"] {
	display: block;
	width: 100%;
	padding: 8px;
}

.single-blog {
	padding: 20px;
	margin: 20px 0px;
	box-sizing: border-box;
	background-color: #eee;
}
</style>
