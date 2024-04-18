"use client";
import Carousel from '@/components/strapi-components/Carousel';
import Showcase from '@/components/strapi-components/Showcase';
import ListView from '@/components/strapi-components/ListView';
import SkillBubble from '@/components/strapi-components/SkillBubble';
import { IoIosCopy, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ImageView from './strapi-components/ImageView';
import { useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from "next-themes";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';



export default function ContentProcessorClient({ content, allContent }: any) {

  const { systemTheme, theme, setTheme } = useTheme();

  const updatedTheme = useMemo(() => {
    if (theme === 'system') {
      return systemTheme;
    } else {
      return theme;
    }
  }, [systemTheme, theme])

  const handleImageView = (item: any, index: number) => {
    return (
      <ImageView item={item} index={index} />
    )
  }

  const handleListOrCarousel = (item: any) => {
    if (item.style === 'list') {
      return (
        <ListView content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'blogs' : 'projects'} />
      )
    } else if (item.style === 'carousel') {
      return (
        <Carousel content={item.blogs ? item.blogs.data : item.projects.data} type={item.blogs ? 'blogs' : 'projects'} />
      )
    }
  }

  const notify = () => {
    toast.success('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: updatedTheme === 'dark' ? 'dark' : 'light',
    });
  }


  const MarkdownHelper = (item: any, index: number) => {
    return (
      <ReactMarkdown
        key={index}
        className="markdown max-w-[1290px] mx-auto text-none py-2"
        remarkPlugins={[remarkToc, remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          code: ({ node, inline, className, children, ...content }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className='relative group/code'>
                <div className="text-foreground-color absolute right-0 group code-copy w-full flex justify-between py-2 border-b-[1px] border-black/15 dark:border-white/15 px-4">
                  <span className="text-sm">{node?.data?.meta ?? ""}</span>
                  <span className="text-sm">{match[1]}</span>
                </div>
                <CopyToClipboard text={String(children)} onCopy={() => notify()}>
                  <IoIosCopy className="group-hover/code:block hidden absolute right-2 top-12 cursor-pointer h-5 w-5 opacity-40 hover:opacity-100" />
                </CopyToClipboard>
                <SyntaxHighlighter
                  {...content}
                  className={"rounded-md outline-none pt-20 code-block"}
                  style={updatedTheme === "dark" ? vscDarkPlus : vs}
                  data-start-line={1}
                  language={match[1]}
                  PreTag="div"
                  codeTagProps={{ style: { fontFamily: 'inherit' } }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
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
                <div className='px-5'>
                  <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto">
                    {item["title"]}
                  </h1>
                </div>
                {handleListOrCarousel(item)}
              </div>
            )
          case 'general.all-projects':
            item.projects = allContent.projects
            return (
              <div key={index}>
                <div className='px-5'>
                  <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto">
                    {item["title"]}
                  </h1>
                </div>
                {handleListOrCarousel(item)}
              </div>
            )
          case 'general.all-blogs':
            item.blogs = allContent.blogs
            return (
              <div key={index}>
                <div className='px-5'>
                  <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto">
                    {item["title"]}
                  </h1>
                </div>
                {handleListOrCarousel(item)}
              </div>
            )
          case 'general.markdown':
            return (<div className='px-5'>
              {MarkdownHelper(item, index)}
            </div>)
          case 'general.showcase-project':
          case 'general.showcase-blog':
            return (
              <div key={index}>
                <div className='px-5'>
                  <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto">
                    {item["title"]}
                  </h1>
                </div>
                <Showcase content={item} />
              </div>
            )
          case 'general.single-image':
            return (
              <div key={index}>
                {handleImageView(item as any, index as number)}
              </div>
            )
          // case 'general.skill-bubble':
          //   return (
          //     <div key={index}>
          //       <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto pl-5">
          //         {item["title"]}
          //       </h1>
          //       <SkillBubble content={item} />
          //     </div>
          //   )
          case 'nested.tab-view':
            console.log(item)
            return (
              <div key={index}>
                <div className='px-5'>
                  <h1 className="font-bold text-xl my-3 max-w-[1290px] mx-auto">
                    {item["title"]}
                  </h1>
                </div>
                <div className='px-5'>
                  <div className='mx-auto max-w-[1290px]'>
                    <div className='outline outline-1 outline-gray-500 rounded-md p-2'>
                      <Tabs>
                        <TabList className="px-1 flex gap-1 dark:bg-[#1E1E1E] bg-[#E6E6E6] rounded-md h-10 align-middle">
                          {item.tabs.map((tab: any, index: number) => (
                            <Tab key={index} className="h-8 leading-8 px-8 rounded-md my-1 text-sm cursor-pointer" selectedClassName='dark:bg-black bg-white'>{tab.title}</Tab>
                          ))}
                        </TabList>
                        {item.tabs.map((tab: any, index: number) => (
                          <TabPanel>
                            <div>
                              {MarkdownHelper(tab, index)}
                            </div>
                          </TabPanel>
                        ))}

                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            )
          default:
            console.warn("Unknown component type: " + item["__component"], item)
        }
      })
      }
    </div>
  )
}