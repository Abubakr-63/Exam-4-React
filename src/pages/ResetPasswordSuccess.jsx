import { useNavigate } from "react-router";

export default function ResetPasswordSuccess() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 p-8 flex justify-center items-start pt-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Спасибо
        </h1>

        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
          Письмо с инструкцией по восстановлению пароля мы отправили на Ваш электронный адрес
        </p>

        <button
          onClick={() => navigate('/')}
          type="button"
          className="px-6 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-lg text-sm transition-colors shadow-sm"
        >
          На главную
        </button>
      </div>
    </div>
  );
}