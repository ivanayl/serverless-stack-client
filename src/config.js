const dev = {
  STRIPE_KEY: "pk_test_fxs6C8BycpN4o0t9gtW6CTzI00dwh3yw14",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-pzsye3nzfrau"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://46ay1wrpoh.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_lVaS4Dp4y",
    APP_CLIENT_ID: "l86njlk06ram187g2pr3c2bp6",
    IDENTITY_POOL_ID: "us-east-2:b157987b-55f4-41bf-8f9b-2123ca611994"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_fxs6C8BycpN4o0t9gtW6CTzI00dwh3yw14",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-146wyv9375lh9"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7352a224ge.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_0Wg6Mvitw",
    APP_CLIENT_ID: "pi4cichnh8ac7fk5tlp1rkbue",
    IDENTITY_POOL_ID: "us-east-2:9f1d2fc6-0d32-436e-97e1-b27f18b8a921"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};