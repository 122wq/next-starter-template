
//Asynchronise due to promise of the id string
const UserDetails = async( {params}: {params: Promise<{id: string}>}) => {
    //need to wait params due to promise
    //type scrpt need to brackets in variables
    const {id} = await params;
  return (
    <div>User Information for #{id}</div>
  )
}

export default UserDetails