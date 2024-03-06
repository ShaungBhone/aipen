<template>
    <div class="pb-24">
        <div class="container mt-24">
            <h5 class="font-aipen text-indigo">Pricing</h5>
            <h2 class="font-aipen text-primary text-4xl mt-3">Simple, transparent pricing</h2>
            <p class="mt-5 text-secondary font-normal">We believe Untitled should be accessible to all companies, no
                matter
                the size.</p>
        </div>
        <!-- pricing card -->
        <div class="container mt-16 grid grid-cols-3 gap-8">
            <div class="text-center" v-for="item in card" :key="item.price">
                <div class="pt-10 pb-8 px-8 rounded-2xl shadow-lg border border-gray">
                    <h1 class="text-5xl text-primary font-semibold">{{ item.price }}/mth</h1>
                    <h4 class="text-xl text-primary font-semibold mt-4">{{ item.plan }} Plan</h4>
                    <h5 class="text-base font-normal text-primary mt-1">Billed annually.</h5>
                    <div class="mt-12">
                        <ul class="mt-3" v-for="(description, index) in item.description" :key="index">
                            <li class="flex items-center">
                                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#DCFAE6" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z"
                                        fill="#17B26A" />
                                </svg>
                                <h5 class="text-base text-secondary font-normal ml-3">{{ description }}</h5>
                            </li>
                        </ul>
                    </div>
                    <div class="py-3 bg-indigo rounded-lg mt-10">
                        <a class="font-aipen text-white" href="#">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const card = [
    {
        price: '$10', plan: 'Basic',
        description: [
            'Access to all basic features',
            'Basic reporting and analytics',
            'Up to 10 individual users',
            '20GB individual data each user',
            'Basic chat and email support'
        ]
    },
    {
        price: '$20', plan: 'Business', description: [
            '200+ integrations',
            'Advanced reporting and analytics',
            'Up to 20 individual users',
            '40GB individual data each user',
            'Priority chat and email support'
        ] },
    {
        price: '$40', plan: 'Enterprise', description: [
            'Advanced custom fields',
            'Audit log and data history',
            'Unlimited individual users',
            'Unlimited individual data',
            'Personalised+priotity service'
        ] },
]
</script>