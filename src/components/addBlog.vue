<template>
  <div id="add-blog" class="container">
    <h2>Add A New Blog Post</h2>
    <form action="" v-if="!submitted">
      <label>Blog Title:</label>
      <input v-model.lazy="blog.title" type="text" required>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content" required id="content"></textarea>
      <div id="checkboxes">
        <label>Ninja</label>
        <input type="checkbox" value="ninja" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author.id">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">Post Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks For Submitting!</h3>
    </div>

    <div id="preview">
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p> {{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			blog: {
				title: "",
				content: "",
				categories: [],
				author: ""
			},
			authors: ["Supantha Paul", "The Net Ninja", "Brad Traversy"],
			submitted: false
		};
	},
	methods: {
		post() {
			this.$http
				.post("https://vue-blog-40bde.firebaseio.com/posts.json", this.blog)
				.then(res => {
					console.log(res);
					this.submitted = true;
				});
		}
	}
};
</script>

<style>
.container {
	width: 90%;
}

#add-blog * {
	box-sizing: border-box;
}
#add-blog {
	margin: 20px auto;
	max-width: 500px;
}
label {
	display: block;
	margin: 20px 0 10px;
}
input[type="text"],
textarea,
select,
button {
	display: block;
	width: 100%;
	padding: 8px;
}
button {
	width: 40%;
	margin: 20px auto auto;
	background-color: #ff9036;
	border: none;
	border-radius: 50px;
	color: #f1f1f1;
	font-weight: bold;
	text-transform: uppercase;
}

button:hover {
	background-color: #dd7520;
}

#preview {
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
h3 {
	margin-top: 10px;
}

#checkboxes input {
	display: inline-block;
	margin-right: 10px;
}
#checkboxes label {
	display: inline-block;
}
</style>
