import React, { useState } from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80',
    content: `В 1-м триместре беременности организм женщины сталкивается с серьезными нагрузками...
    Важно начать прием препаратов фолиевой кислоты и витамина E, принимать их на протяжении всей беременности. Для успешного работы печени и почек важно не употреблять слишком большое количество острых блюд...`
  },
  {
    id: 2,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80',
    content: 'Содержание второй статьи...'
  },
  {
    id: 3,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0c?w=500&q=80',
    content: 'Содержание третьей статьи...'
  },
  {
    id: 4,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
    content: 'Содержание четвертой статьи...'
  },
  {
    id: 5,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0c?w=500&q=80',
    content: 'Содержание пятой статьи...'
  },
  {
    id: 6,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80',
    content: 'Содержание шестой статьи...'
  },
  {
    id: 7,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
    content: 'Содержание седьмой статьи...'
  },
  {
    id: 8,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80',
    content: 'Содержание восьмой статьи...'
  },
  {
    id: 9,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0c?w=500&q=80',
    content: 'Содержание девятой статьи...'
  },
  {
    id: 10,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&q=80',
    content: 'Содержание десятой статьи...'
  },
  {
    id: 11,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
    content: 'Содержание одиннадцатой статьи...'
  },
  {
    id: 12,
    title: 'Питание в I триместре',
    description: 'Что принимать в пищу, чтобы малышу было комфортно и уютно в первые месяцы беременности',
    date: '25.05.2020',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&q=80',
    content: 'Содержание двенадцатой статьи...'
  }
];

export default function BlogApp() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [paginationPage, setPaginationPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(BLOG_POSTS.length / itemsPerPage);

  const currentPosts = BLOG_POSTS.slice(
    (paginationPage - 1) * itemsPerPage,
    paginationPage * itemsPerPage
  );

  if (selectedPost) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 font-sans text-slate-700">
        <div className="text-xs text-slate-400 mb-6 space-x-2">
          <button onClick={() => setSelectedPost(null)} className="hover:underline">Главная</button>
          <span>•</span>
          <button onClick={() => setSelectedPost(null)} className="hover:underline">Блог</button>
          <span>•</span>
          <span className="text-slate-600">{selectedPost.title}</span>
        </div>

        <div className="w-full h-96 rounded-2xl overflow-hidden mb-8">
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">{selectedPost.title}</h1>
        <p className="text-xs text-slate-400 mb-6">{selectedPost.date}</p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-600 mb-8">
          <p>{selectedPost.description}</p>
          <p>{selectedPost.content}</p>
          
          <div className="w-full h-80 rounded-2xl overflow-hidden my-6">
            <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80" alt="Питание" className="w-full h-full object-cover" />
          </div>

          <blockquote className="border-l-4 border-sky-400 pl-4 py-2 italic bg-slate-50 text-slate-700 rounded-r-lg">
            В 1-м триместре беременности ваш организм функционирует за двоих. Главное правило — придерживаться принципов здорового питания, чтобы избежать токсикоза и обеспечить малыша всеми витаминами.
          </blockquote>
        </div>

        <button
          onClick={() => setSelectedPost(null)}
          className="text-sky-400 text-sm font-medium hover:underline flex items-center gap-1"
        >
          Читать следующую статью &rarr;
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-slate-700">
      <div className="text-xs text-slate-400 mb-4 space-x-2">
        <span>Главная</span>
        <span>•</span>
        <span className="text-slate-600">Блог</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-800 mb-8">Блог</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-44 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{post.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-sky-400 hover:text-sky-400 transition-colors"
                >
                  Читать
                </button>
                <span className="text-[10px] text-slate-400">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setPaginationPage(pageNumber)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                paginationPage === pageNumber
                  ? 'border border-slate-300 text-slate-800 font-bold'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {paginationPage < totalPages && (
          <button
            onClick={() => setPaginationPage((prev) => prev + 1)}
            className="text-xs text-slate-600 hover:text-sky-400 font-medium ml-2 flex items-center gap-1"
          >
            Дальше &rsaquo;
          </button>
        )}
      </div>
    </div>
  );
}