let instance = new TypeIt('#typing', {
  speed: 90,
  lifelike: false,
  cursor: true,
  waitUntilVisible: true,
  afterComplete: function(instance){
    instance.destroy();
    instance = new TypeIt('#ttm', {
      speed: 90,
      lifelike: false,
      cursor: true,
      autoStart: false,
      afterComplete: function(instance){
        instance.destroy();
        new TypeIt('#ttm2', {
          strings: ["Computer Science.", "art and animation.", 
          "inclusive storytelling.", "environmentalism.", "collaborative learning."],
          speed: 90,
          lifelike: false,
          cursor: true,
          breakLines: false,
          autoStart: true,
          loop: true
        });
      }
    })
    .break()
    .type('Talk to me about ');    
  }
})
.type('Hi, I\'m Jen!')
.pause(1000)