<template>
  <div class="google-maps">
    <gmap-map
    :center="position"
    :zoom="12"
    style="width:100%;  height: 400px;"
  >
      <gmap-info-window
        :position="position">
        <div>
          <b>Your Location</b> <br>
          {{ venuename }}
        </div>
    </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  props: ['position', 'venuename']
}
</script>
