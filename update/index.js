const Alexa = require('ask-sdk-core');
const grammar_a1 = require('./content');
const quizes = require('./quiz');
const langs = require('./languages');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');


const languageString = {
  en: {
    translation: {
      CHAPTERS_NAMES: grammar_a1.EN_US.CHAPTERS_NAMES,
      CHAPTERS_NAMES_JSON: grammar_a1.EN_US.CHAPTERS_NAMES_JSON,
      SUBJECT_PRONOUNS: grammar_a1.EN_US.SUBJECT_PRONOUNS,
      SUBJECT_PRONOUNS_QUIZ: quizes.EN_US.SUBJECT_PRONOUNS,
      TOBE_AFIRMATIVE: grammar_a1.EN_US.TOBE_AFIRMATIVE,
      TOBE_AFIRMATIVE_QUIZ: quizes.EN_US.TOBE_AFIRMATIVE,
      TOBE_NEGATIVE: grammar_a1.EN_US.TOBE_NEGATIVE,
      TOBE_NEGATIVE_QUIZ: quizes.EN_US.TOBE_NEGATIVE,
      TOBE_INTEROCATIVE: grammar_a1.EN_US.TOBE_INTEROCATIVE,
      TOBE_INTEROCATIVE_QUIZ: quizes.EN_US.TOBE_INTEROCATIVE,
      CARDINAL_NUMBERS: grammar_a1.EN_US.CARDINAL_NUMBERS,
      CARDINAL_NUMBERS_QUIZ: quizes.EN_US.CARDINAL_NUMBERS,
      IMAGE_URLS: grammar_a1.EN_US.URLS,
      LANGUAGE: 'English',
      PLEASE_STATE: 'Please state the correct number. ',
      QUIZ_COMPLETED: 'Finished the quiz. Final score: %s',
      QUIZ_CORRECT_ANSWER: 'Congrats. Correct-o. ',
      QUIZ_WRONG_ANSWER: 'Boo hoo. That was wrong. Correct answer is: %s. ',
      QUIZ_INVALID_ANSWER: 'Well you clearly didn\'t hear the instructions then. ',
      QUIZ_DONTKNOW: 'Well you have to learn it. ',
      QUIZ_QUIT: 'Give up like life has given up on you. Final score: %s',
      WELCOME_MESSAGE: 'Welcome to %s. Let\'s learn some english gramatical rules. ',
      SKILL_NAME: 'English Grammar ',
      EXTRA_INFO_CHAPTER: 'You can say basic info to get the introductory info, more info to get more details or examples to listen to some examples. ',
      HELP_START: 'Please state the grammatical rule you want to review',
      CHAPTER_INFO: 'Please state which of the following sections of grammatical rule %s you want to access. ',
      OPTION_START_HELP: 'You can say index to get the full list of grammatical rules you want to access. ',
      OPTION_START_CHAPTERS: 'Simply say one of the following grammatical rules to access one. ',
      OPTION_UNRECOGNISED: 'This command is unrecognised by the English Grammar skill. Please say something else ',
      OPTION_CHAPTER_HELP:  'You can say basic info to get the introductory info, more info to get more details or examples to listen to some examples. ',
      OPTION_START_QUIZ: 'Simply say the grammatical rule title and quiz. ',
      OPTIONS_QUIZ: 'Say the number of your correct answer, skip to skip the question and  end  to quit the quiz. ',
      NO_CHAPTER: 'No grammatical rule is selected. ',
      GRAMATICAL_OPTIONS: '%s Say start quiz to do an exercise. Or say a different rule to study. ',
      WRONG_INPUT: 'This command is not useful here. ',
      START_INTENT_OPTIONS: 'Say the grammatical rule you want to access. Say show me grammatical rule to get the list of the grammatical rule ',
      QUIT_MESSAGE: 'Thank you for using English Grammar. See you around ',
      NO_ACCESS_TO_THIS: 'You don\'t have access to this information, please give more details ',
      GENERAL_OPTIONS: 'You can say help to get help on the application, index to see the list of grammatical rules, the grammatical rule name or quiz to do a quiz exercise. ',
      FALLBACK_MESSSAGE: 'The %s skill can\'t help you with that. What can I help you with? ',
      FALLBACK_REPROMPT: 'What can I help you with? ',
      BASIC_INFO: 'Basic info for: ',
      MORE_INFO:  'More info for: ',
      EXAMPLE_INFO: 'Example for: ',
      QUIZ_QUESTION: 'Question',
      TOTALLY_WRONG_INPUT: 'That\'s just jibber-jabber. It doesn\'t make any sense. ',
      SORRY_SAY_AGAIN: 'Sorry, I can\'t understand the command. Please try saying again in %s....',
      NO_PREVIOUS_INFO: 'How can i access the next if no previous exists. ',
      HELP_NEEDED: 'Try saying help to see the next available commands. '
      },
  },
  'es-ES': {
    translation: {
      CHAPTERS_NAMES: grammar_a1.ES_ES.CHAPTERS_NAMES,
      CHAPTERS_NAMES_JSON: grammar_a1.ES_ES.CHAPTERS_NAMES_JSON,
      SUBJECT_PRONOUNS: grammar_a1.ES_ES.SUBJECT_PRONOUNS,
      SUBJECT_PRONOUNS_QUIZ: quizes.ES_ES.SUBJECT_PRONOUNS,
      TOBE_AFIRMATIVE: grammar_a1.ES_ES.TOBE_AFIRMATIVE,
      TOBE_AFIRMATIVE_QUIZ: quizes.ES_ES.TOBE_AFIRMATIVE,
      TOBE_NEGATIVE: grammar_a1.ES_ES.TOBE_NEGATIVE,
      TOBE_NEGATIVE_QUIZ: quizes.ES_ES.TOBE_NEGATIVE,
      TOBE_INTEROCATIVE: grammar_a1.ES_ES.TOBE_INTEROCATIVE,
      TOBE_INTEROCATIVE_QUIZ: quizes.ES_ES.TOBE_INTEROCATIVE,
      CARDINAL_NUMBERS: grammar_a1.ES_ES.CARDINAL_NUMBERS,
      CARDINAL_NUMBERS_QUIZ: quizes.ES_ES.CARDINAL_NUMBERS,
      IMAGE_URLS: grammar_a1.ES_ES.URLS,
      LANGUAGE_OPTIONS: langs.OPTIONS,
      LANGUAGE_MORE_OPTIONS: langs.MORE_OPTIONS,
      LANGUAGE_CHAPTERS: langs.CHAPTERS,
      lANGUAGE_REPEAT: langs.REPEAT,
      LANGUAGE: 'Castellano',
      WELCOME_MESSAGE: 'Bienvenido a %s. Aprendamos algo. ',
      GENERAL_OPTIONS: 'Puedes decir, ayuda, para obtener la ayuda de la aplicación. O<break strength="strong"/>, <emphasis level="moderate">Índice</emphasis>, para escuchar la lista de normas gramaticales disponibles. También puedes decir el nombre de la norma gramatical o ejercicios para practicar lo aprendido. ', //this one
      HELP_START: 'Por favor, indique la norma gramatical que desearía revisar ',
      TOTALLY_WRONG_INPUT: 'Eso son simplemente balbuceos. No tiene ningún sentido para mí. ',
      FALLBACK_MESSSAGE: 'La %s skill no puede ayudarte con eso. ¿Con qué podría yo ayudarte? ',
      FALLBACK_REPROMPT: '¿Con qué podría yo ayudarte? ',
      HELP_NEEDED: 'Intenta pidiendo ayuda para ver los comando disponibles. ',
      OPTION_START_HELP: 'Puedes decir, índice, para obtener la lista de las normas gramaticales. También puedes decir el nombre de la norma gramatical o ejercicios para practicar lo aprendido. ',
      OPTION_START_CHAPTERS: 'Simplemente dí una de las siguientes normas gramaticales para poder acceder: ',
      OPTION_UNRECOGNISED: 'Este comando no es reconocible por esta aplicación. Por favor, pruebe con algo diferente.',
      OPTION_CHAPTER_HELP: '¿Quíeres que continuemos? di, más información, o, ejemplos. ',
      BASIC_INFO: 'Aquí viene: ',
      EXTRA_INFO_CHAPTER: 'Puedes decir más informacíon para obtener más detalles, o ejemplos para obtener una lista de ejemplos de la norma gramatical. ', //this one
      GRAMATICAL_OPTIONS: ' %s para hacer un ejercicio di, ejercicio. Para seguir estudiando, di el nombre de una norma gramatical.',
      OPTION_START_QUIZ: 'Simplemente di el título de la norma gramatical, seguido de la palabra, ejercicios',
      OPTIONS_QUIZ: 'Dí el número de la respuesta correcta, saltar para saltar el ejercicio y salir para terminar con los ejercicios. ',
      PLEASE_STATE: 'Por favor, indique el número correcto. ',
      QUIZ_COMPLETED: 'Termine el ejercicio. Su puntuación ha sido de: %s puntos ',
      QUIZ_CORRECT_ANSWER: 'Felicitaciones. ',
      QUIZ_WRONG_ANSWER: 'Espera un momento. Eso ha sido incorrecto. La respuesta correcta es: %s. ',
      QUIZ_INVALID_ANSWER: 'Creo que no escuchaste correctamente las insgtrucciones. ',
      QUIZ_DONTKNOW: 'Parece que tienes que aprenderlo. ',
      QUIZ_QUIT: 'No creo que tengas otra opcion más que rendirte. Puntuación final: %s ',
      SKILL_NAME: 'Gramática inglesa ',
      CHAPTER_INFO: 'Por favor, indique a cual de las siguietnes secciones de la norma gramatical sobre %s quieres acceder. ',
      NO_CHAPTER: 'No se ha seleccionado ninguna norma gramatical. ',
      WRONG_INPUT: 'Esta instruccion no es útil aquí. ',
      START_INTENT_OPTIONS: 'Dí el título de la norma gramatical a la que le gustaría acceder. Dí, mostrarme la norma gramatical para obtener la lista de las normas gramaticales. ',
      QUIT_MESSAGE: 'Gracias por utilizar la gramatica inglesa de Books for Languages. Nos vemos pronto. ',
      NO_ACCESS_TO_THIS: 'Parece que no tienes acceso a esta información, por favor, dame más detalles. ',
      MORE_INFO:  'Más información para: ',
      EXAMPLE_INFO: 'Ejemplos de: ',
      QUIZ_QUESTION: 'Pregunta ',
      SORRY_SAY_AGAIN: 'Lo siento, no puedo entender su instrucción. Podria volver a probar en %s.... ',
      NO_PREVIOUS_INFO: 'Como puedo ahcceder al próximo si no existe el anterior?. '
      },
  },
};

  /**
   * INTENTS
   */

  /**
   * Responsible to handle the request to end the quiz process.
   * No custom slots.
   * Given phrases only.
   */
  const EndQuizIntent = {
    canHandle(handlerInput)
    {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EndQuizIntent'
    },
    handle(handlerInput)
    {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      //validAccesIntent function checks the request for this Intent in the availability list.
      let valid_intent_msg = validAccessIntent(handlerInput,'EndQuizIntent');

      if (valid_intent_msg == 'ok')
      {
        let output = requestAttributes.t('QUIZ_QUIT',sessionAttributes.quiz_score);
        //setting new availability list for Intents.
        let next_intents = ['ShowOptionsIntent','StartQuizIntent','GrammaticalRuleIntent'];
        /**
         *  quiz_score: current quiz score, *process reset*
         *  question_ids: null, , *process reset*
         *  nextIntents: new availability list
         *  speechOutput: alexa output for RepeatIntent
         *  quiz: boolean value, *process reset*
         *  answered: to check for answers given for AnswerQuizIntent or DontKnowQuizIntent
         *  finished: boolean value, *process reset*
         *  question_index: current question index
         *  answerOutput: return message for AnswerQuizIntent or DontKnowQuizIntent
        */
        Object.assign(sessionAttributes,{
          quiz_score: 0,
          question_ids: [],
          nextIntents: next_intents,
          speechOutput: output,
          quiz: 'false',
          answered: 'false',
          finished: 'true',
          question_index: 0,
          answerOutput:'',
        });
        //sets new values to sessionAttributes
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        //returns with message for resuming the process
        return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(output+'. '+requestAttributes.t('GRAMATICAL_OPTIONS',requestAttributes.t('OPTION_CHAPTER_HELP')))
        .getResponse();
      }
      //returns with message for incorrect access to Intent
      return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(requestAttributes.t('WRONG_INPUT'))
        .getResponse();
    },
  };

  /**
   * Responsible to handle the request for a skip option for the quiz process.
   * No custom slots.
   * Given phrases only.
   */
  const DontKnowQuizIntent = {
    canHandle(handlerInput)
    {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'DontKnowQuizIntent';
    },
    handle(handlerInput)
    {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        //validAccesIntent function checks the request for this Intent in the availability list.
        let valid_intent_msg = validAccessIntent(handlerInput,'DontKnowQuizIntent');

        if (valid_intent_msg == 'ok')
        {
          let output=requestAttributes.t('QUIZ_DONTKNOW')
          //setting new availability list for Intents.
          let next_intents = ['ShowOptionsIntent','AnswerQuizIntent','DontKnowQuizIntent','EndQuizIntent',,'StartQuizIntent',];
          /**
           *  nextIntents: new availability list
           *  speechOutput: alexa output for RepeatIntent
           *  quiz: boolean value, *process reset*
           *  answered: to check for answers given for AnswerQuizIntent or DontKnowQuizIntent
           *  answerOutput: return message for AnswerQuizIntent or DontKnowQuizIntent
          */
          Object.assign(sessionAttributes,
            {
              nextIntents: next_intents,
              quiz: 'true',
              answered: 'false',
              answerOutput:'',
            });
          //sets new values to sessionAttributes
          handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
          //translation of the chapter, in case was stored or requested originaly and is used in another language
          let translated_chapter = translate(handlerInput,sessionAttributes.chapter,requestAttributes.t('LANGUAGE_CHAPTERS'));

          //call to quiz function, to resume or end process.
          return startQuiz(handlerInput,translated_chapter,output);
        }
        //returns with message for incorrect access to Intent
        return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(requestAttributes.t('WRONG_INPUT'))
        .getResponse();

    },
  };

  /**
   * Responsible to handle the given answer for the quiz process.
   * Custom slot: { "Answer": AMAZON.NUMBER }
   * Inititated only on custom slot.
   */
  const AnswerQuizIntent = {
    canHandle(handlerInput)
    {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'AnswerQuizIntent';
    },
    handle(handlerInput)
    {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      //returns message if the user or process has access to this Intent.
      let valid_intent_msg = validAccessIntent(handlerInput,'AnswerQuizIntent');

      if (valid_intent_msg == 'ok')
      {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        const answer = slots['Answer'].value;//the answer/request from the user (number)

        let output;
        let session_output='';

        //if answer given is githin current question answer index.
        if (answer>=1 && answer <= sessionAttributes.answer_index)
        {
          //checks if answer given is the correct one, returns accordinate message.
          output = checkIfvalid(handlerInput,answer);
          if (output == requestAttributes.t('QUIZ_CORRECT_ANSWER'))
            session_output='';
          else
            session_output=output;//in case if incorrect, returns different message.
        }
        else
        {
          /**
           *  answered: to check for answers given for AnswerQuizIntent or DontKnowQuizIntent
           *  answerOutput: return message for AnswerQuizIntent or DontKnowQuizIntent
          */
          Object.assign(sessionAttributes,
            {
              answered:'false',
              answerOutput: '',
            });
            //ends intent with message for invalid answer.
          return handlerInput.responseBuilder
          .withShouldEndSession(false)
          .speak(requestAttributes.t('QUIZ_INVALID_ANSWER')+requestAttributes.t('OPTIONS_QUIZ')+sessionAttributes.speechOutput)
          .getResponse();
        }
        //setting new availability list for Intents.
        let next_intents = ['ShowOptionsIntent','AnswerQuizIntent','DontKnowQuizIntent','EndQuizIntent',,'StartQuizIntent',];
        /**
         *  nextIntents: new availability list
         *  quiz: boolean value, *process reset*
         *  answerOutput: return message for AnswerQuizIntent or DontKnowQuizIntent
        */
        Object.assign(sessionAttributes,
          {
            nextIntents: next_intents,
            answerOutput: session_output,
            quiz: 'true',
          });
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        //call to quiz function, to resume or end process.
        return startQuiz(handlerInput,translate(handlerInput,sessionAttributes.chapter,requestAttributes.t('LANGUAGE_CHAPTERS')),output);
      }
      //returns with message for incorrect access to this Intent.
      return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(requestAttributes.t('WRONG_INPUT'))
        .getResponse();
    },
  };

  /**
   * Responsible to handle the request to initiate a quiz.
   * Custom slot: { "Chapters": custom list of chapters available}
   * In combination with given answers and/or custom slot.
   */
  const StartQuizIntent = {
    canHandle(handlerInput)
    {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'StartQuizIntent';
    },
    handle(handlerInput)
    {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      //returns message if the user or process has access to this Intent.
      let valid_intent_msg = validAccessIntent(handlerInput,'StartQuizIntent');
      if (valid_intent_msg == 'ok')
      {
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        let chapter = slots['Chapters'].value;//chapter request.

        if (chapter == undefined)//no chapter given
          chapter = sessionAttributes.chapter;
        if (chapter == requestAttributes.t('NO_CHAPTER'))//if chapter was configured or if no selection was made.
        {//returns message for incorrect selection of chapter and instructions
          return handlerInput.responseBuilder
          .withShouldEndSession(false)
          .speak(chapter+requestAttributes.t('OPTION_START_QUIZ'))
          .getResponse();
        }
        //creating Questions and Answers here....
        //translating the chapter in english
        let translated_chapter = translate(handlerInput,chapter,requestAttributes.t('LANGUAGE_CHAPTERS'));

        //function that creates questions for the quiz process
        generateQuestions(handlerInput,sessionAttributes,translated_chapter);
        //setting new availability list for intents access.
         let next_intents = ['ShowOptionsIntent','AnswerQuizIntent','DontKnowQuizIntent','EndQuizIntent','StartQuizIntent',];
         /**
         *  quiz_score: current quiz score, *process reset*
         *  nextIntents: new availability list
         *  speechOutput: alexa output for RepeatIntent
         *  quiz: boolean value, *process reset*
         *  finished: boolean value, *process reset*
         *  question_index: current question index
         *  answerOutput: return message for AnswerQuizIntent or DontKnowQuizIntent
        */
        Object.assign(sessionAttributes,
          {
            quiz_score: 0,
            nextIntents: next_intents,
            chapter: chapter,
            quiz: 'true',
            speechOutput: '',
            question_index: 0,
            finished: 'false',
            answerOutput:'',
          });
          //sets new valus to sesssion attributes.
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

       //call to quiz function, to start process.
       return  startQuiz(handlerInput,translated_chapter,'');
      }
      //ends intent with message for incorrect access.
      return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(valid_intent_msg)
        .getResponse();

    },
  };

  /**
   * Responsible to handle the request to acess a gramatical rule/chapter.
   * Custom slot: {"GrammaticalRule": custom list of chapters available, "MoreOptions": request of specific information}
   *
   */
  const GrammaticalRuleIntent = {
    canHandle(handlerInput)
      {
          return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GrammaticalRuleIntent';
      },
    handle(handlerInput)
    {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      let speakOut='';
      let translated_option;
      const slots = handlerInput.requestEnvelope.request.intent.slots;

      //returns message if user or process has access to this Intent.
      let valid_intent_msg = validAccessIntent(handlerInput,'GrammaticalRuleIntent');
      //checks if a grammatical rule is either given now re previously requested. (No null value)
      if (sessionAttributes.chapter != requestAttributes.t('NO_CHAPTER') || slots['GrammaticalRule'].value!=undefined )
      {
        if (valid_intent_msg == 'ok')
        {

          //current grammatical rule request
          let options = slots['GrammaticalRule'].value;
          // if specific request given
          const more_options = slots['MoreOptions'].value;
          if (options == undefined)//sets grammatical value if not given.
              options = sessionAttributes.chapter;
          if (sessionAttributes.language != 'English')//translates gramatical rule if language is not english
          translated_option = translate(handlerInput,options,requestAttributes.t('LANGUAGE_CHAPTERS'));
          else
          translated_option = options;
          /**
           * chapter: current grammatical value selection.
           */
          Object.assign(sessionAttributes,
          {
              chapter: options,
          });
          //updates values to sessionAttributes.
          handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

          //returns the gramatical rule in a form that is stored in content file.
          const chapterJsonName= returnJsonName(handlerInput,translated_option);

          //translates the moreoption value if given.
          if (more_options!=undefined && more_options !='basic info')
              speakOut = provideInfo(handlerInput,chapterJsonName,translate(handlerInput,more_options,requestAttributes.t('LANGUAGE_MORE_OPTIONS')));
          else
              speakOut = provideInfo(handlerInput,chapterJsonName,'basic info');

          /**
           *  nextIntents: new availability list
           *  speechOutput: alexa output for RepeatIntent
           */
          let next_intents = ['ShowOptionsIntent','StartQuizIntent','GrammaticalRuleIntent'];
          Object.assign(sessionAttributes,
          {
              nextIntents: next_intents,
              speechOutput: speakOut,
          });
          //updates values of sessionAttributes.
          handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        }
        else
        {
            speakOut=valid_intent_msg;
        }
      }
      else
      {
          speakOut = requestAttributes.t('NO_ACCESS_TO_THIS');
      }
      //ends Intent with accordinate message from previous checks. And a help message of how to access the information
      return handlerInput.responseBuilder
      .withShouldEndSession(false)
      .speak(speakOut+' '+requestAttributes.t('GRAMATICAL_OPTIONS',requestAttributes.t('OPTION_CHAPTER_HELP')))
      .getResponse();
    },
  };

  /**
   * Responsible to handle request for help or indexing
   * Custom slot: {"Options": List of available request for help or indexing}
   */
  const ShowOptionsIntent = {
      canHandle(handlerInput)
      {
          return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'ShowOptionsIntent';
      },
      handle(handlerInput)
      {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        //the user gave a response to the welcome message and this gets its response
        const slots = handlerInput.requestEnvelope.request.intent.slots;
        let options = slots['Options'].value;

        let translated_option;
        //translates value of option if not english.
        if (sessionAttributes.language != 'English')
          translated_option = translate(handlerInput,options,requestAttributes.t('LANGUAGE_OPTIONS'));


        //speakOUT will change accordingly to current_chapter...
        //function to decide the appropriate action for the users response. Returns appropriate message back to show.
        if (translated_option != undefined)
          options = translated_option;
        let speakOut = decideOption(handlerInput,options);

        return handlerInput.responseBuilder
          .withShouldEndSession(false)
          .speak(speakOut)
          .getResponse();
      },
  };

  /**
   * Initial Intent of the skill
   * Entering point of application.
   * Welcome message.
   */
  const LaunchRequest = {
    canHandle(handlerInput) {
      const {request} = handlerInput.requestEnvelope;
      return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StartOverIntent');
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      let speakOutput = requestAttributes.t('WELCOME_MESSAGE',requestAttributes.t('SKILL_NAME')) +requestAttributes.t('GENERAL_OPTIONS')+ requestAttributes.t('HELP_START');

      /**
       *  nextIntents: new availability list
       *  speechOutput: alexa output for RepeatIntent
       *  language: Speaking language of application, given from alexa speaking language.
       *  chapter: value for grammatical rule. Initial value given for future checks
       */
      Object.assign(sessionAttributes,
        {
          speechOutput: speakOutput,
          language: requestAttributes.t('LANGUAGE'),
          nextIntents:['GrammaticalRuleIntent','StartQuizIntent'],
          chapter: requestAttributes.t('NO_CHAPTER'),
        });
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      //ends Intent with welcome message.
      return handlerInput.responseBuilder
            .withShouldEndSession(false)
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
  };


  /**
   * Sets the language environment.
   * Predefined code for retrieving the speaking language of Alexa and setting the current locale
   */
  const LocalizationInterceptor = {
    process(handlerInput) {
      const localizationClient = i18n.use(sprintf).init({
        lng: handlerInput.requestEnvelope.request.locale,
        overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        resources: languageString,
        returnObjects: true
      });

      const attributes = handlerInput.attributesManager.getRequestAttributes();
      attributes.t = function (...args) {
        return localizationClient.t(...args);
      };
    },
  };

  /**
   * Responsible to handle the first request for help. When the process launches.
   */
  const HelpIntent = {
    canHandle(handlerInput) {
        const { request } = handlerInput.requestEnvelope;

        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        let speakOutput = requestAttributes.t('HELP_START');
        handlerInput.attributesManager.setSessionAttributes(speakOutput);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    },
  };

  /**
   * Called when an error occurs that alexa can handle.
   * Crushing point. Return message reveals error.
   */
  const FallbackHandler = {

    // 2018-May-01: AMAZON.FallackIntent is only currently available in en-US locale.

    //              This handler will not be triggered except in that locale, so it can be

    //              safely deployed for any locale.

    canHandle(handlerInput) {

      const request = handlerInput.requestEnvelope.request;

      return request.type === 'IntentRequest'

        && request.intent.name === 'AMAZON.FallbackIntent';

    },

    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      return handlerInput.responseBuilder

        .speak(requestAttributes.t('TOTALLY_WRONG_INPUT')+requestAttributes.t('FALLBACK_MESSSAGE',requestAttributes.t('SKILL_NAME'))+requestAttributes.t('HELP_NEEDED'))

        .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))

        .getResponse();

    },

  };

  /**
   * Called when a request was given for ending the skill process
   */
  const CancelAndStopIntentHandler = {
      canHandle(handlerInput) {
          return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
              && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                  || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
      },
      handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechOutput = requestAttributes.t('QUIT_MESSAGE');

        return handlerInput.responseBuilder.speak(speechOutput)
          .withShouldEndSession(true)
          .getResponse();
      },
    };



    /**
     * Called when the process has ended for some reason. Returnes ending message.
     */
    const SessionEndedRequest = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

      return handlerInput.responseBuilder.getResponse();
    },
  };

  /**
   * Responsible to handle the request for repeating the message and returning the last message from alexa.
   */
  const RepeatMessageIntent = {
    canHandle(handlerInput)
    {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'RepeatMessageIntent';
    },
    handle(handlerInput) {
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const output=sessionAttributes.speechOutput;
      let answerOutput='';
      if (sessionAttributes.answerOutput != undefined)
        answerOutput=sessionAttributes.answerOutput;
      //returns last instruction and if given, the last reply to the last answer (in case the user was in quiz process)
      return handlerInput.responseBuilder
        .withShouldEndSession(false)
        .speak(answerOutput+output)
        .getResponse();
    },
  };

  /**
   * Triggered when the process has stopped because of an error.
   * Possible trigger: invalid request message - similar text with custom slot (can happen in development test when value is heyboard input)
   */
  const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);

      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

      return handlerInput.responseBuilder
        .speak(requestAttributes.t('SORRY_SAY_AGAIN',requestAttributes.t('LANGUAGE')))//+'error: '+error+'located: '+sessionAttributes.function+' chapter:'+sessionAttributes.chapter+' option:'+sessionAttributes.msg_debug)
        .getResponse();
    },
  };

  const skillBuilder = Alexa.SkillBuilders.custom();
    exports.handler = skillBuilder
      .addRequestHandlers(
        LaunchRequest,
        HelpIntent,
        ShowOptionsIntent,
        GrammaticalRuleIntent,
        CancelAndStopIntentHandler,
        RepeatMessageIntent,
        SessionEndedRequest,
        FallbackHandler,
        StartQuizIntent,
        AnswerQuizIntent,
        DontKnowQuizIntent,
        EndQuizIntent,
      )
      .addRequestInterceptors(LocalizationInterceptor)
      .addErrorHandlers(ErrorHandler)
      .lambda();



