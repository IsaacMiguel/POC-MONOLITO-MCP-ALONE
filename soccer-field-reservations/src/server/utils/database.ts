soccer-field-reservations
├── src
│   ├── client
│   │   ├── components
│   │   │   ├── Billing.astro
│   │   │   ├── Fields.astro
│   │   │   ├── Notifications.astro
│   │   │   └── Reservations.astro
│   │   ├── layouts
│   │   │   └── Layout.astro
│   │   └── pages
│   │       ├── billing.astro
│   │       ├── fields.astro
│   │       └── index.astro
│   ├── server
│   │   ├── controllers
│   │   │   ├── billingController.ts
│   │   │   ├── fieldController.ts
│   │   │   └── reservationController.ts
│   │   ├── models
│   │   │   ├── Field.ts
│   │   │   ├── Reservation.ts
│   │   │   └── User.ts
│   │   ├── routes
│   │   │   ├── billingRoutes.ts
│   │   │   ├── fieldRoutes.ts
│   │   │   └── reservationRoutes.ts
│   │   ├── services
│   │   │   ├── notificationService.ts
│   │   │   └── paymentService.ts
│   │   ├── utils
│   │   │   └── database.ts
│   │   └── app.ts
├── database
│   └── schema.sql
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md