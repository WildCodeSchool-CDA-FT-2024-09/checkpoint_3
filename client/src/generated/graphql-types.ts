import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  countries: Array<Country>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String']['input'];
};

export type NewCountryInput = {
  code: Scalars['String']['input'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String']['input'];
};

export type AddCountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type AddCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', id: number, code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type AddContinentMutationVariables = Exact<{
  data: NewContinentInput;
}>;


export type AddContinentMutation = { __typename?: 'Mutation', addContinent: { __typename?: 'Continent', id: number, name: string, countries: Array<{ __typename?: 'Country', id: number, code: string, name: string, emoji: string }> } };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: number, code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', id: number, name: string } | null }> };

export type GetCountryByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type GetCountryByCodeQuery = { __typename?: 'Query', country: { __typename?: 'Country', id: number, code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', id: number, name: string } | null } };

export type GetAllContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string, countries: Array<{ __typename?: 'Country', id: number, code: string, name: string, emoji: string }> }> };


export const AddCountryDocument = gql`
    mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
    `;
export type AddCountryMutationFn = Apollo.MutationFunction<AddCountryMutation, AddCountryMutationVariables>;

/**
 * __useAddCountryMutation__
 *
 * To run a mutation, you first call `useAddCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCountryMutation, { data, loading, error }] = useAddCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCountryMutation(baseOptions?: Apollo.MutationHookOptions<AddCountryMutation, AddCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCountryMutation, AddCountryMutationVariables>(AddCountryDocument, options);
      }
export type AddCountryMutationHookResult = ReturnType<typeof useAddCountryMutation>;
export type AddCountryMutationResult = Apollo.MutationResult<AddCountryMutation>;
export type AddCountryMutationOptions = Apollo.BaseMutationOptions<AddCountryMutation, AddCountryMutationVariables>;
export const AddContinentDocument = gql`
    mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    id
    name
    countries {
      id
      code
      name
      emoji
    }
  }
}
    `;
export type AddContinentMutationFn = Apollo.MutationFunction<AddContinentMutation, AddContinentMutationVariables>;

/**
 * __useAddContinentMutation__
 *
 * To run a mutation, you first call `useAddContinentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContinentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContinentMutation, { data, loading, error }] = useAddContinentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddContinentMutation(baseOptions?: Apollo.MutationHookOptions<AddContinentMutation, AddContinentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContinentMutation, AddContinentMutationVariables>(AddContinentDocument, options);
      }
export type AddContinentMutationHookResult = ReturnType<typeof useAddContinentMutation>;
export type AddContinentMutationResult = Apollo.MutationResult<AddContinentMutation>;
export type AddContinentMutationOptions = Apollo.BaseMutationOptions<AddContinentMutation, AddContinentMutationVariables>;
export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  countries {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllCountriesQuery__
 *
 * To run a query within a React component, call `useGetAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
      }
export function useGetAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export function useGetAllCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export type GetAllCountriesQueryHookResult = ReturnType<typeof useGetAllCountriesQuery>;
export type GetAllCountriesLazyQueryHookResult = ReturnType<typeof useGetAllCountriesLazyQuery>;
export type GetAllCountriesSuspenseQueryHookResult = ReturnType<typeof useGetAllCountriesSuspenseQuery>;
export type GetAllCountriesQueryResult = Apollo.QueryResult<GetAllCountriesQuery, GetAllCountriesQueryVariables>;
export const GetCountryByCodeDocument = gql`
    query GetCountryByCode($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCountryByCodeQuery__
 *
 * To run a query within a React component, call `useGetCountryByCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryByCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryByCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryByCodeQuery(baseOptions: Apollo.QueryHookOptions<GetCountryByCodeQuery, GetCountryByCodeQueryVariables> & ({ variables: GetCountryByCodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(GetCountryByCodeDocument, options);
      }
export function useGetCountryByCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(GetCountryByCodeDocument, options);
        }
export function useGetCountryByCodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>(GetCountryByCodeDocument, options);
        }
export type GetCountryByCodeQueryHookResult = ReturnType<typeof useGetCountryByCodeQuery>;
export type GetCountryByCodeLazyQueryHookResult = ReturnType<typeof useGetCountryByCodeLazyQuery>;
export type GetCountryByCodeSuspenseQueryHookResult = ReturnType<typeof useGetCountryByCodeSuspenseQuery>;
export type GetCountryByCodeQueryResult = Apollo.QueryResult<GetCountryByCodeQuery, GetCountryByCodeQueryVariables>;
export const GetAllContinentsDocument = gql`
    query GetAllContinents {
  continents {
    id
    name
    countries {
      id
      code
      name
      emoji
    }
  }
}
    `;

/**
 * __useGetAllContinentsQuery__
 *
 * To run a query within a React component, call `useGetAllContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContinentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
      }
export function useGetAllContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
        }
export function useGetAllContinentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllContinentsQuery, GetAllContinentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllContinentsQuery, GetAllContinentsQueryVariables>(GetAllContinentsDocument, options);
        }
export type GetAllContinentsQueryHookResult = ReturnType<typeof useGetAllContinentsQuery>;
export type GetAllContinentsLazyQueryHookResult = ReturnType<typeof useGetAllContinentsLazyQuery>;
export type GetAllContinentsSuspenseQueryHookResult = ReturnType<typeof useGetAllContinentsSuspenseQuery>;
export type GetAllContinentsQueryResult = Apollo.QueryResult<GetAllContinentsQuery, GetAllContinentsQueryVariables>;