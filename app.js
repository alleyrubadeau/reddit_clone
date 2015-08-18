var app = angular.module("firstApp", ['ngSanitize']);

app.controller('redditController', function ($scope) {
  $scope.hidecomments = true;
  $scope.posts = [
    {
      title: 'Boston Marathon',
      image: 'http://www.gannett-cdn.com/-mm-/ac1394dbdcca6a36cbf486633b129cd813095ac3/r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2013/05/25/1369499392000-AP-Boston-Marathon-Last-Mile-001-1305251234_4_3.jpg',
      author: 'Alley Rubadeau',
      description: 'LoremLoremLoremLoremLoremvvvvLoremLoremLorem',
      votes: 0,
      date: Date.now(),
      comments: [{person: 'boo', message: 'boo'}]
    }
  ];
  $scope.submitpost = function(post){

    posts.push(
      {
        title: $scope.title,
        image: $scope.image,
        author: $scope.author,
        description: $scope.description,
        comments: [],
        votes: 0,
        date: Date.now()
      }
    )
  }
  $scope.showCommentForm = function () {
    this.hidecomments = false;

  $scope.addComment = function (post) {
          var comment = {};
          comment.person = $scope.person;
          comment.message = $scope.message;
          post.comments.push(comment);
          $scope.person = "";
          $scope.message = "";
    };
  }
  $scope.upvote = function(post) {
     post.votes++
   }
   $scope.downvote = function(post) {

     post.votes--
   }
   $scope.show = function() {
      if ($scope.form === 0) {
        $scope.form = 1
      } else {
        $scope.form = 0;
      }
    };
})
