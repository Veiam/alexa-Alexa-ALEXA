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

const SKILL_NAME = 'Corgi Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a corgi fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'The Pembroke Welsh Corgi is a cattle herding dog breed which originated in Pembrokeshire, Wales.',
    'It is one of two breeds known as a Welsh Corgi. The other is the Cardigan Welsh Corgi, and both descend from the line that is the northern spitz-type dog.',
    'Corgis were prized in early Welsh settlements for their loyalty, herding abilities, and companionship. Laws were put in place which severely penalized thieves of the much revered pooch, and no family could walk with heads held high if their Corgi wasn’t adept at performing a variety of tricks.',
    'Coming in at just a foot tall, the Pembroke Welsh Corgi is the smallest of the herding breeds.',
    'Corgis are the 11th smartest dog breed as ranked by psychology professor Stanley Coren.',
    'Beloved in England, Corgis have been part of the British Royal Family for over 70 years. ',
    'Queen Elizabeth II has owned more than 30 Corgis since she was a young child, making the breed synonymous with the Royal Family.',
    'Corgis evolved into two types, the Cardigan and the Pembroke, which weren’t recognized as separate breeds until the 1930s.',
    'Sutter Brown, an adorable Pembroke, was named California’s First Dog in 2010 after his hooman, Jerry Brown, was elected governor.',
    'Don’t get confused by their stocky build! Corgis are one of the most athletic breeds, as they were originally herders. They’ve been known to be shockingly fast runners.',
    'While they make look different in stature, Corgis are closely related to Siberian Huskies. They are both in the Spitz family of dogs, characterized by their thick fur and pointed ears and muzzle.',
    'While Corgis make great house pets, they are known to get heavy if they aren’t regularly exercised.',
    'The Corgi name originated from the Welshmen who developed the breed and called them dwarf dog due to their stature. In Welsh, cor means dwarf and gi means dog.',
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
