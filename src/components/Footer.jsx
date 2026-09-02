import React from 'react';
import logo from "../assets/Mask Group.png";
import { useTranslation } from 'react-i18next';

const VkIcon = () => (
  <svg 
    className="w-6 h-6 stroke-[#3fa9e2]" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14 19c-6.5 0-10.5-4.5-10.5-12h3.2c0 5.5 2.4 7.8 4.3 8.3V7h3v4.7c1.8-.2 3.8-2.3 4.4-4.7h3c-.5 3.1-2.8 5.2-4.4 6.1 1.6.8 4.2 2.6 5.1 6c.1 0-4 .1-4 .1-.8-2.6-2.9-4.5-5.6-4.7V19z" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();
  return (
      <footer className="w-full bg-[#f8fbfd] border-t border-slate-100 py-10 text-[#4a7795] font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-8 pb-12">
            
            <div>
              <img src={logo} alt="" />
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.about')}</a>
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.promotions')}</a>
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.blog')}</a>
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.contacts')}</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.returns')}</a>
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.shipping')}</a>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-[#3fa9e2] transition-colors">{t('footer.wholesale')}</a>
            </div>

            <div>
              <p className="mb-3 text-[#4a7795]">{t('footer.social')}</p>
              <div className="flex items-center space-x-3">
                <p aria-label="Instagram" className="hover:opacity-80">
                </p>
                <p aria-label="WhatsApp" className="hover:opacity-80">
                </p>
                <p aria-label="VK" className="hover:opacity-80">
                  <VkIcon />
                </p>
                <p aria-label="Facebook" className="hover:opacity-80">
                </p>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-[#eaf2f8] flex flex-col sm:flex-row justify-between items-center text-xs text-[#8faec4] gap-4">
            <div>
              © 2020 karapuz05.ru
            </div>
            <div>
              <p className="hover:text-[#4a7795] transition-colors">
                Пользовательское соглашение / политика конфиденциальности
              </p>
            </div>
          </div>

        </div>
      </footer>
  );
}