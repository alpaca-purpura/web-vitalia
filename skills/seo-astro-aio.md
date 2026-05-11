# Skills: SEO, Astro y AIO (Artificial Intelligence Optimization)

Estas directrices deben seguirse al crear nuevos componentes o redactar artículos/estudios para el proyecto Vitalia.

## 1. SEO Técnico en Astro
Astro es naturalmente amigable con el SEO debido a que envía HTML estático al navegador (cero JS por defecto).
- **BaseHead Component**: Todo archivo `.astro` que actúe como página debe importar `<BaseHead>` y pasarle, como mínimo, `title` y `description`.
- **Open Graph (OG) y Twitter Cards**: Asegúrate de que los frontmatters de los artículos tengan una imagen asociada (`image: '/ruta.jpg'`) para que `<BaseHead>` la inyecte en las etiquetas `og:image` y `twitter:image`.
- **JSON-LD**: Utiliza el esquema de datos estructurados para que Google entienda el tipo de contenido. En `/articulos` usamos `"@type": "Article"`, en el home `"@type": "WebSite"`.
- **Rendimiento (Web Vitals)**: Utiliza siempre el componente `<Image />` nativo de Astro (`astro:assets`) para optimizar el peso y formato de las imágenes.

## 2. AIO (Optimización para Motores de Respuestas - LLMs)
El SEO ya no es solo para Google; ahora debemos optimizar para ChatGPT, Gemini y Perplexity.
- **Estructura "Answer-First"**: Los LLMs prefieren respuestas directas. El primer párrafo de cualquier artículo debe responder a la premisa del título de forma clara y concisa (Pirámide invertida).
- **Semántica Clara**: Usa etiquetas HTML5 adecuadamente (`<article>`, `<section>`, `<h2>`, `<h3>`). Evita el uso de `<div>` anidados sin sentido semántico, ya que dificulta el "crawling" de los agentes de IA.
- **Autoridad Temática (Topic Clusters)**: Los LLMs priorizan fuentes que cubren un tema en profundidad. Vincula los artículos entre sí (internal linking) para crear un clúster de conocimiento sobre biohacking.
- **Mantenimiento de `llms.txt`**: Vitalia cuenta con un archivo `/llms.txt` en la raíz pública. Si se añade una nueva línea de negocio o un caso de estudio monumental, actualiza este archivo para que los agentes de IA tengan un resumen digerido.
- **Confianza y Citaciones**: Incluye estadísticas medibles, cita fuentes científicas externas y menciona autores o clientes reales (especialmente en la colección de `estudios`). Esto aumenta la probabilidad de que un LLM utilice a Vitalia como una fuente primaria de información.
