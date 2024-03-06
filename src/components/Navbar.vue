<template>
    <Disclosure as="nav" v-slot="{ open }">
        <div class="container">
            <div class="relative flex py-[18px] items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:block">
                        <div class="flex space-x-5">
                            <a class="font-aipen" v-for="item in navigation" :key="item.name" :href="item.href" :class="[
        item.current ? 'text-secondary' : 'text-secondary hover:text-primary', 'rounded-md text-sm font-medium'
    ]" :aria-current="item.current ? 'page' : undefined">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="space-x-5">
                    <a href="#" class="font-aipen text-secondary">
                        Login
                    </a>
                    <a href="#" class="font-aipen text-white py-2.5 px-[18px] bg-indigo rounded-lg">
                        Sign up
                    </a>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Pricing', href: '#', current: false },
]
</script>