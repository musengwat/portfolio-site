var e = Object.defineProperty,
  s = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  r = (s, i, a) =>
    i in s ? e(s, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (s[i] = a),
  l = (e, s) => {
    for (var i in s || (s = {})) t.call(s, i) && r(e, i, s[i]);
    if (a) for (var i of a(s)) n.call(s, i) && r(e, i, s[i]);
    return e;
  },
  c = (e, a) => s(e, i(a)),
  o = (e, s, i) =>
    new Promise((a, t) => {
      var n = e => {
          try {
            l(i.next(e));
          } catch (s) {
            t(s);
          }
        },
        r = e => {
          try {
            l(i.throw(e));
          } catch (s) {
            t(s);
          }
        },
        l = e => (e.done ? a(e.value) : Promise.resolve(e.value).then(n, r));
      l((i = i.apply(e, s)).next());
    });
import {
  j as d,
  B as m,
  p as h,
  s as u,
  u as p,
  t as _,
  a as x,
  b as v,
  S as j,
  c as g,
} from './index.7ccdaa71.js';
import { r as b } from './vendor.45d6718b.js';
import { m as y, A as f } from './animation.48638cd2.js';
import {
  c as N,
  D as w,
  b as k,
  L as C,
  C as S,
  d as D,
  U as z,
  Z as I,
  e as P,
  f as M,
  P as A,
  g as F,
  E,
  h as L,
  i as T,
  j as R,
  k as $,
  l as O,
  B,
  m as W,
  n as V,
  o as G,
  p as H,
  q as U,
  F as J,
  r as q,
  s as K,
  t as Q,
  u as Y,
  v as X,
  w as Z,
  x as ee,
  y as se,
} from './icons.c7f58f5c.js';
import { b as ie } from './router.ffcab203.js';
import { p as ae, g as te, c as ne } from './projects.4303f567.js';
const re = () => {
    const e = b.useRef(null),
      s = b.useRef(null),
      i = b.useRef([]),
      a = b.useRef({ x: 0, y: 0 });
    return (
      b.useEffect(() => {
        const t = e.current;
        if (!t) return;
        const n = t.getContext('2d');
        let r = i.current;
        const l = () => {
          (t.width = window.innerWidth), (t.height = window.innerHeight);
        };
        class c {
          constructor() {
            (this.x = Math.random() * t.width),
              (this.y = Math.random() * t.height),
              (this.vx = 0.5 * (Math.random() - 0.5)),
              (this.vy = 0.5 * (Math.random() - 0.5)),
              (this.radius = 2 * Math.random() + 1),
              (this.opacity = 0.5 * Math.random() + 0.2),
              (this.pulse = 0.02 * Math.random() + 0.01),
              (this.pulseDirection = 1);
          }
          update() {
            (this.x += this.vx),
              (this.y += this.vy),
              (this.x < 0 || this.x > t.width) && (this.vx *= -1),
              (this.y < 0 || this.y > t.height) && (this.vy *= -1),
              (this.x = Math.max(0, Math.min(t.width, this.x))),
              (this.y = Math.max(0, Math.min(t.height, this.y))),
              (this.opacity += this.pulse * this.pulseDirection),
              (this.opacity >= 0.7 || this.opacity <= 0.1) && (this.pulseDirection *= -1);
            const e = a.current.x - this.x,
              s = a.current.y - this.y,
              i = Math.sqrt(e * e + s * s);
            if (i < 100) {
              const a = (100 - i) / 100;
              (this.vx += (e / i) * a * 0.01), (this.vy += (s / i) * a * 0.01);
            }
            (this.vx *= 0.99), (this.vy *= 0.99);
          }
          draw() {
            n.save(),
              (n.globalAlpha = this.opacity),
              n.beginPath(),
              n.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
              (n.fillStyle =
                getComputedStyle(document.documentElement).getPropertyValue(
                  '--color-primary-400'
                ) || '#6366f1'),
              n.fill(),
              n.restore();
          }
        }
        const o = () => {
            r.length = 0;
            const e = Math.min(100, Math.floor((t.width * t.height) / 1e4));
            for (let s = 0; s < e; s++) r.push(new c());
          },
          d = () => {
            n.clearRect(0, 0, t.width, t.height),
              r.forEach(e => {
                e.update(), e.draw();
              }),
              (() => {
                n.save();
                for (let e = 0; e < r.length; e++)
                  for (let s = e + 1; s < r.length; s++) {
                    const i = r[e].x - r[s].x,
                      a = r[e].y - r[s].y,
                      t = Math.sqrt(i * i + a * a);
                    if (t < 120) {
                      const i = ((120 - t) / 120) * 0.2;
                      (n.globalAlpha = i),
                        n.beginPath(),
                        n.moveTo(r[e].x, r[e].y),
                        n.lineTo(r[s].x, r[s].y),
                        (n.strokeStyle =
                          getComputedStyle(document.documentElement).getPropertyValue(
                            '--color-primary-300'
                          ) || '#a5b4fc'),
                        (n.lineWidth = 1),
                        n.stroke();
                    }
                  }
                n.restore();
              })(),
              (s.current = requestAnimationFrame(d));
          },
          m = e => {
            const s = t.getBoundingClientRect();
            (a.current.x = e.clientX - s.left), (a.current.y = e.clientY - s.top);
          },
          h = e => {
            e.preventDefault();
            const s = t.getBoundingClientRect(),
              i = e.touches[0];
            (a.current.x = i.clientX - s.left), (a.current.y = i.clientY - s.top);
          };
        return (
          l(),
          o(),
          d(),
          window.addEventListener('resize', () => {
            l(), o();
          }),
          t.addEventListener('mousemove', m),
          t.addEventListener('touchmove', h, { passive: !1 }),
          () => {
            s.current && cancelAnimationFrame(s.current),
              window.removeEventListener('resize', l),
              t.removeEventListener('mousemove', m),
              t.removeEventListener('touchmove', h);
          }
        );
      }, []),
      b.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          s.current && cancelAnimationFrame(s.current);
          const i = e.current;
          if (i) {
            i.getContext('2d').clearRect(0, 0, i.width, i.height);
          }
        }
      }, []),
      d.jsx('canvas', { ref: e, className: 'particle-background', 'aria-hidden': 'true' })
    );
  },
  le = ({
    text: e,
    delay: s = 0,
    duration: i = 0.05,
    className: a = '',
    animationType: t = 'fade',
  }) => {
    const n = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: i, delayChildren: s } },
      },
      r = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      },
      l = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, type: 'spring', stiffness: 150, damping: 10 },
        },
      },
      c = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      },
      o = () => {
        switch (t) {
          case 'bounce':
            return l;
          case 'slide':
            return c;
          default:
            return r;
        }
      },
      m = e.split('');
    return d.jsx(y.div, {
      className: `animated-text ${a}`,
      variants: n,
      initial: 'hidden',
      animate: 'visible',
      'aria-label': e,
      children: m.map((e, s) =>
        d.jsx(
          y.span,
          {
            className: 'animated-text__char',
            variants: o(),
            'aria-hidden': 'true',
            children: ' ' === e ? ' ' : e,
          },
          `${e}-${s}`
        )
      ),
    });
  },
  ce = () => {
    const [e, s] = b.useState(0),
      i = [
        'Full Stack Developer',
        'React Specialist',
        'Node.js Expert',
        'UI/UX Enthusiast',
        'Problem Solver',
      ];
    b.useEffect(() => {
      const e = setInterval(() => {
        s(e => (e + 1) % i.length);
      }, 3e3);
      return () => clearInterval(e);
    }, [i.length]);
    const a = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      },
      t = e => {
        const s = document.getElementById(e);
        s && s.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    return d.jsxs('section', {
      className: 'hero',
      children: [
        d.jsx(re, {}),
        d.jsxs(y.div, {
          className: 'hero__container',
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
          },
          initial: 'hidden',
          animate: 'visible',
          children: [
            d.jsxs(y.div, {
              className: 'hero__content',
              variants: a,
              children: [
                d.jsxs(y.div, {
                  className: 'hero__greeting',
                  variants: a,
                  children: [
                    d.jsx('span', { className: 'hero__wave', children: '👋' }),
                    d.jsx('span', { children: "Hello, I'm" }),
                  ],
                }),
                d.jsx(y.h1, {
                  className: 'hero__name',
                  variants: a,
                  children: d.jsx(le, { text: 'Thomas Musengwa' }),
                }),
                d.jsxs(y.div, {
                  className: 'hero__role-container',
                  variants: a,
                  children: [
                    d.jsx('span', { className: 'hero__role-prefix', children: "I'm a " }),
                    d.jsx(
                      y.span,
                      {
                        className: 'hero__role',
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.5 },
                        children: i[e],
                      },
                      e
                    ),
                  ],
                }),
                d.jsx(y.p, {
                  className: 'hero__description',
                  variants: a,
                  children:
                    'I craft beautiful, responsive web applications with modern technologies. Passionate about creating exceptional user experiences and scalable solutions.',
                }),
                d.jsxs(y.div, {
                  className: 'hero__cta',
                  variants: a,
                  children: [
                    d.jsxs(m, {
                      variant: 'primary',
                      size: 'large',
                      onClick: () => t('contact'),
                      className: 'hero__cta-primary',
                      children: [d.jsx(N, { size: 20 }), 'Get In Touch'],
                    }),
                    d.jsxs(m, {
                      variant: 'outline',
                      size: 'large',
                      onClick: () => {
                        window.gtag &&
                          window.gtag('event', 'download', {
                            event_category: 'engagement',
                            event_label: 'resume',
                          });
                        const e = document.createElement('a');
                        (e.href = '/assets/resume/john-doe-resume.pdf'),
                          (e.download = 'John-Doe-Resume.pdf'),
                          e.click();
                      },
                      className: 'hero__cta-secondary',
                      children: [d.jsx(w, { size: 20 }), 'Download Resume'],
                    }),
                  ],
                }),
                d.jsxs(y.div, {
                  className: 'hero__social',
                  variants: a,
                  children: [
                    d.jsx('a', {
                      href: 'https://github.com/johndoe',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'hero__social-link',
                      'aria-label': 'Visit GitHub Profile',
                      children: d.jsx(k, { size: 24 }),
                    }),
                    d.jsx('a', {
                      href: 'https://linkedin.com/in/johndoe',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className: 'hero__social-link',
                      'aria-label': 'Visit LinkedIn Profile',
                      children: d.jsx(C, { size: 24 }),
                    }),
                    d.jsx('a', {
                      href: 'mailto:ThomasMusengwa1@gmail.com',
                      className: 'hero__social-link',
                      'aria-label': 'Send Email',
                      children: d.jsx(N, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            d.jsx(y.div, {
              className: 'hero__scroll-indicator',
              variants: a,
              animate: { y: [0, 10, 0] },
              transition: { repeat: 1 / 0, duration: 2, ease: 'easeInOut' },
              children: d.jsxs('button', {
                onClick: () => t('about'),
                className: 'hero__scroll-button',
                'aria-label': 'Scroll to About section',
                children: [d.jsx(S, { size: 24 }), d.jsx('span', { children: 'Scroll Down' })],
              }),
            }),
            d.jsx(y.div, {
              className: 'hero__image',
              variants: a,
              whileHover: { scale: 1.05 },
              transition: { duration: 0.3 },
              children: d.jsxs('div', {
                className: 'hero__image-container',
                children: [
                  d.jsx('img', {
                    src: '/assets/images/profile-photo.jpg',
                    alt: 'Thomas Musengwa - Full Stack Developer',
                    className: 'hero__profile-image',
                    loading: 'eager',
                  }),
                  d.jsx('div', { className: 'hero__image-glow' }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  oe = ({ skills: e }) => {
    var s, i, a, t, n;
    const [r, l] = b.useState('frontend'),
      [c, o] = b.useState(!1),
      m = Object.keys(e);
    b.useEffect(() => {
      o(!1);
      const e = setTimeout(() => {
        o(!0);
      }, 300);
      return () => clearTimeout(e);
    }, [r]);
    const h = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };
    return d.jsxs('div', {
      className: 'skills-chart',
      children: [
        d.jsx('div', {
          className: 'skills-chart__tabs',
          children: m.map(s => {
            var i;
            return d.jsxs(
              y.button,
              {
                className: 'skills-chart__tab ' + (r === s ? 'skills-chart__tab--active' : ''),
                onClick: () => l(s),
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: [
                  s.charAt(0).toUpperCase() + s.slice(1),
                  d.jsx('span', {
                    className: 'skills-chart__tab-count',
                    children: (null == (i = e[s]) ? void 0 : i.length) || 0,
                  }),
                ],
              },
              s
            );
          }),
        }),
        d.jsx(
          y.div,
          {
            className: 'skills-chart__content',
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            },
            initial: 'hidden',
            animate: 'visible',
            children: d.jsx('div', {
              className: 'skills-chart__grid',
              children:
                null == (s = e[r])
                  ? void 0
                  : s.map((e, s) => {
                      return d.jsxs(
                        y.div,
                        {
                          className:
                            'skills-chart__skill skills-chart__skill--' +
                            ((a = e.level),
                            a >= 90
                              ? 'expert'
                              : a >= 75
                                ? 'advanced'
                                : a >= 60
                                  ? 'intermediate'
                                  : 'beginner'),
                          variants: h,
                          whileHover: { scale: 1.02, transition: { duration: 0.2 } },
                          children: [
                            d.jsxs('div', {
                              className: 'skills-chart__skill-header',
                              children: [
                                d.jsxs('div', {
                                  className: 'skills-chart__skill-info',
                                  children: [
                                    d.jsx('span', {
                                      className: 'skills-chart__skill-icon',
                                      children:
                                        ((i = e.name),
                                        {
                                          React: '⚛️',
                                          JavaScript: '🟨',
                                          TypeScript: '🔷',
                                          'Vue.js': '💚',
                                          HTML5: '🧡',
                                          CSS3: '🔵',
                                          Sass: '🌸',
                                          'Tailwind CSS': '💨',
                                          'Node.js': '💚',
                                          Express: '⚡',
                                          Python: '🐍',
                                          Django: '🎸',
                                          FastAPI: '⚡',
                                          PHP: '🟣',
                                          Laravel: '🔴',
                                          Java: '☕',
                                          'Spring Boot': '🍃',
                                          MongoDB: '🥬',
                                          PostgreSQL: '🐘',
                                          MySQL: '🐬',
                                          Redis: '🔴',
                                          Firebase: '🔥',
                                          AWS: '☁️',
                                          Docker: '🐳',
                                          Kubernetes: '⚓',
                                          Git: '🌳',
                                          Linux: '🐧',
                                          Nginx: '🟢',
                                        }[i] || '🔧'),
                                    }),
                                    d.jsx('span', {
                                      className: 'skills-chart__skill-name',
                                      children: e.name,
                                    }),
                                  ],
                                }),
                                d.jsxs('span', {
                                  className: 'skills-chart__skill-level',
                                  children: [e.level, '%'],
                                }),
                              ],
                            }),
                            d.jsx('div', {
                              className: 'skills-chart__skill-bar',
                              children: d.jsx(y.div, {
                                className: 'skills-chart__skill-progress',
                                initial: { width: 0 },
                                animate: { width: c ? `${e.level}%` : 0 },
                                transition: { duration: 1, delay: 0.1 * s, ease: 'easeOut' },
                              }),
                            }),
                            e.description &&
                              d.jsx('p', {
                                className: 'skills-chart__skill-description',
                                children: e.description,
                              }),
                            e.years &&
                              d.jsx('div', {
                                className: 'skills-chart__skill-experience',
                                children: d.jsxs('span', {
                                  className: 'skills-chart__skill-years',
                                  children: [
                                    e.years,
                                    ' ',
                                    1 === e.years ? 'year' : 'years',
                                    ' ',
                                    'experience',
                                  ],
                                }),
                              }),
                          ],
                        },
                        `${r}-${e.name}-${s}`
                      );
                      var i, a;
                    }),
            }),
          },
          r
        ),
        d.jsx(y.div, {
          className: 'skills-chart__summary',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          children: d.jsxs('div', {
            className: 'skills-chart__summary-stats',
            children: [
              d.jsxs('div', {
                className: 'skills-chart__summary-stat',
                children: [
                  d.jsx('span', {
                    className: 'skills-chart__summary-number',
                    children: (null == (i = e[r]) ? void 0 : i.length) || 0,
                  }),
                  d.jsx('span', { className: 'skills-chart__summary-label', children: 'Skills' }),
                ],
              }),
              d.jsxs('div', {
                className: 'skills-chart__summary-stat',
                children: [
                  d.jsxs('span', {
                    className: 'skills-chart__summary-number',
                    children: [
                      Math.round(
                        ((null == (a = e[r]) ? void 0 : a.reduce((e, s) => e + s.level, 0)) || 0) /
                          ((null == (t = e[r]) ? void 0 : t.length) || 1)
                      ),
                      '%',
                    ],
                  }),
                  d.jsx('span', {
                    className: 'skills-chart__summary-label',
                    children: 'Avg. Proficiency',
                  }),
                ],
              }),
              d.jsxs('div', {
                className: 'skills-chart__summary-stat',
                children: [
                  d.jsx('span', {
                    className: 'skills-chart__summary-number',
                    children:
                      (null == (n = e[r]) ? void 0 : n.filter(e => e.level >= 90).length) || 0,
                  }),
                  d.jsx('span', {
                    className: 'skills-chart__summary-label',
                    children: 'Expert Level',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  de = () => {
    const e = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      },
      s = [
        { icon: D, label: 'Projects Completed', value: '50+', color: 'primary' },
        { icon: z, label: 'Happy Clients', value: '25+', color: 'secondary' },
        { icon: I, label: 'Years Experience', value: '5+', color: 'accent' },
        { icon: P, label: 'Success Rate', value: '98%', color: 'success' },
      ],
      i = [
        {
          icon: D,
          title: 'Full Stack Development',
          description:
            'Expert in modern web technologies including React, Node.js, and cloud platforms.',
        },
        {
          icon: M,
          title: 'Database Design',
          description:
            'Proficient in SQL and NoSQL databases, optimization, and data architecture.',
        },
        {
          icon: A,
          title: 'UI/UX Design',
          description: 'Creating beautiful, intuitive interfaces with focus on user experience.',
        },
      ];
    return d.jsx('section', {
      className: 'about',
      children: d.jsx('div', {
        className: 'container',
        children: d.jsxs(y.div, {
          className: 'about__content',
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
          },
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: !0, amount: 0.3 },
          children: [
            d.jsxs(y.div, {
              className: 'about__header',
              variants: e,
              children: [
                d.jsx('h2', { className: 'about__title', children: 'About Me' }),
                d.jsx('p', {
                  className: 'about__subtitle',
                  children: 'Passionate developer creating digital experiences that matter',
                }),
              ],
            }),
            d.jsxs('div', {
              className: 'about__grid',
              children: [
                d.jsxs(y.div, {
                  className: 'about__personal',
                  variants: e,
                  children: [
                    d.jsxs('div', {
                      className: 'about__image-container',
                      children: [
                        d.jsx('img', {
                          src: '/assets/images/about-photo.jpg',
                          alt: 'Thomas Musengwa working',
                          className: 'about__image',
                        }),
                        d.jsx('div', {
                          className: 'about__image-overlay',
                          children: d.jsxs('div', {
                            className: 'about__image-badge',
                            children: [
                              d.jsx('span', { children: '💼' }),
                              d.jsx('span', { children: 'Available for hire' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    d.jsxs('div', {
                      className: 'about__bio',
                      children: [
                        d.jsx('h3', {
                          className: 'about__bio-title',
                          children: "Hello! I'm Thomas Musengwa",
                        }),
                        d.jsxs('p', {
                          className: 'about__bio-text',
                          children: [
                            "I'm a passionate full-stack developer with",
                            ' ',
                            h.experience,
                            ' years of experience creating digital solutions that drive business growth. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.',
                          ],
                        }),
                        d.jsx('p', {
                          className: 'about__bio-text',
                          children:
                            "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I believe in writing clean, maintainable code and creating applications that users love.",
                        }),
                        d.jsxs('div', {
                          className: 'about__bio-details',
                          children: [
                            d.jsxs('div', {
                              className: 'about__detail',
                              children: [
                                d.jsx('span', {
                                  className: 'about__detail-label',
                                  children: 'Location:',
                                }),
                                d.jsx('span', {
                                  className: 'about__detail-value',
                                  children: h.location,
                                }),
                              ],
                            }),
                            d.jsxs('div', {
                              className: 'about__detail',
                              children: [
                                d.jsx('span', {
                                  className: 'about__detail-label',
                                  children: 'Email:',
                                }),
                                d.jsx('span', {
                                  className: 'about__detail-value',
                                  children: h.email,
                                }),
                              ],
                            }),
                            d.jsxs('div', {
                              className: 'about__detail',
                              children: [
                                d.jsx('span', {
                                  className: 'about__detail-label',
                                  children: 'Status:',
                                }),
                                d.jsx('span', {
                                  className: 'about__detail-value about__detail-value--available',
                                  children: h.availability,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs(y.div, {
                  className: 'about__skills',
                  variants: e,
                  children: [
                    d.jsx('h3', { className: 'about__skills-title', children: 'Technical Skills' }),
                    d.jsx(oe, { skills: u }),
                  ],
                }),
              ],
            }),
            d.jsx(y.div, {
              className: 'about__stats',
              variants: e,
              children: d.jsx('div', {
                className: 'about__stats-grid',
                children: s.map((s, i) => {
                  const a = s.icon;
                  return d.jsxs(
                    y.div,
                    {
                      className: `about__stat about__stat--${s.color}`,
                      variants: e,
                      whileHover: { scale: 1.05, transition: { duration: 0.2 } },
                      children: [
                        d.jsx('div', {
                          className: 'about__stat-icon',
                          children: d.jsx(a, { size: 32 }),
                        }),
                        d.jsxs('div', {
                          className: 'about__stat-content',
                          children: [
                            d.jsx('div', { className: 'about__stat-value', children: s.value }),
                            d.jsx('div', { className: 'about__stat-label', children: s.label }),
                          ],
                        }),
                      ],
                    },
                    i
                  );
                }),
              }),
            }),
            d.jsxs(y.div, {
              className: 'about__highlights',
              variants: e,
              children: [
                d.jsx('h3', { className: 'about__highlights-title', children: 'What I Do Best' }),
                d.jsx('div', {
                  className: 'about__highlights-grid',
                  children: i.map((s, i) => {
                    const a = s.icon;
                    return d.jsxs(
                      y.div,
                      {
                        className: 'about__highlight',
                        variants: e,
                        whileHover: { y: -5, transition: { duration: 0.2 } },
                        children: [
                          d.jsx('div', {
                            className: 'about__highlight-icon',
                            children: d.jsx(a, { size: 24 }),
                          }),
                          d.jsx('h4', { className: 'about__highlight-title', children: s.title }),
                          d.jsx('p', {
                            className: 'about__highlight-description',
                            children: s.description,
                          }),
                        ],
                      },
                      i
                    );
                  }),
                }),
              ],
            }),
            d.jsx(y.div, {
              className: 'about__philosophy',
              variants: e,
              children: d.jsxs('div', {
                className: 'about__philosophy-content',
                children: [
                  d.jsx('blockquote', {
                    className: 'about__quote',
                    children:
                      '"Code is not just about solving problems—it\'s about creating possibilities. Every line of code is an opportunity to make someone\'s life a little bit better."',
                  }),
                  d.jsx('cite', {
                    className: 'about__quote-author',
                    children: '— My Development Philosophy',
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  me = ({ project: e, viewMode: s = 'grid', index: i = 0 }) => {
    const a = ie(),
      t = (e, s) => {
        e.stopPropagation(), window.open(s, '_blank', 'noopener,noreferrer');
      },
      n = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } },
      },
      r = e => {
        if (!e) return 'Ongoing';
        return new Date(e).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      };
    return d.jsxs(y.article, {
      className: `project-card project-card--${s}`,
      variants: n,
      whileHover: { y: 'grid' === s ? -8 : -2, transition: { duration: 0.3 } },
      whileTap: { scale: 0.98 },
      onClick: () => a(`/project/${e.id}`),
      children: [
        e.featured &&
          d.jsxs('div', {
            className: 'project-card__badge project-card__badge--featured',
            children: [d.jsx(F, { size: 14 }), d.jsx('span', { children: 'Featured' })],
          }),
        d.jsx('div', {
          className: `project-card__badge project-card__badge--status project-card__badge--${(e => {
            switch (e) {
              case 'completed':
                return 'success';
              case 'in-progress':
                return 'warning';
              case 'planning':
                return 'info';
              default:
                return 'default';
            }
          })(e.status)}`,
          children: e.status.replace('-', ' '),
        }),
        d.jsxs('div', {
          className: 'project-card__image-container',
          children: [
            d.jsx('img', {
              src: e.image,
              alt: e.title,
              className: 'project-card__image',
              loading: 'lazy',
            }),
            d.jsx('div', {
              className: 'project-card__image-overlay',
              children: d.jsxs('div', {
                className: 'project-card__image-actions',
                children: [
                  d.jsx('button', {
                    className: 'project-card__action-btn project-card__action-btn--view',
                    'aria-label': 'View project details',
                    children: d.jsx(E, { size: 20 }),
                  }),
                  e.liveUrl &&
                    d.jsx('button', {
                      className: 'project-card__action-btn project-card__action-btn--external',
                      onClick: s => t(s, e.liveUrl),
                      'aria-label': 'View live demo',
                      children: d.jsx(L, { size: 20 }),
                    }),
                  e.githubUrl &&
                    d.jsx('button', {
                      className: 'project-card__action-btn project-card__action-btn--github',
                      onClick: s => t(s, e.githubUrl),
                      'aria-label': 'View source code',
                      children: d.jsx(k, { size: 20 }),
                    }),
                ],
              }),
            }),
          ],
        }),
        d.jsxs('div', {
          className: 'project-card__content',
          children: [
            d.jsxs('div', {
              className: 'project-card__header',
              children: [
                d.jsx('h3', { className: 'project-card__title', children: e.title }),
                'list' === s &&
                  d.jsxs('div', {
                    className: 'project-card__meta',
                    children: [
                      d.jsxs('span', {
                        className: 'project-card__date',
                        children: [d.jsx(T, { size: 14 }), r(e.endDate || e.startDate)],
                      }),
                      e.client &&
                        d.jsx('span', { className: 'project-card__client', children: e.client }),
                    ],
                  }),
              ],
            }),
            d.jsx('p', {
              className: 'project-card__description',
              children: 'grid' === s ? e.shortDescription : e.description,
            }),
            d.jsxs('div', {
              className: 'project-card__technologies',
              children: [
                e.technologies
                  .slice(0, 'grid' === s ? 4 : 6)
                  .map((e, s) =>
                    d.jsx('span', { className: 'project-card__tech', children: e }, s)
                  ),
                e.technologies.length > ('grid' === s ? 4 : 6) &&
                  d.jsxs('span', {
                    className: 'project-card__tech project-card__tech--more',
                    children: ['+', e.technologies.length - ('grid' === s ? 4 : 6)],
                  }),
              ],
            }),
            'list' === s &&
              e.metrics &&
              d.jsx('div', {
                className: 'project-card__metrics',
                children: Object.entries(e.metrics).map(([e, s]) =>
                  d.jsxs(
                    'div',
                    {
                      className: 'project-card__metric',
                      children: [
                        d.jsxs('span', {
                          className: 'project-card__metric-label',
                          children: [e.charAt(0).toUpperCase() + e.slice(1), ':'],
                        }),
                        d.jsx('span', { className: 'project-card__metric-value', children: s }),
                      ],
                    },
                    e
                  )
                ),
              }),
            d.jsxs('div', {
              className: 'project-card__footer',
              children: [
                'grid' === s &&
                  d.jsxs('div', {
                    className: 'project-card__date',
                    children: [
                      d.jsx(T, { size: 14 }),
                      d.jsx('span', { children: r(e.endDate || e.startDate) }),
                    ],
                  }),
                d.jsxs('div', {
                  className: 'project-card__links',
                  children: [
                    e.liveUrl &&
                      d.jsx('a', {
                        href: e.liveUrl,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'project-card__link',
                        onClick: e => e.stopPropagation(),
                        'aria-label': 'View live demo',
                        children: d.jsx(L, { size: 16 }),
                      }),
                    e.githubUrl &&
                      d.jsx('a', {
                        href: e.githubUrl,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'project-card__link',
                        onClick: e => e.stopPropagation(),
                        'aria-label': 'View source code',
                        children: d.jsx(k, { size: 16 }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx('div', { className: 'project-card__hover-effect' }),
      ],
    });
  },
  he = ({ categories: e, selectedFilter: s, onFilterChange: i }) => {
    const a = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };
    return d.jsx(y.div, {
      className: 'filter-tabs',
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      },
      initial: 'hidden',
      animate: 'visible',
      children: d.jsx('div', {
        className: 'filter-tabs__container',
        children: e.map(e =>
          d.jsxs(
            y.button,
            {
              className: 'filter-tabs__tab ' + (s === e.id ? 'filter-tabs__tab--active' : ''),
              onClick: () => i(e.id),
              variants: a,
              whileHover: { scale: 1.05, transition: { duration: 0.2 } },
              whileTap: { scale: 0.95 },
              children: [
                d.jsx('span', { className: 'filter-tabs__label', children: e.label }),
                d.jsx('span', { className: 'filter-tabs__count', children: e.count }),
                s === e.id &&
                  d.jsx(y.div, {
                    className: 'filter-tabs__indicator',
                    layoutId: 'activeTab',
                    transition: { type: 'spring', stiffness: 380, damping: 30 },
                  }),
              ],
            },
            e.id
          )
        ),
      }),
    });
  },
  ue = () => {
    const { state: e, setPortfolioFilter: s } = p(),
      [i, a] = b.useState(ae),
      [t, n] = b.useState(''),
      [r, l] = b.useState('grid'),
      [c, o] = b.useState('recent'),
      m = e.portfolio.selectedFilter;
    b.useEffect(() => {
      let e = te(m);
      switch (
        (t &&
          (e = e.filter(
            e =>
              e.title.toLowerCase().includes(t.toLowerCase()) ||
              e.description.toLowerCase().includes(t.toLowerCase()) ||
              e.technologies.some(e => e.toLowerCase().includes(t.toLowerCase()))
          )),
        c)
      ) {
        case 'name':
          e = [...e].sort((e, s) => e.title.localeCompare(s.title));
          break;
        case 'featured':
          e = [...e].sort((e, s) =>
            e.featured && !s.featured ? -1 : !e.featured && s.featured ? 1 : 0
          );
          break;
        default:
          e = [...e].sort((e, s) => {
            const i = new Date(e.endDate || e.startDate);
            return new Date(s.endDate || s.startDate) - i;
          });
      }
      a(e);
    }, [m, t, c]);
    const h = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      },
      u = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };
    return d.jsx('section', {
      className: 'portfolio',
      children: d.jsxs('div', {
        className: 'container',
        children: [
          d.jsxs(y.div, {
            className: 'portfolio__content',
            variants: h,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: !0, amount: 0.3 },
            children: [
              d.jsxs(y.div, {
                className: 'portfolio__header',
                variants: u,
                children: [
                  d.jsx('h2', { className: 'portfolio__title', children: 'My Portfolio' }),
                  d.jsx('p', {
                    className: 'portfolio__subtitle',
                    children:
                      'A collection of projects that showcase my skills and passion for development',
                  }),
                ],
              }),
              d.jsxs(y.div, {
                className: 'portfolio__controls',
                variants: u,
                children: [
                  d.jsxs('div', {
                    className: 'portfolio__search-sort',
                    children: [
                      d.jsxs('div', {
                        className: 'portfolio__search',
                        children: [
                          d.jsx(R, { size: 20, className: 'portfolio__search-icon' }),
                          d.jsx('input', {
                            type: 'text',
                            placeholder: 'Search projects, technologies...',
                            value: t,
                            onChange: e => n(e.target.value),
                            className: 'portfolio__search-input',
                          }),
                        ],
                      }),
                      d.jsx('div', {
                        className: 'portfolio__sort',
                        children: d.jsxs('select', {
                          value: c,
                          onChange: e => o(e.target.value),
                          className: 'portfolio__sort-select',
                          children: [
                            d.jsx('option', { value: 'recent', children: 'Most Recent' }),
                            d.jsx('option', { value: 'name', children: 'Name A-Z' }),
                            d.jsx('option', { value: 'featured', children: 'Featured First' }),
                          ],
                        }),
                      }),
                      d.jsxs('div', {
                        className: 'portfolio__view-mode',
                        children: [
                          d.jsx('button', {
                            className:
                              'portfolio__view-btn ' +
                              ('grid' === r ? 'portfolio__view-btn--active' : ''),
                            onClick: () => l('grid'),
                            'aria-label': 'Grid view',
                            children: d.jsx($, { size: 20 }),
                          }),
                          d.jsx('button', {
                            className:
                              'portfolio__view-btn ' +
                              ('list' === r ? 'portfolio__view-btn--active' : ''),
                            onClick: () => l('list'),
                            'aria-label': 'List view',
                            children: d.jsx(O, { size: 20 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsx(he, {
                    categories: ne,
                    selectedFilter: m,
                    onFilterChange: e => {
                      s(e);
                    },
                  }),
                ],
              }),
              d.jsxs(y.div, {
                className: 'portfolio__results-info',
                variants: u,
                children: [
                  d.jsxs('p', {
                    className: 'portfolio__results-text',
                    children: [
                      'Showing ',
                      i.length,
                      ' of ',
                      ae.length,
                      ' projects',
                      t &&
                        d.jsxs('span', {
                          className: 'portfolio__search-term',
                          children: [' for "', t, '"'],
                        }),
                    ],
                  }),
                  0 === i.length &&
                    t &&
                    d.jsx('p', {
                      className: 'portfolio__no-results',
                      children: 'No projects found. Try adjusting your search or filters.',
                    }),
                ],
              }),
              d.jsx(y.div, {
                className: `portfolio__grid portfolio__grid--${r}`,
                variants: h,
                layout: !0,
                children: d.jsxs(f, {
                  children: [
                    ' ',
                    i.map((e, s) =>
                      d.jsx(
                        y.div,
                        {
                          variants: u,
                          initial: 'hidden',
                          animate: 'visible',
                          exit: 'hidden',
                          layout: !0,
                          transition: { duration: 0.3 },
                          children: d.jsx(me, { project: e, viewMode: r, index: s }),
                        },
                        e.id
                      )
                    ),
                  ],
                }),
              }),
              i.length >= 6 &&
                d.jsx(y.div, {
                  className: 'portfolio__load-more',
                  variants: u,
                  children: d.jsx('button', {
                    className: 'portfolio__load-more-btn',
                    children: 'Load More Projects',
                  }),
                }),
              d.jsx(y.div, {
                className: 'portfolio__cta',
                variants: u,
                children: d.jsxs('div', {
                  className: 'portfolio__cta-content',
                  children: [
                    d.jsx('h3', {
                      className: 'portfolio__cta-title',
                      children: 'Interested in working together?',
                    }),
                    d.jsx('p', {
                      className: 'portfolio__cta-description',
                      children:
                        "I'm always open to discussing new opportunities and exciting projects.",
                    }),
                    d.jsx('button', {
                      className: 'portfolio__cta-button',
                      onClick: () => {
                        var e;
                        null == (e = document.getElementById('contact')) ||
                          e.scrollIntoView({ behavior: 'smooth' });
                      },
                      children: 'Get In Touch',
                    }),
                  ],
                }),
              }),
            ],
          }),
          ' ',
        ],
      }),
    });
  },
  pe = ({ data: e, type: s = 'experience' }) => {
    const [i, a] = b.useState({}),
      t = e => {
        if (!e) return 'Present';
        return new Date(e).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
      },
      n = (e, s) => {
        const i = new Date(e),
          a = s ? new Date(s) : new Date(),
          t = Math.abs(a - i),
          n = Math.ceil(t / 2630016e3),
          r = Math.floor(n / 12),
          l = n % 12;
        return 0 === r
          ? `${l} month${1 !== l ? 's' : ''}`
          : 0 === l
            ? `${r} year${1 !== r ? 's' : ''}`
            : `${r} year${1 !== r ? 's' : ''}, ${l} month${1 !== l ? 's' : ''}`;
      },
      r = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      },
      o = e => {
        switch (e) {
          case 'degree':
            return d.jsx(U, { size: 20 });
          case 'bootcamp':
            return d.jsx(H, { size: 20 });
          default:
            return d.jsx(B, { size: 20 });
        }
      };
    return d.jsx(y.div, {
      className: 'experience-timeline',
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      },
      initial: 'hidden',
      animate: 'visible',
      children: d.jsx('div', {
        className: 'experience-timeline__container',
        children: e.map((m, h) => {
          var u;
          const p = i[m.id],
            _ = h === e.length - 1,
            x = m.endDate ? 'completed' : 'current';
          return d.jsxs(
            y.div,
            {
              className: `experience-timeline__item experience-timeline__item--${x}`,
              variants: r,
              children: [
                !_ && d.jsx('div', { className: 'experience-timeline__line' }),
                d.jsx('div', {
                  className: `experience-timeline__dot experience-timeline__dot--${x}`,
                  children: 'education' === s ? o(m.type) : d.jsx(B, { size: 20 }),
                }),
                d.jsxs('div', {
                  className: 'experience-timeline__content',
                  children: [
                    d.jsxs('div', {
                      className: 'experience-timeline__header',
                      children: [
                        d.jsxs('div', {
                          className: 'experience-timeline__main-info',
                          children: [
                            d.jsx('h3', {
                              className: 'experience-timeline__title',
                              children: m.title,
                            }),
                            d.jsxs('div', {
                              className: 'experience-timeline__company',
                              children: [
                                d.jsx('span', {
                                  className: 'experience-timeline__company-name',
                                  children: m.company,
                                }),
                                (null == (u = m.companyInfo) ? void 0 : u.website) &&
                                  d.jsx('a', {
                                    href: m.companyInfo.website,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className: 'experience-timeline__company-link',
                                    'aria-label': `Visit ${m.company} website`,
                                    children: d.jsx(L, { size: 14 }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        d.jsxs('div', {
                          className: 'experience-timeline__meta',
                          children: [
                            d.jsxs('div', {
                              className: 'experience-timeline__date-location',
                              children: [
                                d.jsxs('div', {
                                  className: 'experience-timeline__date',
                                  children: [
                                    d.jsx(T, { size: 14 }),
                                    d.jsxs('span', {
                                      children: [t(m.startDate), ' -', ' ', t(m.endDate)],
                                    }),
                                  ],
                                }),
                                d.jsxs('div', {
                                  className: 'experience-timeline__location',
                                  children: [
                                    d.jsx(W, { size: 14 }),
                                    d.jsx('span', { children: m.location }),
                                  ],
                                }),
                              ],
                            }),
                            d.jsx('div', {
                              className: 'experience-timeline__duration',
                              children: n(m.startDate, m.endDate),
                            }),
                          ],
                        }),
                      ],
                    }),
                    'current' === x &&
                      d.jsx('div', {
                        className: 'experience-timeline__status',
                        children: d.jsx('span', {
                          className: 'experience-timeline__status-badge',
                          children: 'Current Position',
                        }),
                      }),
                    d.jsx('p', {
                      className: 'experience-timeline__description',
                      children: m.description,
                    }),
                    'education' === s &&
                      d.jsxs('div', {
                        className: 'experience-timeline__education-info',
                        children: [
                          m.gpa &&
                            d.jsxs('div', {
                              className: 'experience-timeline__gpa',
                              children: [d.jsx('strong', { children: 'GPA:' }), ' ', m.gpa],
                            }),
                          m.honors &&
                            m.honors.length > 0 &&
                            d.jsxs('div', {
                              className: 'experience-timeline__honors',
                              children: [
                                d.jsx('strong', { children: 'Honors:' }),
                                ' ',
                                m.honors.join(', '),
                              ],
                            }),
                        ],
                      }),
                    m.technologies &&
                      d.jsxs('div', {
                        className: 'experience-timeline__technologies',
                        children: [
                          m.technologies
                            .slice(0, 6)
                            .map((e, s) =>
                              d.jsx(
                                'span',
                                { className: 'experience-timeline__tech', children: e },
                                s
                              )
                            ),
                          m.technologies.length > 6 &&
                            d.jsxs('span', {
                              className:
                                'experience-timeline__tech experience-timeline__tech--more',
                              children: ['+', m.technologies.length - 6, ' more'],
                            }),
                        ],
                      }),
                    (m.achievements || m.responsibilities || m.relevantCoursework) &&
                      d.jsxs('button', {
                        className: 'experience-timeline__toggle',
                        onClick: () => {
                          return (e = m.id), void a(s => c(l({}, s), { [e]: !s[e] }));
                          var e;
                        },
                        'aria-expanded': p,
                        children: [
                          d.jsx('span', { children: p ? 'Show Less' : 'Show More Details' }),
                          p ? d.jsx(V, { size: 16 }) : d.jsx(S, { size: 16 }),
                        ],
                      }),
                    d.jsx(f, {
                      children:
                        p &&
                        d.jsxs(y.div, {
                          className: 'experience-timeline__details',
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: 'auto' },
                          exit: { opacity: 0, height: 0 },
                          transition: { duration: 0.3 },
                          children: [
                            m.achievements &&
                              d.jsxs('div', {
                                className: 'experience-timeline__section',
                                children: [
                                  d.jsxs('h4', {
                                    className: 'experience-timeline__section-title',
                                    children: [d.jsx(P, { size: 16 }), 'Key Achievements'],
                                  }),
                                  d.jsx('ul', {
                                    className: 'experience-timeline__list',
                                    children: m.achievements.map((e, s) =>
                                      d.jsxs(
                                        'li',
                                        {
                                          className: 'experience-timeline__list-item',
                                          children: [d.jsx(G, { size: 14 }), e],
                                        },
                                        s
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            m.responsibilities &&
                              d.jsxs('div', {
                                className: 'experience-timeline__section',
                                children: [
                                  d.jsxs('h4', {
                                    className: 'experience-timeline__section-title',
                                    children: [d.jsx(G, { size: 16 }), 'Responsibilities'],
                                  }),
                                  d.jsx('ul', {
                                    className: 'experience-timeline__list',
                                    children: m.responsibilities.map((e, s) =>
                                      d.jsx(
                                        'li',
                                        {
                                          className: 'experience-timeline__list-item',
                                          children: e,
                                        },
                                        s
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            m.relevantCoursework &&
                              d.jsxs('div', {
                                className: 'experience-timeline__section',
                                children: [
                                  d.jsxs('h4', {
                                    className: 'experience-timeline__section-title',
                                    children: [d.jsx(H, { size: 16 }), 'Relevant Coursework'],
                                  }),
                                  d.jsx('div', {
                                    className: 'experience-timeline__coursework',
                                    children: m.relevantCoursework.map((e, s) =>
                                      d.jsx(
                                        'span',
                                        { className: 'experience-timeline__course', children: e },
                                        s
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            m.projects &&
                              d.jsxs('div', {
                                className: 'experience-timeline__section',
                                children: [
                                  d.jsxs('h4', {
                                    className: 'experience-timeline__section-title',
                                    children: [d.jsx(H, { size: 16 }), 'Projects'],
                                  }),
                                  d.jsx('ul', {
                                    className: 'experience-timeline__list',
                                    children: m.projects.map((e, s) =>
                                      d.jsx(
                                        'li',
                                        {
                                          className: 'experience-timeline__list-item',
                                          children: e,
                                        },
                                        s
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            m.companyInfo &&
                              d.jsxs('div', {
                                className: 'experience-timeline__company-info',
                                children: [
                                  d.jsxs('div', {
                                    className: 'experience-timeline__company-detail',
                                    children: [
                                      d.jsx('strong', { children: 'Industry:' }),
                                      ' ',
                                      m.companyInfo.industry,
                                    ],
                                  }),
                                  d.jsxs('div', {
                                    className: 'experience-timeline__company-detail',
                                    children: [
                                      d.jsx('strong', { children: 'Size:' }),
                                      ' ',
                                      m.companyInfo.size,
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            },
            m.id
          );
        }),
      }),
    });
  },
  _e = ({ variant: e = 'primary', size: s = 'medium', className: i = '' }) => {
    const [a, t] = b.useState(!1),
      [n, r] = b.useState(!1),
      l = {
        idle: { scale: 1 },
        downloading: {
          scale: [1, 0.95, 1],
          transition: { duration: 0.6, repeat: 1 / 0, ease: 'easeInOut' },
        },
        success: { scale: [1, 1.05, 1], transition: { duration: 0.4, ease: 'easeOut' } },
      },
      c = {
        idle: { rotate: 0 },
        downloading: { rotate: 360, transition: { duration: 1, repeat: 1 / 0, ease: 'linear' } },
        success: { scale: [1, 1.2, 1], transition: { duration: 0.4, ease: 'easeOut' } },
      },
      h = () => (n ? 'success' : a ? 'downloading' : 'idle');
    return d.jsxs(y.div, {
      className: `download-button ${i}`,
      variants: l,
      animate: h(),
      children: [
        d.jsx(m, {
          variant: n ? 'success' : e,
          size: s,
          onClick: () =>
            o(void 0, null, function* () {
              if (!a) {
                t(!0);
                try {
                  _('john-doe-resume.pdf', 'pdf'),
                    yield x.trackResumeDownload(),
                    yield new Promise(e => setTimeout(e, 1e3));
                  const e = document.createElement('a');
                  (e.href = '/assets/resume/john-doe-resume.pdf'),
                    (e.download = 'John-Doe-Resume.pdf'),
                    (e.target = '_blank'),
                    document.body.appendChild(e),
                    e.click(),
                    document.body.removeChild(e),
                    r(!0),
                    setTimeout(() => {
                      r(!1);
                    }, 3e3);
                } catch (e) {
                } finally {
                  t(!1);
                }
              }
            }),
          disabled: a,
          className: `download-button__btn download-button__btn--${h()}`,
          children: (() => {
            switch (h()) {
              case 'downloading':
                return d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(y.div, { variants: c, children: d.jsx(w, { size: 20 }) }),
                    'Downloading...',
                  ],
                });
              case 'success':
                return d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(y.div, { variants: c, children: d.jsx(G, { size: 20 }) }),
                    'Downloaded!',
                  ],
                });
              default:
                return d.jsxs(d.Fragment, {
                  children: [d.jsx(J, { size: 20 }), 'Download Resume'],
                });
            }
          })(),
        }),
        d.jsx('div', {
          className: 'download-button__tooltip',
          children: d.jsxs('div', {
            className: 'download-button__tooltip-content',
            children: [
              d.jsx(J, { size: 16 }),
              d.jsxs('div', {
                className: 'download-button__tooltip-text',
                children: [
                  d.jsx('span', {
                    className: 'download-button__tooltip-title',
                    children: 'Resume PDF',
                  }),
                  d.jsx('span', {
                    className: 'download-button__tooltip-subtitle',
                    children: 'Latest version • 245KB',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  xe = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      startDate: '2022-03-01',
      endDate: null,
      type: 'full-time',
      description:
        'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Led migration of legacy system to modern React/Node.js stack, improving performance by 60%',
        'Architected microservices infrastructure serving 100K+ daily active users',
        'Mentored team of 5 junior developers, improving team productivity by 40%',
        'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
        'Designed and built real-time analytics dashboard used by C-level executives',
      ],
      technologies: [
        'React',
        'Node.js',
        'TypeScript',
        'AWS',
        'MongoDB',
        'Redis',
        'Docker',
        'Kubernetes',
      ],
      responsibilities: [
        'Full-stack development using modern JavaScript frameworks',
        'Database design and optimization for high-traffic applications',
        'Code review and technical mentorship',
        'Architecture planning and technical decision making',
        'Performance monitoring and optimization',
        'Agile development and sprint planning',
      ],
      companyInfo: {
        industry: 'Financial Technology',
        size: '200-500 employees',
        website: 'https://techflow.com',
      },
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateWeb Agency',
      location: 'Remote',
      startDate: '2020-06-01',
      endDate: '2022-02-28',
      type: 'full-time',
      description:
        'Developed custom web applications for diverse clients ranging from startups to Fortune 500 companies. Specialized in React frontend development and Node.js backend services.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Built e-commerce platform handling $2M+ in annual transactions',
        'Reduced client site load times by average of 45% through optimization',
        'Implemented automated testing suite improving code quality by 70%',
        'Won "Developer of the Year" award for outstanding client satisfaction',
      ],
      technologies: [
        'React',
        'Vue.js',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Stripe',
        'AWS',
        'Netlify',
      ],
      responsibilities: [
        'Client consultation and technical requirement gathering',
        'Full-stack web application development',
        'Third-party API integrations',
        'Performance optimization and SEO implementation',
        'Client training and project handoff',
        'Maintenance and support for live applications',
      ],
      companyInfo: {
        industry: 'Web Development Agency',
        size: '50-100 employees',
        website: 'https://innovateweb.com',
      },
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupLaunch',
      location: 'Austin, TX',
      startDate: '2019-01-15',
      endDate: '2020-05-30',
      type: 'full-time',
      description:
        'Joined early-stage startup to build user-facing applications from the ground up. Worked closely with design team to create intuitive and responsive user interfaces.',
      achievements: [
        'Built MVP that attracted 10K+ beta users in first 3 months',
        'Implemented responsive design system used across all products',
        'Achieved 95+ Google Lighthouse scores for all main application pages',
        'Reduced user onboarding time by 60% through UX improvements',
        'Contributed to $2.5M Series A funding round success',
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest', 'Figma', 'Firebase'],
      responsibilities: [
        'React component library development',
        'Mobile-first responsive design implementation',
        'User experience optimization',
        'Cross-browser compatibility testing',
        'Collaboration with design and product teams',
        'Frontend performance monitoring',
      ],
      companyInfo: {
        industry: 'SaaS Startup',
        size: '10-25 employees',
        website: 'https://startuplaunch.io',
      },
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'Digital Solutions Corp',
      location: 'San Jose, CA',
      startDate: '2018-03-01',
      endDate: '2018-12-31',
      type: 'full-time',
      description:
        'First professional role focused on learning modern web development practices. Worked on maintenance and feature development for client websites and internal tools.',
      achievements: [
        'Successfully completed 6-month intensive training program',
        'Contributed to 10+ client website projects',
        'Improved personal productivity by learning advanced Git workflows',
        'Received "Rising Star" recognition for rapid skill development',
        'Assisted in migration of 5 legacy sites to modern frameworks',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'WordPress'],
      responsibilities: [
        'Website maintenance and bug fixes',
        'Feature development for existing applications',
        'Content management system customization',
        'Client support and minor updates',
        'Code testing and quality assurance',
        'Documentation and technical writing',
      ],
      companyInfo: {
        industry: 'Web Development Services',
        size: '25-50 employees',
        website: 'https://digitalsolutions.com',
      },
    },
  ],
  ve = [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science',
      company: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2015-08-01',
      endDate: '2019-05-15',
      type: 'degree',
      description:
        'Comprehensive computer science education with focus on software engineering, algorithms, and system design. Graduated Magna Cum Laude with strong foundation in mathematics and programming.',
      achievements: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        "Dean's List for 6 consecutive semesters",
        'Member of Computer Science Honor Society',
        'Teaching Assistant for Data Structures course',
        'Led student team in ACM Programming Competition',
        'Completed senior capstone project on distributed systems',
      ],
      technologies: [
        'Java',
        'Python',
        'C++',
        'Algorithms',
        'Data Structures',
        'Database Systems',
        'Operating Systems',
      ],
      responsibilities: [
        'Core computer science curriculum completion',
        'Independent research projects',
        'Peer tutoring and teaching assistance',
        'Collaborative software development projects',
        'Technical presentation and documentation',
        'Algorithm design and analysis',
      ],
      companyInfo: {
        industry: 'Higher Education',
        size: '45,000+ students',
        website: 'https://berkeley.edu',
      },
      gpa: '3.8/4.0',
      honors: ['Magna Cum Laude', "Dean's List", 'CS Honor Society'],
      relevantCoursework: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
        'Machine Learning',
        'Web Development',
        'Distributed Systems',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Web Development Bootcamp',
      company: 'General Assembly',
      location: 'San Francisco, CA',
      startDate: '2018-06-01',
      endDate: '2018-11-30',
      type: 'bootcamp',
      description:
        'Intensive 6-month program focused on modern web development technologies and practices. Hands-on learning with real-world projects and industry mentorship.',
      achievements: [
        'Completed 600+ hours of intensive coding training',
        'Built 4 full-stack applications from scratch',
        'Graduated as top 10% of cohort',
        'Received job placement assistance and career coaching',
        'Presented final project to panel of industry professionals',
        'Established network of 30+ fellow developers',
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Git',
      ],
      responsibilities: [
        'Daily coding challenges and assignments',
        'Team-based project development',
        'Code review and peer programming',
        'Technical presentation delivery',
        'Industry best practices implementation',
        'Portfolio development and job preparation',
      ],
      companyInfo: {
        industry: 'Education Technology',
        size: 'Global presence',
        website: 'https://generalassemb.ly',
      },
      projects: [
        'E-commerce platform with payment integration',
        'Social media application with real-time features',
        'Task management tool with team collaboration',
        'Personal portfolio website with custom CMS',
      ],
    },
  ],
  je = [
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      expiryDate: '2026',
      credential: 'https://aws.amazon.com/verification',
      description: 'Validates expertise in developing and maintaining applications on AWS platform',
      skills: ['AWS Lambda', 'EC2', 'S3', 'DynamoDB', 'CloudFormation', 'API Gateway'],
      credentialId: 'AWS-CDA-12345',
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      expiryDate: '2025',
      credential: 'https://coursera.org/verify/certificate',
      description:
        'Comprehensive certification covering React fundamentals, advanced patterns, and ecosystem',
      skills: ['React', 'JSX', 'Hooks', 'Context API', 'Redux', 'Testing'],
      credentialId: 'META-RCT-67890',
    },
    {
      name: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2023',
      expiryDate: '2025',
      credential: 'https://cloud.google.com/certification',
      description:
        'Demonstrates ability to design, build, and deploy scalable applications on Google Cloud',
      skills: ['Google Cloud Platform', 'App Engine', 'Cloud Functions', 'Kubernetes', 'BigQuery'],
      credentialId: 'GCP-PCD-54321',
    },
    {
      name: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: '2022',
      expiryDate: '2024',
      credential: 'https://university.mongodb.com/certification',
      description: 'Validates skills in MongoDB database development and administration',
      skills: [
        'MongoDB',
        'Aggregation Pipeline',
        'Indexing',
        'Schema Design',
        'Performance Tuning',
      ],
      credentialId: 'MDB-CDA-98765',
    },
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      expiryDate: '2026',
      credential: 'https://cncf.io/certification',
      description: 'Demonstrates ability to design, build and deploy applications for Kubernetes',
      skills: [
        'Kubernetes',
        'Docker',
        'Container Orchestration',
        'Pods',
        'Services',
        'Deployments',
      ],
      credentialId: 'CNCF-CKAD-11223',
    },
  ],
  ge = () => {
    var e, s;
    const [i, a] = b.useState('experience'),
      t = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      },
      n = [
        { id: 'experience', label: 'Experience', icon: q, count: xe.length },
        { id: 'education', label: 'Education', icon: K, count: ve.length },
        { id: 'certifications', label: 'Certifications', icon: U, count: je.length },
        { id: 'skills', label: 'Skills Matrix', icon: null, count: null },
      ];
    return d.jsx('section', {
      className: 'resume',
      children: d.jsx('div', {
        className: 'container',
        children: d.jsxs(y.div, {
          className: 'resume__content',
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
          },
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: !0, amount: 0.3 },
          children: [
            d.jsxs(y.div, {
              className: 'resume__header',
              variants: t,
              children: [
                d.jsx('h2', { className: 'resume__title', children: 'Resume & Experience' }),
                d.jsx('p', {
                  className: 'resume__subtitle',
                  children:
                    'My professional journey, education, and expertise in modern web development',
                }),
              ],
            }),
            d.jsx(y.div, {
              className: 'resume__summary',
              variants: t,
              children: d.jsxs('div', {
                className: 'resume__summary-content',
                children: [
                  d.jsxs('div', {
                    className: 'resume__summary-text',
                    children: [
                      d.jsxs('h3', {
                        className: 'resume__summary-title',
                        children: [h.title, ' • ', h.experience, ' Years Experience'],
                      }),
                      d.jsx('p', {
                        className: 'resume__summary-description',
                        children:
                          'Passionate full-stack developer with expertise in modern web technologies. Proven track record of delivering scalable applications and leading development teams. Focused on creating exceptional user experiences and efficient, maintainable code.',
                      }),
                      d.jsxs('div', {
                        className: 'resume__summary-highlights',
                        children: [
                          d.jsx('span', {
                            className: 'resume__summary-highlight',
                            children: 'React & Node.js Expert',
                          }),
                          d.jsx('span', {
                            className: 'resume__summary-highlight',
                            children: 'Cloud Architecture',
                          }),
                          d.jsx('span', {
                            className: 'resume__summary-highlight',
                            children: 'Team Leadership',
                          }),
                          d.jsx('span', {
                            className: 'resume__summary-highlight',
                            children: 'Agile Development',
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'resume__summary-actions',
                    children: [
                      d.jsx(_e, {}),
                      d.jsx(m, {
                        variant: 'outline',
                        onClick: () => {
                          var e;
                          null == (e = document.getElementById('contact')) ||
                            e.scrollIntoView({ behavior: 'smooth' });
                        },
                        children: 'Contact Me',
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx(y.div, {
              className: 'resume__navigation',
              variants: t,
              children: d.jsx('div', {
                className: 'resume__nav-tabs',
                children: n.map(e => {
                  const s = e.icon;
                  return d.jsxs(
                    'button',
                    {
                      className: 'resume__nav-tab ' + (i === e.id ? 'resume__nav-tab--active' : ''),
                      onClick: () => a(e.id),
                      children: [
                        s && d.jsx(s, { size: 20 }),
                        d.jsx('span', { className: 'resume__nav-label', children: e.label }),
                        e.count &&
                          d.jsx('span', { className: 'resume__nav-count', children: e.count }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
            }),
            d.jsx(
              y.div,
              {
                className: 'resume__section-content',
                variants: t,
                children: (() => {
                  switch (i) {
                    case 'experience':
                      return d.jsx(pe, { data: xe });
                    case 'education':
                      return d.jsx(pe, { data: ve, type: 'education' });
                    case 'certifications':
                      return d.jsx('div', {
                        className: 'resume__certifications',
                        children: je.map((e, s) =>
                          d.jsxs(
                            y.div,
                            {
                              className: 'resume__certification',
                              initial: { opacity: 0, x: -20 },
                              animate: { opacity: 1, x: 0 },
                              transition: { delay: 0.1 * s },
                              children: [
                                d.jsxs('div', {
                                  className: 'resume__certification-header',
                                  children: [
                                    d.jsxs('div', {
                                      className: 'resume__certification-info',
                                      children: [
                                        d.jsx('h4', {
                                          className: 'resume__certification-name',
                                          children: e.name,
                                        }),
                                        d.jsx('p', {
                                          className: 'resume__certification-issuer',
                                          children: e.issuer,
                                        }),
                                      ],
                                    }),
                                    d.jsxs('div', {
                                      className: 'resume__certification-meta',
                                      children: [
                                        d.jsx('span', {
                                          className: 'resume__certification-date',
                                          children: e.date,
                                        }),
                                        e.credential &&
                                          d.jsxs('a', {
                                            href: e.credential,
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            className: 'resume__certification-link',
                                            children: [d.jsx(L, { size: 16 }), 'Verify'],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.description &&
                                  d.jsx('p', {
                                    className: 'resume__certification-description',
                                    children: e.description,
                                  }),
                              ],
                            },
                            s
                          )
                        ),
                      });
                    case 'skills':
                      return d.jsx(oe, { skills: u });
                    default:
                      return null;
                  }
                })(),
              },
              i
            ),
            d.jsx(y.div, {
              className: 'resume__additional',
              variants: t,
              children: d.jsxs('div', {
                className: 'resume__additional-grid',
                children: [
                  d.jsxs('div', {
                    className: 'resume__additional-item',
                    children: [
                      d.jsx(W, { size: 24, className: 'resume__additional-icon' }),
                      d.jsxs('div', {
                        className: 'resume__additional-content',
                        children: [
                          d.jsx('h4', {
                            className: 'resume__additional-title',
                            children: 'Location',
                          }),
                          d.jsx('p', {
                            className: 'resume__additional-text',
                            children: h.location,
                          }),
                          d.jsx('span', {
                            className: 'resume__additional-detail',
                            children: 'Open to remote work and relocation',
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'resume__additional-item',
                    children: [
                      d.jsx(T, { size: 24, className: 'resume__additional-icon' }),
                      d.jsxs('div', {
                        className: 'resume__additional-content',
                        children: [
                          d.jsx('h4', {
                            className: 'resume__additional-title',
                            children: 'Availability',
                          }),
                          d.jsx('p', {
                            className: 'resume__additional-text',
                            children: h.availability,
                          }),
                          d.jsx('span', {
                            className: 'resume__additional-detail',
                            children: 'Ready to start new projects',
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'resume__additional-item',
                    children: [
                      d.jsx(U, { size: 24, className: 'resume__additional-icon' }),
                      d.jsxs('div', {
                        className: 'resume__additional-content',
                        children: [
                          d.jsx('h4', {
                            className: 'resume__additional-title',
                            children: 'Certifications',
                          }),
                          d.jsxs('p', {
                            className: 'resume__additional-text',
                            children: [je.length, ' Active'],
                          }),
                          d.jsx('span', {
                            className: 'resume__additional-detail',
                            children: 'AWS, React, Google Cloud certified',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx(y.div, {
              className: 'resume__extras',
              variants: t,
              children: d.jsxs('div', {
                className: 'resume__extras-grid',
                children: [
                  d.jsxs('div', {
                    className: 'resume__extras-section',
                    children: [
                      d.jsx('h4', { className: 'resume__extras-title', children: 'Languages' }),
                      d.jsx('div', {
                        className: 'resume__extras-content',
                        children:
                          null == (e = h.languages)
                            ? void 0
                            : e.map((e, s) =>
                                d.jsx('span', { className: 'resume__extras-item', children: e }, s)
                              ),
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'resume__extras-section',
                    children: [
                      d.jsx('h4', { className: 'resume__extras-title', children: 'Interests' }),
                      d.jsx('div', {
                        className: 'resume__extras-content',
                        children:
                          null == (s = h.interests)
                            ? void 0
                            : s.map((e, s) =>
                                d.jsx('span', { className: 'resume__extras-item', children: e }, s)
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx(y.div, {
              className: 'resume__cta',
              variants: t,
              children: d.jsxs('div', {
                className: 'resume__cta-content',
                children: [
                  d.jsx('h3', {
                    className: 'resume__cta-title',
                    children: 'Ready to Work Together?',
                  }),
                  d.jsx('p', {
                    className: 'resume__cta-description',
                    children:
                      "Let's discuss how my skills and experience can contribute to your next project.",
                  }),
                  d.jsxs('div', {
                    className: 'resume__cta-actions',
                    children: [
                      d.jsx(m, {
                        variant: 'primary',
                        size: 'large',
                        onClick: () => {
                          var e;
                          null == (e = document.getElementById('contact')) ||
                            e.scrollIntoView({ behavior: 'smooth' });
                        },
                        children: 'Get In Touch',
                      }),
                      d.jsx(_e, { variant: 'outline' }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  be = () => {
    const {
        state: e,
        setContactSubmitting: s,
        setContactSubmitted: i,
        setContactError: a,
        resetContactForm: t,
      } = p(),
      [n, r] = b.useState({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      }),
      [h, u] = b.useState({}),
      [_, j] = b.useState(null),
      g = (e, s) => {
        switch (e) {
          case 'name':
            return s.trim().length < 2 ? 'Name must be at least 2 characters' : '';
          case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? '' : 'Please enter a valid email address';
          case 'subject':
            return s.trim().length < 5 ? 'Subject must be at least 5 characters' : '';
          case 'message':
            return s.trim().length < 10 ? 'Message must be at least 10 characters' : '';
          default:
            return '';
        }
      },
      f = e => {
        const { name: s, value: i } = e.target;
        r(e => c(l({}, e), { [s]: i })), h[s] && u(e => c(l({}, e), { [s]: '' }));
      },
      w = e => {
        const { name: s, value: i } = e.target,
          a = g(s, i);
        a && u(e => c(l({}, e), { [s]: a })), j(null);
      },
      k = e => {
        j(e);
      },
      C = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
      };
    return e.contactForm.submitted
      ? d.jsx(y.div, {
          className: 'contact-form__success',
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          children: d.jsxs('div', {
            className: 'contact-form__success-content',
            children: [
              d.jsx(G, { size: 48, className: 'contact-form__success-icon' }),
              d.jsx('h3', { className: 'contact-form__success-title', children: 'Message Sent!' }),
              d.jsx('p', {
                className: 'contact-form__success-text',
                children: "Thank you for reaching out! I'll get back to you within 24 hours.",
              }),
              d.jsx(m, {
                variant: 'outline',
                onClick: t,
                className: 'contact-form__success-button',
                children: 'Send Another Message',
              }),
            ],
          }),
        })
      : d.jsxs(y.form, {
          className: 'contact-form',
          onSubmit: e =>
            o(void 0, null, function* () {
              if (
                (e.preventDefault(),
                (() => {
                  const e = {};
                  return (
                    ['name', 'email', 'subject', 'message'].forEach(s => {
                      const i = g(s, n[s]);
                      i && (e[s] = i);
                    }),
                    u(e),
                    0 === Object.keys(e).length
                  );
                })())
              ) {
                s(!0), a(null);
                try {
                  yield x.sendContactMessage(c(l({}, n), { timestamp: new Date().toISOString() })),
                    i(!0),
                    v('contact', !0),
                    r({
                      name: '',
                      email: '',
                      subject: '',
                      projectType: '',
                      budget: '',
                      timeline: '',
                      message: '',
                    }),
                    setTimeout(() => {
                      t();
                    }, 5e3);
                } catch (o) {
                  a(o.message || 'Failed to send message. Please try again.'),
                    v('contact', !1, o.message);
                }
              }
            }),
          variants: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
          },
          initial: 'hidden',
          animate: 'visible',
          noValidate: !0,
          children: [
            d.jsxs('div', {
              className: 'contact-form__header',
              children: [
                d.jsx('h3', { className: 'contact-form__title', children: 'Send Me a Message' }),
                d.jsx('p', {
                  className: 'contact-form__description',
                  children: "Fill out the form below and I'll get back to you as soon as possible.",
                }),
              ],
            }),
            e.contactForm.error &&
              d.jsxs(y.div, {
                className: 'contact-form__error',
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                children: [
                  d.jsx(Q, { size: 20 }),
                  d.jsx('span', { children: e.contactForm.error }),
                ],
              }),
            d.jsxs('div', {
              className: 'contact-form__fields',
              children: [
                d.jsxs('div', {
                  className: 'contact-form__row',
                  children: [
                    d.jsxs(y.div, {
                      className: 'contact-form__field',
                      variants: C,
                      children: [
                        d.jsxs('label', {
                          htmlFor: 'name',
                          className: 'contact-form__label',
                          children: [d.jsx(Y, { size: 16 }), 'Name *'],
                        }),
                        d.jsx('input', {
                          type: 'text',
                          id: 'name',
                          name: 'name',
                          value: n.name,
                          onChange: f,
                          onBlur: w,
                          onFocus: () => k('name'),
                          className: `contact-form__input ${h.name ? 'contact-form__input--error' : ''} ${'name' === _ ? 'contact-form__input--focused' : ''}`,
                          placeholder: 'Your full name',
                          required: !0,
                        }),
                        h.name &&
                          d.jsx('span', {
                            className: 'contact-form__field-error',
                            children: h.name,
                          }),
                      ],
                    }),
                    d.jsxs(y.div, {
                      className: 'contact-form__field',
                      variants: C,
                      children: [
                        d.jsxs('label', {
                          htmlFor: 'email',
                          className: 'contact-form__label',
                          children: [d.jsx(N, { size: 16 }), 'Email *'],
                        }),
                        d.jsx('input', {
                          type: 'email',
                          id: 'email',
                          name: 'email',
                          value: n.email,
                          onChange: f,
                          onBlur: w,
                          onFocus: () => k('email'),
                          className: `contact-form__input ${h.email ? 'contact-form__input--error' : ''} ${'email' === _ ? 'contact-form__input--focused' : ''}`,
                          placeholder: 'your.email@example.com',
                          required: !0,
                        }),
                        h.email &&
                          d.jsx('span', {
                            className: 'contact-form__field-error',
                            children: h.email,
                          }),
                      ],
                    }),
                  ],
                }),
                d.jsxs(y.div, {
                  className: 'contact-form__field',
                  variants: C,
                  children: [
                    d.jsxs('label', {
                      htmlFor: 'subject',
                      className: 'contact-form__label',
                      children: [d.jsx(X, { size: 16 }), 'Subject *'],
                    }),
                    d.jsx('input', {
                      type: 'text',
                      id: 'subject',
                      name: 'subject',
                      value: n.subject,
                      onChange: f,
                      onBlur: w,
                      onFocus: () => k('subject'),
                      className: `contact-form__input ${h.subject ? 'contact-form__input--error' : ''} ${'subject' === _ ? 'contact-form__input--focused' : ''}`,
                      placeholder: "What's this about?",
                      required: !0,
                    }),
                    h.subject &&
                      d.jsx('span', {
                        className: 'contact-form__field-error',
                        children: h.subject,
                      }),
                  ],
                }),
                d.jsxs('div', {
                  className: 'contact-form__row',
                  children: [
                    d.jsxs(y.div, {
                      className: 'contact-form__field',
                      variants: C,
                      children: [
                        d.jsxs('label', {
                          htmlFor: 'projectType',
                          className: 'contact-form__label',
                          children: [d.jsx(q, { size: 16 }), 'Project Type'],
                        }),
                        d.jsxs('select', {
                          id: 'projectType',
                          name: 'projectType',
                          value: n.projectType,
                          onChange: f,
                          className: 'contact-form__select',
                          children: [
                            d.jsx('option', { value: '', children: 'Select project type' }),
                            [
                              'Web Application',
                              'Mobile App',
                              'E-commerce Site',
                              'Portfolio/Blog',
                              'API Development',
                              'Database Design',
                              'Consulting',
                              'Other',
                            ].map(e => d.jsx('option', { value: e, children: e }, e)),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs(y.div, {
                      className: 'contact-form__field',
                      variants: C,
                      children: [
                        d.jsx('label', {
                          htmlFor: 'budget',
                          className: 'contact-form__label',
                          children: 'Budget Range',
                        }),
                        d.jsxs('select', {
                          id: 'budget',
                          name: 'budget',
                          value: n.budget,
                          onChange: f,
                          className: 'contact-form__select',
                          children: [
                            d.jsx('option', { value: '', children: 'Select budget range' }),
                            [
                              'Under $5,000',
                              '$5,000 - $10,000',
                              '$10,000 - $25,000',
                              '$25,000 - $50,000',
                              '$50,000+',
                              "Let's discuss",
                            ].map(e => d.jsx('option', { value: e, children: e }, e)),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsxs(y.div, {
                  className: 'contact-form__field',
                  variants: C,
                  children: [
                    d.jsx('label', {
                      htmlFor: 'timeline',
                      className: 'contact-form__label',
                      children: 'Timeline',
                    }),
                    d.jsxs('select', {
                      id: 'timeline',
                      name: 'timeline',
                      value: n.timeline,
                      onChange: f,
                      className: 'contact-form__select',
                      children: [
                        d.jsx('option', { value: '', children: 'Select timeline' }),
                        ['ASAP', '1-2 weeks', '1 month', '2-3 months', '3+ months', 'Flexible'].map(
                          e => d.jsx('option', { value: e, children: e }, e)
                        ),
                      ],
                    }),
                  ],
                }),
                d.jsxs(y.div, {
                  className: 'contact-form__field',
                  variants: C,
                  children: [
                    d.jsx('label', {
                      htmlFor: 'message',
                      className: 'contact-form__label',
                      children: 'Message *',
                    }),
                    d.jsx('textarea', {
                      id: 'message',
                      name: 'message',
                      value: n.message,
                      onChange: f,
                      onBlur: w,
                      onFocus: () => k('message'),
                      className: `contact-form__textarea ${h.message ? 'contact-form__textarea--error' : ''} ${'message' === _ ? 'contact-form__textarea--focused' : ''}`,
                      placeholder:
                        'Tell me about your project, goals, and any specific requirements...',
                      rows: 6,
                      required: !0,
                    }),
                    h.message &&
                      d.jsx('span', {
                        className: 'contact-form__field-error',
                        children: h.message,
                      }),
                  ],
                }),
              ],
            }),
            d.jsxs(y.div, {
              className: 'contact-form__submit',
              variants: C,
              children: [
                d.jsxs(m, {
                  type: 'submit',
                  variant: 'primary',
                  size: 'large',
                  loading: e.contactForm.isSubmitting,
                  disabled: e.contactForm.isSubmitting,
                  className: 'contact-form__submit-button',
                  children: [
                    d.jsx(Z, { size: 20 }),
                    e.contactForm.isSubmitting ? 'Sending...' : 'Send Message',
                  ],
                }),
                d.jsx('p', {
                  className: 'contact-form__privacy',
                  children:
                    'Your information is secure and will only be used to respond to your inquiry.',
                }),
              ],
            }),
          ],
        });
  },
  ye = () => {
    const e = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      },
      s = [
        {
          icon: N,
          label: 'Email',
          value: h.email,
          href: `mailto:${h.email}`,
          description: 'Send me an email anytime',
        },
        {
          icon: ee,
          label: 'Phone',
          value: h.phone,
          href: `tel:${h.phone}`,
          description: 'Call during business hours',
        },
        {
          icon: W,
          label: 'Location',
          value: h.location,
          href: null,
          description: 'Based in California',
        },
        {
          icon: se,
          label: 'Timezone',
          value: h.timezone,
          href: null,
          description: 'Pacific Standard Time',
        },
      ];
    return d.jsx('section', {
      className: 'contact',
      children: d.jsx('div', {
        className: 'container',
        children: d.jsxs(y.div, {
          className: 'contact__content',
          variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
          },
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: !0, amount: 0.3 },
          children: [
            d.jsxs(y.div, {
              className: 'contact__header',
              variants: e,
              children: [
                d.jsx('h2', { className: 'contact__title', children: 'Get In Touch' }),
                d.jsx('p', {
                  className: 'contact__subtitle',
                  children:
                    "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.",
                }),
              ],
            }),
            d.jsxs('div', {
              className: 'contact__grid',
              children: [
                d.jsx(y.div, {
                  className: 'contact__info',
                  variants: e,
                  children: d.jsxs('div', {
                    className: 'contact__info-content',
                    children: [
                      d.jsx('h3', { className: 'contact__info-title', children: "Let's Connect" }),
                      d.jsx('p', {
                        className: 'contact__info-description',
                        children:
                          "I'm always excited to take on new challenges and collaborate with passionate teams. Whether you have a project in mind or just want to say hello, I'd love to hear from you.",
                      }),
                      d.jsx('div', {
                        className: 'contact__details',
                        children: s.map((s, i) => {
                          const a = s.icon,
                            t = d.jsxs(
                              y.div,
                              {
                                className: 'contact__detail',
                                variants: e,
                                whileHover: { x: 5, transition: { duration: 0.2 } },
                                children: [
                                  d.jsx('div', {
                                    className: 'contact__detail-icon',
                                    children: d.jsx(a, { size: 20 }),
                                  }),
                                  d.jsxs('div', {
                                    className: 'contact__detail-content',
                                    children: [
                                      d.jsx('span', {
                                        className: 'contact__detail-label',
                                        children: s.label,
                                      }),
                                      d.jsx('span', {
                                        className: 'contact__detail-value',
                                        children: s.value,
                                      }),
                                      d.jsx('span', {
                                        className: 'contact__detail-description',
                                        children: s.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i
                            );
                          return s.href
                            ? d.jsx(
                                'a',
                                {
                                  href: s.href,
                                  className: 'contact__detail-link',
                                  'aria-label': `${s.label}: ${s.value}`,
                                  children: t,
                                },
                                i
                              )
                            : t;
                        }),
                      }),
                      d.jsxs(y.div, {
                        className: 'contact__social',
                        variants: e,
                        children: [
                          d.jsx('h4', {
                            className: 'contact__social-title',
                            children: 'Follow Me',
                          }),
                          d.jsx(j, {}),
                        ],
                      }),
                      d.jsxs(y.div, {
                        className: 'contact__availability',
                        variants: e,
                        children: [
                          d.jsxs('div', {
                            className: 'contact__availability-indicator',
                            children: [
                              d.jsx('div', { className: 'contact__availability-dot' }),
                              d.jsx('span', {
                                className: 'contact__availability-text',
                                children: h.availability,
                              }),
                            ],
                          }),
                          d.jsx('p', {
                            className: 'contact__availability-description',
                            children: 'Currently accepting new projects and collaborations',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                d.jsx(y.div, {
                  className: 'contact__form-container',
                  variants: e,
                  children: d.jsx(be, {}),
                }),
              ],
            }),
            d.jsx(y.div, {
              className: 'contact__additional',
              variants: e,
              children: d.jsxs('div', {
                className: 'contact__additional-grid',
                children: [
                  d.jsxs('div', {
                    className: 'contact__additional-item',
                    children: [
                      d.jsx('h4', {
                        className: 'contact__additional-title',
                        children: 'Response Time',
                      }),
                      d.jsx('p', {
                        className: 'contact__additional-text',
                        children:
                          'I typically respond to emails within 24 hours during business days.',
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'contact__additional-item',
                    children: [
                      d.jsx('h4', {
                        className: 'contact__additional-title',
                        children: 'Project Timeline',
                      }),
                      d.jsx('p', {
                        className: 'contact__additional-text',
                        children: 'Most projects start within 1-2 weeks of initial consultation.',
                      }),
                    ],
                  }),
                  d.jsxs('div', {
                    className: 'contact__additional-item',
                    children: [
                      d.jsx('h4', {
                        className: 'contact__additional-title',
                        children: 'Free Consultation',
                      }),
                      d.jsx('p', {
                        className: 'contact__additional-text',
                        children:
                          '30-minute discovery call to discuss your project needs and goals.',
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx(y.div, {
              className: 'contact__cta',
              variants: e,
              children: d.jsxs('div', {
                className: 'contact__cta-content',
                children: [
                  d.jsx('h3', {
                    className: 'contact__cta-title',
                    children: 'Ready to Start Your Project?',
                  }),
                  d.jsx('p', {
                    className: 'contact__cta-description',
                    children:
                      "Let's schedule a call to discuss your vision and how we can bring it to life.",
                  }),
                  d.jsxs('div', {
                    className: 'contact__cta-actions',
                    children: [
                      d.jsx('a', {
                        href: `mailto:${h.email}?subject=Project Inquiry`,
                        className: 'contact__cta-button contact__cta-button--primary',
                        children: 'Email Me',
                      }),
                      d.jsx('a', {
                        href: `tel:${h.phone}`,
                        className: 'contact__cta-button contact__cta-button--secondary',
                        children: 'Call Me',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  fe = (e = {}) => {
    const [s, i] = b.useState(!1),
      [a, t] = b.useState(!1),
      n = b.useRef(null);
    return (
      b.useEffect(() => {
        const s = n.current;
        if (!s) return;
        const r = new IntersectionObserver(
          ([e]) => {
            const s = e.isIntersecting;
            i(s), s && !a && t(!0);
          },
          l({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }, e)
        );
        return (
          r.observe(s),
          () => {
            r.unobserve(s), r.disconnect();
          }
        );
      }, [a, e]),
      [n, s, a]
    );
  },
  Ne = () => {
    const [e, s] = fe({ threshold: 0.3 }),
      [i, a] = fe({ threshold: 0.3 }),
      [t, n] = fe({ threshold: 0.3 }),
      [r, l] = fe({ threshold: 0.3 }),
      [c, o] = fe({ threshold: 0.3 });
    b.useEffect(() => {
      g('home'), (document.title = 'Thomas Musengwa - Full Stack Developer Portfolio');
      const e = document.querySelector('meta[name="description"]');
      e &&
        e.setAttribute(
          'content',
          'Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies. View my portfolio and get in touch.'
        );
    }, []);
    const m = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };
    return d.jsxs('main', {
      className: 'home',
      children: [
        d.jsx(y.section, {
          ref: e,
          initial: 'hidden',
          animate: s ? 'visible' : 'hidden',
          variants: m,
          id: 'hero',
          className: 'section',
          children: d.jsx(ce, {}),
        }),
        d.jsx(y.section, {
          ref: i,
          initial: 'hidden',
          animate: a ? 'visible' : 'hidden',
          variants: m,
          id: 'about',
          className: 'section',
          children: d.jsx(de, {}),
        }),
        d.jsx(y.section, {
          ref: t,
          initial: 'hidden',
          animate: n ? 'visible' : 'hidden',
          variants: m,
          id: 'portfolio',
          className: 'section',
          children: d.jsx(ue, {}),
        }),
        d.jsx(y.section, {
          ref: r,
          initial: 'hidden',
          animate: l ? 'visible' : 'hidden',
          variants: m,
          id: 'resume',
          className: 'section',
          children: d.jsx(ge, {}),
        }),
        ' ',
        d.jsx(y.section, {
          ref: c,
          initial: 'hidden',
          animate: o ? 'visible' : 'hidden',
          variants: m,
          id: 'contact',
          className: 'section',
          children: d.jsx(ye, {}),
        }),
      ],
    });
  };
export { Ne as default };
//# sourceMappingURL=Home.974e3d14.js.map
