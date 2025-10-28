'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Github, Linkedin, Mail, DownloadCloud, Menu, X, ArrowRight } from 'lucide-react'

export default function PortfolioPage() {
  const [dark, setDark] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [filter, setFilter] = useState('All')
  const [counters, setCounters] = useState({ projects: 0, years: 0, clients: 0 })

  const projects = [
    {
      id: 1,
      title: 'InRave Studio',
      tags: ['React', 'Next.js', 'Tailwind', 'FastAPI'],
      description: 'Сайт для сети спортивных клубов. Перезапуск сайта с нуля: от редизайна до полной перепрошивки фронтенда на FSD-архитектуре. Реализованы анимации, скролл-эффекты, кастомные блоки и подключён бэкенд на FastAPI. Изначально это был базовый лендинг. Сейчас — масштабируемый сайт с интерактивом и сильным визуалом.',
      quote: 'Изначально это был базовый лендинг. Сейчас — масштабируемый сайт с интерактивом и сильным визуалом.',
      url: 'https://www.inrave.studio/',
      image: '/rave.png'
    },
    {
      id: 2,
      title: 'Siveno Store',
      tags: ['HTML/CSS', 'Next.js', 'SEO', 'Laravel'],
      description: 'Интернет-магазин одежды. Создание с нуля e-commerce сайта с полноценной корзиной, фильтрами, интеграцией с Laravel-бэкендом и приёмом онлайн-оплаты. Визуал, адаптив и UX проработаны до деталей.',
      quote: 'Сайт лёгкий, лаконичный, живой.',
      url: 'https://www.siveno.store/',
      image: '/Siveno.png'
    },
    {
      id: 3,
      title: 'SmartPlan',
      tags: ['React', 'd3.js', 'WebSockets'],
      description: 'Интерфейс для расчётов и планирования. Разработка аналога Excel в браузере: таблицы с агрегацией, расчётами, драг-н-дроп, графики, импорт/экспорт.',
      quote: 'Сложный, нестандартный и стабильный.',
      url: 'https://www.smartpln.ru/',
      image: '/SmartPlan.png'
    },
    {
      id: 4,
      title: 'eSIM Unlimited',
      tags: ['Telegram WebApp', 'React', 'Node.js'],
      description: 'Telegram Mini App @eSIMUnlimitedbot с покупкой eSIM, личным кабинетом, гайд-базой и переключением языков.',
      quote: 'Компактный, но насыщенный проект.',
      url: '#',
      image: '/Esim.png'
    },
    {
      id: 7,
      title: 'Izi.expert',
      tags: ['Vue', 'API', 'UX'],
      description: 'Сервис для сдачи налогов в Кыргызстане: подключение API, регистрация, авторизация, улучшения интерфейса и UX.',
      quote: 'Усилили стабильность и удобство.',
      url: 'https://izi.expert/',
      image: '/iziexpert.png'
    },
    {
      id: 8,
      title: 'esf.izi.expert',
      tags: ['Vue', 'OpenAI API', 'WebSockets'],
      description: 'AI-ассистент по налогам с интеграцией OpenAI, реалтайм-обменом сообщениями и масштабируемой архитектурой.',
      quote: 'Инструмент диалога с ИИ в реальном времени.',
      url: 'https://esf.izi.expert/',
      image: 'esf.png'
    },
    {
      id: 5,
      title: 'Медицинский центр (LPMotor)',
      tags: ['lpmotor'],
      description: 'Корректировка и улучшение сайта c CMS. Исправлены ошибки, улучшены UX, адаптив и производительность.',
      quote: 'Каждый элемент стал логичнее, понятнее и быстрее.',
      url: '#',
    },
    {
      id: 6,
      title: 'Vet Help',
      tags: ['React', 'API'],
      description: 'Лендинг с интеграцией API и динамической загрузкой данных, картой и переключением городов.',
      quote: 'Сделали её гибкой и готовой к росту.',
      url: '#'
    }
  ]

  const testimonials = [
    { id: 1, name: 'borisbinyaminov', role: 'Заказчик', text: 'Спасибо за отличную работу! Всё было сделано быстро, чётко и с полным пониманием задачи. Особенно ценю Вашу отзывчивость и готовность оперативно внести правки.' },
    { id: 2, name: 'Gang_agency', role: 'Агенство', text: 'Приятный молодой человек. Внёс корректировки на сайт, которые были оговорены, всё выполнено быстро.' },
    { id: 3, name:'borisbinyaminov', role: 'Заказчик', text:'спасибо за быстрые правки в мой проект' },
    { id: 4, name:'nextner', role: 'Заказчик', text:'Отличный исполнитель, быстро выполнил верстку, учел все пожелания, плюс внес правки максимально быстро. Рекомендую к сотрудничеству.' },
    { id: 5, name:'cskn247', role: 'Заказчик', text:'Великолепно выполнил верстку b2c лендинга для десктопной и мобильной версии. Оперативно и качественно вносил все правки. Отличный специалист!' },
    { id: 6, name:'vmatsyev', role: 'Заказчик', text:'Была задача сверстать десктопную версию по макету и самостоятельно разработать мобильную адаптацию. Исполнитель справился хорошо: макет реализован аккуратно, адаптивность выполнена качественно. Все правки, которые я озвучивал, были внесены оперативно. Рекомендую!' },
  ]

  useEffect(() => {
    let start = Date.now()
    const duration = 1200
    const target = { projects: 8, years: 2, clients: 14 }
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const t = Math.min(1, elapsed / duration)
      setCounters({
        projects: Math.floor(target.projects * t),
        years: Math.floor(target.years * t),
        clients: Math.floor(target.clients * t)
      })
      if (t === 1) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [])

  const tags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <div className={dark ? 'dark' : ''}>
      <main className="min-h-screen bg-white dark:bg-[#0b1020] text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-[#071023]/60 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a className="font-semibold text-lg flex items-center gap-2" href="#">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white">I</div>
              <span className="hidden sm:inline">Ильяс • Frontend</span>
            </a>

            <nav className="hidden sm:flex items-center gap-4">
              <a href="#projects" className="text-sm hover:underline">Проекты</a>
              <a href="#skills" className="text-sm hover:underline">Навыки</a>
              <a href="#testimonials" className="text-sm hover:underline">Отзывы</a>
              <a href="#contact" className="text-sm hover:underline">Контакты</a>
              <button aria-label="toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/6">
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </nav>

            <div className="sm:hidden flex items-center gap-3">
              <button aria-label="toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/6">
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button onClick={() => setOpenMenu(true)} aria-label="menu" className="p-2 rounded-md">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="sm:hidden fixed inset-0 bg-black/30 z-50">
              <div className="absolute right-4 top-4 bg-white dark:bg-[#071023] rounded-md p-4 w-[85%] max-w-xs shadow-lg">
                <button onClick={() => setOpenMenu(false)} className="mb-4">
                  <X />
                </button>
                <nav className="flex flex-col gap-2">
                  <a onClick={() => setOpenMenu(false)} href="#projects" className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/6">Проекты</a>
                  <a onClick={() => setOpenMenu(false)} href="#skills" className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/6">Навыки</a>
                  <a onClick={() => setOpenMenu(false)} href="#testimonials" className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/6">Отзывы</a>
                  <a onClick={() => setOpenMenu(false)} href="#contact" className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-white/6">Контакты</a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-3xl sm:text-4xl font-bold leading-tight">
                Привет — я Ильяс
                <span className="text-indigo-600 dark:text-indigo-400"> Frontend разработчик</span>
              </motion.h1>
              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl">Я создаю быстрые, современные и удобные интерфейсы на React и Next.js. Помогаю бизнесам запускать продукт, повышать конверсии и улучшать UX.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:shadow-lg">
                  Посмотреть проекты <ArrowRight size={16} />
                </a>
                <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 dark:hover:bg-white/6">
                  <DownloadCloud size={16} /> Резюме
                </a>
              </div>

              {/* counters */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">{counters.projects}+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{counters.years}+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Года опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{counters.clients}+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Клиентов</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm">
                <a href="https://github.com/TolykbaevIlyas" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F%D1%81-%D1%82%D0%BE%D0%BB%D1%8B%D0%BA%D0%B1%D0%B0%D0%B5%D0%B2-3a18a6290/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:ilyas.tolykbaev04@gmail.com" className="inline-flex items-center gap-2">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center md:justify-end">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/6 bg-gray-50 dark:bg-white/6 flex items-center justify-center">
                {/* Replace with your photo: /public/Img.jpg */}
                <img src="/Img.jpg" alt="photo" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-5xl mx-auto px-4 py-6">
          <h3 className="text-base font-semibold">Навыки</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux/RTK', 'GraphQL', 'Node.js', 'MongoDB'].map(skill => (
              <div key={skill} className="p-3 border rounded-md bg-white dark:bg-[#071023] border-gray-100 dark:border-white/6 text-xs text-center">{skill}</div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-left gap-3 justify-between">
            <h3 className="text-lg font-semibold">Проекты</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {tags.map(t => (
                <button key={t} onClick={() => setFilter(t)} className={`text-sm px-3 py-1 rounded-full ${filter===t ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-white/6'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map(project => (
              <motion.article layout key={project.id} className="rounded-lg border overflow-hidden shadow-sm bg-white dark:bg-[#071023] border-gray-100 dark:border-white/6">
                <div className="relative h-44 bg-gray-100 dark:bg-white/6">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{project.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex gap-2 text-xs">
                      {project.tags.map(t => <span key={t} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-white/6">{t}</span>)}
                    </div>
                    <a href={project.url} className="text-sm inline-flex items-center gap-2">Смотреть <ArrowRight size={14} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="max-w-5xl mx-auto px-4 py-6">
          <h3 className="text-lg font-semibold">Отзывы</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map(t => (
              <article key={t.id} className="p-4 border rounded-md bg-white dark:bg-[#071023] border-gray-100 dark:border-white/6">
                <p className="text-sm">“{t.text}”</p>
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">— {t.name}, {t.role}</div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-5xl mx-auto px-4 py-6">
          <h3 className="text-lg font-semibold">Связаться</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-md bg-white dark:bg-[#071023] border border-gray-100 dark:border-white/6">
              <h4 className="font-semibold">Доступные услуги</h4>
              <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                <li>• Верстка по макету и адаптив</li>
                <li>• Разработка SPA и SSR (Next.js)</li>
                <li>• Оптимизация производительности и SEO</li>
                <li>• Поддержка и доработка проектов</li>
              </ul>

              <div className="mt-4 text-sm">
                <div>Email: <a href="mailto:ilyas.tolykbaev04@gmail.com" className="underline">ilyas.tolykbaev04@gmail.com</a></div>
                <div>Telegram: <a href="https://t.me/IlyasItFree" className="underline">@IlyasItFree</a></div>
                <div className="mt-3 flex gap-3">
                  <a href="https://github.com/TolykbaevIlyas" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Github size={16}/> GitHub</a>
                  <a href="https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F%D1%81-%D1%82%D0%BE%D0%BB%D1%8B%D0%BA%D0%B1%D0%B0%D0%B5%D0%B2-3a18a6290/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a>
                </div>
              </div>
            </div>

            {/* <div className="p-4 rounded-md bg-white dark:bg-[#071023] border border-gray-100 dark:border-white/6">
              <h4 className="font-semibold">Форма</h4>
              <form onSubmit={(e)=>{e.preventDefault(); alert('Спасибо! Я свяжусь с вами.')}} className="mt-3 flex flex-col gap-3">
                <input required name="name" placeholder="Имя" className="p-3 border rounded bg-transparent" />
                <input required name="email" type="email" placeholder="Email" className="p-3 border rounded bg-transparent" />
                <textarea required name="message" placeholder="Короткое сообщение" className="p-3 border rounded bg-transparent h-28" />
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md inline-flex items-center justify-center">Отправить</button>
              </form>
            </div> */}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 dark:border-white/6 mt-8">
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">© {new Date().getFullYear()} Ильяс — Frontend разработчик</div>
            <div className="flex items-center gap-3 text-sm">
              <a href="mailto:ilyas.tolykbaev04@gmail.com" className="inline-flex items-center gap-2"><Mail size={14}/> Написать</a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2"><DownloadCloud size={14}/> Резюме</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}
