//Questions array

var questions = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.", 
    "You find it easy to stay relaxed and focused even when there is some pressure.", 
    "You rarely do something just out of sheer curiosity.", 
    "People can rarely upset you.", 
    "It is often difficult for you to relate to other people’s feelings.", 
    "In a discussion, truth should be more important than people’s sensitivities.", 
    "You rarely get carried away by fantasies and ideas.", 
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.", 
    "You feel more energetic after spending time with a group of people."
]

// Populate questions
function survey () {
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = $('<div class="card">')
        var surveyQuestion = $('<div class="card-title">')
        var surveyAnswer = $('<select class="form-control" id="friend-answers">')
        surveyQuestion.append($('<h2><br>').append(questions[i]))
        surveyAnswer.append($('<option>1</option>')).val(1)
        surveyAnswer.append($('<option>2</option>')).val(2)
        surveyAnswer.append($('<option>3</option>')).val(3)
        surveyAnswer.append($('<option>4</option>')).val(4)
        surveyAnswer.append($('<option>5</option>')).val(5)
        questionDiv.append(surveyQuestion)
        questionDiv.append(surveyAnswer)
        $('#questionsOutput').append(questionDiv)
    }
}
survey()



// json
// {
//   "name": "Michael",
//   "photo": "https://s25117.pcdn.co/wp-content/uploads/2015/07/6004-450x318.jpg",
//   "scores": [
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }