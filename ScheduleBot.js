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

function getCities(continent){
    switch(continent){
        case 'Africa':
        return "Abidjan, Accra, Bissau, Cairo, Casablanca, Ceuta, El_Aaiun, "+
               "Johannesburg, Juba, Khartoum, Lagos, Maputo, Monrovia, "+
               "Nairobi, Njdamena, Sao_Tome, Tripoli, Tunis, Windhoek";
        
        break;
        case 'America':
        return "Adak, Anchorage, Argentina/Buenos_Aires, Argentina/Catamarca, "+
               "Argentina/Cordoba, Argentina/Jujuy, Argentina/La_Rioja, "+
               "Argentina/Mendoza, Argentina/Rio_Gallegos, Argentina/Salta, "+
               "Argentina/San_Juan, Argentina/San_Luis, Argentina/Tucuman, "+
               "Argentina/Ushuaia, Asuncion, Atikokan, Bahia, Bahia_Banderas, "+
               "Barbados, Belem, Belize, Blanc-Sablon, Boa_Visita, Bogota, "+
               "Boise, Cambridge_Bay, Campo_Grande, Cancun, Caracas, Cayenne, "+
               "Chicago, Chihuahua, Costa_Rica, Creston, Cuiaba, Curacao, "+
               "Danmarkshaven, Dawson, Dawson_Creek, Denver, Detroit, Edmonton, "+
               "Eirunepe, El_Salvador, Fortaleza, Fort_Nelson, Glace_Bay, "+
               "Godthab, Goose_Bay, Grand_Turk, Guatemala, Guayaquil, Guyana, "+
               "Halifax, Havana, Hermosillo, Indiana/Indianapolis, "+
               "Indiana/Knox, Indiana/Marengo, Indiana/Petersburg, "+
               "Indiana/Tell_City, Indiana/Vevay, Indiana/Vincennes, "+
               "Indiana/Winamac, Inuvik, Iqaluit, Jamaica, Juneau, "+
               "Kentucky/Louisville, Kentucky/Monticello, La_Paz, Lima, "+
               "Los_Angeles, Maceio, Managua, Manaus, Martinique, Matamoros, "+
               "Mazatlan, Menominee, Merida, Metlakatla, Mexico_City, "+
               "Miquelon, Moncton, Monterrey, Montevideo, Nassau, New_York, "+
               "Nipigon, Nome, Noronha, North_Dakota/Beulah, "+
               "North_Dakota/Center, North_Dakota/New_Salem, Ojinaja, "+
               "Panama, Pangnirtung, Paramaribo, Phoenix, Port-au-Prince, "+
               "Port_of_Spain, Porto_Velho, Puerto_Rico, Punta_Arenas, "+
               "Rainy_River, Rankin_Inlet, Recife, Regina, Resolute, "+
               "Rio_Branco, Santarem, Santiago, Santo_Domingo, Sao_Paulo, "+
               "Scoresbysund, Sitka, St_Johns, Swift_Current, Tegucigalpa, "+
               "Thule, Thunder_Bay, Tijuana, Toronto, Vancouver, Whitehorse, "+
               "Winnipeg, Yakutat, Yellowknife";
        
        break;
        case 'Antarctica':
        return "Casey, Davis, Macquarie, Mawson, Palmer, Rothera, "+
               "Syowa, Troll, Vostok";
        
        break;
        case 'Asia':
        return "Almaty, Amman, Anadyr, Aqtau, Aqtobe, Ashgabat, Atyrau, "+
               "Baghdad, Baku, Bangkok, Barnaul, Beirut, Bishkek, Brunei, "+
               "Chita, Choibalsan, Colombo, Damascus, Dhaka, Dili, Dubai, "+
               "Dushanbe, Famagusta, Gaza, Hebron, Ho_Chi_Minh, Hong_Kong, "+
               "Hovd, Irkutsk, Jakarta, Jayapura, Jerusalem, Kabul, "+
               "Kamchatka, Karachi, Kathmandu, Khandyga, Kolkata, Krasnoyarsk, "+
               "Kuala_Lumpur, Kuching, Macau, Magadan, Makassar, Manila, "+
               "Nicosia, Novokuznetsk, Novosibirsk, Omsk, Oral, Pontianak, "+
               "Pyongyan, Qatar, Qyzylorda, Riyadh, Sakhalin, Samarkand, "+
               "Seoul, Shanghai, Singapore, Srednekolymsk, Taipei, Tashkent, "+
               "Tbilisi, Tehran, Thimphu, Tokyo, Tomsk, Ulaanbaatar, Urumqi, "+
               "Ust_Nera, Vladivostok, Yakutsk, Yangon, Yekaterinburg, "+
               "Yerevan";
        
        break;
        case 'Atlantic':
        return "Azores, Canary, Cape_Verde, Faroe, Madeira, Reykjavik, "+
               "South_Georgia, Stanley";
        
        break;
        case 'Australia':
        return "Adelaide, Brisbane, Broken_Hill, Currie, Darwin, Eucla, "+
               "Hobart, Lindeman, Lord_Howe, Melbourne, Perth, Sydney";
        
        break;
        case 'Europe':
        return "Amsterdam, Andorra, Astrakhan, Athens, Belgrade, Berlin, "+
               "Brussels, Bucharest, Budapest, Chisinau, Copenhagen, Dublin, "+
               "Gibraltar, Helsinki, Istanbul, Kaliningrad, Kiev, Kirov, "+
               "Kirov, Lisbon, London, Luxemborg, Madrid, Malta, Minsk, "+
               "Monaco, Moscow, Oslo, Paris, Prague, Riga, Rome, Samara, "+
               "Saratov, Simferopol, Sofia, Stockholm, Tallinn, Tirane, "+
               "Ulyanovsk, Uzhgorod, Vienna, Vilnius, Volgograd, Warsaw, "+
               "Zaporozhye, Zurich";
        
        break;
        case 'Indian':
        return "Chagos, Christmas, Cocos, Kerguelen, Mahe, Maldives, "+
               "Mauritius, Reunion";
        
        break;
        case 'Pacific':
        return "Apia, Auckland, Bougainville, Chatham, Chuuk, Easter, Efate, "+
               "Efate, Enderbury, Fakaofo, Fiji, Funafuti, Galapagos, Gambier, "+
               "Gambier, Guadalcanal, Guam, Honolulu, Kiritimati, Kosrae, "+
               "Kwajalein, Majuro, Marquessas, Nauru, Niue, Norfolk, "+
               "Noumea, Pago_Pago, Palau, Pitcairn, Pohnpei, Port_Moresby, "+
               "Rarotonga, Tahiti, Tarawa";
        
        break;
    }
}

