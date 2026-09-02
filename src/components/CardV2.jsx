import React from 'react'
import { useTranslation } from 'react-i18next';

export default function CardV2({img, button, bg}) {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${bg} rounded-[28px] p-8 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group`}>
          
          <div className="flex gap-6 items-center">
            
            <div className="sm:col-span-6 flex flex-col items-start justify-between space-y-5 sm:space-y-6 z-10">
              
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#235D74] leading-[1.15] tracking-tight">
                {t('card.category.furniture')} <br />
                {t('card.category.furnitureType')}
              </h2>

              <p className="text-[#326B83] text-sm sm:text-base md:text-[17px] leading-snug font-normal">
                {t('card.category.brands')}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-7 py-2.5 rounded-2xl border border-[#235D74] text-[#235D74] font-medium text-sm sm:text-base hover:bg-[#235D74] hover:text-white active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
                >
                  {button}
                </button>
              </div>

            </div>

            <div className="sm:col-span-6 flex justify-center sm:justify-end items-center z-10 mt-2 sm:mt-0">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={img}
                  alt={t('card.buttons.productImage')}
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

          </div>
        </section>
  )
}
