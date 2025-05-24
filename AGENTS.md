# Codex Agent Guide

## Folders
/src/app - Contains the main application logic and components.
/src/assets - Contains static assets like images, styles, and scripts.
/src/app/Api - Contains API request classes for backend communication.
/src/app/Presentation - Contains Angular components for the UI.
/src/app/Presentation/Screens - Contains screen components that represent different views in the application.
/src/app/Presentation/Layout - Contains layout components that structure the application.
/src/app/Presentation/Controls - Contains shared basic control components used across the application.
/src/app/Presentation/Components - Contains reusable widgets that encapsulate specific functionality.
/src/app/Core - Contains core services and utilities used across the application.
/src/app/Domain - Contains domain models representing the business data.
/src/app/Events - Contains events to be published or subscribed to within the application.
/src/app/Resources - Contains REST Resource representations that are acted upon with HTTP verbs.
/src/app/Services - Contains services that encapsulate ui logic and data manipulation.
/src/app/Validation - Contains validation logic for user inputs and data integrity.

## Component Folder Conventions
Screens have their own folders
Components have their own folders and are organized into screens. 

## Lint/Test
- Run lint: `pnpm lint`
- Run tests: `pnpm test`

## PR Instructions
- PR title format: `[Codex] <summary>`
- Include a summary section with rationale and before/after behavior

## Notes
All code changes must pass lint and type checks.
