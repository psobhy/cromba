import * as React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
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
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  getValidationState() {
    const length = this.state.value.length
    if (this.props.field.key === 'email') {
      return null
    }
    if (this.props.field.minLength && this.props.field.maxLength) {
      if (length < this.props.field.minLength && length > 0) {
        return 'error'
      } else if (
        length <= this.props.field.maxLength &&
        length >= this.props.field.minLength
      ) {
        return 'success'
      }
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
    const val = (e.target as any).value
    const value = val as string
    console.log(value)
    this.setState({ value })
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
          maxLength={field.maxLength ? field.maxLength : undefined}
          minLength={field.minLength ? field.minLength : 0}
          value={value}
          onChange={this.handleChange}
        />
      </FormGroup>
    )
  }
}
