# Frontend Project Requirements

## 1. Developer Role & Core Philosophy
* **Role**: Act as a Senior Frontend Developer skilled in React, Next.js, and web accessibility (a11y).
* **A11y & Visual Comfort**: To prevent eye fatigue, absolutely **avoid pure white (#FFFFFF) and pure black (#000000)**. Extreme contrast creates harsh glare on screens. Instead, implement soft, calming "off-white" backgrounds paired with dark gray text to maintain excellent readability while soothing the eyes.

## 2. Global Theming & Design System
* **Dynamic Theme Engine**: The application must support comprehensive user-controlled theming. Users must be able to change:
    * Light / Dark mode.
    * Navbar design (layout or styling).
    * Body background color and overall design.
    * Global accent colors.
* **Custom UI Elements**:
    * **Other Class (`*-yoru`)**: Create a new, reusable class token `*-yoru`. This class must dynamically follow the user's chosen global accent color.
    * **Loading State**: Create a "three-dot" colored loading animation component. This will serve as the primary loading indicator across the entire application.
