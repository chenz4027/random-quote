var quoteDatabase = [
	{
		quote : "Be yourself; everyone else is already taken.",
		author : "Oscar Wilde"
	},
	{
		quote : "So many books, so little time.",
		author : "Frank Zappa"
	},
	{
		quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		author : "Dr. Seuss"
	},
	{
		quote : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
		author : "J.K. Rowling"
	},
	{
		quote : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		author : "Maya Angelou"
	},
	{
		quote : "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
		author : "Martin Luther King Jr."
	},
	{
		quote : "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
		author : "Maurice Switzer"
	},
	{
		quote : "The fool doth think he is wise, but the wise man knows himself to be a fool.",
		author : "William Shakespeare"
	},
	{
		quote : "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
		author : "Mark Twain"
	},
	{
		quote : "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
		author : "Bil Keane"
	},
	{
		quote : "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
		author : "Douglas Adams"
	},
	{
		quote : "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
		author : "Neil Gaiman"
	},
	{
		quote : "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
		author : "Lao Tzu"
	},
	{
		quote : "If you can't explain it to a six year old, you don't understand it yourself.",
		author : "Albert Einstein"
	},
	{
		quote : "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
		author : "Groucho Marx"
	},
	{
		quote : "There is no friend as loyal as a book.",
		author : "Ernest Hemingway"
	},
	{
		quote : "Success is not final, failure is not fatal: it is the courage to continue that counts.",
		author : "Winston S. Churchill"
	},
	{
		quote : "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
		author : "Marilyn Monroe"
	},
	{
		quote : "First they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.",
		author : "Nicholas Klein"
	},
	{
		quote : "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
		author : "John Lennon"
	}
]

var dbLength = quoteDatabase.length;


// for(var i = 0; i < dbLength; i++){
// 	console.log(quoteDatabase[i].quote);
// 	console.log(quoteDatabase[i].author);
// }

var icons = document.querySelectorAll(".fa");
var body = document.querySelector("body");

var btn = document.querySelector("button");


// btn.addEventListener("click", function(){
// 	var num = generateNum();



// 	quote.textContent = quoteDatabase[num].quote;
// 	author.textContent = quoteDatabase[num].author;
// 	var color = generateColor();
// 	// quote.style.color = color;
// 	// author.style.color = color;
// 	body.style.color = color;
// 	body.style.background = color;
// 	btn.style.background = color;


// });



$("button").click(function(){

	var num = generateNum();
	var quote = quoteDatabase[num].quote;
	var author = quoteDatabase[num].author;
	var color = generateColor();

	$("button").css({
		"background": color,
		transition: "2s"
	});

	$("i").css({
		"color": color,
		transition: "2s"
	});

	$(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=%22" + quote + "%22 " + author);

	$("body").css({
		"background-color": color,
		transition: "2s"
	});

	$("#subtitle").fadeOut(500, function(){
		var author = quoteDatabase[num].author;
		$(this).html("- <span id=\"author\">" + author + "</span>").fadeIn();
		$(this).css({
			"color": color
		});
		
	});


	$("h1").fadeOut(500, function(){
		$(this).html("<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i></span> <span id=\"quote\">" + quote + "</span>").fadeIn();
		$(this).css({
			"color": color
		});
		
	});





	

		




});



function generateNum(){
	var number = Math.floor(Math.random() * dbLength);
	return number;	
}

function generateColor(){
	var rgbColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	return rgbColor;
}

