const pokemonColorMap = {
    "1": "#4ca04c",//green - bulbasaur
    "2": "#4ca04c",
    "3": "#4ca04c",
    "4": "#de3a3a", //red
    "5": "#de3a3a",//charmeleon
    "6": "#de3a3a",
    "7": "#3e3ec0",//blue
    "8": "#3e3ec0",
    "9": "#3e3ec0",//blaistoise
    "10": "#4ca04c",
    "11": "#4ca04c",
    "12": "#fbf6f6",//blanco butterfree
    "13": "#f0f060e6",
    "14": "#f0f060e6",//pikachu
    "15": "#fbf6f6",
    "16": "#fbf6f6",
    "17": "#7c5151",//vulpix
    "18": "#7c5151",
    "19": "#4ca04c",
    "20": "#4ca04c",
    "21": "#4ca04c",//viplume
    "22": "#de3a3a",
    "23": "#de3a3a",
    "24": "#919191",
    "25": "#919191",//machoke
    "26": "#919191",
    "27": "#523352",
    "28": "#523352",
    "29": "#523352",//gengar
    "30": "#3e3ec0",
    "31": "#fbf6f6",
    "32": "#3e3ec0",
    "33": "#3e3ec0",
    "34": "#919191",
    "35": "#fac5ff",
    "36": "#fac5ff",
    "37": "#ffb6c3",
    "38": "#ffb6c3",
    "39": "#7c5151",
    "40": "#f0f060e6",
    "41": "#ffb6c3",
    "42": "#523352",
    "43": "#3e3ec0",
    "44": "#3e3ec0",
    "45": "#de3a3a",
    "46": "#de3a3a",
    "47": "#de3a3a",
    "48": "#523352",
    "49": "#523352",
    "50": "#7c5151",
    "51": "#7c5151",
    "52": "#f0f060e6",
    "53": "#f0f060e6",
    "54": "#f0f060e6",
    "55": "#3e3ec0",
    "56": "#7c5151",
    "57": "#7c5151",
    "58": "#7c5151",
    "59": "#7c5151",
    "60": "#3e3ec0",
    "61": "#3e3ec0",
    "62": "#3e3ec0",
    "63": "#7c5151",
    "64": "#7c5151",
    "65": "#7c5151",
    "66": "gray",
    "67": "gray",
    "68": "gray",
    "69": "#4ca04c",
    "70": "#4ca04c",
    "71": "#4ca04c",
    "72": "#3e3ec0",
    "73": "#3e3ec0",
    "74": "#7c5151",
    "75": "#7c5151",
    "76": "#7c5151",
    "77": "#f0f060e6",//yellow
    "78": "#f0f060e6",
    "79": "#ffb6c3", //#pink
    "80": "#ffb6c3",
    "81": "gray",
    "82": "gray",
    "83": "#7c5151",
    "84": "#7c5151",
    "85": "#7c5151",
    "86": "#fbf6f6",
    "87": "#fbf6f6",
    "88": "#523352",
    "89": "#523352",
    "90": "#523352",
    "91": "#523352",
    "92": "#523352",
    "93": "#523352",
    "94": "#523352",
    "95": "gray",
    "96": "#f0f060e6",
    "97": "#f0f060e6",
    "98": "#de3a3a",
    "99": "#de3a3a",
    "100": "#de3a3a",
    "101": "#de3a3a",
    "102": "#ffb6c3",
    "103": "#f0f060e6",
    "104": "#7c5151",
    "105": "#7c5151",
    "106": "#7c5151",
    "107": "#7c5151",
    "108": "#ffb6c3",
    "109": "#523352",
    "110": "#523352",
    "111": "gray",
    "112": "gray",
    "113": "#ffb6c3",
    "114": "#3e3ec0",
    "115": "#7c5151",
    "116": "#3e3ec0",
    "117": "#3e3ec0",
    "118": "#de3a3a",
    "119": "#de3a3a",
    "120": "#7c5151",
    "121": "#523352",
    "122": "#ffb6c3",
    "123": "#4ca04c",
    "124": "#de3a3a",
    "125": "#f0f060e6",
    "126": "#de3a3a",
    "127": "#7c5151",
    "128": "#7c5151",
    "129": "#de3a3a",
    "130": "#3e3ec0",
    "131": "#3e3ec0",
    "132": "#523352",
    "133": "#7c5151",
    "134": "#3e3ec0",
    "135": "#f0f060e6",
    "136": "#de3a3a",
    "137": "#ffb6c3",
    "138": "#3e3ec0",
    "139": "#3e3ec0",
    "140": "#7c5151",
    "141": "#7c5151",
    "142": "#523352",
    "143": "black",
    "144": "#3e3ec0",
    "145": "#f0f060e6",
    "146": "#f0f060e6",
    "147": "#3e3ec0",
    "148": "#3e3ec0",
    "149": "#7c5151",
    "150": "#523352",
    "151": "#ffb6c3",
}

