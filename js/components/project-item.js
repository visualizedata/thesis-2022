Vue.component('project-item', {
  data: function () {
    return {}
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
    playVideo: function (url) {
      console.log(url)
      var localDownloadPath = 'web/assets'
      var player = document.getElementById('videoPlayer')
      var videoSource = document.getElementById('videoSource')
      var localSource = document.getElementById('localSource')

      player.pause()

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

    <p class="f5 design-black measure">{{ description | truncate(200, '...') }}</p>
    
    <button @click="playVideo(video)"><i class='fa fa-play-circle' style='font-size:16px'></i>&nbsp; PLAY VIDEO</button>
    <a :href="repository"><img data-toggle='GitHub' title='Source' src="img/GitHub.png" style="margin-top:12px;width:13px">&nbsp; GITHUB</a>
  </div>
</div>`
})
