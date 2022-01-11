
<p align="center">
 <img width="20%" height="20%" src="logo.png">
</p>

<br />

> All the Fake Data for All Your Real Needs 🙂

Run it on [Stackblitz](https://stackblitz.com/edit/typescript-pjao1u?file=index.ts)

<br />

## Installation

```
npm i @ngneat/falso
yarn add @ngneat/falso
```

## Methods

#### `rand<T>(arr: T[]): T`

```ts
import { rand } from '@ngneat/falso';

// Random item from array
rand([1, 2, 3, 4, 5]);
```

#### `seed(value?: string)`

```ts
import { rand, seed } from '@ngneat/falso';

seed('some-constant-seed');
// Always returns 2
rand([1, 2, 3, 4, 5]);
// Reset random seed
seed();
```

#### `zipCode()`

```ts
import { zipCode } from '@ngneat/falso';

// 53911
zipCode();
```

#### `zipCodeByState()`

```ts
import { zipCodeByState } from '@ngneat/falso';

// 78062
zipCodeByState();
```

#### `city()`

```ts
import { city } from '@ngneat/falso';

// South Verdieton
city();
```

#### `cityPrefix()`

```ts
import { cityPrefix } from '@ngneat/falso';

// West
cityPrefix();
```

#### `citySuffix()`

```ts
import { citySuffix } from '@ngneat/falso';

// town
citySuffix();
```

#### `cityName()`

```ts
import { cityName } from '@ngneat/falso';

// Lake Charles
cityName();
```

#### `streetName()`

```ts
import { streetName } from '@ngneat/falso';

// Cronin Shoal
streetName();
```

#### `streetAddress()`

```ts
import { streetAddress } from '@ngneat/falso';

// 58739 Bridie Mission
streetAddress();
```

#### `streetSuffix()`

```ts
import { streetSuffix } from '@ngneat/falso';

// Square
streetSuffix();
```

#### `streetPrefix()`

```ts
import { streetPrefix } from '@ngneat/falso';

// c
streetPrefix();
```

#### `secondaryAddress()`

```ts
import { secondaryAddress } from '@ngneat/falso';

// Apt. 977
secondaryAddress();
```

#### `county()`

```ts
import { county } from '@ngneat/falso';

// Berkshire
county();
```

#### `country()`

```ts
import { country } from '@ngneat/falso';

// Saint Kitts and Nevis
country();
```

#### `countryCode()`

```ts
import { countryCode } from '@ngneat/falso';

// BN
countryCode();
```

#### `state()`

```ts
import { state } from '@ngneat/falso';

// Kentucky
state();
```

#### `stateAbbr()`

```ts
import { stateAbbr } from '@ngneat/falso';

// OK
stateAbbr();
```

#### `latitude()`

```ts
import { latitude } from '@ngneat/falso';

// 46.1515
latitude();
```

#### `longitude()`

```ts
import { longitude } from '@ngneat/falso';

// -162.0090
longitude();
```

#### `direction()`

```ts
import { direction } from '@ngneat/falso';

// West
direction();
```

#### `cardinalDirection()`

```ts
import { cardinalDirection } from '@ngneat/falso';

// North
cardinalDirection();
```

#### `ordinalDirection()`

```ts
import { ordinalDirection } from '@ngneat/falso';

// Northwest
ordinalDirection();
```

#### `nearbyGPSCoordinate()`

```ts
import { nearbyGPSCoordinate } from '@ngneat/falso';

// 55.6541,53.7382
nearbyGPSCoordinate();
```

#### `timeZone()`

```ts
import { timeZone } from '@ngneat/falso';

// Europe/Minsk
timeZone();
```

#### `dog()`

```ts
import { dog } from '@ngneat/falso';

// Newfoundland
dog();
```

#### `cat()`

```ts
import { cat } from '@ngneat/falso';

// Singapura
cat();
```

#### `snake()`

```ts
import { snake } from '@ngneat/falso';

// Whip snake
snake();
```

#### `bear()`

```ts
import { bear } from '@ngneat/falso';

// Sloth bear
bear();
```

#### `lion()`

```ts
import { lion } from '@ngneat/falso';

// Asiatic Lion
lion();
```

#### `cetacean()`

```ts
import { cetacean } from '@ngneat/falso';

// Rough-Toothed Dolphin
cetacean();
```

#### `horse()`

```ts
import { horse } from '@ngneat/falso';

// Mezőhegyesi Sport Horse
horse();
```

#### `bird()`

```ts
import { bird } from '@ngneat/falso';

// Oriental Greenfinch
bird();
```

#### `cow()`

```ts
import { cow } from '@ngneat/falso';

// Fleckvieh
cow();
```

#### `fish()`

```ts
import { fish } from '@ngneat/falso';

// Silver carp
fish();
```

#### `crocodilia()`

```ts
import { crocodilia } from '@ngneat/falso';

// Australian Freshwater Crocodile
crocodilia();
```

#### `insect()`

```ts
import { insect } from '@ngneat/falso';

// Tramp ant
insect();
```

#### `rabbit()`

```ts
import { rabbit } from '@ngneat/falso';

// Thrianta
rabbit();
```

#### `animalType()`

```ts
import { animalType } from '@ngneat/falso';

// lion
animalType();
```

#### `databaseColumn()`

```ts
import { databaseColumn } from '@ngneat/falso';

// name
databaseColumn();
```

#### `databaseType()`

```ts
import { databaseType } from '@ngneat/falso';

// blob
databaseType();
```

#### `databaseCollation()`

```ts
import { databaseCollation } from '@ngneat/falso';

// ascii_bin
databaseCollation();
```

#### `databaseEngine()`

```ts
import { databaseEngine } from '@ngneat/falso';

// CSV
databaseEngine();
```

#### `account()`

```ts
import { account } from '@ngneat/falso';

// 20671518
account();
```

#### `accountName()`

```ts
import { accountName } from '@ngneat/falso';

// Auto Loan Account
accountName();
```

#### `routingNumber()`

```ts
import { routingNumber } from '@ngneat/falso';

// 388938496
routingNumber();
```

#### `mask()`

```ts
import { mask } from '@ngneat/falso';

// 0512
mask();
```

#### `amount()`

```ts
import { amount } from '@ngneat/falso';

// 106.53
amount();
```

#### `transactionType()`

```ts
import { transactionType } from '@ngneat/falso';

// payment
transactionType();
```

#### `currencyCode()`

```ts
import { currencyCode } from '@ngneat/falso';

// BRL
currencyCode();
```

#### `currencyName()`

```ts
import { currencyName } from '@ngneat/falso';

// Cedi
currencyName();
```

#### `currencySymbol()`

```ts
import { currencySymbol } from '@ngneat/falso';

// Bs
currencySymbol();
```

#### `bitcoinAddress()`

```ts
import { bitcoinAddress } from '@ngneat/falso';

// 1G9dhM9ff8N6cgDZCgSnibB1no57H7J9
bitcoinAddress();
```

#### `litecoinAddress()`

```ts
import { litecoinAddress } from '@ngneat/falso';

// LckeY4qm4fQ3Ak6D9GcjCxSw4VfWM9Mb
litecoinAddress();
```

#### `creditCardNumber()`

```ts
import { creditCardNumber } from '@ngneat/falso';

// 6767-7396-3947-1726
creditCardNumber();
```

#### `creditCardCVV()`

```ts
import { creditCardCVV } from '@ngneat/falso';

// 000
creditCardCVV();
```

#### `ethereumAddress()`

```ts
import { ethereumAddress } from '@ngneat/falso';

// 0xfeff5fc09fc64ddde1cb09cdbba9d5aa1bd60028
ethereumAddress();
```

#### `iban()`

```ts
import { iban } from '@ngneat/falso';

// GE17XK9613803086740003
iban();
```

#### `bic()`

```ts
import { bic } from '@ngneat/falso';

// PQHACYL1
bic();
```

#### `transactionDescription()`

```ts
import { transactionDescription } from '@ngneat/falso';

// payment transaction at Sporer, Russel and Johns using card ending with ***8561 for BSD 49.46 in account ***40753949
transactionDescription();
```

#### `gitBranch()`

```ts
import { gitBranch } from '@ngneat/falso';

// card-quantify
gitBranch();
```

#### `gitCommitEntry()`

```ts
import { gitCommitEntry } from '@ngneat/falso';

// commit 891053aa674ab65bb014687554ac559d0118a29a
Author: Josiane Bernhard <Hubert55@gmail.com>
Date: Sat Jan 08 2022 11:38:54 GMT+0200 (Israel Standard Time)

    copy online firewall

gitCommitEntry()
```

#### `gitCommitMessage()`

```ts
import { gitCommitMessage } from '@ngneat/falso';

// calculate wireless capacitor
gitCommitMessage();
```

#### `gitCommitSha()`

```ts
import { gitCommitSha } from '@ngneat/falso';

// 90740f1b9840ad81c49601fee57fad2aaffc4b75
gitCommitSha();
```

#### `gitShortSha()`

```ts
import { gitShortSha } from '@ngneat/falso';

// 391f6d5
gitShortSha();
```

#### `createCard()`

```ts
import { createCard } from '@ngneat/falso';

// [object Object]
createCard();
```

#### `contextualCard()`

```ts
import { contextualCard } from '@ngneat/falso';

// [object Object]
contextualCard();
```

#### `userCard()`

```ts
import { userCard } from '@ngneat/falso';

// [object Object]
userCard();
```

#### `createTransaction()`

```ts
import { createTransaction } from '@ngneat/falso';

// [object Object]
createTransaction();
```

#### `img()`

```ts
import { img } from '@ngneat/falso';

// http://placeimg.com/640/480/city
img();
```

#### `imgAvatar()`

```ts
import { imgAvatar } from '@ngneat/falso';

// https://cdn.fakercloud.com/avatars/baluli_128.jpg
imgAvatar();
```

#### `imgImageUrl()`

```ts
import { imgImageUrl } from '@ngneat/falso';

// http://placeimg.com/640/480
imgImageUrl();
```

#### `imgAbstract()`

```ts
import { imgAbstract } from '@ngneat/falso';

// http://placeimg.com/640/480/abstract
imgAbstract();
```

#### `imgAnimals()`

```ts
import { imgAnimals } from '@ngneat/falso';

// http://placeimg.com/640/480/animals
imgAnimals();
```

#### `imgBusiness()`

```ts
import { imgBusiness } from '@ngneat/falso';

// http://placeimg.com/640/480/business
imgBusiness();
```

#### `imgCats()`

```ts
import { imgCats } from '@ngneat/falso';

// http://placeimg.com/640/480/cats
imgCats();
```

#### `imgCity()`

```ts
import { imgCity } from '@ngneat/falso';

// http://placeimg.com/640/480/city
imgCity();
```

#### `imgFood()`

```ts
import { imgFood } from '@ngneat/falso';

// http://placeimg.com/640/480/food
imgFood();
```

#### `imgNightlife()`

```ts
import { imgNightlife } from '@ngneat/falso';

// http://placeimg.com/640/480/nightlife
imgNightlife();
```

#### `imgFashion()`

```ts
import { imgFashion } from '@ngneat/falso';

// http://placeimg.com/640/480/fashion
imgFashion();
```

#### `imgPeople()`

```ts
import { imgPeople } from '@ngneat/falso';

// http://placeimg.com/640/480/people
imgPeople();
```

#### `imgNature()`

```ts
import { imgNature } from '@ngneat/falso';

// http://placeimg.com/640/480/nature
imgNature();
```

#### `imgSports()`

```ts
import { imgSports } from '@ngneat/falso';

// http://placeimg.com/640/480/sports
imgSports();
```

#### `imgTechnics()`

```ts
import { imgTechnics } from '@ngneat/falso';

// http://placeimg.com/640/480/technics
imgTechnics();
```

#### `imgTransport()`

```ts
import { imgTransport } from '@ngneat/falso';

// http://placeimg.com/640/480/transport
imgTransport();
```

#### `imgDataUri()`

```ts
import { imgDataUri } from '@ngneat/falso';

// data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E
imgDataUri();
```

#### `imgLorempixel()`

```ts
import { imgLorempixel } from '@ngneat/falso';

// undefined
imgLorempixel();
```

#### `avatar()`

```ts
import { avatar } from '@ngneat/falso';

// https://i.pravatar.cc/300
avatar();
```

#### `email()`

```ts
import { email } from '@ngneat/falso';

// Eliezer.Powlowski87@yahoo.com
email();
```

#### `exampleEmail()`

```ts
import { exampleEmail } from '@ngneat/falso';

// Obie.Mohr@example.org
exampleEmail();
```

#### `userName()`

```ts
import { userName } from '@ngneat/falso';

// Edwina19
userName();
```

#### `protocol()`

```ts
import { protocol } from '@ngneat/falso';

// https
protocol();
```

#### `httpMethod()`

```ts
import { httpMethod } from '@ngneat/falso';

// PUT
httpMethod();
```

#### `url()`

```ts
import { url } from '@ngneat/falso';

// http://shaniya.name
url();
```

#### `domainName()`

```ts
import { domainName } from '@ngneat/falso';

// lue.info
domainName();
```

#### `domainSuffix()`

```ts
import { domainSuffix } from '@ngneat/falso';

// name
domainSuffix();
```

#### `domainWord()`

```ts
import { domainWord } from '@ngneat/falso';

// nikki
domainWord();
```

#### `ip()`

```ts
import { ip } from '@ngneat/falso';

// 106.192.20.47
ip();
```

#### `ipv6()`

```ts
import { ipv6 } from '@ngneat/falso';

// ac87:88aa:10e7:8e96:e597:c246:f80f:ce28
ipv6();
```

#### `port()`

```ts
import { port } from '@ngneat/falso';

// 50806
port();
```

#### `userAgent()`

```ts
import { userAgent } from '@ngneat/falso';

// Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/534.1.0 (KHTML, like Gecko) Chrome/26.0.884.0 Safari/534.1.0
userAgent();
```

#### `color()`

```ts
import { color } from '@ngneat/falso';

// #3b3a35
color();
```

#### `mac()`

```ts
import { mac } from '@ngneat/falso';

// 93:be:c6:bd:51:dc
mac();
```

#### `password()`

```ts
import { password } from '@ngneat/falso';

// ot88Rrqu3c8sxc1
password();
```

#### `word()`

```ts
import { word } from '@ngneat/falso';

// possimus
word();
```

#### `words()`

```ts
import { words } from '@ngneat/falso';

// nemo saepe quas
words();
```

#### `sentence()`

```ts
import { sentence } from '@ngneat/falso';

// Quam illo amet ipsa.
sentence();
```

#### `slug()`

```ts
import { slug } from '@ngneat/falso';

// necessitatibus-vitae-ut
slug();
```

#### `sentences()`

```ts
import { sentences } from '@ngneat/falso';

// Et voluptas sit et tempora officiis vitae. Non laboriosam qui quos sit itaque voluptas aperiam. Fuga rem ducimus pariatur atque excepturi.
sentences();
```

#### `paragraph()`

```ts
import { paragraph } from '@ngneat/falso';

// Odit consequatur nobis aut quo dolores in adipisci praesentium. Quod rerum ducimus ad. Ut autem velit consequatur nihil animi animi architecto. Quaerat et sed.
paragraph();
```

#### `paragraphs()`

```ts
import { paragraphs } from '@ngneat/falso';

// Similique unde asperiores ea dignissimos eligendi et perferendis nemo aperiam. Assumenda delectus deleniti quaerat necessitatibus omnis sed ex. Ab cum voluptates consequatur excepturi ut laboriosam voluptate. Ipsum ex ad nihil et.

Est ut delectus qui at ab ratione. Vel porro consequatur inventore vel tempore quibusdam expedita nihil ipsam. Alias hic eos perferendis omnis architecto natus quidem. Magni magnam magnam commodi et in molestiae. Qui fugiat doloremque.

Fugiat excepturi fugiat. Velit itaque expedita doloribus aut ut non mollitia provident. Expedita error quia labore cum non voluptatem. Est et corporis quibusdam voluptatem magnam aliquam est. Quis dignissimos ex est fugit ullam dignissimos non laboriosam.
paragraphs()
```

#### `text()`

```ts
import { text } from '@ngneat/falso';

// Lorem ipsu
text();

// Lorem ipsum dolor sit amet, co
text({ charCount: 30 });

```
| Property               | Type   | Description                                                                                   |
|------------------------|--------|-----------------------------------------------------------------------------------------------|
| charCount _(optional)_ | number | This takes an integer between 1 and 5000 and will dictate thee total characters in the string |

#### `lines()`

```ts
import { lines } from '@ngneat/falso';

// Voluptatibus harum ullam odio sed animi corporis.
lines();
```

#### `genre()`

```ts
import { genre } from '@ngneat/falso';

// Jazz
genre();
```

#### `firstName()`

```ts
import { firstName } from '@ngneat/falso';

// Xavier
firstName();
```

#### `lastName()`

```ts
import { lastName } from '@ngneat/falso';

// Schuster
lastName();
```

#### `middleName()`

```ts
import { middleName } from '@ngneat/falso';

// a
middleName();
```

#### `findName()`

```ts
import { findName } from '@ngneat/falso';

// Freda Satterfield
findName();
```

#### `jobTitle()`

```ts
import { jobTitle } from '@ngneat/falso';

// International Brand Associate
jobTitle();
```

#### `gender()`

```ts
import { gender } from '@ngneat/falso';

// Male to female trans woman
gender();
```

#### `prefix()`

```ts
import { prefix } from '@ngneat/falso';

// Mrs.
prefix();
```

#### `suffix()`

```ts
import { suffix } from '@ngneat/falso';

// II
suffix();
```

#### `title()`

```ts
import { title } from '@ngneat/falso';

// International Security Administrator
title();
```

#### `jobDescriptor()`

```ts
import { jobDescriptor } from '@ngneat/falso';

// Human
jobDescriptor();
```

#### `jobArea()`

```ts
import { jobArea } from '@ngneat/falso';

// Integration
jobArea();
```

#### `jobType()`

```ts
import { jobType } from '@ngneat/falso';

// Agent
jobType();
```

#### `phoneNumber()`

```ts
import { phoneNumber } from '@ngneat/falso';

// (663) 807-0501
phoneNumber();
```

#### `phoneNumberFormat()`

```ts
import { phoneNumberFormat } from '@ngneat/falso';

// 768-523-3116
phoneNumberFormat();
```

#### `fileName()`

```ts
import { fileName } from '@ngneat/falso';

// extensible_up.skm
fileName();
```

#### `commonFileName()`

```ts
import { commonFileName } from '@ngneat/falso';

// tools_vatu.m2a
commonFileName();
```

#### `mimeType()`

```ts
import { mimeType } from '@ngneat/falso';

// audio/vnd.dts.hd
mimeType();
```

#### `commonFileType()`

```ts
import { commonFileType } from '@ngneat/falso';

// text
commonFileType();
```

#### `commonFileExt()`

```ts
import { commonFileExt } from '@ngneat/falso';

// gif
commonFileExt();
```

#### `fileType()`

```ts
import { fileType } from '@ngneat/falso';

// x-shader
fileType();
```

#### `fileExt()`

```ts
import { fileExt } from '@ngneat/falso';

// meta4
fileExt();
```

#### `directoryPath()`

```ts
import { directoryPath } from '@ngneat/falso';

// /home/user
directoryPath();
```

#### `filePath()`

```ts
import { filePath } from '@ngneat/falso';

// /lib/ports_calculating.ogg.wm
filePath();
```

#### `semver()`

```ts
import { semver } from '@ngneat/falso';

// 3.2.0
semver();
```

#### `vehicle()`

```ts
import { vehicle } from '@ngneat/falso';

// Jaguar Beetle
vehicle();
```

#### `vehicleManufacturer()`

```ts
import { vehicleManufacturer } from '@ngneat/falso';

// Mazda
vehicleManufacturer();
```

#### `vehicleModel()`

```ts
import { vehicleModel } from '@ngneat/falso';

// Escalade
vehicleModel();
```

#### `vehicleType()`

```ts
import { vehicleType } from '@ngneat/falso';

// Hatchback
vehicleType();
```

#### `vehicleFuel()`

```ts
import { vehicleFuel } from '@ngneat/falso';

// Gasoline
vehicleFuel();
```

#### `vehicleVin()`

```ts
import { vehicleVin } from '@ngneat/falso';

// L91TRNWFV4TV61435
vehicleVin();
```

#### `vehicleColor()`

```ts
import { vehicleColor } from '@ngneat/falso';

// blue
vehicleColor();
```

#### `vehicleVrm()`

```ts
import { vehicleVrm } from '@ngneat/falso';

// GZ51DDM
vehicleVrm();
```

#### `randomNumber()`

```ts
import { randomNumber } from '@ngneat/falso';

// 25895
randomNumber();
```

#### `randomFloat()`

```ts
import { randomFloat } from '@ngneat/falso';

// 72607.07
randomFloat();
```

#### `randomArrayElement()`

```ts
import { randomArrayElement } from '@ngneat/falso';

// c
randomArrayElement();
```

#### `randomArrayElements()`

```ts
import { randomArrayElements } from '@ngneat/falso';

// b
randomArrayElements();
```

#### `randomObjectElement()`

```ts
import { randomObjectElement } from '@ngneat/falso';

// car
randomObjectElement();
```

#### `randomUuid()`

```ts
import { randomUuid } from '@ngneat/falso';

// 8c858281-f3bd-4547-89a1-d5422d552f49
randomUuid();
```

#### `randomBoolean()`

```ts
import { randomBoolean } from '@ngneat/falso';

// true
randomBoolean();
```

#### `randomWord()`

```ts
import { randomWord } from '@ngneat/falso';

// Lane
randomWord();
```

#### `randomWords()`

```ts
import { randomWords } from '@ngneat/falso';

// calculating engineer Paradigm
randomWords();
```

#### `randomImage()`

```ts
import { randomImage } from '@ngneat/falso';

// http://placeimg.com/640/480/fashion
randomImage();
```

#### `randomLocale()`

```ts
import { randomLocale } from '@ngneat/falso';

// es
randomLocale();
```

#### `randomAlpha()`

```ts
import { randomAlpha } from '@ngneat/falso';

// a
randomAlpha();
```

#### `randomAlphaNumeric()`

```ts
import { randomAlphaNumeric } from '@ngneat/falso';

// n
randomAlphaNumeric();
```

#### `randomHexaDecimal()`

```ts
import { randomHexaDecimal } from '@ngneat/falso';

// 0x9
randomHexaDecimal();
```

#### `abbreviation()`

```ts
import { abbreviation } from '@ngneat/falso';

// IB
abbreviation();
```

#### `adjective()`

```ts
import { adjective } from '@ngneat/falso';

// open-source
adjective();
```

#### `noun()`

```ts
import { noun } from '@ngneat/falso';

// program
noun();
```

#### `verb()`

```ts
import { verb } from '@ngneat/falso';

// transmit
verb();
```

#### `ingverb()`

```ts
import { ingverb } from '@ngneat/falso';

// generating
ingverb();
```

#### `phrase()`

```ts
import { phrase } from '@ngneat/falso';

// Use the redundant AGP transmitter, then you can generate the 1080p circuit!
phrase();
```

#### `datatypeNumber()`

```ts
import { datatypeNumber } from '@ngneat/falso';

// 78512
datatypeNumber();
```

#### `datatypeFloat()`

```ts
import { datatypeFloat } from '@ngneat/falso';

// 10850.48
datatypeFloat();
```

#### `datatypeDatetime()`

```ts
import { datatypeDatetime } from '@ngneat/falso';

// 2044-03-01T02:44:38.858Z
datatypeDatetime();
```

#### `datatypeString()`

```ts
import { datatypeString } from '@ngneat/falso';

// 9l;Cczuop:
datatypeString();
```

#### `datatypeUuid()`

```ts
import { datatypeUuid } from '@ngneat/falso';

// 2db5df9a-d57f-467d-aff1-f4f55003ffec
datatypeUuid();
```

#### `datatypeBoolean()`

```ts
import { datatypeBoolean } from '@ngneat/falso';

// false
datatypeBoolean();
```

#### `datatypeHexaDecimal()`

```ts
import { datatypeHexaDecimal } from '@ngneat/falso';

// 0x1
datatypeHexaDecimal();
```

#### `datatypeJson()`

```ts
import { datatypeJson } from '@ngneat/falso';

// {"foo":961,"bar":15395,"bike":84052,"a":"q{nV`XZSL:","b":"Jf+!S%L7|a","name":44555,"prop":"1kZqZtUCi;"}
datatypeJson();
```

#### `datatypeArray()`

```ts
import { datatypeArray } from '@ngneat/falso';

// rcLGl`\39?,75339,]EY4r9w+oZ,Fo]JU'!.6z,75966,37122,45736,s5G|iKoXEh,4I?g!H?|D!,gX2wM4w*SM
datatypeArray();
```

#### `suffixes()`

```ts
import { suffixes } from '@ngneat/falso';

// Inc,and Sons,LLC,Group
suffixes();
```

#### `companyName()`

```ts
import { companyName } from '@ngneat/falso';

// Maggio, Wisoky and Blick
companyName();
```

#### `companySuffix()`

```ts
import { companySuffix } from '@ngneat/falso';

// and Sons
companySuffix();
```

#### `catchPhrase()`

```ts
import { catchPhrase } from '@ngneat/falso';

// Universal empowering product
catchPhrase();
```

#### `bs()`

```ts
import { bs } from '@ngneat/falso';

// productize visionary mindshare
bs();
```

#### `catchPhraseAdjective()`

```ts
import { catchPhraseAdjective } from '@ngneat/falso';

// Persevering
catchPhraseAdjective();
```

#### `catchPhraseDescriptor()`

```ts
import { catchPhraseDescriptor } from '@ngneat/falso';

// web-enabled
catchPhraseDescriptor();
```

#### `catchPhraseNoun()`

```ts
import { catchPhraseNoun } from '@ngneat/falso';

// process improvement
catchPhraseNoun();
```

#### `bsAdjective()`

```ts
import { bsAdjective } from '@ngneat/falso';

// best-of-breed
bsAdjective();
```

#### `bsBuzz()`

```ts
import { bsBuzz } from '@ngneat/falso';

// synergize
bsBuzz();
```

#### `bsNoun()`

```ts
import { bsNoun } from '@ngneat/falso';

// action-items
bsNoun();
```

#### `department()`

```ts
import { department } from '@ngneat/falso';

// Beauty
department();
```

#### `productName()`

```ts
import { productName } from '@ngneat/falso';

// Handmade Plastic Tuna
productName();
```

#### `price()`

```ts
import { price } from '@ngneat/falso';

// 315.00
price();
```

#### `productAdjective()`

```ts
import { productAdjective } from '@ngneat/falso';

// Intelligent
productAdjective();
```

#### `productMaterial()`

```ts
import { productMaterial } from '@ngneat/falso';

// Concrete
productMaterial();
```

#### `product()`

```ts
import { product } from '@ngneat/falso';

// Soap
product();
```

#### `productDescription()`

```ts
import { productDescription } from '@ngneat/falso';

// The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients
productDescription();
```

#### `rgb()`

```ts
import { rgb } from '@ngneat/falso';

// rgb(255,255,255)
rgb();
```

Credit: Some of the data was generated by faker.js

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
