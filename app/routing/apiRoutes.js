var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // loop through and add up scores
  // compare scores to current score
  // push to modal
  app.post("/api/friends", function(req, res) {
      // friendsData.push(req.body);
      // res.json(true);
    var loserScore = req.body.answer
    var compareArray = []
    var newBff = 0

    for (var i = 0; i < friendsData.length; i++) {
        var scoresDiff = 0
        for (var j = 0; j < friendsData.length; j ++) {
          scoresDiff += Math.abs(parseInt(friendsData[i].answer) - parseInt(loserScore[i])) 
        }
        compareArray.push(scoresDiff)
    }

    for (var i = 0; i < compareArray.length; i++) {
      if (compareArray[i] <= compareArray[newBff]){
          newBff = i
      }
    }
        
    var bestie = friendsData[newBff]
    res.json(bestie)
    console.log(bestie)
    friendsData.push(req.body);
    
  });
};