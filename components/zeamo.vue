<template>
  <div>
    <div class="wrapper">
      <nav id="sidebar" :class="{'active': canShowmenu}">
        <ul class="list-unstyled components">
          <li>
            <a href="#" v-on:click="filtergym">Filter Gyms</a>
          </li>
          <li>
            <a href="#" v-on:click="friars">Friars Pilates Studio</a>
          </li>
        </ul>
      </nav>
      <div id="content">
        <div class="header">
          <b-row class="headertop">
            <b-col lg="9" col sm="6" md="8" class="col-2"></b-col>
            <b-col lg="3" col sm="6" md="4" class="col-10 headerimage">
              <img src="../assets/zeamo/arrow.jpg" class="imd">
              <img src="../assets/zeamo/tower.jpg" class="imd">
              <img src="../assets/zeamo/battery.jpg" class="imgs">
              <img src="../assets/zeamo/time.jpg" class="imgs">
            </b-col>
          </b-row>
          <b-row class="bottomheader">
            <b-col lg="8" col sm="1" md="8" class="col-8 left">
              <button
                type="button"
                id="sidebarCollapse"
                class="displaybutton"
                v-on:click="displaymenu"
              >
                <img src="../assets/zeamo/menu.jpg" class="imgss">
              </button>
              <img src="../assets/zeamo/zeamo.jpg" class="imgss">
            </b-col>
            <b-col lg="4" col sm="11" md="4" class="col-4 right">
              <img src="../assets/zeamo/option.jpg" class="imgsd">
              <img src="../assets/zeamo/search.jpg" class="imgsd">
            </b-col>
          </b-row>
        </div>
        <div class="bodycontent">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Zeamo",
  data: function() {
    return {
      canShowmenu: true
    };
  },
  methods: {
    displaymenu: function() {
      this.canShowmenu = !this.canShowmenu;
    },
    filtergym: function() {
      this.$router.push("/filtergyms");
    },
    friars: function() {
      this.$router.push("/gymdetail");
    }
  }
};
</script>

<style>
body {
  margin-bottom: 4%;
  margin: 2%;
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
.headerimage {
  float: right;
  display: inline-flex;
  padding-left: 13%;
}
.headertop {
  padding-top: 0.5%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
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
  margin-left: 0px;
  margin-right: 0px;
}
.displaybutton {
  background-color: #162233;
  border: none;
  margin-left: 4%;
}
.right {
  display: flex;
  padding-left: 22%;
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
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
  height: 100%;
}
#sidebar {
  min-width: 71px;
  max-width: 250px;
  background: #162233;
  padding-top: 7%;
}
#sidebar.active {
  margin-left: -211px;
  margin-right: 4%;
}
li a {
  padding: 10px;
  color: #ffffff;
  display: block;
  text-decoration: none;
}
li a:hover {
  color: #000000;
  background: #fff;
  text-decoration: none;
}
#content {
  width: 100%;
}
@media only screen and (max-width: 768px) {
  #sidebar.active {
    margin-left: -211px;
    margin-right: 6%;
  }
  .headerimage {
    padding-left: 16%;
  }
}
@media only screen and (max-width: 425px) {
  .headerimage {
    padding-left: 42%;
  }
  #sidebar.active {
    margin-left: -211px;
    margin-right: 12%;
  }
  .gyma {
    height: 100px;
  }
  .bodyimage {
    height: 200px;
  }
  .right {
    padding-left: 11%;
  }
  .imgss {
    margin-left: 7%;
    height: 17px;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media only screen and (max-width: 320px) {
  .right {
    padding-left: 0;
  }
  .headerimage {
    padding-left: 32%;
  }
  .gyma {
    height: 100px;
  }
  .bodyimage {
    height: 200px;
  }
  .imgss {
    height: 13px;
  }
  #sidebar.active {
    margin-right: 16%;
  }
}
</style>
