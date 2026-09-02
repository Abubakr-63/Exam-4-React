import { useNavigate } from "react-router";

export default function ResetPasswordForm() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 p-8 flex justify-center items-start pt-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">
          Восстановление пароля
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Ваш электронный адрес"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-sky-400 placeholder-slate-400 text-slate-700 text-sm"
            />
          </div>

          <div className="pt-2">
            <button
            onClick={() => navigate('/resetpassowrdsuccess')}
              type="button"
              className="px-6 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-medium rounded-lg text-sm transition-colors shadow-sm"
            >
              Восстановить пароль
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}