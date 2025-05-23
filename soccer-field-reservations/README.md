# Soccer Field Reservations Application

This project is a monolithic application for managing soccer field reservations. It includes a backend built with Node.js and Express, and a frontend developed using Astro and Tailwind CSS. The application provides features for soccer field reservation, billing reports, and automatic notifications on reservations.

## Features

- **Soccer Field Reservation**: Users can view available soccer fields and make reservations.
- **Billing Reports**: The application generates billing information related to reservations.
- **Automatic Notifications**: Users receive notifications regarding their reservations.

## Project Structure

```
soccer-field-reservations
├── src
│   ├── client
│   ├── server
├── database
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd soccer-field-reservations
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   - Run the SQL schema located in `database/schema.sql` to create the necessary tables.

4. Start the application:
   ```
   npm run dev
   ```

## License

This project is licensed under the MIT License.