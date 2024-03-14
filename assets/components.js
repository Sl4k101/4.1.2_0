import {
  _ as k,
  A as v,
  y as T,
  z as N,
  l as U,
  i as z,
  b as H,
  c as L,
  C as O,
  E as J,
  g as G,
  h as q,
  e as W,
  F as Y,
  H as K,
  I as Q,
  k as X,
  n as Z,
  f as tt,
  r as et,
  o as it,
  v as at,
  M as st,
  q as ot,
  t as nt,
  N as lt,
  p as rt,
  j as dt,
  P as ct,
  R as _t,
  s as gt,
  B as ht,
  d as pt,
  S as ut,
  U as mt,
  u as ft,
  V as bt,
  W as wt,
} from "./index.js";
import {
  r as d,
  c as a,
  f as s,
  a as t,
  e as r,
  n as M,
  F as f,
  o as i,
  l as C,
  t as c,
  A,
  q as S,
  s as x,
  b,
  u as B,
} from "./Helpers.js";
const xt = { key: 0, id: "aitopia-container", class: "close-sidebar" },
  kt = { id: "aitopia-sidebar" },
  vt = {
    id: "ai-sidebar",
    class: "ait-flex ait-w-full ait-h-full ait-overflow-hidden",
  },
  yt = {
    key: 0,
    class: "ait-flex ait-flex-col ait-w-[calc(100%_-_60px)]",
    id: "ait-sidebar-chat",
  },
  It = {
    key: 1,
    class: "ait-flex ait-flex-col ait-w-[calc(100%_-_60px)]",
    id: "ait-sidebar-ask",
  },
  Ct = {
    key: 2,
    class: "ait-flex ait-flex-col ait-w-[calc(100%_-_60px)]",
    id: "ait-sidebar-write",
  },
  Mt = {
    key: 3,
    class: "ait-flex ait-flex-col ait-w-[calc(100%_-_60px)]",
    id: "ait-sidebar-painter",
  },
  $t = {
    key: 4,
    class: "ait-flex ait-flex-col ait-w-[calc(100%_-_60px)]",
    id: "ait-sidebar-web_search",
  },
  Tt = { key: 1, style: { display: "none" } },
  At = t(
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
    `
`,
    -1
  );
function St(e, l, h, y, w, _) {
  const g = d("EditToolsModal"),
    p = d("EditToolsUploadModal"),
    u = d("navigation"),
    o = d("InnerContentView"),
    I = d("prompts"),
    n = d("make-a-review"),
    m = d("write"),
    E = d("painter"),
    R = d("switchbar"),
    V = d("MakeAReviewModal"),
    j = d("InviteFriends"),
    F = d("font-awesome-icon"),
    P = d("svg-logo"),
    D = d("SearchResponse");
  return (
    i(),
    a(
      f,
      null,
      [
        s(g),
        s(p),
        this.settings.sidebar_show_icon == !0
          ? (i(),
            a("div", xt, [
              t("div", kt, [
                t("div", vt, [
                  this.settings.switchbar == "chat"
                    ? (i(),
                      a("div", yt, [
                        s(u, { mode: "chat" }),
                        s(o, { headerMode: "example" }),
                      ]))
                    : r("", !0),
                  this.settings.switchbar == "ask"
                    ? (i(), a("div", It, [s(u, { mode: "ask" }), s(I), s(n)]))
                    : r("", !0),
                  this.settings.switchbar == "write"
                    ? (i(), a("div", Ct, [s(u, { mode: "write" }), s(m), s(n)]))
                    : r("", !0),
                  this.settings.switchbar == "image"
                    ? (i(), a("div", Mt, [s(u, { mode: "image" }), s(E), s(n)]))
                    : r("", !0),
                  this.settings.switchbar == "web_search"
                    ? (i(),
                      a("div", $t, [
                        s(u, { mode: "search" }),
                        s(
                          o,
                          {
                            headerMode: "search",
                            needUpgrade: this.storage.Sync.plan == "Free",
                          },
                          null,
                          8,
                          ["needUpgrade"]
                        ),
                      ]))
                    : r("", !0),
                  s(R),
                ]),
                s(V),
                s(j),
              ]),
            ]))
          : r("", !0),
        t(
          "div",
          {
            id: "aitopia-sidebar-opener",
            class: "ait-cursor-pointer",
            style: M(
              this.settings.sidebar_show_icon === !1 ? "display:none;" : ""
            ),
          },
          [
            t(
              "div",
              {
                class: "ai-opener-close",
                onClick:
                  l[0] ||
                  (l[0] = ($) => this.elementRemove("#aitopia-sidebar-opener")),
              },
              [
                s(F, {
                  icon: "fa-solid fa-circle-xmark",
                  class: "ait-w-4 ait-h-4",
                }),
              ]
            ),
            t(
              "div",
              {
                class: "opener-logo",
                onClick: l[1] || (l[1] = ($) => this.sidebarToggle(!0, $)),
              },
              [s(P, { name: "logo", className: "ait-w-[45px] ait-h-[45px]" })]
            ),
          ],
          4
        ),
        this.settings.search_ask_mode ? (i(), a("div", Tt, [s(D)])) : r("", !0),
        At,
      ],
      64
    )
  );
}
const Ut = k(v, [["render", St]]),
  Bt = {
    extends: v,
    data() {
      return { files: [] };
    },
  },
  Et = { class: "ait-w-full ait-min-w-full" },
  Rt = { class: "ait-flex ait-w-full ait-p-5" },
  Vt = {
    class:
      "ait-w-full ait-bg-gray-200 ait-rounded-full ait-h-2.5 ait-mb-4 dark:ait-bg-gray-700",
  };
