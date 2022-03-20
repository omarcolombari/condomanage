export const CartDemand = ( { item } ) => {
  return (
    <>
      <p>{ item.name }</p>
      <p>{item.status === 'inProgress' ? 'verde' : 'vermelho'}</p>
    </>
  )
}