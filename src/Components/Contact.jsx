import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [variant, setVariant] = useState('success');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hn1kfys',
      'template_fwml6n8',
      formData,
      '8eTEvhWrHD7mzbZpk'
    ).then(() => {
      setStatusMessage('✅ Message sent successfully!');
      setVariant('success');
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      setStatusMessage('❌ Failed to send message. Try again.');
      setVariant('danger');
    });
  };

  return (
    <Container className="contact-container my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="contact-box">
            <h2 className="text-center mb-4">📩 Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 fw-bold">
                Send Message
              </Button>
            </Form>
            {statusMessage && (
              <Alert variant={variant} className="mt-4 text-center">
                {statusMessage}
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
