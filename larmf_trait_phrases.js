

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
            switch (type.toLowerCase()) {
                case 'zombie':
                    return 'with a ghastly green, zombie-like body, glowing red eyes, and a drooling mouth,';
                case 'ape':
                    return 'with a deep monkey fur-brown body, large round monkey eyes, and a slight frown';
                case 'alien':
                    return 'with a light blue otherworldly body, square blue alien eyes, and a serious facial expression';
                case 'peachy':
                    return 'with a soft peach-colored body,';
                case 'taffy':
                    return 'with a taffy pink body,';
                case 'leafy':
                    return 'with a minty green body,';
                case 'creamy':
                    return 'with a light tan body,';
                case 'chilly':
                    return 'with an icy white body,';
                case 'moon':
                    return 'with a pale moon-like luminescent body,';
                case 'sandy':
                    return 'with a warm sandy beige body,';
                case 'slate':
                    return 'with a light slate gray body,';
                case 'cinnamon':
                    return 'with a warm cinnamon-brown body,';
                case 'earthy':
                    return 'with an earthy rich brown spotted body,';
                case 'chrome':
                    return 'with a shiny, reflective chrome body,';
                case 'gold':
                    return 'with a treasure-like golden body,';
                default:
                    // TODO make one of the traits the default, made this one up
                    return 'with a unique and indescribable color,';
            }
        },

        smoke: function () {
            switch (smoke) {
                case 'Doobie':
                    return ' and smoking a doobie';
                case 'Cig':
                    return ' and smoking a cig';
                case 'Stogie':
                    return ' and smoking a stogie';
                case 'Vape':
                    return ' and vaping';
                case 'Pipe':
                    return ' and smoking a pipe';
                default:
                    return '';
            }
        },

        mouth: function () {
            if (!isSpecialType) {

                switch (mouth) {
                    case 'Smile':
                        return `and a big smile`;
                    case 'Normal':
                        return `and a content facial expression`;
                    case 'Chiclets':
                        return `and buck front teeth`;
                    case 'Black_Beard':
                        return `and a black beard`;
                    case 'Ginger_Beard':
                        return `and a ginger beard`;
                    case 'Smirk':
                        return `and a smirking facial expression`;
                    case 'Blonde_Handle_Bars':
                        return `and a blonde handlebar moustache`;
                    case 'Black_Handle_Bars':
                        return `and a black handlebar moustache`;
                    case 'Gronk':
                        return `and a gronk expression`;
                    case 'Zombie':
                        return `and a drooling zombie mouth`;
                    case 'Fangs':
                        return `and sharp fangs`;
                    case 'Gold_Grill':
                        return `and a gold grill`;
                    default:
                        // TODO can't remember if i covered this trait in the cases above, check
                        return `and a straight face`;
                }
            }
        },



        hair: function () {
            if (hair === 'None') {
                return '';
            }
            switch (hair) {
                case 'Messy':
                    return 'with messy dishevelled black hair';
                case 'Peak_Spike':
                    return 'with a black deathhawk hairstyle';
                case 'Long_Black':
                    return 'with long mid-back-length black hair';
                case 'Wild':
                    return 'with wild dishevelled black hair';
                case 'Poofy_Ginger':
                    return 'with poofy ginger hair';
                case 'Poofy_Blonde':
                    return 'with poofy blonde hair';
                case 'Poofy_Black':
                    return 'with poofy black hair';
                case 'Mullet':
                    return 'with a black mullet hairstyle';
                case 'Long_Blonde':
                    return 'with long mid-back-length blonde hair';
                case 'Swanky':
                    return 'with a black Elvis-style hairdo';
                case 'Swanky_Lite':
                    return 'with a blonde Elvis-style hairdo';
                case 'Rondal_McDondal':
                    return 'with clown-like big red hair';
                case 'Wild_Lime':
                    return 'with big wild lime-colored hair';
                case 'Wild_Candy':
                    return 'with big wild candy-colored hair';
                    default:
                        return '';
            }
        },

        earrings: function () {
            switch (earrings) {
                case 'Silver_Hoop':
                    return 'wearing a silver hoop earring in the left ear';
                case 'Silver_Stud':
                    return 'wearing a silver stud earring in the left ear';
                case 'Gold_Hoop':
                    return 'wearing a gold hoop earring in the left ear';
                case 'Gold_Stud':
                    return 'wearing a gold stud earring in the left ear';
                case 'Silver_Stud_Alt_Side':
                    return 'wearing a silver stud earring in the right ear';
                case 'Gold_Stud_Alt_Side':
                    return 'wearing a gold stud earring in the right ear';
                case 'Diamond':
                    return 'wearing a diamond earring in the left ear';
                default:
                    // "None" earring trait case
                    return '';
            }
        },

        eyewear: function () {
            if (!isSpecialType) {

                switch (eyewear) {
                    case 'Small_Shades':
                        return 'small sunglasses';
                    case 'Regular_Shades':
                        return 'sunglasses';
                    case 'Classic_Shades':
                        return 'classic sunglasses';
                    case 'Horned_Rim_Glasses':
                        return 'horn-rimmed eyeglasses';
                    case 'Eye_Patch':
                        return 'an eye patch';
                    case 'AR':
                        return 'a futuristic sci-fi eyepiece';
                    case 'VR':
                        return 'virtual reality goggles';
                    case '3D_Glasses':
                        return '3D glasses';
                    case 'None':
                        return `beady round eyes`;
                }
            }
        },

        headwear: function () {
            switch (headwear) {
                case 'Pink_Headband':
                    return 'wearing a pink and white headband';
                case 'Black_Cap':
                    return 'wearing a black ball cap';
                case 'Do_Rag':
                    return 'wearing a do-rag';
                case 'Bandana':
                    return 'wearing a blue bandana';
                case 'Blue_Headband':
                    return 'wearing a blue and white headband';
                case 'Purple_Cap':
                    return 'wearing a purple ball cap';
                case 'Green_Headband':
                    return 'wearing a green and white headband';
                case 'Orange_Knit':
                    return 'wearing an orange knit toque hat';
                case 'Degen_Cap':
                    return 'wearing a flat-brim ball cap';
                case 'Olive_Knit':
                    return 'wearing an olive-green knit toque hat';
                case 'Police_Hat':
                    return 'wearing a police hat';
                case 'Minty_Cap':
                    return 'wearing a mint-green ball cap';
                case 'Farmer_Cap':
                    return 'wearing a farmer cap';
                case 'LM_Knit':
                    return 'wearing a grey knit cap';
                case 'Rancher_Hat':
                    return 'wearing a rancher hat';
                case 'Cowboy_Hat':
                    return 'wearing a cowboy hat';
                case 'Beanie':
                    return 'wearing a beanie';
                case 'Top_Hat':
                    return 'wearing a top hat';
                case 'Powdered_Wig':
                    return 'wearing a powdered wig';
                case 'Wizard_Cap':
                    return 'wearing a tall blue wizard cap';
                case 'Devil':
                    return 'wearing devil horns';
                case 'Fabulous_Cowboy_Hat':
                    return 'wearing a fancy pink cowboy hat';
                case 'Angel':
                    return 'wearing an angel halo';
                case 'Swamp_Ears':
                    return 'wearing Shrek ears';
                default:
                    return '';
            }
        },

        headphones: function () {
            switch (headphones) {
                case 'Gray':
                    return 'wearing gray headphones';
                case 'Red':
                    return 'wearing red headphones';
                case 'Blue':
                    return 'wearing blue headphones';
                case 'White':
                    return 'wearing white headphones';
                case 'Striped':
                    return 'wearing striped headphones';
                default:
                    return '';
            }
        },

        // build up the physical description string with the different parts
        getDescription: function () {
            let descriptionParts = [
                this.type(),
                this.headwear(),
                this.eyewear(),
                isSpecialType ? "" : this.mouth(),
                hair === "None" ? "bald" : this.hair(),
                this.smoke(),
                this.earrings(),
                this.headphones()
            ];


            // we're gonna filter out any empty strings and concat. with spaces
            return descriptionParts.filter(Boolean).join(' ').trim() + '.';
        }

    };


    let fullDescription = phrases.getDescription.call(phrases);
    return `A simply-drawn cartoonish short, stumpy larva character ${fullDescription}.`;
 
}

module.exports = { describe_traits };
