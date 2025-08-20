typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
let Ze = !1, Hn = !1;
function Un() {
  Ze = !0;
}
Un();
const Yn = 4, Vn = 1, Gn = 2, Xt = "[", Zt = "[!", en = "]", $e = {}, k = Symbol(), tn = !1;
var nn = Array.isArray, Kn = Array.prototype.indexOf, Jn = Array.from, Ye = Object.keys, ce = Object.defineProperty, qe = Object.getOwnPropertyDescriptor, Qn = Object.getOwnPropertyDescriptors, Xn = Object.prototype, Zn = Array.prototype, rn = Object.getPrototypeOf, It = Object.isExtensible;
function er(e) {
  return typeof e == "function";
}
const M = () => {
};
function tr(e) {
  return e();
}
function Ve(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function nr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const j = 2, Et = 4, et = 8, Te = 16, J = 32, ne = 64, sn = 128, P = 256, Ge = 512, A = 1024, I = 2048, re = 4096, Z = 8192, Se = 16384, tt = 32768, nt = 65536, Mt = 1 << 17, rr = 1 << 18, At = 1 << 19, Tt = 1 << 20, ht = 1 << 21, St = 1 << 22, ae = 1 << 23, Ne = Symbol("$state"), ir = Symbol("legacy props"), Ot = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), sr = 3, Ke = 8;
function or() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function lr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ar(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ur() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function dr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let S = !1;
function xe(e) {
  S = e;
}
let $;
function de(e) {
  if (e === null)
    throw rt(), $e;
  return $ = e;
}
function Ct() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ie($)
  );
}
function z(e) {
  if (S) {
    if (/* @__PURE__ */ ie($) !== null)
      throw rt(), $e;
    $ = e;
  }
}
function Lt(e = 1) {
  if (S) {
    for (var t = e, n = $; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(n);
    $ = n;
  }
}
function _r() {
  for (var e = 0, t = $; ; ) {
    if (t.nodeType === Ke) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === en) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Xt || n === Zt) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(t)
    );
    t.remove(), t = r;
  }
}
function gr(e) {
  if (!e || e.nodeType !== Ke)
    throw rt(), $e;
  return (
    /** @type {Comment} */
    e.data
  );
}
function on(e) {
  return e === this.v;
}
function ln(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function an(e) {
  return !ln(e, this.v);
}
let E = null;
function Je(e) {
  E = e;
}
function un(e, t = !1, n) {
  E = {
    p: E,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ze && !t ? { s: null, u: null, $: [] } : null
  };
}
function fn(e) {
  var t = (
    /** @type {ComponentContext} */
    E
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      qn(r);
  }
  return E = t.p, /** @type {T} */
  {};
}
function Pe() {
  return !Ze || E !== null && E.l === null;
}
const yr = /* @__PURE__ */ new WeakMap();
function br(e) {
  var t = _;
  if (t === null)
    return y.f |= ae, e;
  if ((t.f & tt) === 0) {
    if ((t.f & sn) === 0)
      throw !t.parent && e instanceof Error && cn(e), e;
    t.b.error(e);
  } else
    Ft(e, t);
}
function Ft(e, t) {
  for (; t !== null; ) {
    if ((t.f & sn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && cn(e), e;
}
function cn(e) {
  const t = yr.get(e);
  t && (ce(e, "message", {
    value: t.message
  }), ce(e, "stack", {
    value: t.stack
  }));
}
let je = [], pt = [];
function dn() {
  var e = je;
  je = [], Ve(e);
}
function mr() {
  var e = pt;
  pt = [], Ve(e);
}
function wr(e) {
  je.length === 0 && queueMicrotask(dn), je.push(e);
}
function xr() {
  je.length > 0 && dn(), pt.length > 0 && mr();
}
function $r() {
  for (var e = (
    /** @type {Effect} */
    _.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && or(), e;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  var t = j | I, n = y !== null && (y.f & j) !== 0 ? (
    /** @type {Derived} */
    y
  ) : null;
  return _ === null || n !== null && (n.f & P) !== 0 ? t |= P : _.f |= At, {
    ctx: E,
    deps: null,
    effects: null,
    equals: on,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      k
    ),
    wv: 0,
    parent: n ?? _,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  let n = (
    /** @type {Effect | null} */
    _
  );
  n === null && lr();
  var r = (
    /** @type {Boundary} */
    n.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = jt(
    /** @type {V} */
    k
  ), o = null, l = !y;
  return Mr(() => {
    try {
      var a = e();
    } catch (c) {
      a = Promise.reject(c);
    }
    var u = () => a;
    s = o?.then(u, u) ?? Promise.resolve(a), o = s;
    var f = (
      /** @type {Batch} */
      x
    ), v = r.pending;
    l && (r.update_pending_count(1), v || f.increment());
    const h = (c, d = void 0) => {
      o = null, v || f.activate(), d ? d !== Ot && (i.f |= ae, gt(i, d)) : ((i.f & ae) !== 0 && (i.f ^= ae), gt(i, c)), l && (r.update_pending_count(-1), v || f.decrement()), pn();
    };
    if (s.then(h, (c) => h(null, c || "unknown")), f)
      return () => {
        queueMicrotask(() => f.neuter());
      };
  }), new Promise((a) => {
    function u(f) {
      function v() {
        f === s ? a(i) : u(s);
      }
      f.then(v, v);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
  const t = /* @__PURE__ */ Nt(e);
  return t.equals = an, t;
}
function vn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ee(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Er(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & j) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Rt(e) {
  var t, n = _;
  te(Er(e));
  try {
    vn(e), t = jn(e);
  } finally {
    te(n);
  }
  return t;
}
function hn(e) {
  var t = Rt(e);
  if (e.equals(t) || (e.v = t, e.wv = Nn()), !Oe)
    if (Ee !== null)
      Ee.set(e, e.v);
    else {
      var n = (X || (e.f & P) !== 0) && e.deps !== null ? re : A;
      F(e, n);
    }
}
function Ar(e, t, n) {
  const r = Pe() ? Nt : kr;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var s = x, i = (
    /** @type {Effect} */
    _
  ), o = Tr(), l = $r();
  Promise.all(t.map((a) => /* @__PURE__ */ qr(a))).then((a) => {
    s?.activate(), o();
    try {
      n([...e.map(r), ...a]);
    } catch (u) {
      (i.f & Se) === 0 && Ft(u, i);
    }
    s?.deactivate(), pn();
  }).catch((a) => {
    l.error(a);
  });
}
function Tr() {
  var e = _, t = y, n = E;
  return function() {
    te(e), Y(t), Je(n);
  };
}
function pn() {
  te(null), Y(null), Je(null);
}
const Ce = /* @__PURE__ */ new Set();
let x = null, Ee = null, zt = /* @__PURE__ */ new Set(), Qe = [];
function _n() {
  const e = (
    /** @type {() => void} */
    Qe.shift()
  );
  Qe.length > 0 && queueMicrotask(_n), e();
}
let ve = [], it = null, _t = !1, We = !1;
class he {
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #u = null;
  /**
   * True if an async effect inside this batch resolved and
   * its parent branch was already deleted
   */
  #f = !1;
  /**
   * Async effects (created inside `async_derived`) encountered during processing.
   * These run after the rest of the batch has updated, since they should
   * always have the latest values
   * @type {Effect[]}
   */
  #i = [];
  /**
   * The same as `#async_effects`, but for effects inside a newly-created
   * `<svelte:boundary>` — these do not prevent the batch from committing
   * @type {Effect[]}
   */
  #o = [];
  /**
   * Template effects and `$effect.pre` effects, which run when
   * a batch is committed
   * @type {Effect[]}
   */
  #s = [];
  /**
   * The same as `#render_effects`, but for `$effect` (which runs after)
   * @type {Effect[]}
   */
  #r = [];
  /**
   * Block effects, which may need to re-run on subsequent flushes
   * in order to update internal sources (e.g. each block items)
   * @type {Effect[]}
   */
  #l = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Effect[]}
   */
  #c = [];
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Effect[]}
   */
  #d = [];
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    ve = [];
    var n = null;
    if (Ce.size > 1) {
      n = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
      for (const [i, o] of this.current)
        n.set(i, { v: i.v, wv: i.wv }), i.v = o;
      for (const i of Ce)
        if (i !== this)
          for (const [o, l] of i.#t)
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = l);
    }
    for (const i of t)
      this.#h(i);
    if (this.#i.length === 0 && this.#n === 0) {
      this.#v();
      var r = this.#s, s = this.#r;
      this.#s = [], this.#r = [], this.#l = [], x = null, Bt(r), Bt(s), x === null ? x = this : Ce.delete(this), this.#u?.resolve();
    } else
      this.#a(this.#s), this.#a(this.#r), this.#a(this.#l);
    if (n) {
      for (const [i, { v: o, wv: l }] of n)
        i.wv <= l && (i.v = o);
      Ee = null;
    }
    for (const i of this.#i)
      Re(i);
    for (const i of this.#o)
      Re(i);
    this.#i = [], this.#o = [];
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   */
  #h(t) {
    t.f ^= A;
    for (var n = t.first; n !== null; ) {
      var r = n.f, s = (r & (J | ne)) !== 0, i = s && (r & A) !== 0, o = i || (r & Z) !== 0 || this.skipped_effects.has(n);
      if (!o && n.fn !== null) {
        if (s)
          n.f ^= A;
        else if ((r & A) === 0)
          if ((r & Et) !== 0)
            this.#r.push(n);
          else if ((r & St) !== 0) {
            var l = n.b?.pending ? this.#o : this.#i;
            l.push(n);
          } else lt(n) && ((n.f & Te) !== 0 && this.#l.push(n), Re(n));
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      }
      var u = n.parent;
      for (n = n.next; n === null && u !== null; )
        n = u.next, u = u.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #a(t) {
    for (const n of t)
      ((n.f & I) !== 0 ? this.#c : this.#d).push(n), F(n, A);
    t.length = 0;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.#t.has(t) || this.#t.set(t, n), this.current.set(t, t.v);
  }
  activate() {
    x = this;
  }
  deactivate() {
    x = null;
    for (const t of zt)
      if (zt.delete(t), t(), x !== null)
        break;
  }
  neuter() {
    this.#f = !0;
  }
  flush() {
    ve.length > 0 ? gn() : this.#v(), x === this && (this.#n === 0 && Ce.delete(this), this.deactivate());
  }
  /**
   * Append and remove branches to/from the DOM
   */
  #v() {
    if (!this.#f)
      for (const t of this.#e)
        t();
    this.#e.clear();
  }
  increment() {
    this.#n += 1;
  }
  decrement() {
    if (this.#n -= 1, this.#n === 0) {
      for (const t of this.#c)
        F(t, I), pe(t);
      for (const t of this.#d)
        F(t, re), pe(t);
      this.#s = [], this.#r = [], this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    this.#e.add(t);
  }
  settled() {
    return (this.#u ??= nr()).promise;
  }
  static ensure() {
    if (x === null) {
      const t = x = new he();
      Ce.add(x), We || he.enqueue(() => {
        x === t && t.flush();
      });
    }
    return x;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Qe.length === 0 && queueMicrotask(_n), Qe.unshift(t);
  }
}
function Sr(e) {
  var t = We;
  We = !0;
  try {
    for (var n; ; ) {
      if (xr(), ve.length === 0 && (x?.flush(), ve.length === 0))
        return it = null, /** @type {T} */
        n;
      gn();
    }
  } finally {
    We = t;
  }
}
function gn() {
  var e = ke;
  _t = !0;
  try {
    var t = 0;
    for (Ut(!0); ve.length > 0; ) {
      var n = he.ensure();
      if (t++ > 1e3) {
        var r, s;
        Or();
      }
      n.process(ve), ue.clear();
    }
  } finally {
    _t = !1, Ut(e), it = null;
  }
}
function Or() {
  try {
    cr();
  } catch (e) {
    Ft(e, it);
  }
}
function Bt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Se | Z)) === 0 && lt(r)) {
        var s = x ? x.current.size : 0;
        if (Re(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Tn(r) : r.fn = null), x !== null && x.current.size > s && (r.f & Tt) !== 0)
          break;
      }
    }
    for (; n < t; )
      pe(e[n++]);
  }
}
function pe(e) {
  for (var t = it = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (_t && t === _ && (n & Te) !== 0)
      return;
    if ((n & (ne | J)) !== 0) {
      if ((n & A) === 0) return;
      t.f ^= A;
    }
  }
  ve.push(t);
}
const ue = /* @__PURE__ */ new Map();
function jt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: on,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  const n = jt(e);
  return Vr(n), n;
}
// @__NO_SIDE_EFFECTS__
function yn(e, t = !1, n = !0) {
  const r = jt(e);
  return t || (r.equals = an), Ze && n && E !== null && E.l !== null && (E.l.s ??= []).push(r), r;
}
function V(e, t, n = !1) {
  y !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!H || (y.f & Mt) !== 0) && Pe() && (y.f & (j | Te | St | Mt)) !== 0 && !K?.includes(e) && pr();
  let r = n ? Fe(t) : t;
  return gt(e, r);
}
function gt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Oe ? ue.set(e, t) : ue.set(e, n), e.v = t;
    var r = he.ensure();
    r.capture(e, n), (e.f & j) !== 0 && ((e.f & I) !== 0 && Rt(
      /** @type {Derived} */
      e
    ), F(e, (e.f & P) === 0 ? A : re)), e.wv = Nn(), bn(e, I), Pe() && _ !== null && (_.f & A) !== 0 && (_.f & (J | ne)) === 0 && (D === null ? Gr([e]) : D.push(e));
  }
  return t;
}
function ut(e) {
  V(e, e.v + 1);
}
function bn(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Pe(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], l = o.f;
      if (!(!r && o === _)) {
        var a = (l & I) === 0;
        a && F(o, t), (l & j) !== 0 ? bn(
          /** @type {Derived} */
          o,
          re
        ) : a && pe(
          /** @type {Effect} */
          o
        );
      }
    }
}
function Fe(e) {
  if (typeof e != "object" || e === null || Ne in e)
    return e;
  const t = rn(e);
  if (t !== Xn && t !== Zn)
    return e;
  var n = /* @__PURE__ */ new Map(), r = nn(e), s = /* @__PURE__ */ Q(0), i = fe, o = (l) => {
    if (fe === i)
      return l();
    var a = y, u = fe;
    Y(null), Vt(i);
    var f = l();
    return Y(a), Vt(u), f;
  };
  return r && n.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vr();
        var f = n.get(a);
        return f === void 0 ? f = o(() => {
          var v = /* @__PURE__ */ Q(u.value);
          return n.set(a, v), v;
        }) : V(f, u.value, !0), !0;
      },
      deleteProperty(l, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in l) {
            const f = o(() => /* @__PURE__ */ Q(k));
            n.set(a, f), ut(s);
          }
        } else
          V(u, k), ut(s);
        return !0;
      },
      get(l, a, u) {
        if (a === Ne)
          return e;
        var f = n.get(a), v = a in l;
        if (f === void 0 && (!v || qe(l, a)?.writable) && (f = o(() => {
          var c = Fe(v ? l[a] : k), d = /* @__PURE__ */ Q(c);
          return d;
        }), n.set(a, f)), f !== void 0) {
          var h = U(f);
          return h === k ? void 0 : h;
        }
        return Reflect.get(l, a, u);
      },
      getOwnPropertyDescriptor(l, a) {
        var u = Reflect.getOwnPropertyDescriptor(l, a);
        if (u && "value" in u) {
          var f = n.get(a);
          f && (u.value = U(f));
        } else if (u === void 0) {
          var v = n.get(a), h = v?.v;
          if (v !== void 0 && h !== k)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(l, a) {
        if (a === Ne)
          return !0;
        var u = n.get(a), f = u !== void 0 && u.v !== k || Reflect.has(l, a);
        if (u !== void 0 || _ !== null && (!f || qe(l, a)?.writable)) {
          u === void 0 && (u = o(() => {
            var h = f ? Fe(l[a]) : k, c = /* @__PURE__ */ Q(h);
            return c;
          }), n.set(a, u));
          var v = U(u);
          if (v === k)
            return !1;
        }
        return f;
      },
      set(l, a, u, f) {
        var v = n.get(a), h = a in l;
        if (r && a === "length")
          for (var c = u; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var d = n.get(c + "");
            d !== void 0 ? V(d, k) : c in l && (d = o(() => /* @__PURE__ */ Q(k)), n.set(c + "", d));
          }
        if (v === void 0)
          (!h || qe(l, a)?.writable) && (v = o(() => /* @__PURE__ */ Q(void 0)), V(v, Fe(u)), n.set(a, v));
        else {
          h = v.v !== k;
          var p = o(() => Fe(u));
          V(v, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(l, a);
        if (b?.set && b.set.call(f, u), !h) {
          if (r && typeof a == "string") {
            var O = (
              /** @type {Source<number>} */
              n.get("length")
            ), m = Number(a);
            Number.isInteger(m) && m >= O.v && V(O, m + 1);
          }
          ut(s);
        }
        return !0;
      },
      ownKeys(l) {
        U(s);
        var a = Reflect.ownKeys(l).filter((v) => {
          var h = n.get(v);
          return h === void 0 || h.v !== k;
        });
        for (var [u, f] of n)
          f.v !== k && !(u in l) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        hr();
      }
    }
  );
}
var Wt, mn, wn, xn;
function yt() {
  if (Wt === void 0) {
    Wt = window, mn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    wn = qe(t, "firstChild").get, xn = qe(t, "nextSibling").get, It(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), It(n) && (n.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return wn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return xn.call(e);
}
function B(e, t) {
  if (!S)
    return /* @__PURE__ */ Ae(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae($)
  );
  return n === null && (n = $.appendChild(st())), de(n), n;
}
function Cr(e, t) {
  if (!S) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ie(n) : n;
  }
  return $;
}
function W(e, t = 1, n = !1) {
  let r = S ? $ : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ie(r);
  if (!S)
    return r;
  if (n && r?.nodeType !== sr) {
    var i = st();
    return r === null ? s?.after(i) : r.before(i), de(i), i;
  }
  return de(r), /** @type {TemplateNode} */
  r;
}
function Fr(e) {
  e.textContent = "";
}
function Nr() {
  return !1;
}
function ot(e) {
  var t = y, n = _;
  Y(null), te(null);
  try {
    return e();
  } finally {
    Y(t), te(n);
  }
}
function $n(e) {
  _ === null && y === null && fr(), y !== null && (y.f & P) !== 0 && _ === null && ur(), Oe && ar();
}
function Rr(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function L(e, t, n, r = !0) {
  var s = _;
  s !== null && (s.f & Z) !== 0 && (e |= Z);
  var i = {
    ctx: E,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | I,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    b: s && s.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Re(i), i.f |= tt;
    } catch (a) {
      throw ee(i), a;
    }
  else t !== null && pe(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & At) === 0;
  if (!o && r && (s !== null && Rr(i, s), y !== null && (y.f & j) !== 0 && (e & ne) === 0)) {
    var l = (
      /** @type {Derived} */
      y
    );
    (l.effects ??= []).push(i);
  }
  return i;
}
function jr(e) {
  const t = L(et, null, !1);
  return F(t, A), t.teardown = e, t;
}
function Ht(e) {
  $n();
  var t = (
    /** @type {Effect} */
    _.f
  ), n = !y && (t & J) !== 0 && (t & tt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      E
    );
    (r.e ??= []).push(e);
  } else
    return qn(e);
}
function qn(e) {
  return L(Et | Tt, e, !1);
}
function Dr(e) {
  return $n(), L(et | Tt, e, !0);
}
function Pr(e) {
  he.ensure();
  const t = L(ne, e, !0);
  return () => {
    ee(t);
  };
}
function Ir(e) {
  he.ensure();
  const t = L(ne, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sn(t, () => {
      ee(t), r(void 0);
    }) : (ee(t), r(void 0));
  });
}
function kn(e) {
  return L(Et, e, !1);
}
function Mr(e) {
  return L(St | At, e, !0);
}
function Lr(e, t = 0) {
  return L(et | t, e, !0);
}
function zr(e, t = [], n = []) {
  Ar(t, n, (r) => {
    L(et, () => e(...r.map(U)), !0);
  });
}
function Br(e, t = 0) {
  var n = L(Te | t, e, !0);
  return n;
}
function bt(e, t = !0) {
  return L(J, e, !0, t);
}
function En(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Oe, r = y;
    Yt(!0), Y(null);
    try {
      t.call(null);
    } finally {
      Yt(n), Y(r);
    }
  }
}
function An(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ot(() => {
      s.abort(Ot);
    });
    var r = n.next;
    (n.f & ne) !== 0 ? n.parent = null : ee(n, t), n = r;
  }
}
function Wr(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & J) === 0 && ee(t), t = n;
  }
}
function ee(e, t = !0) {
  var n = !1;
  (t || (e.f & rr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (Hr(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), An(e, t && !n), Xe(e, 0), F(e, Se);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  En(e);
  var s = e.parent;
  s !== null && s.first !== null && Tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Hr(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ie(e)
    );
    e.remove(), e = n;
  }
}
function Tn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Sn(e, t) {
  var n = [];
  On(e, n, !0), Ur(n, () => {
    ee(e), t && t();
  });
}
function Ur(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function On(e, t, n) {
  if ((e.f & Z) === 0) {
    if (e.f ^= Z, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & nt) !== 0 || (r.f & J) !== 0;
      On(r, t, i ? n : !1), r = s;
    }
  }
}
function Yr(e) {
  Cn(e, !0);
}
function Cn(e, t) {
  if ((e.f & Z) !== 0) {
    e.f ^= Z, (e.f & A) === 0 && (F(e, I), pe(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & nt) !== 0 || (n.f & J) !== 0;
      Cn(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let ke = !1;
function Ut(e) {
  ke = e;
}
let Oe = !1;
function Yt(e) {
  Oe = e;
}
let y = null, H = !1;
function Y(e) {
  y = e;
}
let _ = null;
function te(e) {
  _ = e;
}
let K = null;
function Vr(e) {
  y !== null && (K === null ? K = [e] : K.push(e));
}
let T = null, R = 0, D = null;
function Gr(e) {
  D = e;
}
let Fn = 1, De = 0, fe = De;
function Vt(e) {
  fe = e;
}
let X = !1;
function Nn() {
  return ++Fn;
}
function lt(e) {
  var t = e.f;
  if ((t & I) !== 0)
    return !0;
  if ((t & re) !== 0) {
    var n = e.deps, r = (t & P) !== 0;
    if (n !== null) {
      var s, i, o = (t & Ge) !== 0, l = r && _ !== null && !X, a = n.length;
      if ((o || l) && (_ === null || (_.f & Se) === 0)) {
        var u = (
          /** @type {Derived} */
          e
        ), f = u.parent;
        for (s = 0; s < a; s++)
          i = n[s], (o || !i?.reactions?.includes(u)) && (i.reactions ??= []).push(u);
        o && (u.f ^= Ge), l && f !== null && (f.f & P) === 0 && (u.f ^= P);
      }
      for (s = 0; s < a; s++)
        if (i = n[s], lt(
          /** @type {Derived} */
          i
        ) && hn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || _ !== null && !X) && F(e, A);
  }
  return !1;
}
function Rn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !K?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & j) !== 0 ? Rn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? F(i, I) : (i.f & A) !== 0 && F(i, re), pe(
        /** @type {Effect} */
        i
      ));
    }
}
function jn(e) {
  var t = T, n = R, r = D, s = y, i = X, o = K, l = E, a = H, u = fe, f = e.f;
  T = /** @type {null | Value[]} */
  null, R = 0, D = null, X = (f & P) !== 0 && (H || !ke || y === null), y = (f & (J | ne)) === 0 ? e : null, K = null, Je(e.ctx), H = !1, fe = ++De, e.ac !== null && (ot(() => {
    e.ac.abort(Ot);
  }), e.ac = null);
  try {
    e.f |= ht;
    var v = (
      /** @type {Function} */
      e.fn
    ), h = v(), c = e.deps;
    if (T !== null) {
      var d;
      if (Xe(e, R), c !== null && R > 0)
        for (c.length = R + T.length, d = 0; d < T.length; d++)
          c[R + d] = T[d];
      else
        e.deps = c = T;
      if (!X || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (f & j) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = R; d < c.length; d++)
          (c[d].reactions ??= []).push(e);
    } else c !== null && R < c.length && (Xe(e, R), c.length = R);
    if (Pe() && D !== null && !H && c !== null && (e.f & (j | re | I)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      D.length; d++)
        Rn(
          D[d],
          /** @type {Effect} */
          e
        );
    return s !== null && s !== e && (De++, D !== null && (r === null ? r = D : r.push(.../** @type {Source[]} */
    D))), (e.f & ae) !== 0 && (e.f ^= ae), h;
  } catch (p) {
    return br(p);
  } finally {
    e.f ^= ht, T = t, R = n, D = r, y = s, X = i, K = o, Je(l), H = a, fe = u;
  }
}
function Kr(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kn.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & j) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (T === null || !T.includes(t)) && (F(t, re), (t.f & (P | Ge)) === 0 && (t.f ^= Ge), vn(
    /** @type {Derived} **/
    t
  ), Xe(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Xe(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Kr(e, n[r]);
}
function Re(e) {
  var t = e.f;
  if ((t & Se) === 0) {
    F(e, A);
    var n = _, r = ke;
    _ = e, ke = !0;
    try {
      (t & Te) !== 0 ? Wr(e) : An(e), En(e);
      var s = jn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Fn;
      var i;
      tn && Hn && (e.f & I) !== 0 && e.deps;
    } finally {
      ke = r, _ = n;
    }
  }
}
function U(e) {
  var t = e.f, n = (t & j) !== 0;
  if (y !== null && !H) {
    var r = _ !== null && (_.f & Se) !== 0;
    if (!r && !K?.includes(e)) {
      var s = y.deps;
      if ((y.f & ht) !== 0)
        e.rv < De && (e.rv = De, T === null && s !== null && s[R] === e ? R++ : T === null ? T = [e] : (!X || !T.includes(e)) && T.push(e));
      else {
        (y.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [y] : i.includes(y) || i.push(y);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && (l.f & P) === 0 && (o.f ^= P);
  }
  if (Oe) {
    if (ue.has(e))
      return ue.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var a = o.v;
      return ((o.f & A) === 0 && o.reactions !== null || Dn(o)) && (a = Rt(o)), ue.set(o, a), a;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, Ee?.has(o))
      return Ee.get(o);
    lt(o) && hn(o);
  }
  if ((e.f & ae) !== 0)
    throw e.v;
  return e.v;
}
function Dn(e) {
  if (e.v === k) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ue.has(t) || (t.f & j) !== 0 && Dn(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Dt(e) {
  var t = H;
  try {
    return H = !0, e();
  } finally {
    H = t;
  }
}
const Jr = -7169;
function F(e, t) {
  e.f = e.f & Jr | t;
}
function Qr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ne in e)
      mt(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ne in n && mt(n);
      }
  }
}
function mt(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        mt(e[r], t);
      } catch {
      }
    const n = rn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Qn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
const Pn = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Set();
function Xr(e) {
  for (var t = 0; t < e.length; t++)
    Pn.add(e[t]);
  for (var n of wt)
    n(e);
}
let Gt = null;
function Me(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Gt = e;
  var o = 0, l = Gt === e && e.__root;
  if (l) {
    var a = s.indexOf(l);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    ce(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var f = y, v = _;
    Y(null), te(null);
    try {
      for (var h, c = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (nn(p)) {
              var [b, ...O] = p;
              b.apply(i, [e, ...O]);
            } else
              p.call(i, e);
        } catch (m) {
          h ? c.push(m) : h = m;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let m of c)
          queueMicrotask(() => {
            throw m;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Y(f), te(v);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function He(e, t) {
  var n = (
    /** @type {Effect} */
    _
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  var n = (t & Vn) !== 0, r = (t & Gn) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    if (S)
      return He($, null), $;
    s === void 0 && (s = Zr(i ? e : "<!>" + e), n || (s = /** @type {Node} */
    /* @__PURE__ */ Ae(s)));
    var o = (
      /** @type {TemplateNode} */
      r || mn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      He(l, a);
    } else
      He(o, o);
    return o;
  };
}
function we(e, t) {
  if (S) {
    _.nodes_end = $, Ct();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ei = ["touchstart", "touchmove"];
function ti(e) {
  return ei.includes(e);
}
let xt = !0;
function ni(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function In(e, t) {
  return Mn(e, t);
}
function ri(e, t) {
  yt(), t.intro = t.intro ?? !1;
  const n = t.target, r = S, s = $;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(n)
    ); i && (i.nodeType !== Ke || /** @type {Comment} */
    i.data !== Xt); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ie(i);
    if (!i)
      throw $e;
    xe(!0), de(
      /** @type {Comment} */
      i
    ), Ct();
    const o = Mn(e, { ...t, anchor: i });
    if ($ === null || $.nodeType !== Ke || /** @type {Comment} */
    $.data !== en)
      throw rt(), $e;
    return xe(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== $e && console.warn("Failed to hydrate: ", o), t.recover === !1 && dr(), yt(), Fr(n), xe(!1), In(e, t);
  } finally {
    xe(r), de(s);
  }
}
const ye = /* @__PURE__ */ new Map();
function Mn(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  yt();
  var l = /* @__PURE__ */ new Set(), a = (v) => {
    for (var h = 0; h < v.length; h++) {
      var c = v[h];
      if (!l.has(c)) {
        l.add(c);
        var d = ti(c);
        t.addEventListener(c, Me, { passive: d });
        var p = ye.get(c);
        p === void 0 ? (document.addEventListener(c, Me, { passive: d }), ye.set(c, 1)) : ye.set(c, p + 1);
      }
    }
  };
  a(Jn(Pn)), wt.add(a);
  var u = void 0, f = Ir(() => {
    var v = n ?? t.appendChild(st());
    return bt(() => {
      if (i) {
        un({});
        var h = (
          /** @type {ComponentContext} */
          E
        );
        h.c = i;
      }
      s && (r.$$events = s), S && He(
        /** @type {TemplateNode} */
        v,
        null
      ), xt = o, u = e(v, r) || {}, xt = !0, S && (_.nodes_end = $), i && fn();
    }), () => {
      for (var h of l) {
        t.removeEventListener(h, Me);
        var c = (
          /** @type {number} */
          ye.get(h)
        );
        --c === 0 ? (document.removeEventListener(h, Me), ye.delete(h)) : ye.set(h, c);
      }
      wt.delete(a), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return $t.set(u, f), u;
}
let $t = /* @__PURE__ */ new WeakMap();
function ii(e, t) {
  const n = $t.get(e);
  return n ? ($t.delete(e), n(t)) : Promise.resolve();
}
function Le(e, t, n = !1) {
  S && Ct();
  var r = e, s = null, i = null, o = k, l = n ? nt : 0, a = !1;
  const u = (c, d = !0) => {
    a = !0, h(d, c);
  };
  var f = null;
  function v() {
    f !== null && (f.lastChild.remove(), r.before(f), f = null);
    var c = o ? s : i, d = o ? i : s;
    c && Yr(c), d && Sn(d, () => {
      o ? i = null : s = null;
    });
  }
  const h = (c, d) => {
    if (o === (o = c)) return;
    let p = !1;
    if (S) {
      const _e = gr(r) === Zt;
      !!o === _e && (r = _r(), de(r), xe(!1), p = !0);
    }
    var b = Nr(), O = r;
    if (b && (f = document.createDocumentFragment(), f.append(O = st())), o ? s ??= d && bt(() => d(O)) : i ??= d && bt(() => d(O)), b) {
      var m = (
        /** @type {Batch} */
        x
      ), se = o ? s : i, oe = o ? i : s;
      se && m.skipped_effects.delete(se), oe && m.skipped_effects.add(oe), m.add_callback(v);
    } else
      v();
    p && xe(!0);
  };
  Br(() => {
    a = !1, t(u), a || h(null, null);
  }, l), S && (r = $);
}
function si(e, t) {
  kn(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
const oi = () => performance.now(), G = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => oi(),
  tasks: /* @__PURE__ */ new Set()
};
function Ln() {
  const e = G.now();
  G.tasks.forEach((t) => {
    t.c(e) || (G.tasks.delete(t), t.f());
  }), G.tasks.size !== 0 && G.tick(Ln);
}
function li(e) {
  let t;
  return G.tasks.size === 0 && G.tick(Ln), {
    promise: new Promise((n) => {
      G.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      G.tasks.delete(t);
    }
  };
}
function ze(e, t) {
  ot(() => {
    e.dispatchEvent(new CustomEvent(t));
  });
}
function ai(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Kt(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [s, i] = r.split(":");
    if (!s || i === void 0) break;
    const o = ai(s.trim());
    t[o] = i.trim();
  }
  return t;
}
const ui = (e) => e;
function ft(e, t, n, r) {
  var s = (e & Yn) !== 0, i = "both", o, l = t.inert, a = t.style.overflow, u, f;
  function v() {
    return ot(() => o ??= n()(t, r?.() ?? /** @type {P} */
    {}, {
      direction: i
    }));
  }
  var h = {
    is_global: s,
    in() {
      t.inert = l, ze(t, "introstart"), u = qt(t, v(), f, 1, () => {
        ze(t, "introend"), u?.abort(), u = o = void 0, t.style.overflow = a;
      });
    },
    out(b) {
      t.inert = !0, ze(t, "outrostart"), f = qt(t, v(), u, 0, () => {
        ze(t, "outroend"), b?.();
      });
    },
    stop: () => {
      u?.abort(), f?.abort();
    }
  }, c = (
    /** @type {Effect} */
    _
  );
  if ((c.transitions ??= []).push(h), xt) {
    var d = s;
    if (!d) {
      for (var p = (
        /** @type {Effect | null} */
        c.parent
      ); p && (p.f & nt) !== 0; )
        for (; (p = p.parent) && (p.f & Te) === 0; )
          ;
      d = !p || (p.f & tt) !== 0;
    }
    d && kn(() => {
      Dt(() => h.in());
    });
  }
}
function qt(e, t, n, r, s) {
  var i = r === 1;
  if (er(t)) {
    var o, l = !1;
    return wr(() => {
      if (!l) {
        var b = t({ direction: i ? "in" : "out" });
        o = qt(e, b, n, r, s);
      }
    }), {
      abort: () => {
        l = !0, o?.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n?.deactivate(), !t?.duration)
    return s(), {
      abort: M,
      deactivate: M,
      reset: M,
      t: () => r
    };
  const { delay: a = 0, css: u, tick: f, easing: v = ui } = t;
  var h = [];
  if (i && n === void 0 && (f && f(0, 1), u)) {
    var c = Kt(u(0, 1));
    h.push(c, c);
  }
  var d = () => 1 - r, p = e.animate(h, { duration: a, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = n?.t() ?? 1 - r;
    n?.abort();
    var O = r - b, m = (
      /** @type {number} */
      t.duration * Math.abs(O)
    ), se = [];
    if (m > 0) {
      var oe = !1;
      if (u)
        for (var _e = Math.ceil(m / 16.666666666666668), g = 0; g <= _e; g += 1) {
          var w = b + O * v(g / _e), C = Kt(u(w, 1 - w));
          se.push(C), oe ||= C.overflow === "hidden";
        }
      oe && (e.style.overflow = "hidden"), d = () => {
        var q = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + O * v(q / m);
      }, f && li(() => {
        if (p.playState !== "running") return !1;
        var q = d();
        return f(q, 1 - q), !0;
      });
    }
    p = e.animate(se, { duration: m, fill: "forwards" }), p.onfinish = () => {
      d = () => r, f?.(r, 1 - r), s();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = M);
    },
    deactivate: () => {
      s = M;
    },
    reset: () => {
      r === 0 && f?.(1, 0);
    },
    t: () => d()
  };
}
function fi(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    E
  ), n = t.l.u;
  if (!n) return;
  let r = () => Qr(t.s);
  if (e) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Nt(() => {
      let l = !1;
      const a = t.s;
      for (const u in a)
        a[u] !== i[u] && (i[u] = a[u], l = !0);
      return l && s++, s;
    });
    r = () => U(o);
  }
  n.b.length && Dr(() => {
    Jt(t, r), Ve(n.b);
  }), Ht(() => {
    const s = Dt(() => n.m.map(tr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && Ht(() => {
    Jt(t, r), Ve(n.a);
  });
}
function Jt(e, t) {
  if (e.l.s)
    for (const n of e.l.s) U(n);
  t();
}
function zn(e, t, n) {
  if (e == null)
    return t(void 0), M;
  const r = Dt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const be = [];
function at(e, t = M) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(l) {
    if (ln(e, l) && (e = l, n)) {
      const a = !be.length;
      for (const u of r)
        u[1](), be.push(u, e);
      if (a) {
        for (let u = 0; u < be.length; u += 2)
          be[u][0](be[u + 1]);
        be.length = 0;
      }
    }
  }
  function i(l) {
    s(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, a = M) {
    const u = [l, a];
    return r.add(u), r.size === 1 && (n = t(s, i) || M), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function ci(e) {
  let t;
  return zn(e, (n) => t = n)(), t;
}
let kt = Symbol();
function Be(e, t, n) {
  const r = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ yn(void 0),
    unsubscribe: M
  };
  if (r.store !== e && !(kt in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = M;
    else {
      var s = !0;
      r.unsubscribe = zn(e, (i) => {
        s ? r.source.v = i : V(r.source, i);
      }), s = !1;
    }
  return e && kt in n ? ci(e) : U(r.source);
}
function di() {
  const e = {};
  function t() {
    jr(() => {
      for (var n in e)
        e[n].unsubscribe();
      ce(e, kt, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function vi(e) {
  return new hi(e);
}
class hi {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, o) => {
      var l = /* @__PURE__ */ yn(o, !1, !1);
      return n.set(i, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, o) {
          return U(n.get(o) ?? r(o, Reflect.get(i, o)));
        },
        has(i, o) {
          return o === ir ? !0 : (U(n.get(o) ?? r(o, Reflect.get(i, o))), Reflect.has(i, o));
        },
        set(i, o, l) {
          return V(n.get(o) ?? r(o, l), l), Reflect.set(i, o, l);
        }
      }
    );
    this.#e = (t.hydrate ? ri : In)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && Sr(), this.#t = s.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ce(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(o) {
          this.#e[i] = o;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(s, i);
    }, this.#e.$destroy = () => {
      ii(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...s) => n.call(this, ...s);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Bn;
typeof HTMLElement == "function" && (Bn = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (s) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), we(s, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = pi(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = Ue(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = vi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Pr(() => {
        Lr(() => {
          this.$$r = !0;
          for (const r of Ye(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const s = Ue(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const i = this.$$c.$on(r, s);
          this.$$l_u.set(s, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ue(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Ye(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Ue(e, t, n, r) {
  const s = n[e]?.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function pi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function _i(e, t, n, r, s, i) {
  let o = class extends Bn {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ye(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Ye(t).forEach((l) => {
    ce(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(a) {
        a = Ue(l, a, t), this.$$d[l] = a;
        var u = this.$$c;
        if (u) {
          var f = qe(u, l)?.get;
          f ? u[l] = a : u.$set({ [l]: a });
        }
      }
    });
  }), r.forEach((l) => {
    ce(o.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
function gi(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Qt(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
function ct(e, { delay: t = 0, duration: n = 400, easing: r = gi, x: s = 0, y: i = 0, opacity: o = 0 } = {}) {
  const l = getComputedStyle(e), a = +l.opacity, u = l.transform === "none" ? "" : l.transform, f = a * (1 - o), [v, h] = Qt(s), [c, d] = Qt(i);
  return {
    delay: t,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${u} translate(${(1 - p) * v}${h}, ${(1 - p) * c}${d});
			opacity: ${a - f * b}`
  };
}
const me = at(!1), dt = at(!1), le = at(!1), vt = at(!1);
var yi = (e, t) => e.key === "Enter" && t, bi = (e, t) => e.key === "Enter" && t, mi = (e, t) => e.key === "Enter" && t, wi = /* @__PURE__ */ Ie(`<div class="welcome-box svelte-nuyoqv"><div class="welcome svelte-nuyoqv"><h1 class="svelte-nuyoqv">Welcome to our website!</h1> <p class="svelte-nuyoqv">Nice to meet you! If you have any question about our services, feel free to contact us.</p></div> <div class="welcome-2 svelte-nuyoqv"><div class="faq svelte-nuyoqv" aria-details="faq option" role="button" tabindex="0">FAQ</div> <div class="talk svelte-nuyoqv" aria-details="chat option" role="button" tabindex="0">Let's Talk</div></div></div>`), xi = (e, t) => e.key === "Enter" && t, $i = /* @__PURE__ */ Ie(' <div class="faq-box svelte-nuyoqv"><div class="faq-options svelte-nuyoqv"><ul class="faq-options-li svelte-nuyoqv"><li class="svelte-nuyoqv">How do I apply?</li> <li class="svelte-nuyoqv">What courses do you offer?</li> <li class="svelte-nuyoqv">When do applications close?</li> <li class="svelte-nuyoqv">Where is the campus located?</li> <li class="svelte-nuyoqv">Talk to someone?</li> <div id="talk-btn" aria-details="chat option" role="button" tabindex="0" class="svelte-nuyoqv">Can I talk to someone?</div></ul></div></div>', 1), qi = /* @__PURE__ */ Ie(`<div class="chat-dialog svelte-nuyoqv"><div class="chat-header svelte-nuyoqv"><div class="svelte-nuyoqv"><h1 class="svelte-nuyoqv">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-nuyoqv" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-nuyoqv"><p class="bot-msg svelte-nuyoqv">Hi! How Can I help You?</p> <div class="chat-options svelte-nuyoqv"><ul id="chat-options" class="svelte-nuyoqv"><li class="svelte-nuyoqv">How do I apply?</li> <li class="svelte-nuyoqv">What courses do you offer?</li> <li class="svelte-nuyoqv">When do applications close?</li> <li class="svelte-nuyoqv">Where is the campus located?</li> <li class="svelte-nuyoqv">Talk to someone?</li></ul></div> <div class="input svelte-nuyoqv"><input type="text" placeholder="Let's share something" class="svelte-nuyoqv"/> <button class="send svelte-nuyoqv"><img src="https://cdn.jsdelivr.net/gh/biswarup-capsi/chatbot-widget@master/dist/Shape.svg" alt="" class="svelte-nuyoqv"/></button></div></div></div>`), ki = /* @__PURE__ */ Ie(`<div class="chat-dialog svelte-nuyoqv"><div class="chat-header svelte-nuyoqv"><div class="svelte-nuyoqv"><h1 class="svelte-nuyoqv">ChatFlow</h1> <p>A live chat interface that allows for seamless, natural communication and connection.</p></div> <div class="cross svelte-nuyoqv" role="button" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg></div></div> <div class="chat-body svelte-nuyoqv"><p class="bot-msg svelte-nuyoqv">Thanks for joining us! Let's start by getting your name.</p> <ul class="user-msg svelte-nuyoqv"><li class="svelte-nuyoqv">John</li></ul> <div class="input svelte-nuyoqv"><input type="text" placeholder="Let's share something" class="svelte-nuyoqv"/> <button class="send svelte-nuyoqv"><img src="https://cdn.jsdelivr.net/gh/biswarup-capsi/chatbot-widget@master/dist/Shape.svg" alt="" class="svelte-nuyoqv"/></button></div></div></div>`), Ei = /* @__PURE__ */ Ie('<div><div class="chat-icon svelte-nuyoqv" aria-live="polite" aria-label="Chat" role="button" tabindex="0"></div> <!> <!> <!> <!></div>');
const Ai = {
  hash: "svelte-nuyoqv",
  code: `\r
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');\r
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Outfit:wght@100..900&family=Questrial&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');:host {all:initial; /* Reset styles */position:fixed;bottom:1rem;right:1rem;z-index:9999;}.chat-icon.svelte-nuyoqv {\r
    /* position: absolute; */bottom:20px;background-image:url("https: //cdn.jsdelivr.net/gh/biswarup-capsi/chatbot-widget@master/dist/Objects.svg");background-repeat:no-repeat;background-size:contain;\r
    /* background-size: 120%; */background-position-x:100%;background-position-y:100%;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);box-sizing:border-box;transition:all 0.3s ease-in-out;position:relative;}.chat-icon.svelte-nuyoqv:hover {transform:scale(1.05);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2);}.chat-dialog.svelte-nuyoqv {position:absolute;bottom:90px;right:5%;width:400px;height:618px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);display:flex;flex-direction:column;overflow:hidden;}.welcome-box.svelte-nuyoqv {position:fixed;right:1%;bottom:90px;display:flex;flex-direction:column;gap:10px;margin-bottom:10px;font-family:Figtree;font-weight:700;font-style:Bold;font-size:16px;line-height:24px;letter-spacing:0%;max-height:calc((248-60)px);}.welcome.svelte-nuyoqv {box-sizing:border-box;max-width:290px;max-height:124px;background:#E9E9E9;\r
    /* just for visibility */padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-radius:24px 24px 0 24px;display:flex;flex-direction:column;}.welcome.svelte-nuyoqv h1:where(.svelte-nuyoqv){font-size:16px;margin:0;padding:0;}.welcome.svelte-nuyoqv p:where(.svelte-nuyoqv){box-sizing:border-box;font-family:"Figtree";font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;padding:0;margin:0;}.welcome-2.svelte-nuyoqv {\r
    /* width: 290px; */height:44px;display:flex;\r
    /* justify-content: space-between; */gap:10px;}.faq.svelte-nuyoqv,.talk.svelte-nuyoqv{background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);height:44px;width:140px;display:flex;justify-content:center;align-items:center;border-radius:20px;color:white;font-size:16px;cursor:pointer;transition:all 0.2s ease-in-out;}.faq.svelte-nuyoqv:hover {transform:scale(1.02);}.talk.svelte-nuyoqv:hover{transform:scale(1.02);}.chat-header.svelte-nuyoqv {background:linear-gradient(270deg, #A7BEFE 0%, #6E6EC5 36.11%, #5347AA 64.88%, #43319A 100%);;\rpadding: 0.8rem;display:flex;justify-content:space-between;}.chat-header.svelte-nuyoqv div:where(.svelte-nuyoqv) h1:where(.svelte-nuyoqv){font-family:'source sans 3', sans-serif;font-weight:700;font-style:Bold;font-size:30px;\r
    /* line-height: 100%; */letter-spacing:0%;}.chat-header.svelte-nuyoqv div:where(.svelte-nuyoqv){color:white;font-family:'Questrial', sans-serif;font-weight:300;font-size:12px;line-height:16px;letter-spacing:22%;display:inline;}.cross.svelte-nuyoqv{cursor:pointer;padding-top:1px;\r
    /* margin-right: 5px; */\r
    /* width: 15px; */font-size:15rem;}.chat-body.svelte-nuyoqv {flex:1;position:relative;height:inherit;padding:0.5rem;padding-top:169px;padding-bottom:1.5rem;overflow-y:auto;}.chat-options.svelte-nuyoqv{padding:0.5rem;}#chat-options.svelte-nuyoqv{padding:0.5rem;outline:none;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}#chat-options.svelte-nuyoqv li:where(.svelte-nuyoqv){padding:0.3rem;border:1px solid #A3B9FA;color:#6D6CC4;border-radius:16px;list-style:none;padding-right:12px;padding-left:12px;width:130;height:32;gap:8px;font-family:Inter;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;vertical-align:middle;transition:border ease-in-out;}#chat-options.svelte-nuyoqv li:where(.svelte-nuyoqv):hover{\r
    /* background: #f0f0f0; */\r
    /* transform: scale(1.03); */border:2px solid #A3B9FA;cursor:pointer;}.input.svelte-nuyoqv{position:absolute;bottom:0;left:0;\r
    /* padding: 1rem; */\r
    /* border: 1px solid #ccc; */margin:12px;border:none;width:376px;height:48px;box-sizing:border-box;border:1px solid #f0f0f0f5;border-radius:12px;display:flex;align-items:center;padding-left:12px;padding-right:12px;}.input.svelte-nuyoqv input:where(.svelte-nuyoqv){flex:1;height:32px;border:none;outline:none;background:transparent;}.input.svelte-nuyoqv:focus{outline:none;\r
    /* border: 2px solid #46b3e5; */}.send.svelte-nuyoqv{background-color:#5347AA;width:32px;height:32px;display:flex;justify-content:center;align-items:center;opacity:1;border-radius:12px;border-width:1px;color:white;cursor:pointer;}.send.svelte-nuyoqv img:where(.svelte-nuyoqv){width:14px;height:14px;}.bot-msg.svelte-nuyoqv{\r
    /* width: 165px; */\r
    /* height: 32px; */padding:12px;display:inline-block;max-width:290px;width:fit-content;border-top-right-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;padding-top:12px;\r
    /* padding-bottom: 12px; */text-align:left;background-color:#F4F4F4;font-family:'Outfit', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;}.faq-box.svelte-nuyoqv{width:290px;height:324px;display:flex;flex-direction:column;position:fixed;bottom:70px;right:1%;}.faq-options.svelte-nuyoqv {padding:0.5rem;}.faq-options-li.svelte-nuyoqv {padding:0.5rem;border-radius:10px;position:absolute;bottom:10%;right:0%;text-decoration:none;display:flex;flex-direction:column;gap:0.5rem;align-items:flex-end;}.faq-options-li.svelte-nuyoqv li:where(.svelte-nuyoqv) {cursor:pointer;background-color:#E9E9E9;padding:12px 24px 12px 24px;border-radius:24px;list-style:none;font-family:'Figtree', sans-serif;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0%;text-align:right;display:flex;justify-content:center;align-items:center;}.faq-options-li.svelte-nuyoqv li:where(.svelte-nuyoqv):hover {\r
      /* background: #f0f0f0; */transform:scale(1.03);\r
      /* border: 2px solid #A3B9FA; */cursor:pointer;}#talk-btn.svelte-nuyoqv {cursor:pointer;background:linear-gradient(270deg, #A7BEFE 0%, #43319A 100%);border-radius:20px;width:290px;padding:12px 16px 12px 16px;color:white;font-family:DM Sans;font-weight:700;font-size:14px;line-height:20px;letter-spacing:0%;text-align:center;display:flex;justify-content:center;align-items:center;}.user-msg.svelte-nuyoqv{display:flex;justify-content:flex-end;}.user-msg.svelte-nuyoqv li:where(.svelte-nuyoqv){display:inline-block;width:fit-content;padding:5px 12px 5px 12px;border:1px solid #43319A;border-top-left-radius:16px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;list-style:none;\r
        /* padding:12px; */\r
        /* padding-left: 12px; */}`
};
function Ti(e, t) {
  un(t, !1), si(e, Ai);
  const [n, r] = di(), s = () => Be(me, "$open", n), i = () => Be(dt, "$openFaq", n), o = () => Be(le, "$openChat", n), l = () => Be(vt, "$openAgent", n), a = () => {
    me.update((g) => !g), le.set(!1), dt.set(!1), vt.set(!1);
  }, u = () => {
    s() && me.update((g) => !g), le.update((g) => !g);
  }, f = () => {
    s() && me.update((g) => !g), vt.update((g) => !g);
  }, v = () => {
    s() && me.update((g) => !g), dt.update((g) => !g);
  };
  fi();
  var h = Ei(), c = B(h);
  c.__click = a, c.__keydown = [yi, a];
  var d = W(c, 2);
  {
    var p = (g) => {
      var w = wi(), C = W(B(w), 2), q = B(C);
      q.__click = v, q.__keydown = [bi, v];
      var N = W(q, 2);
      N.__click = u, N.__keydown = [mi, u], z(C), z(w), ft(3, w, () => ct, () => ({ y: 20, duration: 300 })), we(g, w);
    };
    Le(d, (g) => {
      s() && g(p);
    });
  }
  var b = W(d, 2);
  {
    var O = (g) => {
      var w = $i(), C = Cr(w), q = W(C), N = B(q), ge = B(N), Pt = W(B(ge), 10);
      Pt.__click = f, Pt.__keydown = [xi, f], z(ge), z(N), z(q), zr((Wn) => ni(C, `${Wn ?? ""} `), [() => me.set(!1)]), we(g, w);
    };
    Le(b, (g) => {
      i() && s() == !1 && g(O);
    });
  }
  var m = W(b, 2);
  {
    var se = (g) => {
      var w = qi(), C = B(w), q = W(B(C), 2);
      q.__click = () => le.update((N) => !N), q.__keydown = (N) => N.key === "enter" && le.update((ge) => !ge), z(C), Lt(2), z(w), ft(3, w, () => ct, () => ({ x: 20, duration: 300 })), we(g, w);
    };
    Le(m, (g) => {
      o() && !s() && g(se);
    });
  }
  var oe = W(m, 2);
  {
    var _e = (g) => {
      var w = ki(), C = B(w), q = W(B(C), 2);
      q.__click = () => le.update((N) => !N), q.__keydown = (N) => N.key === "enter" && le.update((ge) => !ge), z(C), Lt(2), z(w), ft(3, w, () => ct, () => ({ x: 20, duration: 300 })), we(g, w);
    };
    Le(oe, (g) => {
      l() && !s() && g(_e);
    });
  }
  z(h), we(e, h), fn(), r();
}
Xr(["click", "keydown"]);
customElements.define("chat-widget", _i(Ti, {}, [], [], !0));
export {
  Ti as default
};
