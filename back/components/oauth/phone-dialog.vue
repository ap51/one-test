<template>
    <v-dialog v-model="visible" persistent max-width="500px">
        <v-card>
            <v-card-title>
                <v-icon class="mr-1">fas fa-mobile</v-icon>
                <span class="headline">phone</span>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field v-model="phone.number"
                                          label="Number"
                                          required
                                          prepend-icon="fas fa-mobile"
                                          autofocus
                                          color="blue darken-2"
                                          mask="+# (###) ### - ## - ##"
                                          hint="for example, 79009000101"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field v-model="phone.owner" label="Owner" required prepend-icon="fas fa-user" color="blue darken-2"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-2" flat @click.native="$emit('cancel')">cancel</v-btn>
                <v-btn color="blue darken-2" flat @click.native="$emit('save', phone)">save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>

</style>

<script>
    module.exports = {
        props: [
            'visible',
            'phone'
        ],
/*
        activated() {
            this.copy = {...this.phone};
        },
*/
        computed: {
            copy: {
                cache: false,
                get: function () {
                    return {...this.phone};
                }
            }
/*
            copy() {
                return {...this.phone};
            }
*/
        },
        methods: {
/*
            cancel() {
                this.$emit('cancel');
            },
            save() {
                let data = {
                    email: this.email,
                    password: md5(`${this.email}.${this.password}`)
                };
                this.$emit('signin', data);
            }
*/
        }
    }

    //# sourceURL=phone-dialog.js
</script>