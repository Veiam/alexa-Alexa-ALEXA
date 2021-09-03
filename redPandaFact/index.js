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

const SKILL_NAME = 'Red Panda Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a red panda fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Though they share a name with the more famous giant panda, they are not closely related. In fact, the name panda was first applied to these animals, and not to the larger black-and-white bear. ',
    'Other names for the red panda include lesser panda, cat-bear, bear-cat, Himalayan raccoon, fox bear and firefox, according to the San Diego Zoo. ',
    'The mascot of the Firefox Web browser is a red panda, according to Mozilla. ',
    'Red pandas live in the mountains of Nepal, central China and northern Myanmar in rainy, high-altitude temperate forests and tropical forests, according to the National Zoo. .',
    'One important factor to their habitat is bamboo. The forest must have a bamboo understory for it to be viable for the red panda. Bamboo consists of 85 to 95 percent of their diet, according to the National Zoo.',
    'Red pandas are primarily crepuscular — active at dawn or dusk — but they can be active any time of the day, according to the National Zoo. ',
    'When they wake up, red pandas groom themselves like cats, according to the San Diego Zoo. They lick their front paws and use them to wipe down their fur instead of a full tongue-to-fur bath, though. ',
    'These creatures spend most of their time in trees, eating and sleeping without the need to step foot on soil. They also like to lie on branches to sunbathe as they sleep.',
    'It can get a bit chilly at night where the red pandas live, so to keep warm, they wrap themselves in their fluffy tails, according to National Geographic.',
    'One feature that red pandas do share with giant pandas is a modified wrist bone that acts like a thumb, helping them grasp bamboo when feeding, according to the National Zoo.',
    'Their coats are reddish-brown, although their faces are mostly white with reddish tear tracks extending from their eyes to the corner of their mouths. These markings may help keep the sun out of their eyes, according to the National Zoo. ',
    'They have long, bushy tails with alternating red and white rings. The tail helps them maintain their balance as they climb trees.',
    'The red panda is considered endangered and is on the IUCNs Red List of Threatened Species.',
    'Long, sharp claws help them climb to the highest branches to sunbathe or escape from predators, according to the San Diego Zoo.',
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
