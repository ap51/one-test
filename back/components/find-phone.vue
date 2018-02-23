<template>
    <div class="layout-view">
        <h1>enter phone number:</h1>
        <div class="phone">
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
        </div>
        <v-btn color="blue darken-2" flat="flat" @click.stop="find"><v-icon class="mr-1">fas fa-search</v-icon>find</v-btn>
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
        width: 20%;
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
        data() {
            return {
                number: ''
            }
        },
        methods: {
            find() {
                console.log(this.number);
            }
        }
    }

    //# sourceURL=find-phone.js
</script>