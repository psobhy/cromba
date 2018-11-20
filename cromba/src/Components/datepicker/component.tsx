import * as React from 'react'
import { ControlLabel, FormGroup } from 'react-bootstrap'
import { FormField } from '../../types'
import { DateTime } from 'react-datetime-bootstrap'
import './component.css'

export interface State {
  Date: string
}
export interface Props {
  field: FormField
}

export default class DatePickerComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { Date: new Date().toISOString() }
  }

  setDatePickerProps() {
    return {
      format: 'LL',
    }
  }
  render() {
    const { field } = this.props
    const { Date } = this.state
    return (
      <FormGroup bsSize="large">
        <h4>
          <ControlLabel>{field.placeholder}</ControlLabel>
        </h4>
        <DateTime
          pickerOptions={this.setDatePickerProps()}
          value={Date}
          className="datepicker"
        />
      </FormGroup>
    )
  }
}
