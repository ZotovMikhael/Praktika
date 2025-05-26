export default function Documentation() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Документация</h1>
        <p className="text-xl text-gray-600">
          Техническая документация и руководства
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Руководство пользователя</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium">Начало работы</h3>
              <p className="text-gray-600">Основные шаги для начала работы с системой</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium">Работа с документами</h3>
              <p className="text-gray-600">Инструкции по управлению документами</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium">Поиск и фильтрация</h3>
              <p className="text-gray-600">Как искать и фильтровать документы</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Техническая документация</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium">Архитектура системы</h3>
              <p className="text-gray-600">Описание архитектуры и компонентов</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium">API документация</h3>
              <p className="text-gray-600">Описание доступных API endpoints</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-medium">База данных</h3>
              <p className="text-gray-600">Структура и схема базы данных</p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Как добавить новый документ?</h3>
            <p className="text-gray-600">
              Подробная инструкция по добавлению новых документов в систему будет доступна после завершения разработки.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Как осуществляется поиск?</h3>
            <p className="text-gray-600">
              Система предоставляет различные способы поиска: по названию, по категории, по содержимому и т.д.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">Как обновить документ?</h3>
            <p className="text-gray-600">
              Процесс обновления документов будет автоматизирован и доступен через интерфейс системы.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 