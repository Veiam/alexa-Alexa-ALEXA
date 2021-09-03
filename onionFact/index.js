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

const SKILL_NAME = 'Onion Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me an onion fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Onions have been a part of the human diet for more than 7,000 years. Archeologists have discovered traces of onions dating back to 5000 B.C., found alongside stones from figs and dates in settlements from the Bronze Age.',
    'Ancient Egyptians worshipped onions, believing their spherical shape and concentric circles within symbolized eternity. In fact, onions were often placed in the burial tombs of pharoahs, as they were believed to bring about prosperity in the afterlife.',
    'In the Middle Ages, onions were an acceptable form of currency, and was used to pay for rent, goods and services — and even as gifts!',
    'Onions are rich in quercetin, a powerful flavonoid antioxidant that has been shown to have positive effects in people battling lung cancer. Onions can also be beneficial in treatment of cataracts and even cardiovascular disease.',
    'Onions can be a strong weapon in a woman’s battle against osteoporosis as she goes through menopause. That’s because onions destroy osteoclasts, bone cells which resorb bone tissue and weaken bones.',
    'Slicing onions makes most of us cry, but why? The reason is that cutting into it releases sulfuric acid, which reacts with the moisture in our eyes to create a tearful reaction. One way to avoid this unfortunate byproduct of slicing onions is to cut them under running water, or while submerged in a basin of water.',
    'According to The Guinness Book of World Records, the biggest onion ever was grown by British farmer Peter Glazebrook, who harvested a monster-sized onion in 2011 that weighed just under 18 pounds.',
    'Does eating onions make you stronger? Probably not, but the ancients Greeks thought they could; in fact, onions were eaten by athletes as a strength-booster in the very first Olympic games during the first century A.D.',
    'Sliced onion can sooth insect bites and burns on the skin. In addition, when combined with crushed aspirin and little water, slices of onion are also used as a folk treatment to cure warts.',
    'So youve sliced an onion but only used half and want to store it in the fridge for later, but youve always heard that cut onions are bacteria traps that can become highly poisonous after just one night, developing a toxic bacteria that could cause a stomach infection or even food poisoning. Wrong! According to McGill Universitys Office of Science & Society (motto: Separating Science From Nonsense), this is an urban myth that needs to be dispelled. Onions, notes McGill, are not especially prone to bacterial contamination.',
    'Onions are the last thing you should be putting in Rovers bowl. Thats because onions can weaken a dogs red blood cells, leading to anemia that, in severe cases, could result in death. Symptoms of anemia in your dog include weakness, vomiting, loss of appetite, dullness and breathlessness, so watch out for these if your pet somehow manages to eat a bag of onions when youre not looking.',
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
