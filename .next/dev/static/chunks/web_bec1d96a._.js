(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/web/sanity.client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "client",
    ()=>client,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
;
const projectId = ("TURBOPACK compile-time value", "r96iva8u");
const dataset = ("TURBOPACK compile-time value", "production");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-03';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SANITY_API_TOKEN
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web/lib/sanity.image.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$sanity$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/sanity.client.ts [app-client] (ecmascript)");
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$sanity$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
function urlFor(source) {
    return builder.image(source);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/lib/sanity.image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-client] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockClosedIcon$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js [app-client] (ecmascript) <export default as LockClosedIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CircleStackIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleStackIcon$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@heroicons/react/24/outline/esm/CircleStackIcon.js [app-client] (ecmascript) <export default as CircleStackIcon>");
'use client';
;
;
;
;
;
;
const TwitterIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TwitterIcon;
const FacebookIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v9h4Z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = FacebookIcon;
const InstagramIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 18.5 9.25a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 18.5 6.75Z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = InstagramIcon;
const LinkedInIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.5 21.5h-5v-13h5v13ZM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5c1.4 0 2.5 1.2 2.5 2.5s-1.1 2.5-2.5 2.5Zm17 15h-5v-6.7c0-1.6-.6-2.7-2-2.7c-1.1 0-1.7.8-2 1.5c-.1.3-.1.6-.1 1v6.9h-5v-13h5v2.3c.8-1.1 2.1-2.6 4.5-2.6c3.3 0 5.5 2.1 5.5 6.6v6.7Z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = LinkedInIcon;
const YouTubeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.94-.262-1.683-1.037-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.893 0 7.605.476c.94.262 1.683 1.037 1.938 2.022ZM10 15.5l6-3.5-6-3.5Z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = YouTubeIcon;
const TikTokIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 448 512",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
        }, void 0, false, {
            fileName: "[project]/web/components/Footer.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = TikTokIcon;
const socialIconMap = {
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    LinkedIn: LinkedInIcon,
    YouTube: YouTubeIcon,
    TikTok: TikTokIcon
};
function Footer({ data }) {
    const { mainTitle, logo, tagline, linkColumns, securityNotice, copyrightText, privacyPolicyText, privacyPolicyLink, termsOfServiceText, termsOfServiceLink, socialLinks } = data;
    // We define the animation keyframes here since tailwind.config.js is not available.
    const animationStyle = `
    @keyframes gradient {
      0% { background-position: 0% 50% }
      100% { background-position: 100% 50% }
    }
    .animate-gradient-text {
      background-size: 400% 400%;
      animation: gradient 4s linear infinite alternate;
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].footer, {
        className: "bg-black text-gray-400",
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: animationStyle
            }, void 0, false, {
                fileName: "[project]/web/components/Footer.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center gap-6",
                                children: [
                                    logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(logo).width(200).url(),
                                        alt: "FlowState Meta Logo",
                                        width: 160,
                                        height: 50,
                                        className: "h-12 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/Footer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-6",
                                        children: socialLinks?.map((social)=>{
                                            const Icon = socialIconMap[social.platform];
                                            return Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: social.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-gray-400 hover:text-white",
                                                whileHover: {
                                                    scale: 1.2,
                                                    y: -2
                                                },
                                                transition: {
                                                    duration: 0.2
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: social.platform
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/components/Footer.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/components/Footer.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, social._key, true, {
                                                fileName: "[project]/web/components/Footer.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this) : null;
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/Footer.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/components/Footer.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            mainTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "animate-gradient-text text-4xl md:text-5xl font-extrabold text-center md:text-right bg-gradient-to-r from-indigo-900 via-fuchsia-500 to-indigo-900 bg-clip-text text-transparent",
                                children: mainTitle
                            }, void 0, false, {
                                fileName: "[project]/web/components/Footer.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web/components/Footer.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-between gap-8",
                            children: [
                                linkColumns?.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold text-gray-200 tracking-wider uppercase",
                                                children: column.title
                                            }, void 0, false, {
                                                fileName: "[project]/web/components/Footer.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                role: "list",
                                                className: "mt-4 space-y-4",
                                                children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: link.url,
                                                            className: "text-base text-gray-400 hover:text-white transition-colors",
                                                            children: link.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, link._key, false, {
                                                        fileName: "[project]/web/components/Footer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/web/components/Footer.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, column._key, true, {
                                        fileName: "[project]/web/components/Footer.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-semibold text-gray-200 tracking-wider uppercase",
                                            children: "Platform Security"
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/Footer.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-3 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                                            className: "h-5 w-5 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 76
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "SSL Secured Communication"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 130
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/web/components/Footer.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockClosedIcon$3e$__["LockClosedIcon"], {
                                                            className: "h-5 w-5 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 76
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "End-to-End Data Encryption"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 129
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/web/components/Footer.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CircleStackIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleStackIcon$3e$__["CircleStackIcon"], {
                                                            className: "h-5 w-5 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 76
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Responsible Cookie Management"
                                                        }, void 0, false, {
                                                            fileName: "[project]/web/components/Footer.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 130
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/web/components/Footer.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web/components/Footer.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web/components/Footer.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/Footer.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/web/components/Footer.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-gray-400 text-center md:order-1 md:text-left",
                                children: [
                                    "© ",
                                    copyrightText || '2025 FlowState Meta. All rights reserved.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/components/Footer.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-6 mt-4 md:mt-0 md:order-2",
                                children: [
                                    privacyPolicyText && privacyPolicyLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: privacyPolicyLink,
                                        className: "text-base hover:text-white transition-colors",
                                        children: privacyPolicyText
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/Footer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    termsOfServiceText && termsOfServiceLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: termsOfServiceLink,
                                        className: "text-base hover:text-white transition-colors",
                                        children: termsOfServiceText
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/Footer.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/components/Footer.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            securityNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-xs text-gray-500 text-center md:mt-0 md:order-3 md:text-right",
                                children: securityNotice
                            }, void 0, false, {
                                fileName: "[project]/web/components/Footer.tsx",
                                lineNumber: 186,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web/components/Footer.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/web/components/Footer.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web/components/Footer.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c6 = Footer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "TwitterIcon");
__turbopack_context__.k.register(_c1, "FacebookIcon");
__turbopack_context__.k.register(_c2, "InstagramIcon");
__turbopack_context__.k.register(_c3, "LinkedInIcon");
__turbopack_context__.k.register(_c4, "YouTubeIcon");
__turbopack_context__.k.register(_c5, "TikTokIcon");
__turbopack_context__.k.register(_c6, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web/components/TopNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/lib/sanity.image.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function DynamicHomeLinkComponent({ homeLink, children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const dynamicHomeLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DynamicHomeLinkComponent.useMemo[dynamicHomeLink]": ()=>{
            const cameFromLogin = searchParams.get('showLogin') === 'true';
            const cameFromHub = searchParams.get('from') === 'private';
            const onPrivateHome = pathname === '/privatehome';
            const onEducationHub = pathname.startsWith('/educationHub');
            const onCommunityPage = pathname === '/community';
            if (cameFromLogin || cameFromHub || onPrivateHome || onEducationHub || onCommunityPage) {
                return '/privatehome';
            }
            return homeLink || '/home';
        }
    }["DynamicHomeLinkComponent.useMemo[dynamicHomeLink]"], [
        pathname,
        searchParams,
        homeLink
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children(dynamicHomeLink)
    }, void 0, false);
}
_s(DynamicHomeLinkComponent, "J2BwWHLMo7credCJePHFF5d5qJI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DynamicHomeLinkComponent;
function TopNavigation({ data }) {
    _s1();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isLoggedIn = status === 'authenticated';
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!data) {
        return null;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopNavigation.useEffect": ()=>{
            const handleScroll = {
                "TopNavigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["TopNavigation.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "TopNavigation.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["TopNavigation.useEffect"];
        }
    }["TopNavigation.useEffect"], []);
    const { logo, homeLink, navLinks, loginText, loginLink, signUpText, signUpLink, contactText, contactLink } = data;
    const isJoinPage = pathname === '/join';
    const isSignUpPage = pathname === '/signup';
    const isQuestionnairePage = pathname === '/questionnaire';
    const isEducationHubPage = pathname.startsWith('/educationHub');
    const isCommunityPage = pathname === '/community';
    const isSpecialPage = isSignUpPage || isQuestionnairePage || pathname === '/post-questionnaire' || pathname === '/offregester' || pathname === '/privatehome' || isEducationHubPage || isCommunityPage || isJoinPage;
    const isHomePage = pathname === '/home' || pathname === '/' || pathname === '/privatehome';
    const filteredNavLinks = isHomePage ? navLinks?.filter((link)=>link.title.toLowerCase() !== 'home') : navLinks;
    const isBgTransparent = isJoinPage || !isScrolled;
    const useDarkText = isScrolled || isSignUpPage || isEducationHubPage || pathname === '/post-questionnaire' || pathname === '/offregester' || isCommunityPage || pathname === '/marketplace';
    const getContactLink = ()=>{
        if (pathname === '/privatehome') {
            return '/join?tab=contact&showLogin=true';
        }
        return isEducationHubPage || isCommunityPage ? '/join?tab=contact&from=private' : contactLink || '/join?tab=contact';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${isBgTransparent ? 'bg-transparent' : 'bg-[#C1B59E] shadow-lg'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                children: !isBgTransparent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full h-full",
                    style: {
                        background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                        backgroundSize: '200% 100%'
                    },
                    animate: {
                        backgroundPosition: [
                            '200% 0%',
                            '-200% 0%'
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear'
                    }
                }, void 0, false, {
                    fileName: "[project]/web/components/TopNavigation.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/web/components/TopNavigation.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: homeLink || '/home',
                                className: "flex items-center group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        y: [
                                            -1,
                                            1,
                                            -1
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$image$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["urlFor"])(logo).width(200).url(),
                                        alt: "Logo",
                                        width: 180,
                                        height: 60,
                                        className: "h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/web/components/TopNavigation.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/web/components/TopNavigation.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        !isJoinPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `hidden md:flex flex-1 items-center ${isSpecialPage ? 'justify-end' : 'justify-between'} ml-8`,
                            children: [
                                !isSpecialPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative group",
                                    animate: {
                                        scale: [
                                            1,
                                            1.02,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "search",
                                                placeholder: "Search...",
                                                className: `rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/50 w-56 transition-all duration-300 focus:w-72 ${useDarkText ? 'bg-white/20 text-black placeholder-gray-700 group-hover:bg-white/40 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400' : 'bg-white/10 text-white placeholder-gray-300 group-hover:bg-white/20'}`
                                            }, void 0, false, {
                                                fileName: "[project]/web/components/TopNavigation.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: `w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 ${useDarkText ? 'text-gray-700 dark:text-gray-400' : 'text-gray-300'}`,
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/web/components/TopNavigation.tsx",
                                                lineNumber: 155,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex items-center space-x-8",
                                            children: [
                                                filteredNavLinks?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.link,
                                                        className: `font-medium transition-colors ${useDarkText ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-300'}`,
                                                        children: item.title
                                                    }, item._key, false, {
                                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/marketplace",
                                                    className: `font-medium transition-colors ${useDarkText ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-300'}`,
                                                    children: "Marketplace"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web/components/TopNavigation.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                            callbackUrl: '/privatehome'
                                                        }),
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this) : loginText && pathname === '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `${loginLink || '#'}&showLogin=true`,
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: loginText
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this),
                                                isLoggedIn && !isCommunityPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/community",
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: "Community"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                isLoggedIn && pathname === '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/vault",
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: "Vault"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                isLoggedIn ? pathname !== '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/privatehome",
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: "Private Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this) : signUpText && !isSpecialPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: signUpLink || '#',
                                                    className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                    children: signUpText
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 23
                                                }, this),
                                                isSpecialPage && !isHomePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 41
                                                    }, void 0),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicHomeLinkComponent, {
                                                        homeLink: homeLink,
                                                        children: (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: link,
                                                                className: `px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/web/components/TopNavigation.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 27
                                                            }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                contactText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: getContactLink(),
                                                    className: `px-5 py-2 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 ${useDarkText ? 'border-black text-black hover:bg-black hover:text-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700' : 'border-white text-white hover:bg-white hover:text-black'}`,
                                                    children: contactText
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/web/components/TopNavigation.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/TopNavigation.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        isJoinPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 238,
                                    columnNumber: 35
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicHomeLinkComponent, {
                                    homeLink: homeLink,
                                    children: (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link,
                                            className: `px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full font-semibold transition-transform duration-300 hover:scale-105 ${useDarkText ? 'bg-black text-white hover:bg-gray-800 dark:bg-gray-700' : 'bg-white text-black hover:bg-gray-200'}`,
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/TopNavigation.tsx",
                                            lineNumber: 241,
                                            columnNumber: 21
                                        }, this)
                                }, void 0, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/web/components/TopNavigation.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/web/components/TopNavigation.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        !isJoinPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: `relative z-[101] focus:outline-none ${useDarkText ? 'text-gray-800 hover:text-black dark:text-white' : 'text-white hover:text-gray-300'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 250,
                                        columnNumber: 129
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/web/components/TopNavigation.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/web/components/TopNavigation.tsx",
                            lineNumber: 248,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web/components/TopNavigation.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/web/components/TopNavigation.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-[100] bg-[#C1B59E] md:hidden",
                    id: "mobile-menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col items-center justify-center space-y-6 pt-24 pb-8 px-4 overflow-y-auto",
                        children: [
                            filteredNavLinks?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.link,
                                    onClick: ()=>setIsMenuOpen(false),
                                    className: `block rounded-lg px-4 py-2 text-2xl font-medium transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === item.link ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white scale-105' : 'text-gray-800 dark:text-gray-300'} `,
                                    children: item.title
                                }, item._key, false, {
                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                onClick: ()=>setIsMenuOpen(false),
                                className: `block rounded-lg px-4 py-2 text-2xl font-medium transition-all duration-300 hover:text-black dark:hover:text-white ${pathname === '/marketplace' ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white scale-105' : 'text-gray-800 dark:text-gray-300'} `,
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/web/components/TopNavigation.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center space-y-6",
                                children: [
                                    isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                callbackUrl: '/privatehome'
                                            });
                                            setIsMenuOpen(false);
                                        },
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 293,
                                        columnNumber: 19
                                    }, this) : loginText && pathname === '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${loginLink || '#'}&showLogin=true`,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: loginText
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 304,
                                        columnNumber: 21
                                    }, this),
                                    isLoggedIn && !isCommunityPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/community",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: "Community"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this),
                                    isLoggedIn && pathname === '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/vault",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: "Vault"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this),
                                    isLoggedIn ? pathname !== '/privatehome' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privatehome",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: "Private Home"
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 324,
                                        columnNumber: 21
                                    }, this) : signUpText && !isSpecialPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: signUpLink || '#',
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                        children: signUpText
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 330,
                                        columnNumber: 21
                                    }, this),
                                    isSpecialPage && !isHomePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/web/components/TopNavigation.tsx",
                                            lineNumber: 337,
                                            columnNumber: 39
                                        }, void 0),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicHomeLinkComponent, {
                                            homeLink: homeLink,
                                            children: (link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link,
                                                    onClick: ()=>setIsMenuOpen(false),
                                                    className: "px-5 py-2 rounded-full font-semibold transition-transform duration-300 hover:scale-105 bg-black text-white hover:bg-gray-800 dark:bg-gray-700",
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/web/components/TopNavigation.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 25
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/TopNavigation.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 337,
                                        columnNumber: 19
                                    }, this),
                                    contactText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: getContactLink(),
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "px-5 py-2 font-semibold rounded-lg border-2 shadow-sm transition-all duration-300 border-black text-black hover:bg-black hover:text-white dark:border-gray-600 dark:text-white dark:hover:bg-gray-700",
                                        children: contactText
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/TopNavigation.tsx",
                                        lineNumber: 347,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/web/components/TopNavigation.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/web/components/TopNavigation.tsx",
                        lineNumber: 267,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/web/components/TopNavigation.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/web/components/TopNavigation.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/web/components/TopNavigation.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s1(TopNavigation, "FaoAGTC5CPje29vsAE+/Kj34YPY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = TopNavigation;
var _c, _c1;
__turbopack_context__.k.register(_c, "DynamicHomeLinkComponent");
__turbopack_context__.k.register(_c1, "TopNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/web/app/actions/data:d08325 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateEmail",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4035eb581071a67c6191a5a2a65c775c0109d3ff5f":"validateEmail"},"web/app/actions/validateEmail.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4035eb581071a67c6191a5a2a65c775c0109d3ff5f", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "validateEmail");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdmFsaWRhdGVFbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHN0cmluZyk6IFByb21pc2U8eyBpc1ZhbGlkOiBib29sZWFuOyBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICBpZiAoIWVtYWlsKSB7XG4gICAgcmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIG1lc3NhZ2U6ICdFbWFpbCBpcyByZXF1aXJlZC4nIH1cbiAgfVxuXG4gIC8vIEJhc2ljIGZvcm1hdCB2YWxpZGF0aW9uXG4gIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskL1xuICBpZiAoIWVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcbiAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGZvcm1hdC4nIH1cbiAgfVxuXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkVNQUlMX1ZBTElEQVRJT05fQVBJX0tFWVxuICBpZiAoIWFwaUtleSkge1xuICAgIGNvbnNvbGUud2FybignRW1haWwgdmFsaWRhdGlvbiBBUEkga2V5IGlzIG5vdCBzZXQuIFNraXBwaW5nIHJlYWwtdGltZSBjaGVjay4nKVxuICAgIC8vIElmIG5vIEFQSSBrZXkgaXMgc2V0LCB3ZSdsbCBqdXN0IGFjY2VwdCB0aGUgZm9ybWF0IGFzIHZhbGlkLlxuICAgIHJldHVybiB7IGlzVmFsaWQ6IHRydWUsIG1lc3NhZ2U6ICcnIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9lbWFpbHJlcHV0YXRpb24uYWJzdHJhY3RhcGkuY29tL3YxLz9hcGlfa2V5PSR7YXBpS2V5fSZlbWFpbD0ke2VtYWlsfWApXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIFRoZSBFbWFpbCBSZXB1dGF0aW9uIEFQSSB1c2VzIGEgJ3F1YWxpdHlfc2NvcmUnLiBXZSdsbCBjb25zaWRlciA+IDAuNyBhcyB2YWxpZC5cbiAgICAvLyBJdCBhbHNvIHJldHVybnMgYW4gZXJyb3Igb2JqZWN0IGlmIHRoZSBrZXkgaXMgaW52YWxpZC5cbiAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRW1haWwgdmFsaWRhdGlvbiBBUEkgZXJyb3I6JywgZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiAnQ291bGQgbm90IHZhbGlkYXRlIGVtYWlsLiBBUEkgZXJyb3IuJyB9O1xuICAgIH1cblxuICAgIGlmIChkYXRhLmVtYWlsX3F1YWxpdHk/LnNjb3JlICYmIHBhcnNlRmxvYXQoZGF0YS5lbWFpbF9xdWFsaXR5LnNjb3JlKSA+IDAuNykge1xuICAgICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgbWVzc2FnZTogJ1RoaXMgZW1haWwgYWRkcmVzcyBkb2VzIG5vdCBhcHBlYXIgdG8gZXhpc3QuJyB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0VtYWlsIHZhbGlkYXRpb24gQVBJIGVycm9yOicsIGVycm9yKVxuICAgIC8vIEluIGNhc2Ugb2YgYW4gQVBJIGVycm9yLCB3ZSdsbCBkZWZhdWx0IHRvIGFsbG93aW5nIHRoZSBzdWJtaXNzaW9uIHRvIHByb2NlZWQuXG4gICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSwgbWVzc2FnZTogJycgfVxuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0FFc0IsMExBQUEifQ==
}),
"[project]/web/app/actions/data:3cc4f6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateUsername",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ccf7069698c7e8c16b701407cadec5e999f94ba7":"validateUsername"},"web/app/actions/validateUsername.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ccf7069698c7e8c16b701407cadec5e999f94ba7", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "validateUsername");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdmFsaWRhdGVVc2VybmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnQC9zYW5pdHkuY2xpZW50J1xuaW1wb3J0IHsgZ3JvcSB9IGZyb20gJ25leHQtc2FuaXR5J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gQ2hlY2sgaWYgYSB1c2VyIHdpdGggdGhpcyB1c2VybmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwidXNlclwiICYmIHVzZXJuYW1lID09ICR1c2VybmFtZV1bMF1gXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyB1c2VybmFtZSB9KVxuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiAnVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLicgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGlzVmFsaWQ6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VzZXJuYW1lIHZhbGlkYXRpb24gZXJyb3I6JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgaXNWYWxpZDogdHJ1ZSB9IC8vIEZhaWwgb3BlbiB0byBhdm9pZCBibG9ja2luZyByZWdpc3RyYXRpb24gb24gQVBJIGVycm9yXG4gIH1cbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQUtzQiw2TEFBQSJ9
}),
"[project]/web/app/actions/data:9a161f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerUser",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409be50323aacaad76ff9d89c326937530b1d9d948":"registerUser"},"web/app/actions/registerUser.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409be50323aacaad76ff9d89c326937530b1d9d948", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "registerUser");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVnaXN0ZXJVc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tICdAL2xpYi9zYW5pdHkuc2VydmVyJ1xuaW1wb3J0IHsgZ3JvcSB9IGZyb20gJ25leHQtc2FuaXR5J1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuaW50ZXJmYWNlIFJlZ2lzdGVyVXNlclBhcmFtcyB7XG4gIG5hbWU6IHN0cmluZ1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGVtYWlsOiBzdHJpbmdcbiAgbnVtYmVyOiBzdHJpbmdcbiAgcGFzc3dvcmQ6IHN0cmluZ1xuICBjb25maXJtUGFzc3dvcmQ/OiBzdHJpbmdcbiAgcXVlc3Rpb25uYWlyZUFuc3dlcnM/OiBvYmplY3Q7XG4gIC8vIEluIGEgcmVhbCBhcHAsIHlvdSB3b3VsZCBoYW5kbGUgdGhlIHBhc3N3b3JkIHNlY3VyZWx5IGFuZCBub3QgcGFzcyBpdCBhcm91bmQuXG4gIC8vIEl0IHdvdWxkIGJlIHNlbnQgZGlyZWN0bHkgdG8geW91ciBhdXRoIHByb3ZpZGVyLlxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKGZvcm1EYXRhOiBSZWdpc3RlclVzZXJQYXJhbXMpIHtcbiAgY29uc3QgeyBuYW1lLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkLCBxdWVzdGlvbm5haXJlQW5zd2VycyB9ID0gZm9ybURhdGFcblxuICBpZiAoIW5hbWUgfHwgIXVzZXJuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ01pc3NpbmcgcmVxdWlyZWQgcmVnaXN0cmF0aW9uIGZpZWxkcy4nIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gLS0tIENoZWNrIGlmIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzIC0tLVxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChcbiAgICAgIGdyb3FgKltfdHlwZSA9PSBcInVzZXJcIiAmJiB1c2VybmFtZSA9PSAkdXNlcm5hbWVdWzBdYCxcbiAgICAgIHsgdXNlcm5hbWUgfVxuICAgIClcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1VzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uIFBsZWFzZSBjaG9vc2UgYW5vdGhlci4nIH1cbiAgICB9XG4gICAgLy8gSGFzaCB0aGUgcGFzc3dvcmQgZm9yIHNlY3VyaXR5XG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApXG4gICAgLy8gQ3JlYXRlIHRoZSBuZXcgdXNlciBkb2N1bWVudFxuICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBzYW5pdHlDbGllbnQuY3JlYXRlKHtcbiAgICAgIF90eXBlOiAndXNlcicsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgaGFzaGVkUGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgICAgcXVlc3Rpb25uYWlyZUFuc3dlcnM6IEpTT04uc3RyaW5naWZ5KHF1ZXN0aW9ubmFpcmVBbnN3ZXJzLCBudWxsLCAyKSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgbWVzc2FnZTogJ1JlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsISBSZWRpcmVjdGluZy4uLicsXG4gICAgICB1c2VySWQ6IG5ld1VzZXIuX2lkLCAvLyBSZXR1cm4gdGhlIG5ldyB1c2VyIElEIGZvciB0aGUgbmV4dCBzdGVwXG4gICAgICByZWRpcmVjdDogJy9wcml2YXRlaG9tZScsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHVzZXIgaW4gU2FuaXR5OicsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCBkdXJpbmcgcmVnaXN0cmF0aW9uLicgfVxuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnU0FrQnNCLHlMQUFBIn0=
}),
"[project]/web/app/actions/data:720341 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markUserAsPaid",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7811a613549a81877dc0a9842b7f44fc269c2456bd":"markUserAsPaid"},"web/app/actions/markUserAsPaid.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7811a613549a81877dc0a9842b7f44fc269c2456bd", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markUserAsPaid");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWFya1VzZXJBc1BhaWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXG5cbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ25leHQtc2FuaXR5J1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxuICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCxcbiAgYXBpVmVyc2lvbjogJzIwMjQtMDEtMDEnLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9XUklURV9UT0tFTiB8fCBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxuICB1c2VDZG46IGZhbHNlLFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtVc2VyQXNQYWlkKHJlZmVycmFsQ29kZTogc3RyaW5nLCB1c2VyRGF0YTogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmc7IHBob25lTnVtYmVyPzogc3RyaW5nIH0sIHF1ZXN0aW9ubmFpcmVBbnN3ZXJzPzogYW55LCBwZW5kaW5nVXNlcklkPzogc3RyaW5nKSB7XG4gIGlmICghcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9XUklURV9UT0tFTiAmJiAhcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1NBTklUWV9BUElfV1JJVEVfVE9LRU4gaXMgbWlzc2luZy4gQ2Fubm90IHBlcmZvcm0gd3JpdGUgb3BlcmF0aW9ucy4nKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NlcnZlciBjb25maWd1cmF0aW9uIGVycm9yOiBNaXNzaW5nIEFQSSBUb2tlbicgfVxuICB9XG5cbiAgaWYgKCFyZWZlcnJhbENvZGUpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1JlZmVycmFsIGNvZGUgaXMgcmVxdWlyZWQnIH1cblxuICB0cnkge1xuICAgIC8vIDEuIEZpbmQgdGhlIHJlZmVycmFsIGNvZGUgZG9jdW1lbnRcbiAgICBjb25zdCByZWZlcnJhbCA9IGF3YWl0IGNsaWVudC5mZXRjaChgKltfdHlwZSA9PSBcInJlZmVycmFsQ29kZVwiICYmIGNvZGUgPT0gJGNvZGVdWzBdYCwgeyBjb2RlOiByZWZlcnJhbENvZGUgfSlcbiAgICBcbiAgICBpZiAoIXJlZmVycmFsKSB7XG4gICAgICAvLyBJZiBjb2RlIGlzIGludmFsaWQsIHdlIG1pZ2h0IHN0aWxsIHdhbnQgdG8gcmVnaXN0ZXIgdGhlIHVzZXIsIGp1c3Qgbm90IGxpbmsgdGhlbS5cbiAgICAgIC8vIEJ1dCBmb3IgdGhpcyBsb2dpYywgd2UgcmV0dXJuIGVycm9yIG9yIGhhbmRsZSBncmFjZWZ1bGx5LlxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCByZWZlcnJhbCBjb2RlJyB9XG4gICAgfVxuXG4gICAgLy8gMi4gQ2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0cyAoYnkgSUQgZmlyc3QsIHRoZW4gZW1haWwpIHRvIGF2b2lkIGR1cGxpY2F0ZXMuXG4gICAgbGV0IGV4aXN0aW5nVXNlciA9IG51bGxcbiAgICBpZiAocGVuZGluZ1VzZXJJZCkge1xuICAgICAgZXhpc3RpbmdVc2VyID0gYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwidXNlclwiICYmIF9pZCA9PSAkaWRdWzBdYCwgeyBpZDogcGVuZGluZ1VzZXJJZCB9KVxuICAgIH1cbiAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgZXhpc3RpbmdVc2VyID0gYXdhaXQgY2xpZW50LmZldGNoKGAqW190eXBlID09IFwidXNlclwiICYmIGVtYWlsID09ICRlbWFpbF1bMF1gLCB7IGVtYWlsOiB1c2VyRGF0YS5lbWFpbCB9KVxuICAgIH1cblxuICAgIGxldCB1c2VySWQgPSBleGlzdGluZ1VzZXI/Ll9pZFxuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHVzZXIgdG8gcHJlbWl1bVxuICAgICAgYXdhaXQgY2xpZW50LnBhdGNoKGV4aXN0aW5nVXNlci5faWQpLnNldCh7IGlzUHJlbWl1bTogdHJ1ZSwgLi4udXNlckRhdGEsIHJlZ2lzdGVyZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIH0pLmNvbW1pdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSBuZXcgdXNlciBpZiB0aGV5IHNraXBwZWQgdGhlIHF1ZXN0aW9ubmFpcmUgb3IgdXNlZCBhIGRpZmZlcmVudCBlbWFpbFxuICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGNsaWVudC5jcmVhdGUoe1xuICAgICAgICBfdHlwZTogJ3VzZXInLFxuICAgICAgICAuLi51c2VyRGF0YSxcbiAgICAgICAgaXNQcmVtaXVtOiB0cnVlLFxuICAgICAgICBxdWVzdGlvbm5haXJlQW5zd2VyczogcXVlc3Rpb25uYWlyZUFuc3dlcnMgPyBKU09OLnN0cmluZ2lmeShxdWVzdGlvbm5haXJlQW5zd2VycykgOiB1bmRlZmluZWQsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICByZWdpc3RlcmVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIH0pXG4gICAgICB1c2VySWQgPSBuZXdVc2VyLl9pZFxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBpbiB0aGUgcGVuZGluZyBsaXN0XG4gICAgY29uc3QgaXNQZW5kaW5nID0gcmVmZXJyYWwucGVuZGluZ1VzZXJzPy5zb21lKChyZWY6IGFueSkgPT4gcmVmLl9yZWYgPT09IHVzZXJJZClcblxuICAgIC8vIDMuIExpbmsgVXNlciB0byB0aGUgUmVmZXJyYWwgQ29kZSdzIFwicGFpZFVzZXJzXCIgbGlzdFxuICAgIGxldCBwYXRjaCA9IGNsaWVudFxuICAgICAgLnBhdGNoKHJlZmVycmFsLl9pZClcbiAgICAgIC5zZXRJZk1pc3NpbmcoeyBwYWlkVXNlcnM6IFtdLCBwYWlkQ291bnQ6IDAgfSlcbiAgICAgIC5hcHBlbmQoJ3BhaWRVc2VycycsIFt7IFxuICAgICAgICBfdHlwZTogJ3JlZmVyZW5jZScsIFxuICAgICAgICBfcmVmOiB1c2VySWQsXG4gICAgICAgIF9rZXk6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSlcbiAgICAgIH1dKVxuICAgICAgLmluYyh7IHBhaWRDb3VudDogMSB9KVxuXG4gICAgLy8gSWYgdGhleSB3ZXJlIHBlbmRpbmcsIHJlbW92ZSB0aGVtIGZyb20gcGVuZGluZyBsaXN0IGFuZCBkZWNyZW1lbnQgY291bnRcbiAgICBpZiAoaXNQZW5kaW5nKSB7XG4gICAgICBwYXRjaCA9IHBhdGNoXG4gICAgICAgIC51bnNldChbYHBlbmRpbmdVc2Vyc1tfcmVmID09IFwiJHt1c2VySWR9XCJdYF0pXG4gICAgICAgIC5kZWMoeyBwZW5kaW5nQ291bnQ6IDEgfSlcbiAgICB9XG5cbiAgICBhd2FpdCBwYXRjaC5jb21taXQoeyBhdXRvR2VuZXJhdGVBcnJheUtleXM6IHRydWUgfSlcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIG1hcmtVc2VyQXNQYWlkOicsIGVycm9yKVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byByZWdpc3RlciBwYWlkIHVzZXInIH1cbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBWXNCLDJMQUFBIn0=
}),
"[project]/web/components/OfficialRegisterForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfficialRegisterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$d08325__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/web/app/actions/data:d08325 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$3cc4f6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/web/app/actions/data:3cc4f6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$9a161f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/web/app/actions/data:9a161f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$720341__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/web/app/actions/data:720341 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function OfficialRegisterForm(props) {
    _s();
    const { heading, description, namePlaceholder, usernamePlaceholder, emailPlaceholder, numberPlaceholder, passwordPlaceholder, confirmPasswordPlaceholder, buttonText } = props;
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        username: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [usernameError, setUsernameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEmailValidating, setIsEmailValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUsernameValidating, setIsUsernameValidating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [questionnaireAnswers, setQuestionnaireAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficialRegisterForm.useEffect": ()=>{
            // On component mount, retrieve the questionnaire answers from localStorage
            const savedAnswers = localStorage.getItem('questionnaire_answers');
            if (savedAnswers) {
                const parsedAnswers = JSON.parse(savedAnswers);
                setQuestionnaireAnswers(parsedAnswers);
                // Find the name from the answers and pre-fill the form.
                // This assumes the name is the first answer and number is the second,
                // which is a reasonable assumption for the questionnaire flow.
                const values = Object.values(parsedAnswers);
                const nameFromAnswers = values[0];
                const numberFromAnswers = values[1];
                if (nameFromAnswers || numberFromAnswers) {
                    setFormData({
                        "OfficialRegisterForm.useEffect": (prev)=>({
                                ...prev,
                                name: nameFromAnswers || prev.name,
                                number: numberFromAnswers || prev.number
                            })
                    }["OfficialRegisterForm.useEffect"]);
                }
            }
        }
    }["OfficialRegisterForm.useEffect"], []);
    // Debounced email validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficialRegisterForm.useEffect": ()=>{
            // Don't validate if the email is empty
            if (!formData.email) {
                setEmailError(null);
                return;
            }
            setIsEmailValidating(true);
            const handler = setTimeout({
                "OfficialRegisterForm.useEffect.handler": async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$d08325__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateEmail"])(formData.email);
                    if (!result.isValid) {
                        setEmailError(result.message ?? 'Invalid email address.');
                    } else {
                        setEmailError(null);
                    }
                    setIsEmailValidating(false);
                }
            }["OfficialRegisterForm.useEffect.handler"], 1000); // Wait 1 second after user stops typing
            return ({
                "OfficialRegisterForm.useEffect": ()=>clearTimeout(handler)
            })["OfficialRegisterForm.useEffect"];
        }
    }["OfficialRegisterForm.useEffect"], [
        formData.email
    ]);
    // Debounced username validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfficialRegisterForm.useEffect": ()=>{
            if (!formData.username) {
                setUsernameError(null);
                return;
            }
            // Immediate check for spaces
            if (/\s/.test(formData.username)) {
                setUsernameError('Username cannot contain spaces.');
                return;
            }
            setIsUsernameValidating(true);
            const handler = setTimeout({
                "OfficialRegisterForm.useEffect.handler": async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$3cc4f6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["validateUsername"])(formData.username);
                    if (!result.isValid) {
                        setUsernameError(result.message ?? 'Invalid username.');
                    } else {
                        setUsernameError(null);
                    }
                    setIsUsernameValidating(false);
                }
            }["OfficialRegisterForm.useEffect.handler"], 1000);
            return ({
                "OfficialRegisterForm.useEffect": ()=>clearTimeout(handler)
            })["OfficialRegisterForm.useEffect"];
        }
    }["OfficialRegisterForm.useEffect"], [
        formData.username
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: name === 'number' ? value.replace(/[^0-9]/g, '') : value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Validation
        if (!formData.name || !formData.username || !formData.email || !formData.number || !formData.password) {
            setError('All fields are required.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        if (emailError) {
            setError('Please fix the errors before submitting.');
            return;
        }
        if (usernameError || /\s/.test(formData.username)) {
            setError('Username cannot contain spaces.');
            return;
        }
        // Combine form data with questionnaire answers
        const submissionData = {
            ...formData,
            questionnaireAnswers: questionnaireAnswers ?? undefined
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$9a161f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["registerUser"])(submissionData);
        if (result && result.success) {
            // Now, mark the user as paid for referral tracking using the newly created user ID
            const referralCode = localStorage.getItem('referral_code');
            const pendingUserId = localStorage.getItem('pending_user_id');
            if (referralCode) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$data$3a$720341__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markUserAsPaid"])(referralCode, {
                    name: formData.name,
                    email: formData.email,
                    phoneNumber: formData.number
                }, questionnaireAnswers, pendingUserId || undefined);
                // Clear referral data
                localStorage.removeItem('referral_code');
                localStorage.removeItem('questionnaire_answers');
                localStorage.removeItem('pending_user_id');
            }
            setSuccessMessage(result.message ?? 'Registration successful! Redirecting...');
            // Redirect after a delay to show the success message
            setTimeout(()=>{
                window.location.href = result.redirect || '/privatehome';
            }, 1500);
        } else {
            // Handle potential errors from the server action
            setError(result?.message ?? 'An unexpected error occurred.');
            setSuccessMessage(null);
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex flex-col items-center justify-center flex-grow text-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl sm:text-5xl font-extrabold text-gray-900",
                    children: heading
                }, void 0, false, {
                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-lg text-gray-700 leading-relaxed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "mt-8 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "name",
                            placeholder: namePlaceholder || 'Your Name',
                            value: formData.name,
                            onChange: handleChange,
                            readOnly: true,
                            className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black bg-gray-100 cursor-not-allowed text-sm sm:text-base"
                        }, void 0, false, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "username",
                                    placeholder: usernamePlaceholder || 'Username',
                                    value: formData.username,
                                    onChange: handleChange,
                                    className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black text-sm sm:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-left pl-1 min-h-[20px]",
                                    children: [
                                        isUsernameValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Checking availability..."
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                            lineNumber: 232,
                                            columnNumber: 40
                                        }, this),
                                        usernameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 font-medium",
                                            children: usernameError
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                            lineNumber: 233,
                                            columnNumber: 33
                                        }, this),
                                        !usernameError && !isUsernameValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: "No spaces allowed. This will be your unique ID."
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                            lineNumber: 234,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: emailPlaceholder || 'Your Email',
                                    value: formData.email,
                                    onChange: handleChange,
                                    className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black text-sm sm:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-left pl-1 min-h-[20px]",
                                    children: [
                                        isEmailValidating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Validating email..."
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                            lineNumber: 247,
                                            columnNumber: 37
                                        }, this),
                                        emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 font-medium",
                                            children: emailError
                                        }, void 0, false, {
                                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                            lineNumber: 248,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            name: "number",
                            placeholder: numberPlaceholder || 'Your Number',
                            value: formData.number,
                            onChange: handleChange,
                            readOnly: true,
                            className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black bg-gray-100 cursor-not-allowed text-sm sm:text-base"
                        }, void 0, false, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: showPassword ? 'text' : 'password',
                                    name: "password",
                                    placeholder: passwordPlaceholder || 'Create a Password',
                                    value: formData.password,
                                    onChange: handleChange,
                                    className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black text-sm sm:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-left pl-1 min-h-[20px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "Must be at least 8 characters long."
                                    }, void 0, false, {
                                        fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: showPassword ? 'text' : 'password',
                                name: "confirmPassword",
                                placeholder: confirmPasswordPlaceholder || 'Confirm Your Password',
                                value: formData.confirmPassword,
                                onChange: handleChange,
                                className: "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none text-black text-sm sm:text-base"
                            }, void 0, false, {
                                fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-start ml-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "show-password-checkbox",
                                    type: "checkbox",
                                    checked: showPassword,
                                    onChange: ()=>setShowPassword(!showPassword),
                                    className: "w-4 h-4 rounded border-gray-300 bg-white focus:ring-gray-500 cursor-pointer accent-black"
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "show-password-checkbox",
                                    className: "ml-2 text-sm text-gray-600 cursor-pointer select-none",
                                    children: "Show Password"
                                }, void 0, false, {
                                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-50 border border-red-200 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-600 font-medium",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 297,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "submit",
                            className: "w-full bg-black text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-300 text-base sm:text-lg",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: buttonText || 'Register'
                        }, void 0, false, {
                            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-500 font-semibold mt-4",
                    children: successMessage
                }, void 0, false, {
                    fileName: "[project]/web/components/OfficialRegisterForm.tsx",
                    lineNumber: 311,
                    columnNumber: 28
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/web/components/OfficialRegisterForm.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/web/components/OfficialRegisterForm.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
_s(OfficialRegisterForm, "HUPWELm+UpZny1SUwymFsr5qmg0=");
_c = OfficialRegisterForm;
var _c;
__turbopack_context__.k.register(_c, "OfficialRegisterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=web_bec1d96a._.js.map