
# Technical Demo Challenge

This project is a single-page application (SPA) built with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**. It utilizes **Axios** for API calls to the dotCMS demo site and is designed to demonstrate the capability to list and display blog content, alongside product promotions.

## Getting Started

### Prerequisites

-   Node.js (v14.17.0 or higher)
-   npm (v6.14.13 or higher) or Yarn (v1.22.10 or higher)

### Installation

1.  **Clone the Repository:**
    
    `git clone https://github.com/teo2001-repos/dotcms-solutions-architect-teo.git`
    
    `cd dotcms-solutions-architect-teo` 
    
3.  **Install Dependencies:**

    `npm install` 
    
    or
    
    `yarn install` 
    
4.  **Set Up Environment Variables:**
    
    Create a `.env.local` file in the root of your project with the following variables:
    
    `NEXT_PUBLIC_DOTCMS_HOST=https://demo.dotcms.com 
    NEXT_PUBLIC_DOTCMS_AUTH_TOKEN=your-auth-token-here`
    
    Replace `your-auth-token-here` with the actual dotCMS demo site token you received.
    
5.  **Run the Development Server:**

    `npm run dev` 
    
    or
    
    `yarn dev` 
    
6.  **Open the Application:**
    
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.
    

### Project Structure

src/
│
├── components/
│   ├── Banner.tsx          # Carousel component for banner display
│   ├── Navigation.tsx      # Top navigation component using dotCMS API
│   ├── ProductPromo.tsx    # Product promotions component displaying products
│
├── pages/
│   ├── index.tsx           # Home page listing blogs with links
    └── blog/
│       └── [slug].tsx          # Dynamic page for individual blog post details
│
└── utils/
    ├── axiosClient.ts      # Axios client configuration
    └── env.d.ts            # Environment variable type definitions

### Key Features

1.  **Blog Listings:**
    
    -   The application lists all available blogs retrieved from the dotCMS demo site.
    -   Each blog links to a detail page that displays the blog's content.
2.  **Product Promotions:**
    
    -   Product promotions are displayed as a separate component and include product images, titles, and prices.
3.  **Navigation Bar:**
    
    -   The top navigation bar is dynamically built using the Navigation API from dotCMS.

### Challenges Faced

One of the main challenges was working on the project while traveling to visit the company's client in Los Angeles, USA. I had just a few minutes to code each night after returning to the hotel, which made it a race against time to deliver a fully functional code. Despite these constraints, I was able to successfully complete the project.

### Tech Stack

-   **Next.js**: Used for its robust routing and SSR capabilities.
-   **TypeScript**: Ensures type safety and reduces potential bugs.
-   **Tailwind CSS**: A utility-first CSS framework for fast styling.
-   **Axios**: Simplified HTTP requests for interacting with APIs.
-   **dotCMS API**: Provides the content and structure for blogs, navigation, and product promotions.

### How to Use

1.  Navigate to the homepage to see a list of available blogs.
2.  Click on a blog link to view its detailed content.
3.  Browse through the product promotions section to view various products.
