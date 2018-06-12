<template>
  <div id="app">
    <loading :visible="isVisible" />
    <div class="user-box">
      <avatar :avatar="avatar" />
      <user-box :fullname="fullName" :userid="userId" :homecity="homeCity" :bio="userBio" />
    </div>
    <google-maps :position="position" :venuename="venuePositonName" />
  </div>
</template>

<script>
import Loading from './components/_loading'
import Avatar from './components/_avatar'
import UserBox from './components/_userBox'
import GoogleMaps from './components/_googleMaps'

export default {
  name: 'app',
  data () {
    return {
      foursquareApiToken: '',
      isVisible: true,
      user: [],
      friends: [],
      userPhoto: [],
      venueName: [],
      venueLocation: [],
    }
  },
  components: {
    'loading': Loading,
    'avatar': Avatar,
    'user-box': UserBox,
    'google-maps': GoogleMaps
  },
  created () {
    this.$http.get('https://api.foursquare.com/v2/users/430351441?oauth_token=' + this.foursquareApiToken + '&v=20180612')
        .then((response) => {
          this.user = response.data.response.user
          this.friends = response.data.response.user.friends.groups
          this.userPhoto = response.data.response.user.photo
          this.venueName = response.data.response.user.checkins.items[0].venue
          this.venueLocation = response.data.response.user.checkins.items[0].venue.location

          this.isVisible = false
        });
  },
  computed: {
    avatar () {
      return this.userPhoto.prefix + '128x128' + this.userPhoto.suffix;
    },
    fullName () {
      return this.user.firstName + ' ' + this.user.lastName;
    },
    userId () {
      return this.user.id;
    },
    homeCity () {
      return this.user.homeCity;
    },
    userBio () {
      return this.user.bio;
    },
    position () {
      return {lat: this.venueLocation.lat, lng: this.venueLocation.lng}
    },
    venuePositonName () {
      return this.venueName.name
    }
  },
}
</script>

<style lang="sass">
body
  font-family: Helvetica, Arial, sans-serif
  text-align: center
  overflow-x: hidden
  background-color: #ecf0f1
  margin: 0
  padding: 0

#app
  position: relative
  height: 100vh

.user-box
  padding-top: 30px
  padding-bottom: 30px
  
</style>
