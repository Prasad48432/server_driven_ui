import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import Link from 'next/link';

function BlogList({ bloglist, index }) {
  let body = bloglist.body && bloglist.body.substr(0, 300);
  const stringLength = body.lastIndexOf(' ');
  body = `${body.substr(0, Math.min(body.length, stringLength))}...`;
  return (
    <div key={index} className='w-[90vw] lg:w-full col-span-1 border border-dashed border-gray-700 p-4 rounded-lg bg- flex flex-col items-center justify-center gap-3 text-primarytext'>
      {bloglist.featured_image && (
        <Link href={bloglist.url}>
            <img
              className='rounded-lg relative h-[200px] object-cover'
              src={bloglist.featured_image.url}
              alt='blog img'
              {...bloglist.featured_image.$?.url}
            />
        </Link>
      )}
      <div className='flex flex-col items-center justify-center'>
        {bloglist.title && (
          <Link href={bloglist.url}>
              <h3 className='font-semibold text-center mb-3 text-[#fcff4d]' {...bloglist.$?.title}>{bloglist.title}</h3>
          </Link>
        )}
        <p>
          <strong className='text-primarytext/80' {...bloglist.$?.date}>
            {moment(bloglist.date).format('ddd, MMM D YYYY')}
          </strong>
          ,{" "}
          <strong {...bloglist.author[0].$?.title}>
            {bloglist.author[0].title}
          </strong>
        </p>
        <div  className='text-primarytext/80 text-center mb-3 text-sm lg:text-base' {...bloglist.$?.body}>{parse(body)}</div>
        {bloglist.url ? (
          <Link href={bloglist.url}>
              <span className='text-[#fcff4d]'>{'Read more'}</span>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default BlogList;