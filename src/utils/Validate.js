/** @format */

const checkValidation = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password // valid data- Password1
  );

  if (!emailRegex) return 'Please enter a valid email address';
  if (!passwordRegex) return 'Password is not strong enough';
  return null;
};

export default checkValidation;
