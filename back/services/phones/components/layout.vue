<template>
        <v-app ref="layout">
            <v-content>
                <v-toolbar color="red darken-2" dark dense>
                    <v-tabs color="red darken-2"
                            >

                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab v-for="tab in tabs"
                               :key="tab.name"
                               :to="tab.to || tab.name">

                            <v-icon class="mr-1 mb-1">{{ tab.icon}}</v-icon>

                            {{ tab.name }}
                        </v-tab>
                    </v-tabs>

                    <v-toolbar-items>
<!--
                        <v-btn flat @click="signin = true">
                            <v-icon class="mr-1 mb-1">fas fa-user-circle</v-icon>SIGN IN
                        </v-btn>
-->
                        <v-btn flat href="https://localhost:3001/provider/auth">
                            <v-icon class="mr-1 mb-1">fas fa-user-circle</v-icon>SIGN IN
                        </v-btn>

                    </v-toolbar-items>

                </v-toolbar>

                <signin :visible="signin" @cancel="signin = false" @signin="onSignIn"></signin>

                <v-card class="base-layout">
                    <keep-alive>
                        <component :is="location"></component>
                    </keep-alive>
                </v-card>

<!--
                <v-snackbar
                        :timeout="snackbar.timeout"
                        :color="snackbar.color"
                        :multi-line="snackbar.multiline"
                        :vertical="snackbar.vertical"
                        v-model="snackbar.visible"
                >
                    {{ snackbar.message }}
                    <v-btn dark flat @click.native="snackbar.visible = false">Close</v-btn>
                </v-snackbar>
-->
            </v-content>
        </v-app>


</template>

<style scoped>
    .base-layout {
        height: calc(100vh - 64px)!important;
        margin: 8px;
        border: 1px solid #ccc;
    }
    button i, a i {
        font-size: 17px;
    }
</style>

<script>
    module.exports = {
        extends: component,
        components: {
            'signin': httpVueLoader('signin')
        },
        data() {
            return {
                signin: false,
                tabs: [
                    {
                        name: 'about',
                        icon: 'far fa-question-circle'
                    },
                    {
                        name: 'find phone',
                        to: 'find-phone',
                        icon: 'fas fa-mobile'
                    },
                    {
                        name: 'phones db',
                        to: 'phones-database',
                        icon: 'fas fa-database'
                    }
                ]
            }
        },
        methods: {
            onSignIn(data) {
                console.log(data);
                this.signin = false
            }
        }
    }

    //# sourceURL=layout.js
</script>