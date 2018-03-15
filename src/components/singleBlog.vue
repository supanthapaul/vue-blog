<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <p>Author: {{blog.author}}</p>
      <article>{{blog.content}}</article>
  </div>
</template>


<script>
export default {
	data() {
		return {
			id: this.$route.params.id,
			blog: {}
		};
	},
	created() {
		this.$http
			.get("https://vue-blog-40bde.firebaseio.com/posts/" + this.id + ".json")
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.blog = data;
			});
	}
};
</script>

<style scoped>
h1 {
	margin: 0;
}
p {
	margin-top: 5px;
	color: #8b8b8b;
}

#single-blog {
	margin: auto;
	width: 80%;
}
</style>


