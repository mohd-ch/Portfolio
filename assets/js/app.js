/* Vue 3 app. Words come from content.js (window.SITE).
   Interactive parts: the people-process-systems diagram, the project tiles and
   their detail sheet, the contact selector and the scroll-spy nav. */
(function () {
  "use strict";

  var V = window.Vue;
  var createApp = V.createApp,
    ref = V.ref,
    computed = V.computed,
    watch = V.watch,
    nextTick = V.nextTick,
    onMounted = V.onMounted,
    onBeforeUnmount = V.onBeforeUnmount;

  var S = window.SITE;

  /* Highlights the nav link of the section being read. */
  function useSpy(ids) {
    var active = ref("");
    var io = null;
    onMounted(function () {
      if (!("IntersectionObserver" in window)) return;
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) active.value = e.target.id;
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      ids.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) io.observe(el);
      });
    });
    onBeforeUnmount(function () {
      if (io) io.disconnect();
    });
    return active;
  }

  /* Arrow, Home and End keys move between tabs, as in the ARIA tabs pattern. */
  function tabKeys(e, count, current, set) {
    var n = current;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (current + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (current - 1 + count) % count;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = count - 1;
    else return;
    e.preventDefault();
    var list = e.currentTarget.parentElement;
    set(n);
    nextTick(function () {
      var tabs = list.querySelectorAll('[role="tab"]');
      if (tabs[n]) tabs[n].focus();
    });
  }


  /* Small line drawings for the project tiles. They stand for the kind of work,
     they are not screenshots. */
  var ART = {
    flow: '<svg viewBox="0 0 240 120"><rect class="f" x="14" y="44" width="44" height="32" rx="8"/><rect class="f" x="98" y="18" width="44" height="32" rx="8"/><rect class="f" x="98" y="70" width="44" height="32" rx="8"/><rect class="f" x="182" y="44" width="44" height="32" rx="8"/><path class="s" d="M58 60H78V34H98M58 60H78V86H98M142 34H162V60H182M142 86H162V60H182"/><circle class="t" cx="36" cy="60" r="5"/><circle class="t" cx="120" cy="34" r="5"/><circle class="t" cx="120" cy="86" r="5"/><circle class="t" cx="204" cy="60" r="5"/></svg>',
    layers: '<svg viewBox="0 0 240 120"><rect class="f" x="34" y="66" width="150" height="38" rx="9"/><rect class="f" x="48" y="42" width="150" height="38" rx="9"/><rect class="f" x="62" y="16" width="150" height="38" rx="9"/><path class="s" d="M78 35H138M78 45H112"/><circle class="t" cx="190" cy="35" r="6"/></svg>',
    timeline: '<svg viewBox="0 0 240 120"><path class="s" d="M20 76H220"/><rect class="f" x="30" y="30" width="56" height="18" rx="6"/><rect class="f" x="96" y="30" width="56" height="18" rx="6"/><rect class="f" x="162" y="30" width="48" height="18" rx="6"/><circle class="f s" cx="58" cy="76" r="8"/><circle class="f s" cx="124" cy="76" r="8"/><circle class="t" cx="190" cy="76" r="8"/><path class="s" d="M190 84V104"/></svg>',
    steps: '<svg viewBox="0 0 240 120"><rect class="f" x="40" y="84" width="34" height="22" rx="5"/><rect class="f" x="82" y="64" width="34" height="42" rx="5"/><rect class="f" x="124" y="44" width="34" height="62" rx="5"/><rect class="t2" x="166" y="22" width="34" height="84" rx="5"/><path class="s" d="M30 110H210"/></svg>',
    cube: '<svg viewBox="0 0 240 120"><polygon class="f" points="120,12 172,40 172,84 120,112 68,84 68,40"/><path class="s" d="M68 40L120 68L172 40M120 68V112"/><circle class="t" cx="120" cy="68" r="5"/></svg>',
    grid: '<svg viewBox="0 0 240 120"><rect class="f" x="30" y="16" width="50" height="34" rx="7"/><rect class="f" x="95" y="16" width="50" height="34" rx="7"/><rect class="f" x="160" y="16" width="50" height="34" rx="7"/><path class="s" d="M38 64H110M38 74H86"/><rect class="t2" x="30" y="86" width="84" height="22" rx="11"/></svg>',
    bars: '<svg viewBox="0 0 240 120"><rect class="f" x="40" y="62" width="26" height="44" rx="5"/><rect class="f" x="78" y="42" width="26" height="64" rx="5"/><rect class="f" x="116" y="72" width="26" height="34" rx="5"/><rect class="t2" x="154" y="24" width="26" height="82" rx="5"/><path class="s" d="M30 110H200"/></svg>'
  };

  function buildTiles() {
    var short = S.tileShort;
    var list = [
      { id: "case", kind: "ops", size: "lg", art: "flow", tag: S.neoCase.eyebrow, title: S.neoCase.title, short: short.case },
      { id: "positioning", kind: "brand", size: "lg", art: "layers", tag: S.repositioning.eyebrow, title: S.repositioning.title, short: short.positioning }
    ];
    var roleIds = ["delivery", "support", "bim"], roleArt = ["timeline", "steps", "cube"];
    S.roles.cards.forEach(function (c, i) {
      list.push({ id: roleIds[i], kind: "card", size: "md", art: roleArt[i], tag: c.tag, title: c.t, meta: c.client, short: short[roleIds[i]], d: c.d, points: c.points, seq: c.seq, pointsTitle: c.pointsTitle });
    });
    var fIds = ["catalogue", "dashboard"], fArt = ["grid", "bars"];
    S.freelance.cards.forEach(function (c, i) {
      list.push({ id: fIds[i], kind: "card", size: "half", art: fArt[i], tag: c.tag, title: c.t, meta: c.client, short: short[fIds[i]], d: c.d, link: c.link });
    });
    var order = ["support", "bim", "delivery", "case", "positioning", "catalogue", "dashboard"];
    return order.map(function (id) { return list.filter(function (t) { return t.id === id; })[0]; });
  }

  var app = createApp({
    setup: function () {
      var active = useSpy(["work", "how", "about", "contact"]);
      var cvUrl = ref("");
      var tiles = buildTiles();
      var cur = ref(null);
      var dlg = ref(null);
      var copied = ref(false);
      function copyEmail() {
        var done = function () { copied.value = true; setTimeout(function () { copied.value = false; }, 2200); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(S.email).then(done, function () {});
          return;
        }
        var t = document.createElement("textarea");
        t.value = S.email; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
        document.body.appendChild(t); t.select();
        try { if (document.execCommand("copy")) done(); } catch (e) {}
        document.body.removeChild(t);
      }
      function mailto(p) {
        return "mailto:" + S.email + "?subject=" + encodeURIComponent(p.subject) + "&body=" + encodeURIComponent(p.body);
      }

      function find(id) { for (var i = 0; i < tiles.length; i++) if (tiles[i].id === id) return tiles[i]; return null; }
      function openTile(id) {
        var t = find(id);
        if (!t) return;
        cur.value = t;
        nextTick(function () {
          var d = dlg.value;
          if (d && !d.open) d.showModal();
          document.documentElement.classList.add("lock");
          try { history.replaceState(null, "", "#" + id); } catch (e) {}
        });
      }
      function closeSheet() { if (dlg.value && dlg.value.open) dlg.value.close(); }
      function onClose() {
        cur.value = null;
        document.documentElement.classList.remove("lock");
        try { history.replaceState(null, "", "#work"); } catch (e) {}
      }
      function backdrop(e) { if (e.target === dlg.value) closeSheet(); }
      function fromHash() {
        var id = location.hash.slice(1);
        if (!find(id)) return;
        var w = document.getElementById("work");
        if (w) w.scrollIntoView();
        openTile(id);
      }

      onMounted(function () {
        if (S.cv && S.cv.href && window.fetch) {
          fetch(S.cv.href, { method: "HEAD", cache: "no-store" }).then(function (r) {
            if (!r.ok) return;
            var m = Date.parse(r.headers.get("Last-Modified") || "");
            cvUrl.value = S.cv.href + (m ? "?v=" + m : "");
          }).catch(function () {});
        }
        fromHash();
        window.addEventListener("hashchange", fromHash);
        var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!calm) {
          /* Soft glow in the hero follows the pointer */
          var hero = document.getElementById("top");
          if (hero) hero.addEventListener("pointermove", function (e) {
            var r = hero.getBoundingClientRect();
            hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
            hero.style.setProperty("--my", (e.clientY - r.top) + "px");
          });
          /* Content rises into place as it scrolls into view */
          if ("IntersectionObserver" in window) {
            document.documentElement.classList.add("rv-ready");
            var seen = new Map();
            var io = new IntersectionObserver(function (es) {
              es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
            }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
            document.querySelectorAll(".work .big, .work-lede, .feat, .rows-label, .rows .row, .trio .big, .trio-lede, .trio-cards, .how-head, .how-phases, .steps, .steps li, .about-text, .aim, .edu-block, .contact h2, .contact-lede, .path-card, .next li, .direct, .trio-cta").forEach(function (el) {
              var p = el.parentElement, n = seen.get(p) || 0;
              seen.set(p, n + 1);
              el.setAttribute("data-rv", "");
              el.style.transitionDelay = Math.min(n, 4) * 90 + "ms";
              io.observe(el);
            });
          }
        }
      });
      onBeforeUnmount(function () { window.removeEventListener("hashchange", fromHash); });

      return { S: S, active: active, cvUrl: cvUrl, rows: tiles, art: ART, cur: cur, dlg: dlg, openTile: openTile, copied: copied, copyEmail: copyEmail, mailto: mailto, closeSheet: closeSheet, onClose: onClose, backdrop: backdrop };
    },
    template: `
      <a class="skip" href="#main">Skip to content</a>
      <site-header :active="active" :cv="cvUrl"></site-header>
      <main id="main">
        <section class="hero dark" id="top">
          <div class="wrap hero-in">
          <div class="hero-copy">
            <div class="intro"><p class="intro-hi">Hi, I’m</p><p class="intro-name">{{ S.name }}</p></div>
            <h1 :aria-label="S.hero.title"><span class="hl" v-for="l in S.hero.lines" :key="l" aria-hidden="true">{{ l }}</span></h1>
            <div class="hero-side">
              <p class="lede">{{ S.hero.lede }}</p>
              <div class="hero-cta"><a class="btn btn-sun" :href="S.hero.ctaTarget">{{ S.hero.cta }}</a><a class="text-link" href="#contact">Talk to me</a></div>
            </div>
          </div>
          <div class="hero-photo"><portrait></portrait></div>
        </div></section>

        <section class="section work" id="work" aria-labelledby="work-t"><div class="wrap">
          <h2 class="big" id="work-t">{{ S.work.title }}</h2>
          <p class="work-lede">{{ S.work.lede }}</p>
          <div class="feat">
            <button v-for="f in S.work.featured" :key="f.id" type="button" class="feat-card" @click="openTile(f.id)">
              <span class="feat-tag">{{ f.tag }}</span>
              <span class="feat-t">{{ f.t }}</span>
              <span class="feat-d">{{ f.d }}</span>
              <span class="feat-proof">{{ f.proof }}</span>
              <span class="feat-go">{{ f.cta }}</span>
            </button>
          </div>
          <h3 class="rows-label">{{ S.work.allLabel }}</h3>
          <ul class="rows">
            <li v-for="t in rows" :key="t.id">
              <button type="button" class="row" :id="'tile-' + t.id" @click="openTile(t.id)" :aria-label="t.title + ', open details'">
                <span class="row-tag">{{ t.tag }}</span><span class="row-t">{{ t.title }}</span><span class="row-s">{{ t.short }}</span><span class="row-go" aria-hidden="true">Details</span>
              </button>
            </li>
          </ul>
        </div></section>

        <section class="section how" id="how" aria-labelledby="how-t"><div class="wrap">
          <div class="how-head"><h2 id="how-t" :aria-label="S.how.title"><span class="hl" v-for="l in S.how.lines" :key="l" aria-hidden="true">{{ l }}</span></h2>
            <div class="how-side"><p>{{ S.how.p }}</p></div></div>
          <div class="how-phases" aria-hidden="true"><span v-for="ph in S.how.phases" :key="ph.t" :style="{ gridColumn: 'span ' + ph.span }">{{ ph.t }}</span></div>
          <ol class="steps"><li v-for="(x, i) in S.how.steps" :key="x.t"><span class="hs-n">{{ i + 1 }}</span><b>{{ x.t }}</b><span class="hs-d">{{ x.d }}</span></li></ol>
        </div></section>

        <section class="section about" id="about" aria-labelledby="about-t"><div class="wrap">
          <div class="about-text"><h2 id="about-t">{{ S.about.title }}</h2><div class="about-body"><p v-for="p in S.about.paras" :key="p">{{ p }}</p></div>
          </div>
          <aside class="about-side">
            <blockquote class="aim"><span class="aim-k">{{ S.about.aimLabel }}</span><p>{{ S.about.aim }}</p></blockquote>
            <div class="edu-block"><h3>Education</h3><ul class="edu-list"><li v-for="e in S.education" :key="e.t"><span class="edu-y">{{ e.when }}</span><b>{{ e.t }}</b><span class="edu-o">{{ e.org }}</span></li></ul></div>
          </aside>
        </div></section>
      </main>

      <section class="contact dark" id="contact" aria-labelledby="contact-t"><div class="wrap">
        <h2 id="contact-t">{{ S.contact.title }}</h2>
        <p class="contact-lede">{{ S.contact.body }}</p>
        <div class="contact-actions">
          <a v-for="(p, i) in S.contact.paths" :key="p.id" :class="['btn', i === 0 ? 'btn-sun' : 'btn-ghost']" :href="mailto(p)">{{ p.cta }}</a>
          <a class="btn btn-ghost" :href="S.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div></section>
      <footer class="foot dark"><div class="wrap foot-in"><span>&copy; {{ new Date().getFullYear() }} {{ S.name }}</span><span>Ajman, United Arab Emirates</span></div></footer>

      <dialog class="sheet" ref="dlg" aria-labelledby="sheet-t" @close="onClose" @click="backdrop">
        <div class="sheet-in" v-if="cur">
          <button class="sheet-x" type="button" @click="closeSheet" aria-label="Close project details">&times;</button>
          <p class="tag">{{ cur.points ? cur.meta : cur.tag }}</p>
          <h2 id="sheet-t">{{ cur.title }}</h2>

          <template v-if="cur.kind === 'ops'">
            <p class="sheet-lede">{{ S.neoCase.role }}</p>
            <div class="sheet-parts two"><article v-for="x in S.neoCase.parts" :key="x.t"><h3>{{ x.t }}</h3><p>{{ x.p }}</p></article></div>
            <div class="status"><div class="status-lead"><h3>{{ S.neoCase.progress.t }}</h3><p>{{ S.neoCase.progress.p }}</p></div>
              <div class="status-col" v-for="g in [S.neoCase.progress.inUse, S.neoCase.progress.rolling]" :key="g.t"><h4>{{ g.t }}</h4><ul><li v-for="i in g.items" :key="i.t">{{ i.t }}</li></ul></div></div>
            <div class="ba stack"><case-shot v-for="g in S.neoCase.gallery" :key="g.base" kind="plain" optional :base="g.base" :alt="g.alt" :caption="g.t" :text="g.d"></case-shot></div>
          </template>

          <template v-else-if="cur.kind === 'brand'">
            <p class="sheet-lede">{{ S.repositioning.lede }}</p>
            <div class="sheet-parts"><article v-for="x in S.repositioning.parts" :key="x.t"><h3>{{ x.t }}</h3><p>{{ x.p }}</p></article></div>
            <h3 class="sheet-h">{{ S.repositioning.visual.title }}</h3>
            <div class="ba">
              <case-shot kind="before" optional :base="S.repositioning.visual.before.base" :alt="S.repositioning.visual.before.alt" :caption="S.repositioning.visual.before.t" :text="S.repositioning.visual.before.d"></case-shot>
              <case-shot kind="after" optional :base="S.repositioning.visual.after.base" :alt="S.repositioning.visual.after.alt" :caption="S.repositioning.visual.after.t" :text="S.repositioning.visual.after.d"></case-shot>
            </div>
            <div class="ba stack"><case-shot kind="plain" optional :base="S.repositioning.visual.process.base" :alt="S.repositioning.visual.process.alt" :caption="S.repositioning.visual.process.t" :text="S.repositioning.visual.process.d"></case-shot></div>
            <h3 class="sheet-h">{{ S.repositioning.visual.homeTitle }}</h3>
            <div class="ba">
              <case-shot kind="before" optional :base="S.repositioning.visual.home.before.base" :alt="S.repositioning.visual.home.before.alt" :caption="S.repositioning.visual.home.before.t" :text="S.repositioning.visual.home.before.d"></case-shot>
              <case-shot kind="after" optional :base="S.repositioning.visual.home.after.base" :alt="S.repositioning.visual.home.after.alt" :caption="S.repositioning.visual.home.after.t" :text="S.repositioning.visual.home.after.d"></case-shot>
            </div>
            <h3 class="sheet-h">{{ S.repositioning.visual.logoTitle }}</h3>
            <div class="ba logos"><case-shot v-for="g in S.repositioning.visual.logos" :key="g.base" kind="plain" optional :base="g.base" :alt="g.alt" :caption="g.t" :text="g.d"></case-shot></div>
            <h3 class="sheet-h">{{ S.repositioning.delivered.t }}</h3>
            <ul class="deliv two"><li v-for="i in S.repositioning.delivered.items" :key="i.t"><b>{{ i.t }}</b><span>{{ i.d }}</span></li></ul>
            <div class="ba"><case-shot v-for="g in S.repositioning.gallery" :key="g.base" kind="plain" optional :base="g.base" :alt="g.alt" :caption="g.t" :text="g.d"></case-shot></div>
          </template>

          <template v-else>
            <p class="meta" v-if="!cur.points">{{ cur.meta }}</p>
            <p class="sheet-lede">{{ cur.d }}</p>
            <h3 class="sheet-h" v-if="cur.pointsTitle">{{ cur.pointsTitle }}</h3>
            <ul class="deliv pts" :class="{ seq: cur.seq }" v-if="cur.points"><li v-for="p in cur.points" :key="p.t"><b>{{ p.t }}</b><span>{{ p.d }}</span></li></ul>
            <a v-if="cur.link" class="btn btn-solid" :href="cur.link.href" target="_blank" rel="noopener">{{ cur.link.label }}</a>
          </template>
        </div>
      </dialog>
    `,
  });

  /* Header: scroll-spy links, mobile menu */
  app.component("site-header", {
    props: { active: { type: String, default: "" }, cv: { type: String, default: "" } },
    setup: function () {
      var open = ref(false);
      var scrolled = ref(false);
      var past = ref(false);
      function onScroll() { scrolled.value = window.scrollY > 8; past.value = window.scrollY > 260; }
      onMounted(function () { onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); });
      onBeforeUnmount(function () { window.removeEventListener("scroll", onScroll); });
      return { S: S, open: open, scrolled: scrolled, past: past };
    },
    template: `
      <header class="site-header dark" :class="{ scrolled: scrolled }"><div class="wrap bar">
        <a :class="['mark', { show: past }]" href="#top" aria-label="Mohammed CH, back to top"><b>Mohammed CH</b></a>
        <button class="nav-toggle" type="button" :aria-expanded="open ? 'true' : 'false'" aria-controls="site-nav" @click="open = !open">{{ open ? 'Close' : 'Menu' }}</button>
        <nav id="site-nav" :class="{ open: open }" aria-label="Main">
          <a v-for="n in S.nav.filter(function (x) { return !x.cta; })" :key="n.id" :href="'#' + n.id" :class="{ on: active === n.id }" :aria-current="active === n.id ? 'true' : null" @click="open = false">{{ n.label }}</a>
          <a v-if="cv" class="nav-resume" :href="cv" download @click="open = false">Resume</a>
          <a v-for="n in S.nav.filter(function (x) { return x.cta; })" :key="n.id" :href="'#' + n.id" class="nav-cta" @click="open = false">{{ n.label }}</a>
        </nav>
      </div></header>
    `,
  });

  app.component("portrait", {
    setup: function () {
      var url = ref("");
      var exts = ["jpg", "jpeg", "png", "webp"];
      var i = 0;
      function next() {
        if (i >= exts.length) return;
        var u = "assets/img/portrait." + exts[i++];
        var im = new Image();
        im.onload = function () { url.value = u; };
        im.onerror = next;
        im.src = u;
      }
      onMounted(next);
      return { url: url };
    },
    template: '<figure class="portrait" v-if="url"><img :src="url" alt="Portrait of Mohammed CH"></figure>',
  });

  app.component("case-shot", {
    props: { base: String, alt: String, kind: String, data: Object, caption: String, text: String, optional: Boolean, note: String },
    setup: function (props) {
      var url = ref("");
      var exts = ["png", "jpg", "jpeg", "webp"];
      var i = 0;
      function next() {
        if (i >= exts.length) return;
        var u = props.base + "." + exts[i++];
        var im = new Image();
        im.onload = function () { url.value = u; };
        im.onerror = next;
        im.src = u;
      }
      onMounted(next);
      return { url: url };
    },
    template: [
      '<figure class="rp-fig" :class="{ \'rp-text\': !url, \'rp-text-after\': !url && kind === \'after\' }" v-if="url || !optional">',
      '<div class="rp-frame" v-if="url"><img :src="url" :alt="alt"></div>',
      '<figcaption><b>{{ caption }}</b><p>{{ text }}</p></figcaption>',
      "</figure>",
    ].join(""),
  });

  app.component("contact-choice", {
    setup: function () {
      var C = S.contactChoices;
      var idx = ref(0);
      function set(n) { idx.value = n; }
      function key(e) { tabKeys(e, C.items.length, idx.value, set); }
      var cur = computed(function () { return C.items[idx.value]; });
      var mail = computed(function () { return "mailto:" + S.email + "?subject=" + encodeURIComponent(cur.value.subject); });
      return { C: C, idx: idx, set: set, key: key, cur: cur, mail: mail };
    },
    template: [
      '<div class="cc">',
      '<p class="cc-q" id="cc-q">{{ C.label }}</p>',
      '<div class="cc-tabs" role="tablist" aria-labelledby="cc-q">',
      '<button v-for="(a, i) in C.items" :key="a.id" type="button" role="tab" :id="\'cc-\' + a.id" :aria-selected="idx === i ? \'true\' : \'false\'" aria-controls="cc-panel" :tabindex="idx === i ? 0 : -1" @click="set(i)" @keydown="key">{{ a.tab }}</button>',
      "</div>",
      '<div class="cc-panel" id="cc-panel" role="tabpanel" :aria-labelledby="\'cc-\' + cur.id">',
      '<transition name="swap" mode="out-in"><div :key="cur.id"><p>{{ cur.t }}</p><a class="btn btn-light" :href="mail">{{ cur.cta }}</a></div></transition>',
      "</div></div>",
    ].join(""),
  });

  app.mount("#app");
})();
