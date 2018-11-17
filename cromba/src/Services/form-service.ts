import FormRepository from 'src/Repo/form-repo'
import { FormField } from 'src/types'

class FormService {
  formFields: FormField[] = []
  formRepo: FormRepository = new FormRepository()

  getFormFields() {
    return this.formRepo.getFormFields().then(res => {
      for (const item of res) {
        this.MapToFormFields(item)
      }
      return this.formFields
    })
  }

  MapToFormFields(field: any) {
    const tempField: FormField = {
      key: field.key,
      label: field.label,
      type: field.type,
    }
    if (field.maxLength) {
      tempField.maxLength = field.maxLength
    }
    if (field.minLength) {
      tempField.minLength = field.minLength
    }
    if (field.required) {
      tempField.required = field.required
    }
    if (field.placeholder) {
      tempField.placeholder = field.placeholder
    }
    if (field.options) {
      tempField.options = field.options
    }
    if (field.unit) {
      tempField.unit = field.unit
    }
    this.formFields.push(tempField)
  }
}

export default FormService
