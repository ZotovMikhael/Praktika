export default function About() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">О проекте</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Проект по созданию базы данных нормативных документов для направления
          Интеллектуальные Информационно-Измерительные Системы
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Цели проекта</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Систематизация документов</h3>
              <p className="text-gray-600">Создание структурированной базы данных нормативных документов</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Удобный доступ</h3>
              <p className="text-gray-600">Разработка интуитивно понятного интерфейса для работы с документами</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium">Автоматизация процессов</h3>
              <p className="text-gray-600">Создание функционала для автоматизированной работы с документами</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Этапы реализации</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium">Этап 1: Сбор и анализ требований</h3>
            <p className="text-gray-600">Определение необходимых функций и возможностей системы</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-medium">Этап 2: Разработка базы данных</h3>
            <p className="text-gray-600">Создание структуры и наполнение базы данных документами</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg font-medium">Этап 3: Разработка интерфейса</h3>
            <p className="text-gray-600">Создание удобного пользовательского интерфейса</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-lg font-medium">Этап 4: Тестирование и внедрение</h3>
            <p className="text-gray-600">Проверка работоспособности и внедрение системы</p>
          </div>
        </div>
      </section>
    </div>
  );
} 