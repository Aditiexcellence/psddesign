<template>
  <div>
    <div class="header">
      <b-row class="topheader">
        <b-col lg="9" col sm="6" md="8"></b-col>
        <b-col lg="3" col sm="6" md="4" class="image">
          <img src="../assets/filtergyms/wifi.jpg" class="imd">
          <img src="../assets/filtergyms/tower.jpg" class="imd">
          <img src="../assets/filtergyms/battery.jpg" class="imgs">
          <img src="../assets/filtergyms/time.jpg" class="imgs">
        </b-col>
      </b-row>
      <b-row class="headerbottom">
        <b-col lg="8" col sm="1" md="8" class="lefttext">
          <i class="fas fa-times icon"></i>
          <div class="text">Filter gyms</div>
        </b-col>
        <b-col lg="4" col sm="11" md="4" class="apply">APPLY</b-col>
      </b-row>
    </div>
    <b-container class="box">
      <b-form class="extra">
        <b-row>
          <b-col lg="12" sm="12" md="12" class="col-12">
            Gym name
            <mdb-input type="text"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" sm="6" md="6" class="col-6">
            Select Radius
            <select class="mdb-select md-form background">
              <option value disabled selected>8 miles</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" sm="6" md="6" class="col-6">
            Zip code
            <mdb-input type="text"/>
          </b-col>
          <b-col lg="6" sm="6" md="6" class="col-6">
            State
            <select class="mdb-select md-form background">
              <option value disabled selected>CA</option>
            </select>
          </b-col>
        </b-row>
        <b-row class="menu">
          <b-col lg="6" sm="6" md="6" class="col-6 activity">
            <h3 class="h3heading">Activities</h3>
          </b-col>
          <b-col lg="6" sm="6" md="6" class="col-6 amenities">
            <h3 class="h3heading amenity">Amenities</h3>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="gym">
            <label class="custom-control-label" for="gym">Gym</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="pilates">
            <label class="custom-control-label" for="pilates">Pilates</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="tennis">
            <label class="custom-control-label" for="tennis">Tennis</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="swimming">
            <label class="custom-control-label" for="swimming">Swimming</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="fencing">
            <label class="custom-control-label" for="fencing">Fencing</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="training">
            <label class="custom-control-label" for="training">Personal Training</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="yoga">
            <label class="custom-control-label" for="yoga">Yoga</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="squash">
            <label class="custom-control-label" for="squash">Squash</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="cycling">
            <label class="custom-control-label" for="cycling">Cycling</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="spinning">
            <label class="custom-control-label" for="spinning">Spinning</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="zumba">
            <label class="custom-control-label" for="zumba">Zumba</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="arts">
            <label class="custom-control-label" for="arts">Material Arts</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="kickboxing">
            <label class="custom-control-label" for="kickboxing">Kickboxing</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="physiotherapy">
            <label class="custom-control-label" for="physiotherapy">Physiotherapy</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="basketball">
            <label class="custom-control-label" for="basketball">Basketball</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="camp">
            <label class="custom-control-label" for="camp">Boot Camp</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="barre">
            <label class="custom-control-label" for="barre">Barre</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="soccer">
            <label class="custom-control-label" for="soccer">Soccer</label>
          </b-col>
        </b-row>
        <b-row class="checkboxes">
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="dancing">
            <label class="custom-control-label" for="dancing">Dancing</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4">
            <input type="checkbox" class="custom-control-input" id="climbing">
            <label class="custom-control-label" for="climbing">Rock Climbing</label>
          </b-col>
          <b-col lg="4" sm="4" md="4" class="col-4"></b-col>
        </b-row>
        <center>
          <button class="clear">CLEAR ALL</button>
        </center>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Filtergyms",
  components: {
    mdbInput
  }
};
</script>

<style>
body {
  margin-bottom: 4% !important;
  margin: 2% !important;
}
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
.imgss {
  margin-left: 7%;
  height: 25px;
}
.imgsd {
  margin-left: 10%;
  height: 20px;
}
.apply {
  color: #4877f9;
  text-align: right;
  padding-right: 2% !important;
  font-size: 20px;
}
.headerbottom {
  width: 100%;
  margin-top: 3%;
  padding-bottom: 2%;
}
.lefttext {
  display: flex;
  font-size: 23px;
  font-family: dejavu sans;
}
.text {
  margin-left: 3% !important;
}
.icon {
  margin-left: 3% !important;
  margin-top: auto;
  margin-bottom: auto;
  color: blue;
}
.background {
  width: 100%;
  background-color: white;
  color: gray !important;
  border: none;
  border-bottom: 1px solid #ced4da !important;
  box-shadow: 0 1px 0 0 #ced4da !important;
}
.md-form label.active {
  color: #757575 !important;
  font-size: 1rem !important;
}
.md-form {
  width: 100% !important;
}
.md-form input {
  border-bottom: 1px solid #ced4da !important;
  box-shadow: 0 1px 0 0 #ced4da !important;
}
.box {
  color: #757575;
  margin-top: 4%;
}
.extra {
  overflow: hidden;
}
.menu {
  color: black;
  display: flex;
}
.custom-control-label {
  margin-left: 13%;
  padding-left: 3%;
}
.checkboxes {
  margin-top: 2%;
  font-size: 20px;
}
.clear {
  border: none;
  background-color: white;
  color: #4877f9;
  margin-top: 4%;
  font-size: 20px;
}
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  width: 1.25em;
  height: 1.25em;
  border: 2px solid #ccc;
  background: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 2px solid #4877f9;
}
.activity {
  padding-right: 0px !important;
  border-bottom: 4px solid #4877f9;
}
.amenities {
  padding-left: 0px !important;
  border-bottom: 1px solid grey;
}
.amenity {
  padding-left: 4%;
}
.form-control {
  padding-top: 0px !important;
  line-height: 1px !important;
  padding-bottom: 3px !important;
}
@media only screen and (max-width: 425px) {
  .checkboxes {
    margin-top: 3%;
    font-size: 13px;
    padding-left: 4%;
  }
  .image {
    padding-left: 40% !important;
  }
}
@media only screen and (max-width: 320px) {
  .h3heading {
    font-size: 17px;
  }
  .lefttext {
    display: flex;
    font-size: 19px;
    font-family: dejavu sans;
  }
  .image {
    padding-left: 18% !important;
  }
  .custom-control-label {
    margin-left: 20%;
    padding-left: 0%;
  }
  .checkboxes {
    font-size: 11px;
     margin-top: 3%;
  }
  .apply {
    font-size: 15px;
  }
}
</style>
