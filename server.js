const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token

var Facts = {};
  Facts[0] = "The birth of the waffle dates back to the middle ages, where they were cooked over a fire using two metal plates with wooden handles. The plates back then often had the grid pattern we know today, but some waffles had fancier designs, like a coat of arms.";
  Facts[1] = "The patent for the waffle iron was submitted by Cornelius Swarthout in 1869.";
  Facts[2] = "August 24th is National Waffle Day.";
  Facts[3] = "The word “waffle” first appears in the English language in 1725.";
  Facts[4] = "The World’s Record for the largest waffle weighs 110 lb 3.68 oz and was created by Stichting Gouda Oogst (Netherlands) in Nieuwe Markt, Gouda, Netherlands, on 29 June 2013. The waffle had a diameter of 8 ft 1.24 in.";
  Facts[5] = "Patrick Bertoletti holds ate 29 Waffles in ten minutes in 2007, beating fellow eating champion, Joey Chestnut in the World Waffle Eating Championships.";

bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});



let t = 0
let clock = 300
let tf = 0

var myVar1 = setInterval(myTimer1, 300000);

function myTimer1() {
  t = 0;
  clock = 300;
}

var myVar2 = setInterval(myTimer2, 1000);

function myTimer2() {
  clock = clock - 1;
}



bot.on('messageCreate', (msg) => {                     // When a message is created
    if((msg.content.startsWith('waffle')||msg.content.startsWith('Waffle'))&&(t === 0)) {                 // If the message content includes "1337"
        let x = Math.round(Math.random() * 20)
        bot.createMessage(msg.channel.id,'https://cdn.glitch.com/c50fd225-5338-4ee0-a059-41c67308d193%2Fdownload-'+x+'.jpg?1530351001813 \n'+Facts[Math.round(Math.random() * 6)]);  // Send a message in the same channel with "damn it"
        t = 1;
    }
    else if((msg.content.startsWith('waffle')||msg.content.startsWith('Waffle'))&&(t === 1)){
      bot.createMessage(msg.channel.id, 'Wait Goddamit, '+clock+' seconds left');
    }
});








bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('yes or no?')||msg.content.includes('Yes or no?')) {                 // If the message content includes "1337"`````````````````
      
        tf = Math.round(Math.random() * 1)
        if(tf === 0){
          bot.createMessage(msg.channel.id,'No');
        }
        else if(tf === 1){
          bot.createMessage(msg.channel.id,'Yes');
        }
    }
});



bot.on()


 
//bot.connect();                                         // Get the bot to connect to Discord