/**
   *
   * @param {*} handlerInput  Input from user
   * @param {*} phrase The word inputed that needs to be translated into english.
   * @param {*} langArray The section of the file we need to search for the translation.
   */
  function translate(handlerInput,phrase,langArray)
  {
    const sessionAttributes =handlerInput.attributesManager.getSessionAttributes();
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const selected_lang = requestAttributes.t('LANGUAGE');

    for (let i=0;i<langArray.length; i++)
      if (selected_lang == 'Castellano')
        if (langArray[i].Spanish == phrase)
          return langArray[i].English;
    return phrase;
  }

/**
 * Responsible to translating chapter names.
 * Helper function for all_Chapters.
 * @param {*} handlerInput
 * @param {*} phrase
 * @param {*} target_lang
 * @param {*} langArray
 */
function translateTest(handlerInput,phrase,target_lang,langArray)
{
  const sessionAttributes =handlerInput.attributesManager.getSessionAttributes();
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const selected_lang = requestAttributes.t('LANGUAGE');

  for (let i=0;i<langArray.length; i++)
    if (target_lang == selected_lang && selected_lang!='English')
    {
      if (langArray[i].English == phrase)
      {
        if (target_lang == 'Castellano')
          {return langArray[i].Spanish;}
      }
    }
    else
    {
      if (selected_lang == 'Castellano')
        if (langArray[i].Spanish == phrase)
          return langArray[i].English;
    }
  return phrase;
}

