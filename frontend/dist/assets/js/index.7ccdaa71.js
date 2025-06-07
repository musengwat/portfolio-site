var e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = (t, n, a) =>
    n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[n] = a),
  o = (e, t) => {
    for (var n in t || (t = {})) r.call(t, n) && s(e, n, t[n]);
    if (a) for (var n of a(t)) i.call(t, n) && s(e, n, t[n]);
    return e;
  },
  l = (e, a) => t(e, n(a)),
  c = (e, t, n) => (s(e, 'symbol' != typeof t ? t + '' : t, n), n),
  d = (e, t, n) =>
    new Promise((a, r) => {
      var i = e => {
          try {
            o(n.next(e));
          } catch (t) {
            r(t);
          }
        },
        s = e => {
          try {
            o(n.throw(e));
          } catch (t) {
            r(t);
          }
        },
        o = e => (e.done ? a(e.value) : Promise.resolve(e.value).then(i, s));
      o((n = n.apply(e, t)).next());
    });
import { r as m, b as h, a as u } from './vendor.45d6718b.js';
import { u as p, B as g, R as f, a as y } from './router.ffcab203.js';
import { m as v, A as w } from './animation.48638cd2.js';
import {
  M as _,
  S as b,
  X as x,
  a as j,
  G as k,
  b as S,
  L as E,
  T,
  I as N,
  Y as C,
  A as I,
  R as O,
  H as L,
  c as A,
} from './icons.c7f58f5c.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver(e => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes) 'LINK' === e.tagName && 'modulepreload' === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossOrigin
            ? (t.credentials = 'omit')
            : (t.credentials = 'same-origin'),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var P = { exports: {} },
  D = {},
  R = m,
  F = Symbol.for('react.element'),
  z = Symbol.for('react.fragment'),
  M = Object.prototype.hasOwnProperty,
  $ = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  B = { key: !0, ref: !0, __self: !0, __source: !0 };
function H(e, t, n) {
  var a,
    r = {},
    i = null,
    s = null;
  for (a in (void 0 !== n && (i = '' + n),
  void 0 !== t.key && (i = '' + t.key),
  void 0 !== t.ref && (s = t.ref),
  t))
    M.call(t, a) && !B.hasOwnProperty(a) && (r[a] = t[a]);
  if (e && e.defaultProps) for (a in (t = e.defaultProps)) void 0 === r[a] && (r[a] = t[a]);
  return { $$typeof: F, type: e, key: i, ref: s, props: r, _owner: $.current };
}
(D.Fragment = z), (D.jsx = H), (D.jsxs = H), (P.exports = D);
var V = P.exports,
  G = {},
  U = h;
