"use client";
import Carousel from '@/components/strapi-components/Carousel'
import Showcase from '@/components/strapi-components/Showcase'
import ListView from '@/components/strapi-components/ListView';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ContentProcessorClient({ content, allContent }: any) {

  const handleListOrCarousel = (item: any) => {
    if (item.style === 'list') {
      return (
        <ListView content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'Blogs' : 'Projects'} />
      )
    } else if (item.style === 'carousel') {
      return (
        <Carousel content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'Blogs' : 'Projects'} />
      )
    }
  }


  const MarkdownHelper = (item: any, index: any) => {
    return (
      <ReactMarkdown
        key={index}
        className="markdown max-w-[1060px] mx-auto px-5 text-none"
        remarkPlugins={[remarkToc, remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          code: ({ node, inline, className, children, ...content }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...content}
                style={vscDarkPlus}
                data-start-line={1}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...content} className={"inline " + className}>
                {children}
              </code>
            );
          },
          a: ({ node, inline, className, children, ...content }: any) => {
            return (
              <a {...content} target='_blank' className={"underline " + className}>
                {children}
              </a>
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
      {content.map((item: any, index: number) => {
        switch (item["__component"]) {
          case 'general.highlight-projects':
          case 'general.highlight-blogs':
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                {handleListOrCarousel(item)}
              </div>
            )
          case 'general.all-projects':
            item.projects = allContent.projects
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                {handleListOrCarousel(item)}
              </div>
            )
          case 'general.all-blogs':
            item.blogs = allContent.blogs
            return (
              <div key={index}>
                <h1 className="font-bold text-xl my-3 max-w-[1060px] mx-auto pl-5">
                  {item["title"]}
                </h1>
                {handleListOrCarousel(item)}
              </div>
            )
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