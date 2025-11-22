import { onMounted, computed, reactive } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// DATA
const data = reactive({
    isPrimary: true
});
// PROPS
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    buttonClick: {
        type: Function,
        default: () => { }
    }
});
// METHODS
const methods = {
    handleClick: () => {
        if (props.buttonClick) {
            props.buttonClick();
        }
    }
};
// COMPUTED
const comp = computed(() => {
    return {
        buttonClasses: () => {
            return {
                primary: data.isPrimary,
                secondary: !data.isPrimary
            };
        }
    };
});
// LIFECYCLE HOOKS
onMounted(() => {
    console.log("ActionButton is mounted");
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        buttonClick: {
            type: Function,
            default: () => { }
        }
    },
});
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.methods.handleClick) }, ...{ class: ((__VLS_ctx.comp.buttonClasses())) }, });
    (props.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
    (__VLS_ctx.data.isPrimary);
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
            data: data,
            methods: methods,
            comp: comp,
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        buttonClick: {
            type: Function,
            default: () => { }
        }
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        title: {
            type: String,
            required: true
        },
        buttonClick: {
            type: Function,
            default: () => { }
        }
    },
});
;
