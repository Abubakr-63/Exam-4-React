import React, { useEffect, useRef, useState } from 'react';

const InstagramIcon = () => (
  <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24" rx="5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-6 h-6 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const VkIcon = () => (
  <svg className="w-6 h-6 fill-current stroke-none" viewBox="0 0 24 24">
    <path d="M15.684 18.176c-.44 0-1.127-.246-2.228-1.284-1.272-1.185-1.782-1.503-2.316-1.503-.491 0-.694.148-1.042.544-.614.7-1.144 1.706-2.456 1.706-1.764 0-3.95-1.196-5.877-3.97C.05 11.233-.5 8.164.385 8.164c.783 0 1.543.011 2.053.011.606 0 .848.243 1.077.781.939 2.22 2.373 4.417 3.01 4.417.243 0 .36-.115.36-.757V9.754c-.116-1.075-.684-1.171-.684-1.558 0-.306.284-.463 1.002-.463h3.193c.51 0 .684.243.684.779v4.204c0 .463.208.625.347.625.243 0 .441-.162.88-0.602 1.345-1.424 2.302-3.64 2.302-3.64.127-.278.371-.487.892-.487h2.097c.73 0 .939.382.783.892-.325 1.159-2.73 4.484-2.73 4.484-.232.348-.313.51 0 .915.22.29 1.007 1.007 1.63 1.737 1.124 1.285 1.832 2.361 2.04 3.056.244.777-.336 1.16-.927 1.16h-2.115z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 fill-current stroke-none" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function App() {
  const mapContainerRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Арсен',
    phone: '',
    message: '',
    agreed: false,
  });

  useEffect(() => {
    const coords = [42.972352, 47.502932];

    const initMap = () => {
      if (window.ymaps && mapContainerRef.current) {
        window.ymaps.ready(() => {
          mapContainerRef.current.innerHTML = '';

          const map = new window.ymaps.Map(mapContainerRef.current, {
            center: coords,
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
          });

          const placemark = new window.ymaps.Placemark(
            coords,
            {
              hintContent: 'Детский магазин "Карапуз"',
              balloonContent: '<strong>Карапуз</strong><br/>ул. Батырая, 108',
            },
            {
              preset: 'islands#redDotIcon',
            }
          );

          map.geoObjects.add(placemark);
          map.behaviors.disable('scrollZoom'); // Отключаем зум колесиком для удобства скролла страницы
          setMapLoaded(true);
        });
      }
    };

    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Без логики отправки по требованию, просто визуал
  };

  return (
    <div className="min-h-screen bg-white text-[#2D4356] font-sans antialiased px-4 sm:px-8 lg:px-16 py-6 max-w-7xl mx-auto">
      {/* 1. Хлебные крошки */}
      <nav className="text-sm text-gray-400 mb-4 flex items-center space-x-2">
        <a href="#home" className="hover:text-gray-600 transition-colors">Главная</a>
        <span>•</span>
        <span className="text-gray-500">Контакты</span>
      </nav>

      {/* 2. Заголовок страницы */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D4356] mb-8 tracking-tight">
        Контакты
      </h1>

      {/* 3. Основная контентная сетка (Инфо + Форма) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Левая колонка - Контактная информация */}
        <div className="lg:col-span-5 space-y-6">
          {/* Адрес */}
          <div>
            <h3 className="text-lg font-bold text-[#2D4356] mb-1">Адрес</h3>
            <p className="text-gray-600 leading-relaxed">
              Республика Дагестан, г Махачкала, улица Батырая 108
            </p>
          </div>

          {/* Телефон */}
          <div>
            <h3 className="text-lg font-bold text-[#2D4356] mb-1">Телефон</h3>
            <div className="text-gray-600 space-y-0.5">
              <p>+ 7 872 278 08 58</p>
              <p>+7 988 799 93 27</p>
            </div>
          </div>

          {/* Электронный адрес */}
          <div>
            <h3 className="text-lg font-bold text-[#2D4356] mb-1">Электронный адрес</h3>
            <p className="text-gray-600">
              <a href="mailto:karapuz_108@mail.ru" className="hover:text-[#7ecbf3] transition-colors">
                karapuz_108@mail.ru
              </a>
            </p>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-bold text-[#2D4356] mb-3">Мы в социальных сетях</h3>
            <div className="flex items-center space-x-3 text-[#7ecbf3]">
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full border border-[#7ecbf3] flex items-center justify-center hover:bg-[#7ecbf3] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#whatsapp"
                className="w-10 h-10 rounded-full border border-[#7ecbf3] flex items-center justify-center hover:bg-[#7ecbf3] hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <WhatsappIcon />
              </a>
              <a
                href="#vk"
                className="w-10 h-10 rounded-full border border-[#7ecbf3] flex items-center justify-center hover:bg-[#7ecbf3] hover:text-white transition-all duration-200"
                aria-label="VKontakte"
              >
                <VkIcon />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full border border-[#7ecbf3] flex items-center justify-center hover:bg-[#7ecbf3] hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Правая колонка - Форма обратной связи */}
        <div className="lg:col-span-7">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2D4356] mb-6">
            Напишите нам, и мы ответим на все Ваши вопросы
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Имя и Телефон в один ряд */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#7ecbf3] focus:ring-1 focus:ring-[#7ecbf3] transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Телефон"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#7ecbf3] focus:ring-1 focus:ring-[#7ecbf3] transition-all"
                />
              </div>
            </div>

            {/* Сообщение */}
            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Сообщение"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#7ecbf3] focus:ring-1 focus:ring-[#7ecbf3] transition-all resize-none"
              ></textarea>
            </div>

            {/* Чекбокс соглашения */}
            <div className="flex items-start space-x-3 pt-1">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#7ecbf3] focus:ring-[#7ecbf3] cursor-pointer"
              />
              <label htmlFor="agreed" className="text-xs sm:text-sm text-gray-500 cursor-pointer select-none">
                Соглашение на обработку данных и пользовательское соглашение
              </label>
            </div>

            {/* Кнопка отправки */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-3.5 px-6 bg-[#7ecbf3] hover:bg-[#6abde8] active:bg-[#59afde] text-white font-medium rounded-full shadow-sm hover:shadow transition-all duration-200 text-center cursor-pointer"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>

      {}
      {/* 4. Интерактивная карта Яндекс */}
      <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-gray-100 shadow-sm relative bg-gray-50">
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
            Загрузка карты Яндекс...
          </div>
        )}
        <div ref={mapContainerRef} className="w-full h-full"></div>
      </div>
    </div>
  );
}