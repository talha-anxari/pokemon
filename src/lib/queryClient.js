import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient ({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minute tak data fresh mana jayega.
            gcTime: 1000 * 60 * 10, // Cache kitni der baad remove hoga.
            retry: 2, // API fail ho to 2 baar aur try karega.
            refetchOnWindowFocus: false, // Browser tab par wapas aane se unnecessary API call nahi hogi.
        },
    },
});