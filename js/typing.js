let instance = new TypeIt('#ttm', {
  speed: 90,
  lifelike: false,
  cursor: true,
  waitUntilVisible: true,
  afterComplete: function(instance){
    instance.destroy();
    new TypeIt('#ttm2', {
      strings: ["Computer Science.", "art and animation.", 
      "inclusive storytelling.", "environmentalism."],
      speed: 90,
      lifelike: false,
      cursor: true,
      breakLines: false,
      autoStart: true,
      loop: true
    });
  }
})
.pause(1000)
.type('Talk to me about ');