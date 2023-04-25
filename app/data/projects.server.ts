import { prisma } from './db.server';

export const getAllProjects = async () => {
  try {
    return await prisma.projects.findMany({ orderBy: { createdAt: 'desc' } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getProject = async (slug: string) => {
  try {
    return await prisma.projects.findFirst({ where: { slug } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export async function addProject() {
//   try {
//     return await prisma.projects.create({
//       data: {
//         slug: 'ahoy-house',
//         createdAt: new Date(),
//         title: 'Ahoy House - Capstone  309',
//         isFeatured: true,
//         excerpt:
//           'Ahoy House is a made-up real estate company that offers long-term rentals for singles or couples in Metro Vancouver.',
//         github: 'https://github.com/bouceka/ahoy-house-monorepo',
//         website: 'http://ahoyhouse.com',
//         coverImage:
//           'https://res.cloudinary.com/ahoy-house/image/upload/v1680848711/github/adam-boucek-309-cover_xeimy1.png',
//         content:
//           '\n\n![Project Summary](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680848712/github/adam-boucek-309-project-summary_k3ymtd.png)\n\n## Project summary\n\nAhoy House is a made-up real estate company that offers long-term rentals for singles or couples in Metro Vancouver. Housing is becoming a privilege, and many students or young professionals struggle to find an affordable place to live. It is the most challenging for young people who are not originally from Vancouver. They do not have family support when needed, considering the vacancy rate in Vancouver is around 0.7%. Ahoy House would provide a modern responsive app showing listings of all properties where people can rent a room across Metro Vancouver. It would allow customers to filter, checkout and manage their orders.\n\n\nMany competitors can offer an alternative solution for people to find a place to live. Some of them are very expensive, such as Booking or Airbnb. Additionally, it is challenging to occupy the place for longer than a couple of months, considering constantly changing prices and availability. Alternatively, there is an off-campus student housing called GEC that offers multiple living locations. However, this place only accepts students, and the availability is very limited.  Lastly, people can find a place on Craigslist. Craigslist offers many properties, from overpriced to cheap, that might have downsides, such as misrepresentation.\n\n## Process description\n\n### Objectives\n\nI picked this project to test my knowledge of front-end, back-end, and database modelling. For my technological stack, I chose NextJs, NestJs, GraphQL and PostgreSQL. To improve data modelling, I also implemented TypeORM. Even though I planned to develop the whole app, I primarily focused on learning these technologies.\n\n![Project architecture](https://res.cloudinary.com/ahoy-house/image/upload/v1680848711/github/adam-boucek-309-architecture_zgrq9r.png)\n\n### Explore\nI started by designing a database model that illustrated what kind of data I wanted to store and what the relations between them were. The database model, as well as the sitemap, helped enormously in coding the back end.\n\n![Project database model](https://res.cloudinary.com/ahoy-house/image/upload/v1681101715/github/adam-boucek-309-database-model_tukpel.png)\n\n![Project sitemap](https://res.cloudinary.com/ahoy-house/image/upload/v1680848712/github/adam-boucek-309-sitemap_ewxtep.png)\n\n\nThe next step was to design low-fidelity wireframes to visualize the front end of the application. I wanted to communicate my project through MVP, which would include a homepage, a list of properties, a property detail page, and a checkout form.\n\n![Project wireframe](https://res.cloudinary.com/ahoy-house/image/upload/v1680848712/github/adam-boucek-309-wireframe_jioaha.png)\n\n\n### Materialize\nThroughout my development, I ran into many bumps that occurred either on the front end side or back end side. Developing the whole app from scratch was a challenge from which I learned a lot.  The most important takeaway was that I learned the critical concepts of GraphQL and NextJS and how to develop a custom functional application. The site runs on Vercal on the domain [ahoyhouse.com](https://www.ahoyhouse.com/).\n\n\n![Project mvp](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680848713/github/adam-boucek-309-mvp_njbs0s.png)\n',
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to add project.');
//   }
// }
