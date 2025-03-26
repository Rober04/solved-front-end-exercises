

# Ejercicio 1, Nomenclatura y tipo de variables

### Escribe una varible llamada `user name` utilizando las siguientes nomenclaturas:

- Camel case: const userName;
- Pascal case: const UserName;
- Snake case: const user_name;
- Kebab case: const user-name;

### Define los siguientes tipos de variables, di cuál utilizarías y por qué.

- Var: Permite definir variables a nivel global y permite la declaración de múltiples variables con el mismo nombre
- Let: Define variables en su nivel de encapsulamiento y no permite declarar variables con el mismo nombre sin importar el nivel de encapsulamiento
- Const: Define variables cuyo valor no puede ser modificado

Utilizaría const en la mayoría de los casos, ya que, de esa forma, sería mas sencillo evitar cambios accidentales de los valores de la variable. En
casos excepcionales, como contadores o booleans, usaría let para evitar posibles errores debido a la superposición de variables.