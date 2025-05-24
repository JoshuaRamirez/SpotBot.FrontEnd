# Codex Agent Guide

## Folders
- /src/app - Contains the main application logic and components.
- /src/assets - Contains static assets like images, styles, and scripts.
- /src/app/Api - Contains API request classes for backend communication.
- /src/app/Presentation - Contains Angular components for the UI.
- /src/app/Presentation/Screens - Contains screen components that represent different views in the application.
- /src/app/Presentation/Layout - Contains layout components that structure the application.
- /src/app/Presentation/Controls - Contains shared basic control components used across the application.
- /src/app/Presentation/Components - Contains reusable widgets that encapsulate specific functionality.
- /src/app/Core - Contains core services and utilities used across the application.
- /src/app/Domain - Contains domain models representing the business data.
- /src/app/Events - Contains events to be published or subscribed to within the application.
- /src/app/Resources - Contains REST Resource representations that are acted upon with HTTP verbs.
- /src/app/Services - Contains services that encapsulate ui logic and data manipulation.
- /src/app/Validation - Contains validation logic for user inputs and data integrity.

## Presentation Folder Conventions
- Screens have their own folders
- Custom controls go in the Controls folder
- Layout components are in the Layout folder
- Shared components that are used across multiple screens go in the Components folder
- Screens are aggregate component roots that may contain multiple components.
- When Screens contain multiple components, the components should be placed in folders named after themselves.



## Lint/Test
- Run lint: `pnpm lint`
- Run tests: `pnpm test`

## PR Instructions
- PR title format: `[Codex] <summary>`
- Include a summary section with rationale and before/after behavior

## Notes
All code changes must pass lint and type checks.


## Component Architecture Specification


## 📐 **Role-Based Component Architecture Specification**

### 🧩 Overview

Each component is designed as a folder containing multiple files, each with a specific role. Files are named according to the component they belong to and their role, using the format:

```
<ComponentName>.<Role>.ts
```

This pattern ensures separation of concerns, testability, and ease of collaboration.

---

### 📁 File Roles & Responsibilities

| Role             | Description                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Component**    | Defines the Angular component (`@Component` class). It connects template, data, events, and services. Minimal logic—delegates to other roles.          |
| **Api**          | Handles external API communication. Wraps HTTP calls and exposes request objects or observables.                                                       |
| **Data**         | Stores local component state, possibly with basic typed models or DTOs. Acts as the “client-side database” for the component.                          |
| **Events**       | Manages user or application events. Can encapsulate event emitters, subscriptions, or event dispatching logic.                                         |
| **Interactions** | Handles DOM or user interaction logic—clicks, gestures, keyboard input, etc. Might call services or trigger events.                                    |
| **Behaviors**    | Encapsulates business logic and data transformations. May call APIs, process state, and determine decisions (e.g., validation rules, computed values). |
| **Validation**   | Contains validators and validation rules. Applies constraints to data or user inputs and returns results or error messages.                            |
| **Styles**       | Defines component styles, typically in `.scss` or `.css`.                                                                                              |
| **Template**     | Contains the HTML structure of the component with Angular bindings and directives.                                                                     |

---

### 🔁 File Interactions (Dependency Flow)

```plaintext
Template
   ↕
Component
   ↕
 ┌─────────────────────────────────────────────────────────┐
 │                   Supporting Roles                      │
 ├────────┬────────┬──────────────┬────────────┬───────────┤
 │  Api   │  Data  │ Interactions │ Behaviors  │ Validation│
 └────────┴────────┴──────────────┴────────────┴───────────┘
```

#### Role Communication Guidelines:

* **Component ↔ Api**: Uses request objects (e.g., `HttpPostRequest`) to send/receive data. Subscribes to responses via observables or subjects.
* **Component ↔ Data**: Reads and updates local state. Passes state into service functions (e.g., for transformation or validation).
* **Component ↔ Interactions**: Handles user actions and delegates input behavior to interaction handlers.
* **Component ↔ Behaviors**: Delegates business logic and decision-making here. Often coordinates data updates or validation.
* **Component ↔ Validation**: Uses validators before triggering saves or updates.
* **Component ↔ Template**: Binds values, triggers actions, shows visual state.

---

