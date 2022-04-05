export default function Button({children, onClick, value}){
  return(
    <button className="bg-dmr-purple-light p-4 rounded-full" onClick={onClick} value={value}>
      {children}
    </button>
  )
}