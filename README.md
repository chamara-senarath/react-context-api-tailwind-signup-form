# Signup Form with React, TypeScript, and Tailwind CSS

This is a responsive signup form built using TypeScript, React, and Tailwind CSS. It allows users to sign up and provides real-time validation feedback.

## Features

- Responsive design for mobile and desktop devices.
- Real-time form validation:
  - Fields cannot be empty.
  - Email address format validation.
- Separate business logic from UI components using React patterns.
- Form state management with React Context API.
- Utilizes Tailwind CSS for styling.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/chamara-senarath/react-context-api-tailwind-signup-form
   ```

2. Navigate to the project directory:

   ```bash
   cd react-context-api-tailwind-signup-form
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the form at `http://localhost:3000`.

## Form Validation

- Fields cannot be empty. If a field is empty, an error message will display, indicating which field is required.
- Email address format is validated. If an invalid email format is entered, an error message will display.

## State Management

The form state and error messages are managed using React Context API. This ensures a clean separation of concerns between UI components and business logic.