/**
 *
 * @param {*} handlerInput
 * @param {*} option
 */
function returnJsonName(handlerInput,chapterName)
{
  const sessionAttributes =handlerInput.attributesManager.getSessionAttributes();
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const chapterNames = requestAttributes.t('CHAPTERS_NAMES');
  const chapterJsonNames = requestAttributes.t('CHAPTERS_NAMES_JSON');
  let i=0;
  while (chapterNames[i] != translate(handlerInput,chapterName,requestAttributes.t('LANGUAGE_CHAPTERS')) && i<chapterNames.length)
  {
      i++;
  }
  if (i<chapterNames.length)
    return chapterJsonNames[i];
  return 'WRONG CHAPTER';
}



/**
 *
 * decides which action to do next according to the inital response of the user
 */
function decideOption(handlerInput,option)
{
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    Object.assign(sessionAttributes,
      {
        function: 'start of decideOption',
      });
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    let return_msg;
    let request_msg;
    if (!(sessionAttributes.chapter == requestAttributes.t('NO_CHAPTER')))
      request_msg = 'OPTION_CHAPTER_';
    else
      request_msg = 'OPTION_START_';

    if (option == 'help')
    {
      request_msg +='HELP';
      if (sessionAttributes.quiz=='true')
        return_msg = requestAttributes.t('OPTIONS_QUIZ')+sessionAttributes.speechOutput;
      else
        return_msg= requestAttributes.t(request_msg);
    }
    else if (option == 'grammatical rule' || option =='index' || option =='table of contents' )
    {
      return_msg = requestAttributes.t('OPTION_START_CHAPTERS')+all_Chapters(handlerInput);
    }
    else if (option == 'quiz')
    {
      return_msg = requestAttributes.t('OPTION_START_QUIZ');
    }
    else
    {
      return_msg = requestAttributes.t('OPTION_UNRECOGNISED');
    }
    return return_msg;
}

