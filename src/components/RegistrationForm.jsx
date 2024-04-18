import React, { useState,useEffect } from 'react';
import { InputField, CheckboxField, SelectField, RadioButton, SubmitButton } from './FormComponents';
import '../css/mainstyle.css'


function RegistrationForm() {

  useEffect(() => {
    const addStylesAndScripts = () => {
      const scriptJQuery = document.createElement('script');
      scriptJQuery.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      document.body.appendChild(scriptJQuery);
    };

    addStylesAndScripts();

    return () => {
      const scriptsToRemove = document.querySelectorAll('script[src^="https://"]');
      scriptsToRemove.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return (
    <div>
        <form id="registrationForm" method="POST" action="php/process.php">
            <InputField label="Имя" id="firstName" type="text" name="firstName" required minLength={2} maxLength={15} />
            <InputField label="Фамилия" id="lastName" type="text" name="lastName" required minLength={2} maxLength={15} />
            <InputField label="Email" id="email" type="email" name="email" required />
            <InputField label="Логин" id="username" type="text" name="username" required minLength={6} />
            <InputField label="Пароль" id="password" type="password" name="password" required minLength={8} />
            <InputField label="Подтверждение пароля" id="confirmPassword" type="password" name="confirmPassword" required />
            <CheckboxField label="Принимаю правила..." id="agreeTerms" name="agreeTerms" required />
            <SelectField label="Мне 18 лет" id="age" name="age" required options={[{ value: 'yes', label: 'Да' }, { value: 'no', label: 'Нет' }]} />
            <div className="form-group">
                <label>Пол:</label><br />
                <RadioButton id="male" name="gender" value="male" label="Мужской" required />
                <RadioButton id="female" name="gender" value="female" label="Женский" required />
            </div>
            <SubmitButton label="Зарегистрироваться" />
        </form>
    </div>
    
  );
}

export default RegistrationForm;
