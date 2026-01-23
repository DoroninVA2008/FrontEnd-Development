function MultiStepForm({ onSubmit }) {
  const [step, setStep] = React.useState('personal');
  const [formData, setFormData] = React.useState({
    personal: { firstName: '', lastName: '', age: '' },
    contact: { email: '', phone: '', city: '' },
    confirmation: { accepted: false }
  });
  
  const [errors, setErrors] = React.useState({});
  
  const validateStep = () => {
    const newErrors = {};
    
    if (step === 'personal') {
      if (!formData.personal.firstName) newErrors.firstName = 'Имя обязательно';
      if (!formData.personal.lastName) newErrors.lastName = 'Фамилия обязательна';
      if (!formData.personal.age || formData.personal.age < 18) newErrors.age = 'Возраст от 18 лет';
    }
    
    if (step === 'contact') {
      if (!formData.contact.email.includes('@')) newErrors.email = 'Некорректный email';
      if (!formData.contact.phone.match(/^\+?[0-9\s\-()]+$/)) newErrors.phone = 'Некорректный телефон';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      if (step === 'personal') setStep('contact');
      else if (step === 'contact') setStep('confirmation');
    }
  };
  
  const prevStep = () => {
    if (step === 'contact') setStep('personal');
    else if (step === 'confirmation') setStep('contact');
  };
  
  const handleSubmit = () => {
    if (formData.confirmation.accepted) {
      onSubmit(formData);
    }
  };
  
  const updateField = (stepName, field, value) => {
    setFormData(prev => ({
      ...prev,
      [stepName]: { ...prev[stepName], [field]: value }
    }));
  };
  
  const steps = ['personal', 'contact', 'confirmation'];
  const currentStepIndex = steps.indexOf(step);
  
  return (
    <div className="multi-step-form">
      <div className="progress-bar">
        {steps.map((s, index) => (
          <div 
            key={s}
            className={`step ${index === currentStepIndex ? 'active' : ''} ${index < currentStepIndex ? 'completed' : ''}`}
          >
            {index + 1}. {s}
          </div>
        ))}
      </div>
      
      <h2>Шаг: {step}</h2>
      
      {step === 'personal' && (
        <div>
          <input
            placeholder="Имя"
            value={formData.personal.firstName}
            onChange={(e) => updateField('personal', 'firstName', e.target.value)}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
          
          <input
            placeholder="Фамилия"
            value={formData.personal.lastName}
            onChange={(e) => updateField('personal', 'lastName', e.target.value)}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
          
          <input
            type="number"
            placeholder="Возраст"
            value={formData.personal.age}
            onChange={(e) => updateField('personal', 'age', e.target.value)}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
      )}
      
      {step === 'contact' && (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.contact.email}
            onChange={(e) => updateField('contact', 'email', e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          
          <input
            placeholder="Телефон"
            value={formData.contact.phone}
            onChange={(e) => updateField('contact', 'phone', e.target.value)}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
      )}
      
      {step === 'confirmation' && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={formData.confirmation.accepted}
              onChange={(e) => updateField('confirmation', 'accepted', e.target.checked)}
            />
            Я подтверждаю правильность данных
          </label>
          
          <div className="summary">
            <h3>Проверьте данные:</h3>
            <p>Имя: {formData.personal.firstName} {formData.personal.lastName}</p>
            <p>Email: {formData.contact.email}</p>
          </div>
        </div>
      )}
      
      <div className="form-controls">
        {step !== 'personal' && (
          <button onClick={prevStep}>Назад</button>
        )}
        
        {step !== 'confirmation' ? (
          <button onClick={nextStep}>Далее</button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={!formData.confirmation.accepted}
          >
            Отправить
          </button>
        )}
      </div>
    </div>
  );
}