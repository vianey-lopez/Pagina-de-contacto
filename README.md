## Equipo: Java Force & Los Scripts (Equipo 2)

**Repo:** `https://github.com/vianey-lopez/Pagina-de-contacto`
**Entrega:** Miercoles 08 de Abril, 23:30

---

## Rubrica (3 criterios)
1. La pagina debe ser **responsiva** (desktop, tablet y movil)
2. La herramienta de desarrolladores **no da errores**
3. Tiene funciones de JavaScript de **validaciones adecuadas** para los datos introducidos.

---

## 1. Objetivo

Crear la pagina **"Contactanos"** de La 5ta Esencia como equipo, donde cada integrante trabaja en su propia rama de Git y hace commits individuales.

La pagina incluye:
- Formulario de contacto
- Validaciones de cada campo solicitado
- Envío de datos mediante Formspree
- Mensajes de exito o error de envio de datos
- Diseño responsive

---

## 2. Estructura del proyecto

```
Pagina-de-Contacto/
├── img/
│   ├── logo.jpeg       <- Logo de la marca
│   └── hero.jpg        <- Imagen hero que se utiliza de fondo
│
├── index.html          <- Pagina principal
│
├── styles.css      <- Estilos divididos por secciones
│ 
├── script.js      <- Funciones interactivas,dinamicas y funcionales divididas por secciones
│   
└── README.md    <- Este archivo
```

---

## 3. Convencion de ramas

Cada integrante trabaja en su propia rama:

```
Nombre-feature
```

| Integrante | Ramas                         |
|------------|-------------------------------|
| Alex       | `Alex-feature`                |
| Brenda     | `Brenda-feature`              |
| Chris      | `Christian-feature`           |
| Vianey     | `vianey-feature`              |
| Angel      | `Angel-feature`               |
| Daniel     | `Daniel-feature`              |
| Fer        | `FerAO-feature`               |
| Eduardo    | `eduardo-feature`             |
| Vero       | `Vero-feature`                |
| Victor     | `Victor-feature`              |
|------------|-------------------------------|

---

## 4. Flujo de trabajo en Git

### Paso 1: Clonar el repo
```bash
git clone https://github.com/vianey-lopez/Pagina-de-contacto/branches/all.git
cd Pagina-de-contacto
```

### Paso 2: Crear tu rama
```bash
git checkout main
git pull origin main
git checkout -b TU-NOMBRE-feature
```

### Paso 3: Hacer tu trabajo
Edita SOLO los archivos y secciones que te corresponden

### Paso 4: Commits
```bash
git add .
git commit -m "DESCRIPCION DE LO REALIZADO"
```

### Paso 5: Push de tu rama
```bash
git push origin TU-NOMBRE-feature
```

### Paso 6: Crear Pull Request
Ve a GitHub > Pull requests > "New Pull Request" > base: main - compare: TU-NOMBRE-feature

**NUNCA hagas push directo a main.**

---

## 6. Distribucion del trabajo (10 integrantes)

---

### Integrante: VERO (Veronica Ortiz)
**Realiza:** 
- Estructura base 
- Header 
- Footer
- Envio Formspree
- Readme
**Rama:** `Vero-feature`
**Archivos:** `index.html`, `styles.css` ,`script.js`,`Readme.md`
---

### Integrante: FER (Fernando Aquino)
**Realiza:** 
- Seccion Hero
- Efecto decorativo del hero
**Rama:** `FerAO-Feature`
**Archivos:** `index.html`,`styles.css`
---

### Integrante: BRENDA (Brenda Villar)
**Realiza:** 
- Introduccion de contacto
- Titulo de seccion e intro
**Rama:** `Brenda-feature`
**Archivos:** `index.html`,`styles.css`
---

### Integrante: CHRIS (Christian Escamilla)
**Realiza:** 
- Formulario principal
- Layout, variables, reset, hero y layout
- Funcion principal
**Rama:** `Christian-feature`
**Archivos:** `index.html`,`styles.css`,`script.js`
---

### Integrante: ALEX (Alejandro Gonzalez)
**Realiza:** 
- Campo Nombre
- Estilos base de inputs
- Validacion del campo Nombre
**Rama:** `Alex-feature`
**Archivos:** `index.html`,`styles.css`,`script.js`
---

### Integrante: DANIEL (Daniel Aguilar)
**Realiza:**
- Campo Correo electronico 
- Placeholder del campo email
- Validacion del campo Correo
**Rama:** `Daniel-feature`
**Archivos:** `index.html`,`styles.css`,`script.js`
---

### Integrante: EDUARDO (Eduardo Villedas)
**Realiza:** 
- Campo Telefono
- Placeholder telefono y animacion
- Validacion del campo Telefono
**Rama:** `eduardo-feature`
**Archivos:** `index.html`, `/styles.css`,`script.js`
---

### Integrante: ANGEL (Angel Juarez)
**Realiza:** 
- Campo Mensaje 
- Estilos del textarea
- Validacion del campo Mensaje
**Rama:** `Angel-feature`
**Archivos:** `index.html` , `/styles.css`,`script.js`
---

### Integrante: VICTOR (Victor Hernandez)
**Realiza:** 
- Boton Submit
- Status
- Funciones auxiliares de error
**Rama:** `Victor-feature`
**Archivos:** `index.html`, `styles.css`,`script.js`
---

### Integrante: VIANEY (Vianey Lopez)
**Realiza:** 
- Informacion de contacto
- Responsive
**Rama:** `vianey-feature`
**Archivos:** `index.html`,`styles.css` 
---

## 9. Link del repositorio
```
https://github.com/vianey-lopez/Pagina-de-contacto 
```
