import React, { useEffect } from 'react';
import { FaEnvelope, FaFacebookF, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <style>
        {`
          .login-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100vh;
            padding: 20px 50px;
            background: white;
          }

          .lottie-wrapper {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: -50px;
          }

          .login-box {
            flex: 1;
            max-width: 400px;
            padding: 40px 20px;
            text-align: center;
            margin-left: auto;
            margin-right: 40px;
          }

          .login-heading {
            font-size: 1.6rem;
            font-weight: bold;
            color:rgb(10, 10, 10);
            margin-bottom: 8px;
            margin-right: 40px;
          }

          .login-input {
            width: 100%;
            padding: 12px;
            margin: 16px 0;
            font-size: 1.3rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
          }

          .login-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color:  #FF7500;
            color: white;
            padding: 12px;
            font-size: 1rem;
            font-weight: bold;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 24px;
            margin-left: 90px;
          }

          .login-button:hover {
            background-color: #FF7500;
          }

          .separator {
            display: flex;
            align-items: center;
            justify-content: center;
            color: gray;
            font-size: 0.875rem;
            margin: 20px 0;
          }

          .separator hr {
            flex: 1;
            border: none;
            border-top: 1px solid #ddd;
            margin: 0 10px;
          }

          .login-icons {
            display: flex;
            justify-content: center;
            gap: 16px;
          }

          .icon-button {
            padding: 10px;
            border: 1px solid #FF7500;
            border-radius: 6px;
            background: white;
            cursor: pointer;
            transition: background 0.2s;
          }

          .icon-button:hover {
            background: #f3f3f3;
          }
        `}
      </style>

      <div className="login-container">
        {/* Lottie Animation */}
        <div
          className="lottie-wrapper"
          dangerouslySetInnerHTML={{
            __html: `<dotlottie-player 
              src="https://lottie.host/72c3c996-d328-4334-9044-9b328a60f2ba/g4HXLNzUmI.lottie" 
              background="transparent" 
              speed="1" 
              style="width: 400px; height: 430px; margin-left: 40px;" 
              loop autoplay>
            </dotlottie-player>`
          }}
        />

        {/* Login Form */}
        <div className="login-box">
          <h2 className="login-heading">LOG IN TO CONTINUE YOUR</h2>
          <h2 className="login-heading">LEARNING JOURNEY</h2>

          <input
            type="email"
            placeholder="Email"
            className="login-input"
          />

          <button className="login-button">
            <FaEnvelope className="icon" />
            Continue with email
          </button>

          <div className="separator">
            <hr />
            <span>Other log in options</span>
            <hr />
          </div>

          <div className="login-icons">
            <button className="icon-button"><FcGoogle size={24} /></button>
            <button className="icon-button"><FaFacebookF size={24} style={{ color: '#1877F2' }} /></button>
            <button className="icon-button"><FaApple size={24} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
