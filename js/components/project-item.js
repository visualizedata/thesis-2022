Vue.component('project-item', {
  data() {
    return {
      readMore: `<a @click="expand">Read more<a/>`
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
  computed: {
    truncated: function () {
      // clamp = clamp || '...'
      // var node = document.createElement('div')
      // node.innerHTML = text
      // var content = node.textContent
      // console.log(text)
      let len = 420
      let trunc = ''
      if (this.description.length > len) {

        trunc = this.description.substring(0, len);
        trunc = trunc.replace(/\w+$/, '');
        
        trunc += '... ' + this.readMore;
      }
      return trunc
    }
  },
  methods: {
    expand: function() {
      console.log('expand');
    },
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

    <p v-html="truncated  " class="f5 design-black measure">{{ this.truncated }}</p>
    
    <button @click="playVideo(video)"><i class='fa fa-play-circle' style='font-size:16px'></i>&nbsp; PLAY VIDEO</button>
    <button @click="window.location.href=repository" :href="repository"><img data-toggle='GitHub' title='Source' src="img/GitHub.png" style="margin-top:13px;width:15px">&nbsp; GITHUB</button>
  </div>
</div>`
})
