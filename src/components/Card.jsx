import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Card({description, price, img}) {
    const [isFavorite, setIsFavorite] = useState(false);
  const { t } = useTranslation();
    const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    const {t} = useTranslation()
  };
  return (
    <section className="w-full h-full">
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-all duration-300">
          
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 p-2 rounded-full hover:bg-slate-50 transition-colors z-10 group"
            aria-label={t('card.buttons.favorite')}
          >
            <svg
              className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 active:scale-125 ${
                isFavorite 
                  ? 'fill-[#72C8EE] stroke-[#72C8EE]' 
                  : 'fill-none stroke-[#72C8EE] group-hover:scale-110'
              }`}
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 pr-0 md:pr-4">
              
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#2E576D] leading-snug tracking-wide uppercase font-sans">
                {description}
              </h3>

              <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#72C8EE] tracking-tight">
                {price} <span className="font-semibold">₽</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <button
                  onClick={handleAddToCart}
                  type="button"
                  className="bg-[#72C8EE] hover:bg-[#5bbce6] active:scale-95 text-white font-medium text-sm sm:text-base px-7 py-3 rounded-2xl shadow-sm transition-all duration-200 cursor-pointer"
                >
                  В корзину
                </button>

                <button
                  onClick={() => setShowQuickBuy(true)}
                  type="button"
                  className="text-[#547B95] hover:text-[#2E576D] font-medium text-sm sm:text-base hover:underline transition-all cursor-pointer bg-transparent border-none p-0"
                >
                  Купить в один клик
                </button>
              </div>

            </div>

            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full sm:max-w-[320px] aspect-square flex items-center justify-center">
                <img
                  src={img}
                  alt={t('card.buttons.productImage')}
                  className="w-full h-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
  )
}
