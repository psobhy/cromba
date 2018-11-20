import * as React from 'react'
import { Form } from 'react-bootstrap'
import { FormSection } from 'src/types'
import Section from '../form-section'

export interface State {}

export interface Props {
  formSections: FormSection[]
}

export class DynamicForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <Form className="offset-3 col-6 offset-3">
        {this.props.formSections.map((section, index) => (
          <Section section={section} key={index} />
        ))}

        <button type="submit" className="btn btn-lg ">
          Click
        </button>
      </Form>
    )
  }
}
