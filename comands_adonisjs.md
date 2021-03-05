# instalar bd postgres

```
npm install pg --save
```

# instalación de Adonis CLI

```
npm i -g @adonisjs/cli
```

# Creación de nuevo proyecto

```
adonis new test
```

# Abrimos el directorio y ejecutamos el servidor para desarrollo

```
cd test
adonis serve --dev
```

# Crear un proyecto solo API

```
adonis new MiAsombrosaAPI --apy-only
cd test
adonis start
```

# Ver rutas

```
adonis route:list
```

# Crear controladores

```
adonis make:controller User
```

```
adonis make:controller Proyecto
```

# Migrar base de datos

```
adonis migration:run
```

# Crear modelos

```
adonis make:model Proyecto -m
```

# Crear expeciones

```
adonis make:exception AccesoProhibido
```

# Crear proyecto API

```
adonis new project --api-only
```