/**
 * Returns a string with all the chapters translated to the selected language
 * @param {} handlerInput
 */
function all_Chapters(handlerInput)
{
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    let return_msg='';
    let tempArray=requestAttributes.t('CHAPTERS_NAMES');
    for (let i=0; i<tempArray.length;i++)
        return_msg += translateTest(handlerInput,tempArray[i],'Castellano',requestAttributes.t('LANGUAGE_CHAPTERS'))+'. ';
    return return_msg;
}

/*
  Function that returns the length of an array. To return length of sections of information in
  chapter.
*/
function chapterLength(chapterArray)
{
  let length=0;
  while (typeof chapterArray[length] !== 'undefined')
  {
    length++;
  }
  return length;
}



/**
 *
 * To show the basic information of a chapter.
 * MUST be common for every chapter
 * Generalization function.
 **/
function provideInfo(handlerInput,chapterNameJson,option)
{
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  let chapterArray = requestAttributes.t(chapterNameJson);
  let length = chapterLength(chapterArray);
  let curr_position=0;
  if (option =='example')
    option = 'examples'
  while (chapterArray[curr_position].title != option && curr_position < length)
    curr_position++;

  if (option == 'basic info')
  {
    //addImage(handlerInput,'true');
    if (chapterArray[curr_position].sub_text != undefined)
      return requestAttributes.t('BASIC_INFO')+sessionAttributes.chapter+'. '+chapterArray[curr_position].sub_text;
  }
  else if (option == 'more info')
  {

  Object.assign(sessionAttributes,
    {
      function: 'before while of provideInfo',
      msg: 'before add Image in provide',
    });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    //addImage(handlerInput,'false');
    if (chapterArray[curr_position].sub_text != undefined)
      return requestAttributes.t('MORE_INFO')+sessionAttributes.chapter+'. '+chapterArray[curr_position].sub_text;
  }
  else if (option == 'examples')
  {
    //addImage(handlerInput,'true');
    if (chapterArray[curr_position].sub_text != undefined)
      return requestAttributes.t('EXAMPLE_INFO')+sessionAttributes.chapter+'. '+chapterArray[curr_position].sub_text;
  }
}

