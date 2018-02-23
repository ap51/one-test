<template>
    <v-dialog v-model="visible" persistent max-width="500px">
        <v-card>
            <v-card-title>
                <v-icon class="mr-1">fas fa-user-circle</v-icon>
                <span class="headline">sign in</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field label="Email" required prepend-icon="fas fa-at" autofocus color="red darken-2"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Password" type="password" required prepend-icon="fas fa-key" color="red darken-2"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-2" flat @click.native="cancel()">cancel</v-btn>
                <v-btn color="red darken-2" flat @click.native="signin()">sign in</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>

</style>

<script>
    module.exports = {
        props: [
            'visible'
        ],
        data() {
            return {
            }
        },
        methods: {
            cancel() {
                this.$emit('cancel');
            },
            signin() {
                this.$emit('signin');
            }
        }
    }

    //# sourceURL=signin.js
</script>