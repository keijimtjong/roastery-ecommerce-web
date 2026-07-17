import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, X, BookOpen, Tag } from 'lucide-react';

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Simple parser to render markdown headers and lists inside the blog modal
  const renderBlogContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="font-display font-extrabold text-xl text-gray-900 dark:text-[#FAF7F2] mt-8 mb-4">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('#### ')) {
        return (
          <h4 key={index} className="font-display font-bold text-base text-gray-900 dark:text-[#FAF7F2] mt-6 mb-2">
            {paragraph.replace('#### ', '')}
          </h4>
        );
      }
      if (paragraph.startsWith('* ') || paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-5 my-3 text-gray-600 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            {paragraph.split('\n').map((li, i) => (
              <li key={i}>{li.replace(/^[*\-]\s+/, '')}</li>
            ))}
          </ul>
        );
      }
      if (/^\d+\./.test(paragraph)) {
        return (
          <ol key={index} className="list-decimal pl-5 my-3 text-gray-600 dark:text-gray-300 space-y-1 text-sm sm:text-base">
            {paragraph.split('\n').map((li, i) => (
              <li key={i}>{li.replace(/^\d+\.\s+/, '')}</li>
            ))}
          </ol>
        );
      }

      // Handle bold formatting inside paragraphs e.g. **text**
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={index} className="leading-relaxed text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="font-bold text-gray-900 dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <section
      id="blog"
      className="py-24 bg-[#FAF7F2] dark:bg-[#1C140E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            Nusantara Coffee Culture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Insights, Guides & Stories
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setActivePost(post)}
              className="bg-white dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group h-full"
            >
              {/* Media banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category tag */}
                <span className="absolute top-4 left-4 bg-[#6F4E37] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Content body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Meta date/read-time */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C8A165]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C8A165]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-[#FAF7F2] group-hover:text-[#6F4E37] dark:group-hover:text-[#C8A165] transition-colors duration-200 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed pt-1">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-bold text-[#6F4E37] dark:text-[#C8A165]">
                  <div className="flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-2 py-0.5 rounded-full">
                    <Tag className="w-2.5 h-2.5" />
                    <span>{post.tags[0]}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read Pane Modal Dialog */}
        <AnimatePresence>
          {activePost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FAF7F2] dark:bg-[#1C140E] rounded-[24px] max-w-3xl w-full overflow-hidden shadow-2xl relative border border-[#C8A165]/20 max-h-[90vh] flex flex-col"
              >
                {/* Header Actions */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <button
                    onClick={() => setActivePost(null)}
                    className="p-2 rounded-full bg-black/40 text-[#FAF7F2] hover:bg-black/60 hover:scale-105 transition-all focus:outline-none"
                    aria-label="Close reading pane"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Reading Area */}
                <div className="overflow-y-auto flex-1">
                  {/* Top Header image */}
                  <div className="relative h-64 sm:h-80 w-full">
                    <img
                      src={activePost.image}
                      alt={activePost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] dark:from-[#1C140E] via-transparent to-black/20"></div>
                    
                    {/* Category */}
                    <span className="absolute bottom-6 left-6 sm:left-10 bg-[#6F4E37] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                      {activePost.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="px-6 sm:px-10 pb-16 pt-6">
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200/50 dark:border-gray-800 pb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#C8A165]" />
                        <span>Published on {activePost.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#C8A165]" />
                        <span>{activePost.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-[#C8A165]" />
                        <span>Education Series</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-[#FAF7F2] leading-tight mb-6">
                      {activePost.title}
                    </h2>

                    {/* Rendered markdown paragraphs */}
                    <div className="prose dark:prose-invert max-w-none">
                      {renderBlogContent(activePost.content)}
                    </div>

                    {/* Footer Tags */}
                    <div className="mt-10 pt-6 border-t border-gray-200/50 dark:border-gray-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase text-gray-400 mr-2 flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5 text-[#C8A165]" />
                        Tags:
                      </span>
                      {activePost.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-[#C8A165]/10 text-[#6F4E37] dark:text-[#C8A165] px-3 py-1 rounded-full border border-[#C8A165]/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
