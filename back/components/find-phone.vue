<template>
    <div class="layout-view">
        <h1>enter phone number:</h1>
        <div class="phone">
            <v-form ref="form" lazy-validation>
                <v-text-field
                        v-model="number"
                        label="phone number"
                        single-line
                        prepend-icon="fas fa-mobile"
                        color="blue darken-2"
                        mask="+# (###) ### - ## - ##"
                        hint="for example, 79009000101"
                        :rules="[
                          () => !!number || 'This field is required',
                          () => !!number && number.length >= 11 || 'phone number must be at least 11 digits',
                        ]"
                ></v-text-field>
            </v-form>
        </div>

        <div>
            <v-btn color="blue darken-2" flat="flat" @click.stop="clear"><v-icon class="mr-1">fas fa-times-circle</v-icon>clear</v-btn>
            <v-btn color="blue darken-2" flat="flat" @click.stop="find"><v-icon class="mr-1">fas fa-search</v-icon>find</v-btn>
        </div>

        <div>
            <component :is="out" :results="results"></component>
        </div>
    </div>
</template>

<style scoped>
    .layout-view {
        display: flex;
        justify-content: start;
        align-items: center;
        overflow: auto;
        height: 100%;
    }

    .layout-view {
        flex-direction: column;
    }

    .phone {
        width: 25%;
/*
        width: 50vw;
*/
    }

    .layout-view h1 {
        margin-top: 8px;
        margin-bottom: 8px;
    }

</style>

<script>
    module.exports = {
        extends: component,
        components: {
            'not-found-phone': httpVueLoader('not-found-phone'),
            'found-phone': httpVueLoader('found-phone'),
            'validation-error': httpVueLoader('validation-error'),
        },
        data() {
            return {
                number: '',
                results: '',
                out: ''
            }
        },
        methods: {
            find() {

                this.results = {
                    number: this.number,
                    owner: 'Mr. Joe Doe'
                };


                if (this.$refs.form.validate()) {

/*
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,
                        select: this.select,
                        checkbox: this.checkbox
                    });
*/

                    console.log(this.number);


                    this.out = this.number ? 'found-phone' : 'not-found-phone';
                }
                else this.out = this.number ? 'validation-error' : 'not-found-phone';
            },
            clear () {
                this.$refs.form.reset()
            }
        },
        watch: {
            'number': function () {
                this.out = '';
            }
        }
    }

    //# sourceURL=find-phone.js
</script>