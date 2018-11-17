import * as React from 'react'
import { ControlLabel, FormGroup, Radio } from 'react-bootstrap'
import { FormField } from '../../types'

export interface Props {
  field: FormField
}

export default class RadioButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <FormGroup id={this.props.field.key} bsSize="large">
        <h4>
          <ControlLabel>{this.props.field.label}</ControlLabel>
        </h4>
        {this.props.field.options ? (
          this.props.field.options.map((option, i) => (
            <Radio className="form-control" name="radioGroup" key={i}>
              {option}
            </Radio>
          ))
        ) : (
          <br />
        )}
      </FormGroup>
    )
  }
}
