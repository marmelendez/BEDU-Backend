# Sesion 5 | Desarrollo de aplicaciones web

1 de noviembre del 2022

## Express

Libreria
Framework para desarrollo web

Requisitos:

- node
- npm `npm instal --save express`

## ORM Object relational mapping

- Modelo: base de datos
- ORM: metodos para realizar operaciones

Almacenar/ leer objetos en tu db
Object: lenguaje de programación
Relational: base de datos
Mapping: union de ambas

- Para node: sequelize, postresql, sql server, sqlite, moongose

### Ventajas

1. No es necesario escribir SQL
2. Acelera proceso de CRUD
3. Seguridad (evita inyeccion de datos)

### Desventajas

1. Sintaxis nueva
2. Instalarlo (tal vez)
3. Perfomance mas lento que nativo

## ODM Object-Document Mapper

MongoDB guarda en documentos. Asociar tal documento con un objeto en un lenguaje de programación se llama Object-Document Mapper.

## HTTP Requests

- **GET** obtener datos
- **HEAD** pide respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta
- **POST** enviar una entidad a un recurso en específico
- **PUT** reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
- **DELETE** borra un recurso en específico.
- **CONNECT** establece un túnel hacia el servidor identificado por el recurso
- **OPTIONS** describir las opciones de comunicación para el recurso de destino.
- **TRACE** realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
- **PATCH** aplicar modificaciones parciales a un recurso.
