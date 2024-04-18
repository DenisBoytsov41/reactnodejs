import React from 'react';

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы для ввода данных */}
      <button type="submit" className="btn">Войти</button>
    </form>
  );
}

export default LoginForm;
