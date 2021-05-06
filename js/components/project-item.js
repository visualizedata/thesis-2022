Vue.component('project-item', {
  data() {
    return {
      trunc: ''
    }
  },

  props: [
    'title',
    'subtitle',
    'description',
    'url',
    'author',
    'image',
    'author_url',
    'repository',
    'video'
  ],
  methods: {
    shorten: function (len) {
      if (this.description.length > len) {
        this.trunc = this.description.substring(0, len)
        this.trunc = this.trunc.replace(/\w+$/, '')
        this.trunc += '... '
      } else {
        this.trunc = this.description
      }
    },
    expand: function() {
      this.trunc = this.description

    },
    playVideo: function (url) {
      console.log(url)
      var localDownloadPath = 'web/assets'
      var player = document.getElementById('videoPlayer')
      var videoSource = document.getElementById('videoSource')
      var localSource = document.getElementById('localSource')

      player.pause()
      player.muted = true

      videoSource.src = url

      var file = url.replace(/^.*[\\\/]/, '')
      console.log('video url', file)
      var person = $('div').find(`[video-src='${url}']`).prev().attr('id')
      console.log('person', person)

      localSource.src = localDownloadPath + '/' + person + '/' + '/' + file

      player.load()
      player.play()

      if (player.requestFullscreen) {
        player.requestFullscreen()
      }
    }
  },

  mounted() {
    this.shorten(500)
  },

  template: `<div class="bg-white db mb4 shadow-2">

  <div class="w-100">
    <img
      :src="image"
      class="w-100 pointer"
      v-on:click="window.open(url)"
    />
  </div>

  <div class="pa3">
    <div class="flex align-top justify-between">
      <div>
        <a
          :href="author_url"
          class="dib dim design-black mb2 f5 link"
          >{{ author }}</a>
        <h1 class="f4 mt0 mb0">{{ title }}</h1>
        <p class="f4 design-black mt3 mb0">{{ subtitle }}</h1>
      </div>

      <div class="flex-shrink-0">
        <a
          class="dib dim link bg-red pv2 ph2 white br3 f6"
          :href="url"
          >Launch Project</a>
      </div>
    </div>

    <p class="f5 design-black measure">{{ this.trunc }} <button v-if="this.description.length != this.trunc.length" @click="expand">Read more<button/></p>
    
    <button @click="playVideo(video)"><i class='fa fa-play-circle' style='font-size:16px'></i>&nbsp; PLAY VIDEO</button>
    <button @click="window.location.href=repository" :href="repository"><img data-toggle='GitHub' title='Source' src="img/GitHub.png" style="margin-top:13px;width:15px">&nbsp; GITHUB</button>
  </div>
</div>`
})
