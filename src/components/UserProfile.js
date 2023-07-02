export default function UserProfile({ user }) {
  return (
    <div className="shadiow-xl mt-32 p-10 text-gray-700 rounded-lg flex align-middle p-4 gap-2">
      {!!user && (
        <>
          <h2 className="text-2xl font-small"> Hi {"Roni Horwitz"} </h2>
          <h2>Balance: {user.balance} eth</h2>
        </>
      )}
    </div>
  );
}
