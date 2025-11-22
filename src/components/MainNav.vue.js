import { onMounted, onUnmounted, onUpdated, ref } from "vue";
import { RouterLink } from "vue-router";
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const companyName = ref("Sabre Careers");
const author = ref({ firstName: "Geziel", lastName: "Carvalho" });
const demoUrl = "https://google.com";
const isLoggedIn = ref(false);
const toggleLogin = () => {
    isLoggedIn.value = !isLoggedIn.value;
};
const menuItems = [
    { name: "Teams", path: "/teams" },
    { name: "Location", path: "/location" },
    { name: "Life at Sabre", path: "/life-at-sabre" },
    { name: "How we hire", path: "/how-we-hire" },
    { name: "Students", path: "/students" },
    { name: "Jobs", path: "/jobs" },
    { name: "About", path: "/about" }
];
onMounted(() => {
    console.log("Component is mounted");
});
onUpdated(() => {
    console.log("Component is updated");
});
onUnmounted(() => {
    console.log("Component is unmounted");
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("fixed left-0 top-0 h-16 w-full bg-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto flex h-full flex-nowrap items-center justify-between border-b border-solid border-brand-gray-1 px-8 py-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-full items-center space-x-2 pl-8 text-lg") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("font-bold") }, to: ("/"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("font-bold") }, to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    (__VLS_ctx.companyName);
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex h-full list-none items-center space-x-4") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.name)), ...{ class: ("ml-9 first:ml-2") }, });
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ((item.path)), }));
        const __VLS_8 = __VLS_7({ to: ((item.path)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        (item.name);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    if (__VLS_ctx.isLoggedIn) {
        // @ts-ignore
        [ProfileImage,];
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(ProfileImage, new ProfileImage({ ...{ 'onClick': {} }, }));
        const __VLS_13 = __VLS_12({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        let __VLS_17;
        const __VLS_18 = {
            onClick: (__VLS_ctx.toggleLogin)
        };
        let __VLS_14;
        let __VLS_15;
        const __VLS_16 = __VLS_pickFunctionalComponentCtx(ProfileImage, __VLS_13);
    }
    else {
        // @ts-ignore
        [ActionButton,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(ActionButton, new ActionButton({ title: (('Sign In')), buttonClick: ((__VLS_ctx.toggleLogin)), }));
        const __VLS_20 = __VLS_19({ title: (('Sign In')), buttonClick: ((__VLS_ctx.toggleLogin)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("p-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.companyName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.author.firstName);
    (__VLS_ctx.author.lastName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("ml-2") }, href: ((__VLS_ctx.demoUrl)), });
    (__VLS_ctx.demoUrl);
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['flex-nowrap'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['border-b'];
    __VLS_styleScopedClasses['border-solid'];
    __VLS_styleScopedClasses['border-brand-gray-1'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['pl-8'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['list-none'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['ml-9'];
    __VLS_styleScopedClasses['first:ml-2'];
    __VLS_styleScopedClasses['p-16'];
    __VLS_styleScopedClasses['ml-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            ActionButton: ActionButton,
            ProfileImage: ProfileImage,
            companyName: companyName,
            author: author,
            demoUrl: demoUrl,
            isLoggedIn: isLoggedIn,
            toggleLogin: toggleLogin,
            menuItems: menuItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
