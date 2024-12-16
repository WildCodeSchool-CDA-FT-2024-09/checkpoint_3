import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/schema/*.ts'],
  generates: {
    './src/generated/graphql-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        scalars: {
          DateTime: Date
        }
      }
    }
  },
  overwrite: true
};

export default config;
