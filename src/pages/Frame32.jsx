import React from 'react';

export default function Frame32() {
  return (
    <div className="min-h-screen bg-white text-[#2B3A4A] font-sans antialiased p-6 sm:p-10 md:p-16">
      <div className="max-w-4xl mx-auto">
        
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-2">
          <span className="hover:text-gray-600 transition-colors cursor-pointer">
            Корзина
          </span>
          <span>›</span>
          <span className="text-gray-400">
            Оптовым клиентам
          </span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#3B637C] tracking-tight mb-6">
          Оптовым клиентам
        </h1>

        <p className="text-sm sm:text-base text-[#4C6475] font-medium mb-8">
          Заполните форму и мы отправим Вам выгодные условия партнерства
        </p>

        <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          <div>
            <label className="block text-xs font-normal text-gray-400 mb-1 pl-1">
              Имя<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              defaultValue="Арсен"
              placeholder="Арсен"
              readOnly
              className="w-full px-4 py-3 text-sm text-[#2B3A4A] bg-white border border-gray-200 rounded-2xl outline-none transition-all focus:border-[#7EC4EA] shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-normal text-gray-400 mb-1 pl-1">
              Телефон<span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              placeholder=""
              readOnly
              className="w-full px-4 py-3 text-sm text-[#2B3A4A] bg-white border border-gray-200 rounded-2xl outline-none transition-all focus:border-[#7EC4EA] shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-normal text-gray-400 mb-1 pl-1">
              Электронный адрес<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder=""
              readOnly
              className="w-full px-4 py-3 text-sm text-[#2B3A4A] bg-white border border-gray-200 rounded-2xl outline-none transition-all focus:border-[#7EC4EA] shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-normal text-gray-400 mb-1 pl-1">
              Город<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder=""
              readOnly
              className="w-full px-4 py-3 text-sm text-[#2B3A4A] bg-white border border-gray-200 rounded-2xl outline-none transition-all focus:border-[#7EC4EA] shadow-sm"
            />
          </div>

          <div className="pt-2">
            <div className="inline-block px-5 py-2.5 text-xs text-gray-500 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer select-none hover:bg-gray-50 transition-colors">
              Вставить каптчу
            </div>
          </div>

          <div className="pt-2 flex items-start gap-3">
            <input
              type="checkbox"
              id="agreement"
              defaultChecked
              readOnly
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#7EC4EA] focus:ring-[#7EC4EA] cursor-pointer"
            />
            <label
              htmlFor="agreement"
              className="text-xs leading-relaxed text-gray-400 cursor-pointer select-none"
            >
              Соглашение на обработку данных <br className="hidden sm:block" />
              и пользовательское соглашение
            </label>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="w-full py-3 px-6 bg-[#7EC4EA] hover:bg-[#6BBBE5] active:bg-[#5AAEDD] text-white font-medium text-sm rounded-xl shadow-sm transition-all duration-200 text-center"
            >
              Отправить
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}