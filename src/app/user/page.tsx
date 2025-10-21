// Tipagem da resposta da API
type UserListProps = {
  id: number,
  name: string
}
// Aqui seria uma requisição feita para o banco de dados
async function FetchUser(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Alison'}
      ])
    }, 2000)
  })
}
// Aqui seria um arquivo que separado para fazer o fetch de usuários
async function UserData() {
  const userList = await FetchUser()
  return (
    <div>
      <p className="text-gray-300 mb-4">todos os usuários</p>
      {userList.map((user) => (
        <div key={user.id}>
          <p className="text-gray-200">
            {user.name}
          </p>
        </div>
      ))}
    </div>
  )
}
// Aqui seria o componente/page em si
export default function UserListProps() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center">
      <UserData />
    </div>
  )
}