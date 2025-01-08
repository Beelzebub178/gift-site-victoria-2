<script setup>
    
</script>

<template>
    <div class="header">
        <img class="logo" src="./icons/logotip.png" alt="Logo">
        <nav class="menu">
            <ul >
                <li><a href="#">ГЛАВНАЯ</a></li>
                <li><a href="#">О КОМПАНИИ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped> 
.header {
    display: flex;
    position: relative;    
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.menu ul {
    display: flex;
    align-content: center;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    gap: 29px;
}

.menu ul a {
    text-decoration: none;
    color: black;
}





</style>