/**
 * Generates the questions in a random order and populates them with the shuffeled answers.
 * @param {*} handelrInput
 * @param {*} sessionAttributes
 * @param {*} translate
 */
function generateQuestions(handlerInput,sessionAttributes,chapterName)
{

  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

  const chapterJsonName = returnJsonName(handlerInput,chapterName);
  let chapterArray = requestAttributes.t(chapterJsonName+'_QUIZ');
  let currentIndex = chapterLength(chapterArray);
  let chaptercopy = chapterArray;
  //object variables
  let questions_ids=[];

  while (currentIndex !== 0)
  {
    let randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;

    let tempVal = chaptercopy[currentIndex];
    chaptercopy[currentIndex] = chaptercopy[randomIndex];
    chaptercopy[randomIndex] = tempVal;


    questions_ids.push(chaptercopy[currentIndex].id);
  }

  Object.assign(sessionAttributes,{
    question_ids:questions_ids,
  });
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}

/**
 * Generates the answer for a given question.
 * Sets values to sessionAttributes for all answers and correct answer.
 * @param {} handlerInput
 * @param {*} question_id
 * @param {*} chapterName
 */
function generateAnswers(handlerInput,question_id,chapterName)
{
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const chapterJsonName = returnJsonName(handlerInput,chapterName);
  let chapterArray = requestAttributes.t(chapterJsonName+'_QUIZ');
  let answers_copy = chapterArray[question_id].answers;
  let answerCurrentIndex = answers_copy.length;
  let final_answers=[];
  const correct=answers_copy[0];

    while (answerCurrentIndex !== 0)
    {
      let randomAnswerIndex = Math.floor(Math.random()*answerCurrentIndex);
      answerCurrentIndex -=1;

      let tempAnsVal = answers_copy[answerCurrentIndex];
      answers_copy[answerCurrentIndex] = answers_copy[randomAnswerIndex];
      answers_copy[randomAnswerIndex] = tempAnsVal;
      final_answers.push(answers_copy[answerCurrentIndex]);
    }

    Object.assign(sessionAttributes,
      {
        shuffled_answers: final_answers,
        correct_answer: correct,
        answer_index:final_answers.length,
      });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
}

