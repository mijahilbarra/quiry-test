<template >
<div class="container">
    <slot></slot>
</div>
</template>

<style scoped>
.container{
    width: 1000px;
    margin: 0 auto;
}
.container .fluid {
    width: 100%;
}

body{
    margin: 0
}
</style>