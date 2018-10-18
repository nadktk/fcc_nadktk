let quotes = [
  {
    quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    author: "St. Jerome"
  },
  {
    quote: "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
    author: "Theodore Isaac Rubin"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha"
  },
  {
    quote: "Your positive action combined with positive thinking results in success.",
    author: "Shiv Khera"
  },
  {
    quote: "Education is the key to success in life, and teachers make a lasting impact in the lives of their students.",
    author: "Solomon Ortiz"
  },
  {
    quote: "Change your life today. Don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir"
  },
   {
    quote: "Calm mind brings inner strength and self-confidence, so that's very important for good health.",
    author: "Dalai Lama"
  },
  {
    quote: "Leadership is practiced not so much in words as in attitude and in actions.",
    author: "Harold S. Geneen"
  },
  {
    quote: "What happens is not as important as how you react to what happens.",
    author: "Ellen Glasgow"
  },
  {
    quote: "We must accept finite disappointment, but never lose infinite hope.",
    author: "Martin Luther King, Jr."
  },
    {
    quote: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson"
  },
    {
    quote: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson"
  },
    {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney"
  },
    {
    quote: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
    {
    quote: "Be happy for this moment. This moment is your life.",
    author: "Omar Khayam"
  },
    {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein"
  }
];

let colors = ["#9061c2", "#02779e", "#14b694", "#251137", "#4c6c0a", "#c86f98", "#8cb56b", "#0c152a", "#7c71c5", "#38435e", "#4b2750", "#3f6d78", "#a12c0a", "#8b104e", "#524665", "#465a6d"];

const getRandomQuote = () => {
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  let oldColor = $('body').css('background-color');
  function rgbToHex (c) { 
    let rgb = c.substring(0, c.length - 1).slice(4).split(', ');
    r = parseInt(rgb[0], 10).toString(16);
    g = parseInt(rgb[1], 10).toString(16);
    b = parseInt(rgb[2], 10).toString(16);
    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    return ("#" + r + g + b);
  }
  let oldColorHex = rgbToHex (oldColor);
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  while (newColor === oldColorHex) newColor = colors[Math.floor(Math.random() * colors.length)];
  
  $('body').css('background-color', newColor);
  $('.btn').css("background-color", newColor);
  
  $('#text').html("&laquo;&nbsp;" + currentQuote.quote + "&nbsp;&raquo;");
  $('#author').html("&mdash;&nbsp;&nbsp;"+currentQuote.author);
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote.quote + '" ' + currentQuote.author));
};

$(document).ready(getRandomQuote);