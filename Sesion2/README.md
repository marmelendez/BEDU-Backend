# Sesion 2 | Módulos esenciales

20 de octubre del 2022

## Módulo fs

Nos permite subir, editar, eliminar y crear.

`const fs = require('fs');`

### Métodos

1. Crear archivo `.appendFile()`
   - asincronico, crear nuevo archivo si no existe, parámetros (path<nombre_archivo>, data<datos_a_agregar>, options, callback)
2. Leer archivo `fs.readFile( filename, encoding, callback_function)`
   - encoding default = UTF8
   - regresa contenidos en archivo o error
3. Actualizar archivo `fs.writeFile(<archivo>, <contenido_nuevo>, callback)`
4. Renombrar archivo `fs.rename (oldPath, newPath, callback)`
5. Eliminar archivo `fs.unlink( path, callback )`

## Servidores

- correo
- proxy: mejorar privacidad, ocultar info de cliente
- ftp: enviar archivo ordenador -> servidor O descargar servidor -> ordenador
- base de datos: almacen y gestion
- web: archivos de página web, http

## Resources
