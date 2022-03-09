const my_style = {
    
    position :"fixed",
    bottom:'0',
    left:'0',
    right:'0',
    textAlign:'center',
    background:'black',
    color:'white',
    display:'flex',
    justifyContent:'center',
    
    
}
const Footer = () => {
  return (
    <footer style={my_style}>
        <p>Copyright by Mustafa {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer