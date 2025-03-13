import React, { useState } from 'react';
import '../styles/login.css';

import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Validation rules
  const validateForm = () => {
    let valid = true;
    let newErrors = { ...errors };

    // Username validation (min 5 characters)
    if (credentials.username.length < 5) {
      newErrors.username = 'Username must be at least 5 characters long';
      valid = false;
      alert('Username must be at least 5 characters long'); // Popup message
    } else {
      newErrors.username = '';
    }

    // Password validation (min 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(credentials.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, include an uppercase, lowercase, number, and special character';
      valid = false;
      alert(
        'Password must be at least 8 characters long and include an uppercase, lowercase, number, and special character'
      ); // Popup message
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert('Registered successfully!'); // Success popup message
      console.log('Form submitted:', credentials);

      // Optionally reset form after submission
      setCredentials({
        username: '',
        email: '',
        password: ''
      });
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="login" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  {/* Username */}
                  <FormGroup>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      value={credentials.username}
                      onChange={handleChange}
                      required
                    />
                    {errors.username && (
                      <small className="error">{errors.username}</small>
                    )}
                  </FormGroup>

                  {/* Email */}
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  {/* Password */}
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                    {errors.password && (
                      <small className="error">{errors.password}</small>
                    )}
                  </FormGroup>

                  {/* Submit Button */}
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
