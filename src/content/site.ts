// All site copy lives here, in Spanish (es) and English (en).
// Edit text here — components just read from this file.
// This is the single source of truth for content, kept separate from layout/styling.

export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const nav = {
  es: {
    services: "Servicios",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    cta: "Agenda una llamada",
  },
  en: {
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
  },
};

export const hero = {
  es: {
    eyebrow: "GGCODE MX — Desarrollo web & crecimiento digital",
    title: "Sitios y sistemas web a la medida para negocios en México y el extranjero",
    subtitle:
      "Desarrollo full stack con Next.js, React y AWS — y, cuando el proyecto lo necesita, la estrategia de SEO y Meta Ads para que ese sitio también atraiga clientes.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Agenda una llamada",
  },
  en: {
    eyebrow: "GGCODE MX — Web Development & Digital Growth",
    title: "Custom web sites and systems for businesses in México and abroad",
    subtitle:
      "Full stack development with Next.js, React and AWS — plus SEO and Meta Ads strategy when the project needs to bring in customers, not just look good.",
    primaryCta: "View projects",
    secondaryCta: "Book a call",
  },
};

export const services = {
  es: {
    heading: "Servicios",
    intro: "Tres formas de trabajar juntos, según lo que tu negocio necesite hoy.",
    items: [
      {
        label: "01",
        title: "Desarrollo web",
        description:
          "Sitios corporativos, e-commerce y sistemas a la medida, construidos con Next.js, React, Node.js y bases de datos MongoDB/MySQL. Del diseño al despliegue en Vercel o AWS.",
      },
      {
        label: "02",
        title: "Crecimiento digital",
        description:
          "SEO técnico y de contenido, campañas de Meta Ads y estrategia de redes para que tu sitio no solo exista, sino que traiga clientes.",
      },
      {
        label: "03",
        title: "Automatización con IA",
        badge: "Nuevo",
        description:
          "Agentes y flujos automatizados para tareas repetitivas de tu negocio: desde atención a clientes hasta procesamiento de datos.",
      },
    ],
  },
  en: {
    heading: "Services",
    intro: "Three ways to work together, depending on what your business needs right now.",
    items: [
      {
        label: "01",
        title: "Web Development",
        description:
          "Corporate sites, e-commerce and custom systems, built with Next.js, React, Node.js and MongoDB/MySQL. From design to deployment on Vercel or AWS.",
      },
      {
        label: "02",
        title: "Digital Growth",
        description:
          "Technical and content SEO, Meta Ads campaigns and social strategy so your site doesn't just exist — it brings in customers.",
      },
      {
        label: "03",
        title: "AI Automation",
        badge: "New",
        description:
          "Agents and automated workflows for repetitive business tasks, from customer support to data processing.",
      },
    ],
  },
};

export type Project = {
  slug: string;
  client: string;
  location?: string;
  tags: string[];
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  featured?: boolean;
  note?: string;
  images?: { src: string; alt: string }[];
};

