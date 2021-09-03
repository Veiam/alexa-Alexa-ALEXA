/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Golden Retriever Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a golden retriever fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Golden retrievers have a very high tolerance to pain and can tolerate injuries that many other dogs can’t tolerate. That is part of why they make very good rescuers, police and hunting helpers.',
    'The golden retriever is a crossbreed. The breed originates from a Tweed Water Spaniel, which is an extinct breed nowadays, and a Yellow Flat Coated Retriever. This was done back in the 1800’s.',
    'As the dog ages, his fur will darken. It’s possible to know exactly what colour the newborn pup will have when he is an adult by looking at the colour at the tip of his ears.',
    'They have an incredibly powerful scenting ability. Their sense of smells are among the best of all dog breeds',
    'Retrievers are prone to health problems like hip dysplasia, eye problems and epilepsy.',
    'Golden’s are incredible swimmers. Their large webbing between the toes and long tail to aid in steering makes them water-based dogs.',
    'Owning a golden retriever can cost you $13,000 over his lifetime considering he will live 10 years.',
    'Do you know any famous golden retrievers? There was Buddy from the movie Air Bud, Shadow from Homeward Bound and the President Gerald Ford’s dog named Liberty.',
    'This breed has 2 layers of fur. The inner layer is to keep warm and the outer layer is waterproof.',
    'Golden’s were first bred from Scotland in the mid 19th century. This breed was developed as a hunting breed.',
    'They first came to North America in the 1920’s where they became popular for their excellent temperament and beautiful appearance.',
    'In 1925, the AKC (American Kennel Club) registered the golden retriever as a breed.',
    'The golden retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
