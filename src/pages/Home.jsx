import { useTranslation } from "react-i18next";
import group248 from "../assets/Group 248.png"
import Card from "../components/Card";
import product1 from "../assets/Jeremy-Scott_Priam_Carry-cot_side-view 1.png"
import product2 from "../assets/papitto-komplekt-vyazanyj-na-podkladke-dzhemper-s-kapyushonom-i-bryuki-2-predmeta_rozovyj-1362954 1.png";
import cardProductV1 from "../assets/Card-V2-Images/2cd43b_db1db68de4354a518e94d3d7dcdb6b75_mv2 1.png"
import cardProductV2 from "../assets/Card-V2-Images/4002757b-removebg-preview 1.png"
import cardProductV3 from "../assets/Card-V2-Images/png-transparent-krovatka-bed-cots-furniture-nursery-bed-furniture-drawer-infant-removebg-preview 1.png"
import CardV2 from "../components/CardV2";
import CardV3 from "../components/CardV3";
import cardv2Product from "../assets/Card-V3-Images/pram_PNG17895 1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css';
import mask1 from "../assets/maskGroup/Mask Group (1).png"
import { useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/todo";
import axios from "axios";
import { API, idProducts } from "../backend/api";
import group1 from "../assets/groups-Name/cybex-removebg-preview 1.png"
import group2 from "../assets/groups-Name/Erbesi-Logo-removebg-preview 1.png";
import vector from "../assets/vector/Vector.svg"
import Vector from "../components/vector";
import { useOutletContext } from "react-router";
export default function Home() {
    const {count, setCount} = useOutletContext()
    const [data, dispatch] = useReducer(reducer, {data : []});
    const chunkSize = 4;
    const chunks = [];

    for (let i = 0; i < data.data.length; i += chunkSize) {
    chunks.push(data.data.slice(i, i + chunkSize));
    }
  
    async function getUsers() {
        try {
            const {data} = await axios.get(API);
            dispatch({type : "fetch", payload : data})
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, []);
    async function addProductId(elem) {
      setCount((prev) => prev + 1);
      try {
        await axios.post(idProducts, elem);
      } catch (error) {
        console.log(error)
      }
    }
    const {t, i18n} = useTranslation()
  return (
    <>
    <div className="bg-[#FAF4F0] flex items-center justify-center p-4 sm:p-8 font-sans">
      
      <section className="relative bg-[#FAF4F0] overflow-hidden px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-20 container flex items-center justify-between">
        
        
        <div className="absolute top-10 left-[35%] w-8 rounded-full bg-[#E3F2FD]/60 pointer-events-none" />
        <div className="absolute top-16 right-[48%] w-4 rounded-full bg-[#E3F2FD]/70 pointer-events-none" />
        <div className="absolute bottom-20 left-[45%] w-3 rounded-full bg-[#E3F2FD]/80 pointer-events-none" />
        <div className="absolute bottom-10 left-[40%] w-12  rounded-full bg-[#E6F3FA]/70 pointer-events-none" />
        <div className="absolute bottom-6 right-[38%] w-3 rounded-full bg-[#E3F2FD]/70 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
          
        
          <div className="md:col-span-6 lg:col-span-6 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#235D74] leading-[1.15] tracking-tight">
              {t("body.sec1.text")}
            </h1>

            <p className="text-[#738B99] text-base sm:text-lg leading-relaxed max-w-md font-normal">
              {t("body.sec1.text2")}
            </p>

            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center bg-[#72C8EE] hover:bg-[#5bbce6] active:scale-95 text-white font-medium text-sm sm:text-base px-8 py-3 rounded-xl transition-all shadow-sm duration-200 cursor-pointer"
              >
                {t("body.sec1.button")}
              </button>
            </div>
          </div>

         
          <div className="md:col-span-6 lg:col-span-6 relative flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <div className="relative w-full sm:aspect-square flex items-center justify-center">

                <img
                  src={group248}
                  alt="Мать и ребенок"
                />

            </div>
          </div>

        </div>
      </section>

    </div><br />
    <div className="flex w-full flex-wrap gap-10 container mx-auto md:flex-row flex-col">
    <Card description={t("card.products.stroller.title")} price={"152 000"} img={product1}/>
    <Card description={`${t("card.knitwear.stroller.title")}`} price={"1 600 "} img={product2}/>
    </div><br />
    <section className="container mx-auto">
        <h1 className="text-6xl text-[#446B80] font-bold text-center">Популярные категории</h1><br />
        <div className="flex md:flex-row flex-col p-5 items-center gap-5">
            <CardV2 img={cardProductV1} button={t("body.sec1.button")} bg={'bg-[#F6E3E1]'}/>
            <CardV2 img={cardProductV2} button={t("body.sec1.button")} bg={'bg-[#FDF6EF]'}/>
            <CardV2 img={cardProductV3} button={t("body.sec1.button")} bg={'bg-[#E5F4FC]'}/>
        </div>
    </section>
    <section className="container mx-auto">
        <h1 className="text-6xl text-[#446B80] font-bold text-center">Новинки</h1><br />
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-col md:flex-row p-5 items-center gap-5">
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            </div>
        </SwiperSlide>
         <SwiperSlide>
            <div className="flex flex-col md:flex-row p-5 items-center gap-5">
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            <CardV3 img={cardv2Product} text={"Коляска Riko Basic, Польша"} price={"52 000"}/>
            </div>
        </SwiperSlide><br />
      </Swiper>
        
    </section><br /><br />
    <section className="container mx-auto flex md:flex-row flex-col-reverse items-center justify-evenly p-5">
        <aside className="md:ml-10 ml-0 flex flex-col items-start">
            <h1 className="text-[#446B80] text-6xl font-bold">Все детские костюмыс акцией 10%</h1><br />
            <button
            className={`w-full py-3.5 px-4 rounded-2xl font-medium text-base transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${'bg-[#7CD0F7] hover:bg-[#60c4f5] active:bg-[#4bbcf3] text-white'}`}
          >
              В корзину
          </button>
        </aside>
        <div><img src={mask1} alt="" /></div>
    </section><br />
    <section className="container mx-auto">
        <h1 className="md:text-6xl text-4xl text-[#446B80] font-bold text-center">Выгодное предложение</h1><br />
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunks.map((chunk, i) => (
        <SwiperSlide key={i}>
        <div className="flex flex-col md:flex-row md:p-0 p-5 items-center gap-5">
            {chunk.map(elem => (
                <CardV3 key={elem.id} onClick={() => {
                  addProductId(elem);
                  console.log(elem)
                }} img={elem.image} price={elem.price} text={elem.name} />
            ))}
        </div>
    </SwiperSlide>
    ))}
      </Swiper>
        
    </section><br /><br />
    <section className="container mx-auto">
        <h1 className="text-6xl text-[#446B80] font-bold text-center">Популярные товары</h1><br />
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunks.map((chunk, i) => (
        <SwiperSlide key={i}>
        <div className="flex flex-col md:flex-row p-5 items-center gap-5">
            {chunk.map(elem => (
                <CardV3 key={elem.id} onClick={() => {
                  addProductId(elem);
                }} img={elem.image} price={elem.price} text={elem.name} />
            ))}
        </div>
    </SwiperSlide>
    ))}
      </Swiper>
        
    </section><br /><br />
    <section className="container md:block hidden mx-auto">
        <h1 className="md:text-6xl text-4xl text-[#446B80] font-bold text-center">Карапуз - это онлайн гипермаркет товаров для детей. С нами вырастают поколения!</h1><br /><br />  
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex md:flex-row flex-col p-5 items-center gap-10">
                <img className="w-8" src={group1} alt="" />
                <img className="w-8" src={group2} alt="" />
                <img className="w-8" src={group1} alt="" />
                <img className="w-8" src={group2} alt="" />
                <img className="w-8" src={group1} alt="" />
            </div><br /><br />
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex md:flex-row flex-col p-5 items-center gap-10">
                <img className="w-8" src={group1} alt="" />
                <img className="w-8" src={group2} alt="" />
                <img className="w-8" src={group1} alt="" />
                <img className="w-8" src={group2} alt="" />
                <img className="w-8" src={group1} alt="" />
            </div><br /><br />
            </SwiperSlide>
      </Swiper>
    </section><br /><br /><br />
    <div className="flex md:flex-row flex-col p-5 container mx-auto gap-10">
        <Vector number={"1"} img={vector} text={"Все товары для детей в одном месте"}/>
        <Vector number={"2"} img={vector} text={"Все товары для детей в одном месте"}/>
        <Vector number={"3"} img={vector} text={"Все товары для детей в одном месте"}/>
        <Vector number={"4"} img={vector} text={"Все товары для детей в одном месте"}/>
    </div><br /><br />
    </>
  );
}