function sendMsg(channelID, msg){
    bot.sendMessage({
    to: channelID,
    message: msg                                    
    });
}

function getByAbbr(abbr){
    //logger.info("in getbyabbr");
    switch(abbr){
        case 'JST':
        return "Asia/Tokyo";
        case 'EST':
        return "America/New_York";
        case 'PST':
        return "America/Los_Angeles";
        case 'HST':
        return "Pacific/Honolulu";
        case 'CHINA':
        return "Asia/Shanghai";
        case 'HK':
        return "Asia/Hong_Kong";
        case 'UTC':
        return "Europe/London";
        case 'AEST':
        return "Australia/Sydney";
        case 'CST':
        return "America/Chicago";
        case 'AST':
        return "America/Puerto_Rico";
        case 'KOREA':
        return "Asia/Seoul";
        case 'NZ':
        return "Pacific/Auckland";
        case 'NZDT':
        return "Pacific/Auckland";
        case 'INDIA':
        return "Asia/Kolkata";
    }
}

function isTZAbbr(abbr){
    return arrayContains(tzAbbr, abbr);
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
/*var mysched = [
    [0, 10, 15, "jukebox sesh!"],
    [0, "off", 30],
    [1, 10, 00],
    [2, 16, 00],
    [3, "off", 0],
    [4, 10, 05],
    [5, 16, 0],
    [6, "off", 0]];
*/    
var mysched = [
    [0, 10, 0],
    [1, 10, 0],
    [2, 16, 0],
    [4, 10, 0],
    [5, 16, 0]];

var admins = 
    [
    ];
    
var tzAbbr = [
    "JST", "EST", "UTC", "CST", "PST", "HST", "AEST", "AST", "CHINA", "HK",
    "KOREA", "NZDT", "NZ", "INDIA"];

    
var divider =
    "\n<<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>><<>>\n";
var help = "Commands are `!timezones` and `!schedule"+
        " [Continent]/[City]`\n"+
        "Use `!schedule [Continent]` to view possible Cities."+
        "\nAvailable Continents are: Africa, America, "+
        "Antarctica, Asia, Atlantic, Australia, Europe, "+
        "Indian, Pacific."
var adminHelp = "Admin Commands are:\n"+
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
var permFail = "Sorry, you do not have permission to use that command."

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '$') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {           
         case 'schedule':
                var locale = args[0];
                var banner = "It seems like you're looking for cities "+
                             "in: "+locale+
                             "\nTry `$schedule "+locale+"/[City]`"+divider;
                
                if(locale == "help" || locale == "timezones"){
                    if(arrayContains(admins, userID)){
                        sendMsg(channelID, help+divider+adminHelp);
                    }else{sendMsg(channelID, help);
                    }break;
                }
                
                //Main !schedule case
                try {
                //Oops, Continent provided but no city 
                var flag = 0;
                switch(locale){
                    case 'Africa': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Africa')); break;
                    case 'America': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('America')); break;
                    case 'Asia': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Asia')); break;
                    case 'Atlantic': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Atlantic')); break;
                    case 'Australia': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Australia')); break;
                    case 'Europe': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Europe')); break;
                    case 'Indian': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Indian')); break;
                    case 'Pacific': 
                        flag = 1;
                        sendMsg(channelID, banner+getCities('Pacific')); break;
                }if(flag == 1){break;}
                

                var localDT = ["date", "hours", "minutes", "seconds"];
                //Check for abbreviated
                if(arrayContains(tzAbbr, locale.toUpperCase())){
                    logger.info(locale);
                    locale = getByAbbr(locale.toUpperCase());
                    logger.info(locale);}
                
                //We've got a valid entry, lets give a schedule
                var sched = mysched.map(function(arr){
                    return arr.slice();});
                //No locale provided, assume user wants Tokyo
                if(!locale){locale = "Asia/Tokyo";}
                //Setup our date times
                var fmtTokyo = new Date().toLocaleString("en-US",
                    {timeZone: "Asia/Tokyo"});
                var fmtLocal = new Date().toLocaleString("en-US",
                    {timeZone: locale});
                var timeTokyo = new Date(fmtTokyo);
                var timeLocal = new Date(fmtLocal);
                var timeDiff = msToH(timeTokyo.getTime() - timeLocal.getTime());
                //For some unknown reason JS Date() shows the time 2 hours 
                //too early 
                timeLocal.setHours(timeLocal.getHours()+2);
                //Setup Local Date Time
                localDT[0] = timeLocal.toDateString();
                localDT[1] = timeLocal.getHours();
                localDT[2] = timeLocal.getMinutes();
                localDT[3] = timeLocal.getSeconds();
                for(var i = 1; i < localDT.length; i++){
                    if(localDT[i] < 10){
                        localDT[i] = "0"+localDT[i];
                    }
                }
                //Get the difference in hours between time zones
                var banner = 
                    localDT[0]+" "+
                    localDT[1]+":"+localDT[2]+":"+localDT[3]+
                    "\nTime difference from "+locale+" to Tokyo is: "+
                    timeDiff+" hours."+divider;
                                
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
                    //Add special comments if any, else new line
                    banner += (sched[i][3]) ? (" "+sched[i][3]+"\n") : "\n";
                    }
                 }//end FOR sched formatter
               
                //Post our message
                sendMsg(channelID, banner+divider);
                //Something went wrong, likely a user typo
                }catch(e){
                sendMsg(channelID, 
                    "Sorry, \""+locale+"\" is not a valid location. "+
                    "Please use `!timezones` for all options.\n"+
                    "Or, try `!schedule help`");}
            break;
        
            //Misc commands
            case 'addadmin': 
            try{
                if(arrayContains(admins, userID)){
                    admins.push(args[0]);
                    sendMsg(channelID, "Success. Added: "+args[0]);
                }else{
                    sendMsg(channelID, permFail);}
            }catch(e) {
                    sendMsg(channelID, "Something went wrong...");}
            break;
            
            case 'delstream': 
            try{
                if(arrayContains(admins, userID)){
                    if(args[0] < mysched.length){
                        var toRem = mysched[args[0]];
                        var banner = weekdays[toRem[0]]+" "+toRem[1]+":"+toRem[2];
                        mysched.splice(args[0], 1);                  
                        sendMsg(channelID, "Success. Removed: "+banner);
                    }else{
                        sendMsg(channelID, "No stream found at index: "+args[0]);}
                }else{
                    sendMsg(channelID, permFail);}
                }catch(e) {
                    sendMsg(channelID, "Something went wrong...");
                }
            break;
               
            case 'addstream':
                try{
                if(arrayContains(admins, userID)){
                    if(args[0] < 0 || args[0] > 06 ||
                       args[1] < 0 || args[1] > 23 ||
                       args[2] < 0 || args[2] > 59){
                        sendMsg(channelID, "Invalid time."); 
                        break;
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
                    sendMsg(channelID, "Success. Added: "+banner);
                }else{
                    sendMsg(channelID, permFail);}
                }catch(e){
                sendMsg(channelID, "Something went wrong...");
                }
            break;
                
            //Delete the ENTIRE schedule
            case 'clearsched':
                try{
                if(arrayContains(admins, userID)){
                    mysched = [];
                    sendMsg(channelID, "Success. Schedule cleared.");
                }else{
                    sendMsg(channelID, permFail);}
                }catch(e){
                    sendMsg(channelID, "Something went wrong...");
                }
            break;
           
            case 'timezones':           
                sendMsg(channelID, 
                "To view all available timezones visit: <"+
                "https://github.com/EanNewton/ScheduleBot/blob/master/timezones"
                +">\n"+help);
            break;         
         }
     }
});
