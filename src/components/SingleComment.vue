<template>
  <div class="comment">
    <div class="avatar">
      <img :src="comment.avatar" alt="" />
    </div>
    <div class="text">
      <a class="username" href="#">@{{ comment.user }}</a>
      <span>{{ comment.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleComment",
  props: ["comment"],
};
</script>

<style scoped>
.comment {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  color: #333;
  background-color: #f2f2f2;
  border-radius: 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.comment .avatar {
  align-self: flex-start;
  background-color: transparent;
}

.comment .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-self: start;
  background-color: transparent;
}

.comment .text {
  text-align: left;
  margin-left: 5px;
  background-color: transparent;
}

.comment .text span {
  margin-left: 5px;
  background-color: transparent;
  color: #333;
}

.comment .text .username {
  font-weight: bold;
  color: #333;
  background-color: transparent;
}
</style>
