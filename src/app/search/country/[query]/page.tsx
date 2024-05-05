import Search from "@/app/components/Search";
import Filter from "@/app/components/Filter";
import CountryItem from "@/app/components/CountryItem";

const dummy = [
    {
        name: {
            common: "Jordan",
            official: "Hashemite Kingdom of Jordan",
            nativeName: {
                ara: {
                    official: "المملكة الأردنية الهاشمية",
                    common: "الأردن",
                },
            },
        },
        tld: [".jo", "الاردن."],
        cca2: "JO",
        ccn3: "400",
        cca3: "JOR",
        cioc: "JOR",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            JOD: {
                name: "Jordanian dinar",
                symbol: "د.ا",
            },
        },
        idd: {
            root: "+9",
            suffixes: ["62"],
        },
        capital: ["Amman"],
        altSpellings: [
            "JO",
            "Hashemite Kingdom of Jordan",
            "al-Mamlakah al-Urdunīyah al-Hāshimīyah",
        ],
        region: "Asia",
        subregion: "Western Asia",
        languages: {
            ara: "Arabic",
        },
        translations: {
            ara: {
                official: "المملكة الأردنية الهاشمية",
                common: "الأردن",
            },
            bre: {
                official: "Rouantelezh hachemit Jordania",
                common: "Jordania",
            },
            ces: {
                official: "Jordánské hášimovské království",
                common: "Jordánsko",
            },
            cym: {
                official: "Hashemite Kingdom of Jordan",
                common: "Jordan",
            },
            deu: {
                official: "Haschemitisches Königreich Jordanien",
                common: "Jordanien",
            },
            est: {
                official: "Jordaania Hašimiidi Kuningriik",
                common: "Jordaania",
            },
            fin: {
                official: "Jordanian hašemiittinen kunigaskunta",
                common: "Jordania",
            },
            fra: {
                official: "Royaume hachémite de Jordanie",
                common: "Jordanie",
            },
            hrv: {
                official: "Hašemitske Kraljevine Jordan",
                common: "Jordan",
            },
            hun: {
                official: "Jordánia",
                common: "Jordánia",
            },
            ita: {
                official: "Regno hascemita di Giordania",
                common: "Giordania",
            },
            jpn: {
                official: "ヨルダン·ハシミテ王国",
                common: "ヨルダン",
            },
            kor: {
                official: "요르단 하심 왕국",
                common: "요르단",
            },
            nld: {
                official: "Hasjemitisch Koninkrijk Jordanië",
                common: "Jordanië",
            },
            per: {
                official: "پادشاهی اُردُن هاشمی",
                common: "اردن",
            },
            pol: {
                official: "Jordańskie Królestwo Haszymidzkie",
                common: "Jordania",
            },
            por: {
                official: "Reino Hachemita da Jordânia",
                common: "Jordânia",
            },
            rus: {
                official: "Иорданского Хашимитского Королевства",
                common: "Иордания",
            },
            slk: {
                official: "Jordánske hášimovské kráľovstvo",
                common: "Jordánsko",
            },
            spa: {
                official: "Reino Hachemita de Jordania",
                common: "Jordania",
            },
            srp: {
                official: "Хашемитска Краљевина Јордан",
                common: "Јордан",
            },
            swe: {
                official: "Hashimitiska kungadömet Jordanien",
                common: "Jordanien",
            },
            tur: {
                official: "Ürdün Hâşimi Krallığı",
                common: "Ürdün",
            },
            urd: {
                official: "ھاشمی مملکتِ اردن",
                common: "اردن",
            },
            zho: {
                official: "约旦哈希姆王国",
                common: "约旦",
            },
        },
        latlng: [31, 36],
        landlocked: false,
        borders: ["IRQ", "ISR", "PSE", "SAU", "SYR"],
        area: 89342,
        demonyms: {
            eng: {
                f: "Jordanian",
                m: "Jordanian",
            },
            fra: {
                f: "Jordanienne",
                m: "Jordanien",
            },
        },
        flag: "🇯🇴",
        maps: {
            googleMaps: "https://goo.gl/maps/ko1dzSDKg8Gsi9A98",
            openStreetMaps: "https://www.openstreetmap.org/relation/184818",
        },
        population: 10203140,
        gini: {
            "2010": 33.7,
        },
        fifa: "JOR",
        car: {
            signs: ["HKJ"],
            side: "right",
        },
        timezones: ["UTC+03:00"],
        continents: ["Asia"],
        flags: {
            png: "https://flagcdn.com/w320/jo.png",
            svg: "https://flagcdn.com/jo.svg",
            alt: "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/jo.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/jo.svg",
        },
        startOfWeek: "sunday",
        capitalInfo: {
            latlng: [31.95, 35.93],
        },
        postalCode: {
            format: "#####",
            regex: "^(\\d{5})$",
        },
    },
    {
        name: {
            common: "Northern Mariana Islands",
            official: "Commonwealth of the Northern Mariana Islands",
            nativeName: {
                cal: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands",
                },
                cha: {
                    official: "Sankattan Siha Na Islas Mariånas",
                    common: "Na Islas Mariånas",
                },
                eng: {
                    official: "Commonwealth of the Northern Mariana Islands",
                    common: "Northern Mariana Islands",
                },
            },
        },
        tld: [".mp"],
        cca2: "MP",
        ccn3: "580",
        cca3: "MNP",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        idd: {
            root: "+1",
            suffixes: ["670"],
        },
        capital: ["Saipan"],
        altSpellings: [
            "MP",
            "Commonwealth of the Northern Mariana Islands",
            "Sankattan Siha Na Islas Mariånas",
        ],
        region: "Oceania",
        subregion: "Micronesia",
        languages: {
            cal: "Carolinian",
            cha: "Chamorro",
            eng: "English",
        },
        translations: {
            ara: {
                official: "كومونولث جزر ماريانا الشمالية",
                common: "جزر ماريانا الشمالية",
            },
            bre: {
                official: "Kenglad Inizi Mariana an Norzh",
                common: "Inizi Mariana an Norzh",
            },
            ces: {
                official: "Společenství Severních Marian",
                common: "Severní Mariany",
            },
            cym: {
                official: "Commonwealth of the Northern Mariana Islands",
                common: "Northern Mariana Islands",
            },
            deu: {
                official: "Commonwealth der Nördlichen Marianen",
                common: "Nördliche Marianen",
            },
            est: {
                official: "Põhja-Mariaani Ühendus",
                common: "Põhja-Mariaanid",
            },
            fin: {
                official: "Pohjois-Mariaanit",
                common: "Pohjois-Mariaanit",
            },
            fra: {
                official: "Commonwealth des îles Mariannes du Nord",
                common: "Îles Mariannes du Nord",
            },
            hrv: {
                official: "Zajednica je Sjeverni Marijanski otoci",
                common: "Sjevernomarijanski otoci",
            },
            hun: {
                official: "Északi-Mariana-szigetek",
                common: "Északi-Mariana-szigetek",
            },
            ita: {
                official: "Commonwealth delle Isole Marianne Settentrionali",
                common: "Isole Marianne Settentrionali",
            },
            jpn: {
                official: "北マリアナ諸島",
                common: "北マリアナ諸島",
            },
            kor: {
                official: "북마리아나 제도",
                common: "북마리아나 제도",
            },
            nld: {
                official: "Commonwealth van de Noordelijke Marianen",
                common: "Noordelijke Marianeneilanden",
            },
            per: {
                official: "جزایر ماریانای شمالی",
                common: "جزایر ماریانای شمالی",
            },
            pol: {
                official: "Wspólnota Marianów Północnych",
                common: "Mariany Północne",
            },
            por: {
                official: "Comunidade das Ilhas Marianas do Norte",
                common: "Marianas Setentrionais",
            },
            rus: {
                official: "Содружество Северных Марианских островов",
                common: "Северные Марианские острова",
            },
            slk: {
                official: "Spoločenstvo ostrovov Severné Mariány",
                common: "Severné Mariány",
            },
            spa: {
                official: "Mancomunidad de las Islas Marianas del Norte",
                common: "Islas Marianas del Norte",
            },
            srp: {
                official: "Комонвелт Северна Маријанска Острва",
                common: "Северна Маријанска Острва",
            },
            swe: {
                official: "Nordmarianerna",
                common: "Nordmarianerna",
            },
            tur: {
                official: "Kuzey Mariana Adaları Milletler Topluluğu",
                common: "Kuzey Mariana Adaları",
            },
            urd: {
                official: "دولتِ مشترکہ جزائر شمالی ماریانا",
                common: "جزائر شمالی ماریانا",
            },
            zho: {
                official: "北马里亚纳群岛",
                common: "北马里亚纳群岛",
            },
        },
        latlng: [15.2, 145.75],
        landlocked: false,
        area: 464,
        demonyms: {
            eng: {
                f: "American",
                m: "American",
            },
            fra: {
                f: "Américaine",
                m: "Américan",
            },
        },
        flag: "🇲🇵",
        maps: {
            googleMaps: "https://goo.gl/maps/cpZ67knoRAcfu1417",
            openStreetMaps: "https://www.openstreetmap.org/relation/306004",
        },
        population: 57557,
        car: {
            signs: ["USA"],
            side: "right",
        },
        timezones: ["UTC+10:00"],
        continents: ["Oceania"],
        flags: {
            png: "https://flagcdn.com/w320/mp.png",
            svg: "https://flagcdn.com/mp.svg",
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [15.2, 145.75],
        },
    },
    {
        name: {
            common: "Serbia",
            official: "Republic of Serbia",
            nativeName: {
                srp: {
                    official: "Република Србија",
                    common: "Србија",
                },
            },
        },
        tld: [".rs", ".срб"],
        cca2: "RS",
        ccn3: "688",
        cca3: "SRB",
        cioc: "SRB",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            RSD: {
                name: "Serbian dinar",
                symbol: "дин.",
            },
        },
        idd: {
            root: "+3",
            suffixes: ["81"],
        },
        capital: ["Belgrade"],
        altSpellings: [
            "RS",
            "Srbija",
            "Republic of Serbia",
            "Република Србија",
            "Republika Srbija",
        ],
        region: "Europe",
        subregion: "Southeast Europe",
        languages: {
            srp: "Serbian",
        },
        translations: {
            ara: {
                official: "جمهورية صيربيا",
                common: "صيربيا",
            },
            bre: {
                official: "Republik Serbia",
                common: "Serbia",
            },
            ces: {
                official: "Srbská republika",
                common: "Srbsko",
            },
            cym: {
                official: "Republic of Serbia",
                common: "Serbia",
            },
            deu: {
                official: "Republik Serbien",
                common: "Serbien",
            },
            est: {
                official: "Serbia Vabariik",
                common: "Serbia",
            },
            fin: {
                official: "Serbian tasavalta",
                common: "Serbia",
            },
            fra: {
                official: "République de Serbie",
                common: "Serbie",
            },
            hrv: {
                official: "Republika Srbija",
                common: "Srbija",
            },
            hun: {
                official: "Szerb Köztársaság",
                common: "Szerbia",
            },
            ita: {
                official: "Repubblica di Serbia",
                common: "Serbia",
            },
            jpn: {
                official: "セルビア共和国",
                common: "セルビア",
            },
            kor: {
                official: "세르비아 공화국",
                common: "세르비아",
            },
            nld: {
                official: "Republiek Servië",
                common: "Servië",
            },
            per: {
                official: "جمهوری صربستان",
                common: "صربستان",
            },
            pol: {
                official: "Republika Serbii",
                common: "Serbia",
            },
            por: {
                official: "República da Sérvia",
                common: "Sérvia",
            },
            rus: {
                official: "Республика Сербия",
                common: "Сербия",
            },
            slk: {
                official: "Srbská republika",
                common: "Srbsko",
            },
            spa: {
                official: "República de Serbia",
                common: "Serbia",
            },
            srp: {
                official: "Република Србија",
                common: "Србија",
            },
            swe: {
                official: "Republiken Serbien",
                common: "Serbien",
            },
            tur: {
                official: "Sırbistan Cumhuriyeti",
                common: "Sırbistan",
            },
            urd: {
                official: "جمہوریہ سربیا",
                common: "سربیا",
            },
            zho: {
                official: "塞尔维亚共和国",
                common: "塞尔维亚",
            },
        },
        latlng: [44, 21],
        landlocked: true,
        borders: ["BIH", "BGR", "HRV", "HUN", "UNK", "MKD", "MNE", "ROU"],
        area: 88361,
        demonyms: {
            eng: {
                f: "Serbian",
                m: "Serbian",
            },
            fra: {
                f: "Serbe",
                m: "Serbe",
            },
        },
        flag: "🇷🇸",
        maps: {
            googleMaps: "https://goo.gl/maps/2Aqof7aV2Naq8YEK8",
            openStreetMaps: "https://www.openstreetmap.org/relation/1741311",
        },
        population: 6908224,
        gini: {
            "2017": 36.2,
        },
        fifa: "SRB",
        car: {
            signs: ["SRB"],
            side: "right",
        },
        timezones: ["UTC+01:00"],
        continents: ["Europe"],
        flags: {
            png: "https://flagcdn.com/w320/rs.png",
            svg: "https://flagcdn.com/rs.svg",
            alt: "The flag of Serbia is composed of three equal horizontal bands of red, blue and white. The coat of arms of Serbia is superimposed at the center of the field slightly towards the hoist side.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/rs.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/rs.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [44.83, 20.5],
        },
        postalCode: {
            format: "######",
            regex: "^(\\d{6})$",
        },
    },
    {
        name: {
            common: "Andorra",
            official: "Principality of Andorra",
            nativeName: {
                cat: {
                    official: "Principat d'Andorra",
                    common: "Andorra",
                },
            },
        },
        tld: [".ad"],
        cca2: "AD",
        ccn3: "020",
        cca3: "AND",
        cioc: "AND",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€",
            },
        },
        idd: {
            root: "+3",
            suffixes: ["76"],
        },
        capital: ["Andorra la Vella"],
        altSpellings: ["AD", "Principality of Andorra", "Principat d'Andorra"],
        region: "Europe",
        subregion: "Southern Europe",
        languages: {
            cat: "Catalan",
        },
        translations: {
            ara: {
                official: "إمارة أندورا",
                common: "أندورا",
            },
            bre: {
                official: "Priñselezh Andorra",
                common: "Andorra",
            },
            ces: {
                official: "Andorrské knížectví",
                common: "Andorra",
            },
            cym: {
                official: "Tywysogaeth Andorra",
                common: "Andorra",
            },
            deu: {
                official: "Fürstentum Andorra",
                common: "Andorra",
            },
            est: {
                official: "Andorra Vürstiriik",
                common: "Andorra",
            },
            fin: {
                official: "Andorran ruhtinaskunta",
                common: "Andorra",
            },
            fra: {
                official: "Principauté d'Andorre",
                common: "Andorre",
            },
            hrv: {
                official: "Kneževina Andora",
                common: "Andora",
            },
            hun: {
                official: "Andorra",
                common: "Andorra",
            },
            ita: {
                official: "Principato di Andorra",
                common: "Andorra",
            },
            jpn: {
                official: "アンドラ公国",
                common: "アンドラ",
            },
            kor: {
                official: "안도라 공국",
                common: "안도라",
            },
            nld: {
                official: "Prinsdom Andorra",
                common: "Andorra",
            },
            per: {
                official: "شاهزاده\u200cنشین آندورا",
                common: "آندورا",
            },
            pol: {
                official: "Księstwo Andory",
                common: "Andora",
            },
            por: {
                official: "Principado de Andorra",
                common: "Andorra",
            },
            rus: {
                official: "Княжество Андорра",
                common: "Андорра",
            },
            slk: {
                official: "Andorrské kniežatstvo",
                common: "Andorra",
            },
            spa: {
                official: "Principado de Andorra",
                common: "Andorra",
            },
            srp: {
                official: "Кнежевина Андора",
                common: "Андора",
            },
            swe: {
                official: "Furstendömet Andorra",
                common: "Andorra",
            },
            tur: {
                official: "Andorra Prensliği",
                common: "Andorra",
            },
            urd: {
                official: "اماراتِ انڈورا",
                common: "انڈورا",
            },
            zho: {
                official: "安道尔公国",
                common: "安道尔",
            },
        },
        latlng: [42.5, 1.5],
        landlocked: true,
        borders: ["FRA", "ESP"],
        area: 468,
        demonyms: {
            eng: {
                f: "Andorran",
                m: "Andorran",
            },
            fra: {
                f: "Andorrane",
                m: "Andorran",
            },
        },
        flag: "🇦🇩",
        maps: {
            googleMaps: "https://goo.gl/maps/JqAnacWE2qEznKgw7",
            openStreetMaps: "https://www.openstreetmap.org/relation/9407",
        },
        population: 77265,
        fifa: "AND",
        car: {
            signs: ["AND"],
            side: "right",
        },
        timezones: ["UTC+01:00"],
        continents: ["Europe"],
        flags: {
            png: "https://flagcdn.com/w320/ad.png",
            svg: "https://flagcdn.com/ad.svg",
            alt: "The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band.",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/ad.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/ad.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [42.5, 1.52],
        },
        postalCode: {
            format: "AD###",
            regex: "^(?:AD)*(\\d{3})$",
        },
    },
    {
        name: {
            common: "Turks and Caicos Islands",
            official: "Turks and Caicos Islands",
            nativeName: {
                eng: {
                    official: "Turks and Caicos Islands",
                    common: "Turks and Caicos Islands",
                },
            },
        },
        tld: [".tc"],
        cca2: "TC",
        ccn3: "796",
        cca3: "TCA",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$",
            },
        },
        idd: {
            root: "+1",
            suffixes: ["649"],
        },
        capital: ["Cockburn Town"],
        altSpellings: ["TC"],
        region: "Americas",
        subregion: "Caribbean",
        languages: {
            eng: "English",
        },
        translations: {
            ara: {
                official: "جزر توركس وكايكوس",
                common: "جزر توركس وكايكوس",
            },
            bre: {
                official: "Inizi Turks ha Caicos",
                common: "Inizi Turks ha Caicos",
            },
            ces: {
                official: "Turks a Caicos",
                common: "Turks a Caicos",
            },
            cym: {
                official: "Turks and Caicos Islands",
                common: "Turks and Caicos Islands",
            },
            deu: {
                official: "Turks und Caicos Inseln",
                common: "Turks-und Caicosinseln",
            },
            est: {
                official: "Turksi ja Caicose saared",
                common: "Turks ja Caicos",
            },
            fin: {
                official: "Turks-ja Caicossaaret",
                common: "Turks-ja Caicossaaret",
            },
            fra: {
                official: "Îles Turques et Caïques",
                common: "Îles Turques-et-Caïques",
            },
            hrv: {
                official: "Otoci Turks i Caicos",
                common: "Otoci Turks i Caicos",
            },
            hun: {
                official: "Turks- és Caicos-szigetek",
                common: "Turks- és Caicos-szigetek",
            },
            ita: {
                official: "Turks e Caicos",
                common: "Isole Turks e Caicos",
            },
            jpn: {
                official: "タークス·カイコス諸島",
                common: "タークス・カイコス諸島",
            },
            kor: {
                official: "터크스 케이커스 제도",
                common: "터크스 케이커스 제도",
            },
            nld: {
                official: "Turks-en Caicoseilanden",
                common: "Turks-en Caicoseilanden",
            },
            per: {
                official: "جزایر تورکس و کایکوس",
                common: "جزایر تورکس و کایکوس",
            },
            pol: {
                official: "Turks i Caicos",
                common: "Turks i Caicos",
            },
            por: {
                official: "Ilhas Turks e Caicos",
                common: "Ilhas Turks e Caicos",
            },
            rus: {
                official: "Теркс и Кайкос острова",
                common: "Теркс и Кайкос",
            },
            slk: {
                official: "Ostrovy Turks a Caicos",
                common: "Turks a Caicos",
            },
            spa: {
                official: "Islas Turcas y Caicos",
                common: "Islas Turks y Caicos",
            },
            srp: {
                official: "Острва Теркс и Кејкос",
                common: "Теркс и Кејкос",
            },
            swe: {
                official: "Turks- och Caicosöarna",
                common: "Turks- och Caicosöarna",
            },
            tur: {
                official: "Turks ve Caicos Adaları",
                common: "Turks ve Caicos Adaları",
            },
            urd: {
                official: "جزائر کیکس و ترکیہ",
                common: "جزائر کیکس و ترکیہ",
            },
            zho: {
                official: "特克斯和凯科斯群岛",
                common: "特克斯和凯科斯群岛",
            },
        },
        latlng: [21.75, -71.58333333],
        landlocked: false,
        area: 948,
        demonyms: {
            eng: {
                f: "Turks and Caicos Islander",
                m: "Turks and Caicos Islander",
            },
        },
        flag: "🇹🇨",
        maps: {
            googleMaps: "https://goo.gl/maps/R8VUDQfwZiFtvmyn8",
            openStreetMaps: "https://www.openstreetmap.org/relation/547479",
        },
        population: 38718,
        fifa: "TCA",
        car: {
            signs: ["GB"],
            side: "left",
        },
        timezones: ["UTC-04:00"],
        continents: ["North America"],
        flags: {
            png: "https://flagcdn.com/w320/tc.png",
            svg: "https://flagcdn.com/tc.svg",
        },
        coatOfArms: {},
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [21.46, -71.14],
        },
        postalCode: {
            format: "TKCA 1ZZ",
            regex: "^(TKCA 1ZZ)$",
        },
    },
    {
        name: {
            common: "Bermuda",
            official: "Bermuda",
            nativeName: {
                eng: {
                    official: "Bermuda",
                    common: "Bermuda",
                },
            },
        },
        tld: [".bm"],
        cca2: "BM",
        ccn3: "060",
        cca3: "BMU",
        cioc: "BER",
        independent: false,
        status: "officially-assigned",
        unMember: false,
        currencies: {
            BMD: {
                name: "Bermudian dollar",
                symbol: "$",
            },
        },
        idd: {
            root: "+1",
            suffixes: ["441"],
        },
        capital: ["Hamilton"],
        altSpellings: [
            "BM",
            "The Islands of Bermuda",
            "The Bermudas",
            "Somers Isles",
        ],
        region: "Americas",
        subregion: "North America",
        languages: {
            eng: "English",
        },
        translations: {
            ara: {
                official: "برمودا",
                common: "برمودا",
            },
            bre: {
                official: "Bermuda",
                common: "Bermuda",
            },
            ces: {
                official: "Bermudské ostrovy",
                common: "Bermudy",
            },
            cym: {
                official: "Bermiwda",
                common: "Bermiwda",
            },
            deu: {
                official: "Bermuda",
                common: "Bermuda",
            },
            est: {
                official: "Bermuda",
                common: "Bermuda",
            },
            fin: {
                official: "Bermuda",
                common: "Bermuda",
            },
            fra: {
                official: "Bermudes",
                common: "Bermudes",
            },
            hrv: {
                official: "Bermuda",
                common: "Bermudi",
            },
            hun: {
                official: "Bermuda",
                common: "Bermuda",
            },
            ita: {
                official: "Bermuda",
                common: "Bermuda",
            },
            jpn: {
                official: "バミューダ",
                common: "バミューダ",
            },
            kor: {
                official: "버뮤다",
                common: "버뮤다",
            },
            nld: {
                official: "Bermuda",
                common: "Bermuda",
            },
            per: {
                official: "جزایر برمودا",
                common: "برمودا",
            },
            pol: {
                official: "Bermudy",
                common: "Bermudy",
            },
            por: {
                official: "Bermudas",
                common: "Bermudas",
            },
            rus: {
                official: "Бермудские острова",
                common: "Бермудские Острова",
            },
            slk: {
                official: "Bermudy",
                common: "Bermudy",
            },
            spa: {
                official: "Bermuda",
                common: "Bermudas",
            },
            srp: {
                official: "Бермуда",
                common: "Бермуда",
            },
            swe: {
                official: "Bermuda",
                common: "Bermuda",
            },
            tur: {
                official: "Bermuda",
                common: "Bermuda",
            },
            urd: {
                official: "برمودا",
                common: "برمودا",
            },
            zho: {
                official: "百慕大",
                common: "百慕大",
            },
        },
        latlng: [32.33333333, -64.75],
        landlocked: false,
        area: 54,
        demonyms: {
            eng: {
                f: "Bermudian",
                m: "Bermudian",
            },
            fra: {
                f: "Bermudienne",
                m: "Bermudien",
            },
        },
        flag: "🇧🇲",
        maps: {
            googleMaps: "https://goo.gl/maps/NLsRGNjTzDghTtAJA",
            openStreetMaps: "https://www.openstreetmap.org/relation/1993208",
        },
        population: 63903,
        fifa: "BER",
        car: {
            signs: ["GB"],
            side: "left",
        },
        timezones: ["UTC-04:00"],
        continents: ["North America"],
        flags: {
            png: "https://flagcdn.com/w320/bm.png",
            svg: "https://flagcdn.com/bm.svg",
        },
        coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/bm.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/bm.svg",
        },
        startOfWeek: "monday",
        capitalInfo: {
            latlng: [32.28, -64.78],
        },
        postalCode: {
            format: "@@ ##",
            regex: "^([A-Z]{2}\\d{2})$",
        },
    },
];

export function generateMetadata({ params }: { params: { query: string } }) {
    return {
        title: `Where In The World | Search Results For: ${params.query}`,
    };
}

export default async function Countries({
    params,
}: {
    params: { query: string };
}) {
    const res = await fetch(
        `${process.env.LOCAL_SOURCE_URL}/filter?country=${params.query}`
    );

    if (!res.ok) throw new Error("BRUH");

    const data: CountryData[] = await res.json();

    return (
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {data.map((country) => (
                <CountryItem key={country.name.common} data={country} />
            ))}
        </div>
    );
}
