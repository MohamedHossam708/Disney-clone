# Next.js IMDB Movie Information Project

This is a Next.js project I worked on, which is linked with IMDB to fetch movie information.

## Features

- **Caching**: Used caching in the functions responsible for fetching data from the database. This ensures that if one person searches for specific data and another person searches for the same data, it will be displayed immediately. This is great for static data, but if the data changes quickly, this method might not be suitable as you want to display fresh data, not outdated data from the server.
- **Shadecn Library**: The shadecn library was used, which is very easy to work with. It supports Zod validation, which was utilized for search functionality. When you use it, it comes with the Lucide library, which is great for icons. This combination was also used to create a loading screen while fetching data from the database.
- **Embla Carousel**: This library was used to create a scroll banner for the movies.
- **Clean and Organized Code**: Efforts were made to ensure the project is clean and organized.

## Technologies Used

- **Next.js**
- **React.js**
- **Node.js**
- **Shadecn Library**
- **Zod Validation**
- **Lucide Icons**
- **Embla Carousel**

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yourusername/yourrepo.git
