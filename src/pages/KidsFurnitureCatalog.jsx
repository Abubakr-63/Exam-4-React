import React, { useEffect, useReducer, useState } from 'react';
import { reducer } from '../reducer/todo';
import axios from 'axios';
import { API } from '../backend/api';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const MAIN_PRODUCTS = [
  {
    id: 1,
    title: 'Коляска Riko Basic Ravella',
    price: '52 000 ₽',
    oldPrice: '55 000 ₽',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&q=80',
    isNew: true,
  }
];

const SIMILAR_PRODUCTS = [
  {
    id: 101,
    title: 'Комплект постельного белья (7 предметов)',
    price: '7 000 ₽',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80',
  },
  {
    id: 102,
    title: 'Кроватка Riko Basic Ravella',
    price: '52 000 ₽',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80',
  },
  {
    id: 103,
    title: 'Коляска Riko Basic Ravella',
    price: '18 000 ₽',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&q=80',
  }
];

const CATEGORIES = [
  {
    element : 'Кроватки',
    path : '/catalogwithfilters',
  },
  {
    element : 'Колыбели',
    path : '',
  },
  {
    element : 'Люльки',
    path : '',
  },
  {
    element : 'Пеленальные комоды',
    path : '',
  },
  {
    element : 'Шкафы',
    path : '',
  },
  {
    element : 'Аксессуары',
    path : ''
  }
];

export default function KidsFurnitureCatalog() {
  const { t } = useTranslation();
  const [length, setLength] = useState(12)
  const navigate = useNavigate();
  const [data, dispatch] = useReducer(reducer, {data : []});

  async function getProducts() {
    try {
        const {data} = await axios.get(API);
        dispatch({type : 'fetch', payload : data})
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getProducts()
  }, [length]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-slate-700">
      <div className="text-xs text-slate-400 mb-4 space-x-2">
        <span>{t('header.catalog')}</span>
        <span>•</span>
        <span className="text-slate-600">{t('card.category.furniture')} {t('card.category.furnitureType')}</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-800 mb-8">{t('card.category.furniture')} {t('card.category.furnitureType')}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-56 flex-shrink-0">
          <ul className="space-y-3 text-sm">
            {CATEGORIES.map((elem) => (
              <li key={elem.element}>
                <button
                  onClick={() => navigate(`${elem.path}`)}
                  className={`text-left w-full transition-colors`}
                >
                  {elem.element}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">
          <div className="text-xs text-slate-400 mb-6">
            Сначала популярные, недорогие и т.д.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {data.data.slice(0, length).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative flex flex-col justify-between">
                <button className="absolute top-4 right-4 text-slate-300 hover:text-red-400">
                  ♥
                </button>

                <div className="h-48 flex items-center justify-center mb-4">
                  <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-medium text-slate-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-base font-bold text-slate-800">{product.price}$</span>
                  </div>

                  <button className="w-full py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-lg text-xs font-medium transition-colors mb-2">
                    В корзину
                  </button>
                  <button className="text-[11px] text-slate-400 hover:underline">
                    Купить в один клик
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <button onClick={() => setLength(length + 3)} className="px-8 py-2.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:border-sky-400 hover:text-sky-400 transition-colors">
              Показать еще
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}