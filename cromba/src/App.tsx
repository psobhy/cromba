import * as React from 'react'
import './App.css'
import './types'
import { DynamicForm } from './Components/dynamic-form/component'
import FormService from './Services/form-service'
import { FormSection } from './types'

export interface State {
  formSections: FormSection[]
}

export interface Props {}

class App extends React.Component<Props, State> {
  formService: FormService = new FormService()
  constructor(props: Props) {
    super(props)

    this.state = { formSections: [] }
  }

  componentDidMount() {
    this.formService.getFormFields().then(res => {
      this.setState({ formSections: res })
    })
  }
  render() {
    return <DynamicForm formSections={this.state.formSections} />
  }
}

export default App
