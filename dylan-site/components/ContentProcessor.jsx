import React, { useEffect } from 'react'
import Carousel from '../strapi-components/Carousel'
import Showcase from '../strapi-components/Showcase'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ListView from '@/strapi-components/ListView';


function ContentProcessor(props) {


  const handleListOrCarousel = (item, index) => {
    if (item["style"] === 'carousel') {
      return (
        <Carousel content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'Blogs' : 'Projects'} />
      )
    } else if (item["style"] === 'list') {
      return (
        <ListView content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'Blogs' : 'Projects'} />
      )
    }
  }


  const MarkdownHelper = (item, index) => {
    return (
      <ReactMarkdown
        linkTarget="_blank"
        key={index}
        className="markdown max-w-[1060px] mx-auto px-5 text-none"
        remarkPlugins={[remarkToc, remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={vscDarkPlus}
                data-start-line={1}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={"inline " + className}>
                {children}
              </code>
            );
          }
        }}
      >
        {item["text"]}
      </ReactMarkdown>
    )
  }

  return (
    <div className='py-8'>
      <div className='w-full h-[50%] absolute -z-10'>
      </div>
      {props.content.map((item, index) => {
        switch (item["__component"]) {
          case 'general.highlight-projects':
          case 'general.highlight-blogs':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                {handleListOrCarousel(item, index)}
              </div>
            )
          case 'general.all-projects':
          case 'general.all-blogs':
            break;
          case 'general.markdown':
            return (MarkdownHelper(item, index))
          case 'general.showcase-project':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                <Showcase />
              </div>
            )
          default:
            console.warn("Unknown component type: " + item["__component"])
            console.log(item)
        }
      })
      }
    </div>
  )
}

export default ContentProcessor