var magic_8Ball_Answers = ["As I see it, yes.", "Ask again later." , "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."
,"Don't count on it." , "It is certain.", "It is decidedly so." ,"Most likely."
,"My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good."
, "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt."
, "Yes.", "Yes – definitely.", "You may rely on it."];

// This function (e.g., randomize_arrayElements()) is responsible for randomly generating one element from the magic_8Ball_Answers array (e.g., to produce a single answer). 
function randomize_arrayElements(items)
{
  
    return items[Math.floor(Math.random()*items.length)];
     
}

console.log(randomize_arrayElements(magic_8Ball_Answers) + " \nTry again."); // Printing out a random answer to the user. 