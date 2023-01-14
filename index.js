const fs = require('fs');

// Function 1: draws Of New Year's eve in ASCII
write =function(){
    //Create or overwrite over json with the next template
    const draws ={
        "newyear":
        [
    "_ __ _   ___ ___     ___  __ __   ___  _____ _ _ __          ",
    "| '_  | / _ \\  \\ /\\ //|  |  | / _\\//  _` | '__|          ",
    "| | | ||  __/\\  V  V // |  u  ||  __/| (_|  | |             ",
    "|_| |_|\\___| \\__/\\_/  \\__, |\\___|\\__,__|_|             ",
    "                          __/  |                             ",
    "                         |_____/                             ",                                                         
    "                                               .--,-``-.     ",
    "      ,----,       ,----..          ,----,    /   /     '.   ",
    "    .'   .' \\    /   /  \\      .'   .' \\  / ../        ;  ",
    "  ,----,'    |   /   .     :    ,----,'    | \\ ``\\  .`-  ' ",
    "  |    :  .  ;  .   /   ;. \\   |    :  .  ;  \\___\/   \\ : ",
    "  ;    |.'  /  .   ;   /  ` ;   ;    |.'  /        \\   :  | ",
    "  `----'/  ;   ;   |  ;\\ ; |   `----'/  ;         /  /   /  ",
    "    /  ;  /    |   :  | ; | '     /  ;  /          \\  \\ \\ ",
    "   ;  /  /-,   .   |  ' ' ' :    ;  /  /-,     ___ /   :   | ",
    "  /  /  /.`|   '   ; \\; /  |   /  /  /.`|    /   /\\   /  : ",
    "./__;      :    \\ \\  ',  /  ./__;      :   / ,,/  ',-    . ",
    "|   :    .'      ;   :    /   |   :    .'    \\ ''\\       ; ",
    ";   | .'          \\ \\ .'    ;   | .'        \\   \\    .'  ",
    "`---'              `---`      `---'            `--`-,,-'     "
                                                                 
    
        ],
        "newyear1":
        [
    " .;;,     .;;,                                              ", 
    "`  ;;   ;;  '                                               ",
    "   ;;   ;; ,  .;;;.   .;;,;;;,  .;;,;;;,  .;;.  .;;.        ",
    " ,;;;;;;;;;'  `   ;;  ` ;;   ;; ` ;;   ;; ` ;;  ;; '        ",
    " ` ;;   ;;    .;;.;;    ;;   ;;   ;;   ;;   ;;  ;;          ",
    "   ;;   ;;    ;;  ;; ,  ;;   ;;   ;;   ;;   ;;  ;;          ",
    ".  ;;    ';;' `;;;';;'  ;;';;'    ;;';;'     `;;';          ",
    "';;'                    ;;        ;;            ;;          ",
    "                     .  ;;     .  ;;         .  ;;          ",
    "                     ';;'      ';;'          ';;'           ",
    "                                                            ",
    "               .;;, ,;;;,                            ",
    "             `  ;;    ;;                             ",
    "                ;;    ;;     ,;;,  .;;.      .;;,    ",
    "                ;;    ;;    ;;  ;; ` ;;      ;; '    ",
    "                ;;    ;;    ;;;;;'   ;;  ;;  ;;      ",
    "                ;;    ;;    ;;   .   ;;  ;;  ;;      ",
    "             .  ;;     ';;'  `;;;'    `;;'`;;'       ",
    "              ';;'                                   ",
    "                                                     ",
    "                              .;;.     .;;.                             ",
    "                              `  ;;   ;;  '                             ",
    "                                 ;;   ;;   .;;,  .;;;.   .;;.;;;,       ",
    "                                 ;;   ;;  ;;  ;; '   ;;  ` ;;   '       ",
    "                                 ;;   ;;  ;;;;;' .;;,;;    ;;           ",
    "                                  `;;;';  ;;   . ;;  ;; ,  ;;           ",
    "                                      ;;   `;;;'  `;;';;'  ;'           ",
    "                                      ;;                                ", 
    "                                  .'  ;;                                ",
    "                                  ';;;'                                 ",
    "                         ,;.                                                   ",
    "                  ..,,,...;;.                                                  ",
    "              ,;;;;;;;;;;;;;;;.                                                ",
    "            .;;;;;;;;;;;;;;;;;;            /~~~\\                              ",
    "            ;;;;;;;;;;;;;;;;;;'         .;;;;    \\                            ",
    "   .,. ;;   ;;;;;;;;;;;;;;;;;;,        .;;'\\      |                           ",
    ";;;;;;;,    `;;;;;;;;;;;;;;;;;     .;;;;'   \\____/  .:::.                     ",
    " `;;;;;;;;,    `;;;;;;;;;;;;;'   .;;;;;'          \\ :::::                     ",
    "       `;;;;;,     `;;;;;;'  .,;;;;;;'              \\:::                      ",
    "         `;;;;;,.,,.;;;;;;.;;;;;;;''            ,a@@@@@@@@@a,                  ",
    "           `;;;;;;;;;;;;;;;;;;;'           .a@@@@@@@ XII @@@@@@@a,             ",
    "              `;;;;;;;;;;;;;;;;         .a@@.@@@@aaaa/|\\aaaa@@@@.@@a,         ",
    "                `;;;;;;;;;;;;;;;      .@@@@@@@aaa@@@@@|@@@@@aaa@@@@@@@,        ",
    "                 ;;;;;;;;;;;;;;;.   .@@@@@@@aa@@@@@@@/|\\@@@@@@@aa@@@@@@@.     ",
    "                ;;;;;;;;;;;;;;;;;  .@@@.@@@aa@@@@@@@@@|@@@@@@@@@aa@@@.@@@.     ",
    "              .################### @@@@@@@aa@@@@@@@@@@|@@@@@@@@@@aa@@@@@@@     ",
    "              ###################; @@@@@@@aa@@@@@@@@@@|@@@@@@@@@@aa@@@@@@@     ",
    "              #;;;;;;;#######;;;;; @ IX @@aa@@@@@@@@@@|@@@@@@@@@@aa@ III @     ",
    "              ;;;;;;;;;###;;;;;;;; @aaaa@@aa@@@@@@@@@@@@@@@@@@@@@aa@aaaaa@     ",
    "              ;;;;;;;;'  `;;;;;;;' @@@@@@@aa@@@@@@@@@@@@@@@@@@@@@aa@@@@@@@     ",
    "             ,;;;;;;'     ;;;;;;'  `@@@.@@@aa@@@@@@@@@@@@@@@@@@@aa@@@.@@@'     ",
    "            ,;;;;;'       ;;;;;'    `@@@@@@@aa@@@@@@@@@@@@@@@@aa@@@@@@@@'      ",
    "           ,;;;;'        ,;;;;'      `@@@@.@@@aaa@@@@@@@@@@aaa@@.@@@@@@'       ",
    "          ;;;;'         .;;;;'          `@@@@@@@@aaaaaaaaaa@@@@@@@@@'          ",
    "        .;;;;;          ;;;;;;;,           `@@@@@@@@@ VI @@@@@@@@'             ",
    "        `;;;;;'          '''''''                `@@@@aaaa@@@'                  "
        ]
      }
    
    fs.writeFile('./NewYear.json', JSON.stringify(draws,null,2), err=>{
        if (err){
            console.log(err)
        }});
};


