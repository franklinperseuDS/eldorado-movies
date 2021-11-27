export default interface Filmes {
    status: string
    data: {
        id?: number
        name: string
        sinopse: string
        poster?: string
        ano_lancamento: string
        faturamento: string
        is_actived: boolean
        genero: string
        created_at: Date
        updated_at?: Date
        full_path: string
    }
}

