export default [
    {
        path: "/",
        component: () => import("../views/index/index-page.vue"),
    },
    {
        name: "tree",
        path: "/tree",
        component: () => import("../components/tree/main-page.vue")
    },
    {
        name: "menu",
        path: "/menu",
        component: () => import("../components/menu/index.vue")
    },
    {
        name: "setting",
        path: "/setting",
        component: () => import("../components/setting/index.vue"),
    },
    {
        name: "split",
        path: "/split",
        component: () => import("../components/split/index.vue"),
    }, {
        name: "speak",
        path: "/speak",
        component: () => import("../components/speak/index.vue"),
    }, {
        name: "vxe-element",
        path: "/vxe-element",
        component: () => import("../components/vxe-element/index.vue"),
    }, {

        name: "new-menu",
        path: "/new-menu",
        component: () => import("../components/new-menu/index.vue"),
    }, {

        name: "screen-adapter",
        path: "/screen-adapter",
        component: () => import("../components/screen-adapter/index.vue"),
    }, {

        name: "line-feed",
        path: "/line-feed",
        component: () => import("../components/line-feed/index.vue"),
    }, {
        name: "picture",
        path: "/picture",
        component: () => import("../components/picture/index.vue"),
    }, {
        name: "button",
        path: "/button",
        component: () => import("../components/button/index.vue"),
    }, {
        name: "pagination",
        path: "/pagination",
        component: () => import("../components/pagination/index.vue"),
    }, {
        name: "table-width",
        path: "/table-width",
        component: () => import("../components/table-width/index.vue"),
    }, {
        name: "progress",
        path: "/progress",
        component: () => import("../components/progress/index.vue"),
    }, {
        name: "merge",
        path: "/merge",
        component: () => import("../components/merge/index.vue"),
    }, {
        name: "btn-input",
        path: "/btn-input",
        component: () => import("../components/btn-input/index.vue"),
    }, {
        name: "css",
        path: "/css",
        component: () => import("../components/css/index.vue"),
    }, {
        name: "listToTree",
        path: "/listToTree",
        component: () => import("../components/css/listToTree.vue"),
    },{

        name: "table-footer",
        path: "/table-footer",
        component: () => import("../components/table-footer/index.vue"),
    },{

        name: "vxe-modal-size",
        path: "/vxe-modal-size",
        component: () => import("../components/vxe-modal-size/index.vue"),
    }
]
