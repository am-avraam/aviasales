import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { TicketTypes } from '../models/ITicket'

type InitResp = {
  searchId: string
}

type ListResp = {
  tickets: TicketTypes[]
  stop: boolean
}

type CombineResp = [string, ListResp]

export const ticketsAPI = createApi({
  reducerPath: 'ticketsAPI',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy' }),
  keepUnusedDataFor: 1,
  endpoints: (build) => ({
    getTicketList: build.query<CombineResp, string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        let id = ''
        if (!_arg) {
          let sessionId = await fetchWithBQ('/search')
          if (sessionId.error) sessionId = await fetchWithBQ('/search')

          const response = sessionId.data as InitResp
          id = response.searchId
        } else id = _arg

        const result = await fetchWithBQ(`/tickets?searchId=${id}`)

        return result.data ? { data: [id, result.data] as CombineResp } : { error: result.error as FetchBaseQueryError }
      },
    }),
  }),
})

export const { useGetTicketListQuery, useLazyGetTicketListQuery } = ticketsAPI
export type TicketsAPIState = ReturnType<typeof ticketsAPI.reducer>
