import { useNavigate } from "react-router";

export default function RegisterForm() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 p-8 flex justify-center items-start pt-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Регистрация</h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <input
              type="text"
              defaultValue="Анна"
              placeholder="Имя"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700"
              required
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Электронный адрес"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Пароль"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Повторите пароль"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Вставить каптчу"
              className="w-1/2 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700 text-sm"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="agreement"
              className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-400 focus:ring-sky-400"
            />
            <label htmlFor="agreement" className="text-xs text-slate-500 leading-normal">
              Согласие с{" "}
              <a href="#" className="text-sky-400 hover:underline">
                пользовательским соглашением
              </a>{" "}
              и{" "}
              <a href="#" className="text-sky-400 hover:underline">
                политикой конфиденциальности
              </a>
            </label>
          </div>

          <div className="pt-2">
            <button
            onClick={() => navigate('/')}
              type="button"
              className="px-6 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-lg text-sm transition-colors shadow-sm"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}