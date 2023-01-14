# New Year Celebration 

A collection of command-line tools to help you celebrate the New Year in style.

## Table of Contents
- [Included Tools](#included-tools)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#Credits)
- [Contact](#Contact)

## Included Tools

The package contains a three function:

1. ASCII New Year Draw - a tool for creating ASCII art greetings.
2. Happy Holiday Dictionary - a collection of translations for the phrase "happy holiday" in various languages.
3. New Year Countdown - a countdown timer for New Year's Eve.


## Installation

```bash
npm install new_year
```
or
```bash
npm i new_year
```

## Usage

```js
const ny = require('new_year');

```
### 1. **Function 1: ASCII New Year Draw:**
<br> 
The tool has the following options:
<br>
- `newyear` to draw a new year 2023 message
<br>
- `new year1` to draw a happy new year message

## Input:
```js
ny.drawsOfNewYear()
```
## Output:
### "newyear":
![newyear](https://github.com/celinekaram99/New-Year-NPM/blob/main/newyear.jpg?raw=true)
### "newyear1":
![newyear1](https://github.com/celinekaram99/New-Year-NPM/blob/main/newyear1.jpg?raw=true)


### 2. **Function 2: Happy Holiday Dictionary:**
To use the Happy Holiday Dictionary, run: languages("Korean") 
This node takes a dictionary/JSON and shows us the word "Happy Holiday" in the selected languages.

**Available languages:**\
  "English": "happy Holiday",\
  "Hebrow": "חג שמח",\
  "Arbic": "عيد سعيد",\
  "French": "Joyeuses Fêtes",\
  "Spanish": "Felices Fiestas",\
  "Chinese": "節日快樂",\
  "Turkish": "Mutlu Bayramlar",\
  "Romanian": "Sarbatori Fericite",\
  "Greek": "Καλές δικακοπές",\
  "Italian": "Buone Feste",\
  "Korean": "행복 휴일",\
  "German": "frohe Ferien"

## Input:
```js
ny.languages(language)
```
example:
```js
ny.languages("Korean")
```
## Output:
we have a list of languages the output is a happy holiday in the selected language,\
the output in "Korean" is 행복 휴일\
If you choose a language that is not on the list, it will return: we don't recognize this word.

### 3. **Function 3: New Year Countdown:**
The countdown timer displays the remaining time until New Year's Eve.
## Input:
```bash
ny.timeUntilNewYear()
```
## Output:
```bash
11 months and 17 days until new year
```
countdown the months and days until the new year, 31/12/2023


## License
This project is licensed under the ISC License.

## Credits
Celine Karam\
Marah Habashy

## Contact
c_k_celine@hotmail.com\
habashymarah.2000@gmail.com