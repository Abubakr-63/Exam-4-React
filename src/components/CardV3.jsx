import React, { useState } from 'react';
import { Heart, ShoppingCart, Zap, Check } from 'lucide-react';

export default function CardV3({img, text, price, onClick}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    showToast(!isFavorite ? 'Добавлено в избранное' : 'Удалено из избранного');
  };


  return (
      <div className="w-full bg-white rounded-[32px] p-6 shadow-xl relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        
        <div className="flex items-center justify-between mb-4">
          <span className="bg-[#E5F4FC] text-[#5EC2F2] font-semibold text-xs tracking-wider px-3.5 py-1.5 rounded-xl uppercase">
            NEW
          </span>

          <button
            onClick={toggleFavorite}
            aria-label="Добавить в избранное"
            className="p-1.5 text-[#7CD0F7] hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none"
          >
            <Heart
              className={`w-7 h-7 stroke-[1.75] transition-colors duration-200 ${
                isFavorite
                  ? 'fill-[#7CD0F7] text-[#7CD0F7]'
                  : 'text-[#7CD0F7] hover:text-[#5EC2F2]'
              }`}
            />
          </button>
        </div>

        <div className="relative w-full aspect-square mb-6 flex items-center justify-center p-2">
          <img
            src={img}
            alt="Коляска Riko Basic, Польша"
            className="w-full h-full object-contain drop-shadow-md select-none"
            loading="lazy"
          />
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-[#3A5B6E] text-xl font-medium leading-tight px-2">
            {text}
          </h3>

          <div className="text-[#64C8F5] text-3xl font-bold tracking-tight py-1">
            {price} ₽
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
          onClick={onClick}
            className={`w-full py-3.5 px-4 rounded-2xl font-medium text-base transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${'bg-[#7CD0F7] hover:bg-[#60c4f5] active:bg-[#4bbcf3] text-white'}`}
          >
              В корзину
          </button>

          <button
            className="w-full py-1 text-[#7CD0F7] hover:text-[#5EC2F2] font-medium text-base transition-colors duration-200 focus:outline-none hover:underline"
          >
            Купить в один клик
          </button>
        </div>

      </div>
  );
}