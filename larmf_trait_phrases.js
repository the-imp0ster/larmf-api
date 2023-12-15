function describe_traits(larmf) {
    const { stats, attributes } = larmf;
    const { type } = stats;
    // we can also provide descriptions for the stat levels
    

    let extractedAttributes = {};
    attributes.forEach(trait => {
        extractedAttributes[trait.trait_type] = trait.value;
    });

    const smoke = extractedAttributes.Smoke;
    const mouth = extractedAttributes.Mouth;
    const headphones = extractedAttributes.Headphones;
    const hair = extractedAttributes.Hair;
    const earrings = extractedAttributes.Earring;
    const eyewear = extractedAttributes.Eyewear;
    const headwear = extractedAttributes.Headwear;
    
    
    

    let phrases = {
        smoke: function() {
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

        mouth: function() {
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
                    return `and a straight face`;
            }
        },

        type: function() {
            switch (type.toLowerCase()) {
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
                case 'zombie':
                    return 'with a ghastly green, zombie-like body and red eyes,';
                case 'ape':
                    return 'with a deep monkey fur-brown body,';
                case 'alien':
                    return 'with a light blue otherworldly body and square blue alien eyes,';
                case 'chrome':
                    return 'with a shiny, reflective chrome body,';
                case 'gold':
                    return 'with a treasure-like golden body,';
                default:
                    return 'with a unique and indescribable color,';
            }
        },

        hair: function() {
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
                    return 'no hair';
            }
        },

        earrings: function() {
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
                    return '';
            }
        },
           
        eyewear: function() {
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
                default:
                    return `beady round eyes`;
            }
        },
        
        headwear: function() {
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

        headphones: function() {
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
        
    };

    function combine(phrasesArray) {
        return phrasesArray.filter(p => p && p.length > 0).join(', ');
    }



    
    return [
        'A simply-drawn cartoonish worm character',
        phrases.type(type),
        phrases.eyewear(eyewear),
        phrases.mouth(mouth),
        phrases.smoke(smoke),
        '. The worm ',
        combine([
            phrases.hair(hair),
            phrases.headphones(headphones),
            phrases.earrings(earrings),
            phrases.headwear(headwear)
        ])
    ].filter(s => s && s.length > 0).join(' ').replaceAll(' .', '.');
}

module.exports = { describe_traits };
