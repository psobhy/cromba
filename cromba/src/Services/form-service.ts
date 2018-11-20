import FormRepository from 'src/Repo/form-repo'
import { FormField, FormSection } from 'src/types'

class FormService {
  formSections: FormSection[] = []
  formRepo: FormRepository = new FormRepository()
  formFields: FormField[] = []

  getFormFields() {
    return this.formRepo.getFormFields().then(res => {
      for (const section of res) {
        for (const item of section.sectionFields) {
          this.MapToFormFields(item)
        }
        const formSection: FormSection = {
          name: section.name,
          sectionFields: this.formFields,
        }
        this.formSections.push(formSection)
        this.formFields = []
      }
      return this.formSections
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
