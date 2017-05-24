$.ajax('http://localhost:3000/users', {
  type: 'get',
  dataType: 'json'
}).done(function (json) {
  var node = json['users'];
  console.log(node.toString());
  vm.users = node.toString();
}).fail(function (e) {
  console.log(e.toString());
});

var vm = new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js app!',
    docsURL: 'http://vuejs.org/guide/',
    gitterURL: 'https://gitter.im/vuejs/vue',
    forumURL: 'http://forum.vuejs.org/',
    ajaxTest: 'localhost:3000/users叩く',
    users: ''

  },
  methods: {
    humanizeURL: function humanizeURL(url) {
      return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
  }
});
var footer = new Vue({
  el: 'footer',
  data: {
    footer: 'HAL&Copy;',
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbIiQiLCJhamF4IiwidHlwZSIsImRhdGFUeXBlIiwiZG9uZSIsImpzb24iLCJub2RlIiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIiwidm0iLCJ1c2VycyIsImZhaWwiLCJlIiwiVnVlIiwiZWwiLCJkYXRhIiwiZ3JlZXRpbmciLCJkb2NzVVJMIiwiZ2l0dGVyVVJMIiwiZm9ydW1VUkwiLCJhamF4VGVzdCIsIm1ldGhvZHMiLCJodW1hbml6ZVVSTCIsInVybCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxJQUFGLENBQU8sNkJBQVAsRUFBc0M7QUFDcENDLFFBQU0sS0FEOEI7QUFFcENDLFlBQVU7QUFGMEIsQ0FBdEMsRUFHR0MsSUFISCxDQUdRLFVBQUNDLElBQUQsRUFBVTtBQUNoQixNQUFJQyxPQUFPRCxLQUFLLE9BQUwsQ0FBWDtBQUNBRSxVQUFRQyxHQUFSLENBQVlGLEtBQUtHLFFBQUwsRUFBWjtBQUNBQyxLQUFHQyxLQUFILEdBQVdMLEtBQUtHLFFBQUwsRUFBWDtBQUNELENBUEQsRUFPR0csSUFQSCxDQU9RLFVBQUNDLENBQUQsRUFBTztBQUNiTixVQUFRQyxHQUFSLENBQVlLLEVBQUVKLFFBQUYsRUFBWjtBQUNELENBVEQ7O0FBV0EsSUFBTUMsS0FBSyxJQUFJSSxHQUFKLENBQVE7QUFDakJDLE1BQUksTUFEYTtBQUVqQkMsUUFBTTtBQUNKQyxjQUFVLDZCQUROO0FBRUpDLGFBQVMseUJBRkw7QUFHSkMsZUFBVyw2QkFIUDtBQUlKQyxjQUFVLHlCQUpOO0FBS0pDLGNBQVUsd0JBTE47QUFNSlYsV0FBTzs7QUFOSCxHQUZXO0FBV2pCVyxXQUFTO0FBQ1BDLGlCQUFhLHFCQUFTQyxHQUFULEVBQWM7QUFDekIsYUFBT0EsSUFBSUMsT0FBSixDQUFZLGNBQVosRUFBNEIsRUFBNUIsRUFBZ0NBLE9BQWhDLENBQXdDLEtBQXhDLEVBQStDLEVBQS9DLENBQVA7QUFDRDtBQUhNO0FBWFEsQ0FBUixDQUFYIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkLmFqYXgoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VycycsIHtcbiAgdHlwZTogJ2dldCcsXG4gIGRhdGFUeXBlOiAnanNvbicsXG59KS5kb25lKChqc29uKSA9PiB7XG4gIGxldCBub2RlID0ganNvblsndXNlcnMnXTtcbiAgY29uc29sZS5sb2cobm9kZS50b1N0cmluZygpKTtcbiAgdm0udXNlcnMgPSBub2RlLnRvU3RyaW5nKCk7XG59KS5mYWlsKChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSk7XG59KTtcblxuY29uc3Qgdm0gPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgZGF0YToge1xuICAgIGdyZWV0aW5nOiAnV2VsY29tZSB0byB5b3VyIFZ1ZS5qcyBhcHAhJyxcbiAgICBkb2NzVVJMOiAnaHR0cDovL3Z1ZWpzLm9yZy9ndWlkZS8nLFxuICAgIGdpdHRlclVSTDogJ2h0dHBzOi8vZ2l0dGVyLmltL3Z1ZWpzL3Z1ZScsXG4gICAgZm9ydW1VUkw6ICdodHRwOi8vZm9ydW0udnVlanMub3JnLycsXG4gICAgYWpheFRlc3Q6ICdsb2NhbGhvc3Q6MzAwMC91c2Vyc+WPqeOBjycsXG4gICAgdXNlcnM6ICcnLFxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBodW1hbml6ZVVSTDogZnVuY3Rpb24odXJsKSB7XG4gICAgICByZXR1cm4gdXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4iXX0=