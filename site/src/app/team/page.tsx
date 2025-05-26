export default function Team() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Наша команда</h1>
        <p className="text-xl text-gray-600">
          Специалисты, работающие над проектом
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Здесь будут карточки участников после того, как вы предоставите информацию */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
              {/* Место для фото */}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Участник проекта</h3>
            <p className="text-gray-600 text-center">Роль в проекте</p>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <div className="text-sm text-gray-600">
              <p>Основные обязанности:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Разработка архитектуры</li>
                <li>Проектирование базы данных</li>
                <li>Создание документации</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Пример карточки участника (будет заменено реальными данными) */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
              {/* Место для фото */}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Участник проекта</h3>
            <p className="text-gray-600 text-center">Роль в проекте</p>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <div className="text-sm text-gray-600">
              <p>Основные обязанности:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Разработка интерфейса</li>
                <li>Тестирование</li>
                <li>Документирование</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white shadow-md rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Присоединяйтесь к нам</h2>
        <p className="text-gray-600">
          Мы всегда рады новым участникам, которые хотят внести свой вклад в развитие проекта.
          Если вы заинтересованы в участии, свяжитесь с нами.
        </p>
      </section>
    </div>
  );
} 