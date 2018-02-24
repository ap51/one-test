<template>
    <div class="layout-view pa-1">
        <h1>phones database:</h1>

        <div>
            <v-btn color="red darken-2" flat="flat" :disabled="selected.length === 0" @click.stop="remove"><v-icon class="mr-1 mb-1">fas fa-times</v-icon>remove selected</v-btn>
            <v-btn color="green darken-2" flat="flat" @click.stop="append"><v-icon class="mr-1 mb-1">fas fa-plus</v-icon>append phone</v-btn>
        </div>

        <v-data-table
                :headers="headers"
                :items="items"
                class="table elevation-1 mt-2 ma-1"
                :search="search"
                v-model="selected"
                item-key="number"
                select-all
                class="elevation-1"
                next-icon="fas fa-chevron-right"
                prev-icon="fas fa-chevron-left"
                sort-icon="fas fa-arrow-up"
                :pagination.sync="pagination"
        >
            <template slot="items" slot-scope="props">
                <tr @click="edit(props.item)">
                    <td>
                        <v-checkbox
                            primary
                            hide-details
                            v-model="props.selected"
                            color="blue darken-2"
                        ></v-checkbox>
                    </td>
                    <td>
                        <v-icon class="data-icon pb-1 mr-1">fas fa-mobile</v-icon>
                        {{ props.item.phone }}
                    </td>
                    <td>
                        <v-icon class="data-icon pb-1 mr-1">fas fa-user</v-icon>
                        {{ props.item.owner }}
                    </td>
                </tr>
            </template>
        </v-data-table>

        <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" :total-visible="pages"></v-pagination>
        </div>
    </div>
</template>

<style scoped>
    .layout-view {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: auto;
        height: 100%;
        flex-direction: column;
    }

    .table {
        width: 50vw;
    }

    .data-icon {
        font-size: 14px;
    }

</style>

<script>
    module.exports = {
        extends: component,
        data() {
            return {
                editedIndex: -1,
                editedItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0,
                    protein: 0
                },
                pagination: {
                    rowsPerPage: 10
                },
                search: '',
                selected: [],
                headers: [
                    {
                        text: 'Phone number',
                        value: 'phone',
                        sortable: false
                    },
                    {
                        text: 'Owner',
                        value: 'owner',
                        sortable: false
                    }
                ],
                rows: [
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                    {
                        number: 89991113344,
                        owner: 'mr. Joe Doe'
                    },
                    {
                        number: 92223334455,
                        owner: 'mr. Joe Black'
                    },
                ]
            }
        },
        computed: {
            items() {
                return this.rows.map(function(row) {
                    row.phone = (row.number + '').replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 - $4 - $5');
                    return row;
                });
            },
            pages () {
                if (this.pagination.rowsPerPage == null ||
                    this.pagination.totalItems == null
                )
                return 0;

                return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
            }

        },
        methods: {
            edit(item) {
                item.number = 79998886622;
                this.editedIndex = this.items.indexOf(item);
                this.editedItem = Object.assign({}, item);
            },
            remove() {
                console.log(this.pagination)
            }
        }
    }

    //# sourceURL=phones-database.js
</script>