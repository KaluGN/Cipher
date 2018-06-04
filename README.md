# Cifrado César

## Preámbulo

El cliente solicita una herramienta para poder cifrar mensajes y enviarlos por cualquier servicio de mensajería movil, neccesita la herramienta porque se acerca la fecha del cumpleaños de su pareja y está coordinando con amistades y familiares una fiesta sorpresa 😎 pero teme que cuando suene la alarma y no sea ella quien se levante, él pueda leer los mensajes que salen el salvapantallas de su móvil y así se arruinaría la sorpresa.

## Principales usuarios del producto:

La aplicación fue desarrollada para el cliente según las siguientes especificaciones:

- Poder cifrar mensajes para poderlos enviar a un chat grupal.

- Descifrar los mensajes cifrados que recibimos en el chat grupal.

El usuario podrá compartir el [link de la aplicación](https://kalugn.github.io/lim-2018-05-bc-core-am-cipher/src/) y definir una clave (número de saltos) para los dos procesos (cifrar y descifrar).

## Cuáles son los objetivos de estos usuarios en relación con el producto

El objetivo principal de los usuarios es:

- Poder comunicarse por chat a través de mensajes cifrados.

## Resolución de problema

La aplicación que se desarrolló fue el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), el cual es uno de los primeros métodos de cifrado conocidos históricamente.

El cifrado consiste en mover cada letra en una cantidad de espacios en el alfabeto.

Por ejemplo si usáramos un desplazamiento de 2:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: C D E F G H I J K L M N O P Q R S T U V W X Y Z A B 

![caeser-cipher](http://4.bp.blogspot.com/-UakQPeRi7fw/T8g6ppT1gAI/AAAAAAAAAEg/YMZ9pj-0d_w/s1600/cifrador_cesar+copia.png)


## PROCESO DE USO DE LA APP 

### Para el cifrado: 
* Insertar el mensaje (texto) que queremos cifrar.
* Elegir un número que indique cuántas posiciones queremos que el cifrado
  desplace cada caracter.
* Click en la opción de cifrar.
* ver el resultado del mensaje cifrado

### Para el cifrado:
* Ingresar el mensaje (texto) cifrado a descifrar.
* Elegir el número que indique con cuántas posiciones se ralizó el cifrado.
* Click en la opción de descifrar.
* Ver el resultado del mensaje descifrado.