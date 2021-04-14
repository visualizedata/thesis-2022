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
    'author_url'
  ],

  methods: {},

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

    <p class="f5 design-black measure">{{ description }}</p>
    
    <button><i class='fa fa-play-circle' style='font-size:16px'></i>&nbsp; PLAY VIDEO</button>
    <img data-toggle='GitHub' title='Source' src="img/GitHub.png" style="margin-top:12px;width:13px">&nbsp; GITHUB</a>
  </div>
</div>`
})