export const projects: Record<Locale, { heading: string; intro: string; items: Project[] }> = {
  es: {
    heading: "Proyectos destacados",
    intro: "Una muestra de con quién trabajo y qué tipo de problemas resuelvo.",
    items: [
      {
        slug: "cortez-berlanga",
        client: "Cortez Berlanga",
        location: "Monterrey, México",
        tags: ["Next.js", "SEO", "CRM a la medida"],
        summary: "Transformación digital de un despacho legal",
        problem:
          "Despacho legal con presencia en Monterrey, junto con sus marcas CB Tax (contable/fiscal) y CB Talent (reclutamiento), necesitaba una presencia digital moderna y un sistema interno propio.",
        solution:
          "Modernicé el sitio principal, implementé SEO técnico y de contenido para posicionar palabras clave como \"abogados [área] en Monterrey\", y construí un CRM interno a la medida (React + Next.js + MongoDB) para la gestión de casos y clientes. Para CB Talent desarrollé además un sitio completo en Next.js + Payload CMS con contenido bilingüe.",
        stack: ["Next.js", "React", "Payload CMS", "MongoDB Atlas", "Node.js"],
        result: "Resultado: [posiciones ganadas en buscador / casos gestionados desde el CRM]",
        featured: true,
        note: "Próximo lanzamiento — imágenes y enlaces se agregarán próximamente",
      },
      {
        slug: "sx2-constructora",
        client: "Sx2 Constructora",
        tags: ["Next.js", "MongoDB", "Sistema a la medida"],
        summary: "Sistema a la medida para gestión de proyectos y rentas",
        problem:
          "Sx2 Constructora necesitaba un sistema propio para administrar sus proyectos de construcción, además de llevar el control de rentas de inmuebles: inquilinos, ingresos y demás operación diaria.",
        solution:
          "Desarrollé un sistema a la medida con Next.js, MongoDB y Tailwind CSS para la gestión integral de proyectos, control de rentas de inmuebles, inquilinos e ingresos, desplegado en Vercel.",
        stack: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
        result: "Resultado: [proyectos gestionados / inmuebles bajo control]",
        images: [
          { src: "/projects/sx2/01-login.png", alt: "Pantalla de acceso del sistema Sx2" },
          { src: "/projects/sx2/02-dashboard.png", alt: "Dashboard de gestión de cobros con totales y unidades" },
          { src: "/projects/sx2/03-zona-detalle.png", alt: "Detalle de zona con lista de unidades" },
          { src: "/projects/sx2/04-unidad-detalle.png", alt: "Detalle de unidad con registro de pagos" },
          { src: "/projects/sx2/05-historial.png", alt: "Historial de movimientos y pagos" },
        ],
      },
      {
        slug: "el-machete",
        client: "El Machete Mexican Grill",
        location: "Antioch, CA, EE.UU.",
        tags: ["Next.js", "PostgreSQL", "Sistema interno"],
        summary: "Sistema de control interno para un restaurante en EE.UU.",
        problem:
          "Un restaurante mexicano en California operaba sin un sistema propio para llevar el control de pedidos, meseros, ingresos, gastos y métricas del negocio.",
        solution:
          "Desarrollé un sistema de control interno a la medida con Next.js, React y PostgreSQL para gestionar pedidos, meseros, ingresos, gastos y métricas del restaurante.",
        stack: ["Next.js", "React", "PostgreSQL"],
        result: "Resultado: [pedidos procesados / horas ahorradas en control administrativo]",
        featured: true,
        images: [
          { src: "/projects/el-machete/01-login.png", alt: "Pantalla de acceso del sistema El Machete" },
          { src: "/projects/el-machete/02-nuevo-pedido.png", alt: "Pantalla de nuevo pedido con el menú de burritos" },
          { src: "/projects/el-machete/03-modal-producto.png", alt: "Modal para agregar un producto al pedido" },
          { src: "/projects/el-machete/04-pedido-actual.png", alt: "Panel de pedido actual con método de pago" },
          { src: "/projects/el-machete/05-historial.png", alt: "Historial de pedidos" },
          { src: "/projects/el-machete/06-tacos-pedido.png", alt: "Menú de tacos con pedido en construcción" },
          { src: "/projects/el-machete/07-pedidos-activos.png", alt: "Listado de pedidos activos" },
          { src: "/projects/el-machete/08-dashboard.png", alt: "Dashboard con ventas del día" },
          { src: "/projects/el-machete/09-gestion-menu.png", alt: "Gestión de menú y productos" },
          { src: "/projects/el-machete/10-reportes.png", alt: "Reportes de ventas con filtros y gráficas" },
        ],
      },
    ],
  },
  en: {
    heading: "Featured Projects",
    intro: "A sample of who I work with and the kind of problems I solve.",
    items: [
      {
        slug: "cortez-berlanga",
        client: "Cortez Berlanga",
        location: "Monterrey, Mexico",
        tags: ["Next.js", "SEO", "Custom CRM"],
        summary: "Digital transformation for a law firm",
        problem:
          "A law firm based in Monterrey, along with its CB Tax (accounting/tax) and CB Talent (recruitment) brands, needed a modern digital presence and its own internal system.",
        solution:
          "I modernized the main site, implemented technical and content SEO to rank for practice-area keywords, and built a custom internal CRM (React + Next.js + MongoDB) for case and client management. For CB Talent, I also built a full bilingual site on Next.js + Payload CMS.",
        stack: ["Next.js", "React", "Payload CMS", "MongoDB Atlas", "Node.js"],
        result: "Result: [search rankings gained / cases managed through the CRM]",
        featured: true,
        note: "Coming soon — images and links will be added shortly",
      },
      {
        slug: "sx2-constructora",
        client: "Sx2 Constructora",
        tags: ["Next.js", "MongoDB", "Custom system"],
        summary: "Custom system for project and rental management",
        problem:
          "Sx2 Constructora needed its own system to manage its construction projects, along with control over property rentals: tenants, income, and day-to-day operations.",
        solution:
          "I built a custom system with Next.js, MongoDB and Tailwind CSS for end-to-end project management, property rental control, tenants and income, deployed on Vercel.",
        stack: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel"],
        result: "Result: [projects managed / properties under control]",
        images: [
          { src: "/projects/sx2/01-login.png", alt: "Sx2 system login screen" },
          { src: "/projects/sx2/02-dashboard.png", alt: "Collections dashboard with totals and units" },
          { src: "/projects/sx2/03-zona-detalle.png", alt: "Zone detail with list of units" },
          { src: "/projects/sx2/04-unidad-detalle.png", alt: "Unit detail with payment registration" },
          { src: "/projects/sx2/05-historial.png", alt: "History of transactions and payments" },
        ],
      },
      {
        slug: "el-machete",
        client: "El Machete Mexican Grill",
        location: "Antioch, CA, USA",
        tags: ["Next.js", "PostgreSQL", "Internal system"],
        summary: "Internal control system for a U.S. restaurant",
        problem:
          "A Mexican restaurant in California was running without its own system to track orders, waitstaff, income, expenses and business metrics.",
        solution:
          "I built a custom internal control system with Next.js, React and PostgreSQL to manage orders, waitstaff, income, expenses and restaurant metrics.",
        stack: ["Next.js", "React", "PostgreSQL"],
        result: "Result: [orders processed / hours saved on administrative control]",
        featured: true,
        images: [
          { src: "/projects/el-machete/01-login.png", alt: "El Machete system login screen" },
          { src: "/projects/el-machete/02-nuevo-pedido.png", alt: "New order screen with the burritos menu" },
          { src: "/projects/el-machete/03-modal-producto.png", alt: "Modal for adding a product to the order" },
          { src: "/projects/el-machete/04-pedido-actual.png", alt: "Current order panel with payment method" },
          { src: "/projects/el-machete/05-historial.png", alt: "Order history" },
          { src: "/projects/el-machete/06-tacos-pedido.png", alt: "Tacos menu with an order in progress" },
          { src: "/projects/el-machete/07-pedidos-activos.png", alt: "List of active orders" },
          { src: "/projects/el-machete/08-dashboard.png", alt: "Dashboard with today's sales" },
          { src: "/projects/el-machete/09-gestion-menu.png", alt: "Menu and product management" },
          { src: "/projects/el-machete/10-reportes.png", alt: "Sales reports with filters and charts" },
        ],
      },
    ],
  },
};

