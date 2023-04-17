import { json } from '@remix-run/node';
import { Link, useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import Header from '~/components/header/header.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllPosts } from '~/util/project-util';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export const loader = async () => {
  const posts = getAllPosts();

  return json({ posts });
};
const postsMock = [
  {
    slug: 'ahoy-house',
    title: 'Ahoy House - Capstone  309',
    date: '2023-04-16',
    image:
      'https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680848712/github/adam-boucek-309-project-summary_k3ymtd.png',
    excerpt:
      'Ahoy House is a made-up real estate company that offers long-term rentals for singles or couples in Metro Vancouver.',
    isFeatured: true,
    github: 'https://github.com/bouceka/ahoy-house-monorepo',
    website: 'http://ahoyhouse.com',
    cover: 'https://res.cloudinary.com/ahoy-house/image/upload/v1680848711/github/adam-boucek-309-cover_xeimy1.png',
    content:
      '\n\n![Project Summary](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680848712/github/adam-boucek-309-project-summary_k3ymtd.png)\n\n## Project summary\n\nAhoy House is a made-up real estate company that offers long-term rentals for singles or couples in Metro Vancouver. Housing is becoming a privilege, and many students or young professionals struggle to find an affordable place to live. It is the most challenging for young people who are not originally from Vancouver. They do not have family support when needed, considering the vacancy rate in Vancouver is around 0.7%. Ahoy House would provide a modern responsive app showing listings of all properties where people can rent a room across Metro Vancouver. It would allow customers to filter, checkout and manage their orders.\n\n\nMany competitors can offer an alternative solution for people to find a place to live. Some of them are very expensive, such as Booking or Airbnb. Additionally, it is challenging to occupy the place for longer than a couple of months, considering constantly changing prices and availability. Alternatively, there is an off-campus student housing called GEC that offers multiple living locations. However, this place only accepts students, and the availability is very limited.  Lastly, people can find a place on Craigslist. Craigslist offers many properties, from overpriced to cheap, that might have downsides, such as misrepresentation.\n\n## Process description\n\n### Objectives\n\nI picked this project to test my knowledge of front-end, back-end, and database modelling. For my technological stack, I chose NextJs, NestJs, GraphQL and PostgreSQL. To improve data modelling, I also implemented TypeORM. Even though I planned to develop the whole app, I primarily focused on learning these technologies.\n\n![Project architecture](https://res.cloudinary.com/ahoy-house/image/upload/v1680848711/github/adam-boucek-309-architecture_zgrq9r.png)\n\n### Explore\nI started by designing a database model that illustrated what kind of data I wanted to store and what the relations between them were. The database model, as well as the sitemap, helped enormously in coding the back end.\n\n![Project database model](https://res.cloudinary.com/ahoy-house/image/upload/v1681101715/github/adam-boucek-309-database-model_tukpel.png)\n\n![Project sitemap](https://res.cloudinary.com/ahoy-house/image/upload/v1680848712/github/adam-boucek-309-sitemap_ewxtep.png)\n\n\nThe next step was to design low-fidelity wireframes to visualize the front end of the application. I wanted to communicate my project through MVP, which would include a homepage, a list of properties, a property detail page, and a checkout form.\n\n![Project wireframe](https://res.cloudinary.com/ahoy-house/image/upload/v1680848712/github/adam-boucek-309-wireframe_jioaha.png)\n\n\n### Materialize\nThroughout my development, I ran into many bumps that occurred either on the front end side or back end side. Developing the whole app from scratch was a challenge from which I learned a lot.  The most important takeaway was that I learned the critical concepts of GraphQL and NextJS and how to develop a custom functional application. The site runs on Vercal on the domain [ahoyhouse.com](https://www.ahoyhouse.com/).\n\n\n![Project mvp](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680848713/github/adam-boucek-309-mvp_njbs0s.png)\n',
  },
  {
    slug: 'nic-athletics',
    title: 'NIC Athletics - Capstone 209',
    date: '2023-04-10',
    image:
      'https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846681/github/adam-boucek-project-summary_lcgy0v.png',
    excerpt:
      'NIC Athletics is a college sports fictive organization that gathers students throughout North Island College to do sports activities.',
    isFeatured: false,
    github: 'https://github.com/bouceka/capstone-209',
    website: 'http://nicathletics.ca',
    cover: 'https://res.cloudinary.com/ahoy-house/image/upload/v1681690903/github/nic-cover_xwhsjo.png',
    content:
      '\n\n![Project Summary](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846681/github/adam-boucek-project-summary_lcgy0v.png)\n\n## Project summary\n\nNIC Athletics is a college sports fictive organization that gathers students throughout North Island College to do sports activities. Unlike other colleges, North Island College lacks sports activities where students can clear their heads, improve their mental health, and make new friends. NIC Athletics would allow students to register for teams and play sports, such as basketball, soccer, or volleyball, at different levels, on a weekly basis. This project will cover the whole design system that will lead developers in building this app.\n\nNorth Island College does not offer many sports activities for its students that would keep them in good physical shape. NIC organizes only weekly recreational sports nights, where students can play any sport. On the other hand, if students want to play more competitively and more often, they must sign up for a team in Comox Valley Sports and Social Club. Alternatively, students can go to the gym.\n\n## Process description\n\n### Understand\n\nBefore I started sketching, I did a little research on how other colleges and universities manage sports activities on their campuses. Many universities in North America offer competitive and recreational leagues. Universities such as UBC, SFU, UoA, UCLA, and UMD have their own athletic teams. Their websites inspired me to outline a basic information architecture graph and sitemap.\n\n### Explore\nI started by making a mood board that would communicate the visual feelings of my site. I wanted to go with colours that NIC already uses, which are primarily blue and secondarily yellow. Also, I wanted to illustrate the mood where the college is located, which is the wild nature countryside of Vancouver Island and combine it with a sporting spirit.\n\n![Project moodboard](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846684/github/adam-boucek-209-moodboard_rlhpt6.jpg)\n\nThe next step was to design wireframes for my design system, where I would communicate how to code and create elements for the NIC Athletics site. The layout of the design system was fairly straightforward. I designed one-page documentation that breaks down all the essential guides for creating NIC Athletics.\n\n![Design system wireframe](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846682/github/adam-boucek-design-system-wireframe_msoahp.png)\n\n\nI created three example pages for my site, illustrating crucial app elements such as result tables, carousels, blog posts, calendars, calls to action, and more. I designed the app to be fully responsive, so it makes it accessible to users from any device.\n\n\n\n![Desktop wireframe](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846681/github/adam-boucek-desktop-wireframe-1_wnbopx.png)\n\n![Mobile wireframe](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846681/github/adam-boucek-mobile-wireframe-1_uxsqtz.png)\n\n\n\n### Materialise\nFinally, when I finished designing my app, I started developing it. For this project, I chose ReactJS, TypeScript, Sass, and ESLint, all powered by Vite. Wisely chosen technologies helped to ease the workload. Although developing the whole app took over 80 hours, it was a lot of fun, and I have learned many new things about ReactJS, Sass, and Vite. This app has no backend and displays mock data, so it gave me plenty of time to focus on visual elements. The site is hosted on Firebase on the domain [nicathletics.ca](https://www.nicathletics.ca).\n\n\n![Design System](https://res.cloudinary.com/ahoy-house/image/upload/c_fill,h_630,w_1200/v1680846681/github/adam-boucek-design-system_ttzbhp.png)\n',
  },
];

export default function Index() {
  // const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <Header />
      <ProjectList projects={postsMock} />
    </>
  );
}
