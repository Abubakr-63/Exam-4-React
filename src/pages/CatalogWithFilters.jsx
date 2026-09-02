import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { reducer } from '../reducer/todo';
import { API } from '../backend/api';
import { useNavigate, useOutletContext } from 'react-router';

export default function CatalogWithFilters() {
    const navigate = useNavigate()
    const { addToCart } = useOutletContext();
  const [products, dispatch] = useReducer(reducer, {data : []});
  const [length, setLength] = useState(12)

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    brands: [],
    colors: [],
    materials: [],
    mechanisms: [],
    hasDrawer: null,
  });

  async function getProducts() {
    try {
      const { data } = await axios.get(API);
      dispatch({ type: 'fetch', payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const currentList = prev[category];
      const isSelected = currentList.includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? currentList.filter((item) => item !== value)
          : [...currentList, value],
      };
    });
  };

  const removeFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

  const normalize = (value) => String(value ?? '').toLowerCase().trim();
  const priceValue = (value) => Number(String(value ?? '').replace(/[^0-9]/g, '')) || 0;
  const matchesSelected = (productValue, selectedValues) => {
    if (!selectedValues.length) return true;
    const normalizedProductValue = normalize(productValue);
    return selectedValues.some((value) => {
      const normalizedValue = normalize(value);
      return normalizedProductValue === normalizedValue || normalizedProductValue.includes(normalizedValue);
    });
  };

  const filteredProducts = products.data.filter((product) => {
    const from = priceValue(filters.priceFrom);
    const to = priceValue(filters.priceTo);
    const price = priceValue(product.price);
    const material = product.material;
    const hasDrawer = product.hasDrawer;

    return (
      (!from || price >= from) &&
      (!to || price <= to) &&
      matchesSelected(product.brand, filters.brands) &&
      matchesSelected(product.color, filters.colors) &&
      matchesSelected(material, filters.materials) &&
      (filters.hasDrawer === null || hasDrawer === filters.hasDrawer)
    );
  });

  const clearAllFilters = () => {
    setFilters({
      priceFrom: '',
      priceTo: '',
      brands: [],
      colors: [],
      materials: [],
      mechanisms: [],
      hasDrawer: null,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-slate-700">
      <div className="text-xs text-slate-400 mb-4 space-x-2">
        <span>Детская мебель</span>
        <span>•</span>
        <span className="text-slate-600">Кроватки</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-800 mb-8">Кроватки</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6 text-sm">
          {(filters.brands.length > 0 || filters.colors.length > 0) && (
            <div>
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                Выбранные фильтры
              </span>
              <div className="flex flex-wrap gap-2 mb-2">
                {filters.brands.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                    {b} <button onClick={() => removeFilter('brands', b)} className="text-slate-400 hover:text-slate-600">✕</button>
                  </span>
                ))}
                {filters.colors.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">
                    {c} <button onClick={() => removeFilter('colors', c)} className="text-slate-400 hover:text-slate-600">✕</button>
                  </span>
                ))}
              </div>
              <button onClick={clearAllFilters} className="text-xs text-sky-400 hover:underline">
                Сбросить фильтры
              </button>
            </div>
          )}

          <div>
            <span className="font-semibold text-slate-800 block mb-2">Цена, ₽</span>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={filters.priceFrom}
                onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
                placeholder="от 10 000"
                className="w-full p-2 border border-slate-200 rounded text-xs focus:outline-none focus:border-sky-400"
              />
              <span className="text-slate-300">—</span>
              <input
                type="text"
                value={filters.priceTo}
                onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
                placeholder="до 200 000"
                className="w-full p-2 border border-slate-200 rounded text-xs focus:outline-none focus:border-sky-400"
              />
            </div>
          </div>

          <div>
            <span className="font-semibold text-slate-800 block mb-2">Бренд</span>
            <input
              type="text"
              placeholder="Поиск бренда"
              className="w-full p-2 border border-slate-200 rounded text-xs mb-3 focus:outline-none focus:border-sky-400"
            />
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {['Anex', 'Bicapa', 'Casa Baby', 'Gandylyan', 'Riko', 'Kidy', 'Erbesi'].map((brand) => (
                <label key={brand} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => handleCheckboxChange('brands', brand)}
                    className="rounded border-slate-300 text-sky-400 focus:ring-sky-400"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-slate-800 block mb-2">Цвет</span>
            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
              {['Слоновая кость', 'Белый', 'Венге', 'Шоколад', 'Бежевый'].map((color) => (
                <label key={color} value={color} onClick={(e) => getProducts(e.target.value)} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleCheckboxChange('colors', color)}
                    className="rounded border-slate-300 text-sky-400 focus:ring-sky-400"
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-slate-800 block mb-2">Материал</span>
            <div className="space-y-2">
              {['бук', 'береза', 'МДФ', 'сосна'].map((mat) => (
                <label key={mat} className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.materials.includes(mat)}
                    onChange={() => handleCheckboxChange('materials', mat)}
                    className="rounded border-slate-300 text-sky-400 focus:ring-sky-400"
                  />
                  {mat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold text-slate-800 block mb-2">Ящик</span>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="radio"
                  name="drawer"
                  checked={filters.hasDrawer === true}
                  onChange={() => setFilters({ ...filters, hasDrawer: true })}
                  className="text-sky-400 focus:ring-sky-400"
                />
                Есть
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="radio"
                  name="drawer"
                  checked={filters.hasDrawer === false}
                  onChange={() => setFilters({ ...filters, hasDrawer: false })}
                  className="text-sky-400 focus:ring-sky-400"
                />
                Нет
              </label>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="text-xs text-slate-400 mb-6">
            Сортировать по: популярности ↓
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProducts.slice(0, length).map((product) => (
              <div onClick={() => navigate(`/productdetail/${product.id}`)} key={product.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative flex flex-col justify-between">
                <button className="absolute top-4 right-4 text-slate-300 hover:text-red-400">
                  ♥
                </button>

                <div className="h-48 flex items-center justify-center mb-4">
                  <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                </div>

                <div className="text-center">
                  <h3 className="text-sm font-medium text-slate-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-base font-bold text-slate-800">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">{product.oldPrice}</span>
                    )}
                  </div>

                  <button onClick={(event) => { event.stopPropagation(); addToCart(product); }} className="w-full py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-lg text-xs font-medium transition-colors mb-2">
                    В корзину
                  </button>
                  <button className="text-[11px] text-slate-400 hover:underline">
                    Купить в один клик
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <button
              onClick={() => setLength(length + 3)}
              className="px-8 py-2.5 border border-slate-200 rounded-lg text-xs text-slate-500 hover:border-sky-400 hover:text-sky-400 transition-colors"
            >
              Показать еще
            </button>
          </div>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { id: 101, title: 'Комплект белья (7 предметов)', price: '7 000 ₽', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80' },
                { id: 102, title: 'Кроватка Riko Basic, Польша', price: '52 000 ₽', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80' },
                { id: 103, title: 'Коляска Riko Basic, Польша', price: '18 000 ₽', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&q=80' },
              ].map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div className="h-36 flex items-center justify-center mb-3">
                    <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs text-slate-700 mb-2 line-clamp-2">{item.title}</h4>
                    <div className="text-sm font-bold text-slate-800 mb-3">{item.price}</div>
                    <button className="w-full py-2 bg-sky-400 hover:bg-sky-500 text-white rounded-lg text-xs transition-colors">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}