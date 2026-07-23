export const environment = {
    production: true,
    keycloak: {
        url: 'https://sso.bluefoxglobalgroup.com/auth/',
        realm: 'Blue_Fox_Global_Group',
        clientId: 'blue-fox-aquariums',
    },
    blogApi: {
        blogId: '77e2c400-28ab-4add-b219-112233445566',
        urlBase: 'https://api.blog.bluefoxglobalgroup.com/',
        request: {
            post: 'api/v1/posts',
            category: 'api/v1/categories',
            author: 'api/v1/authors'
        }
    }
};