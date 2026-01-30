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
"[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409be50323aacaad76ff9d89c326937530b1d9d948":"registerUser"},"",""] */ __turbopack_context__.s([
    "registerUser",
    ()=>registerUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/lib/sanity.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__ = __turbopack_context__.i("[project]/web/node_modules/groq/lib/groq.js [app-rsc] (ecmascript) <export default as groq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function registerUser(formData) {
    const { name, username, email, password, questionnaireAnswers } = formData;
    if (!name || !username || !email || !password) {
        return {
            success: false,
            message: 'Missing required registration fields.'
        };
    }
    try {
        // --- Check if username already exists ---
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityClient"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "user" && username == $username][0]`, {
            username
        });
        if (existingUser) {
            return {
                success: false,
                message: 'Username is already taken. Please choose another.'
            };
        }
        // Hash the password for security
        const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Create the new user document
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$lib$2f$sanity$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityClient"].create({
            _type: 'user',
            name: name,
            username: username,
            email: email,
            hashedPassword: hashedPassword,
            questionnaireAnswers: JSON.stringify(questionnaireAnswers, null, 2)
        });
        return {
            success: true,
            message: 'Registration successful! Redirecting...',
            userId: newUser._id,
            redirect: '/privatehome'
        };
    } catch (error) {
        console.error('Error creating user in Sanity:', error);
        return {
            success: false,
            message: 'An unexpected error occurred during registration.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "409be50323aacaad76ff9d89c326937530b1d9d948", null);
}),
"[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7811a613549a81877dc0a9842b7f44fc269c2456bd":"markUserAsPaid"},"",""] */ __turbopack_context__.s([
    "markUserAsPaid",
    ()=>markUserAsPaid
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
async function markUserAsPaid(referralCode, userData, questionnaireAnswers, pendingUserId) {
    if (!process.env.SANITY_API_WRITE_TOKEN && !process.env.SANITY_API_TOKEN) {
        console.error('SANITY_API_WRITE_TOKEN is missing. Cannot perform write operations.');
        return {
            success: false,
            error: 'Server configuration error: Missing API Token'
        };
    }
    if (!referralCode) return {
        success: false,
        error: 'Referral code is required'
    };
    try {
        // 1. Find the referral code document
        const referral = await client.fetch(`*[_type == "referralCode" && code == $code][0]`, {
            code: referralCode
        });
        if (!referral) {
            // If code is invalid, we might still want to register the user, just not link them.
            // But for this logic, we return error or handle gracefully.
            return {
                success: false,
                error: 'Invalid referral code'
            };
        }
        // 2. Check if user already exists (by ID first, then email) to avoid duplicates.
        let existingUser = null;
        if (pendingUserId) {
            existingUser = await client.fetch(`*[_type == "user" && _id == $id][0]`, {
                id: pendingUserId
            });
        }
        if (!existingUser) {
            existingUser = await client.fetch(`*[_type == "user" && email == $email][0]`, {
                email: userData.email
            });
        }
        let userId = existingUser?._id;
        if (existingUser) {
            // Update existing user to premium
            await client.patch(existingUser._id).set({
                isPremium: true,
                ...userData,
                registeredAt: new Date().toISOString()
            }).commit();
        } else {
            // Create new user if they skipped the questionnaire or used a different email
            const newUser = await client.create({
                _type: 'user',
                ...userData,
                isPremium: true,
                questionnaireAnswers: questionnaireAnswers ? JSON.stringify(questionnaireAnswers) : undefined,
                createdAt: new Date().toISOString(),
                registeredAt: new Date().toISOString()
            });
            userId = newUser._id;
        }
        // Check if the user is currently in the pending list
        const isPending = referral.pendingUsers?.some((ref)=>ref._ref === userId);
        // 3. Link User to the Referral Code's "paidUsers" list
        let patch = client.patch(referral._id).setIfMissing({
            paidUsers: [],
            paidCount: 0
        }).append('paidUsers', [
            {
                _type: 'reference',
                _ref: userId,
                _key: Math.random().toString(36).substring(2, 15)
            }
        ]).inc({
            paidCount: 1
        });
        // If they were pending, remove them from pending list and decrement count
        if (isPending) {
            patch = patch.unset([
                `pendingUsers[_ref == "${userId}"]`
            ]).dec({
                pendingCount: 1
            });
        }
        await patch.commit({
            autoGenerateArrayKeys: true
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error in markUserAsPaid:', error);
        return {
            success: false,
            error: 'Failed to register paid user'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    markUserAsPaid
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markUserAsPaid, "7811a613549a81877dc0a9842b7f44fc269c2456bd", null);
}),
"[project]/web/.next-internal/server/app/offregester/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$registerUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPaid$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/web/.next-internal/server/app/offregester/page/actions.js { ACTIONS_MODULE0 => \"[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4035eb581071a67c6191a5a2a65c775c0109d3ff5f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateEmail"],
    "409be50323aacaad76ff9d89c326937530b1d9d948",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$registerUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUser"],
    "7811a613549a81877dc0a9842b7f44fc269c2456bd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPaid$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markUserAsPaid"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$offregester$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$registerUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPaid$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/web/.next-internal/server/app/offregester/page/actions.js { ACTIONS_MODULE0 => "[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$validateEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/validateEmail.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$registerUser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/registerUser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$app$2f$actions$2f$markUserAsPaid$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/app/actions/markUserAsPaid.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f161f8c6._.js.map