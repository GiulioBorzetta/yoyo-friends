<template>
  <div id="app">
    <div class="comments-outside">
      <div class="comments-header">
        <div class="comments-stats">
          <span
            ><font-awesome-icon :icon="['fas', 'thumbs-up']" />
            {{ likes }}</span
          >
          <span
            ><font-awesome-icon :icon="['fas', 'comment']" />
            {{ comments.length }}</span
          >
        </div>
        <div class="post-owner">
          <div class="avatar">
            <img :src="creator.avatar" alt="" />
          </div>
          <div class="username">
            <a href="#">@{{ creator.user }}</a>
          </div>
        </div>
      </div>
      <comments
        :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
        :comments="comments"
        :current_user="current_user"
        @submit-comment="submitComment"
      ></comments>
    </div>
  </div>
</template>

<script>
import comments from "./Comments.vue";

export default {
  name: "app",
  components: {
    comments,
  },
  data() {
    return {
      likes: 15,
      creator: {
        avatar: "http://via.placeholder.com/100x100/a74848",
        user: "CreatorPage",
      },
      current_user: {
        avatar: "http://via.placeholder.com/100x100/a74848",
        user: "You",
      },
      comments: [
        {
          id: 1,
          user: "Marco",
          avatar: "http://via.placeholder.com/100x100/a74848",
          text: "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ",
        },
        {
          id: 2,
          user: "Francesca",
          avatar: "http://via.placeholder.com/100x100/2d58a7",
          text: "lorem ipsum dolor",
        },
        {
          id: 3,
          user: "Alessandro",
          avatar: "http://via.placeholder.com/100x100/36846e",
          text: "lorem ipsum dolor again",
        },
      ],
    };
  },
  methods: {
    submitComment: function (reply) {
      this.comments.push({
        id: this.comments.length + 1,
        user: this.current_user.user,
        avatar: this.current_user.avatar,
        text: reply,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.avatar,
.comments-stats,
.svg-inline--fa {
  background-color: transparent;
}

a {
  text-decoration: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ececec;
  margin: 1em 0;
  padding: 0;
}

.comments-outside {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
}

.comments-header {
  background-color: #601e8f;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #333;
  min-height: 80px;
  font-size: 20px;
}

.comments-header .comments-stats span {
  margin-left: 10px;
  background-color: transparent;
}

.post-owner {
  display: flex;
  align-items: center;
  background-color: transparent;
}

.post-owner .avatar > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: transparent;
}

.post-owner .username {
  margin-left: 5px;
  background-color: transparent;
}

.post-owner .username > a {
  color: white;
  background-color: transparent;
}
</style>
