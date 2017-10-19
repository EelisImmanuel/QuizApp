import _ from 'lodash';

export const NEW_QUESTION = 'new_question';

export function newQuestion(values){
const random = _.random(1, 10000)
//Filter palauttaa oikeat vastaukset, ja map oikean vastauksen arvon.

const answerArr = values.options.filter((option)=>{return option.value}).map((value)=>{return value.option})
const obj = {'id': random, 'question': values.question, 'options':values.options, 'answer': answerArr}
    return{
        type: NEW_QUESTION,
        payload: obj
    }

}