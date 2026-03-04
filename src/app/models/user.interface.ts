export interface User {
  // Cria a interface do User, baseada nos dados da API
  id: number
  name: string
  username: string
  email: string
  address: {
    city: string
  }
  phone: string
  website: string
  company: {
    name: string
  }
}
