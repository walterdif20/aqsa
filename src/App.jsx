import { useState } from 'react'
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  Factory,
  Gauge,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Wrench,
  X,
} from 'lucide-react'

const asset = (name) => `${import.meta.env.BASE_URL}arenados/${name}`
const whatsappHref =
  'https://wa.me/5492262360520?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto%20de%20arenado%20o%20pintura%20industrial.'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

const stats = [
  { value: '1989', label: 'al servicio de nuestros clientes' },
  { value: '700 m2', label: 'de terreno en nuestra planta' },
  { value: '250 m2', label: 'cubiertos para trabajar' },
]

const services = [
  {
    icon: Hammer,
    title: 'Arenado industrial',
    text: 'Tratamos superficies para remover óxido, pintura o contaminantes y dejar el metal preparado para nuevas etapas.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura industrial',
    text: 'Aplicamos pintura y terminaciones sobre piezas, tolvas, carrocerías y estructuras con equipos Airless Graco.',
  },
  {
    icon: Factory,
    title: 'Tratamiento y revestimiento',
    text: 'Recuperamos, protegemos y extendemos la vida útil de metales sometidos a uso intenso.',
  },
  {
    icon: Truck,
    title: 'Piezas y equipos de trabajo',
    text: 'Trabajamos sobre tanques, tolvas, carrocerías, estructuras y equipamiento industrial.',
  },
]

const safetyItems = [
  {
    icon: HardHat,
    title: 'Personal idóneo',
    text: 'Contamos con obreros capacitados en cada labor y supervisamos los trabajos con Ingenieros en Seguridad.',
  },
  {
    icon: ShieldCheck,
    title: 'Cobertura laboral',
    text: 'Trabajamos con personal registrado, seguro de vida personal y de altura, ART y póliza contra todo riesgo.',
  },
  {
    icon: Building2,
    title: 'Infraestructura dedicada',
    text: 'Contamos con medios técnicos, servicios e instalaciones propios para desarrollar nuestra actividad.',
  },
]

const equipment = [
  {
    title: 'Equipos para pintar',
    items: ['Airless', 'Graco'],
  },
  {
    title: 'Tolvas de arenado',
    items: ['Equipos para nuestros trabajos de arenado'],
  },
  {
    title: 'Blasting',
    items: ['Picos', 'Mangueras', 'Acoples'],
  },
  {
    title: 'Compresores',
    items: ['Ingersoll Rand', 'Sullair', 'Kaeser', 'Atlas Copco'],
  },
  {
    title: 'Tableros eléctricos',
    items: ['Homologados'],
  },
]

const gallery = [
  {
    src: 'a003.jpg',
    title: 'Trabajamos bajo techo',
  },
  {
    src: 'a011.jpg',
    title: 'Intervenimos tanques',
  },
  {
    src: '05.jpg',
    title: 'Pintamos tolvas',
  },
  {
    src: '10.jpg',
    title: 'Terminamos equipos',
  },
  {
    src: 'a013.jpg',
    title: 'Trabajamos en planta',
  },
  {
    src: 'a008.jpg',
    title: 'Preparamos estructuras metálicas',
  },
]

const clients = [
  'Hidracil S.A.',
  'Cormetal',
  'Lifter',
  'Nequen',
  'La Cruz del Moro',
  'Alea y Cia S.A.',
  'G y F Castro',
  'Ciancaglini',
]

const contactLinks = [
  {
    icon: Phone,
    label: '02262 470634',
    detail: 'Atendemos consultas por este teléfono',
    href: 'tel:+542262470634',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp 02262 360520',
    detail: 'Escribinos para pedir presupuesto',
    href: whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: 'arenados_quequen_gongora@live.com.ar',
    detail: 'Recibimos consultas por email',
    href: 'mailto:arenados_quequen_gongora@live.com.ar',
  },
]

const socialLinks = [
  {
    icon: AtSign,
    label: 'Nuestro Instagram',
    href: 'https://www.instagram.com/arenadosquequen_sa/',
  },
  {
    icon: ExternalLink,
    label: 'Nuestro Facebook',
    href: 'https://www.facebook.com/p/Arenados-Quequ%C3%A9n-SA-100046536644468/',
  },
  {
    icon: ExternalLink,
    label: 'Nuestro sitio actual',
    href: 'https://www.arenadosquequen.com.ar/',
  },
]

