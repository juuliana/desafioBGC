import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'sa-east-1_hM5dlD8wK',
    ClientId: '29rdtp1o3dsjgsmsf9cv49rbh2'
};

export default new CognitoUserPool(poolData);