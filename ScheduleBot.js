function msToH(milliseconds) {
    var milliseconds = Number(milliseconds)/1000;
    var hours = Math.floor(milliseconds / 3600);
    return hours;
}

function arrayContains(arr, searchFor){
    if(typeof arr.includes == 'undefined'){
        var arrLength = arr.length;
        for (var i = 0; i < arrLength; i++) {
            if (arr[i] === searchFor) {
                return true;
            }
        }
        return false;
    }
    return arr.includes(searchFor);
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

var weekdays = 
    ['Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday'];
//Our schedule goes here, format is:
//Weekday code (0 = monday), hours (in 24), minutes, comments]
var mysched = [
    [0, 10, 15, "jukebox sesh!"],
    [0, "off", 30],
    [1, 10, 00],
    [2, 16, 00],
    [3, "off", 0],
    [4, 10, 05],
    [5, 16, 0],
    [6, "off", 0]];

var admins = 
    ["User IDs go here",
    ];

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        //var locale = args[1];
       
        args = args.splice(1);
        switch(cmd) {            
            case 'addadmin': 
            try{
                if(arrayContains(admins, userID)){
                    admins.push(args[0]);
                    bot.sendMessage({
                    to: channelID,
                    message: "Success. Added: "+args[0]
                });
                }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "Sorry, you do not have permission to use that command."
                });}
                } catch(e) {
                bot.sendMessage({
                to: channelID,
                message: "Something went wrong..."
                });
                }
            break;
            
            case 'delstream': 
            try{
                if(arrayContains(admins, userID)){
                    if(args[0] < mysched.length){
                        var toRem = mysched[args[0]];
                        var banner = weekdays[toRem[0]]+" "+toRem[1]+":"+toRem[2];
                        mysched.splice(args[0], 1);                  
                        
                        bot.sendMessage({
                        to: channelID,
                        message: "Success. Removed: "+banner
                    });
                    }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "No stream found at index: "+args[0]
                });}
                }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "Sorry, you do not have permission to use that command."
                });}
                } catch(e) {
                bot.sendMessage({
                to: channelID,
                message: "Something went wrong..."
                });
                }
            break;
               
            case 'addstream':
                try{
                if(arrayContains(admins, userID)){
                    if(args[0] < 0 || args[0] > 06 ||
                       args[1] < 0 || args[1] > 23 ||
                       args[2] < 0 || args[2] > 59){
                        bot.sendMessage({
                        to: channelID,
                        message: "Invalid time."
                        }); break;
                    }
                    
                    //Grab any comments
                    var comments = "";
                    for(var i = 3; i < args.length; i++){
                        comments = comments+args[i]+" ";
                    }
                    var toAdd = [args[0], args[1], args[2], comments];
                    
                    //Insert our new stream in the correct order
                    var flag = 0;
                    for(var i = 0; i < mysched.length; i++){
                        if(mysched[i][0] == toAdd[0]){
                            mysched.splice(i, 0, toAdd);
                            flag = 1;
                            break;
                        }
                    }if(flag == 0){mysched.push(toAdd);}
                    
                    var banner = 
                        weekdays[args[0]]+" "+args[1]+":"+args[2]+" "+comments;  
                    bot.sendMessage({
                    to: channelID,
                    message: "Success. Added: "+banner
                });
                }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "Sorry, you do not have permission to use that command."
                });}
                } catch(e) {
                bot.sendMessage({
                to: channelID,
                message: "Something went wrong..."
                });
                }
            break;
                
            //Delete the ENTIRE schedule
            case 'clearsched':
                try{
                if(arrayContains(admins, userID)){
                    sched = [];
                    bot.sendMessage({
                    to: channelID,
                    message: "Success. Schedule cleared."
                });
                }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "Sorry, you do not have permission to use that command."
                });}
                } catch(e) {
                bot.sendMessage({
                to: channelID,
                message: "Something went wrong..."
                });
                }
            break;
           
            case 'timezones':
                var banner = 
                "https://github.com/EanNewton/ScheduleBot/blob/master/timezones";            
                bot.sendMessage({
                to: channelID,
                message: "To view all available timezones visit: <"+banner+">"
                });
            break;         
                               
            case 'schedule':
                var locale = args[0];
                var divider =
                "\n<<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>\n";
                
                if(locale == "help" || locale == "timezones"){
                    if(arrayContains(admins, userID)){
                    bot.sendMessage({
                    to: channelID,
                    message: "Commands are `!timezones` and `!schedule"+
                             " [Continent]/[City]`\n"+divider+
                             "Admin Commands are:\n"+
                             "`!clearsched` to delete the entire schedule.\n\n"+
                             "`!addstream [day] [hours] [minutes] [comments]`"+
                             " to add a stream. [day] is 0-6, 0 being Monday."+
                             " [hours] is 0-23, 0 being Midnight.\n\n"+
                             "`!delstream [index]` to delete the nth stream"+
                             " from schedule. Index = 0 would be the stream"+
                             " at the top of the schedule.\n\n"+
                             "`!addadmin [User ID]` adds an admin to the bot's"+
                             " list. To acquire the ID, turn on Dev Mode in "+
                             "Discord's settings under the Appearance menu, "+
                             "then right click the user and select Copy ID."
                             
                    });
                    }else{
                    bot.sendMessage({
                    to: channelID,
                    message: "Commands are `!timezones` and `!schedule"+
                             " [Continent]/[City]`"
                    });
                    }
                    break;
                }
            
                try {
                var sched = mysched.map(function(arr){
                    return arr.slice();
                });
                
                var fmtTokyo = new Date().toLocaleString("en-US",
                    {timeZone: "Asia/Tokyo"});
                var fmtLocal = new Date().toLocaleString("en-US",
                    {timeZone: locale});
                var timeTokyo = new Date(fmtTokyo);
                var timeLocal = new Date(fmtLocal);
                var timeDiff = msToH(timeTokyo.getTime() - timeLocal.getTime());
                timeLocal.setHours(timeLocal.getHours()+2);
                
                var localDT = ["date", "hours", "minutes", "seconds"];
                localDT[0] = timeLocal.toDateString();
                localDT[1] = timeLocal.getHours();
                localDT[2] = timeLocal.getMinutes();
                localDT[3] = timeLocal.getSeconds();
                for(var i = 1; i < localDT.length; i++){
                    if(localDT[i] < 10){
                        localDT[i] = "0"+localDT[i];
                    }
                }
                
                var banner = 
                    divider+localDT[0]+" "+
                    localDT[1]+":"+localDT[2]+":"+localDT[3]+
                    "\nTime difference from "+locale+" to Tokyo is: "+
                    timeDiff+" hours.\n"+divider;
                                
                for(var i = 0; i < sched.length; i++){
                    //Switch the day of week if we go overtime 
                    if((sched[i][1] - timeDiff) < 0){
                        sched[i][0] = (sched[i][0] == 0) ? 6 : (sched[i][0]-1);
                        sched[i][1] = sched[i][1] - timeDiff + 24;
                    }else{
                        sched[i][1] = sched[i][1] - timeDiff;
                    }
                    //Substitue in txt for numerical and remove off times
                    sched[i][0] = weekdays[sched[i][0]];
                    //Format sched
                    if(sched[i][1].toString() != "NaN"){
                        if(sched[i][2] < 10){
                            sched[i][2] = "0"+sched[i][2];
                        }
                        if(sched[i][1] < 12){
                            if(sched[i][1] == 0){sched[i][1] = 12;}
                            banner += 
                            "**"+sched[i][0]+": **"+sched[i][1]+":"+sched[i][2]+
                            " AM";
                        }else if(sched[i][1] == 12){
                            banner += 
                            "**"+sched[i][0]+": **"+sched[i][1]+":"+sched[i][2]+
                            " PM";
                        }else{
                            sched[i][1] = sched[i][1] - 12;
                            banner += 
                            "**"+sched[i][0]+": **"+sched[i][1]+":"+sched[i][2]+
                            " PM";
                        }
                    //Add special comments
                    banner += (sched[i][3]) ? (" "+sched[i][3]+"\n") : "\n";
                    }
                 }//end FOR sched formatter
               
               //Post our message
                bot.sendMessage({
                    to: channelID,
                    message: banner+divider
                });
                } catch(e) {
                bot.sendMessage({
                    to: channelID,
                    message: "Sorry, \""+locale+"\" is not a valid location."+
                             " Please use `!timezones` for all options.\n"+
                             "Or, try `!schedule help`"
                });
                }
            break;
         }
     }
});
