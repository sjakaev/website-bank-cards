
export default {
    mode: 'universal',
    target: 'server',
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        './assets/styles/general.scss',
    ],
    plugins: [
        {
            src : '~/plugins/vue-tiny-slider.js',
            ssr : false,
        },
    ],
    components: true,
    buildModules: [
        '@nuxtjs/style-resources',
    ],
    modules: [
        '@nuxtjs/axios',
        'nuxt-vue-multiselect',
    ],
    styleResources: {
        scss: ['~/assets/styles/variables.scss']
    },
    axios: {},
    build: {
    }
}
