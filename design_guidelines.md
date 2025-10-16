# Design Guidelines: API Comedian Backend Service

## Project Context Analysis

This is a **backend-focused API microservice** with no traditional user interface requirements. The core deliverable is a REST API that returns JSON responses. However, I'll provide minimal design guidelines for potential supporting materials:

## Primary Design Approach: Utility-Focused

**Rationale**: This is a pure backend service focused on functionality over visual presentation. Any UI elements should prioritize clarity and developer experience.

---

## Optional Supporting Interface Guidelines

### If Creating API Documentation Page:

**Color Palette (Dark Mode Primary)**
- Background: 220 13% 13% (Dark slate)
- Surface: 220 13% 18% (Elevated slate)
- Primary: 142 76% 36% (Success green - API ready)
- Text: 210 40% 98%
- Code blocks: 220 13% 15%

**Typography**
- Headers: Inter or System UI stack
- Code/JSON: JetBrains Mono or Fira Code
- Body: Inter (400, 500 weights)

**Layout System**
- Spacing primitives: 4, 8, 16, 24 units
- Max content width: max-w-4xl
- Vertical rhythm: py-8 to py-16

**Component Library**
- Code blocks with syntax highlighting for JSON examples
- Endpoint cards showing route, method, response format
- Status badges (200 OK, 404 Not Found)
- Copy-to-clipboard buttons for curl commands

### JSON Response Design Philosophy

```
Consistent structure
Clean formatting with 2-space indentation
Meaningful property names in Portuguese
Error responses follow same structure pattern
```

**Critical Note**: Since this is primarily a backend service, visual design is minimal. Focus should remain on clean code architecture, proper error handling, and clear API documentation.