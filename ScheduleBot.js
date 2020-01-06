//converts milliseconds to hours
function msToH(milliseconds) {
    var milliseconds = Number(milliseconds)/1000;
    var hours = Math.floor(milliseconds / 3600);
    return hours;
}

var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var locale = args[1]
       
        args = args.splice(1);
        switch(cmd) { 
                               
            case 'schedule':
                var weekdays = 
                ['Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                var sched = [
                [0, 10, 15],
                [1, 10],
                [2, 16],
                [3, "off"],
                [4, 10],
                [5, 16],
                [6, "off"]];
                
                try {
                var fmtTokyo = new Date().toLocaleString("en-US",
                    {timeZone: "Asia/Tokyo"});
                var fmtLocal = new Date().toLocaleString("en-US",
                    {timeZone: locale});
                var timeTokyo = new Date(fmtTokyo);
                var timeLocal = new Date(fmtLocal);
                var timeDiff = msToH(timeTokyo.getTime() - timeLocal.getTime());
                timeLocal.setHours(timeLocal.getHours()+2);
                
                var banner = 
                    "Time zone difference to Tokyo is: "+timeDiff+" hours.\n"+
                    timeLocal+"\n--=======================================--\n";
                                
                for(var i = 0; i < sched.length; i++){
                    if((sched[i][1] - timeDiff) < 0){
                        //Switch the day of week if we go overtime
                        if(sched[i][0] == 0){
                            sched[i][0] = 6; //Sunday edge case
                        }else{
                            sched[i][0] = sched[i][0] - 1;}
                        sched[i][1] = sched[i][1] - timeDiff + 24;
                    }else{
                        sched[i][1] = sched[i][1] - timeDiff;}
                    //Substitue in txt for numerical and remove off times
                    sched[i][0] = weekdays[sched[i][0]];
                    if(sched[i][1].toString() != "NaN"){
                        if(sched[i][2]){
                            banner += 
                            "**"+sched[i][0]+": **"+sched[i][1]+
                            ":"+sched[i][2]+"\n";
                        }else{
                            banner += 
                            "**"+sched[i][0]+": **"+sched[i][1]+
                            ":00\n";
                }}}
               
                bot.sendMessage({
                    to: channelID,
                    message: banner
                });
                } catch(e) {
                bot.sendMessage({
                    to: channelID,
                    message: "Sorry, \""+locale+"\" is not a valid location."
                });
                }
            break;
         }
     }
});

//TODO: Create schedule setters; allow for conversion from timezones other than Tokyo;
