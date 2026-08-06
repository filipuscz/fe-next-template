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
    * **Button Class (`btn-yoru`)**: Create a new, reusable class named `btn-yoru`. This button must dynamically follow the user's chosen global accent color.
    * **Other Class (`*-yoru`)**: Create a new, reusable class token `*-yoru`. This class must dynamically follow the user's chosen global accent color.
    * **Loading State**: Create a "three-dot" colored loading animation component. This will serve as the primary loading indicator across the entire application.

## 3. Pages & Features
### 3.1. 
* Develop a fully responsive and accessible dashboard page.
* Create Side Navigation Bar with hamburger (add button Collapse View too). the item is Dashboard, Modules > Forms, Tables, Components.
* Use lucide-react for icon.

Create a **floating navigation bar layout** matching the reference image.

* Place it at the **top center of the page**
* Use `position: fixed` so it remains visible while scrolling
* Add approximately `12–16px` space from the top and both sides
* Maximum width: `1200px`
* Height: approximately `76px`
* Black background
* Fully rounded pill shape
* High `z-index`
* Subtle shadow

Layout structure:

* **Left:** name app `YoruSpace`
* **Right:** add icon ring bell for notification & large white rounded email button containing `Hi, {name}`(if clicked show dropdown and show "Profile, Setting, Log Out")
* Vertically center all elements
* Use generous horizontal spacing
* Keep the design clean, minimal, and responsive
* On smaller screens, hide the navigation links and show a menu button

Create **layout and styling only**. Do not add interactions, animations, routing, or scroll behavior beyond keeping the navigation bar fixed while the page scrolls.

### Dashboard layout
Add enough top padding so the fixed navigation does not overlap the content.

#### Header

* Page title: `Dashboard`
* Small welcome message below the title
* Date-range selector and `Export` button on the right

#### Statistics cards

Create a responsive four-card grid:

* Total Revenue
* Total Customers
* Total Orders
* Conversion Rate

Each card should contain:

* Small label
* Large value
* Percentage change
* Small icon
* Optional mini trend indicator

#### Main analytics section

Use a two-column grid:

* Large card taking approximately two-thirds of the width

  * Title: `Revenue Overview`
  * Line or area chart placeholder
  * Time-period filter in the card header

* Smaller card taking approximately one-third

  * Title: `Traffic Sources`
  * Donut chart placeholder
  * Small legend below the chart

#### Secondary section

Create another two-column layout:

* `Sales by Category`

  * Bar chart placeholder

* `Recent Activity`

  * Vertical activity list with avatar, description, and timestamp

#### Bottom section

Add a full-width card titled `Recent Orders` containing a table with:

* Order ID
* Customer
* Product
* Date
* Amount
* Status

Use rounded status badges such as `Completed`, `Pending`, and `Cancelled`.

### Visual style

* Large rounded corners
* Thin neutral borders
* Soft shadows
* Generous padding and spacing
* Use realistic placeholder chart shapes and sample data
* Responsive grid that becomes a single column on smaller screens

Create **only the dashboard structure, chart placeholders, sample content, and styling**. Do not add API integration, authentication, routing, database logic, or complex interactions.
