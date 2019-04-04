<template>
  <div class="gymmargin">
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
        <b-col lg="8" col sm="1" md="8" class="textleft">
          <i class="fas fa-arrow-left arrowicon" v-on:click="rootpage"></i>
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
      <b-container class="gymdata">
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
            <b-col
              lg="4"
              sm="4"
              md="4"
              class="col-4"
              v-for="data in activitynames"
              :key="data.id"
            >{{data.name}}</b-col>
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
  name: "Gymdetail",
  data() {
    return {
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
  methods: {
    rootpage: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.gymmargin {
  margin: 4% 4% 60% 4%;
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
.topimage {
  float: right;
  display: inline-flex;
  padding-left: 14%;
}
.tophead {
  padding-top: 0.5%;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
}
.headerbottom {
  width: 100%;
  margin-top: 3%;
  padding-bottom: 2%;
}
.textleft {
  display: flex;
  font-size: 30px;
  font-family: dejavu sans;
}
.text {
  margin-left: 3%;
}
.gymimage {
  width: 100%;
}
.gymdata {
  background-color: #162233;
  color: white;
  max-width: 100%;
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
  margin-left: 0px;
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
  margin-left: 4%;
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
@media only screen and (max-width: 425px) {
  .textleft {
    font-size: 18px;
  }
  .topimage {
    padding-left: 45%;
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
@media only screen and (max-width: 320px) {
  .textleft {
    font-size: 16px;
  }
  .heading {
    font-size: 14px;
  }
  .content {
    font-size: 9.9px;
  }
  .position {
    top: 5px;
  }
  .purchase {
    font-size: 13px;
  }
}
</style>
