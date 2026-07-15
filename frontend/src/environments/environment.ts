export const environment = {
    production: false,
    keycloak: {
        url: 'http://localhost:8080/auth/',
        realm: 'Blue_Fox_Group',
        clientId: 'blue-fox-aquariums-local',
    },
    blogApi: {
        blogId: '77e2c400-28ab-4add-b219-112233445566',
        urlBase: 'http://localhost:8081/',
        request: {
            post: 'api/v1/posts',
            category: 'api/v1/categories',
            author: 'api/v1/authors',
        } 
    },
};