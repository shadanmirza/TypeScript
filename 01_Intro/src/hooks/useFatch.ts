import { useEffect, useState } from "react";

interface FatchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null; 
}

const JSON_PLACEHOLDER_API = "https://jsonplaceholder.typicode.com";

export function useFatch<T>(url = `${JSON_PLACEHOLDER_API}/posts`): FatchState<T> {
    const [state, setState] = useState<FatchState<T>>({
        data: null,
        loading: false,
        error: null, 
    })

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            setState((current) => ({
                ...current,
                loading: true,
                error: null,
            }));

            try {
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                const data = (await response.json()) as T;
                setState({ data, loading: false, error: null });
            } catch (error) {
                if (controller.signal.aborted) return;

                setState((current) => ({
                    ...current,
                    loading: false,
                    error: error instanceof Error ? error.message : "An unexpected error occurred",
                }));
            }
        }

        void fetchData();

        return () => controller.abort();
    }, [url]);

    return state;
}
