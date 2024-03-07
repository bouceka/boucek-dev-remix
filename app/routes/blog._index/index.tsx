// @flow
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime';
import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { Form, useSearchParams, useSubmit } from '@remix-run/react';
import { debounce } from 'lodash';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import { Pagination } from '~/components/pagination/pagination.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';
import { getAllBlogPosts, getAllCategories, getCountBlogPost } from '~/data/blogs.server';
import { PER_PAGE } from '~/util/constants';

const Blogs = () => {
  const { blogPosts } = useTypedLoaderData<typeof loader>();
  const { count } = useTypedLoaderData<typeof loader>();
  const { categories } = useTypedLoaderData<typeof loader>();

  const [searchParams] = useSearchParams();

  const totalPage = Math.ceil(count / PER_PAGE);

  const submit = useSubmit();
  const debouncedSubmit = debounce((form) => submit(form), 300);
  const handleChange = (event) => debouncedSubmit(event.currentTarget);

  const options: { value: string; label: string }[] = [{ value: 'all', label: 'ALL' }];
  categories.forEach((category: string, index: number) => {
    options.push({ value: category, label: category });
  });

  return (
    <section className='project-page'>
      <div className='row'>
        <Breadcrumbs />
        <h1 className='heading'>Blog</h1>
        <Form onChange={handleChange}>
          <div className='filter'>
            <div className=''>
              <label htmlFor='orderBy'>Sort By:</label>
              <select name='orderBy' id='orderBy' className='p-0' defaultValue={searchParams.get('orderBy') || ''}>
                <option selected value=''>
                  Please select
                </option>
                <option value='createdAt'>Date Added</option>
                <option value='updatedAt'>Date Updated</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <label htmlFor='orderDir'>Posted Date:</label>
              <select name='orderDir' id='orderDir' className='p-0' defaultValue={searchParams.get('orderDir') || ''}>
                <option selected value=''>
                  Please select
                </option>
                <option value='asc'>Old To New</option>
                <option value='desc'>New To Old</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <label htmlFor='category'>Categories:</label>
              {/* <Select
                name='category'
                id='category'
                defaultValue={searchParams.get('orderDir') || 'all'}
                options={options}
              /> */}
              <select
                name='category'
                id='category'
                className='p-0'
                defaultValue={searchParams.get('category') || 'all'}
              >
                <option key={'all'} value={'all'}>
                  ALL
                </option>
                {categories.map((category: string, index: number) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Form>
        <p style={{ marginTop: '1.6rem' }}>
          Displaying {blogPosts.length} items of {count}
        </p>
        <ProjectList projects={blogPosts} />
        {count > PER_PAGE ? <Pagination totalPages={totalPage} /> : ''}
      </div>
    </section>
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev | Blog Page',
    },
    {
      name: 'description',
      content: 'Explore my blog posts that are about coding, designing, and new technologies.',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  allowUserToUseFromCountry(request);
  const url = new URL(request.url);
  const query = url.searchParams;
  const currentPage = Math.max(Number(query.get('page') || 1), 1);

  const options: Prisma.BlogFindManyArgs<DefaultArgs> = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
    // orderBy: {
    //   createdAt: 'desc',
    // },
    // where: {
    //   // Include posts where isFeatured is true or non-existent
    //   OR: [
    //     { isFeatured: true },
    //     { NOT: { isFeatured: true } }, // or { isFeatured: null }
    //   ],
    // },
    orderBy: {
      isFeatured: 'desc', // Sort by isFeatured in descending order (featured first)
    },
  };

  const orderBy = query.get('orderBy');
  if (orderBy) {
    options.orderBy = {
      [orderBy]: query.get('orderDir') || 'asc',
    };
  }

  // if (query.get('search')) {
  //   options.where = {
  //     categories: {
  //       contains: query.get('search'),
  //       mode: 'insensitive'
  //     }
  //   }
  //   countOptions.where = options.where
  // }

  // Only get number and items when we ask for a category - when all get all
  const categoryOptions: Prisma.BlogCountArgs<DefaultArgs> = {};
  if (query.get('category')) {
    const category = query.get('category');
    if (category != 'all') {
      options.where = categoryOptions.where = {
        categories: {
          has: category,
        },
      };
    }
  }

  const [blogPosts, count, categories] = await Promise.all([
    getAllBlogPosts(options),
    getCountBlogPost(categoryOptions),
    getAllCategories(),
  ]);
  return typedjson({ blogPosts, count, categories });
};

export default Blogs;