(G.createRoot = U.createRoot), (G.hydrateRoot = U.hydrateRoot);
const q = {},
  J = function (e, t, n) {
    if (!t || 0 === t.length) return e();
    const a = document.getElementsByTagName('link');
    return Promise.all(
      t.map(e => {
        if (
          (e = (function (e) {
            return '/' + e;
          })(e)) in q
        )
          return;
        q[e] = !0;
        const t = e.endsWith('.css'),
          r = t ? '[rel="stylesheet"]' : '';
        if (!!n)
          for (let n = a.length - 1; n >= 0; n--) {
            const r = a[n];
            if (r.href === e && (!t || 'stylesheet' === r.rel)) return;
          }
        else if (document.querySelector(`link[href="${e}"]${r}`)) return;
        const i = document.createElement('link');
        return (
          (i.rel = t ? 'stylesheet' : 'modulepreload'),
          t || ((i.as = 'script'), (i.crossOrigin = '')),
          (i.href = e),
          document.head.appendChild(i),
          t
            ? new Promise((t, n) => {
                i.addEventListener('load', t),
                  i.addEventListener('error', () => n(new Error(`Unable to preload CSS for ${e}`)));
              })
            : void 0
        );
      })
    )
      .then(() => e())
      .catch(e => {
        const t = new Event('vite:preloadError', { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
      });
  },
  W = m.createContext(),
  Y = ({ children: e }) => {
    const [t, n] = m.useState(() => {
      const e = localStorage.getItem('portfolio-theme');
      return (
        e ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
      );
    });
    m.useEffect(() => {
      document.documentElement.setAttribute('data-theme', t),
        localStorage.setItem('portfolio-theme', t);
      const e = document.querySelector('meta[name="theme-color"]');
      if (e) {
        const n = { light: '#ffffff', dark: '#0f0f23' };
        e.setAttribute('content', n[t]);
      }
    }, [t]),
      m.useEffect(() => {
        const e = window.matchMedia('(prefers-color-scheme: dark)'),
          t = e => {
            localStorage.getItem('portfolio-theme') || n(e.matches ? 'dark' : 'light');
          };
        return e.addEventListener('change', t), () => e.removeEventListener('change', t);
      }, []);
    const a = {
      theme: t,
      toggleTheme: () => {
        n(e => ('light' === e ? 'dark' : 'light'));
      },
      setTheme: n,
    };
    return V.jsx(W.Provider, { value: a, children: e });
  },
  K = m.createContext(),
  Q = () => {
    const e = m.useContext(K);
    if (!e) throw new Error('useApp must be used within an AppProvider');
    return e;
  },
  X = {
    loading: !1,
    error: null,
    contactForm: { isSubmitting: !1, submitted: !1, error: null },
    portfolio: { selectedFilter: 'all', projects: [], loading: !1 },
    testimonials: { data: [], loading: !1, currentIndex: 0 },
    analytics: { pageViews: 0, visitDuration: 0 },
  },
  Z = 'SET_LOADING',
  ee = 'SET_ERROR',
  te = 'CLEAR_ERROR',
  ne = 'SET_CONTACT_SUBMITTING',
  ae = 'SET_CONTACT_SUBMITTED',
  re = 'SET_CONTACT_ERROR',
  ie = 'RESET_CONTACT_FORM',
  se = 'SET_PORTFOLIO_FILTER',
  oe = 'SET_PROJECTS',
  le = 'SET_PROJECTS_LOADING',
  ce = 'SET_TESTIMONIALS',
  de = 'SET_TESTIMONIALS_LOADING',
  me = 'SET_TESTIMONIAL_INDEX',
  he = 'UPDATE_ANALYTICS',
  ue = (e, t) => {
    switch (t.type) {
      case Z:
        return l(o({}, e), { loading: t.payload });
      case ee:
        return l(o({}, e), { error: t.payload });
      case te:
        return l(o({}, e), { error: null });
      case ne:
        return l(o({}, e), { contactForm: l(o({}, e.contactForm), { isSubmitting: t.payload }) });
      case ae:
        return l(o({}, e), {
          contactForm: l(o({}, e.contactForm), {
            submitted: t.payload,
            isSubmitting: !1,
            error: null,
          }),
        });
      case re:
        return l(o({}, e), {
          contactForm: l(o({}, e.contactForm), { error: t.payload, isSubmitting: !1 }),
        });
      case ie:
        return l(o({}, e), { contactForm: X.contactForm });
      case se:
        return l(o({}, e), { portfolio: l(o({}, e.portfolio), { selectedFilter: t.payload }) });
      case oe:
        return l(o({}, e), {
          portfolio: l(o({}, e.portfolio), { projects: t.payload, loading: !1 }),
        });
      case le:
        return l(o({}, e), { portfolio: l(o({}, e.portfolio), { loading: t.payload }) });
      case ce:
        return l(o({}, e), {
          testimonials: l(o({}, e.testimonials), { data: t.payload, loading: !1 }),
        });
      case de:
        return l(o({}, e), { testimonials: l(o({}, e.testimonials), { loading: t.payload }) });
      case me:
        return l(o({}, e), { testimonials: l(o({}, e.testimonials), { currentIndex: t.payload }) });
      case he:
        return l(o({}, e), { analytics: o(o({}, e.analytics), t.payload) });
      default:
        return e;
    }
  },
  pe = ({ children: e }) => {
    const [t, n] = m.useReducer(ue, X),
      a = o(
        { state: t },
        {
          setLoading: e => n({ type: Z, payload: e }),
          setError: e => n({ type: ee, payload: e }),
          clearError: () => n({ type: te }),
          setContactSubmitting: e => n({ type: ne, payload: e }),
          setContactSubmitted: e => n({ type: ae, payload: e }),
          setContactError: e => n({ type: re, payload: e }),
          resetContactForm: () => n({ type: ie }),
          setPortfolioFilter: e => n({ type: se, payload: e }),
          setProjects: e => n({ type: oe, payload: e }),
          setProjectsLoading: e => n({ type: le, payload: e }),
          setTestimonials: e => n({ type: ce, payload: e }),
          setTestimonialsLoading: e => n({ type: de, payload: e }),
          setTestimonialIndex: e => n({ type: me, payload: e }),
          updateAnalytics: e => n({ type: he, payload: e }),
        }
      );
    return V.jsx(K.Provider, { value: a, children: e });
  },
  ge = ({ isMobile: e = !1, onItemClick: t }) => {
    const [n, a] = m.useState('hero'),
      r = (() => {
        const [e, t] = m.useState(0);
        return (
          m.useEffect(() => {
            const e = () => {
              t(window.pageYOffset);
            };
            return (
              window.addEventListener('scroll', e),
              e(),
              () => window.removeEventListener('scroll', e)
            );
          }, []),
          e
        );
      })(),
      i = [
        { id: 'hero', label: 'Home', href: '#hero' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
        { id: 'resume', label: 'Resume', href: '#resume' },
        { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
        { id: 'contact', label: 'Contact', href: '#contact' },
      ];
    m.useEffect(() => {
      const e = i.map(e => document.getElementById(e.id)).map(e => (e ? e.offsetTop - 100 : 0)),
        t = e.findIndex((t, n) => {
          const a = e[n + 1];
          return r >= t && (!a || r < a);
        });
      t >= 0 && a(i[t].id);
    }, [r]);
    const s = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: e ? 0.1 : 0.05, delayChildren: e ? 0.2 : 0 },
        },
      },
      o = {
        hidden: { opacity: 0, y: e ? 20 : 0, x: e ? 0 : -20 },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
      };
    return V.jsx(v.nav, {
      className: 'navigation ' + (e ? 'navigation--mobile' : 'navigation--desktop'),
      variants: s,
      initial: 'hidden',
      animate: 'visible',
      children: V.jsx('ul', {
        className: 'navigation__list',
        children: i.map((a, r) =>
          V.jsx(
            v.li,
            {
              className: 'navigation__item',
              variants: o,
              children: V.jsxs(v.a, {
                href: a.href,
                className: 'navigation__link ' + (n === a.id ? 'navigation__link--active' : ''),
                onClick: e =>
                  ((e, n, a) => {
                    e.preventDefault();
                    const r = document.getElementById(a);
                    r && r.scrollIntoView({ behavior: 'smooth', block: 'start' }), null == t || t();
                  })(e, a.href, a.id),
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: [
                  V.jsx('span', { className: 'navigation__link-text', children: a.label }),
                  n === a.id &&
                    V.jsx(v.span, {
                      className: 'navigation__link-indicator',
                      layoutId: e ? 'mobile-indicator' : 'desktop-indicator',
                      transition: { type: 'spring', stiffness: 380, damping: 30 },
                    }),
                ],
              }),
            },
            a.id
          )
        ),
      }),
    });
  },
  fe = e => {
    var t = e,
      {
        children: n,
        variant: s = 'primary',
        size: c = 'medium',
        disabled: d = !1,
        loading: m = !1,
        onClick: h,
        type: u = 'button',
        className: p = '',
      } = t,
      g = ((e, t) => {
        var n = {};
        for (var s in e) r.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
        if (null != e && a) for (var s of a(e)) t.indexOf(s) < 0 && i.call(e, s) && (n[s] = e[s]);
        return n;
      })(t, ['children', 'variant', 'size', 'disabled', 'loading', 'onClick', 'type', 'className']);
    const f = ['btn', `btn--${s}`, `btn--${c}`, d && 'btn--disabled', m && 'btn--loading', p]
      .filter(Boolean)
      .join(' ');
    return V.jsxs(
      v.button,
      l(
        o(
          {
            className: f,
            onClick: e => {
              d || m || null == h || h(e);
            },
            disabled: d || m,
            type: u,
            whileHover: { scale: d || m ? 1 : 1.02 },
            whileTap: { scale: d || m ? 1 : 0.98 },
            transition: { type: 'spring', stiffness: 400, damping: 17 },
          },
          g
        ),
        {
          children: [
            V.jsxs('span', {
              className: 'btn__content',
              children: [
                m &&
                  V.jsx('span', {
                    className: 'btn__spinner',
                    children: V.jsx('svg', {
                      viewBox: '0 0 24 24',
                      className: 'btn__spinner-icon',
                      children: V.jsxs('circle', {
                        cx: '12',
                        cy: '12',
                        r: '10',
                        stroke: 'currentColor',
                        strokeWidth: '4',
                        fill: 'none',
                        strokeLinecap: 'round',
                        strokeDasharray: '31.416',
                        strokeDashoffset: '31.416',
                        children: [
                          V.jsx('animate', {
                            attributeName: 'stroke-dasharray',
                            dur: '2s',
                            values: '0 31.416;15.708 15.708;0 31.416;0 31.416',
                            repeatCount: 'indefinite',
                          }),
                          V.jsx('animate', {
                            attributeName: 'stroke-dashoffset',
                            dur: '2s',
                            values: '0;-15.708;-31.416;-31.416',
                            repeatCount: 'indefinite',
                          }),
                        ],
                      }),
                    }),
                  }),
                n,
              ],
            }),
            V.jsx('span', { className: 'btn__ripple' }),
          ],
        }
      )
    );
  },
  ye = () => {
    const [e, t] = m.useState(!1),
      [n, a] = m.useState(!1),
      { theme: r, toggleTheme: i } = (() => {
        const e = m.useContext(W);
        if (!e) throw new Error('useTheme must be used within a ThemeProvider');
        return e;
      })();
    m.useEffect(() => {
      const e = () => {
        const e = window.pageYOffset;
        t(e > 50);
      };
      return window.addEventListener('scroll', e), () => window.removeEventListener('scroll', e);
    }, []);
    const s = () => {
      a(!1);
    };
    return V.jsxs(V.Fragment, {
      children: [
        V.jsx(v.header, {
          className: 'header ' + (e ? 'header--scrolled' : ''),
          variants: {
            transparent: {
              backgroundColor: 'rgba(255, 255, 255, 0)',
              backdropFilter: 'blur(0px)',
              boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            },
            solid: {
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            },
          },
          animate: e ? 'solid' : 'transparent',
          transition: { duration: 0.3 },
          children: V.jsxs('div', {
            className: 'header__container',
            children: [
              V.jsx(v.div, {
                className: 'header__logo',
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: V.jsx('a', {
                  href: '/',
                  className: 'header__logo-link',
                  children: V.jsx('span', { className: 'header__logo-text', children: 'JD' }),
                }),
              }),
              V.jsx('div', {
                className: 'header__nav-desktop',
                children: V.jsx(ge, { onItemClick: s }),
              }),
              V.jsxs('div', {
                className: 'header__actions',
                children: [
                  V.jsx(fe, {
                    variant: 'ghost',
                    size: 'small',
                    onClick: i,
                    className: 'header__theme-toggle',
                    'aria-label': `Switch to ${'light' === r ? 'dark' : 'light'} theme`,
                    children: V.jsx(w, {
                      mode: 'wait',
                      children:
                        'light' === r
                          ? V.jsx(
                              v.div,
                              {
                                initial: { rotate: -90, opacity: 0 },
                                animate: { rotate: 0, opacity: 1 },
                                exit: { rotate: 90, opacity: 0 },
                                transition: { duration: 0.2 },
                                children: V.jsx(_, { size: 18 }),
                              },
                              'moon'
                            )
                          : V.jsx(
                              v.div,
                              {
                                initial: { rotate: 90, opacity: 0 },
                                animate: { rotate: 0, opacity: 1 },
                                exit: { rotate: -90, opacity: 0 },
                                transition: { duration: 0.2 },
                                children: V.jsx(b, { size: 18 }),
                              },
                              'sun'
                            ),
                    }),
                  }),
                  V.jsx(fe, {
                    variant: 'ghost',
                    size: 'small',
                    onClick: () => {
                      a(!n);
                    },
                    className: 'header__mobile-toggle',
                    'aria-label': 'Toggle mobile menu',
                    children: V.jsx(w, {
                      mode: 'wait',
                      children: n
                        ? V.jsx(
                            v.div,
                            {
                              initial: { rotate: -90, opacity: 0 },
                              animate: { rotate: 0, opacity: 1 },
                              exit: { rotate: 90, opacity: 0 },
                              transition: { duration: 0.2 },
                              children: V.jsx(x, { size: 20 }),
                            },
                            'close'
                          )
                        : V.jsx(
                            v.div,
                            {
                              initial: { rotate: 90, opacity: 0 },
                              animate: { rotate: 0, opacity: 1 },
                              exit: { rotate: -90, opacity: 0 },
                              transition: { duration: 0.2 },
                              children: V.jsx(j, { size: 20 }),
                            },
                            'menu'
                          ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        V.jsx(w, {
          children:
            n &&
            V.jsxs(V.Fragment, {
              children: [
                V.jsx(v.div, {
                  className: 'header__mobile-backdrop',
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.3 },
                  onClick: s,
                }),
                V.jsx(v.div, {
                  className: 'header__mobile-menu',
                  initial: { x: '100%' },
                  animate: { x: 0 },
                  exit: { x: '100%' },
                  transition: { type: 'spring', damping: 25, stiffness: 200 },
                  children: V.jsxs('div', {
                    className: 'header__mobile-menu-content',
                    children: [
                      V.jsx(ge, { isMobile: !0, onItemClick: s }),
                      V.jsx('div', {
                        className: 'header__mobile-cta',
                        children: V.jsx(fe, {
                          variant: 'primary',
                          size: 'large',
                          onClick: () => {
                            var e;
                            s(),
                              null == (e = document.getElementById('contact')) ||
                                e.scrollIntoView({ behavior: 'smooth' });
                          },
                          children: 'Get In Touch',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        }),
      ],
    });
  },
  ve = {
    frontend: [
      {
        name: 'React',
        level: 95,
        years: 4,
        description: 'Expert in hooks, context, performance optimization, and advanced patterns',
      },
      {
        name: 'JavaScript',
        level: 92,
        years: 5,
        description: 'ES6+, async/await, closures, prototypes, and modern JS features',
      },
      {
        name: 'TypeScript',
        level: 88,
        years: 3,
        description: 'Strong typing, interfaces, generics, and advanced type manipulation',
      },
      {
        name: 'Vue.js',
        level: 80,
        years: 2,
        description: 'Composition API, Vuex, Vue Router, and component architecture',
      },
      {
        name: 'HTML5',
        level: 98,
        years: 5,
        description: 'Semantic markup, accessibility, web standards, and SEO optimization',
      },
      {
        name: 'CSS3',
        level: 95,
        years: 5,
        description: 'Flexbox, Grid, animations, responsive design, and modern CSS features',
      },
      {
        name: 'Sass',
        level: 90,
        years: 4,
        description: 'Mixins, variables, nesting, and maintainable stylesheet architecture',
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        years: 2,
        description: 'Utility-first approach, custom components, and design systems',
      },
    ],
    backend: [
      {
        name: 'Node.js',
        level: 93,
        years: 4,
        description: 'Express, Koa, microservices, and scalable server-side applications',
      },
      {
        name: 'Express',
        level: 90,
        years: 4,
        description: 'RESTful APIs, middleware, authentication, and security best practices',
      },
      {
        name: 'Python',
        level: 87,
        years: 3,
        description: 'Django, Flask, FastAPI, data processing, and automation scripts',
      },
      {
        name: 'Django',
        level: 82,
        years: 2,
        description: 'ORM, admin interface, authentication, and full-stack web development',
      },
      {
        name: 'FastAPI',
        level: 78,
        years: 1,
        description: 'Modern Python API framework with automatic documentation',
      },
      {
        name: 'PHP',
        level: 75,
        years: 3,
        description: 'Laravel, Symfony, and legacy system maintenance',
      },
      {
        name: 'Laravel',
        level: 72,
        years: 2,
        description: 'Eloquent ORM, Artisan CLI, and rapid application development',
      },
      {
        name: 'Java',
        level: 70,
        years: 2,
        description: 'Spring Boot, Maven, enterprise applications, and design patterns',
      },
    ],
    database: [
      {
        name: 'MongoDB',
        level: 88,
        years: 3,
        description: 'Document design, aggregation pipelines, and performance optimization',
      },
      {
        name: 'PostgreSQL',
        level: 85,
        years: 3,
        description: 'Complex queries, indexing, stored procedures, and database design',
      },
      {
        name: 'MySQL',
        level: 82,
        years: 4,
        description: 'Query optimization, replication, and database administration',
      },
      {
        name: 'Redis',
        level: 80,
        years: 2,
        description: 'Caching strategies, pub/sub, and session management',
      },
      {
        name: 'Firebase',
        level: 75,
        years: 2,
        description: 'Firestore, Authentication, Cloud Functions, and real-time features',
      },
    ],
    tools: [
      {
        name: 'Git',
        level: 95,
        years: 5,
        description: 'Version control, branching strategies, and collaborative workflows',
      },
      {
        name: 'Docker',
        level: 88,
        years: 3,
        description: 'Containerization, multi-stage builds, and development environments',
      },
      {
        name: 'AWS',
        level: 82,
        years: 2,
        description: 'EC2, S3, Lambda, RDS, and serverless architectures',
      },
      {
        name: 'Kubernetes',
        level: 75,
        years: 1,
        description: 'Container orchestration, deployments, and cluster management',
      },
      {
        name: 'Linux',
        level: 85,
        years: 4,
        description: 'Server administration, shell scripting, and system optimization',
      },
      {
        name: 'Nginx',
        level: 78,
        years: 2,
        description: 'Reverse proxy, load balancing, and web server configuration',
      },
    ],
  },
  we = {
    name: 'Thomas Musengwa',
    title: 'Full Stack Developer',
    email: 'ThomasMusengwa1@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    experience: '5+',
    availability: 'Available for hire',
    timezone: 'PST (UTC-8)',
    languages: ['English (Native)', 'Spanish (Conversational)', 'French (Basic)'],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: '2023',
        credential: 'https://aws.amazon.com/verification',
      },
      {
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: '2022',
        credential: 'https://coursera.org/verify/certificate',
      },
      {
        name: 'Google Cloud Professional',
        issuer: 'Google Cloud',
        date: '2023',
        credential: 'https://cloud.google.com/certification',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        year: '2019',
        gpa: '3.8/4.0',
        honors: ['Magna Cum Laude', "Dean's List"],
      },
      {
        degree: 'Full Stack Web Development Bootcamp',
        school: 'General Assembly',
        year: '2018',
        duration: '6 months intensive',
        focus: 'Modern web technologies and agile development',
      },
    ],
    interests: [
      'Open Source Contributions',
      'Technology Blogging',
      'Mentoring Developers',
      'Rock Climbing',
      'Photography',
      'Travel & Culture',
    ],
    workPreferences: {
      remoteWork: !0,
      relocation: !1,
      travel: 'Occasional',
      contractWork: !0,
      fullTime: !0,
      partTime: !1,
    },
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/johndoe',
        icon: 'github',
        username: '@johndoe',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/johndoe',
        icon: 'linkedin',
        username: 'johndoe',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/johndoe',
        icon: 'twitter',
        username: '@johndoe',
      },
      {
        platform: 'Instagram',
        url: 'https://instagram.com/johndoe',
        icon: 'instagram',
        username: '@johndoe',
      },
    ],
  };
class _e extends Error {
  constructor(e, t = 0, n = null) {
    super(e), (this.name = 'ApiError'), (this.status = t), (this.data = n);
  }
}
const be = new (class {
  constructor() {
    (this.baseURL = 'http://localhost:5000/api'),
      (this.defaultHeaders = { 'Content-Type': 'application/json' });
  }
  request(e) {
    return d(this, arguments, function* (e, t = {}) {
      const n = `${this.baseURL}${e}`,
        a = o({ headers: o(o({}, this.defaultHeaders), t.headers) }, t),
        r = localStorage.getItem('auth_token');
      r && (a.headers.Authorization = `Bearer ${r}`);
      try {
        const e = yield fetch(n, a),
          t = e.headers.get('content-type');
        let r;
        if (((r = t && t.includes('application/json') ? yield e.json() : yield e.text()), !e.ok))
          throw new _e(r.message || `HTTP error! status: ${e.status}`, e.status, r);
        return r;
      } catch (i) {
        if (i instanceof _e) throw i;
        if ('TypeError' === i.name && i.message.includes('fetch'))
          throw new _e('Network error - please check your connection', 0);
        throw new _e(i.message || 'An unexpected error occurred', 0);
      }
    });
  }
  get(e) {
    return d(this, arguments, function* (e, t = {}) {
      const n = new URLSearchParams(t).toString(),
        a = n ? `${e}?${n}` : e;
      return this.request(a, { method: 'GET' });
    });
  }
  post(e) {
    return d(this, arguments, function* (e, t = {}) {
      return this.request(e, { method: 'POST', body: JSON.stringify(t) });
    });
  }
  put(e) {
    return d(this, arguments, function* (e, t = {}) {
      return this.request(e, { method: 'PUT', body: JSON.stringify(t) });
    });
  }
  patch(e) {
    return d(this, arguments, function* (e, t = {}) {
      return this.request(e, { method: 'PATCH', body: JSON.stringify(t) });
    });
  }
  delete(e) {
    return d(this, null, function* () {
      return this.request(e, { method: 'DELETE' });
    });
  }
  uploadFile(e, t) {
    return d(this, arguments, function* (e, t, n = {}) {
      const a = new FormData();
      return (
        a.append('file', t),
        Object.keys(n).forEach(e => {
          a.append(e, n[e]);
        }),
        this.request(e, { method: 'POST', body: a, headers: {} })
      );
    });
  }
  getProjects() {
    return d(this, arguments, function* (e = {}) {
      return this.get('/projects', e);
    });
  }
  getProject(e) {
    return d(this, null, function* () {
      return this.get(`/projects/${e}`);
    });
  }
  sendContactMessage(e) {
    return d(this, null, function* () {
      return this.post('/contact', e);
    });
  }
  getContactMessages() {
    return d(this, null, function* () {
      return this.get('/admin/messages');
    });
  }
  getTestimonials() {
    return d(this, null, function* () {
      return this.get('/testimonials');
    });
  }
  submitTestimonial(e) {
    return d(this, null, function* () {
      return this.post('/testimonials', e);
    });
  }
  downloadResume() {
    return d(this, null, function* () {
      return this.request('/resume/download', {
        method: 'GET',
        headers: { Accept: 'application/pdf' },
      });
    });
  }
  trackResumeDownload() {
    return d(this, null, function* () {
      return this.post('/resume/track-download');
    });
  }
  trackEvent(e) {
    return d(this, null, function* () {
      return this.post('/analytics/track', e);
    });
  }
  getAnalytics() {
    return d(this, arguments, function* (e = {}) {
      return this.get('/admin/analytics', e);
    });
  }
  login(e) {
    return d(this, null, function* () {
      const t = yield this.post('/auth/login', e);
      return t.token && localStorage.setItem('auth_token', t.token), t;
    });
  }
  logout() {
    return d(this, null, function* () {
      return localStorage.removeItem('auth_token'), this.post('/auth/logout');
    });
  }
  verifyToken() {
    return d(this, null, function* () {
      return this.get('/auth/verify');
    });
  }
  getAdminStats() {
    return d(this, null, function* () {
      return this.get('/admin/stats');
    });
  }
  updateProject(e, t) {
    return d(this, null, function* () {
      return this.put(`/admin/projects/${e}`, t);
    });
  }
  deleteProject(e) {
    return d(this, null, function* () {
      return this.delete(`/admin/projects/${e}`);
    });
  }
  deleteContactMessage(e) {
    return d(this, null, function* () {
      return this.delete(`/admin/messages/${e}`);
    });
  }
  setAuthToken(e) {
    e ? localStorage.setItem('auth_token', e) : localStorage.removeItem('auth_token');
  }
  getAuthToken() {
    return localStorage.getItem('auth_token');
  }
  isAuthenticated() {
    return !!this.getAuthToken();
  }
})();
const xe = new (class {
    constructor() {
      (this.sessionStartTime = Date.now()),
        (this.pageViews = {}),
        (this.events = []),
        (this.isInitialized = !1);
    }
    init() {
      this.isInitialized ||
        ((this.isInitialized = !0),
        this.trackSessionStart(),
        this.setupEventListeners(),
        'function' == typeof window.gtag && window.gtag('config', 'GA_MEASUREMENT_ID'));
    }
    trackPageView(e, t = '') {
      const n = {
        page: e,
        title: t,
        timestamp: Date.now(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        viewport: { width: window.innerWidth, height: window.innerHeight },
      };
      (this.pageViews[e] = n),
        'function' == typeof window.gtag &&
          window.gtag('event', 'page_view', {
            page_title: t,
            page_location: window.location.href,
            page_path: `/${e}`,
          }),
        this.sendToBackend('pageview', n);
    }
    trackEvent(e, t = {}) {
      const n = { name: e, data: t, timestamp: Date.now(), page: window.location.pathname };
      this.events.push(n),
        'function' == typeof window.gtag && window.gtag('event', e, t),
        this.sendToBackend('event', n);
    }
    trackScrollDepth() {
      const e = window.pageYOffset,
        t = document.documentElement.scrollHeight - window.innerHeight,
        n = Math.round((e / t) * 100),
        a = [25, 50, 75, 100].find(e => n >= e && !this.hasTrackedScrollDepth(e));
      a &&
        (this.trackEvent('scroll_depth', { depth: a, page: window.location.pathname }),
        this.markScrollDepthTracked(a));
    }
    trackSessionEnd() {
      const e = Date.now() - this.sessionStartTime;
      this.trackEvent('session_end', {
        duration: e,
        pageViews: Object.keys(this.pageViews).length,
        events: this.events.length,
      });
    }
    trackClick(e, t = '', n = {}) {
      this.trackEvent('click', o({ elementType: e, elementId: t }, n));
    }
    trackFormSubmission(e, t = !0, n = '') {
      this.trackEvent('form_submission', { formType: e, success: t, errorMessage: n });
    }
    trackDownload(e, t) {
      this.trackEvent('download', { fileName: e, fileType: t });
    }
    trackExternalLink(e, t = '') {
      this.trackEvent('external_link', { url: e, linkText: t });
    }
    trackSessionStart() {
      this.trackEvent('session_start', {
        timestamp: this.sessionStartTime,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        screen: { width: window.screen.width, height: window.screen.height },
      });
    }
    setupEventListeners() {
      let e;
      window.addEventListener('scroll', () => {
        clearTimeout(e),
          (e = setTimeout(() => {
            this.trackScrollDepth();
          }, 100));
      }),
        window.addEventListener('beforeunload', () => {
          this.trackSessionEnd();
        }),
        document.addEventListener('visibilitychange', () => {
          document.hidden ? this.trackEvent('page_hidden') : this.trackEvent('page_visible');
        }),
        document.addEventListener('click', e => {
          const t = e.target.closest('a');
          t &&
            t.hostname !== window.location.hostname &&
            this.trackExternalLink(t.href, t.textContent);
        });
    }
    hasTrackedScrollDepth(e) {
      return this.events.some(
        t => 'scroll_depth' === t.name && t.data.depth === e && t.page === window.location.pathname
      );
    }
    markScrollDepthTracked(e) {}
    sendToBackend(e, t) {
      return d(this, null, function* () {
        try {
          yield be.post('/analytics/track', {
            type: e,
            data: t,
            sessionId: this.getSessionId(),
            timestamp: Date.now(),
          });
        } catch (n) {}
      });
    }
    getSessionId() {
      let e = sessionStorage.getItem('analytics_session_id');
      return (
        e ||
          ((e = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)),
          sessionStorage.setItem('analytics_session_id', e)),
        e
      );
    }
    getSummary() {
      return {
        sessionDuration: Date.now() - this.sessionStartTime,
        pageViews: Object.keys(this.pageViews).length,
        events: this.events.length,
        pages: Object.keys(this.pageViews),
        lastActivity:
          this.events.length > 0
            ? this.events[this.events.length - 1].timestamp
            : this.sessionStartTime,
      };
    }
  })(),
  je = (e, t) => xe.trackPageView(e, t),
  ke = (e, t, n) => xe.trackFormSubmission(e, t, n),
  Se = (e, t) => xe.trackDownload(e, t),
  Ee = ({ variant: e = 'default', size: t = 'medium' }) => {
    var n;
    const a = (e, t) => {
        ((e, t) => {
          xe.trackExternalLink(e, t);
        })(e, t);
      },
      r = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
      },
      i = { small: 16, medium: 20, large: 24 };
    return V.jsxs(v.div, {
      className: `social-links social-links--${e} social-links--${t}`,
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      },
      initial: 'hidden',
      animate: 'visible',
      children: [
        null == (n = we.socialLinks)
          ? void 0
          : n.map((n, s) => {
              const o =
                ((l = n.icon),
                { github: S, linkedin: E, twitter: T, instagram: N, youtube: C, website: k }[
                  l.toLowerCase()
                ] || k);
              var l;
              return V.jsxs(
                v.a,
                {
                  href: n.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: `social-links__link social-links__link--${n.platform.toLowerCase()}`,
                  onClick: () => a(n.url, n.platform),
                  variants: r,
                  whileHover: { scale: 1.1, y: -2, transition: { duration: 0.2 } },
                  whileTap: { scale: 0.95 },
                  'aria-label': `Visit my ${n.platform} profile`,
                  title: `${n.platform} - ${n.username}`,
                  children: [
                    V.jsx(o, { size: i[t] }),
                    'detailed' === e &&
                      V.jsxs('div', {
                        className: 'social-links__details',
                        children: [
                          V.jsx('span', {
                            className: 'social-links__platform',
                            children: n.platform,
                          }),
                          V.jsx('span', {
                            className: 'social-links__username',
                            children: n.username,
                          }),
                        ],
                      }),
                  ],
                },
                s
              );
            }),
        V.jsxs(v.a, {
          href: `mailto:${we.email}`,
          className: 'social-links__link social-links__link--email',
          onClick: () => a(`mailto:${we.email}`, 'Email'),
          variants: r,
          whileHover: { scale: 1.1, y: -2, transition: { duration: 0.2 } },
          whileTap: { scale: 0.95 },
          'aria-label': 'Send me an email',
          title: `Email - ${we.email}`,
          children: [
            V.jsxs('svg', {
              width: i[t],
              height: i[t],
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              children: [
                V.jsx('path', { d: 'm4 4 16 0 0 16-16 0z' }),
                V.jsx('path', { d: 'm4 4 8 8 8-8' }),
              ],
            }),
            'detailed' === e &&
              V.jsxs('div', {
                className: 'social-links__details',
                children: [
                  V.jsx('span', { className: 'social-links__platform', children: 'Email' }),
                  V.jsx('span', { className: 'social-links__username', children: we.email }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Te = () => {
    const e = new Date().getFullYear();
    return V.jsx('footer', {
      className: 'footer',
      children: V.jsxs('div', {
        className: 'footer__content',
        children: [
          V.jsx('div', {
            className: 'footer__social',
            children: V.jsx(Ee, { variant: 'secondary', size: 'small' }),
          }),
          V.jsxs('p', {
            className: 'footer__copyright',
            children: ['© ', e, ' Thomas Musengwa. All rights reserved.'],
          }),
        ],
      }),
    });
  },
  Ne = () => {
    const [e, t] = m.useState(0);
    return (
      m.useEffect(() => {
        const e = () => {
          const e = window.pageYOffset,
            n = document.documentElement.scrollHeight - window.innerHeight;
          t((e / n) * 100);
        };
        return (
          window.addEventListener('scroll', e), e(), () => window.removeEventListener('scroll', e)
        );
      }, []),
      V.jsx(v.div, {
        className: 'scroll-indicator',
        initial: { scaleX: 0 },
        animate: { scaleX: e / 100 },
        transition: { duration: 0.1, ease: 'easeOut' },
      })
    );
  },
  Ce = ({ children: e }) =>
    V.jsxs('div', {
      className: 'layout',
      children: [
        V.jsx(Ne, {}),
        V.jsx(ye, {}),
        V.jsx('main', { className: 'layout__main', children: e }),
        V.jsx(Te, {}),
      ],
    }),
  Ie = () =>
    V.jsxs('div', {
      className: 'loading-spinner',
      children: [
        V.jsx('div', { className: 'loading-spinner__inner' }),
        V.jsx('span', { className: 'sr-only', children: 'Loading...' }),
      ],
    });
class Oe extends u.Component {
  constructor(e) {
    super(e),
      c(this, 'logErrorToService', (e, t) => {
        fetch('/api/errors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: e.message,
            stack: e.stack,
            componentStack: t.componentStack,
            errorId: this.state.errorId,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          }),
        }).catch(e => {});
      }),
      c(this, 'handleRetry', () => {
        this.setState({ hasError: !1, error: null, errorInfo: null, errorId: null });
      }),
      c(this, 'handleGoHome', () => {
        window.location.href = '/';
      }),
      c(this, 'handleReload', () => {
        window.location.reload();
      }),
      (this.state = { hasError: !1, error: null, errorInfo: null, errorId: null });
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, errorId: Date.now().toString() };
  }
  componentDidCatch(e, t) {
    this.setState({ error: e, errorInfo: t }),
      'undefined' != typeof window &&
        window.gtag &&
        window.gtag('event', 'exception', {
          description: e.message,
          fatal: !0,
          error_id: this.state.errorId,
        }),
      this.logErrorToService(e, t);
  }
  render() {
    return this.state.hasError
      ? V.jsx('div', {
          className: 'error-boundary',
          children: V.jsx('div', {
            className: 'error-boundary__container',
            children: V.jsxs('div', {
              className: 'error-boundary__content',
              children: [
                V.jsx('div', {
                  className: 'error-boundary__icon',
                  children: V.jsx(I, { size: 64 }),
                }),
                V.jsxs('div', {
                  className: 'error-boundary__message',
                  children: [
                    V.jsx('h1', {
                      className: 'error-boundary__title',
                      children: 'Oops! Something went wrong',
                    }),
                    V.jsx('p', {
                      className: 'error-boundary__description',
                      children:
                        'I apologize for the inconvenience. An unexpected error occurred while loading this page. Please try one of the options below to continue.',
                    }),
                  ],
                }),
                V.jsxs('div', {
                  className: 'error-boundary__actions',
                  children: [
                    V.jsxs('button', {
                      onClick: this.handleRetry,
                      className: 'error-boundary__button error-boundary__button--primary',
                      children: [V.jsx(O, { size: 20 }), 'Try Again'],
                    }),
                    V.jsxs('button', {
                      onClick: this.handleGoHome,
                      className: 'error-boundary__button error-boundary__button--secondary',
                      children: [V.jsx(L, { size: 20 }), 'Go Home'],
                    }),
                    V.jsxs('button', {
                      onClick: this.handleReload,
                      className: 'error-boundary__button error-boundary__button--outline',
                      children: [V.jsx(O, { size: 20 }), 'Reload Page'],
                    }),
                  ],
                }),
                V.jsxs('div', {
                  className: 'error-boundary__contact',
                  children: [
                    V.jsx('p', {
                      className: 'error-boundary__contact-text',
                      children: 'If this problem persists, please contact me directly:',
                    }),
                    V.jsxs('a', {
                      href: 'mailto:ThomasMusengwa1@gmail.com?subject=Website Error - ID: {this.state.errorId}',
                      className: 'error-boundary__contact-link',
                      children: [V.jsx(A, { size: 16 }), 'ThomasMusengwa1@gmail.com'],
                    }),
                  ],
                }),
                !1,
                V.jsx('div', {
                  className: 'error-boundary__error-id',
                  children: V.jsxs('small', { children: ['Error ID: ', this.state.errorId] }),
                }),
              ],
            }),
          }),
        })
      : this.props.children;
  }
}
const Le = () => {
    const { pathname: e } = p();
    return (
      m.useEffect(() => {
        window.scrollTo(0, 0);
      }, [e]),
      null
    );
  },
  Ae = m.lazy(() =>
    J(
      () => import('./Home.974e3d14.js'),
      [
        'assets/js/Home.974e3d14.js',
        'assets/js/vendor.45d6718b.js',
        'assets/js/animation.48638cd2.js',
        'assets/js/icons.c7f58f5c.js',
        'assets/js/router.ffcab203.js',
        'assets/js/projects.4303f567.js',
        'assets/css/Home.a954a5f8.css',
      ]
    )
  ),
  Pe = m.lazy(() =>
    J(
      () => import('./ProjectDetail.e3bcd6ce.js'),
      [
        'assets/js/ProjectDetail.e3bcd6ce.js',
        'assets/js/vendor.45d6718b.js',
        'assets/js/projects.4303f567.js',
        'assets/js/router.ffcab203.js',
        'assets/js/animation.48638cd2.js',
        'assets/js/icons.c7f58f5c.js',
        'assets/css/ProjectDetail.2f4d06c4.css',
      ]
    )
  ),
  De = m.lazy(() =>
    J(
      () => import('./Admin.f1aeffd3.js'),
      [
        'assets/js/Admin.f1aeffd3.js',
        'assets/js/vendor.45d6718b.js',
        'assets/js/router.ffcab203.js',
        'assets/js/animation.48638cd2.js',
        'assets/js/icons.c7f58f5c.js',
      ]
    )
  );
function Re() {
  return V.jsx(Oe, {
    children: V.jsx(Y, {
      children: V.jsx(pe, {
        children: V.jsx(g, {
          children: V.jsxs('div', {
            className: 'App',
            children: [
              V.jsx(Le, {}),
              V.jsx(Ce, {
                children: V.jsx(m.Suspense, {
                  fallback: V.jsx(Ie, {}),
                  children: V.jsxs(f, {
                    children: [
                      V.jsx(y, { path: '/', element: V.jsx(Ae, {}) }),
                      V.jsx(y, { path: '/project/:id', element: V.jsx(Pe, {}) }),
                      V.jsx(y, { path: '/admin', element: V.jsx(De, {}) }),
                      V.jsx(y, {
                        path: '*',
                        element: V.jsx('div', {
                          className: 'not-found',
                          children: 'Page Not Found',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
xe.init(),
  'undefined' != typeof window &&
    'performance' in window &&
    window.addEventListener('load', () => {
      const e = performance.now();
      xe.trackEvent('page_load_complete', { load_time: Math.round(e), timestamp: Date.now() });
    });
G.createRoot(document.getElementById('root')).render(
  V.jsx(u.StrictMode, { children: V.jsx(Oe, { children: V.jsx(Re, {}) }) })
);
export { fe as B, Ee as S, be as a, ke as b, je as c, V as j, we as p, ve as s, Se as t, Q as u };
//# sourceMappingURL=index.7ccdaa71.js.map
