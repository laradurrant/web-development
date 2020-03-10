  var theme = [
    "e-commerce",
    "business",
    "finance",
    "dragon",
    "imaginary animal",
    "money",
    "accounting",
    "politics",
    "history",
    "math",
    "music",
    "medicine",
    "coding",
    "cooking",
    "photography",
    "zombie",
    "vampire",
    "sci-fi",
    "space",
    "cyborg", 
    "holiday",
    "book",
    "story",
    "movie",
    "class",
    "sleep",
    "ocean",
    "music",
    "nature",
    "cat",
    "dog",
    "art",
    "recipe",
    "navigation",
    "spaceship",
    "language",
    "coffee",
    "tea",
    "food",
    "self-care",
    "chore",
    "plant",
    "grocery",
    "shopping",
    "product",
    "customer",
    "e-mail",
    "cybersecurity",
    "science",
    "trivia",
    "fashion",
    "sports",
    "dream",
    "news",
    "event"
  ]
  var product = [
    "browser",
    "database",
    "calendar",
    "scheduler",
    "social media site",
    "newsletter",
    "app",
    "chatbot",
    "server",
    "game",
    "health tracker",
    "mapper",
    "calculator",
    "gallery",
    "generator",
    "randomizer",
    "dictionary",
    "tracker",
    "message board",
    "community site",
    "puzzle"
  ]
  var list = [];
  var colors = ["0e0d37", "13156c", "471557", "921c58", "80071A", "074B4C"];
  var themeElem = document.getElementById('top');
  var productElem = document.getElementById('bottom');
  var button = document.getElementById('button');
  
  function randomize(){
    button.disabled = true;
    changeColor();
    var item = changeText(themeElem, theme) + " " + changeText(productElem, product);
    setTimeout(function() { button.disabled = false; }, 1000);
  }
  
  function changeColor(){
    var  rnd = Math.floor(Math.random() * colors.length); 
    document.body.style="background: #" + colors[rnd];
  }
  
  function changeText(element, theme){
    var  rnd = Math.floor(Math.random() * theme.length); 
    element.innerText = theme[rnd];
    return theme[rnd];
  }
  
  randomize();
  