const dataPokemons = {
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/5e/latest/20200308140321/Bulbasaur_EpEc.gif/75px-Bulbasaur_EpEc.gif"
        },
        {
            "name": "ivysaur",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/79/latest/20200308143212/Ivysaur_EpEc.gif/135px-Ivysaur_EpEc.gif"
        },
        {
            "name": "venusaur",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a9/latest/20200308154305/Venusaur_EpEc.gif/165px-Venusaur_EpEc.gif"
        },
        {
            "name": "charmander",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f5/latest/20200102192846/Charmander_EpEc.gif/113px-Charmander_EpEc.gif"
        },
        {
            "name": "charmeleon",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/00/latest/20200203225949/Charmeleon_EpEc.gif/135px-Charmeleon_EpEc.gif"
        },
        {
            "name": "charizard",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a7/latest/20200102060755/Charizard_EpEc.gif/233px-Charizard_EpEc.gif"
        },
        {
            "name": "squirtle",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c7/latest/20200308150858/Squirtle_EpEc.gif/113px-Squirtle_EpEc.gif"
        },
        {
            "name": "wartortle",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f1/latest/20200308152603/Wartortle_EpEc.gif/135px-Wartortle_EpEc.gif"
        },
        {
            "name": "blastoise",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/ae/latest/20200308135900/Blastoise_EpEc.gif/165px-Blastoise_EpEc.gif"
        },
        {
            "name": "caterpie",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/dc/latest/20200102060524/Caterpie_EpEc.gif/105px-Caterpie_EpEc.gif"
        },
        {
            "name": "metapod",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d4/latest/20200104022410/Metapod_EpEc.gif/120px-Metapod_EpEc.gif"
        },
        {
            "name": "butterfree",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/78/latest/20200102055850/Butterfree_EpEc.gif/150px-Butterfree_EpEc.gif"
        },
        {
            "name": "pikachu",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/86/latest/20200104060254/Pikachu_original_EpEc.gif/128px-Pikachu_original_EpEc.gif"
        },
        {
            "name": "raichu",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a9/latest/20200104070420/Raichu_EpEc.gif/143px-Raichu_EpEc.gif"
        },
        {
            "name": "clefairy",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/36/latest/20200102200820/Clefairy_EpEc.gif/128px-Clefairy_EpEc.gif"
        },
        {
            "name": "clefable",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f6/latest/20200102200615/Clefable_EpEc.gif/135px-Clefable_EpEc.gif"
        },
        {
            "name": "vulpix",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/0e/latest/20200105050417/Vulpix_EpEc.gif/135px-Vulpix_EpEc.gif"
        },
        {
            "name": "ninetales",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/1f/latest/20200104033731/Ninetales_EpEc.gif/165px-Ninetales_EpEc.gif"
        },
        {
            "name": "odish",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/37/latest/20200104045310/Oddish_EpEc.gif/120px-Oddish_EpEc.gif"
        },
        {
            "name": "gloom",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4c/latest/20200103024512/Gloom_EpEc.gif/135px-Gloom_EpEc.gif"
        },
        {
            "name": "viplume",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c0/latest/20200105045129/Vileplume_EpEc_hembra.gif/143px-Vileplume_EpEc_hembra.gif"
        },
        {
            "name": "growlithe",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/1b/latest/20200103042604/Growlithe_EpEc.gif/128px-Growlithe_EpEc.gif"
        },
        {
            "name": "arcanine",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/af/latest/20200102034804/Arcanine_EpEc.gif/173px-Arcanine_EpEc.gif"
        },
        {
            "name": "machop",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bf/latest/20200104010347/Machop_EpEc.gif/120px-Machop_EpEc.gif"
        },
        {
            "name": "machoke",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d1/latest/20200104010135/Machoke_EpEc.gif/150px-Machoke_EpEc.gif"
        },
        {
            "name": "machamp",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f6/latest/20200104005641/Machamp_EpEc.gif/173px-Machamp_EpEc.gif"
        },
        {
            "name": "gastly",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/cf/latest/20200307184037/Gastly_EpEc.gif/120px-Gastly_EpEc.gif"
        },
        {
            "name": "haunter",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/26/latest/20200103045350/Haunter_EpEc.gif/165px-Haunter_EpEc.gif"
        },
        {
            "name": "gengar",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/78/latest/20200103022222/Gengar_EpEc.gif/180px-Gengar_EpEc.gif"
        },
        {
            "name": "lapras",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/9e/latest/20200103234712/Lapras_EpEc.gif/180px-Lapras_EpEc.gif"
        },
        {
            "name": "mr. mime",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/3/39/latest/20200104030503/Mr._Mime_EpEc.gif/158px-Mr._Mime_EpEc.gif"
        },
        {
            "name": "krabby",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/54/latest/20200103233904/Krabby_EpEc.gif/128px-Krabby_EpEc.gif"
        },
        {
            "name": "kingler",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b2/latest/20200103225154/Kingler_EpEc.gif/150px-Kingler_EpEc.gif"
        },
        {
            "name": "onix",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/75/latest/20200104045640/Onix_EpEc.gif/158px-Onix_EpEc.gif"
        },
        {
            "name": "mew",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/ec/latest/20200308144021/Mew_EpEc.gif/128px-Mew_EpEc.gif"
        },
        {
            "name": "mewtwo",
            "url": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/2/29/latest/20200308144638/Mewtwo_EpEc.gif/180px-Mewtwo_EpEc.gif"
        }
    ]
}