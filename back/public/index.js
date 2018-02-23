let service = 'test';
let base = `/${service}/`;
let path = window.location.pathname.replace(base, '') || 'about';

let router = new VueRouter(
    {
        base,
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: 'about'
            },
            {
                path: '/*',
                components: {
                    'layout': httpVueLoader('layout'),
                    //'loader': httpVueLoader('loader'),
                },
                props: {
/*
                    'loader': function (route) {
                        return {
                            visible: Vue.prototype.$state.loading
                        }
                    }
*/
                },
                children: [
                    {
                        path: '/:name',
                    }
                ]

            }
        ],
    }
);

router.beforeEach(async function (to, from, next) {
    let path = to.params.name;

    httpVueLoader.register(Vue, path);

    window.vm && (window.vm.path = path);
    next();
});


axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

Vue.prototype.$request = async function(url, data) {
    url = url.replace('/index.vue', '');

    let config = {
        url: router.options.base + url,
        method: 'get',
/*
        headers: {
            'x-session': session || '',
            'path': JSON.stringify(path)
        }
*/
    };

    return axios(config)
        .then(async function(res) {
            return res.data;
        })
        .catch(function(err) {
            return Promise.reject(err);
        });
};

httpVueLoader.httpRequest = Vue.prototype.$request;

window.vm = new Vue({
    el: '#app',
    components: {
        //'layout': httpVueLoader('layout')
    },
    data: {
        path
    },
    router: router
});

