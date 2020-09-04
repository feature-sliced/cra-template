# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> based on [Feature Driven Development approach](https://www.notion.so/Feature-Driven-Development-dfe306d664ae4780bcf999ccdd15e532)

## Структура

Ресурсы проекта структурированы согласно [Feature Driven Development](https://www.notion.so/Feature-Driven-Development-dfe306d664ae4780bcf999ccdd15e532) подходу.

> **TL;DR**: Для более удобной, гибкой разработки и поддержки проекта

### Структура папок
```markdown
└── src/                            # Исходные файлы
    ├── app/                        # Базовые ресурсы для приложения
    ├── features/                   # Ключевые фичи приложения
    ├── pages/                      # Страницы приложения (собираются из features, shared)
    └── shared/                     # **Общие** модули для разработки
        ├── api/                    # API модуль
        ├── components/             #   **Общеиспользуемые** React Компоненты
        ├── helpers/                #   **Общеиспользуемые** Модули-хелперы
        ├── hocs/                   #   **Общеиспользуемые** React HOCs
        ├── hooks/                  #   **Общеиспользуемые** React Хуки
        ├── fixtures/               #   **Общеиспользуемые** Демо данные (до подключения к API)
        ├── get-env                 #   Модуль с **env**-переменными
        ├── mixins.scss             #   **Общеиспользуемые** SCSS миксины
        └── consts.scss             #   **Общеиспользуемые** SCSS переменные (не цвета)
```

### Структура фичи
```markdown
└── features/
    └── feature-name/
            ├── components/            # Компоненты, отвечающие за отображение информации (`React`, `Canvas`)
            ├── store/                 # Redux store компонента
            │   ├── slice.ts           #    `Slice` состояния для фичи
            │   ├── types.ts           #    Необходимые `типы` для слайса
            │   ├── selectors.ts       #    Мемоизированные селекторы для слайса
            │   ├── effects.ts         #    `Thunks` с реализацией сайд эффектов (`CRUD`-операции и т.д.)
            │   └── helpers.ts         #    Необходимые `хелперы`
            ├── {...}/                 # Потенциально, можно хранить здесь и другие **необходимые** модули (но без фанатизма)
            └── index.ts               # Entry-point фичи (с настроенным публичным API этой фичи)
```

#### API
Рекомендуется практика с генерацией `API`, на основе `swagger` схемы
> Например, с помощью [openapi-generator#typescript-axios](https://openapi-generator.tech/docs/generators/typescript-axios/)

#### Assets
Рекомендуется распологать локально с каждым компонентом, что использует их.


> Если же, возникнет **острая необходимость** иметь общие иконки, для доступа на всех уровнях приложения - то стоит их расположить как и остальные общие модули - в `shared`
> ```markdown
> ├── assets/
> └── shared/
> ```
> Но как правило - для каждого участка интерфейса - свой уникальный набор статических файлов.

#### Shared
Во всех `shared/`-модулях есть файл для управления точками входа в этот модуль (`index.ts`)

**Рекомендуется, все необходимые подмодули получать именно через него**

Т.е., если захочется взять общий компонент `button`, то:
```ts
// Плохо (т.к. идет обращение к приватному модулю)
import Button from "shared/components/button";
// Хорошо (регулируется общим API модуля компонентов)
import { Button } from "shared/components";
```
