import "./modulepreload-polyfill.js";
import {
  i as T,
  j as N,
  c as r,
  a as t,
  t as s,
  F as v,
  g as R,
  o as c,
  p as z,
  k as D,
  b as y,
  r as o,
  f as e,
  n as M,
  e as w,
  l as $,
  w as C,
  m as k,
  A as W,
  h as q,
  H as Q,
} from "./Helpers.js";
import {
  _ as x,
  A as f,
  a as E,
  l as j,
  i as G,
  b as O,
  m as X,
  N as J,
  c as K,
  S as Y,
  C as Z,
  F as tt,
  d as it,
  e as at,
  I as et,
  f as st,
  P as ot,
  W as nt,
  M as lt,
  E as dt,
  g as rt,
  h as ct,
  j as mt,
  R as pt,
  k as ut,
  n as ht,
  o as ft,
  p as _t,
  q as gt,
  r as xt,
  s as vt,
  t as bt,
  H as wt,
  V as yt,
  u as $t,
  v as St,
  U as Ct,
} from "./index.js";
const kt = (i) => (z("data-v-61edc320"), (i = i()), D(), i),
  It = { class: "card" },
  Mt = kt(() =>
    t(
      "p",
      null,
      [
        y(" Edit "),
        t("code", null, "components/HelloWorld.vue"),
        y(" to test HMR "),
      ],
      -1
    )
  ),
  Tt = R(
    '<p data-v-61edc320> Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" data-v-61edc320>create-vue</a>, the official Vue + Vite starter </p><p data-v-61edc320> Install <a href="https://github.com/vuejs/language-tools" target="_blank" data-v-61edc320>Volar</a> in your IDE for a better DX </p><p class="read-the-docs" data-v-61edc320>Click on the Vite and Vue logos to learn more</p><div class="text-red-900 text-3xl font-bold underline" data-v-61edc320> Umut </div><div class="text-purple-900 text-3xl font-bold underline" data-v-61edc320> Umut </div>',
    5
  ),
  Et = T({
    __name: "HelloWorld",
    props: { msg: {} },
    setup(i) {
      const a = N(0);
      return (g, _) => (
        c(),
        r(
          v,
          null,
          [
            t("h1", null, s(g.msg), 1),
            t("div", It, [
              t(
                "button",
                { type: "button", onClick: _[0] || (_[0] = (h) => a.value++) },
                "count is " + s(a.value),
                1
              ),
              Mt,
            ]),
            Tt,
          ],
          64
        )
      );
    },
  });
const jt = x(Et, [["__scopeId", "data-v-61edc320"]]),
  Lt = {
    id: "aitopia-container",
    class: "full-screen ait-block ait-overflow-y-hidden",
  },
  Vt = { class: "ait-h-screen" },
  Pt = {
    class:
      "ait-container ait-align-top ait-container-md md:ait-px-2 ait-w-full ait-max-w-full",
  },
  Ht = { class: "ait-flex ait-h-[100vh] ait-flex-row-reverse sm:ait-flex-row" },
  Bt = {
    class:
      "ait-w-[60px] sm:ait-w-auto ait-flex ait-flex-col ait-justify-between",
  },
  Ft = {
    class:
      "ait-h-full ait-pb-2 ait-w-full sm:ait-p-2 ait-bg-[var(--ait-option-card-bg-color)] ait-flex-1 !ait-rounded-r-none ait-rounded-l-none sm:ait-rounded-l-lg sm:ait-rounded-r-none",
  },
  At = {
    class:
      "ait-logo max-sm:ait-pt-[20px] ait-mt-2 ait-justify-center ait-items-center sm:ait-justify-normal ait-hidden sm:ait-flex",
  },
  Ut = t(
    "div",
    { class: "sm:ait-block ait-hidden ait-logo-text" },
    [
      t(
        "p",
        { class: "ait-font-bold ait-px-4 ait-text-base ait-pt-2 ait-flex" },
        "ChatGPT Sidebar"
      ),
    ],
    -1
  ),
  Nt = {
    class:
      "ait-flex ait-py-[30px] ait-h-full ait-flex-col ait-justify-between ait-overflow-x-hidden ait-overflow-y-auto",
  },
  Rt = {
    id: "full-tab-menu",
    class: "ait-flex ait-flex-col ait-gap-4 sm:ait-gap-0 ait-mb-2 tab-menu",
  },
  zt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Dt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Wt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  qt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Qt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Gt = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Ot = { class: "ait-text-[10px] sm:ait-text-sm full-screen-span sm:ait-flex" },
  Xt = t(
    "div",
    { class: "ait-w-[1px] ait-h-full ait-bg-neutral-700" },
    null,
    -1
  ),
  Jt = { class: "sm:max-w-full ait-w-full" },
  Kt = {
    id: "ait-tab-0-ask",
    class:
      "ait-bg-[var(--ait-option-card-bg-color)] ait-flex-initial ait-w-full ait-p-4 ait-rounded-l-none",
  },
  Yt = { class: "ait-flex ait-flex-row ait-responsive-zoom" },
  Zt = { class: "ait-font-bold ait-leading-[50px] ait-text-2xl" },
  ti = t("div", { class: "ait-py-2 md:ait-py-5" }, [t("hr")], -1),
  ii = {
    id: "ait-tab-0-write",
    class:
      "ait-bg-[var(--ait-option-card-bg-color)] ait-flex-initial ait-w-full ait-p-4 ait-rounded-l-none",
  },
  ai = { class: "ait-flex ait-flex-row ait-responsive-zoom" },
  ei = { class: "ait-font-bold ait-leading-[50px] ait-text-2xl" },
  si = t("div", { class: "ait-py-2 md:ait-py-5" }, [t("hr")], -1),
  oi = {
    id: "full-screen-image-settings",
    class: "max-md:ait-hidden ait-flex-none ait-w-[400px] ait-mb-5",
  },
  ni = {
    class:
      "ait-rounded-l-none ait-bg-[var(--ait-option-card-bg-color)] ait-overflow-y-auto ait-ml-0 ait-h-full",
  },
  li = t(
    "div",
    { class: "ait-font-bold ait-text-xl ait-px-5 ait-pt-5 ait-pb-4" },
    "Options",
    -1
  ),
  di = t(
    "textarea",
    {
      id: "ait_clipboard",
      style: {
        position: "fixed",
        bottom: "-10px",
        "z-index": "-1",
        height: "1px",
        width: "1px",
        "font-size": ".1px",
      },
    },
    null,
    -1
  );
function ri(i, a, g, _, h, u) {
  const n = o("svg-logo"),
    l = o("font-awesome-icon"),
    d = o("UserInfoSection"),
    m = o("FullScreenChatSection"),
    b = o("SvgLogo"),
    V = o("Prompts"),
    P = o("FullScreenSearchSection"),
    H = o("Write"),
    B = o("FullScreenImageSection"),
    F = o("ImageChatSettings"),
    A = o("InviteFriends"),
    U = o("MakeAReviewModal");
  return (
    c(),
    r("div", Lt, [
      t("div", Vt, [
        t("div", Pt, [
          t("div", Ht, [
            t("div", Bt, [
              t("div", Ft, [
                t("div", At, [
                  e(n, {
                    name: "logo",
                    className: "ait-w-10 ait-flex-initial",
                  }),
                  Ut,
                ]),
                t("div", Nt, [
                  t("ul", Rt, [
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-chat",
                        onClick:
                          a[0] ||
                          (a[0] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal active full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex sm:ait-flex-row",
                      },
                      [
                        e(n, {
                          className:
                            "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4 ait-chat_icon",
                          name: "chat_icon",
                        }),
                        t("span", zt, s(i.__("chat").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-ask",
                        onClick:
                          a[1] ||
                          (a[1] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(n, {
                          className:
                            "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4 ait-ask_icon",
                          name: "ask_icon",
                        }),
                        t("span", Dt, s(i.__("ask").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-search",
                        onClick:
                          a[2] ||
                          (a[2] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(l, {
                          icon: "fa-solid fa-search",
                          class:
                            "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4 ait-search_icon",
                        }),
                        t("span", Wt, s(i.__("search").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-write",
                        onClick:
                          a[3] ||
                          (a[3] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(l, {
                          icon: "fa-solid fa-square-pen",
                          class:
                            "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4 ait-write_icon",
                        }),
                        t("span", qt, s(i.__("write").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-image",
                        onClick:
                          a[4] ||
                          (a[4] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(l, {
                          icon: "fa-solid fa-image",
                          class:
                            "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4 ait-image_icon",
                        }),
                        t("span", Qt, s(i.__("image").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-pdf",
                        "data-dropdown-toggle": "ait-pdf-upload-modal",
                        onClick:
                          a[5] ||
                          (a[5] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(n, {
                          className: "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4",
                          name: "chat_pdf_icon",
                        }),
                        t("span", Gt, s(i.__("chatPDF").toCapitalizeCase()), 1),
                      ]
                    ),
                    t(
                      "li",
                      {
                        "aria-label": "ait-tab-0-chat",
                        "data-dropdown-toggle": "ait-image-vision-modal",
                        onClick:
                          a[6] ||
                          (a[6] = (...p) =>
                            i.fullTabMenu && i.fullTabMenu(...p)),
                        class:
                          "ait-gap-1 sm:ait-gap-2 sm:ait-rounded-[10px] ait-flex-col ait-items-center ait-justify-center sm:ait-justify-normal full-active sm:ait-m-[4px] ait-leading-[40px] ait-h-[50px] sm:ait-h-[40px] ait-flex ait-py-2 sm:ait-flex-row",
                      },
                      [
                        e(l, {
                          icon: "fa-solid fa-eye",
                          class: "ait-w-5 ait-h-5 sm:ait-w-4 sm:ait-h-4",
                        }),
                        t("span", Ot, s(i.__("vision").toCapitalizeCase()), 1),
                      ]
                    ),
                  ]),
                  e(d),
                ]),
              ]),
            ]),
            Xt,
            t("div", Jt, [
              e(m),
              t("div", Kt, [
                t("div", Yt, [
                  e(b, {
                    name: "logo",
                    className: "ait-w-8 ait-h-8 ait-mt-2 ait-mr-2",
                  }),
                  t("h1", Zt, s(i.__("Ask")), 1),
                ]),
                ti,
                e(V, { mode: "full" }),
              ]),
              e(P),
              t("div", ii, [
                t("div", ai, [
                  e(b, {
                    name: "logo",
                    className: "ait-w-8 ait-h-8 ait-mt-2 ait-mr-2",
                  }),
                  t("h1", ei, s(i.__("Write")), 1),
                ]),
                si,
                e(H, { mode: "full" }),
              ]),
              e(B),
              t("div", oi, [t("div", ni, [li, e(F, { mode: "full" })])]),
              e(A),
            ]),
          ]),
        ]),
        di,
        e(U),
      ]),
    ])
  );
}
const ci = x(f, [["render", ri]]),
  mi = T({
    extends: f,
    name: "UserInfoSection",
    data() {
      return {
        fullScreenCredit: null,
        fullScreenExtraCredit: null,
        queryTitle: null,
      };
    },
    created() {
      this.$watch(() => this.credit_details, this.setCredit);
    },
    mounted() {
      this.setCredit();
    },
    methods: {
      setCredit() {
        const i = document.getElementById("full-tab-menu");
        if (i) {
          const a = i.getElementsByTagName("li")[3];
          this.getQueryTitle(a),
            this.getCredit(a),
            i.addEventListener("click", () => {
              this.getQueryTitle(a), this.getCredit(a);
            });
        }
      },
      getCredit(i) {
        return i.getAttribute("aria-label") === "ait-tab-0-image" &&
          i.classList.contains("active")
          ? this.getCreditByType("image")
          : this.getCreditByType();
      },
      getCreditByType(i) {
        if (
          this.credit_details &&
          ((this.credit_details ?? {})[i ?? this.settings.ai_model] ?? !1) &&
          (this.credit_details[i ?? this.settings.ai_model].credit ?? 0) >= 0
        ) {
          (this.fullScreenCredit =
            this.credit_details[i ?? this.settings.ai_model].balance ?? 10),
            (this.fullScreenExtraCredit =
              this.credit_details[i ?? this.settings.ai_model].extra_credit ??
              0);
          return;
        }
        (this.fullScreenExtraCredit = 0), (this.fullScreenCredit = "∞");
      },
      getQueryTitle(i) {
        if (
          i.getAttribute("aria-label") === "ait-tab-0-image" &&
          i.classList.contains("active")
        ) {
          this.queryTitle = "Image Queries";
          return;
        }
        this.queryTitle = "Text Queries";
      },
      checkEmailLength(i) {
        return i && i.length > 18 ? `${i.substring(0, 18)}...` : i;
      },
    },
  }),
  pi = {
    "data-dropdown-toggle": "ait-invite-friends",
    class:
      "ait-hidden ait-p-3 ait-rounded-lg ait-mx-[12px] ait-bg-cover ait-items-center ait-justify-center ait-bg-no-repeat sm:ait-grid ait-grid-flow-col ait-content-center ait-gap-[5px] ait-text-xs ait-leading-4 ait-align-middle ait-cursor-pointer hover:ait-opacity-90 active:ait-opacity-80 ait-text-white ait-bg-gradient-to-r ait-from-[#01a77d] ait-to-[#60a5fa]",
    style: {
      "grid-auto-columns": "minmax(min-content, max-content)",
      "text-shadow": "rgba(0, 0, 0, 0.3) 1px 1px 1px",
    },
  },
  ui = {
    class:
      "ait-hidden ait-text-white sm:ait-flex ait-align-text-bottom ait-text-xs",
  },
  hi = {
    class:
      "ait-hidden sm:ait-block ait-w-full ait-py-5 ait-px-6 ait-card ait-mb-4 ait-bg-[var(--ait-option-card-bg-color)] ait-mx-auto",
  },
  fi = {
    class: "ait-block dark:ait-text-white ait-text-sm ait-font-medium ait-mb-4",
  },
  _i = { class: "ait-flex ait-flex-col" },
  gi = { class: "ait-flex ait-flex-row ait-justify-between" },
  xi = {
    class: "ait-block dark:ait-text-white ait-text-xs ait-font-small ait-mb-2",
  },
  vi = {
    class: "ait-block dark:ait-text-white ait-text-xs ait-font-small ait-mb-2",
  },
  bi = { class: "ait-w-full" },
  wi = {
    class:
      "ait-w-full ait-bg-gray-200 ait-rounded-full ait-h-2.5 ait-mb-4 dark:ait-bg-gray-700",
  },
  yi = { class: "ait-flex ait-flex-row ait-justify-between" },
  $i = {
    class: "ait-block dark:ait-text-white ait-text-xs ait-font-small ait-mb-2",
  },
  Si = {
    class: "ait-block dark:ait-text-white ait-text-xs ait-font-small ait-mb-2",
  },
  Ci = { class: "ait-w-full" },
  ki = {
    class:
      "ait-w-full ait-bg-gray-200 ait-rounded-full ait-h-2.5 ait-mb-4 dark:ait-bg-gray-700",
  },
  Ii = {
    title: "Go premium to get more",
    type: "button",
    class:
      "aitopia-pricing ait-relative ait-my-2 ait-h-8 ait-w-full ait-text-white ait-border-none ait-rounded-full ait-text-wrap ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-opacity-90 active:ait-opacity-80",
  },
  Mi = { class: "relative ait-text-sm ait-text-white" },
  Ti = { class: "ait-flex ait-flex-row ait-justify-between ait-mt-3" },
  Ei = { class: "ait-cursor-pointer ait-flex ait-flex-row aitopia-login" },
  ji = { class: "ait-flex ait-cursor-pointer" },
  Li = {
    class:
      "ait-switchbar-tab-item ait-rounded-lg ait-cursor-pointer arc-edge aitopia-options ait-ml-1",
  },
  Vi = { class: "ait-cursor-pointer ait-flex ait-flex-row" },
  Pi = { class: "ait-flex ait-ml-2" },
  Hi = {
    class:
      "bottom-area ait-show sm:ait-hidden sm:ait-mt-auto ait-flex ait-flex-col ait-justify-center ait-items-center ait-gap-3 ait-mb-[10px] sm:ait-mb-[14px] md:ait-mb-[4px]",
  },
  Bi = { class: "ait-cursor-pointer ait-flex ait-flex-row" },
  Fi = { class: "ait-flex ait-flex-col ait-gap-1 ait-cursor-pointer" },
  Ai = {
    class:
      "ait-switchbar-tab-item ait-rounded-lg ait-p-1 ait-items-center ait-flex ait-flex-col ait-cursor-pointer",
    "data-dropdown-toggle": "ait-invite-friends",
  },
  Ui = {
    class: "ait-cursor-pointer ait-text-center ait-text-balance",
    style: { "font-size": "10px" },
  },
  Ni = { class: "ait-cursor-pointer ait-mb-[6px]" },
  Ri = { class: "ait-flex ait-flex-col ait-gap-2" },
  zi = {
    class:
      "ait-switchbar-tab-item ait-rounded-lg ait-p-2 ait-cursor-pointer arc-edge aitopia-options",
  },
  Di = { class: "ait-cursor-pointer" };
function Wi(i, a, g, _, h, u) {
  const n = o("svg-logo"),
    l = o("font-awesome-icon");
  return (
    c(),
    r(
      v,
      null,
      [
        t("div", pi, [
          e(n, { className: "ait-w-5 ait-h-5", name: "gift_white_icon" }),
          t("p", ui, s(i.__("Friends & Earn Credits")), 1),
        ]),
        t("div", hi, [
          t("label", fi, s(this.queryTitle), 1),
          t("div", _i, [
            t("div", gi, [
              t("label", xi, s(i.__("Plan: ")), 1),
              t("label", vi, s(this.fullScreenCredit + " " + i.__("left")), 1),
            ]),
            t("div", bi, [
              t("div", wi, [
                t(
                  "div",
                  {
                    class:
                      "ait-bg-green-600 ait-h-2.5 ait-rounded-full dark:ait-bg-green-500",
                    style: M(
                      `max-width:100%;transition: width 2s;width:${
                        (this.fullScreenCredit / 1e3) * 100
                      }%`
                    ),
                  },
                  null,
                  4
                ),
              ]),
            ]),
            t("div", yi, [
              t("label", $i, s(i.__("Extra: ")), 1),
              t(
                "label",
                Si,
                s(this.fullScreenExtraCredit + " " + i.__("left")),
                1
              ),
            ]),
            t("div", Ci, [
              t("div", ki, [
                t(
                  "div",
                  {
                    class:
                      "ait-bg-green-600 ait-h-2.5 ait-rounded-full dark:ait-bg-green-500",
                    style: M(
                      `max-width:100%;transition: width 2s;width:${
                        (this.fullScreenExtraCredit / 1e3) * 100
                      }%`
                    ),
                  },
                  null,
                  4
                ),
              ]),
            ]),
          ]),
          t("button", Ii, [t("div", Mi, s(i.__("Upgrade Plan")), 1)]),
          t("div", Ti, [
            t("div", Ei, [
              e(l, {
                icon: "fa-solid fa-user",
                class: "ait-h-4 ait-w-4 ait-mr-1 ait-cursor-pointer",
              }),
              t("label", ji, s(i.checkEmailLength(this.email)), 1),
            ]),
            t("div", Li, [
              e(l, { icon: "fa-solid fa-gear", class: "ait-h-4 ait-w-4" }),
            ]),
          ]),
          t(
            "div",
            {
              class: "ait-flex ait-flex-row ait-justify-between ait-mt-5",
              onClick:
                a[0] ||
                (a[0] = (d) => {
                  i.Helpers.openPage({
                    url:
                      i.constants.extension_dir +
                      "src/html/setup.html?side-bar-option=true",
                  });
                }),
            },
            [
              t("div", Vi, [
                e(n, {
                  className: "ait-w-4.5 ait-h-4.5",
                  name: "collapse_sidebar_icon",
                }),
                t("label", Pi, s(i.__("Back to Sidebar")), 1),
              ]),
            ]
          ),
        ]),
        t("div", Hi, [
          t(
            "div",
            {
              class: "ait-flex ait-flex-row ait-justify-between ait-mt-5",
              onClick:
                a[1] ||
                (a[1] = (d) => {
                  i.Helpers.openPage({
                    url:
                      i.constants.extension_dir +
                      "src/html/setup.html?side-bar-option=true",
                  });
                }),
            },
            [
              t("div", Bi, [
                e(n, {
                  className: "ait-w-4.5 ait-h-4.5",
                  name: "collapse_sidebar_icon",
                }),
              ]),
            ]
          ),
          t("div", Fi, [
            t("div", Ai, [
              e(n, { className: "ait-w-4 ait-h-4", name: "gift_icon" }),
              t("label", Ui, s(i.__("Invite & Earn")), 1),
            ]),
          ]),
          t("div", Ni, [
            e(l, {
              icon: "fa-solid fa-envelope",
              class: "ait-h-4 ait-w-4",
              onClick:
                a[2] ||
                (a[2] = (d) => {
                  i.Helpers.sendMessage("openPage", {
                    url: "./src/html/options.html?mode=contact",
                  });
                }),
            }),
          ]),
          t("div", Ri, [
            t("div", zi, [
              e(l, { icon: "fa-solid fa-gear", class: "ait-h-4 ait-w-4" }),
            ]),
          ]),
          t("div", Di, [
            e(l, {
              icon: "fa-solid fa-user",
              class: "ait-h-4 ait-w-4 aitopia-login",
            }),
          ]),
        ]),
      ],
      64
    )
  );
}
const qi = x(mi, [["render", Wi]]),
  Qi = {
    extends: f,
    data() {
      return { showHistorySideBar: !1 };
    },
    computed: {
      isUserChatExists() {
        let i = !1;
        return (
          this.ai_chat &&
            Object.keys(this.ai_chat).map((a) => {
              if (this.ai_chat[a].role === "user") {
                i = !0;
                return;
              }
            }),
          i
        );
      },
    },
  },
  Gi = { key: 0, class: "ait-flex-none ait-w-[400px] ait-mb-5" },
  Oi = {
    class:
      "ait-w-[400px] ait-p-5 ait-card ait-bg-[var(--ait-option-card-bg-color)] ait-h-full ait-ml-0 ait-rounded-l-none",
  },
  Xi = t(
    "div",
    { class: "ait-logo ait-flex" },
    [
      t("div", { class: "ait-logo-text" }, [
        t(
          "div",
          { class: "ait-font-bold ait-text-base ait-pt-2 ait-mb-1" },
          "History"
        ),
      ]),
    ],
    -1
  ),
  Ji = {
    key: 0,
    class:
      "ait-py-6 ait-px-3 ait-flex ait-h-[98%] ait-justify-center ait-items-center",
  },
  Ki = { class: "ait-flex ait-flex-col" },
  Yi = ["src"],
  Zi = t(
    "label",
    { class: "ait-flex ait-justify-center ait-text-base" },
    "No Data",
    -1
  ),
  ta = {
    key: 1,
    class:
      "ait-py-6 ait-pr-6 ait-flex ait-h-[96%] ait-flex-col ait-overflow-y-auto",
  },
  ia = {
    key: 0,
    class: "ait-card ait-p-3 ait-flex ait-flex-row ait-justify-between",
  };
function aa(i, a, g, _, h, u) {
  return h.showHistorySideBar
    ? (c(),
      r("div", Gi, [
        t("div", Oi, [
          Xi,
          u.isUserChatExists
            ? w("", !0)
            : (c(),
              r("div", Ji, [
                t("div", Ki, [
                  t(
                    "img",
                    {
                      src: `${i.constants.extension_dir}assets/images/no-data-planet.png`,
                      alt: "no data",
                    },
                    null,
                    8,
                    Yi
                  ),
                  Zi,
                ]),
              ])),
          u.isUserChatExists
            ? (c(),
              r("div", ta, [
                (c(!0),
                r(
                  v,
                  null,
                  $(
                    i.ai_chat,
                    (n, l) => (
                      c(),
                      r("div", null, [
                        n.role === "user"
                          ? (c(),
                            r("div", ia, [
                              t("label", null, s(n.title ?? n.item), 1),
                            ]))
                          : w("", !0),
                      ])
                    )
                  ),
                  256
                )),
              ]))
            : w("", !0),
        ]),
      ]))
    : w("", !0);
}
const ea = x(Qi, [["render", aa]]),
  sa = {
    extends: f,
    mounted() {
      this.changeSectionsRoundedValue();
    },
    methods: {
      toggleHistory() {
        (this.showHistorySideBar = !this.showHistorySideBar),
          this.changeSectionsRoundedValue();
      },
      changeSectionsRoundedValue() {
        const i = document.getElementById("ait-tab-0-chat");
        i &&
          (this.showHistorySideBar
            ? (i.classList.remove("ait-rounded-l-lg sm:ait-rounded-r-lg"),
              i.classList.add("ait-rounded-r-none"))
            : (i.classList.remove("ait-rounded-r-none"),
              i.classList.add("ait-rounded-l-lg sm:ait-rounded-r-lg")));
      },
    },
  },
  oa = {
    id: "ait-tab-0-chat",
    class:
      "ait-bg-[var(--ait-option-card-bg-color)] ait-flex-initial ait-w-full ait-p-4 ait-mr-0 ait-rounded-none",
  },
  na = {
    class: "ait-flex ait-flex-row ait-responsive-zoom ait-justify-between",
  },
  la = { class: "ait-grid ait-grid-cols-1 md:ait-grid-cols-2" },
  da = { class: "ait-flex" },
  ra = { class: "ait-font-bold ait-leading-[50px] ait-text-2xl" },
  ca = {
    class:
      "ait-hidden md:ait-flex ait-items-center md:ait-ml-4 ait-space-x-3 ait-text-sm ait-relative dark:ait-text-neutral-200 ait-border ait-rounded-xl ait-cursor-pointer",
  },
  ma = t(
    "img",
    {
      src: E,
      alt: "gpt image",
      class: "ait-w-5 ait-h-5 ait-absolute ait-left-[10px]",
    },
    null,
    -1
  ),
  pa = ["value"],
  ua = { class: "ait-flex ait-items-center ait-max-h-[50px]" },
  ha = {
    class:
      "ait-whitespace-nowrap ait-flex ait-items-center ait-space-x-2 ait-bg-transparent hover:ait-bg-[var(--ait-link-color)] ait-transition-all ait-rounded-full ait-p-1 ait-px-2",
  },
  fa = t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
      class: "ait-w-4 ait-h-4 dark:ait-text-gray-200",
    },
    [
      t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 4.5v15m7.5-7.5h-15",
      }),
    ],
    -1
  ),
  _a = t("div", { class: "ait-py-2 md:ait-py-5" }, [t("hr")], -1),
  ga = { id: "aitopia-sidebar" },
  xa = {
    id: "ai-sidebar",
    class: "ait-flex ait-w-full ait-h-full ait-overflow-hidden",
  },
  va = { class: "ait-flex ait-flex-col ait-w-full" };
function ba(i, a, g, _, h, u) {
  const n = o("SvgLogo"),
    l = o("InnerContentView");
  return (
    c(),
    r("div", oa, [
      t("div", na, [
        t("div", la, [
          t("div", da, [
            e(n, {
              name: "logo",
              className: "ait-w-8 ait-h-8 ait-mt-2 ait-mr-2",
            }),
            t("h1", ra, s(i.__("Chat")), 1),
          ]),
          t("label", ca, [
            ma,
            C(
              t(
                "select",
                {
                  name: "choose_gpt",
                  id: "choose_gpt",
                  class: "ait-bg-transparent ait-w-fit ait-outline-none",
                  style: {
                    padding: "5px 30px 5px 20px",
                    "margin-right": "8px !important",
                  },
                  "onUpdate:modelValue":
                    a[0] || (a[0] = (d) => (this.settings.ai_model = d)),
                  onChange:
                    a[1] ||
                    (a[1] = (d) => {
                      this.changeStorage(
                        "settings.ai_model",
                        this.settings.ai_model ?? "GPT-3.5"
                      );
                    }),
                },
                [
                  (c(!0),
                  r(
                    v,
                    null,
                    $(
                      this.ai_models,
                      (d, m) => (
                        c(),
                        r("option", { value: d, selected: "" }, s(m), 9, pa)
                      )
                    ),
                    256
                  )),
                ],
                544
              ),
              [[k, this.settings.ai_model]]
            ),
          ]),
        ]),
        t("div", ua, [
          t("button", ha, [
            fa,
            t(
              "span",
              {
                class:
                  "ait-text-sm dark:ait-text-gray-200 ait-whitespace-nowrap",
                onClick: a[2] || (a[2] = (d) => this.newChat()),
              },
              s(i.__("New Conversation")),
              1
            ),
          ]),
        ]),
      ]),
      _a,
      t("div", ga, [t("div", xa, [t("div", va, [e(l, { mode: "full" })])])]),
    ])
  );
}
const wa = x(sa, [["render", ba]]),
  ya = {
    extends: f,
    data() {
      return {
        image_ai_models: { StableDiffusion: "Stable Diffusion" },
        selectedAIModel: "StableDiffusion",
      };
    },
    methods: {
      onEditToolsClick() {
        this.showEditToolUploadModal && (this.showEditToolUploadModal = !1),
          localStorage.setItem("reference_edit_tool_image", null),
          localStorage.setItem("is_edit_modal_redirected_from_painter", "1"),
          (this.showEditToolsModal = !0);
      },
      toggleImageChatSettingsSection() {
        const i = document.getElementById("full-screen-image-settings");
        if (i) {
          if (i.classList.contains("ait-show")) {
            i.classList.remove("ait-show"),
              i.classList.add("ait-hide"),
              this.changeSectionsRoundedValue(i);
            return;
          }
          i.classList.contains("ait-hide") &&
            (i.classList.remove("ait-hide"),
            i.classList.add("ait-show"),
            this.changeSectionsRoundedValue(i));
        }
      },
      changeSectionsRoundedValue(i) {
        const a = document.getElementById("ait-tab-0-image");
        if (!(!a && !i)) {
          if (i.classList.contains("ait-show")) {
            a.classList.remove("ait-rounded-r-lg"),
              a.classList.add("ait-rounded-r-none");
            return;
          }
          a.classList.remove("ait-rounded-r-none"),
            a.classList.add("ait-rounded-r-lg");
        }
      },
    },
  },
  $a = {
    id: "ait-tab-0-image",
    class:
      "ait-bg-[var(--ait-option-card-bg-color)] ait-flex-initial ait-w-full ait-p-4 ait-rounded-none ait-mr-0",
  },
  Sa = {
    class: "ait-flex ait-responsive-zoom ait-flex-row ait-justify-between",
  },
  Ca = { class: "ait-grid ait-grid-cols-1 md:ait-grid-cols-2" },
  ka = { class: "ait-flex" },
  Ia = { class: "ait-font-bold ait-leading-[50px] ait-text-2xl" },
  Ma = {
    class:
      "ait-hidden md:ait-flex md:ait-ml-2 ait-items-center ait-space-x-3 ait-text-sm ait-relative dark:ait-text-neutral-200 ait-border ait-rounded-xl ait-cursor-pointer",
  },
  Ta = ["value"],
  Ea = { class: "ait-flex ait-flex-row ait-items-center ait-justify-center" },
  ja = t("div", { class: "ait-py-2 md:ait-py-5" }, [t("hr")], -1),
  La = { id: "aitopia-sidebar" },
  Va = {
    id: "ai-sidebar",
    class: "ait-flex ait-w-full ait-h-full ait-overflow-hidden",
  },
  Pa = { class: "ait-flex ait-flex-col ait-w-full" };
function Ha(i, a, g, _, h, u) {
  const n = o("SvgLogo"),
    l = o("svg-logo"),
    d = o("Painter");
  return (
    c(),
    r("div", $a, [
      t("div", Sa, [
        t("div", Ca, [
          t("div", ka, [
            e(n, {
              name: "logo",
              className: "ait-w-8 ait-h-8 ait-mt-2 ait-mr-2",
            }),
            t("h1", Ia, s(i.__("Image")), 1),
          ]),
          t("label", Ma, [
            C(
              t(
                "select",
                {
                  name: "choose_ai_model",
                  id: "choose_ai_model",
                  class:
                    "ait-bg-transparent ait-w-fit ait-outline-none ait-p-1.5",
                  style: {
                    "-webkit-appearance": "none!important",
                    appearance: "none!important",
                  },
                  "onUpdate:modelValue":
                    a[0] || (a[0] = (m) => (h.selectedAIModel = m)),
                  onChange:
                    a[1] ||
                    (a[1] = (m) =>
                      this.changeStorage(
                        "settings.image_ai_model",
                        h.selectedAIModel ?? "Stable Diffusion"
                      )),
                  disabled: "",
                },
                [
                  (c(!0),
                  r(
                    v,
                    null,
                    $(
                      this.image_ai_models,
                      (m, b) => (c(), r("option", { value: b }, s(m), 9, Ta))
                    ),
                    256
                  )),
                ],
                544
              ),
              [[k, h.selectedAIModel]]
            ),
          ]),
        ]),
        t("div", Ea, [
          t(
            "button",
            {
              onClick:
                a[2] ||
                (a[2] = (...m) =>
                  u.onEditToolsClick && u.onEditToolsClick(...m)),
              type: "button",
              style: {
                "border-radius": "24px !important",
                "background-color": "#fb992d",
              },
              class:
                "ait-whitespace-nowrap ait-flex ait-text-white ait-font-bold ait-py-2 ait-px-4 hover:ait-opacity-90 active:ait-opacity-80",
            },
            [e(l, { name: "magic_wand" }), y(" " + s(i.__("Editing Tools")), 1)]
          ),
          t(
            "button",
            {
              onClick:
                a[3] ||
                (a[3] = (m) =>
                  this.newChat(null, "ai_single", i.Helpers.SHA1("image"))),
              type: "button",
              style: { "border-radius": "24px !important" },
              class:
                "ait-whitespace-nowrap ait-flex ait-bg-[var(--ait-tab-menu-active-bg-color)] ait-text-white ait-font-bold ait-py-2 ait-px-4 ait-ml-2 hover:ait-opacity-90 active:ait-opacity-80",
            },
            [
              e(l, { class: "ait-mr-1", name: "reference_image_icon" }),
              y(" " + s(i.__("New Image")), 1),
            ]
          ),
          t(
            "button",
            {
              type: "button",
              onClick:
                a[4] ||
                (a[4] = (...m) =>
                  u.toggleImageChatSettingsSection &&
                  u.toggleImageChatSettingsSection(...m)),
              class: "ait-hidden md:ait-block md:ait-ml-4 svg-logo",
            },
            [
              e(l, {
                id: "image_chat_settings_icon",
                name: "image_chat_settings_icon",
              }),
            ]
          ),
        ]),
      ]),
      ja,
      t("div", La, [t("div", Va, [t("div", Pa, [e(d, { mode: "full" })])])]),
    ])
  );
}
const Ba = x(ya, [["render", Ha]]),
  Fa = {
    extends: f,
    mounted() {
      this.changeSectionsRoundedValue();
    },
    methods: {
      toggleHistory() {
        (this.showHistorySideBar = !this.showHistorySideBar),
          this.changeSectionsRoundedValue();
      },
      changeSectionsRoundedValue() {
        const i = document.getElementById("ait-tab-0-chat");
        i &&
          (this.showHistorySideBar
            ? (i.classList.remove("ait-rounded-r-lg"),
              i.classList.add("ait-rounded-r-none"))
            : (i.classList.remove("ait-rounded-r-none"),
              i.classList.add("ait-rounded-r-lg")));
      },
    },
  },
  Aa = {
    id: "ait-tab-0-search",
    class:
      "ait-bg-[var(--ait-option-card-bg-color)] ait-flex-initial ait-w-full ait-p-4 ait-mr-0 ait-rounded-none",
  },
  Ua = {
    class: "ait-flex ait-flex-row ait-responsive-zoom ait-justify-between",
  },
  Na = { class: "ait-grid ait-grid-cols-1 md:ait-grid-cols-2" },
  Ra = { class: "ait-flex" },
  za = { class: "ait-font-bold ait-leading-[50px] ait-text-2xl" },
  Da = {
    class:
      "ait-hidden md:ait-flex ait-items-center md:ait-ml-4 ait-space-x-3 ait-text-sm ait-relative dark:ait-text-neutral-200 ait-border ait-rounded-xl ait-cursor-pointer",
  },
  Wa = t(
    "img",
    {
      src: E,
      alt: "gpt image",
      class: "ait-w-5 ait-h-5 ait-absolute ait-left-[10px]",
    },
    null,
    -1
  ),
  qa = ["value"],
  Qa = { class: "ait-flex ait-items-center ait-max-h-[50px]" },
  Ga = {
    class:
      "ait-whitespace-nowrap ait-flex ait-items-center ait-space-x-2 ait-bg-transparent hover:ait-bg-[var(--ait-link-color)] ait-transition-all ait-rounded-full ait-p-1 ait-px-2",
  },
  Oa = t(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
      class: "ait-w-4 ait-h-4 dark:ait-text-gray-200",
    },
    [
      t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 4.5v15m7.5-7.5h-15",
      }),
    ],
    -1
  ),
  Xa = t("div", { class: "ait-py-2 md:ait-py-5" }, [t("hr")], -1),
  Ja = { id: "aitopia-sidebar" },
  Ka = {
    id: "ai-sidebar",
    class: "ait-flex ait-w-full ait-h-full ait-overflow-hidden",
  },
  Ya = { class: "ait-flex ait-flex-col ait-w-full" };
function Za(i, a, g, _, h, u) {
  const n = o("SvgLogo"),
    l = o("InnerContentView");
  return (
    c(),
    r("div", Aa, [
      t("div", Ua, [
        t("div", Na, [
          t("div", Ra, [
            e(n, {
              name: "logo",
              className: "ait-w-8 ait-h-8 ait-mt-2 ait-mr-2",
            }),
            t("h1", za, s(i.__("Search")), 1),
          ]),
          t("label", Da, [
            Wa,
            C(
              t(
                "select",
                {
                  name: "choose_gpt",
                  id: "choose_gpt",
                  class: "ait-bg-transparent ait-w-fit ait-outline-none",
                  style: {
                    padding: "5px 30px 5px 20px",
                    "margin-right": "8px !important",
                  },
                  "onUpdate:modelValue":
                    a[0] || (a[0] = (d) => (this.settings.ai_model = d)),
                  onChange:
                    a[1] ||
                    (a[1] = (d) => {
                      this.changeStorage(
                        "settings.ai_model",
                        this.settings.ai_model ?? "GPT-3.5"
                      );
                    }),
                },
                [
                  (c(!0),
                  r(
                    v,
                    null,
                    $(
                      this.ai_models,
                      (d, m) => (
                        c(),
                        r("option", { value: d, selected: "" }, s(m), 9, qa)
                      )
                    ),
                    256
                  )),
                ],
                544
              ),
              [[k, this.settings.ai_model]]
            ),
          ]),
        ]),
        t("div", Qa, [
          t("button", Ga, [
            Oa,
            t(
              "span",
              {
                class: "ait-text-sm dark:ait-text-gray-200",
                onClick: a[2] || (a[2] = (d) => this.newChat()),
              },
              s(i.__("New Conversation")),
              1
            ),
          ]),
        ]),
      ]),
      Xa,
      t("div", Ja, [
        t("div", Ka, [
          t("div", Ya, [
            e(
              l,
              {
                mode: "full",
                headerMode: "search",
                needUpgrade: this.storage.Sync.plan == "Free",
              },
              null,
              8,
              ["needUpgrade"]
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const te = x(Fa, [["render", Za]]);
j.add(G);
j.add(O);
let L = document.createElement("div");
L.id = "aitopia-container";
let S = document.createElement("div");
S.id = "aitopia";
S.classList.add("aitopia");
S.append(L);
let I = document.querySelector("body"),
  ie = I.getAttribute("id") ?? "";
if (ie.indexOf("aitopia") == -1) {
  let i = "html";
  I = document.querySelector(i);
}
I?.append(S);
f.template = ci;
f.methods = X;
f.extends = W;
window.aiVueApp = q(f)
  .component("Navigation", J)
  .component("AiResponse", K)
  .component("HelloWorld", jt)
  .component("Switchbar", Y)
  .component("Credit", Z)
  .component("font-awesome-icon", tt)
  .component("SvgLogo", it)
  .component("FileButton", at)
  .component("ImageChatSettings", et)
  .component("InnerContentView", st)
  .component("Prompts", ot)
  .component("Write", nt)
  .component("MakeAReview", lt)
  .component("EditToolsModal", dt)
  .component("EditToolsUploadModal", rt)
  .component("EditToolsUploadModalActionSection", ct)
  .component("Painter", mt)
  .component("ReferenceImage", pt)
  .component("ImageChatSettingsModal", ut)
  .component("ImagePreview", ht)
  .component("InnerReferenceImage", ft)
  .component("PDFUpload", _t)
  .component("MakeAReviewModal", gt)
  .component("InnerImagePreview", xt)
  .component("UserInfoSection", qi)
  .component("HistorySideBar", ea)
  .component("SingleResponse", vt)
  .component("FullScreenChatSection", wa)
  .component("FullScreenImageSection", Ba)
  .component("Modal", bt)
  .component("HoverPopover", wt)
  .component("VisionToolbar", yt)
  .component("VisionImagePreview", $t)
  .component("InviteFriends", St)
  .component("FullScreenSearchSection", te)
  .component("UpgradePlanModal", Ct)
  .mount("#aitopia");
let ae = document?.querySelector("#aitopia-sidebar");
Q.resizeBorder(ae, 440);
//# sourceMappingURL=full_screen.js.map
