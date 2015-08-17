var app = angular.module("firstApp", []);

app.controller('redditController', function ($scope) {
  $scope.posts = [
    {
      title: 'Boston Marathon',
      image: 'http://www.gannett-cdn.com/-mm-/ac1394dbdcca6a36cbf486633b129cd813095ac3/r=x404&c=534x401/local/-/media/USATODAY/USATODAY/2013/05/25/1369499392000-AP-Boston-Marathon-Last-Mile-001-1305251234_4_3.jpg',
      author: 'Alley Rubadeau',
      description: 'LoremLoremLoremLoremLoremvvvvLoremLoremLorem'

    }
  ];
  $scope.submitpost = function(post){
    $scope.posts.push(
      {
        title: $scope.title,
        image: $scope.image,
        author: $scope.author,
        description: $scope.description,
        comments: []

      }
    )
  }
})
