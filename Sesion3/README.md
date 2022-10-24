# Sesion 3 | Modelo asincronico y no bloqueante

25 de octubre del 2022

## Modelos de concurrencia

### Multihilos

_Thread:_ ejecutar bloque de instrucciones, atender peticiones de múltiples usuarios al mismo tiempo.
Lenguajes que soportan multihilos: Java o Python

Modelo asincrono y no bloqueante
Javascript trabajo con un solo hilo su modelo de concurrencia se basa en el loop de eventos (Event Loop).

### Asincronia en JS  

Callbacks: función que se ejecutará después de que otra lo haga  
Promises: objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:
- Pendiente
- Resuelta
- Rechazada  

Async / Await: mejora de promises

### Event loop

Call stack: funciones a ser llamadas  
Callback queue: callback de las funciones

## Operaciones

- **Operaciones de CPU**: consumen procesos de CPU
- **Operaciones de I/O (Entrada y Salida)**: esperan respuesta de peticion o recurso.
- **Operaciones Concurrentes**: simular la ejecucion de multiples tareas al mismo tiempo. CPU muy rapido.
- **Operaciones Paralelas**: ejecutar programas de manera simultanea,cores.
- Operaciones Bloqueantes: operaciones que tienen que completarse o se mantiene en espera.
- Operaciones No Bloqueantes: operaciones que devuelven inmediatamente el control a nuestra aplicación, independientemente del resultado de esta.

¿cuándo tendrá lugar la respuesta?:

- **Operaciones Síncronas**: sucede en el presente, espera resultado
- **Operaciones Asíncronas**: sucede en el futuro, no espera resultado

## Resources
