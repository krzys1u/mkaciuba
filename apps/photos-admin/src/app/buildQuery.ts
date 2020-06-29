import gql from 'graphql-tag';

const buildFieldList = (introspectionResults, resource, raFetchType) => {
    console.info(introspectionResults, resource, raFetchType )
}

export const buildQuery = introspectionResults => (raFetchType, resourceName, params) => {
    const resource = introspectionResults.resources.find(r =>{console.info('----', r.type.name, resourceName); return r.type.name === resourceName } );
    console.info('buildQuery', raFetchType, resourceName, params, resource)
    switch (raFetchType) {
        case 'GET_ONE':
            return {
                query: gql`query ${resource[raFetchType].name}($id: ID) {
                    data: ${resource[raFetchType].name}(id: $id) {
                        ${buildFieldList(introspectionResults, resource, raFetchType)}
                    }
                }`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
            }
            break;
        case 'GET_LIST':
            return {
                query: gql`query ${resource[raFetchType].name}() {
                    data: ${resource[raFetchType].name}() {
                        ${buildFieldList(introspectionResults, resource, raFetchType)}
                    }
                }`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
            }
            break;
    }
}