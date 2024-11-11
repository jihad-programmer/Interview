import React, { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setContacts([...contacts, { ...form, id: Date.now() }]);
    setForm({ name: '', phone: '', email: '' });
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEdit = (id) => {
    const contact = contacts.find(contact => contact.id === id);
    setForm({ name: contact.name, phone: contact.phone, email: contact.email });
    handleDelete(id);
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Management</h1>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Name" 
        />
        <input 
          type="text" 
          name="phone" 
          value={form.phone} 
          onChange={handleChange} 
          placeholder="Phone" 
        />
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="Email" 
        />
        <button type="submit">Add Contact</button>
      </form>

      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.phone} - {contact.email}</span>
            <button onClick={() => handleEdit(contact.id)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



