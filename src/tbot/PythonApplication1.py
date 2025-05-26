import os
import logging
import sqlite3
from datetime import datetime
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# Токен бота
TOKEN = "7683974921:AAEyUYninoQqHSxqg40VY3fWjYwuR3I9Yrw"

# Настройка логирования
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# Инициализация базы данных
def init_db():
    conn = sqlite3.connect('notes.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Создание таблицы
init_db()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Команда /start"""
    welcome_text = """
    👋 Привет! Я бот для управления заметками. Вот что я умею:

    📝 Основные команды:
    /new - Создать новую заметку
    /list - Показать все заметки
    /help - Показать это сообщение
    /export - Экспортировать заметки в файл

    📌 Для создания заметки просто отправьте сообщение
    """
    await update.message.reply_text(welcome_text)

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Команда /help"""
    await start(update, context)

async def new_note(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Создание новой заметки"""
    await update.message.reply_text("Отправьте текст вашей заметки:")

async def handle_text(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обработка текстовых сообщений"""
    user_id = update.message.from_user.id
    content = update.message.text
    
    conn = sqlite3.connect('notes.db')
    c = conn.cursor()
    c.execute('INSERT INTO notes (user_id, content) VALUES (?, ?)', (user_id, content))
    conn.commit()
    conn.close()
    
    await update.message.reply_text("✅ Заметка сохранена!")

async def list_notes(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Показать список заметок"""
    user_id = update.message.from_user.id
    
    conn = sqlite3.connect('notes.db')
    c = conn.cursor()
    c.execute('SELECT content, created_at FROM notes WHERE user_id = ? ORDER BY created_at DESC', (user_id,))
    notes = c.fetchall()
    conn.close()
    
    if not notes:
        await update.message.reply_text("У вас пока нет заметок!")
        return
    
    response = "📝 Ваши заметки:\n\n"
    for note in notes:
        content, created_at = note
        response += f"• {content[:100]}...\n\n"
    
    await update.message.reply_text(response)

async def export_notes(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Экспорт заметок в текстовый файл"""
    user_id = update.message.from_user.id
    
    conn = sqlite3.connect('notes.db')
    c = conn.cursor()
    c.execute('SELECT content, created_at FROM notes WHERE user_id = ? ORDER BY created_at DESC', (user_id,))
    notes = c.fetchall()
    conn.close()
    
    if not notes:
        await update.message.reply_text("У вас пока нет заметок для экспорта!")
        return
    
    # Создаем имя файла с текущей датой
    filename = f'notes_{user_id}_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt'
    
    # Записываем заметки в файл
    with open(filename, 'w', encoding='utf-8') as f:
        f.write("=== Ваши заметки ===\n\n")
        for note in notes:
            content, created_at = note
            f.write(f"Дата: {created_at}\n")
            f.write(f"Текст: {content}\n")
            f.write("-" * 50 + "\n\n")
    
    # Отправляем файл пользователю
    with open(filename, 'rb') as f:
        await update.message.reply_document(
            document=f,
            filename=filename,
            caption="📝 Ваши заметки экспортированы в текстовый файл!"
        )
    
    # Удаляем временный файл
    os.remove(filename)

def main():
    """Запуск бота"""
    application = Application.builder().token(TOKEN).build()

    # Регистрация обработчиков команд
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("new", new_note))
    application.add_handler(CommandHandler("list", list_notes))
    application.add_handler(CommandHandler("export", export_notes))
    
    # Обработчик текстовых сообщений
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_text))
    
    # Запуск бота
    print("Бот запущен. Нажмите Ctrl+C для остановки.")
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
