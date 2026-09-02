import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Frame() {
  const [activeTab, setActiveTab] = useState('payment');

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 text-gray-700 font-sans leading-relaxed">
      {}
      <nav className="flex items-center text-xs md:text-sm text-gray-400 mb-4 space-x-2">
        <a href="#basket" className="hover:text-sky-500 transition-colors">
          Корзина
        </a>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-gray-400">Оплата и доставка</span>
      </nav>

      {}
      <h1 className="text-2xl md:text-4xl font-semibold text-[#3b6084] mb-6 md:mb-8 tracking-tight">
        Оплата и доставка
      </h1>

      {}
      <div className="flex items-center space-x-3 mb-10">
        <button
          onClick={() => setActiveTab('payment')}
          className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
            activeTab === 'payment'
              ? 'bg-white text-gray-800 border-sky-400 shadow-sm ring-2 ring-sky-100'
              : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          Оплата
        </button>
        <button
          onClick={() => setActiveTab('delivery')}
          className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
            activeTab === 'delivery'
              ? 'bg-white text-gray-800 border-sky-400 shadow-sm ring-2 ring-sky-100'
              : 'bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          Доставка
        </button>
      </div>

      {}
      {activeTab === 'payment' ? (
        <div className="space-y-10 animate-fadeIn">
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Moscow Payment Options */}
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
                Варианты оплаты г. Москва
              </h2>
              <ol className="list-none space-y-3 text-sm md:text-base text-gray-600 pl-0">
                <li className="flex items-start">
                  <span className="font-medium mr-2">1.</span>
                  <span>Оплата товара курьеру наличными при доставке;</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2.</span>
                  <span>
                    Оплата товара курьеру с помощью банковских карт{' '}
                    <strong className="text-gray-800 font-semibold">Visa/MasterCard/МИР</strong> без комиссии;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">3.</span>
                  <span>
                    Оплата товара по счету для физических и юридических лиц на расчетный счет
                    организации. Доставка товара осуществляется на следующий день после поступления
                    денег на р/с нашей организации.
                  </span>
                </li>
              </ol>
            </div>

            {/* Russia Regions Payment Options */}
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
                Варианты оплаты регионы России
              </h2>
              <ol className="list-none space-y-3 text-sm md:text-base text-gray-600 pl-0">
                <li className="flex items-start">
                  <span className="font-medium mr-2">1.</span>
                  <span>
                    Оплата товара онлайн через сайт с помощью банковских карт{' '}
                    <strong className="text-gray-800 font-semibold">Visa/MasterCard/МИР</strong> без комиссии;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">2.</span>
                  <span>
                    Оплата товара по счету для физических и юридических лиц на р/с организации;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">3.</span>
                  <span>
                    В регионы России товары отправляются только после 100% предоплаты;
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">4.</span>
                  <span>
                    Оплата доставки между терминалами осуществляется при получении кресла на
                    терминале ТК (за исключением городов с бесплатной доставкой).
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <hr className="border-gray-200/80 my-8" />

          {}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
              Оплата банковской картой на сайте
            </h2>
            <div className="space-y-3 text-sm md:text-base text-gray-600">
              <p>
                Оплата банковской картой производится непосредственно на сайте в режиме online. Для
                этого при оформлении заказа укажите способ оплаты «Оплата банковской картой». Оплата
                осуществляется на сайте сразу после оформления заказа.
              </p>
              <p>
                После подтверждения состава заказа, Ваших личных данных и адреса доставки откроется
                страница, где будет предложено ввести данные банковской карты плательщика:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1 text-gray-600">
                <li>номер карты;</li>
                <li>ФИО владельца;</li>
                <li>срок действия карты;</li>
                <li>CVV/CVC код.</li>
              </ul>
              <p>
                После ввода данных карты внимательно проверьте все заполненные поля и нажмите кнопку
                «Оплатить».
              </p>
              <p className="text-xs md:text-sm text-gray-500 pt-1">
                Операция проводится через авторизационный сервер процессингового центра банка с
                использованием банковских карт платежных систем МИР, VISA, MasterCard (РФ и СНГ).
              </p>
            </div>
          </div>

          <hr className="border-gray-200/80 my-8" />

          {}
          <div className="space-y-4 max-w-4xl pb-6">
            <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
              Банковский перевод
            </h2>
            <div className="space-y-3 text-sm md:text-base text-gray-600">
              <p>
                Оплата за заказ производится банковским платёжным поручением на расчётный счет магазина.
              </p>
              <p>
                При оформлении заказа выберите способ оплаты «Банковский перевод». Наш оператор свяжется
                с Вами и выставит счёт. Оплату можно произвести в любом из отделений банка или Почты
                России.
              </p>
              <p className="text-xs md:text-sm text-gray-500 pt-1">
                Обратите внимание, что банки могут взимать комиссию (как правило, в размере 1,5-2%) за
                проведение платежа.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-10 animate-fadeIn">
          {/* Moscow Delivery Section */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
              Доставка по Москве
            </h2>
            <div className="space-y-2 text-sm md:text-base text-gray-600">
              <p>Мы доставляем заказы по Москве с понедельника по субботу с 9:00 до 19:00.</p>
              <p>Заказы, оформленные до 14:00 мы доставим на следующий день (кроме воскресенья).</p>
              <p>
                Курьер позвонит вам в день доставки за 40–60 минут до прибытия по адресу. Просим
                указывать данные фактического получателя заказа.
              </p>
              <p>
                Заказы, подлежащие доставке транспортной компанией, мы доставим на терминал
                транспортной компании через 1–2 дня после получения оплаты.
              </p>
            </div>
          </div>

          <hr className="border-gray-200/80 my-8" />

          {/* Russia Delivery Section */}
          <div className="space-y-4 max-w-4xl pb-6">
            <h2 className="text-lg md:text-xl font-semibold text-[#3b6084]">
              Мы осуществляем отправку товара в любой город России!
            </h2>
            <ol className="list-none space-y-3 text-sm md:text-base text-gray-600 pl-0">
              <li className="flex items-start">
                <span className="font-medium mr-2">1.</span>
                <span>Отправка производится только после 100% предоплаты</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">2.</span>
                <span>
                  Доставка до терминала транспортной компанией в Москве и Махачкале и оформление
                  документов для отправки - БЕСПЛАТНО
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">3.</span>
                <span>Доставка товаров с платной доставкой - согласно тарифам Транспортной Компании</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">4.</span>
                <span>
                  Отправка осуществляется с терминала в Москве, Махачкале до терминала в городе
                  назначения
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">5.</span>
                <span>
                  Доставка товара осуществляется в фирменной упаковке, но по желанию и за счёт клиента
                  можем заказать и обрешётку
                </span>
              </li>
            </ol>

            {/* Warning Box regarding Passport Data */}
            <div className="my-4 p-4 bg-amber-50/50 border-l-2 border-amber-300 rounded-r-lg space-y-2 text-sm md:text-base text-gray-700">
              <p>
                <strong className="font-semibold text-gray-900">Внимание!</strong> В связи с
                изменениями в Федеральных законах, установлен новый обязательный порядок приема-сдачи
                груза к экспедированию/перевозке и проверке достоверности информации о клиенте и
                свойствах груза. Транспортные компании требуют предоставление полных паспортных
                данных грузополучателя, таких как:
              </p>
              <ul className="list-none pl-4 space-y-1 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">—</span> полностью ФИО;
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">—</span> серия паспорта;
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">—</span> номер паспорта;
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gray-400">—</span> дата выдачи паспорта.
                </li>
              </ul>
              <p className="font-medium text-gray-800 text-xs md:text-sm pt-1">
                С 1 сентября 2016 года грузы без указания этих данных транспортные компании к перевозке
                не принимают.
              </p>
            </div>

            <ol className="list-none space-y-3 text-sm md:text-base text-gray-600 pl-0 start-[6]" start={6}>
              <li className="flex items-start">
                <span className="font-medium mr-2">6.</span>
                <span>
                  Для мебели, пластмассовых и стеклянных изделий без жесткой упаковки, электронных
                  приборов требуется обрешетка. Обрешетка оплачивается получателем на терминале
                  транспортной компании при получении. Стоимость обрешетки зависит от города доставки
                  и габаритов груза и рассчитывается в транспортной компании.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">7.</span>
                <span>
                  После получения денег на счёт товар отправляется в ТК в течении 1-3 рабочих дней.
                </span>
              </li>
            </ol>

            <p className="text-sm md:text-base font-medium text-gray-700 pt-2">
              После отправки мы вышлем все номера квитанций, адрес и телефон транспортной компании,
              где Вы будете получать груз.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}