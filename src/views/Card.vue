<template>
  <div>
    <div v-if="loading" class="loading">Caricamento...</div>

    <div v-else>
      <div class="grid">
        <div class="row">
          <div
            class="col-md-6 col-lg-3"
            v-for="item in cardData"
            :key="item.youtubeId"
          >
            <div class="container-card">
              <router-link :to="'/video/' + item.youtubeId">
                <img
                  v-if="item.youtubeId"
                  :src="
                    'https://img.youtube.com/vi/' + item.youtubeId + '/0.jpg'
                  "
                  alt="image-card"
                  class="img-card"
                  :id="item.youtubeId"
                />
              </router-link>
              <div class="text-card">
                <h3 class="bg-p">{{ item.title }}</h3>
                <hr />
                <h2 class="bg-p font-author">{{ item.author }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      cardData: [],
    };
  },
  async created() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get("./src/Data/Data.json");

      this.cardData = response.data;
      this.loading = false;
    } catch (error) {
      console.error("Errore durante la richiesta:", error);
    }
  },
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
}

.container-card {
  max-width: 350px;
  padding: 10px;
  background-color: #4b0082;
  border: 2px solid #4b0082;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(75, 0, 130, 0.4);
  transition: box-shadow 0.3s ease;
}

.container-card:hover {
  box-shadow: 0 8px 16px rgba(75, 0, 130, 1);
}

.bg-p {
  background-color: #4b0082;
  color: white;
}

.font-author {
  font-family: cursive;
}

.img-card {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.text-card {
  text-align: center;
}

@media (min-width: 768px) {
  .grid .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 1200px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (max-width: 767px) {
  .grid .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .container-card {
    max-width: 150px;
    padding: 10px;
    background-color: #4b0082;
    border: 2px solid #6200a8;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(75, 0, 130, 0.4);
    transition: box-shadow 0.3s ease;
  }

  .container-card:hover {
    box-shadow: 0 8px 16px rgba(75, 0, 130, 1);
  }
}
</style>
