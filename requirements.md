## Requirements:

1. **Functional Requirements**
   1. **Module 1: Master Data**
      1. Create Master Records
         - Web-app UI for creating entities (e.g., companies, users, meeting types, resolution scenarios).
         - Client-side validation (Zod) + server-side validation.
      2. View & Manage Records
         - Paginated, searchable, sortable tables of master data.
         - Role-based filtering (scoped users vs. super-admin).
      3. Export to Excel
         - “Export” button streams selected or all records as an XLSX file.
      4. Super-Admin Dashboard
         - Global view across all companies and data sets.
   2. **Module 2: Minutes Updater**
      1. Document Creation
         - Generate Notice of Meeting, Attendance Register, Acknowledgement of Meeting, Minutes of Meeting, Certified True Copies (CTCs) or Extracts of Resolutions.
      2. Meeting Types & Scenarios
         - Support Board Meeting, Committee Meeting, AGM, EGM.
         - Prebuilt “scenarios” (template resolutions) that users can select and edit.
         - Admin UI to create/update/delete resolution scenarios.
      3. Two-Stage Workflow
         - **Draft**: Select scenario, fill details, save as draft.
         - **Final**: Lock content and enable export/print.
      4. Date Validation
         - Enforce business-logic validation rules for meeting dates (per ART’s specifications).
      5. Multi-Format Export & Print
         - Print-ready browser view.
         - PDF export of final documents.
         - Word (.docx) export.
         - Excel extracts where applicable.
      6. Persistence
         - Store all drafts and final documents in the database, scoped to company.
      7. Dashboard Hint
         - “Next Board Meeting” widget that calculates and displays the next meeting date using ART’s logic.

2. **Cross-Cutting & Non-Functional Requirements**
   1. **Tech Stack**
      - Frontend: Vite + React (or equivalent), TypeScript, Tailwind CSS, shadcn/ui, React Query, React Router, Zod, Recharts
      - Backend: Node.js, Express, Prisma ORM
      - Database: AWS RDS PostgreSQL
      - CI/CD: GitHub Actions
   2. **Security & Access Control**
      - Authentication (JWT or sessions).
      - Role-Based Access Control (super-admin vs. scoped users).
   3. **Performance & Scalability**
      - Fast HMR during development (Vite).
      - Efficient server-side pagination and indexing for large data sets.
   4. **UX/UI**
      - “Pretty,” responsive, accessible interfaces via Tailwind + shadcn/ui.
      - Consistent form layouts, modals, tables, and dashboards.
   5. **Data Integrity & Validation**
      - Zod schemas client- and server-side.
      - Prisma migrations for safe schema evolution.
   6. **Testing & Quality**
      - Unit/integration tests (Jest + Supertest); E2E tests (Cypress).
   7. **Logging & Monitoring**
      - Structured logging (e.g., Winston).
      - Error tracking and alerts for production.

## Cline Analysis:

The CS-ERP app needs to handle master data management and automate minutes creation. It requires a robust tech stack, security, performance, and a good UX/UI.

The master data module needs UI for creating entities, client and server-side validation, paginated tables, role-based filtering, and Excel export. This requires careful consideration of data structures, validation logic, and UI component selection.

The minutes updater module needs document creation, meeting type/scenario support, a two-stage workflow, date validation, multi-format export, persistence, and a dashboard hint. This requires careful consideration of document templates, workflow management, and date validation logic.

The tech stack includes Vite + React, TypeScript, Tailwind CSS, shadcn/ui, React Query, React Router, Zod, Recharts for the frontend, and Node.js, Express, Prisma ORM, AWS RDS PostgreSQL for the backend. CI/CD will be handled by GitHub Actions. This is a modern and robust stack suitable for an enterprise-grade application.

Security, performance, UX/UI, data integrity, testing, and logging are all important cross-cutting concerns. Role-based access control, efficient pagination, Zod validation, unit/integration/E2E tests, and structured logging are all essential for an enterprise-grade application.
