export default function UserProfile({ user }) {
  return (
    <div>
      {!!user && (
        <>
          <h2 style={{height:"5vh",marginTop:"0px"}}> Hi {user.name} </h2>
        </>
      )}
    </div>
  );
}
