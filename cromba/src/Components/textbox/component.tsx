import * as React from 'react'
import { FormGroup } from 'reactstrap'
import { ControlLabel, FormControl } from 'react-bootstrap'
import { FormField } from '../../types'

export interface State {
  value: string
}
export interface Props {
  field: FormField
}

export default class TextBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  getValidationState() {
    const length = this.state.value.length
    if (this.props.field.key === 'email') {
      return null
    }
    if (length < this.props.field.minLength && length > 0) {
      return 'error'
    } else if (
      length <= this.props.field.maxLength &&
      length >= this.props.field.minLength
    ) {
      return 'success'
    }
    return null
  }

  checkEmail() {
    if (this.props.field.key === 'email') {
      return 'email'
    } else {
      return 'text'
    }
  }

  handleChange(e: React.FormEvent<FormControl>) {
    // tslint:disable-next-line:no-debugger
    debugger
    // this.setState({ value: e.target.value });
  }

  render() {
    const { field } = this.props
    const { value } = this.state
    return (
      <FormGroup
        id={field.key}
        bsSize="lg"
        validationState={this.getValidationState()}
      >
        <h4>
          <ControlLabel>{field.label}</ControlLabel>
        </h4>
        <FormControl
          type={this.checkEmail()}
          placeholder={field.placeholder}
          required={field.required}
          maxLength={field.maxLength}
          value={value}
          onChange={this.handleChange}
        />
      </FormGroup>
    )
  }
}
