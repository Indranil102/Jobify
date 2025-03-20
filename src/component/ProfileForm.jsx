
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: #e0e0e0;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #4a6363;
  border-radius: 4px;
  background: #1A3636;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #4a6363;
  border-radius: 4px;
  background: #1A3636;
  color: white;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

export default function ProfileForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Profile Details</h2>
      <Field>
        <Label>Full Name</Label>
        <Input
          type="text"
          value={formData.fullName}
          onChange={e => setFormData({...formData, fullName: e.target.value})}
          required
        />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          required
        />
      </Field>
      <Field>
        <Label>Phone</Label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={e => setFormData({...formData, phone: e.target.value})}
          required
        />
      </Field>
      <Field>
        <Label>Experience</Label>
        <TextArea
          value={formData.experience}
          onChange={e => setFormData({...formData, experience: e.target.value})}
          required
        />
      </Field>
      <Field>
        <Label>Skills</Label>
        <TextArea
          value={formData.skills}
          onChange={e => setFormData({...formData, skills: e.target.value})}
          required
        />
      </Field>
      <Field>
        <Label>Resume</Label>
        <Input
          type="file"
          onChange={e => setFormData({...formData, resume: e.target.files[0]})}
          accept=".pdf,.doc,.docx"
          required
        />
      </Field>
      <Button type="submit">Save Profile</Button>
    </Form>
  );
}
