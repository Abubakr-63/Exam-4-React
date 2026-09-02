import React, { useEffect, useReducer, useState } from 'react';
import { reducer } from '../reducer/todo';
import axios from 'axios';
import { API } from '../backend/api';
import { useParams, useOutletContext } from 'react-router';

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');
  const [data, dispatch] = useReducer(reducer, {data : []});
  const {id} = useParams()
  const { addToCart } = useOutletContext();
  async function getProduct() {
    try {
      const {data: products} = await axios.get(API);
      const product = products.find((entry) => String(entry.id) === String(id));
      dispatch({type: 'fetch', payload: product || null});
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProduct()
  }, [id]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState('');

  const fallbackItem = {
    id: 1,
    name: 'Кроватка детская Erbesi Incanto, Италия',
    price: 52000,
    oldPrice: 122000,
    color: 'Белый',
    material: 'Массив бука',
    country: 'Италия',
    brand: 'Erbesi',
    hasDrawer: true,
    image: '',
    description:
      'Элегантная итальянская кроватка премиум-класса с самоцентрирующимися колесиками и гипоаллергенным покрытием. Высокое качество сборки обеспечит комфорт и безопасность вашего ребенка.',
    features: [
      'Небольшой вес и лёгкость перемещения',
      'Качественная отделка лаками на водной основе',
      'Высокие безопасные бортики',
      'Вместительный выдвижной ящик в основании',
      'Внешние размеры: 135x80x112 см',
      'Внутренние размеры (для матраса): 125x65 см',
    ],
    reviews: [
      {
        id: 1,
        author: 'Елена',
        rating: 5,
        pros: 'Простая и качественная сборка, красивый внешний вид.',
        cons: 'Не обнаружено.',
        comment:
          'Для первого ребенка долго выбирали кроватку и остановились на этой модели. Очень устойчивая, качается плавно. Ребенок спит с удовольствием!',
      },
      {
        id: 2,
        author: 'Мария',
        rating: 5,
        pros: 'Натуральное дерево, вместительный ящик.',
        cons: 'Нет.',
        comment: 'Отличная кроватка! Цвет очень нежный, идеально вписалась в детскую комнату.',
      },
    ],
  };
  const item = data.data || fallbackItem;

  useEffect(() => {
    if (data.data?.image) {
      setSelectedImage(data.data.image);
    }
  }, [data.data]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-slate-700">
      <div className="text-xs text-slate-400 mb-6 space-x-2">
        <span>Детская мебель</span>
        <span>•</span>
        <span>Кроватки</span>
        <span>•</span>
        <span className="text-slate-600">{item.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col items-center">
          <div className="relative group border border-slate-100 rounded-2xl p-6 bg-white w-full h-[400px] flex items-center justify-center">
            <img
              src={selectedImage || item.image}
              alt={item.name}
              className="max-h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-4 bg-sky-400/90 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded-full shadow-md transition-all flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" />
              </svg>
              Увеличить
            </button>
          </div>

          <div className="flex gap-3 mt-4">
            {[item.image, item.image].map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 border rounded-xl overflow-hidden p-1 bg-white ${
                  selectedImage === img ? 'border-sky-400' : 'border-slate-200'
                }`}
              >
                <img src={img} alt="preview" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <span className="text-xs text-slate-400 mb-1">{item.category || 'Детская мебель'}</span>
          <h1 className="text-2xl font-bold text-slate-800 mb-3">{item.name}</h1>

          <div className="flex items-center gap-2 mb-6 text-xs text-slate-400">
            <div className="flex text-amber-400">
              {'★'.repeat(5)}
            </div>
            <span>({item.reviews?.length || 0} отзыва)</span>
            <button className="ml-4 text-slate-400 hover:text-red-400 flex items-center gap-1">
              <span>♡</span> В избранное
            </button>
          </div>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-3xl font-bold text-slate-800">{item.price?.toLocaleString()} ₽</span>
            {item.oldPrice && (
              <span className="text-sm text-slate-400 line-through">{item.oldPrice?.toLocaleString()} ₽</span>
            )}
          </div>

          <div className="flex gap-4 mb-6">
            <button className="px-6 py-3 bg-sky-400 hover:bg-sky-500 text-white rounded-xl text-sm font-medium transition-colors">
              Быстрый заказ
            </button>
            <button disabled={!data.data} onClick={() => data.data && addToCart(data.data)} className="px-6 py-3 border border-sky-400 text-sky-500 hover:bg-sky-50 rounded-xl text-sm font-medium transition-colors disabled:opacity-50">
              В корзину
            </button>
          </div>

          <div className="text-xs text-slate-400 space-y-1 pt-4 border-t border-slate-100">
            <p>Рассрочка: 0% / 6 мес.</p>
            <p className="text-sky-400 cursor-pointer hover:underline">Подробнее о доставке</p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 mb-6">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'description'
                ? 'border-sky-400 text-sky-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Описание
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'features'
                ? 'border-sky-400 text-sky-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Характеристики
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'reviews'
                ? 'border-sky-400 text-sky-500 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Отзывы ({item.reviews?.length || 0})
          </button>
        </nav>
      </div>

      <div className="min-h-[200px] mb-16">
        {activeTab === 'description' && (
          <div className="space-y-4 max-w-3xl text-sm text-slate-600 leading-relaxed">
            <p>{item.description}</p>
            {item.features && (
              <div>
                <h4 className="font-semibold text-slate-800 mt-4 mb-2">Особенности:</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  {item.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="max-w-2xl text-sm">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400 w-1/2">Страна-производитель</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.country || 'Италия'}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400">Бренд</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.brand}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400">Материал</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.material}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400">Цвет</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.color}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400">Маятник</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.pendulum || 'Универсальный'}</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2.5 text-slate-400">Выдвижной ящик</td>
                  <td className="py-2.5 text-slate-800 font-medium">{item.hasDrawer ? 'Есть' : 'Нет'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6 max-w-3xl">
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-xs text-slate-600 hover:border-sky-400 transition-colors">
              Написать отзыв
            </button>

            {item.reviews && item.reviews.length > 0 ? (
              item.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm text-slate-800">{rev.author}</span>
                    <div className="text-amber-400 text-xs">{'★'.repeat(rev.rating || 5)}</div>
                  </div>
                  {rev.pros && (
                    <p className="text-xs text-slate-600">
                      <strong className="text-slate-700">Достоинства:</strong> {rev.pros}
                    </p>
                  )}
                  {rev.cons && (
                    <p className="text-xs text-slate-600">
                      <strong className="text-slate-700">Недостатки:</strong> {rev.cons}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-700">Комментарий:</strong> {rev.comment}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400">Отзывов пока нет. Будьте первым!</p>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center shadow-2xl">
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 transition-colors"
            >
              ✕
            </button>

            <div className="w-full h-[65vh] flex items-center justify-center p-4">
              <img
                src={selectedImage || item.image}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="text-center mt-2">
              <h3 className="text-sm font-semibold text-slate-800">{item.name}</h3>
              <p className="text-xs text-slate-400 mt-1">Демо-просмотр изображения товара</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}