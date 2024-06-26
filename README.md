﻿# Care Connect API

## Overview

The Care Connect API provides endpoints for managing volunteers, hostels, homeless individuals, donations, and needy families. It facilitates the creation, retrieval, updating, and deletion of data related to these entities.

## Installation

To use the Care Connect API, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file based on the provided `.env.example`.
   - Configure MongoDB connection URI and other necessary variables.
4. Start the server:
   - For development: `npm run dev`
   - For production: `npm start`

## Endpoints

### Volunteers

- **GET /volunteer**: Retrieve all volunteers.
- **GET /volunteer/:id**: Retrieve a volunteer by ID.
- **POST /volunteer**: Create a new volunteer.
- **PUT /volunteer/:id**: Update a volunteer by ID.
- **DELETE /volunteer/:id**: Delete a volunteer by ID.

### Hostels

- **GET /hostel**: Retrieve all hostels.
- **GET /hostel/:id**: Retrieve a hostel by ID.
- **POST /hostel**: Create a new hostel.
- **PUT /hostel/:id**: Update a hostel by ID.
- **DELETE /hostel/:id**: Delete a hostel by ID.

### Homeless

- **GET /homeless**: Retrieve all homeless individuals.
- **GET /homeless/:id**: Retrieve a homeless individual by ID.
- **POST /homeless**: Create a new homeless individual.
- **PUT /homeless/:id**: Update a homeless individual by ID.
- **DELETE /homeless/:id**: Delete a homeless individual by ID.

### Families

- **GET /families**: Retrieve all needy families.
- **GET /families/:id**: Retrieve a needy family by ID.
- **POST /families**: Create a new needy family.
- **PUT /families/:id**: Update a needy family by ID.
- **DELETE /families/:id**: Delete a needy family by ID.

### Donations

- **GET /donation**: Retrieve all donations.
- **GET /donation/:id**: Retrieve a donation by ID.
- **POST /donation**: Create a new donation.
- **PUT /donation/:id**: Update a donation by ID.
- **DELETE /donation/:id**: Delete a donation by ID.

## Tech Stack and Architecture

The Care Connect API is built upon a solid foundation of software engineering principles and design patterns, ensuring a robust and maintainable codebase.

### SOLID Principles

- **Single Responsibility Principle (SRP)**: Each module and class within the API adheres to the SRP, focusing on a single aspect of functionality such as data management, routing, or business logic. This promotes clarity and maintainability by isolating distinct concerns.

- **Open/Closed Principle (OCP)**: The API is designed to be open for extension but closed for modification. New features can be added through extension mechanisms such as inheritance or composition without requiring changes to existing code, thus minimizing the risk of unintended side effects.

- **Liskov Substitution Principle (LSP)**: Subclasses can be substituted for their base classes without altering the correctness of the program. This principle ensures interoperability and consistency across different components of the system.

- **Interface Segregation Principle (ISP)**: Interfaces are segregated to define specific sets of behaviors, allowing clients to depend only on the methods they require. This reduces coupling and prevents classes from being forced to implement unnecessary functionality.

- **Dependency Inversion Principle (DIP)**: High-level modules depend on abstractions rather than concrete implementations, promoting loose coupling and facilitating easier testing and maintenance.

### Design Patterns

- **Repository Pattern**: The API employs the Repository pattern to encapsulate data access logic, providing a uniform interface for interacting with various data sources such as MongoDB. This separation of concerns enhances modularity and testability while promoting code reuse.

- **Factory Pattern**: Factories are used to create instances of repository classes and other complex objects, centralizing object creation logic and enabling easy configuration. This pattern enhances flexibility and reduces coupling between components.

- **Singleton Pattern**: Certain components, such as database connections, are implemented as singletons to ensure that only one instance exists throughout the application's lifecycle. This ensures efficient resource management and prevents unnecessary duplication of state.

- **Middleware Pattern**: Express.js middleware is leveraged to handle cross-cutting concerns such as authentication, logging, and error handling. Middleware functions are chained together to process incoming requests, providing a modular and extensible approach to request/response handling.

By incorporating SOLID principles and design patterns into its architecture, the Care Connect API achieves a high level of flexibility, maintainability, and scalability, laying a solid foundation for future enhancements and improvements.

## Contribution

Contributions to the Care Connect API are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

Deploy = https://careconnect-oy9k.onrender.com
