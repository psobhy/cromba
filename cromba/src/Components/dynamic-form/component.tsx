import * as React from 'react'
import { Form } from 'react-bootstrap'
// import { FormField } from '../../types'
import TextBox from '../textbox/component'
import Number from '../number/component'
import RadioButton from '../radiobutton/component'
import CheckBox from '../checkbox/component'
import DatePickerComponent from '../datepicker/component'
import Select from '../select/component'
import { FormField } from 'src/types'

export interface State {}

export interface Props {
  formFields: FormField[]
}

export class DynamicForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  renderFormFields(field: FormField) {
    console.log(field)
    if (field.type === 'text') {
      return <TextBox field={field} key={field.key} />
    } else if (field.type === 'select') {
      return <Select field={field} key={field.key} />
    } else if (field.type === 'radiobutton') {
      return <RadioButton field={field} key={field.key} />
    } else if (field.type === 'checkbox') {
      return <CheckBox field={field} key={field.key} />
    } else if (field.type === 'date') {
      return <DatePickerComponent field={field} key={field.key} />
    } else if (field.type === 'number') {
      return <Number field={field} key={field.key} />
    } else {
      return null
    }
  }

  render() {
    //  const { formFields } = this.props
    return (
      <Form horizontal={true} className="offset-3 col-6 offset-3">
        {this.props.formFields.map(field => this.renderFormFields(field))}

        <button type="submit">click</button>
      </Form>
    )
  }
}
