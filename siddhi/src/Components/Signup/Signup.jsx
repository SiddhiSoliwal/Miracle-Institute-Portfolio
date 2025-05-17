import React, { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Inline CSS */}
      <style>
        {`
          .login-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            gap: 50px;
            padding: 20px;
          }

          .lottie-wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 180px;
          }

          .login-form {
            flex: 1;
            text-align: center;
          }

          .login-form h1 {
            font-size: 2.5rem;
            font-weight: bold;
          }
      

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #fff;
      margin: 0;
    }

    .signup-container {
      width: 100%;
      max-width: 400px;
      padding: 30px;
      border-radius: 8px;
      background: #fff;
      margin-right: 50px;
      text-align: center;
    }

    h2 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 700;
    }

    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    .checkbox-container {
      display: flex;
      align-items: start;
      gap: 10px;
      font-size: 14px;
      margin: 15px 0;
      text-align: left;
    }

    .signup-button {
      background-color:  #FF7500;
      color: white;
      border: none;
      padding: 14px;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 10px;
    }

    .signup-button:hover {
      background-color:  #FF7500;
    }

    .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 20px 0;
      color: #888;
      font-size: 14px;
    }

    .divider::before, .divider::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #ccc;
      margin: 0 10px;
    }

    .social-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 15px;
    }

    .social-buttons button {
      border: 1px solid #ccc;
      border-radius: 8px;
      background: white;
      padding: 10px;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }

    .social-buttons img {
      width: 24px;
      height: 24px;
    }

    .terms {
      font-size: 12px;
      color: #555;
    }

    .terms a {
      color:  #FF7500;
      text-decoration: none;
    }
        `}
      </style>

      <div className="login-container">
        {/* Left Side - Lottie Animation */}
        <div
          className="lottie-wrapper"
          dangerouslySetInnerHTML={{
            __html: `<dotlottie-player 
              src="https://lottie.host/72c3c996-d328-4334-9044-9b328a60f2ba/g4HXLNzUmI.lottie" 
              background="transparent" 
              speed="1" 
              style="width: 400px; height: 450px;" 
              loop autoplay>
            </dotlottie-player>`
          }}
        />

        {/* Right Side - Login Content */}
        <div class="signup-container">
    <h2>SIGN UP  WITH EMAIL</h2>

    <input type="text" placeholder="Full name" />
    <input type="email" placeholder="Email" />

    <div class="checkbox-container">
      <input type="checkbox" id="offers" checked />
      <label for="offers">
        Send me special offers, personalized recommendations, and learning tips.
      </label>
    </div>

    <button class="signup-button">
      📧 Continue with email
    </button>

    <div class="divider">Other sign up options</div>

    <div class="social-buttons">
      <button><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" /></button>
      <button><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></button>
      <button><img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" /></button>
    </div>

    <div class="terms">
      By signing up, you agree to our 
      <a href="#">Terms of Use</a> and 
      <a href="#">Privacy Policy</a>.
    </div>
  </div>
      </div>
    </div>
  );
}
