<template>
  <div class="zeamomargin">
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
          <div class="headertop">
            <div class="headerimage">
              <img src="../assets/zeamo/arrow.jpg" class="imd">
              <img src="../assets/zeamo/tower.jpg" class="imd">
              <img src="../assets/zeamo/battery.jpg" class="topheaderimage">
              <img src="../assets/zeamo/time.jpg" class="imgs">
            </div>
          </div>
          <div class="bottomheader">
            <div class="left">
              <button
                type="button"
                id="sidebarCollapse"
                class="displaybutton"
                v-on:click="displaymenu"
              >
                <img src="../assets/zeamo/menu.jpg" class="imgss">
              </button>
              <img src="../assets/zeamo/zeamo.jpg" class="imgss">
              <div class="right">
                <img src="../assets/zeamo/option.jpg" class="optionimage">
                <img src="../assets/zeamo/search.jpg" class="imgsd">
              </div>
            </div>
          </div>
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
.zeamomargin {
  margin: 4% 4% 10% 4%;
}
.header {
  background-color: #162233;
}
.topheaderimage {
  height: 15px;
  padding-left: 8px;
  padding-right: 8px;
}
.imd {
  height: 15px;
}
.headerimage {
  float: right;
  padding-right: 2%;
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
.optionimage {
  height: 20px;
  padding-right: 28%;
}
.imgsd {
  height: 20px;
}
.bottomheader {
  width: 100%;
  margin-top: 4%;
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
  float: right;
  margin-right: 4%;
  width: 70px;
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
}
@media only screen and (max-width: 425px) {
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
  .imgss {
    margin-left: 7%;
    height: 17px;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bottomheader {
    margin-top: 8%;
  }
}
@media only screen and (max-width: 320px) {
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
