import React from 'react';
import Choice from './choice'
// const answerValue = 'ABCDEFGH'.split('')
const answers = [{ label: 'A123456', value: 'A' }, { label: 'B123456', value: 'B' }, { label: 'C123456', value: 'C' }, { label: 'D123456', value: 'D' },]
class AnswerState {
  choosedAnswer: string = ''
}
class Answer extends React.Component<{}, AnswerState> {
  constructor(props: any) {
    super(props)
    this.state = {
      choosedAnswer: ''
    }
  }
  handleChooseAnswer(value: string) {
    console.log(value);
    this.setState({ choosedAnswer: value })
    // props.chooseAnswer(value)
  }
  render() {
    return (
      <div className="answer card">
        {
          answers.map(answer =>
            <Choice key={answer.value}
              choosedAnswer={this.state.choosedAnswer}
              click={(answer:string)=>this.handleChooseAnswer(answer)}
              value={answer.value}
              label={answer.label}>
            </Choice>
          )}
      </div>
    );
  }
}
export default Answer;