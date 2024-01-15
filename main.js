//Messages - Aries
const aries = 'Aries';
const ariesTraits = ['strong competitiveness', 'being energetic', 'being impulsive', 'being athletic', 'having an appetite for winning', 'being dynamic'];
const ariesPlanet = ['Mars'];
const ariesNumber = [1, 9, 19, 22, 33];

//Messages - Taurus
const taurus = 'Taurus';
const taurusTraits = ['being sentual', 'being resolute', 'being grounded', 'being tenacious', 'being very stubborn', 'loving luxury'];
const taurusPlanet = ['Venus'];
const taurusNumber = [2, 4, 8, 16, 20];

//Messages - Gemini
const gemini = 'Gemini';
const geminiTraits = ['being witty', 'being curious', 'being charming', 'being flighty', 'loving sharing whats on your mind', 'having great social skills'];
const geminiPlanet = ['Mercury'];
const geminiNumber = [5, 9, 10, 25, 35];

//Messages - Cancer
const cancer = 'Cancer';
const cancerTraits = ['being compassionate', 'being giving', 'being sentimental', 'having a nurturing nature', 'prioritising connections with loved ones', 'being self protective'];
const cancerPlanet = ['Moon'];
const cancerNumber = [2, 7, 11, 29, 47];

//Messages - Leo
const leo = 'Leo';
const leoTraits = ['being charismatic', 'being dramatic', 'generosity', 'having an optimistic outlook', 'strong self belief', 'strong loyalty'];
const leoPlanet = ['Sun'];
const leoNumber = [1, 5, 9, 19, 26];

//Messages - Virgo
const virgo = 'Virgo';
const virgoTraits = ['being health-concious', 'being analytical', 'focusing on details', 'being self-orientated', 'enjoying research', 'loving lists and spreadsheets'];
const virgoPlanet = ['Mercury'];
const virgoNumber = [3, 6, 9, 12, 15];

//Messages - Libra
const libra = 'Libra';
const libraTraits = ['being romantic', 'being indecisive', 'being artistic', 'being diplomatic', 'enjoying hosting', 'prioritising one-on-one bonds'];
const libraPlanet = ['Venus'];
const libraNumber = [6, 9, 15, 24, 33];

//Messages - Scorpio
const scorpio = 'Scorpio';
const scorpioTraits = ['seeking power', 'being mysterious', 'being magentic', 'being spitirtual', 'ability to command attention', 'keeping your cards close to your chest'];
const scorpioPlanet = ['Pluto'];
const scorpioNumber = [9, 18, 27, 36, 45];

//Messages - Sagittarius
const sagittarius = 'Sagittarius';
const sagittariusTraits = ['being free-spirited', 'being philisophical', 'being un-filtered', 'havin a big personality', 'loving exploring', 'having a natural gift for comedy'];
const sagittariusPlanet = ['Jupiter'];
const sagittariusNumber = [3, 5, 8, 20, 29];

//Messages - Capricorn 
const capricorn = 'Capricorn';
const capricornTraits = ['being traditional', 'being down to earth', 'being industrious', 'being disciplined', 'being very driven', 'being extremely loyal'];
const capricornPlanet = ['Saturn'];
const capricornNumber = [2, 8, 10, 15, 26];

//Messages - Aquarius
const aquarius = 'Aquarius';
const aquariusTraits = ['being a humanitariun', 'being eccentric', 'being individualistic', 'being cool', 'being quirky', 'being very social'];
const aquariusPlanet = ['Uranus'];
const aquariusNumber = [4, 8, 13, 17, 22];

//Messaes - Pisces
const pisces = 'Pisces';
const piscesTraits = ['having empathy', 'being artistic', 'being psychic', 'being dreamy', 'being incredibly sensitive and intuitive', 'a big imagination'];
const piscesPlanet = ['Neptune'];
const piscesNumber = [3, 7, 12, 16, 21];


