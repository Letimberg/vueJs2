<template>
    <v-navigation-drawer app>
        <v-toolbar flat>
            <v-list>
                <v-list-title>
                    <v-list-item-title class="title"> LOGO - PLANEJAH </v-list-item-title>
                </v-list-title>
            </v-list>
        </v-toolbar>
    
        <v-divider></v-divider>
    
        <v-list dense class="pt-0">
            <v-list-item v-for="item in itensMenu" :key="item.titulo" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            itensMenu: [
                { titulo: "Início", icon: "mdi-view-dashboard" },
                { titulo: "Sobre", icon: "mdi-forum" },

                { titulo: "Usuários", icon: "mdi mdi-account-multiple" },
                { titulo: "Usuários", icon: "mdi mdi-account-key" },
            ],
        };
    },
};
</script>