drawsOfNewYear = function(){
    write()
    fs.readFile("NewYear.json", function(err, data) {
        
    // Check for errors
    if (err) throw err;
    
    // Converting to JSON
    const draws = JSON.parse(data);
        
    console.log(draws.newyear1); // Print draws that is in NewYear.json file: newyear1
    console.log(draws.newyear);  // Print draws that is in NewYear.json file: newyear
    });
};

// Function 2: languages: that give us the world happy holiday in many languages
languages = function(word){
        languagesdict= { 
            "English": "happy Holiday",
            "Hebrow": "חג שמח",
            "Arbic": "عيد سعيد",
            "French": "Joyeuses Fêtes",
            "Spanish": "Felices Fiestas",
            "Chinese": "節日快樂",
            "Turkish": "Mutlu Bayramlar",
            "Romanian": "Sarbatori Fericite",
            "Greek": "Καλές δικακοπές",
            "Italian": "Buone Feste",
            "Korean": "행복 휴일",
            "German": "frohe Ferien"
        }
        if (languagesdict.hasOwnProperty(word) ){
            console.log(languagesdict[word]); // Print happy holiday in the right language 

        }
        else{ 
            console.log("we dont recognize this word. ")
        }
      };
    


// Function 3: time Until New Year: the countdown function that give us the date of the next new year that is in 31-12-2023 
timeUntilNewYear = function(){
let ts = Date.now();

let date_ob = new Date(ts);
let days = date_ob.getDate();
let month = date_ob.getMonth() + 1;

// prints days & month in MM-DD format
console.log((12 - month ) +" months and "+  (31 - days) +  " days until new year");
}


module.exports = {
    drawsOfNewYear,
    languages,
    timeUntilNewYear
}