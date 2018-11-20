import * as React from 'react'
import './component.css'
import { FormSection, FormField } from '../../types'
import TextBox from '../textbox/component'
import Select from '../select/component'
import RadioButton from '../radiobutton/component'
import CheckBox from '../checkbox/component'
import Number from '../number/component'
import DatePickerComponent from '../datepicker/component'

export interface Props {
  section: FormSection
}

export default class Section extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  renderFormFields(field: FormField) {
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
    const { section } = this.props
    return (
      <div>
        <br />
        <h2>{section.name}</h2>
        <hr className="horizontal-line" />
        <br />
        <br />
        {console.log(section.sectionFields)}
        {section.sectionFields.map(field => {
          return this.renderFormFields(field)
        })}
      </div>
    )
  }
}