### 🧱 Core Abstractions

Your pattern demonstrates layered abstraction via base classes:

* `HttpRequest<T>`: Base class for all API requests.
* `HttpGetRequest<T>` / `HttpPostRequest<TReq, TRes>` / etc.: Specialized API request handlers.
* Observable streams (`$Response`) standardize async handling across request types.

This encourages reusable request patterns while keeping request logic separate from component logic.

---

### ✅ Benefits

* **Separation of Concerns**: Each file has a focused responsibility.
* **Testability**: Roles are isolated and can be unit tested independently.
* **Scalability**: Easy to add new behavior or interaction logic without cluttering the component.
* **Consistency**: Follows a clear naming and structural pattern across components.

---

### 🛠️ Optional Enhancements

Depending on project complexity, you might include:

* **Facade Layer**: If multiple roles need to be orchestrated together.
* **State Management**: Introduce state containers for shared or complex state (e.g., Akita, NgRx).
* **Dependency Injection Tokens**: To decouple services further.

---

### 📝 Example File Names

For a component called `ExchangeScreen`:

```plaintext
ExchangeScreen.Component.ts
ExchangeScreen.Api.ts
ExchangeScreen.Data.ts
ExchangeScreen.Events.ts
ExchangeScreen.Interactions.ts
ExchangeScreen.Behaviors.ts
ExchangeScreen.Validation.ts
ExchangeScreen.Template.html
ExchangeScreen.Styles.scss
```

## Component Architecture Descriptions

### 1. **Component Initialization**

The component is responsible for setting up dependencies and handling lifecycle events.

* It creates a state container (`Model`) to hold data.
* It instantiates helper classes for API communication (`Api`), logic (`Behaviors`), and UI actions (`Interactions`).
* On initialization, it triggers a data load through the `Behaviors`.

---

### 2. **Model**

The model encapsulates all data relevant to the screen.

* It defines properties that represent the current UI state, such as form fields, error messages, and loading flags.
* It contains a validation method that checks if the form is in a usable state.
* It also holds a representation of the domain object (like Exchange or Account), which is often validated or bound to the UI.

---

### 3. **API Wrapper**

A dedicated class abstracts direct interaction with backend services.

* Each API method (GET, POST, PATCH, DELETE) is wrapped in a corresponding method.
* It instantiates the backend request classes and calls their execution methods.
* It isolates the API call structure so the rest of the application doesn't need to know how endpoints work.

---

### 4. **Behavior Class**

The behavior class handles all business logic.

* It knows how to load data from the API, transform it if necessary, and populate the model.
* It knows how to save data by converting the model into a request format and calling the appropriate API method.
* It also handles error checking, manages component change detection, and may store temporary UI state (like selected items).

---

### 5. **Interaction Class**

The interaction class maps UI events to business logic.

* Each button or UI action calls a method here.
* These methods directly call the behavior logic.
* This adds a level of indirection between UI events and data logic, which improves testability and keeps the component lean.

---

### 6. **Template**

The UI template uses Angular bindings to interact with the model.

* Input components bind to model properties using two-way binding.
* Validation status and error messages are also bound to the model.
* Actions like button clicks are wired to interaction methods.

---

### 7. **Domain Representation**

The domain object (like `Exchange` or `Account`) encapsulates the real-world entity being manipulated.

* These objects can have validations, transformation logic, or helper methods.
* They are used to populate the model and serve as input for API request bodies.

---

### 8. **Request and Response DTOs**

Request and response objects isolate transport format from the domain model.

* Request objects are built from domain or model state when saving data.
* Response objects are parsed from API responses and mapped into domain or model objects.

---

### 9. **Change Detection**

The component triggers Angular change detection manually when external state changes (via `MarkForCheck()`), keeping the UI up to date.

---

### 10. **Error Handling**

All operations contain defensive checks:

* Null checks and type validation before accessing properties.
* Error catching around API calls.
* Consistent error messages stored in the model and displayed to the user.

---

### Summary

Each screen is decomposed into:

* A data model,
* API operations,
* Business rules,
* Interaction mapping,
* A visual layout.

This structure separates concerns clearly. It promotes testability, consistency, and long-term maintainability without entangling UI logic, API access, or business logic.