// Message Generating Function
const messageGenerator = (day, month) => {

    const randomIndex = Math.floor(Math.random() * ariesTraits.length);
    const randomNumIndex = Math.floor(Math.random() * ariesNumber.length);

    if (day >= 21 && day <= 31 && month === 'march') {
        console.log(`Your star sign is ${aries} and your ruling planet is ${ariesPlanet}. One on your key traits is ${ariesTraits[randomIndex]}. Your lucky number for today is ${ariesNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 19 && month === 'april') {
        console.log(`Your star sign is ${aries} and your ruling planet is ${ariesPlanet}. One on your key traits is ${ariesTraits[randomIndex]}. Your lucky number for today is ${ariesNumber[randomNumIndex]}.`);
    } else if (day > 19 && day <= 30 && month === 'april') {
        console.log(`Your star sign is ${taurus} and your ruling planet is ${taurusPlanet}. One on your key traits is ${taurusTraits[randomIndex]}. Your lucky number for today is ${taurusNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 20 && month === 'may') {
        console.log(`Your star sign is ${taurus} and your ruling planet is ${taurusPlanet}. One on your key traits is ${taurusTraits[randomIndex]}. Your lucky number for today is ${taurusNumber[randomNumIndex]}.`);
    } else if (day > 20 && day <= 31 && month === 'may') {
        console.log(`Your star sign is ${gemini} and your ruling planet is ${geminiPlanet}. One on your key traits is ${geminiTraits[randomIndex]}. Your lucky number for today is ${geminiNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 20 && month === 'june') {
        console.log(`Your star sign is ${gemini} and your ruling planet is ${geminiPlanet}. One on your key traits is ${geminiTraits[randomIndex]}. Your lucky number for today is ${geminiNumber[randomNumIndex]}.`);
    } else if (day > 20 && day <= 30 && month === 'june') {
        console.log(`Your star sign is ${cancer} and your ruling planet is the ${cancerPlanet}. One on your key traits is ${cancerTraits[randomIndex]}. Your lucky number for today is ${cancerNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 22 && month === 'july') {
        console.log(`Your star sign is ${cancer} and your ruling planet is the ${cancerPlanet}. One on your key traits is ${cancerTraits[randomIndex]}. Your lucky number for today is ${cancerNumber[randomNumIndex]}.`);
    } else if (day > 22 && day <= 31 && month === 'july') {
        console.log(`Your star sign is ${leo} and your ruling planet is the ${leoPlanet}. One on your key traits is ${leoTraits[randomIndex]}. Your lucky number for today is ${leoNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 22 && month === 'august') {
        console.log(`Your star sign is ${leo} and your ruling planet is the ${leoPlanet}. One on your key traits is ${leoTraits[randomIndex]}. Your lucky number for today is ${leoNumber[randomNumIndex]}.`);
    } else if (day > 22 && day <= 31 && month === 'august') {
        console.log(`Your star sign is ${virgo} and your ruling planet is the ${virgoPlanet}. One on your key traits is ${virgoTraits[randomIndex]}. Your lucky number for today is ${virgoNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 22 && month === 'september') {
        console.log(`Your star sign is ${virgo} and your ruling planet is the ${virgoPlanet}. One on your key traits is ${virgoTraits[randomIndex]}. Your lucky number for today is ${virgoNumber[randomNumIndex]}.`);
    } else if (day > 22 && day <= 30 && month === 'september') {
        console.log(`Your star sign is ${libra} and your ruling planet is the ${libraPlanet}. One on your key traits is ${libraTraits[randomIndex]}. Your lucky number for today is ${libraNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 22 && month === 'october') {
        console.log(`Your star sign is ${libra} and your ruling planet is the ${libraPlanet}. One on your key traits is ${libraTraits[randomIndex]}. Your lucky number for today is ${libraNumber[randomNumIndex]}.`);
    } else if (day > 22 && day <= 31 && month === 'october') {
        console.log(`Your star sign is ${scorpio} and your ruling planet is the ${scorpioPlanet}. One on your key traits is ${scorpioTraits[randomIndex]}. Your lucky number for today is ${scorpioNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 21 && month === 'november') {
        console.log(`Your star sign is ${scorpio} and your ruling planet is the ${scorpioPlanet}. One on your key traits is ${scorpioTraits[randomIndex]}. Your lucky number for today is ${scorpioNumber[randomNumIndex]}.`);
    } else if (day > 21 && day <= 30 && month === 'november') {
        console.log(`Your star sign is ${sagittarius} and your ruling planet is the ${sagittariusPlanet}. One on your key traits is ${sagittariusTraits[randomIndex]}. Your lucky number for today is ${sagittariusNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 21 && month === 'december') {
        console.log(`Your star sign is ${sagittarius} and your ruling planet is the ${sagittariusPlanet}. One on your key traits is ${sagittariusTraits[randomIndex]}. Your lucky number for today is ${sagittariusNumber[randomNumIndex]}.`);
    } else if (day > 22 && day <= 31 && month === 'december') {
        console.log(`Your star sign is ${capricorn} and your ruling planet is the ${capricornPlanet}. One on your key traits is ${capricornTraits[randomIndex]}. Your lucky number for today is ${capricornNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 19 && month === 'january') {
        console.log(`Your star sign is ${capricorn} and your ruling planet is the ${capricornPlanet}. One on your key traits is ${capricornTraits[randomIndex]}. Your lucky number for today is ${capricornNumber[randomNumIndex]}.`);
    } else if (day > 19 && day <= 31 && month === 'january') {
        console.log(`Your star sign is ${aquarius} and your ruling planet is the ${aquariusPlanet}. One on your key traits is ${aquariusTraits[randomIndex]}. Your lucky number for today is ${aquariusNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 18 && month === 'february') {
        console.log(`Your star sign is ${aquarius} and your ruling planet is the ${aquariusPlanet}. One on your key traits is ${aquariusTraits[randomIndex]}. Your lucky number for today is ${aquariusNumber[randomNumIndex]}.`);
    } else if (day > 18 && day <= 29 && month === 'february') {
        console.log(`Your star sign is ${pisces} and your ruling planet is the ${piscesPlanet}. One on your key traits is ${piscesTraits[randomIndex]}. Your lucky number for today is ${piscesNumber[randomNumIndex]}.`);
    } else if (day > 0 && day <= 20  && month === 'march') {
        console.log(`Your star sign is ${pisces} and your ruling planet is the ${piscesPlanet}. One on your key traits is ${piscesTraits[randomIndex]}. Your lucky number for today is ${piscesNumber[randomNumIndex]}.`);
    } else {
        console.log('You have entered an invalid input. Please try again.')
    }
};