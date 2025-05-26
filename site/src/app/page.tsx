import React from 'react';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          База данных нормативных документов
        </h1>
        <p className="text-xl text-gray-600">
          Интеллектуальные Информационно-Измерительные Системы
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Основные задачи проекта:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Сбор базы данных нормативных документов</li>
          <li>Разработка дизайна и функционала</li>
          <li>Разработка десктоп-приложения</li>
        </ul>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Особенности проекта</h3>
          <p className="text-gray-700">
            Проект направлен на создание удобной и эффективной системы управления нормативными документами
            в области Интеллектуальных Информационно-Измерительных Систем.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Текущий статус</h3>
          <p className="text-gray-700">
            В процессе разработки. Ведется активная работа над созданием базы данных
            и разработкой пользовательского интерфейса.
          </p>
        </div>
      </section>
    </div>
  );
} 