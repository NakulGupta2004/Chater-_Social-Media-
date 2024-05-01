const [dark, setDark] = useState({
    backgroundColor: 'black',
    color: 'white'})
  const[text,settext]=useState('DARK')
  const[invert,setinvert]=useState({
    filter:'invert(1)'
  })
  
  const change = () => {
    if (dark.color === 'white') {
      setDark({
        backgroundColor: 'white',
        color: 'black',
        borderColor:'black',
        
      });
      settext('DARK')
      setinvert({
        filter:'invert(0)'

      })
    } else {
      setDark({
        backgroundColor: 'black',
        color: 'white',
        borderColor:'grey',
        
        
      });
      setinvert({
        filter:'invert(1)'

      })
      settext('LIGHT')
    }
  };
  export default i