const faqs = [
  {
    question: '¿Qué trabajos realizamos?',
    answer:
      'Realizamos arenado, tratamiento y revestimiento de metales, además de pintura industrial.',
  },
  {
    question: '¿Dónde estamos ubicados?',
    answer:
      'Estamos en Calle 542 Número 1596, Quequén (7631), salida a ruta Mar del Plata, a metros de Caminera de Quequén.',
  },
  {
    question: '¿Publicamos precios?',
    answer:
      'No publicamos precios generales: cotizamos cada trabajo por teléfono o email según la pieza, superficie o equipo.',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`site-header${isMenuOpen ? ' is-menu-open' : ''}`}>
        <nav className="nav-bar" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>
            <img src={asset('Logo.png')} alt="" aria-hidden="true" />
            <span>
              <strong>AQSA</strong>
              <small>Arenados Quequén S.A.</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2.5} aria-hidden="true" />
            )}
          </button>

          <div
            className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
          >
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            className="nav-cta"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Pedinos presupuesto
            <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="inicio">
        <section
          className="hero"
          aria-labelledby="hero-title"
          style={{ '--hero-image': `url(${asset('a003.jpg')})` }}
        >
          <div className="hero-content">
            <p className="eyebrow">
              <BadgeCheck size={16} strokeWidth={2.5} aria-hidden="true" />
              Trabajamos desde 1989 en Quequén
            </p>
            <h1 id="hero-title">Arenamos, tratamos y revestimos metales</h1>
            <p className="hero-copy">
              Contamos con infraestructura propia, personal capacitado y equipos dedicados para
              preparar, recuperar y proteger superficies metálicas.
            </p>
            <div className="hero-actions" aria-label="Acciones principales">
              <a
                className="button button-primary"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Pedinos presupuesto
                <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#trabajos">
                Conocé nuestros trabajos
              </a>
            </div>
          </div>

          <div className="hero-stat-strip" aria-label="Datos destacados">
            {stats.map((item) => (
              <div className="hero-stat" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="intro-band" aria-label="Resumen de actividad">
          <div className="section-inner intro-grid">
            <div>
              <p className="eyebrow">
                <Sparkles size={16} strokeWidth={2.5} aria-hidden="true" />
                Arenados Quequén S.A.
              </p>
              <h2>Contamos con una planta preparada para trabajos técnicos sobre metal.</h2>
            </div>
            <p>
              Contamos con medios técnicos, servicios e instalaciones para desarrollar nuestra
              actividad. En nuestras redes mostramos trabajos de arenado y pintura industrial en
              Necochea, Quequén y zona.
            </p>
          </div>
        </section>

        <section className="section" id="servicios" aria-labelledby="services-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">
                <Wrench size={16} strokeWidth={2.5} aria-hidden="true" />
                Servicios
              </p>
              <h2 id="services-title">Preparamos, recuperamos y protegemos superficies.</h2>
              <p>
                Nos enfocamos en arenado, tratamiento y revestimiento de metales, con trabajos
                documentados sobre piezas, estructuras y equipos industriales.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article className="service-card" key={service.title}>
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={25} strokeWidth={2.2} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section safety-section" id="seguridad" aria-labelledby="safety-title">
          <div className="section-inner split-grid">
            <div className="sticky-copy">
              <p className="eyebrow">
                <ShieldCheck size={16} strokeWidth={2.5} aria-hidden="true" />
                Seguridad y confianza
              </p>
              <h2 id="safety-title">Controlamos cada trabajo con una estructura formal.</h2>
              <p>
                Contamos con personal registrado, seguros correspondientes, ART y supervisión de
                Ingenieros en Seguridad para los trabajos que realizamos.
              </p>
            </div>

            <div className="safety-list">
              {safetyItems.map((item) => {
                const Icon = item.icon

                return (
                  <article className="safety-item" key={item.title}>
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section equipment-section" id="equipos" aria-labelledby="equipment-title">
          <div className="section-inner equipment-grid">
            <div className="equipment-image-wrap">
              <img
                src={asset('a011.jpg')}
                alt="Trabajamos sobre tanques industriales con equipo de Arenados Quequén"
              />
            </div>

            <div>
              <p className="eyebrow">
                <Gauge size={16} strokeWidth={2.5} aria-hidden="true" />
                Nuestro equipamiento
              </p>
              <h2 id="equipment-title">Trabajamos con herramientas para ritmo industrial.</h2>
              <div className="equipment-list">
                {equipment.map((group) => (
                  <article className="equipment-item" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(' / ')}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="trabajos" aria-labelledby="gallery-title">
          <div className="section-inner">
            <div className="section-heading gallery-heading">
              <p className="eyebrow">
                <ClipboardCheck size={16} strokeWidth={2.5} aria-hidden="true" />
                Mostramos trabajos reales
              </p>
              <h2 id="gallery-title">Compartimos fotos de nuestros trabajos y equipos.</h2>
              <p>
                Usamos imágenes reales para mostrar escala, materiales y tipos de intervención sin
                recurrir a fotografía genérica.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <figure className={index === 0 ? 'gallery-item gallery-item-large' : 'gallery-item'} key={item.src}>
                  <img src={asset(item.src)} alt={item.title} loading={index === 0 ? 'eager' : 'lazy'} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section clients-section" id="clientes" aria-labelledby="clients-title">
          <div className="section-inner clients-grid">
            <div>
              <p className="eyebrow">
                <UsersRound size={16} strokeWidth={2.5} aria-hidden="true" />
                Clientes con los que trabajamos
              </p>
              <h2 id="clients-title">Trabajamos para empresas publicadas en nuestro sitio.</h2>
              <p>
                Mostramos referencias publicadas sin inventar testimonios ni resultados no
                documentados.
              </p>
            </div>

            <div className="client-list" aria-label="Listado de clientes con los que trabajamos">
              {clients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="section-inner faq-grid">
            <div>
              <p className="eyebrow">
                <ChevronRight size={16} strokeWidth={2.5} aria-hidden="true" />
                Te contamos lo importante
              </p>
              <h2 id="faq-title">Compartimos información clave antes de consultar.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    {faq.question}
                    <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contacto"
          aria-labelledby="contact-title"
          style={{ '--contact-image': `url(${asset('a001.jpg')})` }}
        >
          <div className="section-inner contact-grid">
            <div>
              <p className="eyebrow">
                <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
                Contacto
              </p>
              <h2 id="contact-title">Cotizamos trabajos para piezas, estructuras y equipos.</h2>
              <p>
                Estamos en Calle 542 Número 1596, Quequén (7631), salida a ruta Mar del Plata, a
                metros de Caminera de Quequén.
              </p>
              <div className="contact-actions" aria-label="Acciones de contacto">
                <a className="button button-primary" href="tel:+542262470634">
                  Llamanos ahora
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a className="button button-secondary on-dark" href="mailto:arenados_quequen_gongora@live.com.ar">
                  Escribinos por email
                </a>
              </div>
            </div>

            <div className="contact-panel" aria-label="Canales por los que atendemos consultas">
              {contactLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    className="contact-link"
                    href={link.href}
                    key={link.label}
                    aria-label={`${link.label}: ${link.detail}`}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                  >
                    <span className="card-icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </span>
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.detail}</small>
                    </span>
                  </a>
                )
              })}

              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Calle+542+1596+Quequen+Buenos+Aires"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={18} strokeWidth={2.4} aria-hidden="true" />
                Cómo llegar
                <ExternalLink size={16} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-grid">
          <a className="brand footer-brand" href="#inicio" aria-label="Volver al inicio">
            <img src={asset('Logo.png')} alt="" aria-hidden="true" />
            <span>
              <strong>AQSA</strong>
              <small>Arenados Quequén S.A.</small>
            </span>
          </a>

          <div className="social-list" aria-label="Nuestros enlaces">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  <Icon size={17} strokeWidth={2.4} aria-hidden="true" />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
