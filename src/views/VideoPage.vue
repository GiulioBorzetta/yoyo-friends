<template>
  <div>
    <div class="VideoYoutube">
      <vue-plyr>
        <div
          style="background-color: blue"
          data-plyr-provider="youtube"
          :data-plyr-embed-id="$route.params.id"
        ></div>
      </vue-plyr>
    </div>
    <h1 class="textComments">COMMENTS</h1>
    <MainComment></MainComment>
  </div>
</template>

<script>
import MainComment from "../components/MainComment.vue";

export default {
  components: {
    MainComment,
  },
};
</script>

<style>
.VideoYoutube {
  max-width: 1000px;
  margin: 0 auto;
  border: 10px solid #4b0082;
  border-radius: 5px;
}

.textComments {
  text-align: center;
  margin-top: 10px;
}
</style>
