import * as React from 'react'
import { FormField } from '../../types'
import { Checkbox, FormGroup } from 'react-bootstrap'
import './component.css'

export interface Props {
  field: FormField
}

export default class CheckBox extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <FormGroup id={this.props.field.key} bsSize="lg">
        {this.props.field.options ? (
          this.props.field.options.map((option, i) => (
            <Checkbox key={i} inline={true} className="_checkbox">
              {option}
            </Checkbox>
          ))
        ) : (
          <br />
        )}
      </FormGroup>
    )
  }
}
