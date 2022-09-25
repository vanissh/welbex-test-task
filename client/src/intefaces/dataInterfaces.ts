export interface Filters {
    name: string,
    value: string,
    label: string
}
export interface Data {
    id: number,
    date: string,
    name: string,
    amount: string,
    distance: string
}

export interface DataState {
    data: Data[],
    loading: string,
    fields: Filters[],
    params: Filters[],
    page: number,
    limit: number,
    total: number,
    column: string,
    condition: string,
    value: string,
    label: string,
    sortedField: string,
    sortedValue: string
}

export interface Props {
    url: string,
    column?: string,
    condition?: string,
    value?: string,
    page?: number,
    limit?: number,
    sortedField?: string,
    sortedValue?: string,
}