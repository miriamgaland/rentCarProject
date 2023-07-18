export default function UserProfile({ user }) {
  return (
    <div>
      {!!user && (
        <>
          <h2 style={{height:"5vh"}}> Hi {user.name} </h2>
          <h2 style={{height:"5vh"}}>Balance: {user.balance} eth</h2>
        </>
      )}
    </div>
  );
}
