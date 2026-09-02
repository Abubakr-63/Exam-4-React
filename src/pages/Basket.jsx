import React, { useEffect, useReducer, useState } from 'react';
import { Heart, Trash2, Truck } from 'lucide-react';
import { useNavigate, useOutletContext } from 'react-router';
import axios from 'axios';
import { idProducts } from '../backend/api';
import { reducer } from '../reducer/todo';

export default function Basket() {
  const navigate = useNavigate();
  const { setCount } = useOutletContext();
  const [data, dispatch] = useReducer(reducer, {data : []});
  const [quantities, setQuantities] = useState({});


  async function getAddedProducts() {
    try {
      const {data} = await axios.get(idProducts)
      dispatch({type : 'fetch', payload : data});
      setQuantities((previous) => data.reduce((result, item) => ({
        ...result,
        [item.id]: previous[item.id] || 1,
      }), {}));
    } catch (error) {
      console.log(error)
    }
  }

  async function deletProduct(id) {
    try {
      await axios.delete(`${idProducts}/${id}`);
      setCount((prev) => Math.max(0, prev - 1));
      getAddedProducts();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAddedProducts();
  }, [])
  return (
    <div className="min-h-screen bg-white text-[#2a5b6e] font-sans p-4 sm:p-8 md:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2a5b6e] mb-8">
        В корзине {data.data.length} товара
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-8 space-y-0">
          {data.data.map((item, index) => (
            <div key={item.id}>
              <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                <div className="flex items-center gap-4 flex-1 pr-2">
                  <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                    <img src={item.image} alt="" />
                  </div>

                  <div className="flex flex-col space-y-2 max-w-md">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#2a5b6e] leading-snug uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <span className="text-xs text-[#62c0e8] font-medium">
                      {item.pendulum}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  
                  <div className="flex items-center border border-[#94a3b8]/40 rounded-lg px-3 py-1 space-x-3 text-[#2a5b6e]">
                    <button onClick={() => setQuantities((previous) => ({
                      ...previous,
                      [item.id]: Math.max(1, (previous[item.id] || 1) - 1),
                    }))} className="text-lg leading-none hover:text-[#62c0e8] transition-colors focus:outline-none select-none">
                      —
                    </button>
                    <span className="text-sm font-medium w-4 text-center select-none">
                      {quantities[item.id] || 1}
                    </span>
                    <button onClick={() => setQuantities((previous) => ({
                      ...previous,
                      [item.id]: (previous[item.id] || 1) + 1,
                    }))} className="text-lg leading-none hover:text-[#62c0e8] transition-colors focus:outline-none select-none">
                      +
                    </button>
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-[#62c0e8] whitespace-nowrap min-w-[110px] text-right">
                    ${item.price}
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-3 pl-2 text-[#2a5b6e]/70">
                    <button className="hover:text-[#62c0e8] transition-colors focus:outline-none">
                      <Heart className="w-5 h-5 stroke-[1.75]" />
                    </button>
                    <button onClick={() => deletProduct(item.id)} className="hover:text-red-500 transition-colors focus:outline-none">
                      <Trash2 className="w-5 h-5 stroke-[1.75]" />
                    </button>
                  </div>
                </div>

              </div>
              
              
            </div>
          ))}
          <div className="border-b border-gray-200 w-full" />
        </div>

        <div className="lg:col-span-4">
          <div className="border border-gray-200 rounded-2xl p-6 bg-white space-y-6 shadow-sm">
            
            <div className="flex items-center space-x-2 text-[#62c0e8]">
              <Truck className="w-5 h-5 stroke-[1.75]" />
              <span className="text-sm font-semibold text-[#2a5b6e]">
                154 ₽ <span className="font-normal text-[#2a5b6e]">Доставка</span>
              </span>
            </div>

            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
              <input
                type="text"
                placeholder="Промокод"
                className="w-full px-4 py-2 text-sm text-[#2a5b6e] placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-[#62c0e8] hover:bg-[#4ba8d0] text-white px-5 py-2 text-sm font-medium transition-colors whitespace-nowrap">
                Применить
              </button>
            </div>

            <div className="space-y-4 pt-2 text-sm text-[#2a5b6e]">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Количество (3)</span>
                <span className="font-medium">456 000 ₽</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500">Скидка</span>
                <span className="font-medium">0 ₽</span>
              </div>

              <div className="border-b border-gray-100 my-2" />

              <div className="flex justify-between items-center pt-1">
                <span className="text-lg font-medium">Итого</span>
                <span className="text-xl font-bold">456 000 ₽</span>
              </div>
            </div>

            <button
            onClick={() => navigate('/Cart5')}
             className="w-full bg-[#62c0e8] hover:bg-[#4ba8d0] text-white font-medium py-3 rounded-lg transition-colors text-center text-sm">
              Перейти к оформлению
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}