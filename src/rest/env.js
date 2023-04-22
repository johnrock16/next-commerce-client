export const STRAPI_API_URL = 'http://localhost:1337/api';
export const STRAPI_URL = 'http://localhost:1337';

export const STRAPI_PATHS = {
    'faq': {
        path: '/faqs',
        config: {
            GET: {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        },
        resolveMethod: 'json'
    },
    'aboutUS': {
        path: '/about-us',
        config: {
            GET: {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        },
        resolveMethod: 'json'
    },
    'termsOfUse': {
        path: '/terms-of-use',
        config: {
            GET: {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        },
        resolveMethod: 'json'
    },
    'privacyPolicy': {
        path: '/privacy-policy',
        config: {
            GET: {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        },
        resolveMethod: 'json'
    },
    'products': {
        path: '/products?populate=*',
        config: {
            GET: {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }
        },
        resolveMethod: 'json'
    }
}

export const restAPI = async (api, path, defaultConfig = {method: 'GET'}) => {
    let config;
    let resolveMethod;
    switch(api) {
        case 'strapi': {
            config = [
                `${STRAPI_API_URL}${STRAPI_PATHS[path].path}`,
                {...STRAPI_PATHS[path].config[defaultConfig.method], ...defaultConfig},
            ]
            resolveMethod = STRAPI_PATHS[path].resolveMethod
        }
    }
    const resolve = await fetch(...config);
    const result = await resolve[resolveMethod]();
    return result;
}