/**
 * Responsible to initiating the quiz process.
 * @param {*} handlerInput
 * @param {*} chapter
 * @param {*} carrying_output
 */
function startQuiz(handlerInput,chapter,carrying_output)
{

  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  //let chapterJson = findChapter(handlerInput,chapter);

  const chapterJsonName = returnJsonName(handlerInput,chapter);
  let chapterArray = requestAttributes.t(chapterJsonName+'_QUIZ');

  /**
   *
   * Getting a random question and shuffles the answers.
  */
  if (!(sessionAttributes.question_index == chapterLength(chapterArray)))
    generateAnswers(handlerInput,sessionAttributes.question_ids[sessionAttributes.question_index],chapter);

  let output= createQnA(handlerInput,chapterArray);


  let quiz_prompt=' ';
  if (sessionAttributes.question_index==0)
    quiz_prompt=sessionAttributes.chapter+' '+requestAttributes.t('LANGUAGE')+' quiz. '+requestAttributes.t('QUIZ_QUESTION') +'. '+(sessionAttributes.question_index+1)+'. ';
  else if(sessionAttributes.question_index == chapterArray.length)
    quiz_prompt=' ';
  else
    quiz_prompt= requestAttributes.t('QUIZ_QUESTION') +'. '+(sessionAttributes.question_index+1)+'. ';

  if(sessionAttributes.finished =='true')
    quiz_prompt ='';

  if (sessionAttributes.answered == 'true')
  {
      Object.assign(sessionAttributes,
        {
          speechOutput: quiz_prompt+output,
        });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  }
  else
  {
    Object.assign(sessionAttributes,
      {
        speechOutput: quiz_prompt+output,
      });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  }
  let index = sessionAttributes.question_index+1;
  Object.assign(sessionAttributes,
    {
      question_index: index,
    });
  handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  Object.assign(sessionAttributes,
    {
      function: 'end of start Quiz',
    });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

  return handlerInput.responseBuilder
    .withShouldEndSession(false)
    .speak(carrying_output+quiz_prompt+output)
    .getResponse();

}

