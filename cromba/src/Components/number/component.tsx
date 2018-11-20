import * as React from 'react'
import {
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap'
import { FormField } from '../../types'
import './component.css'

export interface State {
  min?: number
  max?: number
  unit?: string
}
export interface Props {
  field: FormField
}

export default class TextBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      unit: '',
    }
  }

  componentDidMount() {
    if (this.props.field.minLength) {
      this.setState({ min: this.props.field.minLength })
    }
    if (this.props.field.maxLength) {
      this.setState({ max: this.props.field.maxLength })
    }
  }

  addUnitAttribute() {
    if (this.props.field.unit) {
      return (
        <InputGroup>
          <InputGroup.Addon className="unitAddon col-1 ">
            {this.props.field.unit}
          </InputGroup.Addon>
          <FormControl
            type="number"
            required={this.props.field.required}
            min={this.state.min}
            max={this.state.max}
            placeholder={this.props.field.placeholder}
          />
        </InputGroup>
      )
    }
    return (
      <FormControl
        type="number"
        required={this.props.field.required}
        min={this.state.min}
        max={this.state.max}
        placeholder={this.props.field.placeholder}
      />
    )
  }
  render() {
    const { field } = this.props
    return (
      <FormGroup bsSize="large" id={field.key}>
        <h4>
          <ControlLabel>{field.label}</ControlLabel>
        </h4>
        {this.addUnitAttribute()}
      </FormGroup>
    )
  }
}
