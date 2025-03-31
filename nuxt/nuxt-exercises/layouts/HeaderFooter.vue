<template>
    <div>
        <header>
            <nav>Menu</nav>
        </header>
        <slot />
        <footer>Footer</footer>
    </div>
</template>

<style setup lang="scss">
    nav{
        background-color: black;
        color: white;
    }
    footer{
        background-color: black;
        color: white;
        margin-top: 1em;
    }
</style>