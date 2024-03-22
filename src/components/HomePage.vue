<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <div class="section">
      <div class="imgSection">
        <img class="img" src="../assets/images/home1.png" />
      </div>
      <div class="textSection">
        <h3>
          Immagina una community di yoga come un luogo virtuale in cui gli
          appassionati di yoga, <br />
          sia principianti che esperti, si riuniscono per condividere la loro
          passione, <br />
          ispirarsi a vicenda e crescere insieme nel loro percorso di pratica
          dello yoga. <br />
          Questa community ha lo scopo di motivare le persone a guardare i loro
          video attraverso diversi approcci:
        </h3>
        <ul>
          <li><em>Condivisione di conoscenze e esperienze</em></li>
          <li><em>Inspirazione e motivazione</em></li>
          <li><em>Offerta di contenuti utili e stimolanti</em></li>
          <li><em>Creazione di un ambiente di supporto</em></li>
        </ul>

        <h2>Scopri i video che abbiamo caricato cliccando qua sotto!</h2>
        <router-link to="/Card"
          ><button class="buttonSection">CLICCA QUI!</button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
.section {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.buttonSection {
  background-color: blueviolet;
  border: 1px solid rgb(101, 46, 153);
  border-radius: 8px;
  width: 150px;
  height: 30px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.buttonSection:hover {
  background-color: darkviolet;
}

.buttonSection:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.textSection {
  text-align: center;
  margin: auto;
  max-width: 600px;
}

.textSection2 {
  flex: 1;
  padding: 0 20px;
}

.imgSection {
  width: 50%;
  max-width: 400px;
  height: auto;
}

.imgSection2 {
  width: 50%;
  max-width: 400px;
  height: auto;
}

.img {
  width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  .section {
    flex-wrap: wrap;
  }
}
</style>
