$.ajax('http://localhost:3000/users', {
  type: 'get',
  dataType: 'json',
}).done((json) => {
  let node = json['users'];
  console.log(node.toString());
  vm.users = node.toString();
}).fail((e) => {
  console.log(e.toString());
});

const vm = new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    gitterURL: 'https://gitter.im/vuejs/vue',
    forumURL: 'http://forum.vuejs.org/',
    ajaxTest: 'localhost:3000/users叩く',
    users: '',

  },
  methods: {
    humanizeURL: function(url) {
      return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    },
  },
});
var footer = new Vue({
  el: 'footer',
  data: {
    footer: 'HAL&Copy;',
  }
});

