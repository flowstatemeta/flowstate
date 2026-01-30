module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7015cbf86f85b7e801dd4fe3e7b779cbcf48ac014b":"markUserAsPending"},"",""] */ __turbopack_context__.s([
    "markUserAsPending",
    ()=>markUserAsPending
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "r96iva8u"),
    dataset: ("TURBOPACK compile-time value", "production"),
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN,
    useCdn: false
});
async function markUserAsPending(referralCode, answers, explicitName) {
    if (!process.env.SANITY_API_WRITE_TOKEN && !process.env.SANITY_API_TOKEN) {
        console.error('SANITY_API_WRITE_TOKEN is missing. Cannot perform write operations.');
        return {
            success: false,
            error: 'Server configuration error: Missing API Token'
        };
    }
    if (!referralCode) {
        return {
            success: false,
            error: 'Referral code is required'
        };
    }
    try {
        // 1. Find the referral code document
        const referral = await client.fetch(`*[_type == "referralCode" && code == $code][0]`, {
            code: referralCode
        });
        if (!referral) {
            return {
                success: false,
                error: 'Invalid referral code'
            };
        }
        // 2. Try to extract Name, Phone, Email from answers for better readability in Studio
        // (Since keys are dynamic UUIDs, we use heuristics to guess which field is which)
        let derivedName = explicitName || 'New Lead';
        let derivedPhone = '';
        let derivedEmail = '';
        Object.values(answers).forEach((val)=>{
            if (typeof val === 'string') {
                const v = val.trim();
                // Check for Email
                if (v.includes('@') && v.includes('.')) {
                    derivedEmail = v;
                } else if (/^[\d\+\-\s\(\)]{7,15}$/.test(v) && /\d/.test(v)) {
                    derivedPhone = v;
                } else if (!explicitName && /^[a-zA-Z\s]{2,50}$/.test(v) && !/\d/.test(v)) {
                    if (derivedName === 'New Lead') derivedName = v;
                }
            }
        });
        // 3. Create the User document
        const newUser = {
            _type: 'user',
            name: derivedName,
            email: derivedEmail,
            phoneNumber: derivedPhone,
            questionnaireAnswers: JSON.stringify(answers),
            isPremium: false,
            createdAt: new Date().toISOString(),
            questionnaireCompletedAt: new Date().toISOString()
        };
        const createdUser = await client.create(newUser);
        // 4. Link the new User to the Referral Code's pendingUsers array
        await client.patch(referral._id).setIfMissing({
            pendingUsers: [],
            pendingCount: 0
        }).append('pendingUsers', [
            {
                _type: 'reference',
                _ref: createdUser._id,
                _key: Math.random().toString(36).substring(2, 15) // Generate a random key
            }
        ]).inc({
            pendingCount: 1
        }).commit({
            autoGenerateArrayKeys: true
        });
        return {
            success: true,
            userId: createdUser._id
        };
    } catch (error) {
        console.error('Error in markUserAsPending:', error);
        return {
            success: false,
            error: 'Failed to save data. Please try again.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    markUserAsPending
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markUserAsPending, "7015cbf86f85b7e801dd4fe3e7b779cbcf48ac014b", null);
}),
"[project]/web/.next-internal/server/app/questionnaire/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPending$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)");
;
}),
"[project]/web/.next-internal/server/app/questionnaire/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "7015cbf86f85b7e801dd4fe3e7b779cbcf48ac014b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPending$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markUserAsPending"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$questionnaire$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPending$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/web/.next-internal/server/app/questionnaire/page/actions.js { ACTIONS_MODULE0 => "[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPending$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/markUserAsPending.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f32bb05b._.js.map