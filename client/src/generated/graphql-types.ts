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

export type ContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string }> };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', emoji: string, id: number, name: string }> };

export type CountryQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type CountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', name: string } | null } };

export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', emoji: string, id: number, name: string, code: string }> };

export type GetCountryByCodeQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type GetCountryByCodeQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', name: string } | null } };

export type AddCountryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  emoji: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type AddCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', id: number, name: string, emoji: string, code: string } };

export type AddNewCountryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  emoji: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type AddNewCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', name: string, emoji: string, code: string } };


export const ContinentsDocument = gql`
    query Continents {
  continents {
    id
    name
  }
}
    `;

/**
 * __useContinentsQuery__
 *
 * To run a query within a React component, call `useContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsQuery(baseOptions?: Apollo.QueryHookOptions<ContinentsQuery, ContinentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentsQuery, ContinentsQueryVariables>(ContinentsDocument, options);
      }
export function useContinentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentsQuery, ContinentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentsQuery, ContinentsQueryVariables>(ContinentsDocument, options);
        }
export function useContinentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ContinentsQuery, ContinentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContinentsQuery, ContinentsQueryVariables>(ContinentsDocument, options);
        }
export type ContinentsQueryHookResult = ReturnType<typeof useContinentsQuery>;
export type ContinentsLazyQueryHookResult = ReturnType<typeof useContinentsLazyQuery>;
export type ContinentsSuspenseQueryHookResult = ReturnType<typeof useContinentsSuspenseQuery>;
export type ContinentsQueryResult = Apollo.QueryResult<ContinentsQuery, ContinentsQueryVariables>;
export const CountriesDocument = gql`
    query Countries {
  countries {
    emoji
    id
    name
  }
}
    `;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export function useCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesSuspenseQueryHookResult = ReturnType<typeof useCountriesSuspenseQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
export const CountryDocument = gql`
    query Country($code: String!) {
  country(code: $code) {
    code
    emoji
    id
    name
    continent {
      name
    }
  }
}
    `;

/**
 * __useCountryQuery__
 *
 * To run a query within a React component, call `useCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCountryQuery(baseOptions: Apollo.QueryHookOptions<CountryQuery, CountryQueryVariables> & ({ variables: CountryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
      }
export function useCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export function useCountrySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountryQuery, CountryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CountryQuery, CountryQueryVariables>(CountryDocument, options);
        }
export type CountryQueryHookResult = ReturnType<typeof useCountryQuery>;
export type CountryLazyQueryHookResult = ReturnType<typeof useCountryLazyQuery>;
export type CountrySuspenseQueryHookResult = ReturnType<typeof useCountrySuspenseQuery>;
export type CountryQueryResult = Apollo.QueryResult<CountryQuery, CountryQueryVariables>;
export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  countries {
    emoji
    id
    name
    code
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
    code
    emoji
    id
    name
    continent {
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
export const AddCountryDocument = gql`
    mutation AddCountry($name: String!, $emoji: String!, $code: String!) {
  addCountry(data: {name: $name, emoji: $emoji, code: $code}) {
    id
    name
    emoji
    code
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
 *      name: // value for 'name'
 *      emoji: // value for 'emoji'
 *      code: // value for 'code'
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
export const AddNewCountryDocument = gql`
    mutation AddNewCountry($name: String!, $emoji: String!, $code: String!) {
  addCountry(data: {name: $name, emoji: $emoji, code: $code}) {
    name
    emoji
    code
  }
}
    `;
export type AddNewCountryMutationFn = Apollo.MutationFunction<AddNewCountryMutation, AddNewCountryMutationVariables>;

/**
 * __useAddNewCountryMutation__
 *
 * To run a mutation, you first call `useAddNewCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewCountryMutation, { data, loading, error }] = useAddNewCountryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      emoji: // value for 'emoji'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useAddNewCountryMutation(baseOptions?: Apollo.MutationHookOptions<AddNewCountryMutation, AddNewCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddNewCountryMutation, AddNewCountryMutationVariables>(AddNewCountryDocument, options);
      }
export type AddNewCountryMutationHookResult = ReturnType<typeof useAddNewCountryMutation>;
export type AddNewCountryMutationResult = Apollo.MutationResult<AddNewCountryMutation>;
export type AddNewCountryMutationOptions = Apollo.BaseMutationOptions<AddNewCountryMutation, AddNewCountryMutationVariables>;