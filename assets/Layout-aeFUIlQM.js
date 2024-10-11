import {
  _ as F,
  P as v,
  o as z,
  a as ze,
  f as Fe,
  d as Q,
  s as P,
  b as se,
  n as G,
  w as V,
  c as Oe,
  e as ie,
  g as s,
  T as ve,
  h as ye,
  v as he,
  i as j,
  r as Z,
  j as Ve,
  m as He,
  k as Re,
  l as D,
  p as We,
  u as qe,
  q as Ue,
  t as ge,
  x as _e,
  y as re,
  C as Xe,
  z as X,
  A as ce,
  B as Be,
  D as N,
  E as T,
  F as f,
  G as L,
  H as U,
  I as M,
  J as be,
  K as we,
  L as J,
  M as Ye,
  N as Ke,
  O as H,
  Q as Ge,
  R as Ce,
  S as Je,
} from "./index-KkQdgUcf.js";
import { I as R } from "./iconify-lB2IH7kp.js";
import { _ as Qe } from "./index-CxDHnLdF.js";
import { u as De } from "./User-CBa8n7L2.js";
import { K as Ze, P as et } from "./styleChecker-BuStD9lD.js";
import { o as Ne } from "./omit-B7_q56Sl.js";
import { i as Me } from "./User-D2-o_HEw.js";
import { d as tt, N as ot } from "./index-DO8qY5aF.js";
import { i as Se } from "./isNumeric-DjvBa-1E.js";
import { _ as nt, M as at, D as lt } from "./index-BmI2GDoz.js";
import { M as rt } from "./index-OBBF6zIq.js";
import { u as it } from "./index-D7It3ArI.js";
import { M as st } from "./index-CaJ7un7-.js";
import "./parse-j8CtVGGo.js";
import "./index-BiUVUjLI.js";
import "./vnode-DKG64mRH.js";
import "./ResizeObserver.es-B1PUzC5B.js";
import "./colors-Bij3F8r-.js";
import "./collapseMotion-CpBugv6e.js";
import "./index-Cj1yT-6A.js";
const Ie = () => ({
    prefixCls: String,
    width: v.oneOfType([v.string, v.number]),
    height: v.oneOfType([v.string, v.number]),
    style: { type: Object, default: void 0 },
    class: String,
    rootClassName: String,
    rootStyle: z(),
    placement: { type: String },
    wrapperClassName: String,
    level: { type: [String, Array] },
    levelMove: { type: [Number, Function, Array] },
    duration: String,
    ease: String,
    showMask: { type: Boolean, default: void 0 },
    maskClosable: { type: Boolean, default: void 0 },
    maskStyle: { type: Object, default: void 0 },
    afterVisibleChange: Function,
    keyboard: { type: Boolean, default: void 0 },
    contentWrapperStyle: ze(),
    autofocus: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    motion: Fe(),
    maskMotion: z(),
  }),
  ct = () =>
    F(F({}, Ie()), {
      forceRender: { type: Boolean, default: void 0 },
      getContainer: v.oneOfType([v.string, v.func, v.object, v.looseBool]),
    }),
  dt = () =>
    F(F({}, Ie()), {
      getContainer: Function,
      getOpenCount: Function,
      scrollLocker: v.any,
      inline: Boolean,
    });
