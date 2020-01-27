# alexa-skill-grammar

## Description:
- Amazon Alexa skill for learning English grammar.
- This version supports learning english grammar in English and Castellano.
- Language is defined by alexa application "speaking" language.
- Content is a supplementary version of the [Books For Languages](https://open.books4languages.com/english-a1-grammar/) content for learning english.
- Can be found in amazon alexa skill shop or [here](https://www.amazon.es/books4languages-com-English-Grammar/dp/B081XH1LVJ/ref=sr_1_2?brr=1&qid=1574668668&rd=1&s=digital-skills&sr=1-2).

## Usage:
- User can learn English grammar in English or Castellano.
- Currently provided 5 chapters for learning grammar.
- Information is divided in "basic info", "more info" and "examples" for every chapter.
- User can inititate a quiz with a series of questions for every chapter.
- Saying "help" to alexa can clear any misconceptions about the instructions.
- Saying "repeat" to alexa will provide the information from alexa again.

## Files details

### [Update](https://github.com/my-language-skills/alexa-skill-grammar/tree/master/update):
- contains the clean code for the skill, without unecessary comments and unused functions.
- in [Editors](https://github.com/my-language-skills/alexa-skill-grammar/tree/master/update/language_editors) there alexa intentions json files for English and Spanish.
- in [Content](https://github.com/my-language-skills/alexa-skill-grammar/tree/master/update/content) there are the content files for quiz, gramatical rule information and the translations for the custom slots of the Intentions.

### [Master](https://github.com/my-language-skills/alexa-skill-grammar):
- contains in commented version the functions and call references for using images, screening options and display option. (To be used it must be enabled in alexa skill build page. "Display Interface").