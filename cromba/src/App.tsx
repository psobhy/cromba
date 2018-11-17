import * as React from 'react'
import './App.css'
import './types'
import { DynamicForm } from './Components/dynamic-form/component'
import FormService from './Services/form-service'
import { FormField } from './types'

export interface State {
  fields: FormField[]
}

export interface Props {}

class App extends React.Component<Props, State> {
  formService: FormService = new FormService()
  constructor(props: Props) {
    super(props)

    this.state = { fields: [] }
  }

  componentDidMount() {
    this.formService.getFormFields().then(res => {
      this.setState({ fields: res })
    })
  }
  render() {
    return <DynamicForm formFields={this.state.fields} />
  }
}

export default App
