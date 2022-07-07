import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

export default function Home(): JSX.Element
{

  return (
    <Layout
      title={`Главная`}
      description="Мы делаем веб-студию!"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <h1>Добро пожаловать в Hoolie Projects!</h1>
            <p>
              <b>Hoolie Projects</b> - зарождающаяся веб-студия, ориентированная на создание инновационных онлайн-проектов,
                                     используя современные веб-технологии.
            </p>
            <p>
              На данный момент мы ищем людей, готовых принять участие в жизни студии.
              Нам нужны <b>разработчики</b>, <b>дизайнеры</b>, <b>девопсы</b> и <b>проджект-менеджеры</b>, чтобы вместе
              создавать крутые онлайн-проекты. Если вы заинтересованы, тут <Link to='/hire'>подробная информация</Link>
            </p>
            <img src="/img/poster.svg" alt="" className="_inPage" style={{
              margin: '100px auto',
              maxHeight: 300
            }} />
            <h2>В общих чертах о наших ближайших планах:</h2>
            <ul>
              <li>
                Привлечь людей, заинтересованных в совместном создании и развитии студии;
              </li>
              <li>
                Создать несколько проектов для демонстрации наших навыков;
              </li>
              <li>
                Построить максимально автоматизированную систему для разработки, тестирования и запуска проектов
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}
