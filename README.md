# Calculadora móvil

Aplicación de calculadora desarrollada con React Native y Expo. El proyecto está pensado para ofrecer una interfaz sencilla y multiplataforma para realizar operaciones matemáticas desde dispositivos Android, iOS y la web.

Actualmente se encuentra en desarrollo y contiene la base visual de la calculadora, el enrutamiento con Expo Router y la configuración inicial para continuar incorporando las operaciones y los controles de la aplicación.

## Tecnologías

- React Native
- Expo SDK 57
- Expo Router
- TypeScript
- React Native Web
- Bun para la instalación y ejecución del proyecto

## Requisitos

- Node.js
- Bun
- Expo Go, un emulador Android, un simulador iOS o un navegador web

## Instalación

Clona el repositorio, entra en la carpeta del proyecto e instala las dependencias:

```bash
git clone <URL_DEL_REPOSITORIO>
cd calculator-app
bun install
```

## Ejecutar la aplicación

Inicia el servidor de desarrollo de Expo:

```bash
bun start
```

También puedes abrir directamente una plataforma específica:

```bash
bun run android
bun run ios
bun run web
```

Al ejecutar `bun start`, Expo mostrará las opciones disponibles para abrir la aplicación en Expo Go, un emulador, un simulador o el navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `bun start` | Inicia el servidor de desarrollo de Expo. |
| `bun run android` | Abre el proyecto en Android. |
| `bun run ios` | Abre el proyecto en iOS. |
| `bun run web` | Abre la versión web. |
| `bun run lint` | Ejecuta la revisión de código de Expo. |

## Estructura principal

```text
src/
├── app/          # Pantallas, rutas y componentes de Expo Router
├── constants/    # Colores y valores constantes
└── hooks/        # Hooks personalizados

assets/           # Imágenes, iconos y fuentes
```

## Desarrollo

Las pantallas se encuentran en `src/app`. Expo Router utiliza una estructura de rutas basada en archivos, por lo que los archivos dentro de esa carpeta representan las pantallas de la aplicación.

Para comprobar el código antes de compartir cambios:

```bash
bun run lint
```

## Recursos

- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de React Native](https://reactnative.dev/docs/getting-started)