function ut(e) {
  return Array.isArray(e) ? e : [e];
}
const mt = {
  transition: "transitionend",
  WebkitTransition: "webkitTransitionEnd",
  MozTransition: "transitionend",
  OTransition: "oTransitionEnd otransitionend",
};
Object.keys(mt).filter((e) => {
  if (typeof document > "u") return !1;
  const o = document.getElementsByTagName("html")[0];
  return e in (o ? o.style : {});
})[0];
const ft = !(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var pt = function (e, o) {
  var a = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (a[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      o.indexOf(t[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[r]) &&
        (a[t[r]] = e[t[r]]);
  return a;
};
const $e = Q({
  compatConfig: { MODE: 3 },
  inheritAttrs: !1,
  props: dt(),
  emits: ["close", "handleClick", "change"],
  setup(e, o) {
    let { emit: a, slots: t } = o;
    const r = P(),
      b = P(),
      C = P(),
      _ = P(),
      d = P();
    let m = [];
    `${Number(
      (Date.now() + Math.random())
        .toString()
        .replace(".", Math.round(Math.random() * 9).toString())
    ).toString(16)}`,
      se(() => {
        G(() => {
          var i;
          const { open: p, getContainer: S, showMask: x, autofocus: k } = e,
            $ = S == null ? void 0 : S();
          w(e),
            p &&
              ($ && ($.parentNode, document.body),
              G(() => {
                k && h();
              }),
              x && ((i = e.scrollLocker) === null || i === void 0 || i.lock()));
        });
      }),
      V(
        () => e.level,
        () => {
          w(e);
        },
        { flush: "post" }
      ),
      V(
        () => e.open,
        () => {
          const {
              open: i,
              getContainer: p,
              scrollLocker: S,
              showMask: x,
              autofocus: k,
            } = e,
            $ = p == null ? void 0 : p();
          $ && ($.parentNode, document.body),
            i
              ? (k && h(), x && (S == null || S.lock()))
              : S == null || S.unLock();
        },
        { flush: "post" }
      ),
      Oe(() => {
        var i;
        const { open: p } = e;
        p && (document.body.style.touchAction = ""),
          (i = e.scrollLocker) === null || i === void 0 || i.unLock();
      }),
      V(
        () => e.placement,
        (i) => {
          i && (d.value = null);
        }
      );
    const h = () => {
        var i, p;
        (p = (i = b.value) === null || i === void 0 ? void 0 : i.focus) ===
          null ||
          p === void 0 ||
          p.call(i);
      },
      l = (i) => {
        a("close", i);
      },
      u = (i) => {
        i.keyCode === Ze.ESC && (i.stopPropagation(), l(i));
      },
      g = () => {
        const { open: i, afterVisibleChange: p } = e;
        p && p(!!i);
      },
      w = (i) => {
        let { level: p, getContainer: S } = i;
        if (ft) return;
        const x = S == null ? void 0 : S(),
          k = x ? x.parentNode : null;
        (m = []),
          p === "all"
            ? (k ? Array.prototype.slice.call(k.children) : []).forEach((O) => {
                O.nodeName !== "SCRIPT" &&
                  O.nodeName !== "STYLE" &&
                  O.nodeName !== "LINK" &&
                  O !== x &&
                  m.push(O);
              })
            : p &&
              ut(p).forEach(($) => {
                document.querySelectorAll($).forEach((O) => {
                  m.push(O);
                });
              });
      },
      I = (i) => {
        a("handleClick", i);
      },
      A = P(!1);
    return (
      V(b, () => {
        G(() => {
          A.value = !0;
        });
      }),
      () => {
        var i, p;
        const {
            width: S,
            height: x,
            open: k,
            prefixCls: $,
            placement: O,
            level: W,
            levelMove: q,
            ease: de,
            duration: ue,
            getContainer: me,
            onChange: fe,
            afterVisibleChange: pe,
            showMask: Y,
            maskClosable: ee,
            maskStyle: te,
            keyboard: oe,
            getOpenCount: n,
            scrollLocker: c,
            contentWrapperStyle: y,
            style: B,
            class: E,
            rootClassName: ne,
            rootStyle: ae,
            maskMotion: Te,
            motion: le,
            inline: Le,
          } = e,
          je = pt(e, [
            "width",
            "height",
            "open",
            "prefixCls",
            "placement",
            "level",
            "levelMove",
            "ease",
            "duration",
            "getContainer",
            "onChange",
            "afterVisibleChange",
            "showMask",
            "maskClosable",
            "maskStyle",
            "keyboard",
            "getOpenCount",
            "scrollLocker",
            "contentWrapperStyle",
            "style",
            "class",
            "rootClassName",
            "rootStyle",
            "maskMotion",
            "motion",
            "inline",
          ]),
          K = k && A.value,
          Ae = ie($, {
            [`${$}-${O}`]: !0,
            [`${$}-open`]: K,
            [`${$}-inline`]: Le,
            "no-mask": !Y,
            [ne]: !0,
          }),
          Ee = typeof le == "function" ? le(O) : le;
        return s(
          "div",
          j(
            j({}, Ne(je, ["autofocus"])),
            {},
            {
              tabindex: -1,
              class: Ae,
              style: ae,
              ref: b,
              onKeydown: K && oe ? u : void 0,
            }
          ),
          [
            s(ve, Te, {
              default: () => [
                Y &&
                  ye(
                    s(
                      "div",
                      {
                        class: `${$}-mask`,
                        onClick: ee ? l : void 0,
                        style: te,
                        ref: C,
                      },
                      null
                    ),
                    [[he, K]]
                  ),
              ],
            }),
            s(ve, j(j({}, Ee), {}, { onAfterEnter: g, onAfterLeave: g }), {
              default: () => [
                ye(
                  s(
                    "div",
                    { class: `${$}-content-wrapper`, style: [y], ref: r },
                    [
                      s(
                        "div",
                        { class: [`${$}-content`, E], style: B, ref: d },
                        [
                          (i = t.default) === null || i === void 0
                            ? void 0
                            : i.call(t),
                        ]
                      ),
                      t.handler
                        ? s("div", { onClick: I, ref: _ }, [
                            (p = t.handler) === null || p === void 0
                              ? void 0
                              : p.call(t),
                          ])
                        : null,
                    ]
                  ),
                  [[he, K]]
                ),
              ],
            }),
          ]
        );
      }
    );
  },
});
var ke = function (e, o) {
  var a = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (a[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      o.indexOf(t[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[r]) &&
        (a[t[r]] = e[t[r]]);
  return a;
};
const vt = Q({
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: Me(ct(), {
      prefixCls: "drawer",
      placement: "left",
      getContainer: "body",
      level: "all",
      duration: ".3s",
      ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      afterVisibleChange: () => {},
      showMask: !0,
      maskClosable: !0,
      maskStyle: {},
      wrapperClassName: "",
      keyboard: !0,
      forceRender: !1,
      autofocus: !0,
    }),
    emits: ["handleClick", "close"],
    setup(e, o) {
      let { emit: a, slots: t } = o;
      const r = Z(null),
        b = (_) => {
          a("handleClick", _);
        },
        C = (_) => {
          a("close", _);
        };
      return () => {
        const {
            getContainer: _,
            wrapperClassName: d,
            rootClassName: m,
            rootStyle: h,
            forceRender: l,
          } = e,
          u = ke(e, [
            "getContainer",
            "wrapperClassName",
            "rootClassName",
            "rootStyle",
            "forceRender",
          ]);
        let g = null;
        if (!_)
          return s(
            $e,
            j(
              j({}, u),
              {},
              {
                rootClassName: m,
                rootStyle: h,
                open: e.open,
                onClose: C,
                onHandleClick: b,
                inline: !0,
              }
            ),
            t
          );
        const w = !!t.handler || l;
        return (
          (w || e.open || r.value) &&
            (g = s(
              et,
              {
                autoLock: !0,
                visible: e.open,
                forceRender: w,
                getContainer: _,
                wrapperClassName: d,
              },
              {
                default: (I) => {
                  var { visible: A, afterClose: i } = I,
                    p = ke(I, ["visible", "afterClose"]);
                  return s(
                    $e,
                    j(
                      j(j({ ref: r }, u), p),
                      {},
                      {
                        rootClassName: m,
                        rootStyle: h,
                        open: A !== void 0 ? A : e.open,
                        afterVisibleChange:
                          i !== void 0 ? i : e.afterVisibleChange,
                        onClose: C,
                        onHandleClick: b,
                      }
                    ),
                    t
                  );
                },
              }
            )),
          g
        );
      };
    },
  }),
  yt = (e) => {
    const { componentCls: o, motionDurationSlow: a } = e,
      t = {
        "&-enter, &-appear, &-leave": {
          "&-start": { transition: "none" },
          "&-active": { transition: `all ${a}` },
        },
      };
    return {
      [o]: {
        [`${o}-mask-motion`]: {
          "&-enter, &-appear, &-leave": {
            "&-active": { transition: `all ${a}` },
          },
          "&-enter, &-appear": { opacity: 0, "&-active": { opacity: 1 } },
          "&-leave": { opacity: 1, "&-active": { opacity: 0 } },
        },
        [`${o}-panel-motion`]: {
          "&-left": [
            t,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateX(-100%) !important" },
                "&-active": { transform: "translateX(0)" },
              },
              "&-leave": {
                transform: "translateX(0)",
                "&-active": { transform: "translateX(-100%)" },
              },
            },
          ],
          "&-right": [
            t,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateX(100%) !important" },
                "&-active": { transform: "translateX(0)" },
              },
              "&-leave": {
                transform: "translateX(0)",
                "&-active": { transform: "translateX(100%)" },
              },
            },
          ],
          "&-top": [
            t,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateY(-100%) !important" },
                "&-active": { transform: "translateY(0)" },
              },
              "&-leave": {
                transform: "translateY(0)",
                "&-active": { transform: "translateY(-100%)" },
              },
            },
          ],
          "&-bottom": [
            t,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateY(100%) !important" },
                "&-active": { transform: "translateY(0)" },
              },
              "&-leave": {
                transform: "translateY(0)",
                "&-active": { transform: "translateY(100%)" },
              },
            },
          ],
        },
      },
    };
  },
  ht = (e) => {
    const {
        componentCls: o,
        zIndexPopup: a,
        colorBgMask: t,
        colorBgElevated: r,
        motionDurationSlow: b,
        motionDurationMid: C,
        padding: _,
        paddingLG: d,
        fontSizeLG: m,
        lineHeightLG: h,
        lineWidth: l,
        lineType: u,
        colorSplit: g,
        marginSM: w,
        colorIcon: I,
        colorIconHover: A,
        colorText: i,
        fontWeightStrong: p,
        drawerFooterPaddingVertical: S,
        drawerFooterPaddingHorizontal: x,
      } = e,
      k = `${o}-content-wrapper`;
    return {
      [o]: {
        position: "fixed",
        inset: 0,
        zIndex: a,
        pointerEvents: "none",
        "&-pure": {
          position: "relative",
          background: r,
          [`&${o}-left`]: { boxShadow: e.boxShadowDrawerLeft },
          [`&${o}-right`]: { boxShadow: e.boxShadowDrawerRight },
          [`&${o}-top`]: { boxShadow: e.boxShadowDrawerUp },
          [`&${o}-bottom`]: { boxShadow: e.boxShadowDrawerDown },
        },
        "&-inline": { position: "absolute" },
        [`${o}-mask`]: {
          position: "absolute",
          inset: 0,
          zIndex: a,
          background: t,
          pointerEvents: "auto",
        },
        [k]: {
          position: "absolute",
          zIndex: a,
          transition: `all ${b}`,
          "&-hidden": { display: "none" },
        },
        [`&-left > ${k}`]: {
          top: 0,
          bottom: 0,
          left: { _skip_check_: !0, value: 0 },
          boxShadow: e.boxShadowDrawerLeft,
        },
        [`&-right > ${k}`]: {
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: 0,
          boxShadow: e.boxShadowDrawerRight,
        },
        [`&-top > ${k}`]: {
          top: 0,
          insetInline: 0,
          boxShadow: e.boxShadowDrawerUp,
        },
        [`&-bottom > ${k}`]: {
          bottom: 0,
          insetInline: 0,
          boxShadow: e.boxShadowDrawerDown,
        },
        [`${o}-content`]: {
          width: "100%",
          height: "100%",
          overflow: "auto",
          background: r,
          pointerEvents: "auto",
        },
        [`${o}-wrapper-body`]: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        },
        [`${o}-header`]: {
          display: "flex",
          flex: 0,
          alignItems: "center",
          padding: `${_}px ${d}px`,
          fontSize: m,
          lineHeight: h,
          borderBottom: `${l}px ${u} ${g}`,
          "&-title": {
            display: "flex",
            flex: 1,
            alignItems: "center",
            minWidth: 0,
            minHeight: 0,
          },
        },
        [`${o}-extra`]: { flex: "none" },
        [`${o}-close`]: {
          display: "inline-block",
          marginInlineEnd: w,
          color: I,
          fontWeight: p,
          fontSize: m,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          textDecoration: "none",
          background: "transparent",
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${C}`,
          textRendering: "auto",
          "&:focus, &:hover": { color: A, textDecoration: "none" },
        },
        [`${o}-title`]: {
          flex: 1,
          margin: 0,
          color: i,
          fontWeight: e.fontWeightStrong,
          fontSize: m,
          lineHeight: h,
        },
        [`${o}-body`]: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          padding: d,
          overflow: "auto",
        },
        [`${o}-footer`]: {
          flexShrink: 0,
          padding: `${S}px ${x}px`,
          borderTop: `${l}px ${u} ${g}`,
        },
        "&-rtl": { direction: "rtl" },
      },
    };
  },
  gt = Ve(
    "Drawer",
    (e) => {
      const o = He(e, {
        drawerFooterPaddingVertical: e.paddingXS,
        drawerFooterPaddingHorizontal: e.padding,
      });
      return [ht(o), yt(o)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase })
  );
var _t = function (e, o) {
  var a = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (a[t] = e[t]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, t = Object.getOwnPropertySymbols(e); r < t.length; r++)
      o.indexOf(t[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[r]) &&
        (a[t[r]] = e[t[r]]);
  return a;
};
const bt = ["top", "right", "bottom", "left"],
  xe = { distance: 180 },
  wt = () => ({
    autofocus: { type: Boolean, default: void 0 },
    closable: { type: Boolean, default: void 0 },
    closeIcon: v.any,
    destroyOnClose: { type: Boolean, default: void 0 },
    forceRender: { type: Boolean, default: void 0 },
    getContainer: {
      type: [String, Function, Boolean, Object],
      default: void 0,
    },
    maskClosable: { type: Boolean, default: void 0 },
    mask: { type: Boolean, default: void 0 },
    maskStyle: z(),
    rootClassName: String,
    rootStyle: z(),
    size: { type: String },
    drawerStyle: z(),
    headerStyle: z(),
    bodyStyle: z(),
    contentWrapperStyle: { type: Object, default: void 0 },
    title: v.any,
    visible: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    width: v.oneOfType([v.string, v.number]),
    height: v.oneOfType([v.string, v.number]),
    zIndex: Number,
    prefixCls: String,
    push: v.oneOfType([v.looseBool, { type: Object }]),
    placement: v.oneOf(bt),
    keyboard: { type: Boolean, default: void 0 },
    extra: v.any,
    footer: v.any,
    footerStyle: z(),
    level: v.any,
    levelMove: { type: [Number, Array, Function] },
    handle: v.any,
    afterVisibleChange: Function,
    onAfterVisibleChange: Function,
    onAfterOpenChange: Function,
    "onUpdate:visible": Function,
    "onUpdate:open": Function,
    onClose: Function,
  }),
  Ct = Q({
    compatConfig: { MODE: 3 },
    name: "ADrawer",
    inheritAttrs: !1,
    props: Me(wt(), {
      closable: !0,
      placement: "right",
      maskClosable: !0,
      mask: !0,
      level: null,
      keyboard: !0,
      push: xe,
    }),
    slots: Object,
    setup(e, o) {
      let { emit: a, slots: t, attrs: r } = o;
      const b = P(!1),
        C = P(!1),
        _ = P(null),
        d = P(!1),
        m = P(!1),
        h = D(() => {
          var n;
          return (n = e.open) !== null && n !== void 0 ? n : e.visible;
        });
      V(
        h,
        () => {
          h.value ? (d.value = !0) : (m.value = !1);
        },
        { immediate: !0 }
      ),
        V(
          [h, d],
          () => {
            h.value && d.value && (m.value = !0);
          },
          { immediate: !0 }
        );
      const l = We("parentDrawerOpts", null),
        { prefixCls: u, getPopupContainer: g, direction: w } = qe("drawer", e),
        [I, A] = gt(u),
        i = D(() =>
          e.getContainer === void 0 && g != null && g.value
            ? () => g.value(document.body)
            : e.getContainer
        );
      tt(
        !e.afterVisibleChange,
        "Drawer",
        "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"
      ),
        Ue("parentDrawerOpts", {
          setPush: () => {
            b.value = !0;
          },
          setPull: () => {
            (b.value = !1),
              G(() => {
                x();
              });
          },
        }),
        se(() => {
          h.value && l && l.setPush();
        }),
        Oe(() => {
          l && l.setPull();
        }),
        V(
          m,
          () => {
            l && (m.value ? l.setPush() : l.setPull());
          },
          { flush: "post" }
        );
      const x = () => {
          var n, c;
          (c = (n = _.value) === null || n === void 0 ? void 0 : n.domFocus) ===
            null ||
            c === void 0 ||
            c.call(n);
        },
        k = (n) => {
          a("update:visible", !1), a("update:open", !1), a("close", n);
        },
        $ = (n) => {
          var c;
          n ||
            (C.value === !1 && (C.value = !0),
            e.destroyOnClose && (d.value = !1)),
            (c = e.afterVisibleChange) === null || c === void 0 || c.call(e, n),
            a("afterVisibleChange", n),
            a("afterOpenChange", n);
        },
        O = D(() => {
          const { push: n, placement: c } = e;
          let y;
          return (
            typeof n == "boolean"
              ? (y = n ? xe.distance : 0)
              : (y = n.distance),
            (y = parseFloat(String(y || 0))),
            c === "left" || c === "right"
              ? `translateX(${c === "left" ? y : -y}px)`
              : c === "top" || c === "bottom"
              ? `translateY(${c === "top" ? y : -y}px)`
              : null
          );
        }),
        W = D(() => {
          var n;
          return (n = e.width) !== null && n !== void 0
            ? n
            : e.size === "large"
            ? 736
            : 378;
        }),
        q = D(() => {
          var n;
          return (n = e.height) !== null && n !== void 0
            ? n
            : e.size === "large"
            ? 736
            : 378;
        }),
        de = D(() => {
          const { mask: n, placement: c } = e;
          if (!m.value && !n) return {};
          const y = {};
          return (
            c === "left" || c === "right"
              ? (y.width = Se(W.value) ? `${W.value}px` : W.value)
              : (y.height = Se(q.value) ? `${q.value}px` : q.value),
            y
          );
        }),
        ue = D(() => {
          const { zIndex: n, contentWrapperStyle: c } = e,
            y = de.value;
          return [
            { zIndex: n, transform: b.value ? O.value : void 0 },
            F({}, c),
            y,
          ];
        }),
        me = (n) => {
          const { closable: c, headerStyle: y } = e,
            B = re(t, e, "extra"),
            E = re(t, e, "title");
          return !E && !c
            ? null
            : s(
                "div",
                {
                  class: ie(`${n}-header`, {
                    [`${n}-header-close-only`]: c && !E && !B,
                  }),
                  style: y,
                },
                [
                  s("div", { class: `${n}-header-title` }, [
                    fe(n),
                    E && s("div", { class: `${n}-title` }, [E]),
                  ]),
                  B && s("div", { class: `${n}-extra` }, [B]),
                ]
              );
        },
        fe = (n) => {
          var c;
          const { closable: y } = e,
            B = t.closeIcon
              ? (c = t.closeIcon) === null || c === void 0
                ? void 0
                : c.call(t)
              : e.closeIcon;
          return (
            y &&
            s(
              "button",
              {
                key: "closer",
                onClick: k,
                "aria-label": "Close",
                class: `${n}-close`,
              },
              [B === void 0 ? s(Xe, null, null) : B]
            )
          );
        },
        pe = (n) => {
          var c;
          if (C.value && !e.forceRender && !d.value) return null;
          const { bodyStyle: y, drawerStyle: B } = e;
          return s("div", { class: `${n}-wrapper-body`, style: B }, [
            me(n),
            s("div", { key: "body", class: `${n}-body`, style: y }, [
              (c = t.default) === null || c === void 0 ? void 0 : c.call(t),
            ]),
            Y(n),
          ]);
        },
        Y = (n) => {
          const c = re(t, e, "footer");
          if (!c) return null;
          const y = `${n}-footer`;
          return s("div", { class: y, style: e.footerStyle }, [c]);
        },
        ee = D(() =>
          ie(
            { "no-mask": !e.mask, [`${u.value}-rtl`]: w.value === "rtl" },
            e.rootClassName,
            A.value
          )
        ),
        te = D(() => ge(_e(u.value, "mask-motion"))),
        oe = (n) => ge(_e(u.value, `panel-motion-${n}`));
      return () => {
        const {
            width: n,
            height: c,
            placement: y,
            mask: B,
            forceRender: E,
          } = e,
          ne = _t(e, ["width", "height", "placement", "mask", "forceRender"]),
          ae = F(
            F(
              F({}, r),
              Ne(ne, [
                "size",
                "closeIcon",
                "closable",
                "destroyOnClose",
                "drawerStyle",
                "headerStyle",
                "bodyStyle",
                "title",
                "push",
                "onAfterVisibleChange",
                "onClose",
                "onUpdate:visible",
                "onUpdate:open",
                "visible",
              ])
            ),
            {
              forceRender: E,
              onClose: k,
              afterVisibleChange: $,
              handler: !1,
              prefixCls: u.value,
              open: m.value,
              showMask: B,
              placement: y,
              ref: _,
            }
          );
        return I(
          s(ot, null, {
            default: () => [
              s(
                vt,
                j(
                  j({}, ae),
                  {},
                  {
                    maskMotion: te.value,
                    motion: oe,
                    width: W.value,
                    height: q.value,
                    getContainer: i.value,
                    rootClassName: ee.value,
                    rootStyle: e.rootStyle,
                    contentWrapperStyle: ue.value,
                  }
                ),
                {
                  handler: e.handle ? () => e.handle : t.handle,
                  default: () => pe(u.value),
                }
              ),
            ],
          })
        );
      };
    },
  }),
  St = Re(Ct),
  $t = "_navBar_1yarv_1",
  kt = "_titleBar_1yarv_9",
  xt = "_navList_1yarv_24",
  Ot = "_tooltip_1yarv_28",
  Bt = "_navItem_1yarv_43",
  Dt = "_comment_1yarv_60",
  Nt = {
    navBar: $t,
    titleBar: kt,
    navList: xt,
    tooltip: Ot,
    navItem: Bt,
    comment: Dt,
  },
  Mt = ["src"],
  It = {
    key: 0,
    class: "px-3 mb-2 text-[12px] text-[var(--text-gray)] font-black",
  },
  Pt = { class: "flex flex-col" },
  Tt = ["aria-selected", "onClick"],
  Lt = { class: "text-sm" },
  jt = f("p", { class: "mt-2 text-white" }, "不会用？连不上了？", -1),
  At = f("p", { class: "text-white" }, "使用教程中有您所需要的一切", -1),
  Et = f("span", null, "TK", -1),
  zt = f(
    "a",
    { href: "https://t.me/", target: "_blank" },
    "ThemeBuddy",
    -1
  ),
  Ft = [Et, zt],
  Vt = {
    __name: "nav",
    setup(e) {
      const { title: o, logo: a } = window.config,
        t = ce(),
        r = Be(),
        b = [
          {
            list: [
              { name: "Dashboard", title: "首页", icon: "mdi:earth" },
              {
                name: "Knowledge",
                title: "使用教程",
                icon: "mdi:book-outline",
              },
            ],
          },
          {
            title: "订阅",
            list: [
              {
                title: "我的订阅",
                name: "Subscribe",
                icon: "mingcute:send-plane-line",
              },
              {
                title: "购买套餐",
                name: "Store",
                icon: "icon-park-outline:mall-bag",
              },
            ],
          },
          {
            title: "财务",
            list: [
              {
                title: "我的订单",
                name: "Order",
                icon: "material-symbols:airplane-ticket-outline",
              },
              {
                title: "邀请有奖",
                name: "Invite",
                icon: "mdi:package-outline",
              },
            ],
          },
          {
            title: "用户",
            list: [
              {
                title: "个人中心",
                icon: "mdi:clipboard-person-outline",
                name: "Profile",
              },
              {
                title: "我的工单",
                icon: "mdi:comment-quote-outline",
                name: "Ticket",
              },
            ],
          },
        ],
        C = Z();
      V(
        t,
        (d) => {
          C.value = d.matched[1].name;
        },
        { immediate: !0 }
      );
      const _ = D(() => !0);
      return (d, m) => {
        const h = Qe;
        return (
          N(),
          T(
            "div",
            { class: M(d.$style.navBar), "aria-label": "navBar" },
            [
              f(
                "div",
                { class: M(d.$style.titleBar) },
                [
                  f("img", { src: L(a), alt: "logo" }, null, 8, Mt),
                  f("p", null, U(L(o)), 1),
                ],
                2
              ),
              f(
                "div",
                { class: M(d.$style.navList) },
                [
                  (N(),
                  T(
                    be,
                    null,
                    we(b, (l) =>
                      f("div", null, [
                        l.title ? (N(), T("p", It, U(l.title), 1)) : J("", !0),
                        f("ul", Pt, [
                          (N(!0),
                          T(
                            be,
                            null,
                            we(
                              l.list,
                              (u, g) => (
                                N(),
                                T(
                                  "li",
                                  {
                                    key: g,
                                    "aria-selected": C.value === u.name,
                                    class: M([d.$style.navItem, "gap-2"]),
                                    onClick: (w) => L(r).push({ name: u.name }),
                                  },
                                  [
                                    s(
                                      L(R),
                                      { icon: u.icon, width: 24 },
                                      null,
                                      8,
                                      ["icon"]
                                    ),
                                    f("span", Lt, U(u.title), 1),
                                  ],
                                  10,
                                  Tt
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        s(h, { style: { margin: "16px 0" } }),
                      ])
                    ),
                    64
                  )),
                ],
                2
              ),
              f(
                "div",
                { class: M(d.$style.tooltip) },
                [
                  s(L(R), {
                    width: 32,
                    icon: "fluent:comment-lightning-20-filled",
                  }),
                  jt,
                  At,
                  f(
                    "p",
                    {
                      class:
                        "mt-4 cursor-pointer bg-white text-black rounded-lg font-black py-2 text-[12px] text-center",
                      onClick:
                        m[0] || (m[0] = (l) => L(r).push("/dashboard/ticket")),
                    },
                    "联系我们"
                  ),
                ],
                2
              ),
              _.value
                ? (N(),
                  T(
                    "div",
                    {
                      key: 0,
                      class: M(d.$style.comment),
                      "aria-label": "copyright",
                    },
                    Ft,
                    2
                  ))
                : J("", !0),
            ],
            2
          )
        );
      };
    },
  },
  Ht = { $style: Nt },
  Pe = X(Vt, [["__cssModules", Ht]]),
  Rt = "_sideBar_1rfig_1",
  Wt = { sideBar: Rt },
  qt = {
    __name: "SideBar",
    setup(e) {
      return (o, a) => (
        N(), T("div", { class: M(o.$style.sideBar) }, [s(Pe)], 2)
      );
    },
  },
  Ut = { $style: Wt },
  Xt = X(qt, [["__cssModules", Ut]]),
  Yt = "_container_12pdx_1",
  Kt = "_topBar_12pdx_8",
  Gt = { container: Yt, topBar: Kt },
  Jt = { class: "gap-2" },
  Qt = { "aria-atomic": "true", "aria-label": "action" },
  Zt = { class: "font-black" },
  eo = { class: "gap-2" },
  to = { "aria-label": "action" },
  oo = {
    __name: "Container",
    setup(e) {
      const o = Ye(),
        a = De(),
        t = ce();
      Be();
      const r = () => {
          o.Set_Token(void 0), (a.Info = void 0), window.location.reload();
        },
        b = Z(!1);
      return (C, _) => {
        const d = Pe,
          m = St,
          h = nt,
          l = at,
          u = lt,
          g = Ke("router-view");
        return (
          N(),
          T(
            "div",
            { class: M(C.$style.container) },
            [
              f(
                "div",
                { class: M(C.$style.topBar) },
                [
                  f("div", Jt, [
                    f("div", Qt, [
                      s(L(R), {
                        width: 24,
                        icon: "mdi:menu",
                        onClick: _[0] || (_[0] = (w) => (b.value = !0)),
                      }),
                    ]),
                    f("p", Zt, U(L(t).meta.title), 1),
                    s(
                      m,
                      {
                        "body-style": { padding: 0 },
                        closable: !1,
                        open: b.value,
                        width: 250,
                        placement: "left",
                        onClose: _[1] || (_[1] = (w) => (b.value = !1)),
                      },
                      { default: H(() => [s(d)]), _: 1 },
                      8,
                      ["open"]
                    ),
                  ]),
                  f("div", eo, [
                    s(u, null, {
                      overlay: H(() => [
                        s(
                          l,
                          { class: "w-full" },
                          {
                            default: H(() => [
                              s(
                                h,
                                {
                                  class:
                                    "w-full flex justify-center items-center",
                                },
                                {
                                  default: H(() => [
                                    f(
                                      "p",
                                      { class: "flex gap-x-2", onClick: r },
                                      [
                                        s(L(R), {
                                          width: 24,
                                          icon: "mdi:exit-to-app",
                                        }),
                                        Ge(" 退出登陆 "),
                                      ]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      default: H(() => [
                        f("div", to, [
                          s(L(R), { width: 24, icon: "mdi:user-outline" }),
                        ]),
                      ]),
                      _: 1,
                    }),
                  ]),
                ],
                2
              ),
              s(g),
            ],
            2
          )
        );
      };
    },
  },
  no = { $style: Gt },
  ao = X(oo, [["__cssModules", no]]),
  lo = f("p", null, "AirBuddy for v2Board 主题", -1),
  ro = { class: "flex gap-1 items-center my-0.5" },
  io = f(
    "a",
    { href: "https://t.me/themebuddy", target: "_blank" },
    "@themebuddy",
    -1
  ),
  so = f(
    "p",
    null,
    "承接机场站点主题定制开发，主打用户体验，高效交付，价格美丽",
    -1
  ),
  co = Q({
    __name: "copyright",
    setup(e) {
      return (o, a) => (
        N(),
        T(
          "div",
          { class: M(o.$style.copyright) },
          [
            lo,
            f("div", ro, [s(L(R), { width: 24, icon: "logos:telegram" }), io]),
            so,
          ],
          2
        )
      );
    },
  }),
  uo = "_copyright_ytzmd_1",
  mo = { copyright: uo },
  fo = { $style: mo },
  po = X(co, [["__cssModules", fo]]),
  vo = "_wrapper_gpick_1",
  yo = "_notice_gpick_8",
  ho = { wrapper: vo, notice: yo },
  go = f("hr", { class: "mt-2 mb-4" }, null, -1),
  _o = { key: 0, "aria-label": "img" },
  bo = ["src"],
  wo = ["innerHTML"],
  Co = {
    __name: "Layout",
    setup(e) {
      const o = ce(),
        a = De(),
        t = Z(!1);
      se(() => {
        (document.querySelector("body").style.background = "#fafafa"),
          a
            .Init()
            .then(() => {
              const {
                  interval: d,
                  onlyHome: m,
                  repeat: h,
                } = window.config.notice,
                l = it("noticeInfo", { id: null, time: null });
              if (a.Notice.total === 0) return;
              const u = Date.now();
              if (m && o.name !== "Dashboard") t.value = !1;
              else if (!h && l.value.id === a.Notice.data[0].id) t.value = !1;
              else if (l.value.id === null || l.value.time === null || d === 0)
                (t.value = !0),
                  (l.value.id = a.Notice.data[0].id),
                  (l.value.time = u);
              else {
                const g = l.value.time + d * 1e3 * 60 * 60 * 24;
                if (u > g) {
                  const w = a.Notice.data[0].id;
                  l.value.id !== w
                    ? ((t.value = !0), (l.value.id = w), (l.value.time = u))
                    : h &&
                      l.value.id === w &&
                      ((t.value = !0), (l.value.time = u));
                }
              }
              if (l.value.id === null || l.value.time === null)
                (t.value = !0),
                  (l.value.id = a.Notice.data[0].id),
                  (l.value.time = u);
              else {
                const g = l.value.time + d * 1e3 * 60 * 60 * 24;
                m && o.name === "Dashboard" && a.Notice.total,
                  u > g &&
                    ((t.value = !0),
                    (l.value.id = a.Notice.data[0].id),
                    (l.value.time = u));
              }
            })
            .catch(() => {
              Ce.warn("加载公告失败 请重试");
            }),
          setInterval(() => {
            var g, w, I;
            let d = document.querySelector('[aria-label="copyright"]') !== null,
              m =
                document.querySelector('[aria-label="copyright"]').style
                  .display !== "none" &&
                document.querySelector('[aria-label="copyright"]').style
                  .visibility !== "hidden",
              h =
                ((g = document.querySelector('[aria-label="copyright"]')) ==
                null
                  ? void 0
                  : g.textContent) === "AirBuddy By ThemeBuddy",
              l =
                ((w = document.querySelector('[aria-label="copyright"] a')) ==
                null
                  ? void 0
                  : w.getAttribute("href")) === "https://t.me/themebuddy",
              u =
                ((I = document.querySelector(
                  '[aria-label="copyright"]'
                ).parentElement) == null
                  ? void 0
                  : I.getAttribute("aria-label")) === "navBar";
            (d && m && h && l && u) ||
              (setInterval(() => {
                Ce.error("你正在非法使用 AirBuddy 主题");
              }, 1e3),
              setTimeout(() => {
                window.open("https://t.me/themebuddy");
              }, 3e3));
          }, 1e4);
      });
      const r = D(() => a.Notice.data[0]),
        b = D(() => !1),
        C = rt({ html: !0 }),
        _ = () => C.render(r.value.content);
      return (d, m) => {
        const h = st;
        return (
          N(),
          T(
            "div",
            { class: M(d.$style.wrapper) },
            [
              s(Xt),
              s(ao),
              s(
                h,
                {
                  open: t.value,
                  "onUpdate:open": m[0] || (m[0] = (l) => (t.value = l)),
                  "cancel-text": void 0,
                  title: "消息公告",
                  footer: !1,
                },
                {
                  default: H(() => [
                    f(
                      "div",
                      { class: M(d.$style.notice) },
                      [
                        go,
                        f("h2", null, U(r.value.title), 1),
                        r.value.img_url
                          ? (N(),
                            T("div", _o, [
                              f(
                                "img",
                                { src: r.value.img_url, alt: "cover" },
                                null,
                                8,
                                bo
                              ),
                            ]))
                          : J("", !0),
                        f("div", { innerHTML: _() }, null, 8, wo),
                      ],
                      2
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["open"]
              ),
              b.value ? (N(), Je(po, { key: 0 })) : J("", !0),
            ],
            2
          )
        );
      };
    },
  },
  So = { $style: ho },
  Wo = X(Co, [["__cssModules", So]]);
export { Wo as default };
