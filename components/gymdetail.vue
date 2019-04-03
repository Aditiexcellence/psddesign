<template>
  <div>
    <div class="header">
      <b-row class="topheader">
        <b-col lg="9" col sm="6" md="8"></b-col>
        <b-col lg="3" col sm="6" md="4" class="image">
          <img src="../assets/gymdetail/wifi.jpg" class="imd">
          <img src="../assets/gymdetail/tower.jpg" class="imd">
          <img src="../assets/gymdetail/battery.jpg" class="imgs">
          <img src="../assets/gymdetail/time.jpg" class="imgs">
        </b-col>
      </b-row>
      <b-row class="headerbottom">
        <b-col lg="8" col sm="1" md="8" class="lefttext">
          <i class="fas fa-arrow-left arrowicon"></i>
          <div class="text">Friars Pilates Studio</div>
        </b-col>
      </b-row>
    </div>
    <div class="bodydata">
      <div class="studio">
        <img src="../assets/gymdetail/studio.jpg" class="gymimage">
      </div>
      <div class="studiotext">
        <img src="../assets/gymdetail/studiotext.jpg" class="gymimage">
      </div>
      <div class="map">
        <img src="../assets/gymdetail/map.jpg" class="gymimage">
      </div>
      <b-container class="data">
        <div class="heading">Schedule</div>
        <div class="content">
          <b-row class="margin">
            <span class="day">Monday:</span>
            10:00 AM - 11:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Tuesday:</span>
            10:00 AM - 3:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Wednesday:</span>
            10:00 AM - 3:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Thursday:</span>
            10:00 AM - 11:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Friday:</span>
            10:00 AM - 3:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Saturday:</span>
            10:00 AM - 3:00 PM
          </b-row>
          <b-row class="margin">
            <span class="day">Sunday:</span>
            10:00 AM - 3:00 PM
          </b-row>
        </div>
        <div class="heading">About</div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
          quis, sem. Nulla consequat massa quis enim.
        </div>
        <div class="heading">Location</div>
        <div class="content">
          <b-row>
            <b-col lg="5" sm="5" md="5" class="col-5">
              5555 Grapes Rd, 92510
              San Diego, CA
            </b-col>
            <b-col lg="7" sm="7" md="7" class="col-7">
              <i class="fas fa-location-arrow icons"></i>
            </b-col>
          </b-row>
        </div>
        <div class="heading">Phone number</div>
        <div class="content">
          (555) 555 - 5555
          <i class="fas fa-phone icons"></i>
        </div>
        <div class="heading">
          <b-row>
            <b-col lg="6" sm="6" md="6" class="col-6">
              Activities
              <hr class="position">
            </b-col>
            <b-col lg="6" sm="6" md="6" class="col-6">Amenities</b-col>
          </b-row>
        </div>
        <div class="content">
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Gym</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Pilates</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Tennis</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Swimming</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Fencing</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Personal Training</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Yoga</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Squash</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Cycling</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Spinning</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Zumba</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Martial Arts</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Kickboxing</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Physiotherapy</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Basketball</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Boot Camp</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Barre</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Soccer</b-col>
          </b-row>
          <b-row>
            <b-col lg="4" sm="4" md="4" class="col-4">Dancing</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4">Rock Climbing</b-col>
            <b-col lg="4" sm="4" md="4" class="col-4"></b-col>
          </b-row>
        </div>
        <div class="heading">Photos</div>
        <div class="contents">
          <img v-for="n in 5" :key="n" src="../assets/gymdetail/bottom.jpg" class="bottomimage">
        </div>
      </b-container>
      <button class="purchase">PURCHASE A PASS</button>
    </div>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Gymdetail"
};
</script>

<style>
.header {
  background-color: #162233;
  color: white;
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
.headerbottom {
  width: 100%;
  margin-top: 3%;
  padding-bottom: 2%;
}
.lefttext {
  display: flex;
  font-size: 30px;
  font-family: dejavu sans;
  margin-left: 3%;
}
.text {
  margin-left: 3% !important;
}
.gymimage {
  width: 100%;
}
.data {
  background-color: #162233;
  color: white;
  margin-left: 0px !important;
  margin-right: 0px !important;
  max-width: 100% !important;
}
.content {
  color: grey;
  margin-top: 2%;
  font-size: 20px;
}
.day {
  color: white;
}
.margin {
  margin-left: 0px !important;
}
.heading {
  border-bottom: 2px solid grey;
  padding-top: 2%;
  padding-bottom: 0.3%;
  font-size: 25px;
}
.contents {
  display: flex;
  overflow: hidden;
}
.bottomimage {
  padding: 1%;
  margin-top: 1%;
  height: 23%;
  width: 23%;
  padding-bottom: 3%;
}
.position {
  position: absolute;
  border: 2px solid #4877f9;
  width: 97%;
  top: 23px;
}
.arrowicon {
  color: #4877f9;
  margin-top: 1%;
}
.icons {
  float: right;
  margin-right: 2%;
  margin-top: auto;
  margin-bottom: auto;
  color: #4877f9;
}
.purchase {
  width: 100%;
  border: none;
  background-color: #4877f9;
  color: white;
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 30px;
}
@media only screen and (max-width: 320px) {
  .lefttext {
    font-size: 16px !important;
  }
  .heading {
    font-size: 14px !important;
  }
  .content {
    font-size: 9.9px !important;
  }
  .position {
    top: 5px !important;
  }
  .purchase {
    font-size: 13px !important;
  }
}
@media only screen and (max-width: 425px) {
  .lefttext {
    font-size: 18px;
  }
  .image {
    padding-left: 45% !important;
  }
  .heading {
    border-bottom: 2px solid grey;
    padding-top: 2%;
    padding-bottom: 0.3%;
    font-size: 16px;
  }
  .content {
    font-size: 12px;
  }
  .position {
    top: 8px;
    width: 90%;
  }
  .purchase {
    font-size: 18px;
  }
}
</style>
