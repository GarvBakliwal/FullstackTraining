import React, { useState } from "react";
import "../styles/AuthForm.css"; // Import your CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false); // State to manage form toggle

  // Function to handle form toggle between Sign In and Sign Up
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const schema = z.object({
    name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number cannot exceed 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters")
  });

  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form action="" /* onSubmit={handleSubmit(onSubmit)} */>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email for Registration</span>
          <input type="text" placeholder="Name" /* {...register('name')} */ />
          {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}

          <input type="email" placeholder="Email" /* {...register('email')} */ />
          {/* {errors.email && <p className='text-red-500'>{errors.email.message}</p>} */}

          <input type="text" placeholder="Phone" /* {...register('phone')} */ />
          {/* {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>} */}

          <input type="password" placeholder="Password" /* {...register('password')} */ />
          {/* {errors.password && <p className='text-red-500'>{errors.password.message}</p>} */}

          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email & Password</span>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" {...register('email')}/>
          {/* {errors.name && <p className='text-red-500'>{errors.email.message}</p>} */}
          
          <label htmlFor="password"></label>
          <input type="password" placeholder="Password" {...register('password')}/>
          {/* {errors.email && <p className='text-red-500'>{errors.password.message}</p>} */}
          <a href="#">Forgot your Password?</a>
          <button type="submit">Sign in</button>
        </form>
      </div>

      {/* Toggle between Sign In and Sign Up */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your Personal Details to use all of the Site Features</p>
            <button id="login" onClick={handleToggle}>
              Sign in
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your Personal Details to use all of the Site Features</p>
            <button id="register" onClick={handleToggle}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;