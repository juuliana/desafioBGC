import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_QvHyanp7o',
    ClientId: '4f6m4v17h48bbcsqqbnlpmaq59'
};

export default new CognitoUserPool(poolData);