export const about = {
  es: {
    heading: "Sobre mí",
    body: "Soy Nallely, Ingeniera en Sistemas Computacionales (TecNM, Campus Ciudad Guzmán) y fundadora de GGCODE MX. Desde 2022 ayudo a negocios de distintas industrias — legal, retail, servicios, restaurantes — a construir su presencia digital, desde el sitio web hasta la estrategia que trae clientes. Antes de ser freelance trabajé como desarrolladora de aplicaciones web y como analista de datos, así que además de construir, me gusta medir si lo que construyo realmente funciona.",
    stackHeading: "Con lo que trabajo",
    stack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
      "MongoDB", "MySQL", "Payload CMS", "AWS", "Vercel", "SEO", "Meta Ads",
    ],
  },
  en: {
    heading: "About me",
    body: "I'm Nallely, a Computer Systems Engineer (TecNM, Ciudad Guzmán Campus) and founder of GGCODE MX. Since 2022 I've helped businesses across industries — legal, retail, services, restaurants — build their digital presence, from the website itself to the strategy that brings in customers. Before freelancing, I worked as a web application developer and as a data analyst, so beyond building things, I care about measuring whether what I build actually works.",
    stackHeading: "What I work with",
    stack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
      "MongoDB", "MySQL", "Payload CMS", "AWS", "Vercel", "SEO", "Meta Ads",
    ],
  },
};

export const contact = {
  es: {
    heading: "¿Tienes un proyecto en mente?",
    body: "Escríbeme y te respondo en menos de 24 horas.",
    email: "ggcodemx@gmail.com",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Cuéntame sobre tu proyecto",
    formSubmit: "Enviar mensaje",
    phoneDisplay: "341 167 8809",
    whatsappLabel: "Cotizar por WhatsApp",
    whatsappMessage: "Hola, me gustaría cotizar un proyecto.",
    callLabel: "Llamar",
  },
  en: {
    heading: "Have a project in mind?",
    body: "Send me a message and I'll reply within 24 hours.",
    email: "ggcodemx@gmail.com",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Tell me about your project",
    formSubmit: "Send message",
    phoneDisplay: "341 167 8809",
    whatsappLabel: "Get a quote on WhatsApp",
    whatsappMessage: "Hi, I'd like to get a quote for a project.",
    callLabel: "Call",
  },
};

export const footer = {
  es: {
    tagline: "Desarrollo web & crecimiento digital, desde Jalisco para el mundo.",
    rights: "Todos los derechos reservados.",
  },
  en: {
    tagline: "Web development & digital growth, from Jalisco to the world.",
    rights: "All rights reserved.",
  },
};

export const siteMeta = {
  name: "GGCODE MX",
  author: "Nallely Figueroa",
  email: "ggcodemx@gmail.com",
  location: "Ciudad Guzmán, Jalisco, México",
  linkedin: "https://www.linkedin.com/in/nallely-figueroa-223011274/",
  // Mexico country code (52) + local number, no spaces — used to build wa.me / tel: links.
  whatsappNumber: "523411678809",
};
