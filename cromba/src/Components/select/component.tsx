import * as React from 'react'
import { ControlLabel, FormGroup } from 'react-bootstrap'
import { FormField } from '../../types'

export interface Props {
  field: FormField
}

export default class Select extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <FormGroup id={this.props.field.key} bsSize="large">
        <h4>
          <ControlLabel>{this.props.field.label}</ControlLabel>
        </h4>
        <select defaultValue="default" className="form-control">
          <option disabled={true} value="default">
            {this.props.field.placeholder}
          </option>
          {this.props.field.options ? (
            this.props.field.options.map((option, i) => (
              <option key={i} value={i}>
                {option}
              </option>
            ))
          ) : (
            <br />
          )}
        </select>
      </FormGroup>
    )
  }
}
