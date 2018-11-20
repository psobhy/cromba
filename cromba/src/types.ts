export interface FormSection {
  name: string
  sectionFields: FormField[]
}

export interface FormField {
  label: string
  key: string
  minLength?: number
  maxLength?: number
  required?: boolean
  placeholder?: string
  type: string
  options?: any[]
  unit?: string
}
