import React from 'react'
import Layout from '@theme/Layout'

export default function Home(): JSX.Element
{

  return (
    <Layout
      title={`Присоединиться к команде Hoolie Projects`}
      description="Присоединиться к команде Hoolie Projects"
    >
      <main className="container margin-vert--lg">
        <h1>Присоединиться к команде Hoolie Projects</h1>

        <p>
          Мы ищем людей для создания одной из лучших команд по разработке онлайн-проектов
        </p>

        <h2>Кто нам нужен</h2>
        <ul>

          <li>
            <b>Веб-разработчики</b>

            <ul>
              <li>FrontEnd (React/Vue/Angular);</li>
              <li>BackEnd (Node.JS/Python/ASP.net)</li>
            </ul>
          </li>

          <li>
            <b>DevOps</b>

            <ul>
              <li>Настройка серверов на базе Linux;</li>
              <li>CI/CD;</li>
              <li>Подготовка проектов к масштабированию</li>
            </ul>
          </li>

          <li>
            <b>Дизайнеры</b>

            <ul>
              <li>UX/UI;</li>
              <li>Графические</li>
            </ul>
          </li>

          <li>
            <b>Менеджеры проектов</b>

            <ul>
              <li>Общение с заказчиками и составление ТЗ;</li>
              <li>Консультирование заказчиков и команды разработки между собой</li>
            </ul>
          </li>

          <li>
            <b>Тимлиды</b>

            <ul>
              <li>Контролирование процесса разработки проектов;</li>
              <li>Составление задач разработчикам и управление ими</li>
            </ul>
          </li>
        </ul>

        <p>
          Возможно рассмотрение кандидатов без опыта работы, но которым интересно саморазвиваться и пробовать что-то новое
        </p>

        <h2>По поводу присоединения в команду писать сюда:</h2>

        <div>
          <a href="https://t.me/alyokhin22" target="_blank">
            <button className="button button--primary">Telegram</button>
          </a>
          <span> </span>
          <a href="https://vk.com/alyokhin22" target="_blank">
            <button className="button button--primary">VK</button>
          </a>
        </div>
      </main>
    </Layout>
  )
}
