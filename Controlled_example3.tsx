import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно обработать данные формы
    console.log('Submitted:', formData);
    // Очистка формы после отправки
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Электронная почта:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ControlledForm;
