var arrIpsum = {
    config: {
        startWord: 'Arr!'
    },
    getIpsum: function (mode, count, quotes) {
        // count must be greater than 0
        if (count < 0) {
            throw new Error('Count must be greater than 0');
        }
        // definitions
        var getArr = true;
        var result = arrIpsum.config.startWord;
        var currentCount = arrIpsum.getCount(mode, result);

        while (currentCount < count) {
            getArr = (quotes) ? !getArr : getArr;
            result += ' ' + ((getArr) ? arrIpsum.getRandomArr() : arrIpsum.getRandomQuotes());
            currentCount = arrIpsum.getCount(mode, result);
        }

        return arrIpsum.cutOverhang(mode, result, count);
    },
    getCount: function (mode, text) {
        // letter
        if (mode == "letter") {
            return text.split('').length;
        }
        // mode
        if (mode == "word") {
            return text.split(' ').length;
        }
        // sentence
        return text.split(/\.|\!|\?/).length;
    },
    cutOverhang: function (mode, text, count) {
        if (mode == "letter") // letter
            return text.substring(0, count);
        if (mode == "word")  // mode
            return text.split(' ').slice(0, count).join(' ');
        return text; // sentence
    },
    getRandomArr: function () {
        let arr = ["Arr!", "Ahoi!", "Argh!", "Arrgh!", "Yarr!", "Harr!", "Urr!", "Aye!", "Yo-Ho!"];
        return arr[arrIpsum.getRandomInt(arr.length)];
    },
    getRandomQuotes: function () {
        let quotes = [
            "You can be the gentleman and shoot the lady and starve to death yourself.",
            "Fate has brought us together again. Well, actually, buried treasure and pirates brought us together.",
            "If you choose to lock your heart away, you’ll lose it for certain.",
            "Ah. Love. A dreadful bond.",
            "I may be a pirate, but I bristle at the thought of a woman losing her heart. Unless it’s over me.",
            "My heart will always belong to you.",
            "Death cannot stop true love. All it can do is delay it for a while.",
            "Actually, I quite fancy you from time to time. When you’re not yelling at me.",
            "If you'd fought like a man, you would not have been hang'd like a dog.",
            "In an honest service, there is thin commons, low wages, and hard labor.",
            "Heaven, you fool? Did you ever year of any pirates going thither? Give me hell, it's a merrier place.",
            "Since we met in love, let us part in love.",
            "For my part, I am the innocentest person of them all, only I have been sworn against by perjured persons.",
            "Under the leadership of a man you have all chosen to flee. We shall see how you prove yourselves under the hand of a woman.",
            "If there’s a man among ye, ye’ll come up and fight like the man ye are to be!",
            "Honestly, it’s the honest ones you want to watch out for, because you can never predict when they’re going to do something incredibly stupid.",
            "You got the makings of greatness in you, but you got to take the helm and chart your own course!",
            "I know you feel like you’ve got the weight of the world on your shoulders, but at some point, even though we’re quite different, you’ve got to trust me.",
            "You'll not forget what I done good, not any more than you'll forget the bad.",
            "One soul is not equal to another.",
            "The problem is not the problem. The problem is your attitude about the problem.",
            "In the dark, there is discovery, there is possibility, there is freedom in the dark once someone has illuminated it.",
            "For certain you have to be lost to find a place that can't be found. Elseways, everyone would know where it was.",
            "Look, I don't mean to be rude but this is not as easy as it looks so I'd appreciate it if you wouldn't distract me.",
            "The truth is far too much fun.",
            "Revenge may sate your being, but don’t misunderstand me, my dear. It’s an end, not a beginning.",
            "Nobody will believe it’s possible until we show them.",
            "I've just had a sublime vision. All the jagged parts of my life have come together to form a complete and mystical... whole.",
            "It's a pleasant thing to be young, and have ten toes, and you may lay to that.",
            "Damn you villains, who are you? And from whence came you?",
            "Damn my blood, I am sorry they won’t let you have your sloop again, for I scorn to do anyone a mischief, when it is not for my advantage.",
            "There is none of you but will hang me, I know, whenever you can clinch me within your power.",
            "Let’s jump on board, and cut them to pieces.",
            "If you’ll turn sober, and mind your business, perhaps in time I may make you one of my Lieutenants, if not, here’s a boat alongside and you shall be set ashore.",
            "I am a man of fortune and must seek my fortune.",
            "I am a free prince, and I have as much authority to make war on the whole world, as he who has a hundred sail of ships at sea and an army of 100,000 men in the field.",
            "Damnation seize my soul if I give you quarters, or take any from you.",
            "It’s more fun to be a pirate than to join the navy.",
            "Even pirates, before they attack another ship, hoist a black flag.",
            "There is nothing so desperately monotonous as the sea, and I no longer wonder at the cruelty of pirates.",
            "I think pirates, like astronauts, particularly for a boy, are always kind of worth thinking about.",
            "It is when pirates count their booty that they become mere thieves.",
            "The pirate he will sink you with a kiss, he’ll steal your heart and sail away.",
            "In politics and in trade, bruisers and pirates are of better promise than talkers and clerks.",
            "It’s funny that pirates were always going around searching for treasure, and they never realized that the real treasure was the fond memories they were creating.",
            "A pirate spreading misery and ruin over the face of the ocean.",
            "Merchant and pirate were for a long period one and the same person. Even today mercantile morality is really nothing but a refinement of piratical morality.",
            "Life's pretty good, and why wouldn’t it be? I'm a pirate, after all.",
            "If you choose to lock your heart away, you’ll lose it for certain.",
            "Why fight when you can negotiate?",
            "I’ve got a jar of dirt!",
            "Wuff, wuff, Le-Chuck",
            "If it comes to a swinging, swing all, say I.",
            "Sir, with no intention to take offense, I deny your right to put words into my mouth.",
            "I’m a plain man; rum and bacon and eggs is what I want,",
            "Look behind you, a Three-Headed Monkey!",
            "That’s the second biggest Ship I’ve ever seen!",
            "I wanna be a pirate!",
            "So you want to be a pirate, eh? You look more like a flooring inspector.",
            "I’m a mighty pirate!",
            "I'm disinclined to acquiesce to your request. Means 'no'.",
            "Not all treasure is silver and gold, mate.",
            "Take what you can, give nothing back!",
            "Yo ho, yo ho, a pirate's life for me.",
            "Better to swim with a dead man's hand than ship with a pirate.",
            "A pirate's life is a wonderful life, a-rovin' over the sea.",
            "Who lives in honor, dies in honor.",
            "X marks the spot.",
            "Dead men tell no tales.",
            "Do not be a fool for the Pirate's Code. The sea respects no code.",
            "The only rules that really matter are these: what a man can do and what a man can’t do.",
            "Dying is the day worth living for.",
            "Piracy is the way, and plunder is the game.",
            "We pillage, we plunder, we rifle, and loot, drink up, me hearties, yo ho!",
            "A pirate does not ask for permission.",
            "They can't hang us if we bury the treasure first.",
            "Even a good pirate will plunder like a true pirate.",
            "Freedom is a pirate's only care.",
            "Once a pirate, always a pirate.",
            "To err is human but to arr is pirate.",
            "It's not about living forever, it's about living with yourself forever.",
            "When you marooned me, you forgot one thing, mate. I'm Captain Jack Sparrow.",
            "Adventure that can be had without risk is hardly worth having at all.",
            "No prey, no pay.",
            "Land was created to provide a place for boats to visit.",
            "Me only regret be dying sober.",
            "No pirate ever won a fair fight.",
            "Surrender the booty!",
            "Those who wander are not lost, they're just searching for treasure.",
            "Buccaneers don't live by rules, we live by the code.",
            "A smooth sea never made a skilled pirate.",
            "The sea may be rough, but I am the Captain! No matter how difficult I will always prevail.",
            "Piracy—it’s more than a job, it’s a calling.",
            "The rougher the seas, the smoother we sail.",
            "Treasure your freedom; never surrender it for a chest of gold.",
            "The best way to acquire a ship is to steal one.",
            "Keep calm and say 'Arrr'.",
            "If ye can't trust a pirate, ye damn well can't trust a merchant either.",
            "Ye best start believin' in ghost stories, Miss Turner, you're in one!",
            "Trust no one. Even your parrot could be a stool pigeon."
        ];
        return quotes[arrIpsum.getRandomInt(quotes.length)];
    },
    getRandomInt: function (max) {
        return Math.floor(Math.random() * max);
    }
};