function jt(e, l, h, y, w, _) {
  const g = d("file-button");
  return (
    i(),
    a(
      f,
      null,
      [
        t(
          "input",
          {
            type: "file",
            class: "ait-uploader",
            onChange:
              l[0] ||
              (l[0] = (p) => {
                this.Uploader.processFile(
                  ".ait-uploader",
                  0,
                  [
                    "image/svg+xml",
                    "image/jpeg",
                    "image/png",
                    "application/x-zip-compressed",
                  ],
                  (u) => {
                    this.files.push(u);
                  }
                );
              }),
          },
          null,
          32
        ),
        t(
          "button",
          {
            onClick:
              l[1] ||
              (l[1] = (p) =>
                this.Uploader.processFile(".ait-uploader", 4194304)),
          },
          "Yükle"
        ),
        this.files
          ? (i(!0),
            a(
              f,
              { key: 0 },
              C(
                this.files,
                (p, u) => (
                  i(),
                  a("div", Et, [
                    s(g, { title: p.name, url: p.url }, null, 8, [
                      "title",
                      "url",
                    ]),
                    t("div", Rt, c(p.progress), 1),
                    t("div", Vt, [
                      t(
                        "div",
                        {
                          class:
                            "ait-bg-green-600 ait-h-2.5 ait-rounded-full dark:ait-bg-green-500",
                          style: M(
                            "transition: width 2s;" +
                              (p.progress != 100
                                ? `width:${p.progress}%`
                                : "width:100%")
                          ),
                        },
                        null,
                        4
                      ),
                    ]),
                  ])
                )
              ),
              256
            ))
          : r("", !0),
      ],
      64
    )
  );
}
const Ft = k(Bt, [["render", jt]]),
  Pt = {
    extends: v,
    props: ["id", "custom_key", "class", "mode"],
    methods: {
      regenerateAiImage(e) {
        const l = A.prefixify(A.linkify(e.item)).replace(/\n/g, "<br/>");
        return (
          (this.image_settings.prompt = l),
          T.build(
            this,
            "image",
            this.image_settings.prompt,
            "image",
            null,
            e.title ?? null,
            e.extra_data ?? {}
          ).then((this.image_settings.prompt = null))
        );
      },
      async downloadImage(e, l) {
        (this.ai_image_url_downloading = e),
          await this.downloadUrl(e + "?download", l + ".png"),
          (this.ai_image_url_downloading = "");
      },
      setUseAsReference(e) {
        this.changeStorage("image_settings.image", e, !1),
          (this.showImagePreviewModal = !0);
      },
      toggleDropdown(e) {
        this.openDropdowns[e] = !this.openDropdowns[e];
      },
      mouseOverImageButtonVisibility(e) {
        this.visibleImageButtons[e] || (this.visibleImageButtons[e] = !0);
      },
      mouseLeaveImageButtonVisibility(e) {
        if (this.visibleImageButtons[e]) {
          (this.visibleImageButtons[e] = !1), (this.openDropdowns[e] = !1);
          return;
        }
      },
      toggleEditModal(e) {
        this.showEditToolsModal && (this.showEditToolsModal = !1),
          this.showEditToolUploadModal && (this.showEditToolUploadModal = !1);
        const l = JSON.stringify(e);
        localStorage.setItem("reference_edit_tool_image", l),
          (this.showEditToolsModal = !this.showEditToolsModal);
      },
      showUpscaleModal(e) {
        this.changeStorage("image_settings.action", "image-upscaling", !1),
          (this.selectedTool = this.editToolOptions.find(
            (h) => h.id === this.imageUpscalingId
          )),
          (this.upscaleValue = 2);
        const l = JSON.stringify(e);
        localStorage.setItem("reference_edit_tool_image", l),
          (this.showEditToolsModal = !1),
          (this.showEditToolUploadModal = !0);
      },
      async generateImageVariations(e) {
        (this.isReferenceImageLoading = !0),
          this.changeStorage("image_settings.action", "reimagine", !1),
          this.changeStorage("image_settings.image", e?.url, !1);
        const l = await T.build(
          this,
          "image",
          null,
          "image",
          null,
          "reimagine"
        );
        (this.image_settings.prompt = null),
          l &&
            typeof l.images < "u" &&
            typeof l.images[0] < "u" &&
            typeof l.images[0].url < "u" &&
            this.changeStorage("image_settings.image", l.images[0].url, !1),
          (this.isReferenceImageLoading = !1);
      },
    },
    data() {
      return {
        ai_image_url_downloading: "",
        openDropdowns: {},
        visibleImageButtons: {},
        editToolOptions: S.editTools,
        imageUpscalingId: S.image_upscaling_id,
      };
    },
  },
  Dt = ["id", "data-key"],
  Nt = ["aria-details"],
  zt = {
    class:
      "ait-flex ait-p-2 ait-text-[10px] dark:ait-text-gray-200 ait-items-center ait-justify-between",
  },
  Ht = { class: "ait-flex ait-items-center ait-space-x-2" },
  Lt = t("img", { class: "ait-w-4", src: N, alt: "gpt-image" }, null, -1),
  Ot = {
    class:
      "dark:ait-bg-neutral-900 dark:ait-text-gray-200 ait-px-8 ait-py-4 ai_result_container",
  },
  Jt = ["innerHTML"],
  Gt = ["onClick"],
  qt = t("div", { class: "ait-clear-both" }, null, -1),
  Wt = {
    key: 1,
    class:
      "ait-px-3 ait-py-1 ait-bg-white dark:ait-bg-neutral-800 dark:ait-text-gray-200",
  },
  Yt = { class: "ait-w-2/3 ait-py-4 ait-ml-auto ait-text-right" },
  Kt = {
    type: "button",
    class:
      "ait-text-white ait-bg-green-700 hover:ait-bg-green-800 focus:ait-outline-none focus:ait-ring-4 focus:ait-ring-green-300 ait-font-medium ait-rounded-full ait-text-sm ait-px-5 ait-py-1 ait-text-center ait-ml-5 ait-mr-2 dark:ait-bg-green-600 dark:hover:ait-bg-green-700 dark:focus:ait-ring-green-800 aitopia-pricing",
  },
  Qt = {
    key: 2,
    class:
      "ait-px-3 ait-py-1 ait-bg-white dark:ait-bg-neutral-800 ait-text-red-800 dark:ait-text-red-200",
  },
  Xt = {
    class: "ait-py-4 ait-text-center ait-text-red-800 dark:ait-text-red-200",
  },
  Zt = {
    class:
      "ait-flex ait-items-center ait-justify-between ait-p-3 ait-space-x-3 ait-border ait-border-neutral-200 dark:ait-border-neutral-600 ait-rounded-xl ait-bg-neutral-100 dark:ait-bg-neutral-900 dark:ait-text-neutral-200",
  },
  te = { class: "" },
  ee = ["innerHTML"],
  ie = ["onMouseover", "onMouseleave"],
  ae = ["src", "title", "alt"],
  se = {
    class:
      "ait-flex ait-flex-row ait-absolute ait-top-0 ait-right-0 ait-mt-2 ait-h-[28px]",
  },
  oe = { key: 0, class: "ait-flex ait-justify-end" },
  ne = ["onClick"],
  le = ["onClick"],
  re = ["onClick"],
  de = ["onClick"],
  ce = ["onClick"],
  _e = ["onClick"],
  ge = { key: 0 },
  he = ["onClick"],
  pe = { key: 1 },
  ue = {
    disabled: "",
    class:
      "ait-absolute ait-bottom-[10px] ait-text-black dark:ait-text-white ait-download-button",
  },
  me = t("div", null, null, -1),
  fe = ["onClick"],
  be = {
    class:
      "ait-flex ait-flex-row ait-mt-2 ait-mx-auto hover:ait-text-white ait-regenerate",
  },
  we = { class: "ait-ml-1 ait-pb-2" },
  xe = { key: 0, class: "ait-flex ait-flex-row ait-mt-2 ait-ml-1" },
  ke = { class: "ait-ml-5" },
  ve = {
    key: 4,
    class:
      "ait-px-3 ait-py-1 ait-bg-white dark:ait-bg-neutral-800 dark:ait-text-gray-200",
  },
  ye = { key: 0, class: "ait-w-2/3 ait-py-4 ait-ml-auto ait-text-right" },
  Ie = { key: 1, class: "ait-w-2/3 ait-py-4 ait-ml-auto ait-text-right" },
  Ce = {
    key: 5,
    id: "ait-continue-chat-ai_chat",
    class:
      "ait-continue-chat ait-flex ait-items-center ait-justify-center ait-absolute ait-w-full",
  },
  Me = ["data-title"],
  $e = {
    class: "ait-flex ait-w-full ait-gap-2 ait-items-center ait-justify-center",
  },
  Te = { id: "ait-stop-chat-ai_chat", class: "ait-stop-chat ait-hide" },
  Ae = {
    class:
      "ait-text-white hover:ait-bg-green-800 ait-font-medium ait-text-md ait-px-5 ait-py-2 ait-rounded-md dark:hover:ait-bg-[var(--ait-tab-menu-active-bg-color)]",
  },
  Se = {
    class: "ait-flex ait-w-full ait-gap-2 ait-items-center ait-justify-center",
  },
  Ue = t(
    "svg",
    {
      stroke: "currentColor",
      fill: "none",
      "stroke-width": "2",
      viewBox: "0 0 24 24",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "icon-xs",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      t("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2",
      }),
    ],
    -1
  );
