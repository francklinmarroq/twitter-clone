<template>
    <div>
        <NuxtLink to="#" class="flex items-center py-3 px-6 w-min text-black hover:bg-gray-200 rounded-full dark:hover:bg-dim-200 dark:text-white" :class="defaultTransition">
            <div class="w-8 h-8 text-dark">
                <slot name="icon" />
            </div>

            <div class="ml-3 text-xl hidden xl:block" :class="textClasses">
                <slot name="name" />
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')

</script>