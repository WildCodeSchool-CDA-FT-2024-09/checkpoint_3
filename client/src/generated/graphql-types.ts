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

export type ContinentsAndCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ContinentsAndCountriesQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, id: number }>, countries: Array<{ __typename?: 'Country', code: string, id: number, name: string }> };

export type CountryQueryVariables = Exact<{
  countryCode2: Scalars['String']['input'];
}>;


export type CountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', code: string, emoji: string, id: number, name: string, continent?: { __typename?: 'Continent', name: string } | null } };


export const ContinentsAndCountriesDocument = gql`
    query ContinentsAndCountries {
  continents {
    name
    id
  }
  countries {
    code
    id
    name
  }
}
    `;

/**
 * __useContinentsAndCountriesQuery__
 *
 * To run a query within a React component, call `useContinentsAndCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsAndCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsAndCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsAndCountriesQuery(baseOptions?: Apollo.QueryHookOptions<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>(ContinentsAndCountriesDocument, options);
      }
export function useContinentsAndCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>(ContinentsAndCountriesDocument, options);
        }
export function useContinentsAndCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>(ContinentsAndCountriesDocument, options);
        }
export type ContinentsAndCountriesQueryHookResult = ReturnType<typeof useContinentsAndCountriesQuery>;
export type ContinentsAndCountriesLazyQueryHookResult = ReturnType<typeof useContinentsAndCountriesLazyQuery>;
export type ContinentsAndCountriesSuspenseQueryHookResult = ReturnType<typeof useContinentsAndCountriesSuspenseQuery>;
export type ContinentsAndCountriesQueryResult = Apollo.QueryResult<ContinentsAndCountriesQuery, ContinentsAndCountriesQueryVariables>;
export const CountryDocument = gql`
    query Country($countryCode2: String!) {
  country(code: $countryCode2) {
    code
    continent {
      name
    }
    emoji
    id
    name
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
 *      countryCode2: // value for 'countryCode2'
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