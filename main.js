<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Animated Form</title>
<style>
  /* Basic reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f3f4f6;
    font-family: Arial, sans-serif;
  }

  /* Form container */
  .form-container {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: slideIn 1s ease;
  }

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 1.5rem;
  }

  /* Input field styling */
  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .form-group label {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.9rem;
    color: #666;
    transition: 0.3s;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border 0.3s;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007BFF;
  }

  .form-group input:focus + label,
  .form-group textarea:focus + label,
  .form-group input:not(:placeholder-shown) + label,
  .form-group textarea:not(:placeholder-shown) + label {
    top: -18px;
    left: 5px;
    font-size: 0.8rem;
    color: #007BFF;
    background: #fff;
    padding: 0 5px;
  }

  /* Button styling */
  .submit-btn {
    width: 100%;
    padding: 10px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .submit-btn:hover {
    background: #0056b3;
  }

  /* Animation */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
</head>
<body>

<div class="form-container">
  <h2>Student Information Form</h2>
  <form>
    <div class="form-group">
      <input type="text" id="fullName" placeholder=" " required>
      <label for="fullName">Full Name</label>
    </div>

    <div class="form-group">
      <input type="text" id="rollNumber" placeholder=" " required>
      <label for="rollNumber">Roll Number</label>
    </div>

    <div class="form-group">
      <input type="date" id="dob" required>
      <label for="dob">Date of Birth</label>
    </div>

    <div class="form-group">
      <input type="tel" id="whatsappNumber" placeholder=" " required>
      <label for="whatsappNumber">WhatsApp Number</label>
    </div>

    <div class="form-group">
      <input type="text" id="previousCollege" placeholder=" " required>
      <label for="previousCollege">Previous College</label>
    </div>

    <div class="form-group">
      <textarea id="questionToSenior" rows="3" placeholder=" " required></textarea>
      <label for="questionToSenior">Question to Senior</label>
    </div>

    <button type="submit" class="submit-btn">Submit</button>
  </form>
</div>

</body>
</html>
