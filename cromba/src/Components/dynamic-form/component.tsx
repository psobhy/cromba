import * as React from 'react'
import { Form } from 'reactstrap'
import { FormField } from '../../types'
export interface Props {
  formFields: FormField[]
}

export interface State {}

export class DynamicForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { formFields } = this.props
    return (
      <Form horizontal={true} className="offset-3 col-6 offset-3">
        {formFields.map(field => renderFormFields(field))}

        <button type="submit">click</button>
      </Form>
    )

    const renderFormFields = field => {
      if (field.type === 'text') {
        return <TextField field={field} key={field.key} />
      } else if (field.type === 'select') {
        return <SelectField field={field} key={field.key} />
      } else if (field.type === 'radiobutton') {
        return <RadioButtonField field={field} key={field.key} />
      } else if (field.type === 'checkbox') {
        return <CheckboxField field={field} key={field.key} />
      } else if (field.type === 'date') {
        return <DatePickerField field={field} key={field.key} />
      } else if (field.type === 'number') {
        return <NumberField field={field} key={field.key} />
      }
    }
  }
}
