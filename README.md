# Registro de alumnos 

Aplicación sencilla para registrar alumnos con un formulario y validar los datos antes de guardarlos.

## Tecnologías

- React
- TypeScript
- TailwindCSS
- Zod

## Despliegue

```bash
git clone https://github.com/IsmaelSouCa/act23.git
cd act23
npm install
npm run dev
```

## Diccionario de datos

| Nombre del Campo | Tipo de Dato | Reglas de Validación |
|---|---|---|
| nombre | string | Obligatorio y mínimo 3 caracteres |
| email | string | Obligatorio y con formato válido |
| curso | string | Obligatorio y solo puede ser "1 DAM" o "2 DAM" |

## Autoría

desarrollado por [**Ismael**](https://github.com/IsmaelSouCa)