import React, { useEffect, useRef, useState } from 'react';
import video from "../assets/video/удали_и_сикунд_когда_кнопк.mp4"
import { useNavigate } from 'react-router';

export default function Cart8() {
  const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const refVideo = useRef();
    useEffect(() => {
      refVideo.current.style.display = 'none'
    }, []);
    useEffect(() => {
      if(open == true){
        setTimeout(() => {
          navigate('/')
        }, 7000)
      }
    }, [open])
    return (
    <div className="bg-white text-slate-700 font-sans p-4 md:p-12 flex justify-center items-start">
      <div className="w-full max-w-4xl space-y-6">
        
        <nav className="text-xs text-slate-400 flex items-center space-x-2">
          <span>Корзина</span>
          <span>›</span>
          <span>Оформление заказа</span>
          <span>›</span>
          <span className="text-slate-500 font-medium">Оплата</span>
        </nav>

        <div className="space-y-1">
          <p className="text-xs text-slate-400 font-normal">Заказ №123214155AAS</p>
          <h1 className="text-lg font-semibold text-slate-700">Итого к оплате</h1>
          <p className="text-2xl font-bold text-slate-800 tracking-wide">456 000 ₽</p>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <div className="w-5 h-5 rounded-full border-2 border-sky-400 flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-sky-400 rounded-full"></div>
          </div>
          <span className="text-sm font-medium text-slate-600">Новая карта</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          
          <div className="md:col-span-7 space-y-5">
            <div className="relative w-full max-w-[420px] h-[220px]">
              
              <div className="absolute right-0 top-0 w-[60%] h-full bg-stone-300 rounded-2xl border border-stone-300/80 shadow-sm overflow-hidden flex flex-col justify-between py-4">
                <div className="w-full h-10 bg-stone-800 mt-2"></div>
                <div className="px-4 mb-4 flex flex-col items-end">
                  <span className="text-[10px] text-slate-500 font-medium mb-1 block uppercase tracking-wider">CVC/CVV</span>
                  <div className="w-20 h-9 bg-white border-2 border-amber-400 rounded flex items-center justify-center px-2">
                    <input 
                      type="password" 
                      maxLength="3"
                      className="w-full bg-transparent text-center text-sm tracking-widest outline-none text-slate-700 font-mono"
                      placeholder="|"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-0 w-[78%] h-full bg-[#ebe9e4] rounded-2xl border border-stone-300/60 p-5 shadow-sm flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-red-500 opacity-90"></div>
                    <div className="w-6 h-6 rounded-full bg-amber-400 opacity-90 -ml-2.5"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] text-slate-500 font-medium block">Номер карты</label>
                  <div className="bg-white border border-slate-200 rounded px-3 py-2 shadow-inner">
                    <input 
                      type="text" 
                      placeholder="xxxx xxxx xxxx 7580" 
                      className="w-full bg-transparent text-sm text-slate-700 font-mono tracking-wider outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-2 pt-1">
                  <div className="text-[9px] text-slate-400 uppercase font-semibold leading-tight text-right">
                    Срок<br />действия
                  </div>
                  <div className="w-24 bg-white border border-slate-200 rounded px-2 py-1.5 text-center shadow-inner">
                    <input className="text-xs w-full text-slate-500 font-mono outline-none" placeholder='xx / xx'/>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex items-center space-x-3 pt-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-slate-300 text-sky-400 focus:ring-0 cursor-default"
              />
              <span className="text-xs text-slate-500">Сохранить карту для будущих покупок</span>
            </div>

            <div className="pt-2">
              <button 
              onClick={() => {
                setOpen(true);
                refVideo.current.style.display = 'flex'
              }}
                type="button" 
                className="w-full max-w-[420px] bg-[#81caec] hover:bg-[#6ebfdf] text-white font-medium py-3 px-6 rounded-xl shadow-sm text-sm transition-colors text-center cursor-default"
              >
                Оплатить
              </button>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4 text-xs text-slate-500 pt-1">
            <div className="text-slate-700 font-medium text-sm flex items-center space-x-1">
              <span className="font-bold">19:55</span>
              <span>на оплату заказа</span>
            </div>

            <div className="flex items-start space-x-2.5 pt-1">
              <svg 
                className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 002-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              <p className="leading-relaxed text-slate-400">
                Интернет-платежи защищены сертификатом TLS и протоколом 3D Secure.
              </p>
            </div>

            <div className="pt-1">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Яндекс не передаёт сторонним лицам платёжные данные, в том числе данные карты.
              </p>
            </div>
          </div>

        </div>

      </div>
      <div ref={refVideo} className="fixed inset-0 z-50 items-center justify-center bg-black/40 backdrop-blur-sm">
      <dialog open={open} className='absolute w-100  rounded-4xl self-center z-10 mx-auto'>
        <video autoPlay={true} className='rounded-4xl' src={video}/>
      </dialog>
      </div>
    </div>
  );
}