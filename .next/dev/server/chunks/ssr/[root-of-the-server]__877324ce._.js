module.exports = [
"[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4035eb581071a67c6191a5a2a65c775c0109d3ff5f":"validateEmail"},"",""] */ __turbopack_context__.s([
    "validateEmail",
    ()=>validateEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function validateEmail(email) {
    if (!email) {
        return {
            isValid: false,
            message: 'Email is required.'
        };
    }
    // Basic format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            message: 'Please enter a valid email format.'
        };
    }
    const apiKey = process.env.EMAIL_VALIDATION_API_KEY;
    if (!apiKey) {
        console.warn('Email validation API key is not set. Skipping real-time check.');
        // If no API key is set, we'll just accept the format as valid.
        return {
            isValid: true,
            message: ''
        };
    }
    try {
        const response = await fetch(`https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
        const data = await response.json();
        // The Email Reputation API uses a 'quality_score'. We'll consider > 0.7 as valid.
        // It also returns an error object if the key is invalid.
        if (data.error) {
            console.error('Email validation API error:', data.error.message);
            return {
                isValid: false,
                message: 'Could not validate email. API error.'
            };
        }
        if (data.email_quality?.score && parseFloat(data.email_quality.score) > 0.7) {
            return {
                isValid: true,
                message: ''
            };
        } else {
            return {
                isValid: false,
                message: 'This email address does not appear to exist.'
            };
        }
    } catch (error) {
        console.error('Email validation API error:', error);
        // In case of an API error, we'll default to allowing the submission to proceed.
        return {
            isValid: true,
            message: ''
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    validateEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateEmail, "4035eb581071a67c6191a5a2a65c775c0109d3ff5f", null);
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/web/lib/sanity.server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanityClient",
    ()=>sanityClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
;
if (!process.env.SANITY_API_WRITE_TOKEN) {
    throw new Error('Missing SANITY_API_WRITE_TOKEN environment variable');
}
const sanityClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: 'r96iva8u',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN
});
}),
"[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409a181d46832a1c8d84705b73bb11b875d94f7d96":"submitContactForm"},"",""] */ __turbopack_context__.s([
    "submitContactForm",
    ()=>submitContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/lib/sanity.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function submitContactForm(formData) {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
        return {
            success: false,
            message: 'All fields are required.'
        };
    }
    try {
        // Create a new contact message document in Sanity
        const newMessage = await __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityClient"].create({
            _type: 'contactMessage',
            name: name,
            email: email,
            message: message
        });
        return {
            success: true,
            message: 'Message sent successfully!'
        };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitContactForm
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitContactForm, "409a181d46832a1c8d84705b73bb11b875d94f7d96", null);
}),
"[project]/web/.next-internal/server/app/join/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$submitContactForm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/web/.next-internal/server/app/join/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4035eb581071a67c6191a5a2a65c775c0109d3ff5f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateEmail"],
    "409a181d46832a1c8d84705b73bb11b875d94f7d96",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$submitContactForm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitContactForm"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$join$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$submitContactForm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/web/.next-internal/server/app/join/page/actions.js { ACTIONS_MODULE0 => "[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$submitContactForm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/submitContactForm.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__877324ce._.js.map