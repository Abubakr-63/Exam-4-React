import React from 'react';
import { useNavigate } from 'react-router';

export default function App() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans text-slate-700">
      <div className="max-w-6xl mx-auto">
        <nav className="text-xs text-slate-400 mb-4 flex items-center gap-2">
          <span>Главная</span>
          <span>&gt;</span>
          <span>Оформление заказа</span>
          <span>&gt;</span>
          <span className="text-slate-500 font-medium">Оплата</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8">
          Оформление заказа
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Состав заказа
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100 flex-shrink-0">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-medium text-slate-800 leading-snug">
                    Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2-в-1
                  </h3>
                  <p className="text-xs text-slate-400">Цвет: TREKKING</p>
                  <p className="text-xs font-semibold text-slate-500 pt-1">1 шт.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Город получателя
              </h2>
              <div className="relative max-w-md">
                <label className="block text-xs text-slate-400 mb-1">Укажите ваш город</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Москва"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-white transition"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Способ получения
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                
                <div className="border-2 border-[#38BDF8] bg-sky-50/40 rounded-xl p-4 flex flex-col justify-between cursor-pointer transition">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-800 mb-1">
                      Транспортной компанией
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                      СДЭК, Деловые Линии, Major Express, ПЭК
                    </p>
                  </div>
                  <span className="text-[11px] text-[#0284C7] font-medium">
                    Цена зависит от выбора ТК
                  </span>
                </div>

                <div className="border border-slate-200 hover:border-slate-300 rounded-xl p-4 flex flex-col justify-between cursor-pointer transition">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-800 mb-1">
                      Почтой
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                      В ближайшем отделении Почты России
                    </p>
                  </div>
                  <span className="text-[11px] text-sky-500 font-medium">
                    Бесплатно
                  </span>
                </div>

                <div className="border border-slate-200 hover:border-slate-300 rounded-xl p-4 flex flex-col justify-between cursor-pointer transition">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-800 mb-1">
                      Самовывоз
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                      В пункте выдачи
                    </p>
                  </div>
                  <span className="text-[11px] text-sky-500 font-medium">
                    Бесплатно
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-3">
                <p className="text-xs font-medium text-slate-700">Выбор транспортной компании</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-1.5 rounded-full border-2 border-[#38BDF8] text-[#0284C7] font-semibold text-xs bg-sky-50">
                    СДЭК
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs hover:border-slate-300">
                    Деловые Линии
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs hover:border-slate-300">
                    Major Express
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs hover:border-slate-300">
                    ПЭК
                  </button>
                </div>
                <div className="pt-2 text-xs text-slate-600 space-y-1">
                  <p>Стоимость доставки: <span className="font-semibold text-slate-800">120 ₽</span></p>
                  <button className="text-[#0284C7] hover:underline font-medium block text-left">
                    Выбрать пункт выдачи заказа: СДЭК ул. Набережная 12
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Адрес получателя
              </h2>
              
              <div>
                <input
                  type="text"
                  placeholder="Укажите имя и фамилию *"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-white transition"
                />
                <p className="text-[11px] text-slate-400 mt-1">Это понадобится при получении заказа</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Электронная почта *"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-white transition"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон *"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-white transition"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    На этот номер вышлем SMS с информацией о заказе
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Способ оплаты
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="w-4 h-4 text-[#38BDF8] border-slate-300 focus:ring-[#38BDF8]"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    Картой онлайн
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-[#38BDF8] border-slate-300 focus:ring-[#38BDF8]"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    Наличными курьеру
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-[#38BDF8] border-slate-300 focus:ring-[#38BDF8]"
                  />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    Онлайн-платежом PayPal
                  </span>
                </label>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Дополнительно
              </h2>
              
              <textarea
                rows={3}
                placeholder="Комментарий к заказу"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:bg-white transition resize-none"
              ></textarea>

              <label className="flex items-center gap-3 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-[#38BDF8] focus:ring-[#38BDF8]"
                />
                <span className="text-xs text-slate-600">
                  Сообщать мне об акциях и скидках
                </span>
              </label>

              <div className="pt-4 space-y-3">
                <button
                  onClick={() => navigate('/cart8')}
                  type="button"
                  className="w-full bg-[#38BDF8] hover:bg-[#0284C7] text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-sm active:scale-[0.99]"
                >
                  Перейти к оплате
                </button>
                <p className="text-[11px] text-slate-400 text-center leading-normal max-w-lg mx-auto">
                  Нажимая кнопку «Перейти к оплате», вы соглашаетесь с условиями пользовательского соглашения и политикой конфиденциальности.
                </p>
              </div>
            </section>

          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800">
                  Ваш заказ
                </h2>
                <button className="text-xs text-[#0284C7] hover:underline font-medium">
                  Изменить
                </button>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Промокод"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
                <button className="bg-[#38BDF8] hover:bg-[#0284C7] text-white text-xs font-semibold px-4 py-2 rounded-xl transition whitespace-nowrap">
                  Применить
                </button>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-slate-100">
                <div className="flex justify-between text-slate-500">
                  <span>Товары (1)</span>
                  <span className="font-medium text-slate-700">456 000 ₽</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Доставка</span>
                  <span className="font-medium text-slate-700">120 ₽</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Скидка</span>
                  <span className="font-medium text-slate-700">0 ₽</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-800">Итого:</span>
                <span className="text-2xl font-bold text-[#38BDF8]">
                  456 120 ₽
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}