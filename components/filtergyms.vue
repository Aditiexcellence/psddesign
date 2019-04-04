<template>
  <div class="filtermargin">
    <div class="header">
      <div class="headertop">
        <div class="headerimage">
          <img src="../assets/zeamo/arrow.jpg" class="imd">
          <img src="../assets/zeamo/tower.jpg" class="imd">
          <img src="../assets/zeamo/battery.jpg" class="topheaderimage">
          <img src="../assets/zeamo/time.jpg" class="imgs">
        </div>
      </div>
      <b-row class="headerbottom">
        <b-col lg="8" col sm="1" md="8" class="lefttext">
          <i class="fas fa-times icon" @click="back"></i>
          <div class="text">Filter gyms</div>
        </b-col>
        <b-col lg="4" col sm="11" md="4" class="apply">APPLY</b-col>
      </b-row>
    </div>
    <b-container class="box">
      <b-form @submit.prevent="clear" class="extra">
        <b-row>
          <b-col lg="12" sm="12" md="12" class="col-12">
            Gym name
            <mdb-input type="text" class="inputform"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" sm="6" md="6" class="col-6">
            Select Radius
            <select class="mdb-select md-form filterbackground">
              <option value disabled selected>8 miles</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6" sm="6" md="6" class="col-6">
            Zip code
            <mdb-input type="text" class="inputform"/>
          </b-col>
          <b-col lg="6" sm="6" md="6" class="col-6">
            State
            <select class="mdb-select md-form filterbackground">
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
        <b-row>
          <b-col
            lg="4"
            sm="4"
            md="4"
            class="col-4 checkboxes"
            v-for="( data, index ) in activitynames"
            :key="index"
          >
            <input
              type="checkbox"
              :id="data.id"
              class="custom-control-input"
              v-model="activitychecked"
              :value="data.id"
            >
            <label class="custom-control-label" :for="data.id">{{data.name}}</label>
          </b-col>
        </b-row>
        <center>
          <button type="submit" class="clear">CLEAR ALL</button>
        </center>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mdbInput } from "mdbvue";
export default {
  name: "Filtergyms",
  data() {
    return {
      activitychecked: [],
      activitynames: [
        {
          name: "Gym",
          id: 1
        },
        {
          name: "Pilates",
          id: 2
        },
        {
          name: "Tennis",
          id: 3
        },
        {
          name: "Swimming",
          id: 4
        },
        {
          name: "Fencing",
          id: 5
        },
        {
          name: "Personal Training",
          id: 6
        },
        {
          name: "Yoga",
          id: 7
        },
        {
          name: "Squash",
          id: 8
        },
        {
          name: "Cycling",
          id: 9
        },
        {
          name: "Spinning",
          id: 10
        },
        {
          name: "Zumba",
          id: 11
        },
        {
          name: "Martial Arts",
          id: 12
        },
        {
          name: "Kickboxing",
          id: 13
        },
        {
          name: "Physiotherapy",
          id: 14
        },
        {
          name: "Basketball",
          id: 15
        },
        {
          name: "Boot Camp",
          id: 16
        },
        {
          name: "Barre",
          id: 17
        },
        {
          name: "Soccer",
          id: 18
        },
        {
          name: "Dancing",
          id: 19
        },
        {
          name: "Rock Climbing",
          id: 20
        }
      ]
    };
  },
  components: {
    mdbInput
  },
  methods: {
    back: function() {
      this.$router.push("/");
    },
    clear: function() {
      this.activitychecked = [];
    }
  }
};
</script>

<style>
.filtermargin {
  margin: 4% 4% 15% 4%;
}
.header {
  background-color: #162233;
  color: white;
}
.imgs {
  height: 15px;
}
.imd {
  height: 15px;
}
.image {
  float: right;
  display: inline-flex;
  padding-left: 14%;
}
.topheader {
  padding-top: 0.5%;
  width: 100%;
  margin-left: 0px;
}
.apply {
  color: #4877f9;
  text-align: right;
  font-size: 20px;
  padding-right: 3%;
}
.headerbottom {
  width: 100%;
  margin-top: 3%;
  padding-bottom: 2%;
  display: flex;
  margin: auto;
}
.lefttext {
  font-size: 23px;
  font-family: "dejavu sans";
  display: flex;
}
.icon {
  margin-left: 4%;
  margin-top: auto;
  margin-bottom: auto;
  color: blue;
}
.filterbackground {
  width: 100%;
  background-color: white;
  color: gray;
  border: none;
  border-bottom: 1px solid #ced4da;
  box-shadow: 0 1px 0 0 #ced4da;
}
.md-form {
  width: 100%;
}
.inputform {
  box-shadow: 0 1px 0 0 #ced4da;
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
  padding-right: 0px;
  border-bottom: 4px solid #4877f9;
}
.amenities {
  padding-left: 0px;
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
    font-size: 10px;
    padding-left: 7%;
  }
  .image {
    padding-left: 38%;
  }
  .lefttext {
    font-size: 21px;
  }
  .apply {
    font-size: 15px;
  }
}
@media only screen and (max-width: 320px) {
  .h3heading {
    font-size: 17px;
  }
  .lefttext {
    font-size: 18px;
  }
  .custom-control-label {
    margin-left: 20%;
    padding-left: 0%;
  }
  .checkboxes {
    font-size: 10px;
    margin-top: 3%;
    padding-left: 9%;
  }
}
</style>
