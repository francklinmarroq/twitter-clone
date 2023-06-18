<template>
    <div class="h-screen flex flex-col">
        <NuxtLink to="/">
            <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </div>
        </NuxtLink>

        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                <template v-slot:icon>
                    <IconHome />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <IconSearch />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <IconMail />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <IconBell />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <IconUser />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>
        </div>
    </div>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig()
</script>
<style></style>