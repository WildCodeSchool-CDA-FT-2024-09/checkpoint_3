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


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', code: string, emoji: string, id: number, name: string }> };


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
    code
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