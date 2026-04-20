import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function LeadForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submissionState, setSubmissionState] = useState('idle')

  const isSubmitting = submissionState === 'submitting'
  const isSuccess = submissionState === 'success'

  const validateForm = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Ingresa tu nombre completo.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Ingresa tu correo electrónico.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Ingresa un correo electrónico válido.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Ingresa tu teléfono.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }))
    }

    if (isSuccess) {
      setSubmissionState('idle')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionState('idle')
      return
    }

    setSubmissionState('submitting')

    await new Promise((resolve) => {
      window.setTimeout(resolve, 900)
    })

    setForm(initialForm)
    setSubmissionState('success')
  }

  return (
    <section className="lead-section" aria-labelledby="lead-title">
      <div className="section-heading">
        <span className="section-label">Atención personalizada</span>
        <h2 id="lead-title">Solicita información</h2>
        <p>Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo</p>
      </div>

      <form
        className={`lead-form ${isSubmitting ? 'is-submitting' : ''} ${isSuccess ? 'is-success' : ''}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <FormField
          id="name"
          label="Nombre completo"
          value={form.name}
          error={errors.name}
          onChange={handleChange}
          autoComplete="name"
          disabled={isSubmitting}
        />
        <FormField
          id="email"
          label="Correo electrónico"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={handleChange}
          autoComplete="email"
          disabled={isSubmitting}
        />
        <FormField
          id="phone"
          label="Teléfono"
          type="tel"
          value={form.phone}
          error={errors.phone}
          onChange={handleChange}
          autoComplete="tel"
          disabled={isSubmitting}
        />
        <FormField
          id="message"
          label="Mensaje (opcional)"
          value={form.message}
          onChange={handleChange}
          isTextArea
          disabled={isSubmitting}
        />

        {isSuccess && (
          <div className="success-message" role="status">
            <span className="success-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M9.7 15.5 5.8 11.6l-1.4 1.4 5.3 5.3L20 8l-1.4-1.4-8.9 8.9Z" />
              </svg>
            </span>
            <p>
            Muchísimas gracias. Uno de nuestros asesores se contactará contigo muy pronto.
            </p>
          </div>
        )}

        <button className="submit-button" type="submit" disabled={isSubmitting}>
          <span>{isSubmitting ? 'Enviando solicitud...' : 'Enviar solicitud'}</span>
        </button>
      </form>
    </section>
  )
}

function FormField({
  id,
  label,
  type = 'text',
  value,
  error,
  onChange,
  isTextArea = false,
  autoComplete,
  disabled = false,
}) {
  const describedBy = error ? `${id}-error` : undefined
  const fieldProps = {
    id,
    name: id,
    value,
    onChange,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': describedBy,
    autoComplete,
    disabled,
  }

  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      {isTextArea ? (
        <textarea {...fieldProps} rows="5" />
      ) : (
        <input {...fieldProps} type={type} />
      )}
      {error && (
        <small className="field-error" id={describedBy}>
          {error}
        </small>
      )}
    </label>
  )
}

export default LeadForm
