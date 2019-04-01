<template>
  <div>
    <div class="header">
      <b-row class="topheader">
        <b-col lg="9" col sm="6" md="8"></b-col>
        <b-col lg="3" col sm="6" md="4" class="image">
          <img src="../assets/zeamo/arrow.jpg" class="imd">
          <img src="../assets/zeamo/tower.jpg" class="imd">
          <img src="../assets/zeamo/battery.jpg" class="imgs">
          <img src="../assets/zeamo/time.jpg" class="imgs">
        </b-col>
      </b-row>
      <b-row class="bottomheader">
        <b-col lg="8" col sm="1" md="8" class="left">
          <img src="../assets/zeamo/menu.jpg" class="imgss">
          <img src="../assets/zeamo/zeamo.jpg" class="imgss">
        </b-col>
        <b-col lg="4" col sm="11" md="4" class="right">
          <img src="../assets/zeamo/option.jpg" class="imgsd">
          <img src="../assets/zeamo/search.jpg" class="imgsd">
        </b-col>
      </b-row>
    </div>
    <div class="body">
      <div class="bodyimage">
        <img src="../assets/zeamo/map.jpg" class="mapimage">
      </div>
      <div class="gyma">
        <img src="../assets/zeamo/gyma.jpg" class="mapimage">
      </div>
      <div class="gyma">
        <img src="../assets/zeamo/gymaw.jpg" class="mapimage">
      </div>
      <div class="gyma">
        <img src="../assets/zeamo/gymabc.jpg" class="mapimage">
      </div>
      <div class="gyma">
        <img src="../assets/zeamo/gymabcw.jpg" class="mapimage">
      </div>
      <div class="gyma">
        <img src="../assets/zeamo/partner.jpg" class="mapimage">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zeamo"
};
</script>

<style>
body {
  margin-bottom: 4% !important;
  margin: 2% !important;
}
.header {
  background-color: #162233;
}
.imgs {
  height: 15px;
  margin-left: 7%;
}
.imd {
  height: 15px;
}
.image {
  float: right;
  display: inline-flex;
  padding-left: 15% !important;
}
.topheader {
  padding-top: 0.5%;
  width: 100%;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.imgss {
  margin-left: 7%;
  height: 25px;
}
.imgsd {
  margin-left: 10%;
  height: 20px;
}
.bottomheader {
  width: 100%;
  display: flex;
  margin: auto;
  margin-top: 3%;
  padding-bottom: 3%;
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.right {
  display: flex;
  padding-left: 23% !important;
}
.left {
  display: flex;
}
.bodyimage {
  height: 400px;
}
.mapimage {
  height: inherit;
  width: 100%;
}
.gyma {
  height: 200px;
}
@media only screen and (max-width: 425px) {
  .right {
    padding-left: 25% !important;
  }
  .image {
    padding-left: 35% !important;
  }
  .gyma {
    height: 100px;
  }
  .bodyimage {
    height: 200px;
  }
}
@media only screen and (max-width: 320px) {
  .right {
    padding-left: 25% !important;
  }
  .image {
    padding-left: 35% !important;
  }
  .gyma {
    height: 100px;
  }
  .bodyimage {
    height: 200px;
  }
  .imgss {
    height: 20px;
  }
}
</style>