function Be(e, l, h, y, w, _) {
  const g = d("svg-logo"),
    p = d("file-button"),
    u = d("font-awesome-icon");
  return this.ai_single != null
    ? (i(),
      a(
        f,
        { key: 0 },
        [
          typeof this.ai_single[h.custom_key] < "u"
            ? (i(),
              a(
                f,
                { key: 0 },
                [
                  this.ai_single[h.custom_key] != null
                    ? (i(),
                      a(
                        "div",
                        {
                          key: 0,
                          class: x("ait-h-full " + this.class),
                          id: h.id != null ? h.id : "",
                          "data-key": h.custom_key,
                        },
                        [
                          this.ai_single[h.custom_key]
                            ? (i(!0),
                              a(
                                f,
                                { key: 0 },
                                C(
                                  Object.values(this.ai_single[h.custom_key]),
                                  (o, I) => (
                                    i(),
                                    a(
                                      f,
                                      null,
                                      [
                                        o
                                          ? (i(),
                                            a(
                                              "div",
                                              {
                                                key: 0,
                                                "aria-details": `chat-key-${I}`,
                                                class: x(
                                                  o.role == "system" ||
                                                    o.role == "assistant"
                                                    ? "ait-bg-neutral-100 dark:ait-bg-neutral-900 dark:ait-text-gray-200"
                                                    : ""
                                                ),
                                              },
                                              [
                                                o.role == "system" ||
                                                o.role == "assistant"
                                                  ? (i(),
                                                    a(
                                                      f,
                                                      { key: 0 },
                                                      [
                                                        t("div", zt, [
                                                          t("span", Ht, [
                                                            Lt,
                                                            b(),
                                                            t(
                                                              "span",
                                                              null,
                                                              c(o.model),
                                                              1
                                                            ),
                                                          ]),
                                                        ]),
                                                        t("div", Ot, [
                                                          t(
                                                            "div",
                                                            {
                                                              class: x(
                                                                `ai_result ${
                                                                  o.loading
                                                                    ? "ai_loading"
                                                                    : ""
                                                                }`
                                                              ),
                                                              innerHTML:
                                                                e.AiApi.prefixify(
                                                                  e.AiApi.linkify(
                                                                    o.item
                                                                  )
                                                                ).replace(
                                                                  /\n/g,
                                                                  "<br/>"
                                                                ),
                                                            },
                                                            null,
                                                            10,
                                                            Jt
                                                          ),
                                                          t(
                                                            "div",
                                                            {
                                                              class:
                                                                "ait-flex ait-items-center ait-space-x-2 ait-float-right ait-cursor-pointer",
                                                              onClick: (n) =>
                                                                this.Helpers.copyClipboard(
                                                                  o.item.replace(
                                                                    /<br\/>/g,
                                                                    `
`
                                                                  )
                                                                ),
                                                            },
                                                            [
                                                              s(g, {
                                                                className:
                                                                  "ait-w-3 ait-h-3",
                                                                name: "clipboard",
                                                              }),
                                                              t(
                                                                "span",
                                                                null,
                                                                c(e.__("copy")),
                                                                1
                                                              ),
                                                            ],
                                                            8,
                                                            Gt
                                                          ),
                                                          qt,
                                                        ]),
                                                      ],
                                                      64
                                                    ))
                                                  : o.role == "limit"
                                                  ? (i(),
                                                    a("div", Wt, [
                                                      t("div", Yt, [
                                                        b(
                                                          c(
                                                            e.__(
                                                              "Your usage limit has been reached. Please upgrade your plan to continue using."
                                                            )
                                                          ) + " ",
                                                          1
                                                        ),
                                                        t(
                                                          "button",
                                                          Kt,
                                                          c(e.__("Upgrade")),
                                                          1
                                                        ),
                                                      ]),
                                                    ]))
                                                  : o.role == "error"
                                                  ? (i(),
                                                    a("div", Qt, [
                                                      t(
                                                        "div",
                                                        Xt,
                                                        c(o.item),
                                                        1
                                                      ),
                                                    ]))
                                                  : o.role == "image"
                                                  ? (i(),
                                                    a(
                                                      "div",
                                                      {
                                                        key: 3,
                                                        class:
                                                          "ait-p-2 ai_result_container",
                                                        style: M(
                                                          h.mode === "full" &&
                                                            "max-width: 36rem"
                                                        ),
                                                      },
                                                      [
                                                        t("div", Zt, [
                                                          t("div", te, [
                                                            t(
                                                              "div",
                                                              {
                                                                class:
                                                                  x(
                                                                    "ai_result ait-pb-3"
                                                                  ),
                                                                innerHTML:
                                                                  e.AiApi.prefixify(
                                                                    e.AiApi.linkify(
                                                                      o.title ??
                                                                        o.item
                                                                    )
                                                                  ).replace(
                                                                    /\n/g,
                                                                    "<br/>"
                                                                  ),
                                                              },
                                                              null,
                                                              8,
                                                              ee
                                                            ),
                                                            o.images
                                                              ? (i(),
                                                                a(
                                                                  "div",
                                                                  {
                                                                    key: 0,
                                                                    class: x(
                                                                      "ait-flex ait-grid ait-image-mode " +
                                                                        (o
                                                                          .images
                                                                          .length >
                                                                        2
                                                                          ? "ait-grid-cols-2"
                                                                          : "ait-grid-cols-" +
                                                                            o
                                                                              .images
                                                                              .length)
                                                                    ),
                                                                  },
                                                                  [
                                                                    (i(!0),
                                                                    a(
                                                                      f,
                                                                      null,
                                                                      C(
                                                                        o.images,
                                                                        (n) => (
                                                                          i(),
                                                                          a(
                                                                            "div",
                                                                            {
                                                                              onMouseover:
                                                                                (
                                                                                  m
                                                                                ) =>
                                                                                  _.mouseOverImageButtonVisibility(
                                                                                    n.url
                                                                                  ),
                                                                              onMouseleave:
                                                                                (
                                                                                  m
                                                                                ) =>
                                                                                  _.mouseLeaveImageButtonVisibility(
                                                                                    n.url
                                                                                  ),
                                                                              class:
                                                                                "ait-relative",
                                                                            },
                                                                            [
                                                                              n.url
                                                                                ? (i(),
                                                                                  a(
                                                                                    f,
                                                                                    {
                                                                                      key: 0,
                                                                                    },
                                                                                    [
                                                                                      t(
                                                                                        "img",
                                                                                        {
                                                                                          src: n.url,
                                                                                          title:
                                                                                            n.seed ??
                                                                                            "",
                                                                                          alt:
                                                                                            n.seed ??
                                                                                            "",
                                                                                          loading:
                                                                                            "lazy",
                                                                                        },
                                                                                        null,
                                                                                        8,
                                                                                        ae
                                                                                      ),
                                                                                      t(
                                                                                        "div",
                                                                                        se,
                                                                                        [
                                                                                          w
                                                                                            .visibleImageButtons[
                                                                                            n
                                                                                              .url
                                                                                          ]
                                                                                            ? (i(),
                                                                                              a(
                                                                                                "div",
                                                                                                oe,
                                                                                                [
                                                                                                  t(
                                                                                                    "button",
                                                                                                    {
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.generateImageVariations(
                                                                                                            n
                                                                                                          ),
                                                                                                      class:
                                                                                                        "ait-variations ait-flex ait-flex-row ait-text-black dark:ait-text-white ait-download-button ait-mr-1 ait-pt-[6px] items-center justify-center ait-text-[10px]",
                                                                                                    },
                                                                                                    [
                                                                                                      s(
                                                                                                        g,
                                                                                                        {
                                                                                                          class:
                                                                                                            "ait-relative",
                                                                                                          style:
                                                                                                            {
                                                                                                              "line-height":
                                                                                                                "13px",
                                                                                                            },
                                                                                                          name: "variants_icon",
                                                                                                        }
                                                                                                      ),
                                                                                                      b(
                                                                                                        " " +
                                                                                                          c(
                                                                                                            e.__(
                                                                                                              "Variations"
                                                                                                            )
                                                                                                          ),
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    8,
                                                                                                    ne
                                                                                                  ),
                                                                                                  t(
                                                                                                    "button",
                                                                                                    {
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.showUpscaleModal(
                                                                                                            n
                                                                                                          ),
                                                                                                      style:
                                                                                                        {
                                                                                                          "font-size":
                                                                                                            "10px",
                                                                                                          "margin-right":
                                                                                                            "2px",
                                                                                                          "padding-top":
                                                                                                            "6px",
                                                                                                        },
                                                                                                      class:
                                                                                                        "ait-flex ait-flex-row ait-text-black dark:ait-text-white ait-download-button",
                                                                                                    },
                                                                                                    [
                                                                                                      s(
                                                                                                        g,
                                                                                                        {
                                                                                                          class:
                                                                                                            "ait-relative",
                                                                                                          style:
                                                                                                            {
                                                                                                              "line-height":
                                                                                                                "13px",
                                                                                                            },
                                                                                                          name: "upscale_icon",
                                                                                                        }
                                                                                                      ),
                                                                                                      b(
                                                                                                        " " +
                                                                                                          c(
                                                                                                            e.__(
                                                                                                              "Upscale"
                                                                                                            )
                                                                                                          ),
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    8,
                                                                                                    le
                                                                                                  ),
                                                                                                  s(
                                                                                                    g,
                                                                                                    {
                                                                                                      className:
                                                                                                        "ait-mt-auto ait-h-7 ait-w-6 ait-download-button ait-cursor-pointer",
                                                                                                      name: "three_dots_icon",
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.toggleDropdown(
                                                                                                            n.url
                                                                                                          ),
                                                                                                    },
                                                                                                    null,
                                                                                                    8,
                                                                                                    [
                                                                                                      "onClick",
                                                                                                    ]
                                                                                                  ),
                                                                                                ]
                                                                                              ))
                                                                                            : r(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          w
                                                                                            .openDropdowns[
                                                                                            n
                                                                                              .url
                                                                                          ]
                                                                                            ? (i(),
                                                                                              a(
                                                                                                "div",
                                                                                                {
                                                                                                  key: 1,
                                                                                                  onClick:
                                                                                                    (
                                                                                                      m
                                                                                                    ) =>
                                                                                                      _.toggleDropdown(
                                                                                                        n.url
                                                                                                      ),
                                                                                                  class:
                                                                                                    "ait-mt-4 ait-absolute ait-right-0 ait-top-5 ait-z-50 ait-w-48 ait-bg-slate-100 dark:ait-bg-neutral-700 ait-rounded-md ait-shadow-lg",
                                                                                                },
                                                                                                [
                                                                                                  t(
                                                                                                    "div",
                                                                                                    {
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.downloadImage(
                                                                                                            n.url,
                                                                                                            n.seed
                                                                                                          ),
                                                                                                      class:
                                                                                                        "ait-flex ait-flex-row ait-px-4 ait-py-2 ait-text-sm ait-text-black dark:ait-text-white hover:ait-bg-gray-300 hover:dark:ait-bg-neutral-800 ait-rounded-lg ait-cursor-pointer",
                                                                                                    },
                                                                                                    [
                                                                                                      s(
                                                                                                        g,
                                                                                                        {
                                                                                                          class:
                                                                                                            "ait-ml-[2px] ait-mr-1 ait-mt-[1px]",
                                                                                                          name: "download_icon",
                                                                                                        }
                                                                                                      ),
                                                                                                      b(
                                                                                                        " " +
                                                                                                          c(
                                                                                                            e.__(
                                                                                                              "Download"
                                                                                                            )
                                                                                                          ),
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    8,
                                                                                                    de
                                                                                                  ),
                                                                                                  t(
                                                                                                    "div",
                                                                                                    {
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.setUseAsReference(
                                                                                                            n.url
                                                                                                          ),
                                                                                                      class:
                                                                                                        "ait-flex ait-flex-row ait-px-4 ait-py-2 ait-text-sm ait-text-black dark:ait-text-white hover:ait-bg-gray-300 hover:dark:ait-bg-neutral-800 ait-rounded-lg ait-cursor-pointer",
                                                                                                    },
                                                                                                    [
                                                                                                      s(
                                                                                                        g,
                                                                                                        {
                                                                                                          class:
                                                                                                            "ait-ml-[2px] ait-mr-1 ait-mt-[1px]",
                                                                                                          name: "use_as_reference_icon",
                                                                                                        }
                                                                                                      ),
                                                                                                      b(
                                                                                                        " " +
                                                                                                          c(
                                                                                                            e.__(
                                                                                                              "Use as reference"
                                                                                                            )
                                                                                                          ),
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    8,
                                                                                                    ce
                                                                                                  ),
                                                                                                  t(
                                                                                                    "div",
                                                                                                    {
                                                                                                      class:
                                                                                                        "ait-flex ait-flex-row ait-px-4 ait-py-2 ait-text-sm ait-text-black dark:ait-text-white hover:ait-bg-gray-300 hover:dark:ait-bg-neutral-800 ait-rounded-lg ait-cursor-pointer",
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.toggleEditModal(
                                                                                                            n
                                                                                                          ),
                                                                                                    },
                                                                                                    [
                                                                                                      s(
                                                                                                        g,
                                                                                                        {
                                                                                                          class:
                                                                                                            "ait-mr-1 ait-mt-[1px] ait-white",
                                                                                                          name: "edit_icon",
                                                                                                        }
                                                                                                      ),
                                                                                                      b(
                                                                                                        " " +
                                                                                                          c(
                                                                                                            e.__(
                                                                                                              "Editing Tools"
                                                                                                            )
                                                                                                          ),
                                                                                                        1
                                                                                                      ),
                                                                                                    ],
                                                                                                    8,
                                                                                                    _e
                                                                                                  ),
                                                                                                ],
                                                                                                8,
                                                                                                re
                                                                                              ))
                                                                                            : r(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                        ]
                                                                                      ),
                                                                                      t(
                                                                                        "div",
                                                                                        null,
                                                                                        [
                                                                                          w.ai_image_url_downloading ===
                                                                                            "" &&
                                                                                          w
                                                                                            .visibleImageButtons[
                                                                                            n
                                                                                              .url
                                                                                          ]
                                                                                            ? (i(),
                                                                                              a(
                                                                                                "div",
                                                                                                ge,
                                                                                                [
                                                                                                  t(
                                                                                                    "button",
                                                                                                    {
                                                                                                      onClick:
                                                                                                        (
                                                                                                          m
                                                                                                        ) =>
                                                                                                          _.downloadImage(
                                                                                                            n.url,
                                                                                                            n.seed
                                                                                                          ),
                                                                                                      class:
                                                                                                        "ait-absolute ait-bottom-[10px] ait-text-black dark:ait-text-white ait-download-button",
                                                                                                    },
                                                                                                    c(
                                                                                                      e.__(
                                                                                                        "Download"
                                                                                                      )
                                                                                                    ),
                                                                                                    9,
                                                                                                    he
                                                                                                  ),
                                                                                                ]
                                                                                              ))
                                                                                            : r(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          w.ai_image_url_downloading ===
                                                                                            n.url &&
                                                                                          w
                                                                                            .visibleImageButtons[
                                                                                            n
                                                                                              .url
                                                                                          ]
                                                                                            ? (i(),
                                                                                              a(
                                                                                                "div",
                                                                                                pe,
                                                                                                [
                                                                                                  t(
                                                                                                    "button",
                                                                                                    ue,
                                                                                                    c(
                                                                                                      e.__(
                                                                                                        "Downloading"
                                                                                                      )
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ]
                                                                                              ))
                                                                                            : r(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          me,
                                                                                        ]
                                                                                      ),
                                                                                    ],
                                                                                    64
                                                                                  ))
                                                                                : r(
                                                                                    "",
                                                                                    !0
                                                                                  ),
                                                                            ],
                                                                            40,
                                                                            ie
                                                                          )
                                                                        )
                                                                      ),
                                                                      256
                                                                    )),
                                                                  ],
                                                                  2
                                                                ))
                                                              : r("", !0),
                                                            o.loading == !1
                                                              ? (i(),
                                                                a(
                                                                  "button",
                                                                  {
                                                                    key: 1,
                                                                    class:
                                                                      "ait-flex ait-rounded-full hover:ait-bg-[var(--ait-tab-menu-active-bg-color)] dark:hover:ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-text-white ait-px-1 ait-mt-3 ait-whitespace-nowrap",
                                                                    onClick: (
                                                                      n
                                                                    ) =>
                                                                      _.regenerateAiImage(
                                                                        o
                                                                      ),
                                                                  },
                                                                  [
                                                                    t(
                                                                      "div",
                                                                      be,
                                                                      [
                                                                        s(g, {
                                                                          className:
                                                                            "ait-mb-2",
                                                                          name: "regenerate_icon",
                                                                        }),
                                                                        t(
                                                                          "div",
                                                                          we,
                                                                          c(
                                                                            e.__(
                                                                              "Regenerate"
                                                                            )
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  8,
                                                                  fe
                                                                ))
                                                              : r("", !0),
                                                          ]),
                                                        ]),
                                                        o.loading
                                                          ? (i(),
                                                            a("div", xe, [
                                                              t(
                                                                "div",
                                                                {
                                                                  class: x(
                                                                    `${
                                                                      o.loading
                                                                        ? "ai_loading"
                                                                        : ""
                                                                    }`
                                                                  ),
                                                                },
                                                                null,
                                                                2
                                                              ),
                                                              t(
                                                                "div",
                                                                ke,
                                                                c(
                                                                  e.__(
                                                                    "Generating..."
                                                                  )
                                                                ),
                                                                1
                                                              ),
                                                            ]))
                                                          : r("", !0),
                                                      ],
                                                      4
                                                    ))
                                                  : (i(),
                                                    a("div", ve, [
                                                      e.Helpers.notUndefined(
                                                        o,
                                                        "title"
                                                      )
                                                        ? (i(),
                                                          a("div", ye, [
                                                            e.Helpers.filenameByFaIcon(
                                                              o.title,
                                                              null
                                                            ) == "lines"
                                                              ? (i(),
                                                                a(
                                                                  f,
                                                                  { key: 0 },
                                                                  [
                                                                    b(
                                                                      c(
                                                                        o.title
                                                                      ),
                                                                      1
                                                                    ),
                                                                  ],
                                                                  64
                                                                ))
                                                              : (i(),
                                                                B(
                                                                  p,
                                                                  {
                                                                    key: 1,
                                                                    title:
                                                                      o.title,
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ["title"]
                                                                )),
                                                          ]))
                                                        : (i(),
                                                          a(
                                                            "div",
                                                            Ie,
                                                            c(o.item),
                                                            1
                                                          )),
                                                    ])),
                                                e.Helpers.notUndefined(
                                                  o,
                                                  "finish_reason"
                                                ) == "length"
                                                  ? (i(),
                                                    a("div", Ce, [
                                                      t(
                                                        "button",
                                                        {
                                                          "data-title":
                                                            e.__("Continue"),
                                                          class:
                                                            "ait-text-white hover:ait-bg-green-800 ait-font-small ait-text-md ait-px-3 ait-py-1.5 ait-my-2 ait-rounded-md dark:hover:ait-bg-[var(--ait-tab-menu-active-bg-color)] ait-items-center ait-justify-center",
                                                        },
                                                        [
                                                          t("div", $e, [
                                                            s(u, {
                                                              icon: "fa-solid fa-play",
                                                              class:
                                                                "ait-h-4 ait-w-4",
                                                            }),
                                                            b(
                                                              " " +
                                                                c(
                                                                  e.__(
                                                                    "Continue generating"
                                                                  )
                                                                ),
                                                              1
                                                            ),
                                                          ]),
                                                        ],
                                                        8,
                                                        Me
                                                      ),
                                                    ]))
                                                  : r("", !0),
                                              ],
                                              10,
                                              Nt
                                            ))
                                          : r("", !0),
                                      ],
                                      64
                                    )
                                  )
                                ),
                                256
                              ))
                            : r("", !0),
                          t("div", Te, [
                            t("button", Ae, [
                              t("div", Se, [
                                Ue,
                                b(" " + c(e.__("Stop generating")), 1),
                              ]),
                            ]),
                          ]),
                        ],
                        10,
                        Dt
                      ))
                    : r("", !0),
                ],
                64
              ))
            : r("", !0),
        ],
        64
      ))
    : r("", !0);
}
const Ee = k(Pt, [["render", Be]]),
  Re = { extends: v },
  Ve = {
    key: 0,
    class: "ait-h-full ait-mb-5 ait-max-w-[372px] ait-min-w-[360px]",
    id: "aitopia-search-container",
  },
  je = {
    class:
      "ait-bg-neutral-100 dark:ait-bg-neutral-900 dark:ait-text-gray-200 ait-rounded-xl ait-px-4 ait-py-3 ait-border ait-border-gray-50 dark:ait-border-neutral-700",
  },
  Fe = { class: "ait-flex" },
  Pe = {
    class: "ait-w-11/12 ait-flex ait-gap-2 xl:ait-gap-3 ait-items-center",
  },
  De = { class: "ait-logo ait-flex ait-w-7/12 ait-place-items-center" },
  Ne = t(
    "div",
    { class: "ait-logo-text" },
    [
      t(
        "div",
        { class: "ait-font-bold ait-pl-1 ait-pr-2 ait-break-keep ait-text-sm" },
        "ChatGPT Sidebar"
      ),
    ],
    -1
  ),
  ze = { class: "ait-credits ait-mr-3 ait-w-5/12" },
  He = {
    type: "button",
    class:
      "ait-text-neutral-500 dark:ait-text-neutral-300 ait-border-2 ait-border-solid ait-border-[var(--ait-tab-menu-active-bg-color)] hover:ait-bg-[var(--ait-tab-menu-active-bg-color)] hover:ait-text-white ait-rounded-lg focus:ait-outline-none ait-text-xs ait-p-2 ait-text-center aitopia-ask-search",
  },
  Le = {
    class:
      "ait-w-1/12 ait-flex ait-grid ait-grid-cols-1 ait-gap-3 ait-items-center",
  },
  Oe = {
    class:
      "ait-switchbar-tab-item ait-gap-3 ait-place-items-end ait-rounded-lg ait-p-2 ait-cursor-pointer arc-edge aitopia-options-search",
  };
function Je(e, l, h, y, w, _) {
  const g = d("svg-logo"),
    p = d("font-awesome-icon"),
    u = d("single-response");
  return this.ai_single
    ? (i(),
      a("div", Ve, [
        t("div", je, [
          t("div", Fe, [
            t("div", Pe, [
              t("div", De, [
                s(g, { name: "logo", className: "ait-w-7 ait-flex-initial" }),
                Ne,
              ]),
              t("div", ze, [t("button", He, c(e.__("Ask ChatGPT")), 1)]),
            ]),
            t("div", Le, [
              t("div", Oe, [
                s(p, { icon: "fa-solid fa-gear", class: "ait-h-4 ait-w-4" }),
              ]),
            ]),
          ]),
          this.ai_extra_key
            ? (i(),
              B(
                u,
                {
                  key: 0,
                  class: "ait-pt-3 ait-pb-2",
                  id: "aitopia-search-result",
                  custom_key: this.ai_extra_key,
                },
                null,
                8,
                ["custom_key"]
              ))
            : r("", !0),
        ]),
      ]))
    : r("", !0);
}
const Ge = k(Re, [["render", Je]]);
U.add(z);
U.add(H);
const Ye = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      AiResponse: L,
      AiSideBar: Ut,
      Credit: O,
      EditToolsModal: J,
      EditToolsUploadModal: G,
      EditToolsUploadModalActionSection: q,
      FileButton: W,
      FontAwesomeIcon: Y,
      HoverPopover: K,
      ImageAiResponse: Ee,
      ImageChatSettings: Q,
      ImageChatSettingsModal: X,
      ImagePreview: Z,
      InnerContentView: tt,
      InnerImagePreview: et,
      InnerReferenceImage: it,
      InviteFriends: at,
      MakeAReview: st,
      MakeAReviewModal: ot,
      Modal: nt,
      Navigation: lt,
      PDFUpload: rt,
      Painter: dt,
      Prompts: ct,
      ReferenceImage: _t,
      SearchResponse: Ge,
      SingleResponse: gt,
      StyleOptionsModal: ht,
      SvgLogo: pt,
      Switchbar: ut,
      UpgradePlanModal: mt,
      UploaderElement: Ft,
      VisionImagePreview: ft,
      VisionToolbar: bt,
      Write: wt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { Ut as A, Ye as C };
//# sourceMappingURL=components.js.map
