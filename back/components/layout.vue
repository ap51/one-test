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

                            <v-icon class="mr-1">{{ tab.icon}}</v-icon>

                            {{ tab.name }}
                        </v-tab>
                    </v-tabs>

                    <v-toolbar-items>
                        <v-btn flat @click="signin = true">
                            <v-icon class="mr-1">fas fa-user-circle</v-icon>SIGN IN
                        </v-btn>
                    </v-toolbar-items>

                </v-toolbar>

                <signin :visible="signin" @cancel="signin = false"></signin>
<!--
                <v-toolbar color="teal darken-4" dark>
                    &lt;!&ndash;<a><img src="images/logo.png" style="width: 100px; margin-right: 16px; margin-top: 4px"></a>&ndash;&gt;
                    <v-tabs >
                        <v-tabs-bar>
                            <v-tabs-item
                                    v-for="tab in tabs"
                                    :key="tab.name"
                                    :to="tab.to || tab.name"
                                    icon
                                    router
                                    scrollable="false">
                                {{ tab.name }}
                            </v-tabs-item>
                            <v-tabs-slider color="white"></v-tabs-slider>
                        </v-tabs-bar>
                    </v-tabs>


&lt;!&ndash;
                    <v-toolbar-items>
                        <v-btn flat v-if="$state.session.auth" to="profile"><v-icon right class="pr-2">fa-user-circle fa-lg</v-icon>{{$state.session.auth.email}}</v-btn>
                        <v-btn flat v-if="!$state.session.auth" to="signin"><v-icon class="pr-2">fa-sign-in fa-lg</v-icon>sign in</v-btn>
                        <v-btn flat v-if="$state.session.auth" to="signout"><v-icon right class="pr-2">fa-sign-out fa-lg</v-icon></v-btn>
                    </v-toolbar-items>
&ndash;&gt;

                </v-toolbar>
-->

                <v-card class="base-layout">
                    <keep-alive>
                        <component :is="component"></component>
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
        font-size: 20px;
    }
</style>

<script>
    module.exports = {
        props: [
            'component'
        ],
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
                    }
                ]
            }
        }
    }

    //# sourceURL=layout.js
</script>