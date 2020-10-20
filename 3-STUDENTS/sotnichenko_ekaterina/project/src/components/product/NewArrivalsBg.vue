<template>
    <div class="newArrivalsBg pb-5 pt-5">
        <div class="px-md-0 container d-flex flex-column flex-sm-row justify-content-between align-items-center ">
            <div class="newArrivals">New Arrivals</div>
            <div class="newArrivalsPath mt-4 mt-sm-0">
                <router-link :to="{name: 'Index'}">
                    <span>Home</span>
                </router-link>
                <router-link :to="{name: 'Product'}">
                    <span>men</span>
                </router-link>
                <router-link :to="{name: 'SinglePage'}">
                    <span>new arrivals</span>
                </router-link>
            </div>
        </div>
    </div>
</template>