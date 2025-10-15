# Workshop & Coaching Platform

This is a personal project for a platform for lifestyle coaches to handle workshops and client meetings. The application is supposed to help coaches to handle all managerial stuff such as bookings, payments, and newsletters.

It will contain

- "admin" where host
  - can create workshop/meeting sessions (date, time, place, description)
  - can get overview of stats
- "user" where users/clients can register/pay for a session
- "confirmation" will ensure that confirmations are sent when the user has signed up
- "upload" to enable hosts to upload material such as pictures and pdf:s
- S3 will be used for documents, pictures and other static material
- Backend will be done i AWS-lambda + Drizzle + Postgres
- Zod for validation
- CDK to provision everything (Lambdas, API Gateway, RDS, SNS, S3 etc..)

The purpose is to learn
Event-driven architecture, AWS services and Infrastructure As Code. And also to handle everything as a monorepo with turborepo as managementsystem.

## Tech Stack

- Monorepo managed with Turborepo
- Frontend: React + Vite + TypeScript + Chacra UI + AWS Cognito
  - Single Page App (SPA) hosted in S3 + AWS CloudFront
- Backend: AWS Lambda, API Gateway,
  - Database: PostgreSQL via Drizzle ORM
  - SQS: for emails, notifications
  - AWS S3: for uploads
- Validation: Zod
- Database schema & types shared via packages
- Deployment: AWS CDK

## Packages (monorepo)

- `@workshop/validation`: Zod schemas
- `@workshop/types`: shared TypeScript types
- `@workshop/utils`: shared utility functions
- `@workshop/config`: tsconfig, eslint, prettier configs

## Design goals

- Shared types and validation between frontend and backend
- Serverless architecture on AWS
- Typed API client with runtime validation (Zod)
- Full local dev support with turborepo

## Structure

workshop-platform/
├── apps/
│ ├── backend/
│ │ └── src/
│ │ ├── domains/
│ │ │ ├── admin/
│ │ │ ├── email/
│ │ │ ├── upload/
│ │ │ └── workshops/
│ │ ├── infrastructure/
│ │ │ ├── aws/
│ │ │ ├── database/
│ │ │ └── server/
│ │ └── shared/
│ │ ├── middleware/
│ │ ├── types/
│ │ └── utils/
│ ├── frontend/
│ │ └── src/
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── index.css
│ │ ├── main.tsx
│ │ └── assets/
│ └── infra/
└── packages/
├── config/
├── types/
├── utils/
└── validation/
