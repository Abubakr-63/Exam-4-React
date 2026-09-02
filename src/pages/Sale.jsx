import React from 'react';
import { promotionsData } from '../backend/api';
import { NavLink } from 'react-router';

export default function Sale() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 font-sans text-slate-700">
      <nav className="text-xs text-slate-400 mb-3 flex items-center gap-2">
        <a href="#" className="hover:underline">Главная</a>
        <span>•</span>
        <span>Акции</span>
      </nav>

      <h1 className="text-3xl font-bold text-[#1f354d] mb-6">
        Акции
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {promotionsData.map((promo) => (
          <NavLink
          to={`/saleinfo/${promo.id}`}
            key={promo.id}
            className="group flex flex-col transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden mb-3 bg-slate-100 shadow-sm">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
              />
            </div>

            <span className="text-xs text-slate-400 mb-1">
              {promo.date}
            </span>

            <h2 className="text-sm font-semibold text-[#1f354d] leading-snug group-hover:text-blue-600 transition-colors">
              {promo.title}
            </h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};