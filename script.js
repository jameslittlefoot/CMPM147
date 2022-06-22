const fillers = {
    citizen: ["Captain Barka", "Big Jimmy", "Scarlett", "The Forsaken", "The Peacekeepers"],
    districtNum:["0","1","2","3","4","5","6","7","8","9"],
    goal: ["deliver this package", "clear the area", "fix the water supply system", "rescue the civilians", "plant the beacons"],
    type:["bruiser", "screamer", "fast", "armored", "spitter","hunter"],
    weapon:["shotgun", "pistol", "rifle", "sword", "bat", "car", "flamethrower", "bow and arrow"],
    firstName: ["Brian", "Loid", "Rick", "Carl", "Alex"],
    lastName: ["Hansen", "Forger", "Grimes","Mercer"], 
    amount:["10","100"],
    reward:["credits", "bottlecaps", "supplies"],
    boss:["Big Bertha", "Little Nina", "Joey Stalone", "Captain Soap"],
  };
  
  const template = `Hello survivor, $citizen needs your services.
                     Head out to District $districtNum and $goal.
                     Look out the area has been flooded by $type zombies you may want to bring a $weapon for these ones.
                     Once you're done $firstName $lastName will see to it that you are paid $amount $reward for your services. Once you are done come talk to 
                     me, $boss for your next job. `

  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();