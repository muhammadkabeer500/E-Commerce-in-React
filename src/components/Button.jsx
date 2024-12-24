

export default function Button( Props ) {
  return (
  <button className={` font-medium rounded-xl bg-red-500 center text-white ${Props.className}`}  >{ Props.children }</button> 
  )
}
