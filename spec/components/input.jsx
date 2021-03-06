import React from 'react';
import Input from '../../components/input';

class InputTest extends React.Component {
  state = {
    normal: 'Tony Stark',
    fixedLabel: '',
    withIcon: ''
  };

  handleChange = (name, value) => {
    const newState = {};
    newState[[name]] = value;
    this.setState(newState);
  };

  render () {
    return (
      <section>
        <h5>Inputs</h5>
        <p>lorem ipsum...</p>
        <Input
          type='text'
          value={this.state.normal}
          label='Firstname' onChange={this.handleChange.bind(this, 'normal')}
          maxLength={12}
        />
        <Input type='email' value={this.state.fixedLabel} label='Label fixed' floating={false} onChange={this.handleChange.bind(this, 'fixedLabel')} />
        <Input type='text' value='Read only' readOnly label='Phone Number' />
        <Input type='text' label='Disabled field' disabled />
        <Input type='tel' value={this.state.withIcon} label='With icon' onChange={this.handleChange.bind(this, 'withIcon')} icon='phone' />
      </section>
    );
  }
}

export default InputTest;
