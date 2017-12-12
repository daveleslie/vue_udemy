new Vue({
  el: "#exercise",
  data: {
    name: "Dave",
    age: 32,
    image: 'https://snipcart.com/media/10175/what-is-vuejs-definition.png'
  },
  methods: {
    random : function() {
      return Math.random();
    }
  }
});