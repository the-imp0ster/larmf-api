// •┈••✦ ❤ ✦••┈• LARMF API - PHYSICAL DESCRIPTIONS •┈••✦ ❤ ✦••┈•

function describe_traits(larmf) {
    let { stats, attributes } = larmf;
    // type can be accessed outside the stats but i've accessed it in the stats object so i can add the other stats easily if we decide to do that
    // could be fun to add descriptions for the stats as well :)
    let { type } = stats;



    let extractedAttributes = {};
    attributes.forEach(trait => {
        extractedAttributes[trait.trait_type] = trait.value;
    });


    let specialTypes = ["zombie", "ape", "alien"];
    let isSpecialType = specialTypes.includes(type.toLowerCase());

    let smoke = extractedAttributes.Smoke;
    let mouth = extractedAttributes.Mouth;
    let headphones = extractedAttributes.Headphones;
    let hair = extractedAttributes.Hair;
    let earrings = extractedAttributes.Earring;
    let eyewear = extractedAttributes.Eyewear;
    let headwear = extractedAttributes.Headwear;




    let phrases = {
        type: function () {
            let specialDescriptions = {
                'zombie': 'with a ghastly green, zombie-like body, glowing red eyes, and a drooling mouth,',
                'ape': 'with a fur-brown monkey body, large round monkey eyes, and a slight frown,',
                'alien': 'with a light blue otherworldly body, square blue alien eyes, and a serious facial expression,'
            };

            if (specialDescriptions[type.toLowerCase()]) {
                return specialDescriptions[type.toLowerCase()];
            }

            let typeDescription = {
                'peachy': 'with a soft peach-colored body',
                'taffy': 'with a taffy pink body',
                'leafy': 'with a minty green body',
                'creamy': 'with a light tan body',
                'chilly': 'with an icy white body',
                'moon': 'with a pale moon-like luminescent body',
                'sandy': 'with a warm sandy beige body',
                'slate': 'with a light slate gray body',
                'cinnamon': 'with a warm cinnamon-brown body',
                'earthy': 'with an earthy rich brown spotted body',
                'chrome': 'with a shiny, reflective chrome body',
                'gold': 'with a treasure-like golden body',
            }[type.toLowerCase()];

            return typeDescription;
        },



        smoke: function () {
            let smokeDescriptions = {
                'Doobie': ', smoking a doobie',
                'Cig': ', smoking a cigarette',
                'Stogie': ', smoking a stogie',
                'Vape': ', smoking an e-cigarette',
                'Pipe': ', smoking a pipe',
            };

            return smokeDescriptions[smoke] || '';
        },


        mouth: function () {
            let mouthDescriptions = {
                'Smile': `and a big smile`,
                'Normal': `and a content facial expression`,
                'Chiclets': `and buck front teeth`,
                'Black_Beard': `and a black beard`,
                'Ginger_Beard': `and a ginger beard`,
                'Smirk': `and a smirking facial expression`,
                'Blonde_Handle_Bars': `and a blonde handlebar moustache`,
                'Black_Handle_Bars': `and a black handlebar moustache`,
                'Gronk': `and a gronk expression`,
                'Zombie': `and a drooling zombie mouth`,
                'Fangs': `and sharp fangs`,
                'Gold_Grill': `and a gold grill`
            };

            return mouthDescriptions[mouth] || '';
        },



        hair: function () {
            let hairDescriptions = {
                'Messy': 'with messy dishevelled black hair',
                'Peak_Spike': 'with a black deathhawk hairstyle',
                'Long_Black': 'with long mid-back-length black hair',
                'Wild': 'with wild dishevelled black hair',
                'Poofy_Ginger': 'with poofy ginger hair',
                'Poofy_Blonde': 'with poofy blonde hair',
                'Poofy_Black': 'with poofy black hair',
                'Mullet': 'with a black mullet hairstyle',
                'Long_Blonde': 'with long mid-back-length blonde hair',
                'Swanky': 'with a black Elvis-style hairdo',
                'Swanky_Lite': 'with a blonde Elvis-style hairdo',
                'Rondal_McDondal': 'with clown-like big red hair',
                'Wild_Lime': 'with big wild lime-colored hair',
                'Wild_Candy': 'with big wild candy-colored hair',
            };
            
            return hairDescriptions[hair] || '';

        },

        earrings: function () {
            let earringDescriptions = {
                'Silver_Hoop': 'wearing a silver hoop earring in the left ear',
                'Silver_Stud': 'wearing a silver stud earring in the left ear',
                'Gold_Hoop': 'wearing a gold hoop earring in the left ear',
                'Gold_Stud': 'wearing a gold stud earring in the left ear',
                'Silver_Stud_Alt_Side': 'wearing a silver stud earring in the right ear',
                'Gold_Stud_Alt_Side': 'wearing a gold stud earring in the right ear',
                'Diamond': 'wearing a diamond earring in the left ear',
            };

            return earringDescriptions[earrings] || '';
        },

        eyewear: function () {
            let eyewearDescriptions = {
                'Small_Shades': 'wearing small sunglasses',
                'Regular_Shades': 'wearing sunglasses',
                'Classic_Shades': 'wearing classic sunglasses',
                'Horned_Rim_Glasses': 'wearing horn-rimmed eyeglasses',
                'Eye_Patch': 'wearing an eye patch',
                'AR': 'wearing a futuristic sci-fi eyepiece',
                'VR': 'wearing virtual reality goggles',
                '3D_Glasses': 'wearing 3D glasses',
                'None': 'with beady round eyes'
            };

            return eyewearDescriptions[eyewear] || '';
        },

        headwear: function () {
            let headwearDescriptions = {
                'Pink_Headband': 'wearing a pink and white headband',
                'Black_Cap': 'wearing a black ball cap',
                'Do_Rag': 'wearing a do-rag',
                'Bandana': 'wearing a blue bandana',
                'Blue_Headband': 'wearing a blue and white headband',
                'Purple_Cap': 'wearing a purple ball cap',
                'Green_Headband': 'wearing a green and white headband',
                'Orange_Knit': 'wearing an orange knit toque hat',
                'Degen_Cap': 'wearing a flat-brim ball cap',
                'Olive_Knit': 'wearing an olive-green knit toque hat',
                'Police_Hat': 'wearing a police hat',
                'Minty_Cap': 'wearing a mint-green ball cap',
                'Farmer_Cap': 'wearing a farmer cap',
                'LM_Knit': 'wearing a grey knit cap',
                'Rancher_Hat': 'wearing a rancher hat',
                'Cowboy_Hat': 'wearing a cowboy hat',
                'Beanie': 'wearing a beanie',
                'Top_Hat': 'wearing a top hat',
                'Powdered_Wig': 'wearing a powdered wig',
                'Wizard_Cap': 'wearing a tall blue wizard cap',
                'Devil': 'wearing devil horns',
                'Fabulous_Cowboy_Hat': 'wearing a fancy pink cowboy hat',
                'Angel': 'wearing an angel halo',
                'Swamp_Ears': 'wearing Shrek ears'
            };

            return headwearDescriptions[headwear] || '';
        },


        headphones: function () {
            let headphonesDescriptions = {
                'Gray': 'wearing gray headphones',
                'Red': 'wearing red headphones',
                'Blue': 'wearing blue headphones',
                'White': 'wearing white headphones',
                'Striped': 'wearing striped headphones'
            };

            return headphonesDescriptions[headphones] || '';
        },


        // build up the physical description string with the different parts
        getDescription: function () {
            let descriptionParts = [
                this.type(),
                this.eyewear(),
                this.headwear(),
                isSpecialType ? "" : this.mouth(),
                // hair === "None" ? "bald" : this.hair(),
                this.hair(),
                this.smoke(),
                this.earrings(),
                this.headphones()
            ];


            // we're gonna filter out any empty strings and concat. with spaces
            return descriptionParts.filter(part => part).join(' ').trim() + '.';
        }

    };

    // get the description
    let fullDescription = phrases.getDescription.call(phrases);

    // create the full description
    return `A simply-drawn cartoonish short, stumpy larva character ${fullDescription}`;

}

module.exports = { describe_traits };