/*
  This function creates the order of questions and the order the answers appear for each question..
*/
function createQnA(handlerInput,chapterArray)
{
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

  let output='';
    if (sessionAttributes.question_index == chapterLength(chapterArray))
    {
      let next_intents = ['ShowOptionsIntent','StartQuizIntent','GrammaticalRuleIntent'];
      Object.assign(sessionAttributes,
        {
          nextIntents: next_intents,
          answered: 'false',
          speechOutput: requestAttributes.t('QUIZ_COMPLETED',sessionAttributes.quiz_score),
          finished: 'true',
        });
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      return requestAttributes.t('QUIZ_COMPLETED',sessionAttributes.quiz_score)+'. '+requestAttributes.t('GRAMATICAL_OPTIONS',requestAttributes.t('OPTION_CHAPTER_HELP'));
    }


  output += requestAttributes.t('PLEASE_STATE');
  for (let i=0;i<sessionAttributes.shuffled_answers.length;i++)
    output+=' '+(i+1)+'. '+sessionAttributes.shuffled_answers[i]+'.';

  return output;
}

/**
 * Checks if answer given is correct or not.
 * Returns appropriate message.
 * @param {*} handlerInput
 * @param {*} answer
 */
function checkIfvalid(handlerInput,answer)
{
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  if (sessionAttributes.correct_answer == sessionAttributes.shuffled_answers[answer-1] )
  {
    const current_score = sessionAttributes.quiz_score;
    Object.assign(sessionAttributes,
      {
        quiz_score: current_score+1,
        function:'end of checkifvalid',
        answered: 'true',
      });
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    return requestAttributes.t('QUIZ_CORRECT_ANSWER');
  }
    Object.assign(sessionAttributes,
      {
        answered: 'true',
      });
   handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
  return requestAttributes.t('QUIZ_WRONG_ANSWER',sessionAttributes.correct_answer);
}

/**
 *
 * @param {*} handlerInput  Input of the user and way to access request and session attributes
 * @param {*} intentRequest String: the chapter name we want to access info for
 */
function validAccessIntent(handlerInput,intentRequest)
{
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
  const next_intents = sessionAttributes.nextIntents;


  for (let i=0; i<next_intents.length; i++)
  {
    //check for all next intents accessable in the next_intents array
    if ( next_intents[i] == intentRequest)
      return 'ok';
  }
  //all checks have failed and no access is given to the requested intent..
  return requestAttributes.t('NO_ACCESS_TO_THIS');
}
