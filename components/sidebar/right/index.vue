<template>
    <div class="flex flex-col">
        <!-- What's happening -->
        <SidebarRightPreviewCard title="What's Happening">
            <SidebarRightPreviewCardItem v-for="item in whatsHappening">
                <div>
                    <h2 class="font-bond text-gray-800 text-md dark:text-white">{{ item.title }}</h2>
                    <p class="text-xs text-gray-400">{{ item.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="item in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="item.image" :alt="item.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ item.name }}</h1>
                            <p class="text-xs text-gray-400">{{ item.handle }}</p>
                        </div>
                    </div>

                    <div class="flex  h-full">
                        <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>

                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

    </div>
</template>

<script setup>
import { count } from 'console';

const whatsHappening = ref([
    {
        title: 'Alguien se comió mi torta',
        count: '15.8K Tweets'
    },
    {
        title: 'Se me fue la luz',
        count: '20.3K Tweets'
    },
    {
        title: 'Chabelo',
        count: '10.1K Tweets'
    }
])

const whoToFollowItems = ref([
    {
        name: 'Juan Orlando',
        handle: '@juanchi',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Xiomara Castro',
        handle: '@mamixiomi',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'ENEE',
        handle: '@nohayluz_hn',
        image: 'https://picsum.photos/200/200'
    },
])
</script>