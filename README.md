## Vue.js To Do List

### Stack
- **Core**: Vue.js 3, typescript
- **Style**: tailwindCSS
- **State management**: pinia
- **Formatter**: esLint, prettier

### Structure

```jsx
public/
└── favicon.ico
src/
├── assets/
│   ├── bin-icon.svg
│   ├── check-icon.svg
│   ├── delete-icon.svg
│   ├── dots.png
│   ├── main.css
│   └── pencil-icon.svg
├── components/
│   ├── todo/                     <!-- todo 페이지 컴포넌트 -->
│   │   ├── InputContainer.vue
│   │   ├── ToDoContainer.vue
│   │   ├── ToDoHeader.vue
│   │   ├── ToDoItem.vue
│   │   ├── ToDoList.vue
│   │   └── ToDoStats.vue
│   ├── ui/                       <!-- 공통 ui 컴포넌트 -->
│   │   └── CustomButton.vue
│   ├── data/                     <!-- 정적 데이터 -->
│   │   └── data.ts
│   ├── lib/                      <!-- 공통 유틸함수 -->
│   │   └── utils.ts
│   ├── pages/                    <!-- 페이지 컴포넌트 -->
│   │   ├── ToDo.vue
│   │   └── ToDoHome.vue
│   ├── store/                    <!-- pinia 관리 -->
│   │   ├── store.ts
│   │   └── types.ts
│   ├── App.vue
│   ├── main.ts 
│   └── route.ts                  <!-- 라우팅 관리 -->
├── .gitattributes
├── .gitignore
├── .prettierrc.json
├── env.d.ts
├── eslint.config.ts
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
