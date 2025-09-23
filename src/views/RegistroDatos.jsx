// Archivo: RegistroDatos.jsx
import React, { useState } from 'react';
import { productos } from '../data/productos';

// Los estilos son los mismos...
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  inputGroup: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  flex1: {
    flex: '1',
  },
  button: {
    padding: '1rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: "#1a1a1a"
,
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
  }
};

// CAMBIO 1: El nombre de la función ahora es RegistroDatos
const RegistroDatos = () => {
  const [formData, setFormData] = useState({
    amount: '',
    selectedProject: 'project1',
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la donación:', formData);
    alert(`Gracias por tu donación de $${formData.amount} MXN, ${formData.firstName}!`);
  };

  // El JSX del return es exactamente el mismo...
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
       <h2>Formulario de Donación 💳</h2>

      {/* --- Campos Esenciales de la Donación --- */}
      <div style={styles.inputGroup}>
        <label htmlFor="amount" style={styles.label}>Monto de la Donación (MXN)</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Ej: 500"
          style={styles.input}
          required
        />
      </div>

      <div style={styles.inputGroup}>
  <label htmlFor="selectedProject" style={styles.label}>Selecciona un Proyecto</label>
  <select
    id="selectedProject"
    name="selectedProject"
    value={formData.selectedProject}
    onChange={handleChange}
    style={styles.input}
    required
  >
    {productos.map((producto) => (
      <option key={producto.id} value={producto.id}>
        {producto.nombre}
      </option>
    ))}
  </select>
</div>


      <hr style={{margin: '1rem 0', border: '1px solid #eee'}}/>

      {/* --- Datos Personales --- */}
      <div style={styles.row}>
        <div style={{...styles.inputGroup, ...styles.flex1}}>
          <label htmlFor="firstName" style={styles.label}>Nombres</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={{...styles.inputGroup, ...styles.flex1}}>
          <label htmlFor="lastName" style={styles.label}>Apellidos</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
      </div>

       <div style={styles.inputGroup}>
        <label htmlFor="email" style={styles.label}>Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Para enviar tu recibo"
          style={styles.input}
          required
        />
      </div>

      <hr style={{margin: '1rem 0', border: '1px solid #eee'}}/>

      {/* --- Datos de Pago --- */}
      <div style={styles.inputGroup}>
        <label htmlFor="cardNumber" style={styles.label}>Número de Tarjeta</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="0000 0000 0000 0000"
          maxLength="16"
          style={styles.input}
          required
        />
      </div>
      <div style={styles.row}>
        <div style={{...styles.inputGroup, ...styles.flex1}}>
          <label htmlFor="expiryDate" style={styles.label}>Vencimiento</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/AA"
            maxLength="5"
            style={styles.input}
            required
          />
        </div>
        <div style={{...styles.inputGroup, ...styles.flex1}}>
          <label htmlFor="cvv" style={styles.label}>CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            maxLength="3"
            style={styles.input}
            required
          />
        </div>
      </div>

      <button type="submit" style={styles.button}>
        Donar ahora
      </button>
    </form>
  );
};

// CAMBIO 2: La exportación también cambia a RegistroDatos
export default RegistroDatos;